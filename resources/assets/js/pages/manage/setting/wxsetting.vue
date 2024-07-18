<template>
    <div class="setting-item submit">
        <Loading v-if="configLoad > 0" />
        <Form v-else ref="formDatum" :model="formDatum" :rules="ruleDatum" :labelPosition="formLabelPosition" :labelWidth="formLabelWidth" @submit.native.prevent>
            <FormItem label="agent_id" prop="agent_id">
                <Input v-model="formDatum.agent_id" :placeholder="$L('输入agent_id')" />
            </FormItem>

            <FormItem label="copr_id" prop="copr_id">
                <Input v-model="formDatum.copr_id" :placeholder="$L('输入copr_id')" />
            </FormItem>

            <FormItem label="app_secret" prop="app_secret">
                <Input v-model="formDatum.app_secret" :placeholder="$L('输入app_secret')" />
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

            formDatum: {
                copr_id: '',
                agent_id: '',
                app_secret: '',
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
    
    methods: {
        submitForm() {
            this.$refs.formDatum.validate((valid) => {
                if (valid) {
                    this.loadIng++;
                    this.$store.dispatch("call", {
                        url: 'users/email/edit',
                        data: this.formDatum,
                    }).then(({ data }) => {
                        this.count = 0;
                        this.sendBtnText = this.$L('发送验证码');
                        $A.messageSuccess('修改成功');
                        this.$store.dispatch("saveUserInfo", data);
                        this.$refs.formDatum.resetFields();
                        this.isSendButtonShow = true;
                    }).catch(({ msg }) => {
                        $A.modalError(msg);
                    }).finally(_ => {
                        this.loadIng--;
                    });
                }
            })
        },

        resetForm() {
            this.$refs.formDatum.resetFields();
        },
    },
}
</script>
<style lang="">

</style>