<?php

namespace App\Jobs\Timer;

use App\Services\WecomService;
use Hhxsv5\LaravelS\Swoole\Timer\CronJob;

class AyncWecomTaskJob extends CronJob
{
    protected $i = 0;
    // !!! 定时任务的`interval`和`isImmediate`有两种配置方式（二选一）：一是重载对应的方法，二是注册定时任务时传入参数。
    // --- 重载对应的方法来返回配置：开始
    public function interval()
    {
        return 5000; // 三秒更新
    }
    public function isImmediate()
    {
        return false; // 是否立即执行第一次，false则等待间隔时间后执行第一次
    }
    // --- 重载对应的方法来返回配置：结束
    public function run()
    {
        WecomService::synchronization();
        // Task::deliver(new AyncWecomTask());
    }
}
