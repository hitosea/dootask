<?php

namespace App\Models;

use Illuminate\Support\Carbon;
use App\Exceptions\ApiException;

class ProjectApplie extends AbstractModel
{
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
        $applies = self::createInstance($data);
        $applies->save();
        // 推送提醒
        $depOwner = $user->getDepOwner();
        if( empty($depOwner->toArray()) ){
            $applies->updateStatus(1,"无部门负责人,自动通过");
        }else{
            $applies->appliesPush($depOwner);
        }
        // 
        return $applies;
    }

    /**
     * 审批提醒
     * @param $userids
     * @param int $type 0-新任务、1-即将超时、2-已超时、3-修改时间
     * @param string $suffix 描述后缀
     * @return void
     */
    public function appliesPush($userids)
    {
        
    }

    /**
     * 更新状态
     * @param $id
     * @param $status 状态 [1-通过,2-拒绝]
     * @param $reason 原因
     * @return void
     */
    public function updateStatus(int $status,$reason='')
    {
        $this->status = $status;
        $this->reason = $reason;
        $res = $this->save();
        // 更新任务时间
        if($res && $status == 1){
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
                if($open || $task->id ==  $this->task_id){
                    if($task->id == $this->task_id){
                        $open = true;
                        $ontask = $task;
                    }
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
        }
    }
}
