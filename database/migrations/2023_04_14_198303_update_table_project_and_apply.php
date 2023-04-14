<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateTableProjectAndApply extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // 更新项目表
        if (Schema::hasTable('projects')) {
            Schema::table('projects', function (Blueprint $table) {
                if (!Schema::hasColumn('projects', 'is_fixed')) {
                    $table->tinyInteger('is_fixed')->nullable()->default('0')->comment('是否固定')->after('archived_userid');
                }
            });
        }
        // 新增审核表
        if (!Schema::hasTable('project_applies')) {
            Schema::create('project_applies', function (Blueprint $table) {
                $table->bigIncrements('id')->unsigned();
                $table->bigInteger('project_id')->nullable()->default(0)->comment('项目ID');
                $table->bigInteger('task_id')->nullable()->default(0)->comment('任务ID');
                $table->bigInteger('userid')->nullable()->default(0)->comment('用户ID');
                $table->integer('days')->nullable()->default(0)->comment('申请天数');
                $table->string('reason', 255)->nullable()->default('')->comment('申请理由');
                $table->bigInteger('audit_userid')->nullable()->default(0)->comment('审核人');
                $table->string('status_reason', 255)->nullable()->default('')->comment('状态原因');
                $table->tinyInteger('status')->nullable()->default('0')->comment('状态 [0-待审核,1-通过,2-拒绝]');
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
        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn("is_fixed");
        });

        if (Schema::hasTable('project_applies')) {
            Schema::dropIfExists('project_applies');
        }
    }
}
