<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAssistToProjectUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('project_users', function (Blueprint $table) {
            $table->integer('assist')->default(0)->index()->comment('是否协助人')->after('owner');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('project_users', function (Blueprint $table) {
            $table->dropColumn('assist');
        });
    }
}
