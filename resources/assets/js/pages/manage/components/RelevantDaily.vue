<template>
<div class="relevant-daily">
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
    <DrawerOverlay
        v-model="showDetailDrawer"
        placement="right"
        :size="950"
        transfer>
        <ReportDetail v-if="showDetailDrawer" :data="detailData"/>
    </DrawerOverlay>
</div>
</template>

<script>
import DrawerOverlay from "../../../components/DrawerOverlay";
import ReportDetail from "../../manage/components/ReportDetail";
export default {
    name: "RelevantDaily",
    components:{DrawerOverlay,ReportDetail},
    props:{
        taskId:0,
    },
    data(){
        return{
            showDetailDrawer: false,
            detailData:{},

            loadIng:0,
            listTotal:0,
            listPage:1,
            listPageSize:10,
            noDataText:'',
            lists:[],
            columns: [{
                title: this.$L("名称"),
                key: 'title',
                width: 120,
            }, {
                title: this.$L("类型"),
                key: 'type',
                align: 'center',
                width: 90,
            }, {
                title: this.$L("汇报时间"),
                key: 'created_at',
                align: 'center',
                width: 180,
            }, {
                title: this.$L("汇报对象"),
                key: 'receives',
                align: 'center',
                width: 90,
                render: (h, {row}) => {
                    if (row.receives.length === 0) {
                        return h('div', '-')
                    }
                    const array = [];
                    if (row.receives.length <= 2) {
                        row.receives.some(userid => {
                            array.push(h('UserAvatar', {
                                props: {
                                    size: 22,
                                    userid: userid,
                                }
                            }))
                        })
                    } else {
                        array.push(h('UserAvatar', {
                            props: {
                                size: 22,
                                userid: row.receives[0],
                            }
                        }))
                        array.push(h('div', {
                            class: "more-avatar"
                        }, `+${row.receives.length - 1}`))
                    }
                    return h('div', {
                        class: "report-table-avatar"
                    }, array)
                }
            }, {
                title: this.$L("操作"),
                align: 'center',
                width: 100,
                minWidth: 100,
                render: (h, {column, row}) => {
                    if (!row.id) {
                        return null;
                    }
                    return h('TableAction', {
                        props: {
                            column,
                            menu: [
                                {
                                    icon: "md-eye",
                                    action: "view",
                                }
                            ]
                        },
                        on: {
                            action: (name) => {
                                 if (name === 'view') {
                                     this.detailData = row;
                                    this.showDetailDrawer = true;
                                }
                            }
                        }
                    });
                },
            }],
        }
    },
    mounted() {
        this.getLists();
    },
    methods:{
        getLists(){
            this.loadIng++;
            this.$store.dispatch("call", {
                url: 'project/task/reports',
                data: {
                    task_id:this.taskId,
                    page: this.listPage,
                    pagesize: this.listPageSize,
                },
            }).then(({data}) => {
                this.loadIng--;
                this.lists = data.data;
                this.listTotal = data.total;
                this.noDataText = "没有相关的数据";
            }).catch(() => {
                this.loadIng--;
                this.noDataText = '数据加载失败';
            })
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
    },
}
</script>

<style scoped lang="scss">
.relevant-daily{

}
</style>
