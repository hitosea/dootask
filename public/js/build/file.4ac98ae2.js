import n from"./FileContent.1198867d.js";import l from"./FilePreview.387e1f57.js";import{n as s}from"./app.8594b3b3.js";import"./openpgp_hi.15f91b1d.js";import"./vuex.cc7cb26e.js";import"./IFrame.441a255d.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.fb14fddd.js";import"./@babel.bf7d9895.js";import"./localforage.8f9d8d0e.js";import"./markdown-it.5805e7b3.js";import"./entities.797c3e49.js";import"./uc.micro.5e15fe26.js";import"./mdurl.9b711dc1.js";import"./linkify-it.e19f2cc9.js";import"./punycode.1f63f7c7.js";import"./highlight.js.ab8aeea4.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.5dd4b97c.js";import"./vue.c9220c0f.js";import"./axios.6ec123f8.js";import"./le5le-store.ed1761e9.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.43956d0e.js";import"./clipboard.136ac061.js";import"./view-design-hi.b9fa657a.js";import"./vuedraggable.1db9a3fb.js";import"./sortablejs.0856e76f.js";import"./vue-resize-observer.47f133f6.js";import"./element-sea.fa7547f0.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.53897542.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.72c7ddab.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var m=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"single-file"},[e("PageTitle",{attrs:{title:t.pageName}}),t.loadIng>0?e("Loading"):t.fileInfo?[t.isPreview?e("FilePreview",{attrs:{code:t.code,file:t.fileInfo,historyId:t.historyId,headerShow:!t.$isEEUiApp}}):e("FileContent",{attrs:{file:t.fileInfo},model:{value:t.fileShow,callback:function(r){t.fileShow=r},expression:"fileShow"}})]:t._e()],2)},p=[];const a={components:{FilePreview:l,FileContent:n},data(){return{loadIng:0,code:null,fileShow:!0,fileInfo:null}},mounted(){},computed:{historyId(){return this.$route.query?$A.runNum(this.$route.query.history_id):0},isPreview(){return this.windowPortrait||this.code||this.historyId>0||this.fileInfo&&this.fileInfo.permission===0},pageName(){return this.$route.query&&this.$route.query.history_title?this.$route.query.history_title:this.fileInfo?`${this.fileInfo.name} [${this.fileInfo.created_at}]`:""}},watch:{$route:{handler(){this.getInfo()},immediate:!0}},methods:{getInfo(){let{codeOrFileId:t}=this.$route.params,i={id:t};if(/^\d+$/.test(t))this.code=null;else if(t)this.code=t;else return;setTimeout(e=>{this.loadIng++},600),this.$store.dispatch("call",{url:"file/one",data:i}).then(({data:e})=>{this.fileInfo=e}).catch(({msg:e})=>{$A.modalError({content:e,onOk:()=>{window.close()}})}).finally(e=>{this.loadIng--})}}},o={};var f=s(a,m,p,!1,u,"e0fab8f8",null,null);function u(t){for(let i in o)this[i]=o[i]}var X=function(){return f.exports}();export{X as default};
