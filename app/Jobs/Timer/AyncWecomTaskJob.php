<?php

namespace App\Jobs\Timer;

use App\Services\WecomService;
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
        info("synchronization");
        WecomService::synchronization();
        // Task::deliver(new AyncWecomTask());
    }
}
