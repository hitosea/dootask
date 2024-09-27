<?php

namespace App\Models;

use App\Exceptions\ApiException;
use App\Module\Base;
use App\Module\Ihttp;

/**
 * App\Models\UserCheckinFace
 *
 * @property int $id
 * @property int|null $userid 会员id
 * @property string|null $faceimg 人脸图片
 * @property int|null $status 状态
 * @property string|null $remark 备注
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|UserCheckinFace newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserCheckinFace newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserCheckinFace query()
 * @method static \Illuminate\Database\Eloquent\Builder|UserCheckinFace whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserCheckinFace whereFaceimg($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserCheckinFace whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserCheckinFace whereRemark($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserCheckinFace whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserCheckinFace whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserCheckinFace whereUserid($value)
 * @mixin \Eloquent
 */
class UserCheckinFace extends AbstractModel
{

    public static function saveFace($userid, $nickname, $faceimg)
    {
        $faceFile = public_path($faceimg);
        $record = base64_encode(file_get_contents($faceFile));

        $url = 'http://' . env('APP_IPPR') . '.55' . ":7788/user";
        $data = [
            'name' => $nickname,
            'enrollid' => $userid,
            'admin' => 0,
            'backupnum' => 50,
            'record' => $record,
        ];
        
        $ret = Ihttp::ihttp_post($url, json_encode($data));
        
        return AbstractModel::transaction(function() use ($userid, $faceimg) {
            self::updateInsert([
                'userid' => $userid,
                'faceimg' => $faceimg,
                'status' => 1
            ]);

            return Base::retSuccess('上传成功');
        });
    }
}
