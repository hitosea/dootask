<?php

namespace App\Services;

use Cache;
use App\Module\Doo;
use App\Models\User;
use App\Module\Base;
use App\Models\UserDepartment;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
use Weeds\WechatWork\Facades\WechatWork;

class WecomService
{

    protected $setting;

    /**
     * 同步
     * @param Server $server
     * @param Request $request
     */
    public static function synchronization()
    {
        $setting = Base::setting('wecomSetting');
        if (!$setting) {
            return false;
        }
        //
        Config::set('wechatwork.corp_id', $setting['copr_id']);
        Config::set('wechatwork.agents.application.agent_id', $setting['agent_id']);
        Config::set('wechatwork.agents.contacts.secret', $setting['app_secret']);

        // 取得所有部门
        list($status, $result) = WechatWork::department_list();
        if (!$status) {
            info('WecomService同步部门错误：' . $result);
            return false;
        }
        $departmens = $result['department'] ?? [];
        usort($departmens, function ($a, $b) {
            return $a['id'] - $b['id'];
        });
        $departmens = array_column($departmens, null, 'id');

        // 取得所有用户
        $departmenUsers = [];
        foreach ($departmens as $department) {
            list($status, $result) = WechatWork::user_list($department['id']);
            if (!$status) {
                info('WecomService 同步用户错误：' . $result);
                return false;
            }
            $userlist = $result['userlist'] ?? [];
            foreach ($userlist as $user) {
                if (isset($departmenUsers[$user['userid']])) {
                    $user['department'] = array_unique(array_merge([$department['id']], $user['department'], $departmenUsers[$user['userid']]['department']));
                }
                $departmenUsers[$user['userid']] = $user;
            }
        }
        // 同步用户
        $departmenUsersIdKeys = array_keys($departmenUsers);
        // 删除用户
        // todo 因获取不到所有的用户，所以这删除逻辑暂时用不了
        // $deleteUserWecoms = User::whereBot(0)->where('wecom_id', '<>', '')->whereNotIn('wecom_id', $departmenUsersIdKeys)->get();
        // foreach ($deleteUserWecoms as $key=>$user) {
        //     $user->deleteUser('同步企业微信通讯录-已找不到当前用户');
        // }
        // 删除部门
        $deleteUserDepartmens = UserDepartment::where('wecom_id', '>', 0)->whereNotIn('wecom_id', array_keys($departmens))->get();
        foreach ($deleteUserDepartmens as $key => $userDepartment) {
            $userDepartment->deleteDepartment();
            Cache::forever("UserDepartment::rand", Base::generatePassword());
        }
        //
        $staySyncDepartmentUser = [];
        $license = Doo::license();
        $userCount = User::whereBot(0)->whereNull('disable_at')->count();
        $num = 999999999;
        if ($license['people'] > 0) {
            $num = $license['people'] - $userCount;
            if ($num < 0) {
                $num = 0;
            }
        }
        if ($num > 0) {
            $userWecoms = User::whereBot(0)->whereIn('wecom_id', $departmenUsersIdKeys)->get();
            $userWecomIds = array_column($userWecoms->toArray(), 'wecom_id');
            $addUsers = array_values(array_diff($departmenUsersIdKeys, $userWecomIds));
            // 添加用户
            foreach ($addUsers as $key => $uid) {
                if ($key < $num) {
                    $wUser = $departmenUsers[$uid];
                    $alias = $wUser['alias'] ?? '';
                    $user = User::createInstance();
                    $user->identity = '';
                    $user->userimg = '';
                    $user->wecom_id = $wUser['userid'];
                    $user->nickname = $wUser['name'] . ($alias ? " ($alias)" : '');
                    $user->tel = $wUser['telephone'];
                    $user->profession = $wUser['position'];
                    $user->az = Base::getFirstCharter($wUser['name']);
                    $user->pinyin = Base::cn2pinyin($wUser['name']);
                    // 设置密码
                    if (!$user->encrypt && $user->email) {
                        $user->encrypt = Base::generatePassword(6);
                        $user->password = Doo::md5s($user->email . '2025#', $user->encrypt);
                        $user->changepass = 0;
                    }
                    $user->save();
                    //
                    $departmenUsers[$uid]['_id'] = $user->userid;
                    $staySyncDepartmentUser[$uid] = $user;
                }
            }
            // 更新用户
            foreach ($userWecoms as $key => $user) {
                $wUser = $departmenUsers[$user->wecom_id];
                $alias = $wUser['alias'] ?? '';
                $user->nickname = $wUser['name'] . ($alias ? " ($alias)" : '');
                $user->profession = $wUser['position'];
                $user->az = Base::getFirstCharter($wUser['name']);
                $user->pinyin = Base::cn2pinyin($wUser['name']);
                if (!$user->identity) {
                    $user->identity = '';
                }
                if (!$user->userimg) {
                    $user->userimg = '';
                }
                // 设置密码
                if (!$user->encrypt && $user->email) {
                    $user->encrypt = Base::generatePassword(6);
                    $user->password = Doo::md5s($user->email . '2025#', $user->encrypt);
                    $user->changepass = 0;
                }
                $user->save();
                //
                $departmenUsers[$user->wecom_id]['_id'] = $user->userid;
                $staySyncDepartmentUser[$user->wecom_id] = $user;
            }
        }

        // 同步部门
        foreach ($departmens as $key => $department) {
            $data = [
                'wecom_id' => $department['id'],
                'wecom_parent_id' => $department['parentid'],
                'parent_id' => $department['parentid'] ? (UserDepartment::where('wecom_id', $department['parentid'])->value('id') ?: 0)  : 0,
                'owner_userid' => empty($department['department_leader']) ? 1  : (isset($departmenUsers[$department['department_leader'][0]]['_id']) ?: 1),
                'name' => $department['name'],
            ];
            //
            $userDepartment = UserDepartment::where('wecom_id', $department['id'])->first();
            if (empty($userDepartment)) {
                $userDepartment = UserDepartment::createInstance();
                $userDepartment->saveDepartment($data, $userDepartment->dialog_id ?: 0);
            } else {
                $userDepartment->updateInstance($data);
                $userDepartment->save();
            }
            //
            $departmens[$key]['_id'] = $userDepartment->id;
        }

        // 同步人员所属部门
        foreach ($staySyncDepartmentUser as $key => $user) {
            if ($wUser = $departmenUsers[$key] ?? '') {
                $department = [];
                foreach ($wUser['department'] as $departmentId) {
                    $department[] = $departmens[$departmentId]['_id'];
                }
                $user->department = Base::arrayImplode($department);
                $user->save();
            }
        }

        return true;
    }

    /**
     * 检测删除
     * @param Server $server
     * @param Request $request
     */
    public static function syncDeleteUser()
    {
        //  防止重复执行
        if (Cache::get("WECOMSERVICE-SYNCDELETEUSER")) {
            return false;
        }
        Cache::set("WECOMSERVICE-SYNCDELETEUSER", 1, 7200);
        //
        $setting = Base::setting('wecomSetting');
        if (!$setting) {
            Cache::delete("WECOMSERVICE-SYNCDELETEUSER");
            return false;
        }
        //
        if (!($setting['address_secret'] ?? '')) {
            Cache::delete("WECOMSERVICE-SYNCDELETEUSER");
            return false;
        }
        //
        Config::set('wechatwork.corp_id', $setting['copr_id']);
        Config::set('wechatwork.agents.application.agent_id', $setting['agent_id']);
        Config::set('wechatwork.agents.contacts.secret', $setting['address_secret']);
        //
        list($status, $accessToken) = WechatWork::access_token();
        if (!$status) {
            info('WecomService同步删除用户错误：获取accessToken错误');
            Cache::delete("WECOMSERVICE-SYNCDELETEUSER");
            return false;
        }
        // 取得所有用户
        $error = '';
        $getAll = function ($accessToken, $next = '') use (&$getAll, &$error) {
            $param = ['limit' => 10000];
            if ($next) $param['cursor'] = $next;
            list($status, $result) = WechatWork::postCurl("https://qyapi.weixin.qq.com/cgi-bin/user/list_id?access_token=$accessToken", $param);
            if (!$status) {
                $error = 'WecomService同步删除用户错误：' . $result;
                return false;
            }
            $userlist = $result['dept_user'] ?? [];
            if ($result['next_cursor'] ?? '') {
                $res = $getAll($accessToken, $result['next_cursor']);
                if (!$res) {
                    $userlist = [];
                } else {
                    $userlist = array_merge($userlist, $res);
                }
            }
            return $userlist;
        };
        if (!$userList = $getAll($accessToken)) {
            info($error);
            Cache::delete("WECOMSERVICE-SYNCDELETEUSER");
            return false;
        }
        // 删除
        $userIds = array_column($userList, 'userid');
        info('WecomService同步删除用户 - 当前取得用户数量：' . count($userIds));
        //
        User::whereBot(0)->where('wecom_id', '<>', '')->select(['userid', 'wecom_id'],)->chunk(100, function($users) use ($userIds) {
            foreach ($users as $user) {
                if (!in_array($user->wecom_id, $userIds)) {
                    $user->deleteUser('同步企业微信通讯录-已找不到当前用户');
                }
            }
        });
        //
        Cache::delete("WECOMSERVICE-SYNCDELETEUSER");
        return true;
    }

    /**
     * 发送文本消息
     *
     * @param $touser
     * @param $content
     * @param $toparty
     * @param $totag
     * @param $safe
     * @param $enable_duplicate_check
     * @param $duplicate_check_interval
     * @param $enable_id_trans
     * @return bool
     * @throws \Exception
     */
    public static function sendTextMessage($touser, $content, $toparty = '', $totag = '', $safe = 0, $enable_duplicate_check = 0, $duplicate_check_interval = 1800, $enable_id_trans = 0)
    {
        $setting = Base::setting('wecomSetting');
        if (!$setting) {
            return false;
        }
        //
        list($status, $token) = self::access_token('application', $setting['copr_id'], $setting['app_secret']);
        if (!$status) {
            Log::error('wecom-taskPush', ['msg' => "获取accessToken错误: " . $token]);
            return false;
        }

        $url = 'https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=' . $token;

        $json = [
            'agentid' => $setting['agent_id'],
            'msgtype' => 'text',
            'enable_duplicate_check' => $enable_duplicate_check,
            'duplicate_check_interval' => $duplicate_check_interval,
        ];
        if (!empty($touser)) $json['touser'] = implode('|', $touser);
        if (!empty($toparty)) $json['toparty'] = $toparty;
        if (!empty($totag)) $json['totag'] = $totag;

        $json['text'] = ['content' => $content];
        list($status, $errMsg) = WechatWork::postCurl($url, $json);
        if (!$status) {
            Log::error('wecom-taskPush', ['msg' => $errMsg]);
            return false;
        }
        return true;
    }

    /**
     * 获取企微AccessToken
     *
     * @param $agents
     * @param $corpId
     * @param $secret
     * @return array
     * @throws \Exception
     */
    public static function access_token($agents, $corpId, $secret): array
    {
        $accessTokenKey = 'WeedsWechat_access_token';
        $key = $accessTokenKey."-". $agents . '-' . ':' . $corpId . ':' . $secret;
        if (!cache($key)) {
            $array = [
                'corpid'        => $corpId,
                'corpsecret'    => $secret,
            ];
            $url = 'https://qyapi.weixin.qq.com/cgi-bin/gettoken?' . http_build_query($array);
            list($status, $re) = WechatWork::getCurl($url);
            if (!$status) {
                return [false, $re];
            }
            cache([$key=>$re['access_token']], $re['expires_in']);
        }
        return [true, cache($key)];
    }
}
