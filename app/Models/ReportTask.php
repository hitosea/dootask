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
