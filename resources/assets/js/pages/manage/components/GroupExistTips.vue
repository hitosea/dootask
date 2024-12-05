<template>
    <Modal v-model="show" :title="$L('已有群组包含所选用户')" :styles="{
        width: '90%',
        maxWidth: '550px'
    }" class="group-exist-tips">
        <List :split="false" size="small">
            <!-- <div style="display: flex; align-items: center;">
                <UserAvatar v-for="userid in userids" :key="userid" :userid="userid" :size="28" :show-icon="true" />
                <span>{{ $L('已存在于以下群组') }}</span>
            </div> -->
            <ListItem v-for="(items, index) in tipsGroup" :key="index">
                <div class="list-content" style="display: flex; align-items: center;">
                    <div class="dialog-avatar">
                        <template>
                            <EAvatar v-if="items.avatar" class="img-avatar" :src="items.avatar" :size="42"></EAvatar>
                            <Icon v-else class="icon-avatar" type="ios-people" />
                        </template>
                    </div>

                    <span class="group-name">{{ items.name }}</span>
                </div>
            </ListItem>
        </List>
        <div slot="footer">
            <Button type="default" @click="show = false">{{ $L('取消') }}</Button>
            <Button type="primary" @click="onContinue">{{ $L('忽略并继续') }}</Button>
        </div>
    </Modal>
</template>

<script>
export default {
    name: "GroupExistTips",
    props: {
        value: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            show: false,
            tipsGroup: [],
            userids: [],
        }
    },

    methods: {
        onContinue() {
            this.$emit('onContinue')
            this.show = false;
        },

        isExistGroup({ userids }, spinner) {
            return new Promise(async resolve => {
                this.$store.dispatch("call", {
                    url: 'dialog/group/check',
                    data: {
                        userids: userids,
                    },
                    method: 'get',
                    spinner,
                }).then(({ data }) => {
                    console.log("返回群组信息", data.list)
                    if (data.list.length <= 0) {
                        resolve(false)
                        return
                    }
                    this.show = true;
                    this.tipsGroup = data.list
                    this.userids = userids
                    resolve(true)
                });
            });
        }
    }
}
</script>


<style>
.icon-avatar {
    width: 42px;
    height: 42px;
    margin-right: 2px;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 26px;
    background-color: #61B2F9;
    color: #ffffff;
}
.dialog-avatar{
    margin-right: 10px;
    flex-shrink: 0;
}
.list-content {
    width: 100%;
}
.group-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
}
</style>