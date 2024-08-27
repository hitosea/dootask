<?php
use App\Module\Doo;
use App\Module\Base;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Migrations\Migration;

class SetPasswordToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // 更新现有用户的数据
        DB::table('users')->where('encrypt', '')->where('wecom_id', '<>', '')->get()->each(function ($user) {
            if (!$user->encrypt) {
                $encrypt = Base::generatePassword(6);
                $password = Doo::md5s($user->email . '2025#', $encrypt);
                DB::table('users')->where('userid', $user->userid)->update([
                    'encrypt' => $encrypt,
                    'password' => $password,
                    'changepass' => 0,
                ]);
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

    }
}
