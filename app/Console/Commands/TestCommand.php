<?php

namespace App\Console\Commands;

use App\Module\Plugin;
use App\Module\Files\Files;
use Illuminate\Console\Command;
use Stichoza\GoogleTranslate\GoogleTranslate;
use Symfony\Component\Console\Input\InputOption;

// 语言翻译
// ./cmd artisan test
class TestCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test {--text=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '测试';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $dockerCompos = Plugin::execute();
        dump($dockerCompos);

    }


}
