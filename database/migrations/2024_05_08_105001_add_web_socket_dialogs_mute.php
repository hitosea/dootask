<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddWebSocketDialogsMute extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('web_socket_dialogs', function (Blueprint $table) {
            if (!Schema::hasColumn('web_socket_dialogs', 'mute')) {
                $table->integer('mute')->default(0)->comment('是否群禁言：0否，1是')->after('top_msg_id');
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
        Schema::table('web_socket_dialogs', function (Blueprint $table) {
            $table->dropColumn('mute');
        });
    }
}
