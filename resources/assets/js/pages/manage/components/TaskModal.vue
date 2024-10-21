<template>
    <div>
        <!-- 主任务 -->
        <Modal
            :value="show"
            :styles="styles"
            :mask-closable="false"
            :footer-hide="true"
            :beforeClose="onBeforeClose"
            class-name="task-modal">
            <TaskDetail ref="taskDetail" :task-id="taskId" :open-task="taskData" modalMode/>
        </Modal>
        <!-- 子任务 -->
        <Modal
            :value="subShow"
            :styles="styles"
            :mask-closable="false"
            :footer-hide="true"
            :beforeClose="onSubBeforeClose"
            class-name="task-modal">
            <TaskDetail ref="taskDetail" :task-id="taskSubId" :open-task="taskData" is-subtask modalMode/>
        </Modal>
    </div>
</template>

<style lang="scss">
body {
    .ivu-modal-wrap {
        &.task-modal {
            display: flex;
            flex-direction: column;
            .ivu-modal-close {
                z-index: 2;
            }
        }
    }
}
</style>
<script>
import {mapGetters, mapState} from "vuex";
import TaskDetail from "./TaskDetail";

export default {
    name: "TaskModal",
    components: {TaskDetail},

    computed: {
        ...mapState(['taskId', 'taskSubId']),
        ...mapGetters(['taskData']),

        show() {
            return this.taskId > 0
        },

        subShow() {
            return this.taskSubId > 0
        },

        styles() {
            return {
                width: '90%',
                maxWidth: this.taskData.dialog_id ? '1200px' : '700px'
            }
        }
    },

    methods: {
        onBeforeClose() {
            return new Promise(_ => {
                this.$store.dispatch("openTask", 0)
            })
        },
        checkUpdate() {
            if (this.show) {
                this.$refs.taskDetail.checkUpdate(true);
                return true;
            }
        },
        onSubBeforeClose() {
            return new Promise(_ => {
                this.$store.dispatch("openSubtask", 0)
                this.$store.dispatch("openTask", this.taskId)
            })
        }
    }
}
</script>
