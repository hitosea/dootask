<?php

namespace App\Models;

use App\Module\Base;


/**
 * App\Models\ProjectTopAt
 *
 * @property int $id
 * @property int|null $project_id 项目ID
 * @property int|null $userid 用户ID
 * @property string|null $top_at 置顶时间
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTopAt newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTopAt newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTopAt query()
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTopAt whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTopAt whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTopAt whereProjectId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTopAt whereTopAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTopAt whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ProjectTopAt whereUserid($value)
 * @mixin \Eloquent
 */
class ProjectTopAt extends AbstractModel
{


}
