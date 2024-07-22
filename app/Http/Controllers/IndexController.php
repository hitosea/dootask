<?php

namespace App\Http\Controllers;

use Arr;
use Cache;
use Request;
use Redirect;
use Response;
use Carbon\Carbon;
use App\Module\Doo;
use App\Models\File;
use App\Models\User;
use App\Module\Base;
use App\Models\Project;
use App\Tasks\LoopTask;
use App\Module\Extranet;
use App\Tasks\AppPushTask;
use App\Module\RandomColor;
use App\Tasks\JokeSoupTask;
use App\Tasks\AyncWecomTask;
use App\Tasks\DeleteTmpTask;
use App\Models\UserDepartment;
use App\Tasks\EmailNoticeTask;
use App\Models\WebSocketDialog;
use App\Tasks\AutoArchivedTask;
use App\Tasks\DeleteBotMsgTask;
use App\Tasks\CheckinRemindTask;
use App\Tasks\CloseMeetingRoomTask;
use Hhxsv5\LaravelS\Swoole\Task\Task;
use App\Tasks\UnclaimedTaskRemindTask;
use Illuminate\Support\Facades\Config;
use Weeds\WechatWork\Facades\WechatWork;
use LasseRafn\InitialAvatarGenerator\InitialAvatar;


/**
 * 页面
 * Class IndexController
 * @package App\Http\Controllers
 */
class IndexController extends InvokeController
{
    public function __invoke($method, $action = '', $child = '')
    {
        $app = $method ?: 'main';
        if ($action) {
            $app .= "__" . $action;
        }
        if ($app == 'default') {
            return '';
        }
        if (!method_exists($this, $app)) {
            $app = method_exists($this, $method) ? $method : 'main';
        }
        return $this->$app($child);
    }

    /**
     * 首页
     * @return \Illuminate\Http\Response
     */
    public function main()
    {
        $code = Request::input('code', '');
        $isWxwork = strpos($_SERVER['HTTP_USER_AGENT'], 'wxwork') !== false;
        $wecomToken = Request::input('wecom_token', '');
        $setting = Base::setting('wecomSetting');
        // 有code参数就解释
        if (!$wecomToken && $isWxwork && $code) {
            if (!$setting) {
                return response()->view('wecom', ['error' => '未配置企微设置，请先前往配置！']);
            }
            //
            Config::set('wechatwork.corp_id', $setting['copr_id']);
            Config::set('wechatwork.agents.application.agent_id', $setting['agent_id']);
            Config::set('wechatwork.agents.contacts.secret', $setting['app_secret']);
            //
            $error = "";
            list($status, $accessToken) = WechatWork::access_token();
            if (!$status) {
                $error = "获取accessToken错误: " . $accessToken;
            }
            if (!$error) {
                list($status, $userinfo) = WechatWork::getCurl("https://qyapi.weixin.qq.com/cgi-bin/auth/getuserinfo?access_token=$accessToken&code=$code");
                if (!$status) {
                    $error = "授权code错误: " . $userinfo;
                } else if (!isset($userinfo['user_ticket'])) {
                    $error = "因你未同意授权，应用未能取得手机号，不能正常访问！";
                }
            }
            if (!$error) {
                list($status, $userdetail) = WechatWork::postCurl("https://qyapi.weixin.qq.com/cgi-bin/auth/getuserdetail?access_token=$accessToken", [
                    'user_ticket' => $userinfo['user_ticket']
                ]);
                if (!$status) {
                    $error = "获取user_ticket错误: " . $userdetail;
                } else if (!isset($userdetail['mobile'])) {
                    $error = "因你未同意授权，应用未能取得手机号，不能正常访问！";
                }
            }
            if (!$error) {
                list($status, $userDepartmentDetail) = WechatWork::user_get($userdetail['userid']);
                if (!$status) {
                    $error = "用户不存在: " . $userDepartmentDetail;
                }
            }
            if ($error) {
                return response()->view('wecom', ['error' => $error]);
            }
            // 创建用户 - 登录
            $email = ($userdetail['biz_mail'] ?? '')  ($userdetail['email'] ?? '') ?: $userdetail['mobile'].'@dootask.com';
            $alias = $userDepartmentDetail['alias'] ?? '';
            $user = User::where('tel', $userdetail['mobile'])->first();
            if (!$user) {
                $user = User::where('wecom_id', $userdetail['userid'])->first();
                if (!$user) {
                    $user = User::where('email', $email)->first();
                }
                if (!$user) {
                    try {
                        $user = Doo::userCreate($email, 'admin@dootask.com');
                    } catch (\Throwable $e) {
                        return response()->view('wecom', ['error' => $e->getMessage()]);
                    }
                    $user->created_ip = Base::getIp();
                    //
                    $dialog = WebSocketDialog::whereGroupType('all')->orderByDesc('id')->first();
                    $dialog?->joinGroup($user->userid, 0);
                }
            }
            if (in_array('disable', $user->identity)) {
                return response()->view('wecom', ['error' => '帐号已停用...']);
            }
            // 更新
            $user->wecom_id = $userdetail['userid'];
            $user->email = $email;
            $user->nickname = $userDepartmentDetail['name'] . ($alias ? " ($alias)" : '');
            $user->userimg = ($userdetail['avatar'] ?? '');
            $user->tel = ($userdetail['mobile'] ?? '');
            $user->sex = ($userdetail['gender'] ?? 0) == 1 ? 1 : 2;
            $user->department = Base::arrayImplode(UserDepartment::whereIn('wecom_id', $userDepartmentDetail['department'])->pluck('id')->toArray());
            $user->profession = $userDepartmentDetail['position'];
            $user->az = Base::getFirstCharter($userDepartmentDetail['name']);
            $user->pinyin = Base::cn2pinyin($userDepartmentDetail['name']);
            // 登录
            $user->login_num = $user->login_num + 1;
            $user->last_ip = Base::getIp();
            $user->last_at = Carbon::now();
            $user->line_ip = Base::getIp();
            $user->line_at = Carbon::now();
            $user->save();
            //
            User::generateToken($user);
            //
            if (!Project::withTrashed()->whereUserid($user->userid)->wherePersonal(1)->exists()) {
                Project::createProject([
                    'name' => Doo::translate('个人项目'),
                    'desc' => Doo::translate('注册时系统自动创建项目，你可以自由删除。'),
                    'personal' => 1,
                ], $user->userid);
            }
            //
            return redirect('/manage/dashboard?wecom_token=' . $user->token);
        } else if (!$wecomToken && $isWxwork) {
            return response()->view('wecom', [
                'error' => !$setting ? '未配置企微设置，请先前往配置！' : '',
                'corpid' => $setting['copr_id'],
                'agentid' =>$setting['agent_id'],
            ]);
        }
        //
        $hotFile = public_path('hot');
        $manifestFile = public_path('manifest.json');
        if (file_exists($hotFile)) {
            $array = Base::json2array(file_get_contents($hotFile));
            $style = null;
            $script = preg_replace("/^(\/\/(.*?))(:\d+)?\//i", "$1:" . $array['APP_DEV_PORT'] . "/", asset_main("resources/assets/js/app.js"));
        } else {
            $array = Base::json2array(file_get_contents($manifestFile));
            $style = asset_main($array['resources/assets/js/app.js']['css'][0]);
            $script = asset_main($array['resources/assets/js/app.js']['file']);
        }
        return response()->view('main', [
            'version' => Base::getVersion(),
            'style' => $style,
            'script' => $script,
        ]);
    }

    /**
     * 获取版本号
     * @return \Illuminate\Http\RedirectResponse
     */
    public function version()
    {
        return Redirect::to(Base::fillUrl('api/system/version'), 301);
    }

    /**
     * 头像
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function avatar()
    {
        $segment = Request::segment(2);
        if ($segment && preg_match('/.*?\.png$/i', $segment)) {
            $name = substr($segment, 0, -4);
        } else {
            $name = Request::input('name', 'H');
        }
        $size = Request::input('size', 128);
        $color = Request::input('color');
        $background = Request::input('background');
        //
        if (preg_match('/^[\x{4e00}-\x{9fa5}]+$/u', $name)) {
            $name = mb_substr($name, mb_strlen($name) - 2);
        }
        if (empty($color)) {
            $color = '#ffffff';
            $cacheKey = "avatarBackgroundColor::" . md5($name);
            $background = Cache::rememberForever($cacheKey, function() {
                return RandomColor::one(['luminosity' => 'dark']);
            });
        }
        //
        $avatar = new InitialAvatar();
        $content = $avatar->name($name)
            ->size($size)
            ->color($color)
            ->background($background)
            ->fontSize(0.35)
            ->autoFont()
            ->generate()
            ->stream('png', 100);
        //
        return response($content)
            ->header('Pragma', 'public')
            ->header('Cache-Control', 'max-age=1814400')
            ->header('Content-type', 'image/png')
            ->header('Expires', gmdate('D, d M Y H:i:s \G\M\T', time() + 1814400));
    }

    /**
     * 接口文档
     * @return \Illuminate\Http\RedirectResponse
     */
    public function api()
    {
        return Redirect::to(Base::fillUrl('docs/index.html'), 301);
    }

    /**
     * 系统定时任务，限制内网访问（1分钟/次）
     * @return string
     */
    public function crontab()
    {
        if (!Base::is_internal_ip(Base::getIp())) {
            // 限制内网访问
            return "Forbidden Access";
        }
        // 自动归档
        Task::deliver(new AutoArchivedTask());
        // 邮件通知
        Task::deliver(new EmailNoticeTask());
        // App推送
        Task::deliver(new AppPushTask());
        // 删除过期的临时表数据
        Task::deliver(new DeleteTmpTask('wg_tmp_msgs', 1));
        Task::deliver(new DeleteTmpTask('task_worker', 12));
        Task::deliver(new DeleteTmpTask('tmp'));
        Task::deliver(new DeleteTmpTask('file'));
        Task::deliver(new DeleteTmpTask('file_pack'));
        // 删除机器人消息
        Task::deliver(new DeleteBotMsgTask());
        // 周期任务
        Task::deliver(new LoopTask());
        // 签到提醒
        Task::deliver(new CheckinRemindTask());
        // 获取笑话/心灵鸡汤
        Task::deliver(new JokeSoupTask());
        // 未领取任务通知
        Task::deliver(new UnclaimedTaskRemindTask());
        // 关闭会议室
        Task::deliver(new CloseMeetingRoomTask());
        //
        return "success";
    }

    /**
     * 桌面客户端发布
     */
    public function desktop__publish($name = '')
    {
        $publishVersion = Request::header('publish-version');
        $fileNum = Request::get('file_num', 1);
        $latestFile = public_path("uploads/desktop/latest");
        $latestVersion = file_exists($latestFile) ? trim(file_get_contents($latestFile)) : "0.0.1";
        if (strtolower($name) === 'latest') {
            $name = $latestVersion;
        }
        // 上传
        if (preg_match("/^\d+\.\d+\.\d+$/", $publishVersion)) {
            $uploadSuccessFileNum  = (int)Cache::get($publishVersion, 0);
            $publishKey = Request::header('publish-key');
            if ($publishKey !== env('APP_KEY')) {
                return Base::retError("key error");
            }
            if (version_compare($publishVersion, $latestVersion) > -1) {    // 限制上传版本必须 ≥ 当前版本
                $publishPath = "uploads/desktop/{$publishVersion}/";
                $res = Base::upload([
                    "file" => Request::file('file'),
                    "type" => 'publish',
                    "path" => $publishPath,
                    "fileName" => true
                ]);
                if (Base::isSuccess($res)) {
                    file_put_contents($latestFile, $publishVersion);
                    $uploadSuccessFileNum = $uploadSuccessFileNum + 1;
                    Cache::set($publishVersion, $uploadSuccessFileNum, 7200);
                }
                if ($uploadSuccessFileNum >= $fileNum){
                    $directoryPath = public_path("uploads/desktop");
                    $files = array_filter(scandir($directoryPath), function($file) use($directoryPath) {
                        return preg_match("/^\d+\.\d+\.\d+$/", $file) && is_dir($directoryPath . '/' . $file) && $file != '.' && $file != '..';
                    });
                    sort($files);
                    foreach ($files as $key => $file) {
                        if ($file != $publishVersion && $key < count($files) - 2) {
                            Base::deleteDirAndFile($directoryPath . '/' . $file);
                        }
                    }
                }
                return $res;
            }
        }
        // 列表
        if (preg_match("/^\d+\.\d+\.\d+$/", $name)) {
            $path = "uploads/desktop/{$name}";
            $dirPath = public_path($path);
            $lists = Base::readDir($dirPath);
            $files = [];
            foreach ($lists as $file) {
                if (str_ends_with($file, '.yml') || str_ends_with($file, '.yaml') || str_ends_with($file, '.blockmap')) {
                    continue;
                }
                $fileName = Base::leftDelete($file, $dirPath);
                $fileSize = filesize($file);
                $files[] = [
                    'name' => substr($fileName, 1),
                    'time' => date("Y-m-d H:i:s", filemtime($file)),
                    'size' => $fileSize > 0 ? Base::readableBytes($fileSize) : 0,
                    'url' => Base::fillUrl($path . $fileName),
                ];
            }
            //
            return view('desktop', ['version' => $name, 'files' => $files]);
        }
        // 下载
        if ($name && file_exists($latestFile)) {
            $publishVersion = file_get_contents($latestFile);
            if (preg_match("/^\d+\.\d+\.\d+$/", $publishVersion)) {
                $filePath = public_path("uploads/desktop/{$publishVersion}/{$name}");
                if (file_exists($filePath)) {
                    return Response::download($filePath);
                }
            }
        }
        return abort(404);
    }

    /**
     * Drawio 图标搜索
     * @return array|mixed
     */
    public function drawio__iconsearch()
    {
        $query = trim(Request::input('q'));
        $page = trim(Request::input('p'));
        $size = trim(Request::input('c'));
        return Extranet::drawioIconSearch($query, $page, $size);
    }

    /**
     * 预览文件
     * @return array|mixed
     */
    public function online__preview()
    {
        $key = trim(Request::input('key'));
        //
        $data = parse_url($key);
        $path = Arr::get($data, 'path');
        $file = public_path($path);
        // 防止 ../ 穿越获取到系统文件
        if (!str_starts_with(realpath($file), public_path())) {
            abort(404);
        }
        //
        if (!file_exists($file)) {
            abort(404);
        }
        //
        parse_str($data['query'], $query);
        $name = Arr::get($query, 'name');
        $ext = strtolower(Arr::get($query, 'ext'));
        $userAgent = strtolower(Request::server('HTTP_USER_AGENT'));
        if ($ext === 'pdf') {
            // 文件超过 10m 不支持在线预览，提示下载
            if (filesize($file) > 10 * 1024 * 1024) {
                return view('download', [
                    'name' => $name,
                    'size' => Base::readableBytes(filesize($file)),
                    'url' => Base::fillUrl($path),
                    'button' => Doo::translate('点击下载'),
                ]);
            }
            // 浏览器类型
            $browser = 'none';
            if (str_contains($userAgent, 'chrome') || str_contains($userAgent, 'android_kuaifan_eeui')) {
                $browser = str_contains($userAgent, 'android_kuaifan_eeui') ? 'android-mobile' : 'chrome-desktop';
            } elseif (str_contains($userAgent, 'safari') || str_contains($userAgent, 'ios_kuaifan_eeui')) {
                $browser = str_contains($userAgent, 'ios_kuaifan_eeui') ? 'safari-mobile' : 'safari-desktop';
            }
            // electron 直接在线预览查看
            if (str_contains($userAgent, 'electron') || str_contains($browser, 'desktop')) {
                return Response::download($file, $name, [
                    'Content-Type' => 'application/pdf'
                ], 'inline');
            }
            // EEUI App 直接在线预览查看
            if (str_contains($userAgent, 'eeui') && Base::judgeClientVersion("0.34.47")) {
                if ($browser === 'safari-mobile') {
                    $redirectUrl = Base::fillUrl($path);
                    return <<<EOF
                        <script>
                            window.top.postMessage({
                                action: "eeuiAppSendMessage",
                                data: [
                                    {
                                        action: 'setPageData',
                                        data: {
                                            showProgress: true,
                                            titleFixed: true,
                                            urlFixed: true,
                                        }
                                    },
                                    {
                                        action: 'createTarget',
                                        url: "{$redirectUrl}",
                                    }
                                ]
                            }, "*")
                        </script>
                        EOF;
                }
            }
        }
        //
        if (in_array($ext, File::localExt)) {
            $url = Base::fillUrl($path);
        } else {
            $url = 'http://' . env('APP_IPPR') . '.3/' . $path;
        }
        $url = Base::urlAddparameter($url, [
            'fullfilename' => Base::rightDelete($name, '.' . $ext) . '_' . filemtime($file) . '.' . $ext
        ]);
        $redirectUrl = Base::fillUrl("fileview/onlinePreview?url=" . urlencode(base64_encode($url)));
        return Redirect::to($redirectUrl, 301);
    }

    /**
     * 保存配置 (todo 已废弃)
     * @return string
     */
    public function storage__synch()
    {
        return '<!-- Deprecated -->';
    }

    /**
     * 提取所有中文
     * @return array|string
     */
    public function allcn()
    {
        if (!Base::is_internal_ip(Base::getIp())) {
            // 限制内网访问
            return "Forbidden Access";
        }
        $list = Base::readDir(resource_path());
        $array = [];
        foreach ($list as $item) {
            $content = file_get_contents($item);
            preg_match_all("/\\\$L\((.*?)\)/", $content, $matchs);
            if ($matchs) {
                foreach ($matchs[1] as $text) {
                    $array[trim(trim($text, '"'), "'")] = trim(trim($text, '"'), "'");
                }
            }
        }
        return array_values($array);
    }

    /**
     * 提取所有中文
     * @return array|string
     */
    public function allcn__php()
    {
        if (!Base::is_internal_ip(Base::getIp())) {
            // 限制内网访问
            return "Forbidden Access";
        }
        $list = Base::readDir(app_path());
        $array = [];
        foreach ($list as $item) {
            $content = file_get_contents($item);
            preg_match_all("/(retSuccess|retError|ApiException)\((.*?)[,|)]/", $content, $matchs);
            if ($matchs) {
                foreach ($matchs[2] as $text) {
                    $array[trim(trim($text, '"'), "'")] = trim(trim($text, '"'), "'");
                }
            }
        }
        return array_values($array);
    }

    /**
     * 提取所有中文
     * @return array|string
     */
    public function allcn__all()
    {
        if (!Base::is_internal_ip(Base::getIp())) {
            // 限制内网访问
            return "Forbidden Access";
        }
        $list = array_merge(Base::readDir(app_path()), Base::readDir(resource_path()));
        $array = [];
        foreach ($list as $item) {
            if (Base::rightExists($item, ".php") || Base::rightExists($item, ".vue") || Base::rightExists($item, ".js")) {
                $content = file_get_contents($item);
                preg_match_all("/(['\"])(.*?)[\u{4e00}-\u{9fa5}\u{FE30}-\u{FFA0}]+([\s\S]((?!\n).)*)\\1/u", $content, $matchs);
                if ($matchs) {
                    foreach ($matchs[0] as $text) {
                        $tmp = preg_replace("/\/\/(.*?)$/", "", $text);
                        $tmp = preg_replace("/\/\/(.*?)\n/", "", $tmp);
                        $tmp = str_replace("：", "", $tmp);
                        if (!preg_match("/[\u{4e00}-\u{9fa5}\u{FE30}-\u{FFA0}]/u", $tmp)){
                            continue;  // 没有中文
                        }
                        $val = trim(trim($text, '"'), "'");
                        $array[md5($val)] = $val;
                    }
                }
            }
        }
        return implode("\n", array_values($array));
    }
}
