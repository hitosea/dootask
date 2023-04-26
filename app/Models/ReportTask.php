<?php

namespace App\Models;

use App\Exceptions\ApiException;
use Carbon\Carbon;
use Carbon\Traits\Creator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use JetBrains\PhpStorm\Pure;

/**
 * App\Models\ReportTask
 *
 * @property int $id
 * @property int|null $task_id 任务ID
 * @property int|null $report_id 日报ID
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ReportReceive> $Receives
 * @property-read int|null $receives_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $receivesUser
 * @property-read int|null $receives_user_count
 * @property-read \App\Models\User|null $sendUser
 * @method static Builder|ReportTask newModelQuery()
 * @method static Builder|ReportTask newQuery()
 * @method static Builder|ReportTask query()
 * @method static Builder|ReportTask whereCreatedAt($value)
 * @method static Builder|ReportTask whereId($value)
 * @method static Builder|ReportTask whereReportId($value)
 * @method static Builder|ReportTask whereTaskId($value)
 * @method static Builder|ReportTask whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class ReportTask extends AbstractModel
{
    use HasFactory;

    protected $fillable = [
    ];

    protected $appends = [
    ];

    public function Receives(): HasMany
    {
        return $this->hasMany(ReportReceive::class, "rid");
    }

    public function receivesUser(): BelongsToMany
    {
        return $this->belongsToMany(User::class, ReportReceive::class, "rid", "userid")
            ->withPivot("receive_time", "read");
    }

    public function sendUser()
    {
        return $this->hasOne(User::class, "userid", "userid");
    }


}
