<template>
    <div class="plugin-content">
        <IFrame v-if="iframeSrc" ref="frame" class="preview-iframe" :src="iframeSrc" @on-message="onMessage" @on-load="onFrameLoad"/>
        <div v-if="loadIng" class="loading"><Loading/></div> 
    </div>
</template>

<style lang="scss" scoped>
.plugin-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    .loading{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
}
</style>

<script>
import {mapState} from "vuex";
import IFrame from "../pages/manage/components/IFrame.vue";
import {languageType} from "../language";

export default {
    name: "Plugin",
    components: {IFrame},
    props: {
        value: {
            type: Object,
            default: function () {
                return {}
            }
        },
        file: {
            type: Object,
            default: function () {
                return {}
            }
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        historyId: {
            type: Number,
            default: 0
        },
        openType: {
            type: String,
            default: 'file'
        },
    },

    data() {
        return {
            loadIng: $A.isDesktop(),
            contentDetail:"",
            iframeSrc:''
        }
    },

    computed: {
        ...mapState(['userInfo', 'themeIsDark', 'plugins']),

        isShow() {
            return $A.isDesktop();
        },
        

        fileUrl() {
            let codeId = this.file.id;
            let fileUrl = `file/content/?id=${codeId}&token=${this.userToken}`;
            if (this.openType == 'msg') {
                fileUrl = `dialog/msg/download/?msg_id=${$A.leftDelete(codeId, "msgFile_")}&token=${this.userToken}`;
            } else if (this.openType == 'task') {
                fileUrl = `project/task/filedown/?file_id=${$A.leftDelete(codeId, "taskFile_")}&token=${this.userToken}`;
            } else {
                if (this.historyId > 0) {
                    fileUrl += `&history_id=${this.historyId}`
                }
            }

            return fileUrl;
        },

    },

    watch: {
        'file': {
            handler(file)  {
                if (!file.id) {
                    return;
                }
                this.loading = true;
                this.loadError = false;
            },
            deep: true
        },

        iframeSrc: {
            handler() {
                this.loading = true;
                this.updateContent();
            },
            immediate: true
        }
    },

    mounted() {
       this.load();
    },

    methods: {

        onFrameLoad() {
            this.loadIng = false;
        },

        // 监听消息
        onMessage(data) {

            switch (data.action) {
                case 'ready':
                    this.loadIng = false;
                    break;
                case 'content':
                    this.$emit('input', data.content);
                    break;
                case "save":
                    this.$emit('saveData');
                    break;
            }

            switch (data.event) {
                case "init":
                    this.loadIng = false;
                    this.updateContent();
                    break;

                case "load":
                    if (typeof this.value.xml === "undefined") {
                        this.$refs.frame.postMessage(JSON.stringify({
                            action: "template"
                        }));
                    }
                    break;

                case "autosave":
                    const content = {
                        xml: data.xml,
                    }
                    this.bakData = $A.jsonStringify(content);
                    this.$emit('input', content);
                    break;

                case "save":
                    this.$emit('saveData');
                    break;
            }
            
        },

        // 获取插件配置
        getPluginConfig(){
            let conf = {};
            (this.plugins.files || []).forEach(item => {
                if(item.ext == this.file.ext) {
                    conf = item;
                }
            });
            return conf;
        },

        // 获取key
        load() {
            if(this.openType == 'msg'){
                this.$store.dispatch("call", {
                    url: 'dialog/msg/detail',
                    data: {
                        msg_id: this.file.id,
                        only_update_at: 'yes'
                    },
                }).then(({data}) => {
                    this.setIframeSrc(`${data.id}-${$A.Time(data.update_at)}`)
                });
            }else{
                this.$store.dispatch("call", {
                    url: 'file/content',
                    data: {
                        id: this.file.id,
                        only_update_at: 'yes'
                    },
                }).then(({data}) => {
                    this.setIframeSrc(`${data.id}-${$A.Time(data.update_at)}`)
                })
            }
        },


        // 设置src
        setIframeSrc(key){
            
            let historyId = this.historyId || 0;
            let readOnly = !$A.isDesktop() || this.readOnly;
            let conf = this.getPluginConfig();
            let title = encodeURIComponent(this.file.name);
            let fileName = $A.strExists(this.file.name, '.') ? this.file.name : (this.file.name + '.' + this.file.ext);

            let lang = languageType;
            switch (languageType) {
                case 'zh-CHT':
                    lang = 'zh-tw'
                    break;
            }

            if (this.$Electron) {
                conf.path  = $A.originUrl(conf.path);
            } else {
                conf.path  = $A.apiUrl(conf.path );
            }

            this.iframeSrc = "";
            this.$nextTick(() => {
                this.iframeSrc = conf.path + (conf.path.indexOf("?") == -1 ? '?': '&') 
                + `userToken=${this.userToken}&nickname=${this.userInfo.nickname}&userid=${this.userInfo.userid}`
                + `&lang=${lang}&theme=${this.themeIsDark}&isDesktop=${$A.isDesktop()}&isElectron=${this.$Electron}&isEEUiApp=${this.$isEEUiApp}`
                + `&documentKey=${key}&fileId=${this.file.id}&fileType=${this.file.ext}&fileName=${fileName}&historyId=${historyId}`
                + `&fileUrl=${encodeURIComponent(this.fileUrl)}&openType=${this.openType}`
                + `&readOnly=${readOnly}&t=${Math.round(Math.random() * 100000)}`
                + `&title=${title}&chrome=${readOnly ? 0 : 1}&lightbox=${readOnly ? 1 : 0}&ui=${this.themeIsDark ? 'dark' : 'kennedy'}`
            })
        },

        // 更新内容
        updateContent() {
            this.$refs.frame?.postMessage(JSON.stringify({
                action: "load",
                autosave: 1,
                xml: this.value.xml,
            }));
        },

        // 导出
        exportHandle(type, filename) {
            this.$refs.frame.postMessage({
                action: 'headerDropdowns',
                type,
                name: filename 
            });
        },

        reload(){
            this.load();
        }
    }
}
</script>
