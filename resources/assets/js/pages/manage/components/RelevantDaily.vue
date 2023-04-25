<template>
<div class="relevant-daily">

</div>
</template>

<script>
export default {
    name: "RelevantDaily",
    props:{
        taskId:0,
    },
    data(){
        return{
            loadIng:0,
            page:1,
        }
    },
    mounted() {
        this.getList();
    },
    methods:{
        getList(){
            this.loadIng++;
            this.$store.dispatch("call", {
                url: 'project/task/reports',
                data: {
                    task_id:this.taskId,
                    page: this.page,
                    pagesize: 20,
                },
            }).then(({data}) => {
                this.loadIng--;
                console.log(data)
            }).catch(() => {
                this.loadIng--;
            })
        },
    },
}
</script>

<style scoped lang="scss">
.relevant-daily{

}
</style>
