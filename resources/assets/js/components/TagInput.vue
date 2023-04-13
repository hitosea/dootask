<template>
    <div class="common-tag-input" :class="{focus:isFocus}" @paste="pasteText($event)" @click="focus">
            <Draggable
                :list="disSource"
                :animation="150"
                tag="ul"
                draggable=".column-item"
            >
                <div class="tags-item column-item"  v-for="(text, index) in disSource">
                    <span class="tags-content" @click.stop="edit(disSource,index)">{{text}}</span><span class="tags-del" @click.stop="delTag(index)">&times;</span>
                </div>
            </Draggable>
        <textarea
            ref="myTextarea"
            class="tags-input"
            v-model="content"
            :style="{ minWidth: minWidth + 'px' }"
            :placeholder="tis || placeholderText"
            :enterkeyhint="enterkeyhint"
            @keydown.enter="downEnter($event)"
            @keydown.delete="delTag(false)"
            @keyup="onKeyup"
            @focus="onFocus"
            @blur="onBlur"
            :disabled="disabled"
            :readonly="readonly"/>
        <span ref="myPlaceholder" v-if="showPlaceholder || tis !== ''" class="tags-placeholder">{{tis || placeholderText}}</span>

        <!--编辑-->
        <Modal
            v-model="editShow"
            :title="$L('编辑')"
            :mask-closable="false"
        >
            <Form ref="addProject" :model="editData" :rules="addRule" label-width="auto" @submit.native.prevent>
                <FormItem prop="name" :label="$L('名称')">
                    <Input ref="projectName" type="text" v-model="editData.name"></Input>
                </FormItem>
            </Form>
            <div slot="footer" class="adaption">
                <Button type="default" @click="editShow=false">{{$L('取消')}}</Button>
                <Button type="primary" @click="onEdit">{{$L('确定')}}</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import Draggable from 'vuedraggable'
    export default {
        name: 'TagInput',
        components: {Draggable},
        props: {
            value: {
                default: ''
            },
            cut: {
                default: ','
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            placeholder: {
                default: ''
            },
            max: {
                default: 0
            },
            enterkeyhint: {
                type: String,
                default: ''
            },
        },
        data() {
            const disSource = [];
            this.value?.split(",").forEach(item => {
                if (item) {
                    disSource.push(item)
                }
            });
            return {
                minWidth: 80,

                tis: '',
                tisTimeout: null,

                showPlaceholder: true,

                content: '',

                disSource,

                isFocus: false,

                editShow: false,

                editData:{
                    index:0,
                    disSource:[],
                    name:""
                },
                addRule: {
                    name: [
                        { required: true, message: this.$L('请填写名称！'), trigger: 'change' },
                    ]
                },
            }
        },
        mounted() {
            this.wayMinWidth();
        },
        watch: {
            placeholder() {
                this.wayMinWidth();
            },
            value(val) {
                if( val && typeof val == 'string' ){
                    let disSource = [];
                    val?.split(",").forEach(item => {
                        if (item) {
                            disSource.push(item)
                        }
                    });
                    this.disSource = disSource;
                }
            },
            disSource(val) {
                let temp = '';
                val.forEach(item => {
                    if (temp != '') {
                        temp += this.cut;
                    }
                    temp += item;
                });
                this.$emit('input', temp);
                this.$emit('on-change');
            }
        },
        computed: {
            placeholderText() {
                if (this.disSource.length > 0) {
                    return ""
                }
                return this.placeholder
            }
        },
        methods: {
            edit(disSource,index){
                this.editData.disSource = disSource
                this.editData.index = index
                this.editData.name = disSource[index] + ''
                this.editShow = true;
            },
            onEdit(){
                this.$refs.addProject.validate((valid) => {
                    if (valid) {
                        this.editData.disSource[this.editData.index] = this.editData.name
                        this.editShow = false;
                    }
                })
            },
            focus(option) {
                const $el = this.$refs.myTextarea;
                $el.focus(option);
                const { cursor } = option || {};
                if (cursor) {
                    const len = $el.value.length;
                    switch (cursor) {
                        case 'start':
                            $el.setSelectionRange(0, 0);
                            break;
                        case 'end':
                            $el.setSelectionRange(len, len);
                            break;
                        default:
                            $el.setSelectionRange(0, len);
                    }
                }
            },
            wayMinWidth() {
                this.showPlaceholder = true;
                this.$nextTick(() => {
                    if (this.$refs.myPlaceholder) {
                        this.minWidth = Math.max(this.minWidth, this.$refs.myPlaceholder.offsetWidth);
                    }
                    setTimeout(() => {
                        try {
                            this.minWidth = Math.max(this.minWidth, this.$refs.myPlaceholder.offsetWidth);
                            this.showPlaceholder = false;
                        }catch (e) { }
                        if (!$A(this.$refs.myPlaceholder).is(":visible")) {
                            this.wayMinWidth();
                        }
                    }, 500);
                });
            },
            pasteText(e) {
                e.preventDefault();
                let content = (e.clipboardData || window.clipboardData).getData('text');
                this.addTag(false, content)
            },
            downEnter(e) {
                e.preventDefault();
            },
            onFocus(e) {
                this.isFocus = true;
                this.$emit("on-focus", e)
            },
            onBlur(e) {
                this.isFocus = false;
                this.addTag(false, this.content)
                this.$emit("on-blur", e)
            },
            onKeyup(e) {
                this.addTag(e, this.content);
                //
                this.$emit("on-keyup", e)
                if (e.keyCode === 13) {
                    this.$nextTick(() => {
                        this.$emit("on-enter", e)
                    })
                }
            },
            addTag(e, content) {
                if (e === false || e.keyCode === 13) {
                    if (content.trim() != '' && this.disSource.indexOf(content.trim()) === -1) {
                        this.disSource.push(content.trim());
                    }
                    this.content = '';
                    return;
                }
                if (this.max > 0 && this.disSource.length >= this.max) {
                    this.content = '';
                    this.tis = '最多只能添加' + this.max + '个';
                    clearInterval(this.tisTimeout);
                    this.tisTimeout = setTimeout(() => { this.tis = ''; }, 2000);
                    return;
                }
                let temp = content.trim();
                let cutPos = temp.length - this.cut.length;
                if (temp != '' && temp.substring(cutPos) === this.cut) {
                    temp = temp.substring(0, cutPos);
                    if (temp.trim() != '' && this.disSource.indexOf(temp.trim()) === -1) {
                        this.disSource.push(temp.trim());
                    }
                    this.content = '';
                }
            },
            delTag(index) {
                if (index === false) {
                    if (this.content !== '') {
                        return;
                    }
                    index = this.disSource.length - 1;
                }
                this.disSource.splice(index, 1);
                this.focus();
            }
        }
    }
</script>
