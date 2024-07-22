<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddWecomIdToUserDepartmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_departments', function (Blueprint $table) {
            if (!Schema::hasColumn('user_departments', 'wecom_id')) {
                $table->integer('wecom_id')->nullable()->default(0)->after('owner_userid')->comment('企微id');
                $table->integer('wecom_parent_id')->nullable()->default(0)->after('wecom_id')->comment('企微父id');
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
        Schema::table('user_departments', function (Blueprint $table) {
            $table->dropColumn("wecom_id");
            $table->dropColumn("wecom_parent_id");
        });
    }
}
