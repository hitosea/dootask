<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectTopAtsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('project_top_ats')) {
            Schema::create('project_top_ats', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->bigInteger('project_id')->nullable()->default(0)->comment('项目ID');
                $table->bigInteger('userid')->nullable()->default(0)->comment('用户ID');
                $table->timestamp('top_at')->nullable()->comment('置顶时间');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_top_ats');
    }
}
