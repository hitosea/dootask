import o from"./TEditor.466b0f2f.js";import{n as s}from"./app.4fa74fc7.js";import"./tinymce.7b838bb9.js";import"./@babel.2fb63f12.js";import"./ImgUpload.c03d49ff.js";import"./vuex.cc7cb26e.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.a18d5b27.js";import"./localforage.bbaccc2b.js";import"./markdown-it.7c5efbd6.js";import"./entities.797c3e49.js";import"./uc.micro.4d0617d5.js";import"./mdurl.6c31ac34.js";import"./linkify-it.afb42329.js";import"./punycode.64d7844d.js";import"./highlight.js.b91af88c.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.dbce67c2.js";import"./katex.756172bd.js";import"./vue.6ce721e5.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.aa7d93fc.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.b7f8142e.js";import"./clipboard.02a36be0.js";import"./view-design-hi.d7bac4dd.js";import"./vuedraggable.345db9fd.js";import"./sortablejs.ab995a42.js";import"./vue-resize-observer.d5f637d1.js";import"./element-sea.e850965b.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.a2452442.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.078475eb.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var a=function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("div",{staticClass:"file-preview"},[r("PageTitle",{attrs:{title:t.pageName}}),t.loadIng>0?r("Loading"):t.info?r("div",{staticClass:"file-preview"},[t.showHeader?r("div",{staticClass:"edit-header"},[r("div",{staticClass:"header-title"},[r("div",{staticClass:"title-name"},[t._v(t._s(t.pageName))]),r("Tag",{attrs:{color:"default"}},[t._v(t._s(t.$L("\u53EA\u8BFB")))]),r("div",{staticClass:"refresh"},[r("Icon",{attrs:{type:"ios-refresh"},on:{click:t.getInfo}})],1)],1)]):t._e(),r("div",{staticClass:"content-body"},[r("TEditor",{attrs:{value:t.info.content,height:"100%",readOnly:""}})],1)]):t._e()],1)},n=[];const m={components:{TEditor:o},data(){return{loadIng:0,info:null,showHeader:!$A.isEEUiApp}},mounted(){},computed:{taskId(){return this.$route.params?$A.runNum(this.$route.params.taskId):0},historyId(){return this.$route.query?$A.runNum(this.$route.query.history_id):0},pageName(){return this.$route.query&&this.$route.query.history_title?this.$route.query.history_title:this.info?`${this.info.name} [${this.info.created_at}]`:""}},watch:{$route:{handler(){this.getInfo()},immediate:!0}},methods:{getInfo(){setTimeout(t=>{this.loadIng++},600),this.$store.dispatch("call",{url:"project/task/content",data:{task_id:this.taskId,history_id:this.historyId}}).then(({data:t})=>{this.info=t}).catch(({msg:t})=>{$A.modalError({content:t,onOk:()=>{window.close()}})}).finally(t=>{this.loadIng--})}}},e={};var p=s(m,a,n,!1,l,"5294fc91",null,null);function l(t){for(let i in e)this[i]=e[i]}var W=function(){return p.exports}();export{W as default};
