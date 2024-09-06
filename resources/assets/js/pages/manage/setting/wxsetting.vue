<template>
    <div class="setting-item submit">
        <Loading v-if="configLoad > 0" />
        <Form v-else ref="formData" :model="formData" :rules="ruleDatum" :labelPosition="formLabelPosition" :labelWidth="formLabelWidth" @submit.native.prevent>
            <FormItem label="AGENT_ID" prop="agent_id">
                <Input v-model="formData.agent_id" :placeholder="$L('输入agent_id')" />
            </FormItem>

            <FormItem label="COPR_ID" prop="copr_id">
                <Input v-model="formData.copr_id" :placeholder="$L('输入copr_id')" />
            </FormItem>

            <FormItem label="APP_SECRET" prop="app_secret">
                <Input v-model="formData.app_secret" :placeholder="$L('输入app_secret')" />
            </FormItem>

            <FormItem label="通讯录同步-SECRET" prop="address_secret">
                <Input v-model="formData.address_secret" placeholder="" />
            </FormItem>

        </Form>
        <div class="setting-footer">
            <Button :loading="loadIng > 0" type="primary" @click="submitForm">{{ $L('提交') }}</Button>
            <Button :loading="loadIng > 0" @click="resetForm" style="margin-left: 8px">{{ $L('重置') }}</Button>
        </div>
    </div>
</template>
<script>
import { method } from "lodash";
import { mapState } from "vuex";

export default {
    data() {
        return {
            loadIng: 0,
            configLoad: 0,

            formData: {
                copr_id: '',
                agent_id: '',
                app_secret: '',
                address_secret: '',
            },

            ruleDatum: {
                copr_id: [
                    {
                        validator: (rule, value, callback) => {
                            if (value.trim() === '') {
                                callback(new Error(this.$L('输入copr_id')));
                            } else {
                                callback();
                            }
                        },
                        required: true,
                        trigger: 'change'
                    },
                ],
                agent_id: [
                    {
                        validator: (rule, value, callback) => {
                            if (value.trim() === '') {
                                callback(new Error(this.$L('输入agent_id')));
                            } else {
                                callback();
                            }
                        },
                        required: true,
                        trigger: 'change'
                    },
                ],
                app_secret: [
                    {
                        validator: (rule, value, callback) => {
                            if (value.trim() === '') {
                                callback(new Error(this.$L('输入app_secret')));
                            } else {
                                callback();
                            }
                        },
                        required: true,
                        trigger: 'change'
                    },
                ],
            },
        }
    },
    computed: {
        ...mapState(['formLabelPosition', 'formLabelWidth']),

    },
    mounted() {
        this.systemSetting();
    },
    methods: {
        submitForm() {
            this.$refs.formData.validate((valid) => {
                if (valid) {
                    this.systemSetting(true);
                }
            })
        },

        resetForm() {
            this.formData = $A.cloneJSON(this.formData_bak);
        },

        systemSetting(save) {
            this.loadIng++;
            this.$store.dispatch("call", {
                url: 'system/setting/wecom?type=' + (save ? 'save' : 'all'),
                data: this.formData,
            }).then(({data}) => {
                if (save) {
                    $A.messageSuccess('修改成功');
                }
                this.formData = data;
                this.formData_bak = $A.cloneJSON(this.formData);
            }).catch(({msg}) => {
                if (save) {
                    $A.modalError(msg);
                }
            }).finally(_ => {
                this.loadIng--;
            });
        }
    },
}
</script>
<style lang="">

</style>
