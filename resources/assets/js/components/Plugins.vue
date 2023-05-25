<template>
    <div class="plugin-content">
        <template v-if="isShow">
            <IFrame v-if="iframeSrc" ref="frame" class="preview-iframe" :src="iframeSrc" @on-message="onMessage"/>
        </template>
        <IFrame v-else class="preview-iframe" :src="previewUrl" @on-load="onFrameLoad"/>
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
            let conf = this.getPluginConfig();
            if(conf.platform == "desktop"){
                return $A.isDesktop();
            }else{
                return true;
            }
        },
        

        fileUrl() {
            let codeId = this.file.id;
            let fileUrl
            if ($A.leftExists(codeId, "msgFile_")) {
                fileUrl = `d.fileTypeuserToken}`;
            } else if ($A.leftExists(codeId, "taskFile_")) {
                fileUrl = `project/task/filedown/?file_id=${$A.leftDelete(codeId, "taskFile_")}&token=${this.userToken}`;
            } else {
                fileUrl = `file/content/?id=${codeId}&token=${this.userToken}`;
                if (this.historyId > 0) {
                    fileUrl += `&history_id=${this.historyId}`
                }
            }
            return fileUrl;
        },

        previewUrl() {
            return $A.apiUrl(this.fileUrl) + "&down=preview"
        }
    },

    watch: {
        'file': {
            handler(file)  {
                if (!file.id) {
                    return;
                }
                this.loading = true;
                this.loadError = false;
                this.documentKey();
            },
            deep: true
        },

        iframeSrc: {
            handler() {
                if (!$A.isDesktop()) {
                    this.loading = true;
                    this.updateContent();
                }    
            },
            immediate: true
        }
    },

    mounted() {
        this.documentKey();
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
        documentKey() {
            return new Promise(resolve => {
                this.$store.dispatch("call", {
                    url: 'file/content',
                    data: {
                        id: this.file.id,
                        only_update_at: 'yes'
                    },
                }).then(({data}) => {
                    let key = `${data.id}-${$A.Time(data.update_at)}`;
                    let historyId = this.value.history_id || 0;
                    let readOnly = !$A.isDesktop();
                    let conf = this.getPluginConfig();
                    let title = encodeURIComponent(this.file.name);
                    let fileName = $A.strExists(this.file.name, '.') ? this.file.name : (this.file.name + '.' + this.file.ext);

                    let lang = languageType;
                    switch (languageType) {
                        case 'zh-CHT':
                            lang = 'zh-tw'
                            break;
                    }

                    this.iframeSrc = conf.path + (conf.path.indexOf("?") == -1 ? '?': '&') 
                        + `documentKey=${key}&userToken=${this.userToken}&nickname=${this.userInfo.nickname}&userid=${this.userInfo.userid}`
                        + `&codeId=${this.file.id}&lang=${lang}&theme=${this.themeIsDark}&historyId=${historyId}`
                        + `&fileType=${this.file.ext}&fileName=${fileName}&readOnly=${readOnly}`
                        + `&title=${title}&chrome=${readOnly ? 0 : 1}&lightbox=${readOnly ? 1 : 0}&ui=${this.themeIsDark ? 'dark' : 'kennedy'}`

                    resolve(key)
                }).catch(() => {
                    resolve(0)
                });
            })
        },

        updateContent() {
            this.$refs.frame.postMessage(JSON.stringify({
                action: "load",
                autosave: 1,
                xml: this.value.xml,
            }));
        },

        reload(){
            // this.updateContent()
        }
    }
}
</script>
