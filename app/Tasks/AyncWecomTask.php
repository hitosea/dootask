<?php

namespace App\Tasks;

use Carbon\Carbon;
use App\Services\WecomService;
use Illuminate\Support\Facades\Cache;

@error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);

class AyncWecomTask extends AbstractTask
{

    protected int $params = 0;

    public function __construct($params = 0)
    {
        $this->params = $params;
        parent::__construct();
    }

    public function start()
    {
        if ($this->params == 2) {
            WecomService::syncDeleteUser();
        } else {
            WecomService::synchronization();
        }
    }

    public function end()
    {
    }
}
