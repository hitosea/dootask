<?php

namespace App\Services;

use Cache;
use App\Module\Doo;
use App\Models\User;
use App\Module\Base;
use App\Models\UserDepartment;
use Illuminate\Support\Facades\Config;
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
            info('WecomService同步部门错误：'. $result);
            return false;
        }
        $departmens = $result['department'] ?? [];
        usort($departmens, function($a, $b) { return $a['id'] - $b['id']; });
        $departmens = array_column($departmens, null, 'id');

        // 取得所有用户
        $departmenUsers = [];
        foreach ($departmens as $department) {
            list($status, $result) = WechatWork::user_list($department['id']);
            if (!$status) {
                info('WecomService 同步用户错误：'. $result);
                return false;
            }
            $userlist = $result['userlist'] ?? [];
            foreach ($userlist as $user) {
                if (isset($departmenUsers[$user['userid']])) {
                    $user['department'] =array_unique(array_merge([$department['id']], $user['department'], $departmenUsers[$user['userid']]['department']));
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
        foreach ($deleteUserDepartmens as $key=>$userDepartment) {
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
            foreach ($addUsers as $key=>$uid) {
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
                    if (!$user->encrypt) {
                        $user->encrypt = Base::generatePassword(6);
                        $user->password = Doo::md5s('admin@dootask.com', $user->encrypt);
                        $user->changepass = 0;
                    }
                    $user->save();
                    //
                    $departmenUsers[$uid]['_id'] = $user->userid;
                    $staySyncDepartmentUser[$uid] = $user;
                }
            }
            // 更新用户
            foreach ($userWecoms as $key=>$user) {
                $wUser = $departmenUsers[$user->wecom_id];
                $alias = $wUser['alias'] ?? '';
                $user->nickname = $wUser['name'] . ($alias ? " ($alias)" : '');
                $user->profession = $wUser['position'];
                $user->az = Base::getFirstCharter($wUser['name']);
                $user->pinyin = Base::cn2pinyin($wUser['name']);
                if (!$user->identity) {
                    $user->identity ='';
                }
                if (!$user->userimg) {
                    $user->userimg ='';
                }
                // 设置密码
                if (!$user->encrypt) {
                    $user->encrypt = Base::generatePassword(6);
                    $user->password = Doo::md5s('admin@dootask.com', $user->encrypt);
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

}
