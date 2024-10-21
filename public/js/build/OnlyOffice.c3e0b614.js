import{m as f}from"./vuex.cc7cb26e.js";import{I as c}from"./IFrame.7b301daa.js";import{n as m,l as a}from"./app.f1b2eef6.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.70f9fbe0.js";import"./@babel.bf7d9895.js";import"./localforage.70b1c685.js";import"./markdown-it.5805e7b3.js";import"./entities.797c3e49.js";import"./uc.micro.5e15fe26.js";import"./mdurl.9b711dc1.js";import"./linkify-it.e19f2cc9.js";import"./punycode.1f63f7c7.js";import"./highlight.js.ab8aeea4.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.5dd4b97c.js";import"./vue.c9220c0f.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.ed1761e9.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.43956d0e.js";import"./clipboard.136ac061.js";import"./view-design-hi.b9fa657a.js";import"./vuedraggable.1db9a3fb.js";import"./sortablejs.0856e76f.js";import"./vue-resize-observer.47f133f6.js";import"./element-sea.fa7547f0.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.53897542.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.72c7ddab.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"component-only-office"},[e.$A.isDesktop()?[e.loadError?i("Alert",{staticClass:"load-error",attrs:{type:"error","show-icon":""}},[e._v(e._s(e.$L("\u7EC4\u4EF6\u52A0\u8F7D\u5931\u8D25\uFF01")))]):e._e(),i("div",{staticClass:"placeholder",attrs:{id:e.id}})]:i("IFrame",{staticClass:"preview-iframe",attrs:{src:e.previewUrl},on:{"on-load":e.onFrameLoad}}),e.loading?i("div",{staticClass:"office-loading"},[i("Loading")],1):e._e()],2)},p=[];const u={name:"OnlyOffice",components:{IFrame:c},props:{id:{type:String,default:()=>"office_"+Math.round(Math.random()*1e4)},code:{type:String,default:""},historyId:{type:Number,default:0},value:{type:[Object,Array],default:function(){return{}}},readOnly:{type:Boolean,default:!1},documentKey:Function},data(){return{loading:!1,loadError:!1,docEditor:null}},beforeDestroy(){this.docEditor!==null&&(this.docEditor.destroyEditor(),this.docEditor=null)},computed:{...f(["userInfo","themeName"]),fileType(){return this.getType(this.value.type)},fileName(){return this.value.name},fileUrl(){let e=this.code||this.value.id,t;return $A.leftExists(e,"msgFile_")?t=`dialog/msg/download/?msg_id=${$A.leftDelete(e,"msgFile_")}&token=${this.userToken}`:$A.leftExists(e,"taskFile_")?t=`project/task/filedown/?file_id=${$A.leftDelete(e,"taskFile_")}&token=${this.userToken}`:(t=`file/content/?id=${e}&token=${this.userToken}`,this.historyId>0&&(t+=`&history_id=${this.historyId}`)),t},previewUrl(){return $A.apiUrl(this.fileUrl)+"&down=preview"}},watch:{"value.id":{handler(e){!e||!$A.isDesktop()||(this.loading=!0,this.loadError=!1,$A.loadScript($A.mainUrl("office/web-apps/apps/api/documents/api.js")).then(t=>{if(!this.documentKey){this.handleClose();return}const i=this.documentKey();i&&i.then?i.then(this.loadFile).catch(({msg:s})=>{$A.modalError({content:s})}):this.loadFile()}).catch(t=>{this.loadError=!0}).finally(t=>{this.loading=!1}))},immediate:!0},previewUrl:{handler(){$A.isDesktop()||(this.loading=!0)},immediate:!0}},methods:{onFrameLoad(){this.loading=!1},getType(e){switch(e){case"word":return"docx";case"excel":return"xlsx";case"ppt":return"pptx"}return e},loadFile(e=""){this.docEditor!==null&&(this.docEditor.destroyEditor(),this.docEditor=null);let t=a;switch(a){case"zh-CHT":t="zh-TW";break}let i=this.code||this.value.id,s=$A.strExists(this.fileName,".")?this.fileName:this.fileName+"."+this.fileType,l=`${this.fileType}-${e||i}`;this.historyId>0&&(l+=`-${this.historyId}`);const r={document:{fileType:this.fileType,title:s,key:l,url:`http://nginx/api/${this.fileUrl}`},editorConfig:{mode:"edit",lang:t,user:{id:String(this.userInfo.userid),name:this.userInfo.nickname},customization:{uiTheme:this.themeName==="dark"?"theme-dark":"theme-classic-light",forcesave:!0,help:!1},callbackUrl:`http://nginx/api/file/content/office?id=${i}&dootask-token=${this.userToken}`},events:{onDocumentReady:this.onDocumentReady}};/\/hideenOfficeTitle\//.test(window.navigator.userAgent)&&(r.document.title=" "),(async v=>{if((this.readOnly||this.historyId>0)&&(r.editorConfig.mode="view",r.editorConfig.callbackUrl=null,!r.editorConfig.user.id)){let o=await $A.IDBInt("officeViewer");o||(o=$A.randNum(1e3,99999),await $A.IDBSet("officeViewer",o)),r.editorConfig.user.id="viewer_"+o,r.editorConfig.user.name="Viewer_"+o}this.$nextTick(()=>{this.$store.dispatch("call",{url:"file/office/token",data:{config:r}}).then(({data:o})=>{if(r.token=o.token,this.docEditor=new DocsAPI.DocEditor(this.id,r),this.readOnly){var n=$("iframe[name='frameEditor']")[0];n==null||n.addEventListener("load",function(){n.contentWindow.postMessage("disableDownload","*")})}}).catch(({msg:o})=>{if(o.indexOf("404 not found")!==-1){$A.modalInfo({title:"\u7248\u672C\u8FC7\u4F4E",content:"\u670D\u52A1\u5668\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7\u5347\u7EA7\u670D\u52A1\u5668\u3002"});return}$A.modalError({content:o})})})})()},onDocumentReady(){this.$emit("on-document-ready",this.docEditor)}}},d={};var _=m(u,h,p,!1,y,"394e9394",null,null);function y(e){for(let t in d)this[t]=d[t]}var ie=function(){return _.exports}();export{ie as default};
