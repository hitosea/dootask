<?php

namespace App\Tasks;

use Carbon\Carbon;
use App\Services\WecomService;
use Illuminate\Support\Facades\Cache;

@error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

class AyncWecomTask extends AbstractTask
{
    public function __construct()
    {
        parent::__construct();
    }

    public function start()
    {
        // 10分钟执行一次
        $time = intval(Cache::get("AyncWecomTask:Time"));
        if (time() - $time < 600) {
            return;
        }
        Cache::put("AyncWecomTask:Time", time(), Carbon::now()->addMinutes(10));
        // 判断参数
        WecomService::synchronization();
    }

    public function end()
    {
    }
}
