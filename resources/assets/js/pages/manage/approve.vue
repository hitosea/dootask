<template>
<div class="page-approve">
    <PageTitle :title="$L('审批')"/>
    <div class="approve-wrapper" ref="fileWrapper">

        <div class="approve-head">
            <div class="approve-nav">
                <h1>{{$L('审批')}}</h1>

            </div>
        </div>

        <div class="approve-search">
            <Select
                v-model="project"
                filterable
                clearable
                :remote-method="remoteMethod"
                @on-query-change="remoteMethodClear"
                @on-change="getLists"
                :placeholder="$L('请选择项目名称')"
                :loading="loadIng > 0">
                <Option v-for="(option, index) in projectList" :value="option.id" :key="index">{{option.name}}</Option>
                <div v-if="next_page_url!=null" @click="moreProject" style="text-align: center;padding: 8px 0;cursor: pointer;color:#8bcf70;" slot="drop-append">{{$L('点击查看更多')}}</div>
            </Select>

            <Input v-model="searchKey"  suffix="ios-search" @on-change="getLists" :placeholder="$L('请输入任务名称')"/>
        </div>

        <div class="approve-table">
            <div class="table-page-box">
                <Table
                    :columns="columns"
                    :data="lists"
                    :loading="loadIng > 0"
                    :no-data-text="$L(noDataText)"
                    stripe/>
                <Page
                    :total="listTotal"
                    :current="listPage"
                    :page-size="listPageSize"
                    :disabled="loadIng > 0"
                    simple
                    :page-size-opts="[10,20,30,50,100]"
                    show-elevator
                    show-sizer
                    show-total
                    @on-change="setPage"
                    @on-page-size-change="setPageSize"/>
            </div>
        </div>

    </div>

    <!-- 申请延期 -->
    <Modal v-model="refuseShow" :title="$L('拒绝申请')" :mask-closable="false">
        <Form ref="addDelay" :model="formData" :rules="refuseRule" label-width="auto" @submit.native.prevent>
            <FormItem prop="refuseReason" :label="$L('拒绝原因')" style="margin-bottom:10px;">
                <Input type="textarea" v-model="formData.refuseReason"></Input>
            </FormItem>
        </Form>
        <div slot="footer" class="adaption">
            <Button type="default" @click="cancel">{{$L('取消')}}</Button>
            <Button type="primary" :loading="loadIng > 0" @click="refuse">{{$L('确定')}}</Button>
        </div>
    </Modal>
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "approve",
    computed:{
        ...mapState(['userId']),
    },
    data(){
        return{
            searchKey:'',
            columns: [
                {
                title: this.$L("项目名称"),
                width: 120,
                render:(h, {row})=>{
                    return h('span',row.project?.name || '')
                },
            }, {
                title: this.$L("任务名称"),
                align: 'center',
                width: 120,
                render:(h, {row})=>{
                    return h('span',row.project_task?.name || '')
                },
            },
                {
                title: this.$L("发起人"),
                align: 'center',
                width: 120,
                render:(h, {row})=>{
                    return h('span',row.user?.nickname || '')
                },

            }, {
                    title: this.$L("延期时间"),
                    align: 'center',
                    width: 120,
                    render:(h, {row})=>{
                        return h('span',row.days + this.$L('天') || '')
                    },
                },{
                    title: this.$L("审批状态"),
                    align: 'center',
                    width: 120,
                    render:(h, {row})=>{
                        return h('span', this.statusR(row.status) )
                    },
                },{
                    title: this.$L("审批人"),
                    align: 'center',
                    width: 120,
                    render:(h, {row})=>{
                        return h('span', row.audit_user?.nickname || '-' )
                    },
                },
                {
                    title: this.$L("申请原因"),
                    align: 'center',
                    width: 120,
                    render:(h, {row})=>{
                        return h('span', row.reason || '-' )
                    },
                },
                {
                    title: this.$L("拒绝理由"),
                    align: 'center',
                    width: 120,
                    render:(h, {row})=>{
                        return h('span', row.status_reason || '-' )
                    },
                },
              {
                title: this.$L("操作"),
                align: 'center',
                width: 100,
                minWidth: 100,
                render: (h, {row}) => {
                    let arr = []
                    arr.push(
                        h('Icon', {
                            props:{
                                type: 'md-checkmark-circle',
                            },
                            style:{
                                color:row.status!='0'|| row.audit_userid != this.userId? '#6b6e72' : '#84c56a',
                                opacity:row.status!='0'|| row.audit_userid != this.userId? '0.3' : '',
                                cursor:row.status!='0'|| row.audit_userid != this.userId? 'not-allowed' : 'pointer',
                                marginRight:'12px',
                                fontSize:'18px',
                            },
                            on: {
                                click: () => {
                                    if (row.status!='0' || row.audit_userid != this.userId) {
                                        return null;
                                    }
                                    this.pass(row);
                                }
                            }
                        }, )
                    )
                    arr.push(
                        h('Icon', {
                            props:{
                                type: 'md-close-circle',
                            },
                            style:{
                                color:row.status!='0'|| row.audit_userid != this.userId? '#6b6e72' : '#ed4014',
                                opacity:row.status!='0'|| row.audit_userid != this.userId? '0.3' : '',
                                cursor:row.status!='0'|| row.audit_userid != this.userId? 'not-allowed' : 'pointer',
                                fontSize:'18px',
                            },
                            on: {
                                click: () => {
                                    if (row.status!='0'|| row.audit_userid != this.userId) {
                                        return null;
                                    }
                                    this.refuseId = row.id;
                                    this.refuseShow = true;
                                }
                            }
                        }, )
                    )
                    return h('div',arr);
                },
            }],
            loadIng:0,
            listTotal:0,
            listPage:1,
            listPageSize:10,
            noDataText:this.$L('没有相关的数据'),
            lists:[],

            refuseId:'',
            refuseShow:false,
            formData:{
                refuseReason:'',
            },

            refuseRule: {
                refuseReason: [
                    { required: true, message: this.$L('请填写拒绝原因！'), trigger: 'change' },
                ]
            },

            projectPage:1,
            project:"",
            projectList:[],
            next_page_url:null,
        }
    },
    activated() {
        this.getLists();
        this.remoteMethodClear('');
    },
    methods:{
        getLists(){
            this.loadIng++;
            this.$store.dispatch("call", {
                url: 'project/task/applyList',
                data: {
                    task_name:this.searchKey,
                    project_id:this.project,
                    page: this.listPage,
                    pagesize: this.listPageSize,
                },
            }).then(({data}) => {
                this.loadIng--;
                this.lists = data.data;
                this.listTotal = data.total;
                this.next_page_url = data.next_page_url;
                this.noDataText = "没有相关的数据";
            }).catch(() => {
                this.loadIng--;
                this.noDataText = '数据加载失败';
            })
        },

        pass(row){
            $A.modalConfirm({
                title: '通过审核',
                content: '是否通过这条任务的延期？',
                onOk: () => {
                    this.loadIng++;
                    this.$store.dispatch("call", {
                        url: 'project/task/delayApprove',
                        data: {
                            id: row.id,
                            pass: true,
                        },
                    }).then(({msg}) => {
                        this.loadIng--;
                        $A.messageSuccess(msg);
                        this.getLists();
                    }).catch(({msg}) => {
                        $A.messageError(msg);
                        this.loadIng--;
                    })
                }
            });
        },

        cancel(){
            this.formData.refuseReason = '';
            this.refuseId = '';
            this.refuseShow=false;
        },

        refuse(){
            if (this.formData.refuseReason==''){
                return
            }
            this.loadIng++;
            this.$store.dispatch("call", {
                url: 'project/task/delayApprove',
                data: {
                    id: this.refuseId,
                    reason:this.formData.refuseReason,
                    pass: false,
                },
            }).then(({msg}) => {
                $A.messageSuccess(msg);
                this.loadIng--;
                this.getLists();
                this.cancel();
            }).catch(({msg}) => {
                $A.messageError(msg);
                this.loadIng--;
            })
        },

        statusR(e){
            let result = '';
            switch (e){
                case 0:
                    result = this.$L('待审核');
                    break
                case 1:
                    result = this.$L('通过')
                    break
                case 2:
                    result = this.$L('拒绝')
                    break
            }
            return result;
        },

        setPage(page) {
            this.listPage = page;
            this.getLists();
        },

        setPageSize(size) {
            if (Math.max($A.runNum(this.listPageSize), 10) !== size) {
                this.listPageSize = size;
                this.getLists();
            }
        },

        remoteMethod (query) {
            if (query !== '') {
                this.loadIng++;
                this.projectPage = 1;
                this.$store.dispatch("call", {
                    url: 'project/personal/list',
                    data: {
                        keyword:query,
                        page: this.projectPage,
                        pagesize: 20,
                    },
                }).then(({data}) => {
                    this.loadIng--;
                    this.projectList = data.data;
                    this.next_page_url = data.next_page_url;
                }).catch(() => {
                    this.loadIng--;
                })
            } else {
                this.project = '';
            }
        },

        remoteMethodClear(query){
            if (query==''){
                this.loadIng++;
                this.projectPage = 1;
                this.$store.dispatch("call", {
                    url: 'project/personal/list',
                    data: {
                        keyword:query,
                        page: this.projectPage,
                        pagesize: 20,
                    },
                }).then(({data}) => {
                    this.loadIng--;
                    this.projectList = data.data;
                    this.next_page_url = data.next_page_url;
                }).catch(() => {
                    this.loadIng--;
                })
            }
        },

        moreProject(){
            this.loadIng++;
            this.projectPage++;
            this.$store.dispatch("call", {
                url: 'project/personal/list',
                data: {
                    page: this.projectPage,
                    pagesize: 20,
                },
            }).then(({data}) => {
                this.loadIng--;
                data.data.forEach(item=>{
                    this.projectList.push(item);
                })
                this.next_page_url = data.next_page_url;
            }).catch(() => {
                this.loadIng--;
            })
        },
    },
}
</script>

<style scoped lang="scss">

</style>
