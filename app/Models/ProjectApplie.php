<?php

namespace App\Models;

use App\Tasks\PushTask;
use Illuminate\Support\Carbon;
use App\Exceptions\ApiException;
use Hhxsv5\LaravelS\Swoole\Task\Task;

/**
 * App\Models\ProjectApplie
 *
 * @property int $id
 * @property int|null $project_id 项目ID
 * @property int|null $task_id 任务ID
 * @property int|null $userid 用户ID
 * @property int|null $days 申请天数
 * @property string|null $reason 申请理由
 * @property int|null $audit_userid 审核人
 * @property string|null $status_reason 状态原因
 * @property int|null $status 状态 [0-待审核,1-通过,2-拒绝]
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property string|null $msg_id 消息ID
 * @property-read \App\Models\User|null $auditUser
 * @property-read \App\Models\Project|null $project
 * @property-read \App\Models\ProjectTask|null $projectTask
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectApplie newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectApplie newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectApplie query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectApplie whereAuditUserid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectApplie whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectApplie whereDays($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectApplie whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectApplie whereMsgId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectApplie whereProjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectApplie whereReason($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectApplie whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectApplie whereStatusReason($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectApplie whereTaskId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectApplie whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectApplie whereUserid($value)
 * @mixin \Eloquent
 */
class ProjectApplie extends AbstractModel
{
    /**
     * 关联用户
     *
     * @return object
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'userid', 'userid')->select(['userid', 'nickname', 'email']);
    }

    /**
     * 关联项目
     *
     * @return object
     */
    public function project()
    {
        return $this->belongsTo(Project::class, 'project_id', 'id')->select(['id', 'name']);
    }

    /**
     * 关联任务
     *
     * @return object
     */
    public function projectTask()
    {
        return $this->belongsTo(ProjectTask::class, 'task_id', 'id')->select(['id', 'name']);
    }

    /**
     * 关联审核人
     *
     * @return object
     */
    public function auditUser()
    {
        return $this->belongsTo(User::class, 'audit_userid', 'userid')->select(['userid', 'nickname', 'email']);
    }

    /**
     * 添加申请
     * @param $data
     * @return self
     */
    public static function add($user,$data)
    {
        if(self::where('task_id',$data['task_id'])->where('status',0)->exists()){
            throw new ApiException('已存在待处理的申请');
        }
        $depOwner = $user->getDepOwner();
        $depOwner = $depOwner->pluck('userid')->toArray(); //部门负责人单一
        $data['audit_userid'] = empty($depOwner) ? $user->userid : implode(',', $depOwner);
        $applies = self::createInstance($data);
        $applies->save();
        // 推送提醒
        if(empty($depOwner) || $user->userid == $data['audit_userid']){
            $applies->updateStatus($user, 1, "无部门负责人,自动通过");
        }else{
            $applies->appliesPush('project_reviewer', 'start', $applies, $depOwner);
        }
        //
        return $applies;
    }

    /**
     * 审批提醒
     * @param $userids
     * @return void
     */
    public function appliesPush($type, $action = '', $applies, $userids)
    {
        $botUser = User::botGetOrCreate('approval-alert');
        $toUsers = User::whereIn('userid', $userids)->get()->toArray();
        foreach ($toUsers as $toUser) {
            $dialog = WebSocketDialog::checkUserDialog($botUser, $toUser['userid']);
            //发送提醒
            $this->applyMsg($type, $action, $applies, $dialog, $botUser, $toUser);
        }
    }

    // 审批机器人消息
    public function applyMsg($type, $action = '', $applies, $dialog, $botUser, $toUser)
    {
        $project = Project::find($applies->project_id);
        $projectTask = ProjectTask::find($applies->task_id);
        // 更新审批 未读数量
        if($toUser['userid']){
            $params = [
                'userid' => [ $toUser['userid'], User::auth()->userid() ],
                'msg' => [
                    'type' => 'approve',
                    'action' => 'backlog',
                    'userid' => $toUser['userid'],
                ]
            ];
            Task::deliver(new PushTask($params, false));
        }
        // 发送消息
        $data = [
            'id' => $applies->id,
            'task_id' => $applies->task_id,
            'task_name' => $projectTask->name,
            'nickname' => User::userid2nickname($type == 'project_submitter' ? $applies->audit_userid : $applies->userid),
            'project_name' => $project->name,
            'days' => $applies->days, //申请天数
            'reason' => $applies->reason, //原因说明
            'created_at' => $applies->created_at,
        ];
        $text = preg_replace("/\n\x20+/", "\n", preg_replace("/^\x20+/", "", view('push.bot', ['type' => $type, 'action' => $action, 'data' => (object)$data])->render()));
        $msg_action = null;
        if ($type == 'project_reviewer' && ($action == 'pass' || $action == 'refuse')) {
            // 审核人即是负责人，更新推送
            $msg_id = array_filter(explode(',', $applies->msg_id));
            if (is_array($msg_id)) {
                foreach ($msg_id as $key => $value) {
                    $msg_action = 'update-'.$value;
                    $msg = WebSocketDialogMsg::sendMsg($msg_action, $dialog->id, 'text', ['text' => $text], $botUser->userid, false, false, true);
                }
            }
            return true;
        }
        $msg = WebSocketDialogMsg::sendMsg($msg_action, $dialog->id, 'text', ['text' => $text], $botUser->userid, false, false, true);
        // 保存会话关联信息
        if ($action == 'start') {
            // 在msg_id字段往后追加,逗号分隔
            $applies->msg_id = $applies->msg_id . $msg['data']->id . ',';
            $applies->save();
        }
        return true;
    }

    /**
     * 更新状态
     * @param User $user
     * @param $id
     * @param $status 状态 [1-通过,2-拒绝]
     * @param $reason 原因
     * @return void
     */
    public function updateStatus(User $user, int $status, $reason='')
    {
        // 操作用户是否为审核人
        if($user->userid != $this->audit_userid){
            throw new ApiException('无权限操作');
        }
        $this->status = $status;
        $this->status_reason = $reason;
        $res = $this->save();
        // 更新任务时间
        if($res && $status == 1){

            // 1 - 自动生成的任务
            $tasks = ProjectTask::where("project_id",$this->project_id)->where("is_default",1)->get();
            $columnIds = ProjectColumn::whereIn("id", array_column($tasks->toArray(),'column_id') )->orderBy("sort")->pluck("id");
            // 排序
            $arrTasks = [];
            foreach($columnIds as $columnId){
                foreach($tasks as $task){
                    if($task->column_id == $columnId){
                        $arrTasks[] = $task;
                    }
                }
            }
            //
            $open = false;
            $ontask = null;
            foreach($arrTasks as $task){
                if($task->id == $this->task_id){
                    $open = true;
                    $ontask = $task;
                }
                if($open){
                    $task->end_at = Carbon::parse($task->end_at)->addDays($this->days)->toDateTimeString();
                    if($task->id != $this->task_id){
                        $task->start_at = Carbon::parse($task->start_at)->addDays($this->days)->toDateTimeString();
                    }
                    //
                    $task->updateTask([
                        'task_id'=>$task->id,
                        'times'=>[ $task->start_at, $task->end_at, $task->id == $this->task_id ? "申请延期" : "任务【{$ontask->name}】申请延期" ]
                    ]);
                }
            }

            // 2 - 非自动生成的任务
            $task = ProjectTask::whereId($this->task_id)->where("is_default",0)->first();
            if($task){
                $task->end_at = Carbon::parse($task->end_at)->addDays($this->days)->toDateTimeString();
                $task->updateTask([
                    'task_id'=>$task->id,
                    'times'=>[ $task->start_at, $task->end_at, "申请延期" ]
                ]);
            }
        }

        // 审核人即是负责人，推送提醒
        $applies = $this;
        $updateUser = [$user->userid];
        $action = $status == 1 ? 'pass' : 'refuse';
        $this->appliesPush('project_reviewer', $action, $applies, $updateUser);
        // 给发起人推送提醒
        $toUser = [$this->userid];
        $this->appliesPush('project_submitter', $action, $applies, $toUser);
    }
}
