import{_ as s}from"./openpgp_hi.15f91b1d.js";import{n as o,U as l}from"./app.ea3ef4bf.js";var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("Form",{staticClass:"report-edit",attrs:{"label-width":"auto"},nativeOn:{submit:function(a){a.preventDefault()}}},[e("FormItem",{attrs:{label:t.$L("\u6C47\u62A5\u7C7B\u578B")}},[e("RadioGroup",{staticClass:"report-radiogroup",attrs:{type:"button","button-style":"solid",readonly:t.id>0},on:{"on-change":t.typeChange},model:{value:t.reportData.type,callback:function(a){t.$set(t.reportData,"type",a)},expression:"reportData.type"}},[e("Radio",{attrs:{label:"weekly",disabled:t.id>0&&t.reportData.type=="daily"}},[t._v(t._s(t.$L("\u5468\u62A5")))]),e("Radio",{attrs:{label:"daily",disabled:t.id>0&&t.reportData.type=="weekly"}},[t._v(t._s(t.$L("\u65E5\u62A5")))])],1),t.id===0?e("ButtonGroup",{staticClass:"report-buttongroup"},[e("ETooltip",{attrs:{disabled:t.$isEEUiApp||t.windowTouch,content:t.prevCycleText,placement:"bottom"}},[e("Button",{attrs:{type:"primary"},on:{click:t.prevCycle}},[e("Icon",{attrs:{type:"ios-arrow-back"}})],1)],1),e("div",{staticClass:"report-buttongroup-vertical"}),e("ETooltip",{attrs:{disabled:t.$isEEUiApp||t.windowTouch||t.reportData.offset>=0,content:t.nextCycleText,placement:"bottom"}},[e("Button",{attrs:{type:"primary",disabled:t.reportData.offset>=0},on:{click:t.nextCycle}},[e("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1)],1):t._e()],1),e("FormItem",{attrs:{label:t.$L("\u6C47\u62A5\u540D\u79F0")}},[e("Input",{attrs:{disabled:""},model:{value:t.reportData.title,callback:function(a){t.$set(t.reportData,"title",a)},expression:"reportData.title"}})],1),e("FormItem",{attrs:{label:t.$L("\u6C47\u62A5\u5BF9\u8C61")}},[e("div",{staticClass:"report-users"},[e("UserSelect",{attrs:{disabledChoice:[t.userId],title:t.$L("\u9009\u62E9\u63A5\u6536\u4EBA")},model:{value:t.reportData.receive,callback:function(a){t.$set(t.reportData,"receive",a)},expression:"reportData.receive"}}),e("a",{staticClass:"report-user-link",attrs:{href:"javascript:void(0);"},on:{click:t.getLastSubmitter}},[t.receiveLoad>0?e("Icon",{staticClass:"icon-loading",attrs:{type:"ios-loading"}}):e("Icon",{attrs:{type:"ios-share-outline"}}),t._v(" "+t._s(t.$L("\u4F7F\u7528\u6211\u4E0A\u6B21\u7684\u6C47\u62A5\u5BF9\u8C61"))+" ")],1)],1)]),e("FormItem",{staticClass:"report-content-editor",attrs:{label:t.$L("\u6C47\u62A5\u5185\u5BB9")}},[e("TEditor",{attrs:{height:"100%"},model:{value:t.reportData.content,callback:function(a){t.$set(t.reportData,"content",a)},expression:"reportData.content"}})],1),e("FormItem",{staticClass:"report-foot"},[e("Button",{staticClass:"report-bottom",attrs:{type:"primary",loading:t.loadIng>0},on:{click:t.handleSubmit}},[t._v(t._s(t.$L(t.id>0?"\u4FEE\u6539":"\u63D0\u4EA4")))])],1)],1)},p=[];const c=()=>s(()=>import("./TEditor.3202cc3b.js"),["js/build/TEditor.3202cc3b.js","js/build/tinymce.c1594aa2.js","js/build/@babel.38585eb3.js","js/build/ImgUpload.fd4c7d27.js","js/build/app.ea3ef4bf.js","js/build/app.ca18e26f.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.09269dc1.js","js/build/localforage.46fb664b.js","js/build/markdown-it.8235c9de.js","js/build/entities.797c3e49.js","js/build/uc.micro.5276dc67.js","js/build/mdurl.25c036fe.js","js/build/linkify-it.b48b7350.js","js/build/punycode.f92dffc3.js","js/build/highlight.js.ab8aeea4.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.686cf470.js","js/build/vue.1c5be313.js","js/build/vuex.cc7cb26e.js","js/build/openpgp_hi.15f91b1d.js","js/build/axios.6ec123f8.js","js/build/le5le-store.6335fa7c.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.e5938850.js","js/build/clipboard.ec9e96ef.js","js/build/view-design-hi.1e6e32e3.js","js/build/vuedraggable.326b11e2.js","js/build/sortablejs.19385b96.js","js/build/vue-resize-observer.60e1f2f5.js","js/build/element-sea.71c7dbcd.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.212d45b6.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.4a10d1df.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),h={name:"ReportEdit",components:{UserSelect:l,TEditor:c},props:{id:{default:0}},data(){return{loadIng:0,receiveLoad:0,reportData:{sign:"",title:"",content:"",type:"weekly",receive:[],id:0,offset:0},prevCycleText:this.$L("\u4E0A\u4E00\u5468"),nextCycleText:this.$L("\u4E0B\u4E00\u5468")}},watch:{id:{handler(t){t>0?this.getDetail(t):(this.reportData.offset=0,this.reportData.type="weekly",this.reportData.receive=[],this.getTemplate())},immediate:!0}},mounted(){},methods:{handleSubmit(){this.id===0&&this.reportData.id>0?$A.modalConfirm({title:"\u8986\u76D6\u63D0\u4EA4",content:"\u4F60\u5DF2\u63D0\u4EA4\u8FC7\u6B64\u65E5\u671F\u7684\u62A5\u544A\uFF0C\u662F\u5426\u8986\u76D6\u63D0\u4EA4\uFF1F",onOk:()=>{this.doSubmit()}}):this.doSubmit()},doSubmit(){this.loadIng++,this.$store.dispatch("call",{url:"report/store",data:this.reportData,method:"post"}).then(({data:t,msg:r})=>{this.reportData.offset=0,this.reportData.type="weekly",this.reportData.receive=[],this.getTemplate(),!this.$isSubElectron&&$A.messageSuccess(r),this.$emit("saveSuccess",{data:t,msg:r})}).catch(({msg:t})=>{$A.messageError(t)}).finally(t=>{this.loadIng--})},getTemplate(){this.loadIng++,this.$store.dispatch("call",{url:"report/template",data:{type:this.reportData.type,offset:this.reportData.offset,id:this.id}}).then(({data:t})=>{t.id?(this.reportData.id=t.id,this.id>0?this.getDetail(t.id):(this.reportData.sign=t.sign,this.reportData.title=t.title,this.reportData.content=t.content)):(this.reportData.id=0,this.reportData.sign=t.sign,this.reportData.title=t.title,this.reportData.content=t.content)}).catch(({msg:t})=>{$A.messageError(t)}).finally(t=>{this.loadIng--})},typeChange(t){this.reportData.offset=0,t==="weekly"?(this.prevCycleText=this.$L("\u4E0A\u4E00\u5468"),this.nextCycleText=this.$L("\u4E0B\u4E00\u5468")):(this.prevCycleText=this.$L("\u4E0A\u4E00\u5929"),this.nextCycleText=this.$L("\u4E0B\u4E00\u5929")),this.getTemplate()},getDetail(t){this.$store.dispatch("call",{url:"report/detail",data:{id:t}}).then(({data:r})=>{this.reportData.title=r.title,this.reportData.content=r.content,this.reportData.receive=r.receives_user.map(({userid:e})=>e),this.reportData.type=r.type_val,this.reportData.id=t}).catch(({msg:r})=>{$A.messageError(r)})},prevCycle(){this.reportData.offset-=1,this.reReportData(),this.getTemplate()},nextCycle(){this.reportData.offset<0&&(this.reportData.offset+=1),this.reReportData(),this.getTemplate()},getLastSubmitter(){setTimeout(t=>{this.receiveLoad++},300),this.$store.dispatch("call",{url:"report/last_submitter"}).then(({data:t})=>{this.reportData.receive=t}).catch(({msg:t})=>{$A.messageError(t)}).finally(t=>{this.receiveLoad--})},reReportData(){this.reportData.title="",this.reportData.content="",this.reportData.receive=[],this.reportData.id=0}}},i={};var d=o(h,n,p,!1,m,null,null,null);function m(t){for(let r in i)this[r]=i[r]}var y=function(){return d.exports}();export{y as R};
