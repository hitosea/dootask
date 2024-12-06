<template>
    <Modal v-model="show" :title="$L('已有群组包含所选用户')" :styles="{
        width: '90%',
        maxWidth: '550px'
    }" class="group-exist-tips">
        <List :split="false" size="small" class="group-list">
            <template v-if="exclusiveGroups.length > 0">
                <div class="group-section">
                    <ETooltip :content="$L('该群组仅包含所选用户')" placement="right">
                        <span class="group-category">
                            [{{ $L('专有群组') }}]
                        </span>
                    </ETooltip>

                    <ListItem v-for="(items, index) in exclusiveGroups" :key="'exclusive-' + index" class="group-item" @click.native="onGoToChat(items)">
                        <div class="list-content">
                            <div class="dialog-avatar">
                                <EAvatar v-if="items.avatar" class="img-avatar" :src="items.avatar" :size="42" />
                                <Icon v-else class="icon-avatar" type="ios-people" />
                            </div>
                            <span class="group-name" :title="items.name">{{ items.name }}</span>
                        </div>
                    </ListItem>
                </div>
            </template>

            <div v-if="exclusiveGroups.length > 0 && commonGroups.length > 0" class="group-divider"></div>

            <template v-if="commonGroups.length > 0">
                <div class="group-section">
                    <ETooltip :content="$L('该群组包含所选用户及其他成员')" placement="right">
                        <span class="group-category">[{{ $L('共有群组') }}]</span>
                    </ETooltip>
                    <ListItem v-for="(items, index) in commonGroups" :key="'common-' + index" class="group-item" @click.native="onGoToChat(items)">
                        <div class="list-content">
                            <div class="dialog-avatar">
                                <EAvatar v-if="items.avatar" class="img-avatar" :src="items.avatar" :size="42" />
                                <Icon v-else class="icon-avatar" type="ios-people" />
                            </div>
                            <span class="group-name" :title="items.name">{{ items.name }}</span>
                        </div>
                    </ListItem>
                </div>
            </template>
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
    computed: {
        exclusiveGroups() {
            return this.tipsGroup.filter(group => group.is_exclusive)
        },
        commonGroups() {
            return this.tipsGroup.filter(group => !group.is_exclusive)
        }
    },
    methods: {
        onContinue() {
            this.$emit('onContinue')
            this.show = false;
        },

        onClose() {
            this.$emit('close')
            this.show = false;
        },

         // 开始聊天
         onGoToChat(items) {
            let dialog_id = items.dialog_id;
            if (dialog_id) {
                this.$store.dispatch("openDialog", dialog_id)
                this.onClose()
            } 
        },

        // is_exclusive 是否为专有群组
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
.group-section {
    margin-bottom: 16px;
}

.group-category {
    color: #666;
    font-size: 14px;
    margin: 8px 0;
    padding: 0 12px;
}

.group-item {
    border-radius: 4px;
    margin: 4px 0;
    transition: background-color 0.2s;
}

.group-item:hover {
    background-color: #f5f5f5;
}

.list-content {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 10px;
}

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

.dialog-avatar {
    margin-right: 12px;
    flex-shrink: 0;
}

.group-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    font-size: 14px;
    color: #333;
}

.group-divider {
    height: 1px;
    background-color: #e8e8e8;
    margin: 12px 0;
}
</style>