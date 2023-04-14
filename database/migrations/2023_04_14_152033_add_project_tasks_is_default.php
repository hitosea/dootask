<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddProjectTasksIsDefault extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('project_tasks', function (Blueprint $table) use (&$isAdd) {
            if (!Schema::hasColumn('project_tasks','is_default')) {
                $table->boolean('is_default')->default(0)->after('userid')->nullable()->comment('是否默认任务');
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('project_tasks', function (Blueprint $table) {
            $table->dropColumn("is_default");
        });
    }
}
