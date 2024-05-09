<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddWebSocketDialogUsersMute extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('web_socket_dialog_users', function (Blueprint $table) {
            if (!Schema::hasColumn('web_socket_dialog_users', 'mute')) {
                $table->integer('mute')->default(0)->comment('是否群禁言：0否，1是')->after('color');
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
        Schema::table('web_socket_dialog_users', function (Blueprint $table) {
            $table->dropColumn('mute');
        });
    }
}
