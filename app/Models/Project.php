<?php

namespace App\Models;

use App\Exceptions\ApiException;
use App\Module\Base;
use App\Tasks\PushTask;
use Arr;
use Carbon\Carbon;
use DB;
use Hhxsv5\LaravelS\Swoole\Task\Task;
use Illuminate\Database\Eloquent\SoftDeletes;
use Request;

/**
 * App\Models\Project
 *
 * @property int $id
 * @property string|null $name 名称
 * @property string|null $desc 描述、备注
 * @property int|null $userid 创建人
 * @property int|null $personal 是否个人项目
 * @property string|null $user_simple 成员总数|1,2,3
 * @property int|null $dialog_id 聊天会话ID
 * @property string|null $archived_at 归档时间
 * @property int|null $archived_userid 归档会员
 * @property int|null $is_fixed 是否固定
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read int $owner_userid
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ProjectColumn> $projectColumn
 * @property-read int|null $project_column_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ProjectLog> $projectLog
 * @property-read int|null $project_log_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ProjectUser> $projectUser
 * @property-read int|null $project_user_count
 * @method static \Illuminate\Database\Eloquent\Builder|Project allData($userid = null)
 * @method static \Illuminate\Database\Eloquent\Builder|Project authData($userid = null, $owner = null)
 * @method static \Illuminate\Database\Eloquent\Builder|Project newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Project newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Project onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Project query()
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereArchivedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereArchivedUserid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereDesc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereDialogId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereIsFixed($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project wherePersonal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereUserSimple($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project whereUserid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Project withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Project withoutTrashed()
 * @mixin \Eloquent
 */
class Project extends AbstractModel
{
    use SoftDeletes;

    protected $hidden = [
        'deleted_at',
    ];

    protected $appends = [
        'owner_userid',
    ];

    /**
     * 负责人会员ID
     * @return int
     */
    public function getOwnerUseridAttribute()
    {
        if (!isset($this->appendattrs['owner_userid'])) {
            $ownerUser = ProjectUser::whereProjectId($this->id)->whereOwner(1)->first();
            $this->appendattrs['owner_userid'] = $ownerUser ? $ownerUser->userid : 0;
        }
        return $this->appendattrs['owner_userid'];
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function projectColumn(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ProjectColumn::class, 'project_id', 'id')->orderBy('sort')->orderBy('id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function projectLog(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ProjectLog::class, 'project_id', 'id')->orderByDesc('id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function projectUser(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(ProjectUser::class, 'project_id', 'id')->orderBy('id');
    }

    /**
     * 查询所有项目（与正常查询多返回owner字段）
     * @param self $query
     * @param null $userid
     * @return self
     */
    public function scopeAllData($query, $userid = null)
    {
        $userid = $userid ?: User::userid();
        $query
            ->select([
                'projects.*',
                'project_users.owner',
                'project_users.top_at',
            ])
            ->leftJoin('project_users', function ($leftJoin) use ($userid) {
                $leftJoin
                    ->on('project_users.userid', '=', DB::raw($userid))
                    ->on('projects.id', '=', 'project_users.project_id');
            })
            ->where(function ($query) use ($userid) {
                $query->where('projects.personal', 0)->orWhere(function ($query) use ($userid) {
                    $query->where('projects.personal', 1)->where('projects.userid', $userid);
                });
            });
        return $query;
    }

    /**
     * 查询自己负责或参与的项目
     * @param self $query
     * @param null $userid
     * @param null $owner
     * @return self
     */
    public function scopeAuthData($query, $userid = null, $owner = null)
    {
        $user = User::auth();
        $userid = $userid ?: User::userid();
        $query
        ->select([
        'projects.*',
        'project_users.owner',
        'project_users.top_at',
        ])
        ->join('project_users', 'projects.id', '=', 'project_users.project_id')
        ->when(!$user->isAdmin(), function ($q) use ($user, $userid) {
            $q->where('project_users.userid', $userid);
            if ($user->isDepOwner()) {
                $depIds = UserDepartment::getOwnerDepIds($user);
                $userids = $user->getUserIdsByDepIds($depIds);
                $q->orWhere(function($q) use ($userids){
                $q->whereIn('projects.userid', $userids)
                    ->where('projects.personal', 0);
                });
            }
        })
        ->where(function ($query) use ($userid, $user){
            if($user->isAdmin() || $user->isDepOwner()){
                $query->where('projects.personal', 0);
            }
        });
        if ($owner !== null) {
            $query->where('project_users.owner', $owner);
        }
        return $query;
    }

    /**
     * 获取任务统计数据
     * @param $userid
     * @return array
     */
    public function getTaskStatistics($userid)
    {
        $array = [];
        $builder = ProjectTask::whereProjectId($this->id)->whereNull('archived_at');
        $array['task_num'] = $builder->count();
        $array['task_complete'] = $builder->whereNotNull('complete_at')->count();
        $array['task_percent'] = $array['task_num'] ? intval($array['task_complete'] / $array['task_num'] * 100) : 0;
        //
        $builder = ProjectTask::numData($userid, 1)->where('project_tasks.project_id', $this->id)->whereNull('project_tasks.archived_at');
        $builder = $builder->where('project_tasks.project_id', $this->id)->whereNull('project_tasks.archived_at');
        $array['task_my_num'] = $builder->count();
        $array['task_my_complete'] = $builder->whereNotNull('project_tasks.complete_at')->count();
        $array['task_my_percent'] = $array['task_my_num'] ? intval($array['task_my_complete'] / $array['task_my_num'] * 100) : 0;
        //
        return $array;
    }

    /**
     * 加入项目
     * @param int $userid   加入的会员ID
     * @return bool
     */
    public function joinProject($userid)
    {
        if (empty($userid)) {
            return false;
        }
        if (!User::whereUserid($userid)->exists()) {
            return false;
        }
        ProjectUser::updateInsert([
            'project_id' => $this->id,
            'userid' => $userid,
        ]);
        return true;
    }

    /**
     * 同步项目成员至聊天室
     */
    public function syncDialogUser()
    {
        if (empty($this->dialog_id)) {
            return;
        }
        AbstractModel::transaction(function() {
            $userids = $this->relationUserids();
            foreach ($userids as $userid) {
                WebSocketDialogUser::updateInsert([
                    'dialog_id' => $this->dialog_id,
                    'userid' => $userid,
                ], [
                    'important' => 1
                ]);
            }
            WebSocketDialogUser::whereDialogId($this->dialog_id)->whereNotIn('userid', $userids)->whereImportant(1)->remove();
        });
    }

    /**
     * 获取相关所有人员（项目负责人、项目成员）
     * @return array
     */
    public function relationUserids()
    {
        return ProjectUser::whereProjectId($this->id)->orderBy('id')->pluck('userid')->toArray();
    }

    /**
     * 会员id是否在项目里
     * @param int $userid
     * @return int 0:不存在、1存在、2存在且是管理员
     */
    public function useridInTheProject($userid)
    {
        $user = ProjectUser::whereProjectId($this->id)->whereUserid(intval($userid))->first();
        if (empty($user)) {
            return 0;
        }
        return $user->owner ? 2 : 1;
    }

    /**
     * 归档项目、取消归档
     * @param Carbon|null $archived_at 归档时间
     * @return bool
     */
    public function archivedProject($archived_at)
    {
        AbstractModel::transaction(function () use ($archived_at) {
            if ($archived_at === null) {
                // 取消归档
                $this->archived_at = null;
                $this->archived_userid = User::userid();
                $this->addLog("项目取消归档");
                $this->pushMsg('recovery', $this);
                ProjectTask::whereProjectId($this->id)->whereArchivedFollow(1)->change([
                    'archived_at' => null,
                    'archived_follow' => 0
                ]);
            } else {
                // 归档项目
                $this->archived_at = $archived_at;
                $this->archived_userid = User::userid();
                $this->addLog("项目归档");
                $this->pushMsg('archived');
                ProjectTask::whereProjectId($this->id)->whereArchivedAt(null)->change([
                    'archived_at' => $archived_at,
                    'archived_follow' => 1
                ]);
            }
            $this->save();
        });
        return true;
    }

    /**
     * 删除项目
     * @return bool
     */
    public function deleteProject()
    {
        AbstractModel::transaction(function () {
            $dialog = WebSocketDialog::find($this->dialog_id);
            $dialog?->deleteDialog();
            $columns = ProjectColumn::whereProjectId($this->id)->get();
            foreach ($columns as $column) {
                $column->deleteColumn(false);
            }
            $this->delete();
            $this->addLog("删除项目");
        });
        $this->pushMsg('delete');
        return true;
    }

    /**
     * 添加项目日志
     * @param string $detail
     * @param array $record
     * @param int $userid
     * @return ProjectLog
     */
    public function addLog($detail, $record = [], $userid = 0)
    {
        $array = [
            'project_id' => $this->id,
            'column_id' => 0,
            'task_id' => 0,
            'userid' => $userid ?: User::userid(),
            'detail' => $detail,
        ];
        if ($record) {
            $array['record'] = $record;
        }
        $log = ProjectLog::createInstance($array);
        $log->save();
        return $log;
    }

    /**
     * 推送消息
     * @param string $action
     * @param array|self $data      发送内容，默认为[id=>项目ID]
     * @param array $userid         指定会员，默认为项目所有成员
     */
    public function pushMsg($action, $data = null, $userid = null)
    {
        if ($data === null) {
            $data = ['id' => $this->id];
        } elseif ($data instanceof self) {
            $data = $data->toArray();
        }
        //
        $array = [$userid, []];
        if ($userid === null) {
            $array[0] = $this->relationUserids();
        } elseif (!is_array($userid)) {
            $array[0] = [$userid];
        }
        //
        if (isset($data['owner'])) {
            $owners = ProjectUser::whereProjectId($data['id'])->whereOwner(1)->pluck('userid')->toArray();
            $array = [array_intersect($array[0], $owners), array_diff($array[0], $owners)];
        }
        //
        foreach ($array as $index => $item) {
            if ($index > 0) {
                $data['owner'] = 0;
            }
            $params = [
                'ignoreFd' => Request::header('fd'),
                'userid' => array_values($item),
                'msg' => [
                    'type' => 'project',
                    'action' => $action,
                    'data' => $data,
                ]
            ];
            $task = new PushTask($params, false);
            Task::deliver($task);
        }
    }

    /**
     * 添加工作流
     * @param $flows
     * @return mixed
     */
    public function addFlow($flows)
    {
        return AbstractModel::transaction(function() use ($flows) {
            $projectFlow = ProjectFlow::whereProjectId($this->id)->first();
            if (empty($projectFlow)) {
                $projectFlow = ProjectFlow::createInstance([
                    'project_id' => $this->id,
                    'name' => 'Default'
                ]);
                if (!$projectFlow->save()) {
                    throw new ApiException('工作流创建失败');
                }
            }
            //
            $ids = [];
            $idc = [];
            $hasStart = false;
            $hasEnd = false;
            $upTaskList = [];
            foreach ($flows as $item) {
                $id = intval($item['id']);
                $turns = Base::arrayRetainInt($item['turns'] ?: [], true);
                $userids = Base::arrayRetainInt($item['userids'] ?: [], true);
                $usertype = trim($item['usertype']);
                $userlimit = intval($item['userlimit']);
                if ($usertype == 'replace' && empty($userids)) {
                    throw new ApiException("状态[{$item['name']}]设置错误，设置流转模式时必须填写状态负责人");
                }
                if ($usertype == 'merge' && empty($userids)) {
                    throw new ApiException("状态[{$item['name']}]设置错误，设置剔除模式时必须填写状态负责人");
                }
                if ($userlimit && empty($userids)) {
                    throw new ApiException("状态[{$item['name']}]设置错误，设置限制负责人时必须填写状态负责人");
                }
                $flow = ProjectFlowItem::updateInsert([
                    'id' => $id,
                    'project_id' => $this->id,
                    'flow_id' => $projectFlow->id,
                ], [
                    'name' => trim($item['name']),
                    'status' => trim($item['status']),
                    'sort' => intval($item['sort']),
                    'turns' => $turns,
                    'userids' => $userids,
                    'usertype' => trim($item['usertype']),
                    'userlimit' => $userlimit,
                ], [], $isInsert);
                if ($flow) {
                    $ids[] = $flow->id;
                    if ($flow->id != $id) {
                        $idc[$id] = $flow->id;
                    }
                    if ($flow->status == 'start') {
                        $hasStart = true;
                    }
                    if ($flow->status == 'end') {
                        $hasEnd = true;
                    }
                    if (!$isInsert) {
                        $upTaskList[$flow->id] = $flow->status . "|" . $flow->name;
                    }
                }
            }
            if (!$hasStart) {
                throw new ApiException('至少需要1个开始状态');
            }
            if (!$hasEnd) {
                throw new ApiException('至少需要1个结束状态');
            }
            ProjectFlowItem::whereFlowId($projectFlow->id)->whereNotIn('id', $ids)->chunk(100, function($list) {
                foreach ($list as $item) {
                    $item->deleteFlowItem();
                }
            });
            //
            foreach ($upTaskList as $id => $value) {
                ProjectTask::whereFlowItemId($id)->change([
                    'flow_item_name' => $value
                ]);
            }
            //
            $projectFlow = ProjectFlow::with(['projectFlowItem'])->whereProjectId($this->id)->find($projectFlow->id);
            $itemIds = $projectFlow->projectFlowItem->pluck('id')->toArray();
            foreach ($projectFlow->projectFlowItem as $item) {
                $turns = $item->turns;
                foreach ($idc as $oid => $nid) {
                    if (in_array($oid, $turns)) {
                        $turns = array_diff($turns, [$oid]);
                        $turns[] = $nid;
                    }
                }
                if (!in_array($item->id, $turns)) {
                    $turns[] = $item->id;
                }
                $turns = array_values(array_filter(array_unique(array_intersect($turns, $itemIds))));
                sort($turns);
                $item->turns = $turns;
                ProjectFlowItem::whereId($item->id)->update([ 'turns' => Base::array2json($turns) ]);
            }
            return $projectFlow;
        });
    }

    /**
     * 创建项目
     * @param $params
     * - name   项目名称
     * - desc
     * - flow
     * - personal
     * - columns
     * @return array
     */
    public static function createProject($params, $userid)
    {
        $name = trim(Arr::get($params, 'name', ''));
        $desc = trim(Arr::get($params, 'desc', ''));
        $flow = trim(Arr::get($params, 'flow', 'close'));
        $autoAddTask = trim(Arr::get($params, 'auto_add_task', 'close'));
        $startTime = trim(Arr::get($params, 'start_time'));
        $isPersonal = intval(Arr::get($params, 'personal'));
        $isFixed = intval(Arr::get($params, 'is_fixed'));
        if (mb_strlen($name) < 2) {
            return Base::retError('项目名称不可以少于2个字');
        } elseif (mb_strlen($name) > 32) {
            return Base::retError('项目名称最多只能设置32个字');
        }
        if (mb_strlen($desc) > 255) {
            return Base::retError('项目介绍最多只能设置255个字');
        }
        // 列表
        $columns = explode(",", Arr::get($params, 'columns'));
        $insertColumns = [];
        $sort = 0;
        foreach ($columns AS $column) {
            $column = trim($column);
            if ($column) {
                $insertColumns[] = [
                    'name' => $column,
                    'sort' => $sort++,
                ];
            }
        }
        if (empty($insertColumns)) {
            $insertColumns[] = [
                'name' => 'Default',
                'sort' => 0,
            ];
        }
        if (count($insertColumns) > 30) {
            return Base::retError('项目列表最多不能超过30个');
        }
        // 开始创建
        $project = Project::createInstance([
            'name' => $name,
            'desc' => $desc,
            'userid' => $userid,
        ]);
        if ($isPersonal) {
            if (Project::whereUserid($userid)->wherePersonal(1)->exists()) {
                return Base::retError('个人项目已存在，无须重复创建');
            }
            $project->personal = 1;
        }
        if ($isFixed) {
            $project->is_fixed = 1;
        }
        AbstractModel::transaction(function() use ($flow, $autoAddTask, $startTime, $insertColumns, $project, $userid) {
            $project->save();
            ProjectUser::createInstance([
                'project_id' => $project->id,
                'userid' => $project->userid,
                'owner' => 1,
            ])->save();

            // 添加工作流
            if ($flow == 'open') {
                $project->addFlow(Base::json2array('[{"id":-10,"name":"待处理","status":"start","turns":[-10,-11,-12,-13,-14],"userids":[],"usertype":"add","userlimit":0},{"id":-11,"name":"进行中","status":"progress","turns":[-10,-11,-12,-13,-14],"userids":[],"usertype":"add","userlimit":0},{"id":-12,"name":"待测试","status":"test","turns":[-10,-11,-12,-13,-14],"userids":[],"usertype":"add","userlimit":0},{"id":-13,"name":"已完成","status":"end","turns":[-10,-11,-12,-13,-14],"userids":[],"usertype":"add","userlimit":0},{"id":-14,"name":"已取消","status":"end","turns":[-10,-11,-12,-13,-14],"userids":[],"usertype":"add","userlimit":0}]'));
            }

            //
            $day = 0;
            $endTime = "";
            foreach ($insertColumns AS $column) {
                // 处理时间
                preg_match('/\d+D/', $column['name'], $matches);
                if($matches[0]){
                    $column['name'] = preg_replace('/\d+D/', '', $column['name']);
                    $day = $day + preg_replace('/\D/', '', $matches[0]);
                }else{
                    $day = $day + 1;
                }
                // 添加项目列
                $column['project_id'] = $project->id;
                $column = ProjectColumn::createInstance($column);
                $column->save();
                // 添加任务
                if($autoAddTask == "open"){
                    $start = $endTime ? $endTime : Carbon::parse($startTime)->toDateTimeString();
                    $endTime = Carbon::parse($startTime)->addDays($day)->toDateTimeString();
                    $setting = Base::setting('priority');
                    ProjectTask::addTask([
                        'parent_id' => 0,
                        'project_id' => $project->id,
                        'column_id' => $column->id,
                        'name' => $column->name,
                        'times' => [$start,$endTime],
                        'owner' => $userid,
                        'p_level' => $setting[0]['priority'],
                        'p_name' => $setting[0]['name'],
                        'p_color' => $setting[0]['color'],
                        'subtasks' => [],
                        'top' => 0,
                        'is_default' => 1
                    ]);
                }
            }
            //
            $dialog = WebSocketDialog::createGroup($project->name, $project->userid, 'project');
            if (empty($dialog)) {
                throw new ApiException('创建项目聊天室失败');
            }
            $project->dialog_id = $dialog->id;
            $project->save();
        });
        //
        $data = Project::find($project->id);
        $data->addLog("创建项目");
        $data->pushMsg('add', $data);
        // 加入上级部门用户
        $owner_userids = self::getMyDepartmentOwner();
        self::updateProjectUser($data, array_unique(array_merge($owner_userids, [$userid, 1])));
        return Base::retSuccess('添加成功', $data);
    }

    // 获取我名下所有部门负责人
    public static function getMyDepartmentOwner()
    {
        $owner_userid = [];
        // 获取用户所有的部门id
        $userid = User::userid();
        $user = User::whereUserid($userid)->first();
        $department = array_filter(array_unique($user->department ?? []));
        // 获取部门负责人owner_userid
        if($department){
            $dep = UserDepartment::whereIn('id', $department)->get()->toArray();
            // 遍历部门是否还有上级
            foreach ($dep as $key => $value) {
                $owner_userid[] = $value['owner_userid'];
                if($value['parent_id']){
                    $parent_id = $value['parent_id'];
                    while ($parent_id) {
                        $parent = UserDepartment::where('id', $parent_id)->first();
                        $owner_userid[] = $parent['owner_userid'];
                        $parent_id = $parent['parent_id'];
                    }
                }

            }
            $owner_userid = array_filter(array_unique($owner_userid));
            $owner_userid = array_diff($owner_userid, [$userid]);
        }
        return $owner_userid;
    }

    /**
     * 获取项目信息（用于判断会员是否存在项目内）
     * @param int $project_id
     * @param null|bool $archived true:仅限未归档, false:仅限已归档, null:不限制
     * @param null|bool $mustOwner true:仅限项目负责人, false:仅限非项目负责人, null:不限制
     * @return self
     */
    public static function userProject($project_id, $archived = true, $mustOwner = null, $isFixed = false)
    {
        $builder = User::auth()->isAdmin() ? self::allData() : self::authData();
        $pre = env('DB_PREFIX', '');
        $builder->selectRaw("IF({$pre}projects.is_fixed=1, DATE_ADD(NOW(), INTERVAL 1 YEAR), NULL) AS top_at");
        $project = $builder->where('projects.id', intval($project_id))->first();
        // 如果操作人是管理员或者部门负责人，有修改权限
        $mustOwner = UserDepartment::getOwnerUseridStatus(User::auth(), $project_id) ? null : $mustOwner;
        if (empty($project)) {
            throw new ApiException('项目不存在或不在成员列表内', [ 'project_id' => $project_id ], -4001);
        }
        if ($archived === true && $project->archived_at != null) {
            throw new ApiException('项目已归档', [ 'project_id' => $project_id ], -4001);
        }
        if ($archived === false && $project->archived_at == null) {
            throw new ApiException('项目未归档', [ 'project_id' => $project_id ]);
        }
        if ($mustOwner === true && !$project->owner) {
            throw new ApiException('仅限项目负责人操作', [ 'project_id' => $project_id ]);
        }
        if ($mustOwner === false && $project->owner) {
            throw new ApiException('禁止项目负责人操作', [ 'project_id' => $project_id ]);
        }
        if ($isFixed === true && $project->is_fixed == 1) {
            throw new ApiException('项目为固定项目不允许该操作', [ 'project_id' => $project_id ]);
        }
        return $project;
    }

    /**
     * 更新项目用户
     *
     * @param [type] $project
     * @param [type] $userid
     * @return object
     */
    public static function updateProjectUser($project, $userid)
    {
        //
        $deleteUser = AbstractModel::transaction(function() use ($project, $userid) {
            $array = [];
            foreach ($userid as $uid) {
                $uid = intval($uid);
                if ($project->joinProject($uid)) {
                    $array[] = $uid;
                }
            }
            $deleteRows = ProjectUser::whereProjectId($project->id)->whereNotIn('userid', $array)->get();
            $deleteUser = $deleteRows->pluck('userid');
            foreach ($deleteRows as $row) {
                $row->exitProject();
            }
            $project->syncDialogUser();
            $project->addLog("修改项目成员");
            $project->user_simple = count($array) . "|" . implode(",", array_slice($array, 0, 3));
            $project->save();
            return $deleteUser->toArray();
        });
        //
        $project->pushMsg('delete', null, $deleteUser);
        $project->pushMsg('detail');
        return $project;
    }
}
