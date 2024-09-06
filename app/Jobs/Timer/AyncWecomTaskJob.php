<?php

namespace App\Jobs\Timer;

use App\Tasks\AyncWecomTask;
use App\Services\WecomService;
use Hhxsv5\LaravelS\Swoole\Task\Task;
use Hhxsv5\LaravelS\Swoole\Timer\CronJob;

class AyncWecomTaskJob extends CronJob
{
    protected $i = 0;

    // --- 重载对应的方法来返回配置：开始
    public function interval()
    {
        return 1 * 60 * 1000;   // 1分钟开始
    }

    public function isImmediate()
    {
        return false; // 是否立即执行第一次，false则等待间隔时间后执行第一次
    }

    // --- 重载对应的方法来返回配置：结束
    public function run()
    {
        WecomService::synchronization();
        // 删除
        Task::deliver(new AyncWecomTask(2));
    }
}
