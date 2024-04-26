import{n as r,e as h,l as v}from"./app.57070a0d.js";import u from"./details.663d818a.js";import{D as c}from"./index.92bfd6b8.js";import{I as m}from"./ImgUpload.b233effb.js";import{A as f}from"./ApproveExport.b1600867.js";import{m as _}from"./vuex.cc7cb26e.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.accd1716.js";import"./@traptitech.363dce05.js";import"./katex.0b94f27c.js";import"./localforage.879ac172.js";import"./markdown-it.f3afa976.js";import"./entities.797c3e49.js";import"./uc.micro.39573202.js";import"./mdurl.2f66c031.js";import"./linkify-it.3ecfda1e.js";import"./punycode.87a5269f.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./vue.eaf71fac.js";import"./axios.6ec123f8.js";import"./le5le-store.b40f9152.js";import"./openpgp_hi.15f91b1d.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.4402036c.js";import"./clipboard.d74ec60d.js";import"./view-design-hi.76cbd75d.js";import"./default-passive-events.a3d698c9.js";import"./vuedraggable.c8fae132.js";import"./sortablejs.8b819437.js";import"./vue-resize-observer.5fb00380.js";import"./element-sea.b954f5d6.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.e60103ad.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.289edf0d.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var g=function(){var t,i,a,e,s=this,o=s.$createElement,n=s._self._c||o;return n("div",{staticClass:"approve-list"},[n("h2",[n("span",{staticClass:"list-name"},[s._v(s._s(s.$L(s.data.proc_def_name)))]),s.data.state==0?n("Tag",{attrs:{color:"cyan"}},[s._v(s._s(s.$L("\u5F85\u5BA1\u6279")))]):s._e(),s.data.state==1?n("Tag",{attrs:{color:"cyan"}},[s._v(s._s(s.$L("\u5BA1\u6279\u4E2D")))]):s._e(),s.data.state==2?n("Tag",{attrs:{color:"green"}},[s._v(s._s(s.$L("\u5DF2\u901A\u8FC7")))]):s._e(),s.data.state==3?n("Tag",{attrs:{color:"red"}},[s._v(s._s(s.$L("\u5DF2\u62D2\u7EDD")))]):s._e(),s.data.state==4?n("Tag",{attrs:{color:"red"}},[s._v(s._s(s.$L("\u5DF2\u64A4\u56DE")))]):s._e()],1),(t=s.data.var)!==null&&t!==void 0&&t.type?n("p",[s._v(s._s(s.$L("\u5047\u671F\u7C7B\u578B"))+"\uFF1A"),n("span",[s._v(s._s(s.$L((i=s.data.var)===null||i===void 0?void 0:i.type)))])]):s._e(),n("p",[s._v(s._s(s.$L("\u5F00\u59CB\u65F6\u95F4"))+"\uFF1A"),n("span",[s._v(s._s((a=s.data.var)===null||a===void 0?void 0:a.start_time))])]),n("p",[s._v(s._s(s.$L("\u7ED3\u675F\u65F6\u95F4"))+"\uFF1A"),n("span",[s._v(s._s((e=s.data.var)===null||e===void 0?void 0:e.end_time))])]),n("div",{staticClass:"list-member"},[n("span",[n("Avatar",{attrs:{src:s.data.userimg,size:"20"}}),s._v(" "+s._s(s.data.start_user_name)+" ")],1),n("span",[s._v(" "+s._s(s.$L("\u53D1\u8D77\u65F6\u95F4"))+"\uFF1A"+s._s(s.data.start_time)+" ")])])])},y=[];const L={name:"list",props:{data:{type:Object,default(){return{}}}},data(){return{}}},l={};var w=r(L,g,y,!1,$,null,null,null);function $(t){for(let i in l)this[i]=l[i]}var S=function(){return w.exports}(),T=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"page-approve-setting"},[a("Row",{staticClass:"approve-row",attrs:{gutter:16}},[a("Col",{attrs:{xxl:{span:6},xl:{span:8},lg:{span:12},sm:{span:12},xs:{span:24}}},[a("div",{staticClass:"approve-col-box approve-col-add",on:{click:t.add}},[a("Icon",{attrs:{type:"md-add"}})],1)]),t._l(t.list,function(e,s){return a("Col",{key:s,attrs:{xxl:{span:6},xl:{span:8},lg:{span:12},sm:{span:12},xs:{span:24}}},[a("div",{staticClass:"approve-col-box approve-col-for",on:{click:function(o){return t.edit(e)}}},[a("p",[t._v(t._s(t.$L("\u6D41\u7A0B\u540D\u79F0"))+"\uFF1A"),a("span",{staticClass:"approve-name"},[t._v(t._s(t.$L(e.name)))])]),a("Divider",{staticClass:"divider"}),a("div",{staticClass:"approve-button-box",on:{click:function(o){return o.stopPropagation(),t.edit(e)}}},[a("p",[t._v(t._s(t.$L("\u5DF2\u53D1\u5E03")))]),a("p",{staticClass:"icon-warp",on:{click:function(o){return o.stopPropagation(),t.change(e)}}},[a("Icon",{staticClass:"delcon",attrs:{type:"md-trash",size:"16"}})],1)])],1)])})],2),a("DrawerOverlay",{attrs:{placement:"right",size:1200},model:{value:t.approvalSettingShow,callback:function(e){t.approvalSettingShow=e},expression:"approvalSettingShow"}},[a("iframe",{attrs:{src:t.iframeSrc}})])],1)},k=[];const b={name:"ApproveSetting",components:{DrawerOverlay:c},data(){return{value:!1,loadIng:0,approvalSettingShow:!1,iframeSrc:"",name:"",list:[]}},watch:{approvalSettingShow(t){t&&(this.iframeSrc=$A.mainUrl(`approve/#/?name=${this.name}&token=${h.userToken}&lang=${v}`))}},mounted(){window.addEventListener("message",this.saveSuccess),this.getList()},beforeDestroy(){window.removeEventListener("message",this.saveSuccess)},methods:{getList(){this.$store.dispatch("call",{url:"approve/procdef/all",method:"post"}).then(({data:t})=>{this.list=t.rows,t.rows.forEach((i,a)=>{this.list.forEach((e,s)=>{e.name==i.name&&(e.issue=!0,e.id=i.id,e.version=i.version)})})}).catch(({msg:t})=>{$A.modalError(t)}).finally(t=>{this.loadIng--})},saveSuccess(t){typeof t.data=="string"&&JSON.parse(t.data).method=="saveSuccess"&&(this.getList(),this.list.forEach((a,e)=>{a.name==this.name&&(a.issue=!0,this.$set(this.list,e,a))}),this.approvalSettingShow=!1,$A.messageSuccess("\u53D1\u5E03\u6210\u529F"))},add(){$A.modalInput({title:"\u6DFB\u52A0\u6D41\u7A0B",placeholder:"\u8BF7\u8F93\u5165\u6D41\u7A0B\u540D\u79F0",okText:"\u786E\u5B9A",onOk:t=>t?(this.name=t,this.approvalSettingShow=!0,!1):"\u8BF7\u8F93\u5165\u6D41\u7A0B\u540D\u79F0"})},edit(t){this.name=t.name,this.approvalSettingShow=!0},change(t){this.$nextTick(()=>{t.issue=!0,$A.modalConfirm({title:"\u5220\u9664",content:"\u5C06\u4F1A\u6E05\u7A7A\u6D41\u7A0B\u6570\u636E\uFF0C\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D",onOk:()=>{this.del(t)}})})},del(t){if(!t.id)return t.issue=!1,!0;this.$store.dispatch("call",{url:"approve/procdef/del",data:{id:t.id},method:"post"}).then(({data:i})=>{t.issue=!1,this.getList(),$A.messageSuccess("\u6210\u529F")}).catch(({msg:i})=>{$A.modalError(i)}).finally(i=>{this.loadIng--})}}},d={};var x=r(b,T,k,!1,C,"8a6d83be",null,null);function C(t){for(let i in d)this[i]=d[i]}var I=function(){return x.exports}(),D=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"page-approve"},[a("PageTitle",{attrs:{title:t.$L("\u5BA1\u6279\u4E2D\u5FC3")}}),a("div",{ref:"fileWrapper",staticClass:"approve-wrapper"},[a("div",{staticClass:"approve-head"},[a("div",{staticClass:"approve-nav"},[a("div",{staticClass:"common-nav-back",on:{click:function(e){return t.goBack()}}},[a("i",{staticClass:"taskfont"},[t._v("\uE676")])]),a("h1",[t._v(t._s(t.$L("\u5BA1\u6279\u4E2D\u5FC3")))])]),a("Button",{directives:[{name:"show",rawName:"v-show",value:t.showType==1&&t.isShowIcon,expression:"showType == 1 && isShowIcon"}],staticClass:"ivu-btn-icon-only",attrs:{loading:t.addLoadIng,type:"primary",shape:"circle",icon:"md-add"},on:{click:t.addApply}}),t.showType==1&&!t.isShowIcon?a("Button",{attrs:{loading:t.addLoadIng,type:"primary"},on:{click:t.addApply}},[a("span",[t._v(" "+t._s(t.$L("\u6DFB\u52A0\u7533\u8BF7"))+" ")])]):t._e(),a("Button",{directives:[{name:"show",rawName:"v-show",value:t.showType==1&&t.userIsAdmin&&!t.isShowIcon,expression:"showType == 1 && userIsAdmin && !isShowIcon"}],on:{click:function(e){t.exportApproveShow=!0}}},[a("span",[t._v(" "+t._s(t.$L("\u5BFC\u51FA\u5BA1\u6279\u6570\u636E"))+" ")])]),t.showType==1&&t.userIsAdmin&&t.isShowIcon?a("Button",{staticClass:"ivu-btn-icon-only",attrs:{shape:"circle"},on:{click:function(e){t.exportApproveShow=!0}}},[a("i",{staticClass:"taskfont"},[t._v("\uE7A8")])]):t._e(),t.userIsAdmin&&!t.isShowIcon?a("Button",{on:{click:function(e){t.showType=t.showType==1?2:1}}},[a("span",[t._v(" "+t._s(t.showType==1?t.$L("\u6D41\u7A0B\u8BBE\u7F6E"):t.$L("\u8FD4\u56DE"))+" ")])]):t._e(),t.userIsAdmin&&t.isShowIcon?a("Button",{staticClass:"ivu-btn-icon-only",attrs:{shape:"circle"},on:{click:function(e){t.showType=t.showType==1?2:1}}},[t.showType==1?a("i",{staticClass:"taskfont"},[t._v("\uE67B")]):t._e(),t.showType==2?a("i",{staticClass:"taskfont"},[t._v("\uE637")]):t._e()]):t._e()],1),a("Tabs",{directives:[{name:"show",rawName:"v-show",value:t.showType==1,expression:"showType==1"}],staticClass:"page-approve-tabs",attrs:{value:t.tabsValue,size:"small"},on:{"on-click":t.tabsClick}},[a("TabPane",{staticStyle:{height:"100%"},attrs:{label:t.$L("\u5F85\u529E")+(t.unreadTotal>0?"("+t.unreadTotal+")":""),name:"unread"}},[a("div",{staticClass:"approve-main-search"},[a("div",[a("Select",{on:{"on-change":function(e){return t.tabsClick(!1,0)}},model:{value:t.approvalType,callback:function(e){t.approvalType=e},expression:"approvalType"}},t._l(t.approvalList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1),a("Input",{attrs:{placeholder:t.$L("\u8BF7\u8F93\u5165\u7528\u6237\u540D")},model:{value:t.approvalName,callback:function(e){t.approvalName=e},expression:"approvalName"}}),a("Button",{directives:[{name:"show",rawName:"v-show",value:!t.isShowIcon,expression:"!isShowIcon"}],attrs:{type:"primary",loading:t.loadIng,icon:"ios-search"},on:{click:function(e){return t.tabsClick(!1,0)}}},[t._v(t._s(t.$L("\u641C\u7D22")))]),a("Button",{directives:[{name:"show",rawName:"v-show",value:t.isShowIcon,expression:"isShowIcon"}],attrs:{type:"primary",loading:t.loadIng,icon:"ios-search"},on:{click:function(e){return t.tabsClick(!1,0)}}})],1)]),t.loadIng&&t.unreadList.length==0?a("div",{staticClass:"approve-load"},[a("Loading")],1):t.unreadList.length==0?a("div",{staticClass:"noData"},[t._v(t._s(t.$L("\u6682\u65E0\u6570\u636E")))]):a("div",{staticClass:"approve-mains"},[a("div",{staticClass:"approve-main-left"},[a("div",{staticClass:"approve-main-list",on:{scroll:t.handleScroll}},[t._l(t.unreadList,function(e,s){return a("div",{on:{click:function(o){return o.stopPropagation(),t.clickList(e,s)}}},[a("list",{class:{"approve-list-active":e._active},attrs:{data:e}})],1)}),t.unreadList.length<t.unreadTotal?a("div",{staticClass:"load"},[a("Loading")],1):t._e()],2)]),a("div",{staticClass:"approve-main-right"},[!t.detailsShow&&t.tabsValue=="unread"?a("listDetails",{attrs:{data:t.details},on:{approve:t.tabsClick,revocation:t.tabsClick}}):t._e()],1)])]),a("TabPane",{attrs:{label:t.$L("\u5DF2\u529E"),name:"done"}},[a("div",{staticClass:"approve-main-search"},[a("div",[a("Select",{on:{"on-change":function(e){return t.tabsClick(!1,0)}},model:{value:t.approvalType,callback:function(e){t.approvalType=e},expression:"approvalType"}},t._l(t.approvalList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1),a("Input",{attrs:{placeholder:t.$L("\u8BF7\u8F93\u5165\u7528\u6237\u540D")},model:{value:t.approvalName,callback:function(e){t.approvalName=e},expression:"approvalName"}}),a("Button",{directives:[{name:"show",rawName:"v-show",value:!t.isShowIcon,expression:"!isShowIcon"}],attrs:{type:"primary",loading:t.loadIng,icon:"ios-search"},on:{click:function(e){return t.tabsClick(!1,0)}}},[t._v(t._s(t.$L("\u641C\u7D22")))]),a("Button",{directives:[{name:"show",rawName:"v-show",value:t.isShowIcon,expression:"isShowIcon"}],attrs:{type:"primary",loading:t.loadIng,icon:"ios-search"},on:{click:function(e){return t.tabsClick(!1,0)}}})],1)]),t.loadIng&&t.doneList.length==0?a("div",{staticClass:"approve-load"},[a("Loading")],1):t.doneList.length==0?a("div",{staticClass:"noData"},[t._v(t._s(t.$L("\u6682\u65E0\u6570\u636E")))]):a("div",{staticClass:"approve-mains"},[a("div",{staticClass:"approve-main-left"},[a("div",{staticClass:"approve-main-list",on:{scroll:t.handleScroll}},[t._l(t.doneList,function(e,s){return a("div",{on:{click:function(o){return o.stopPropagation(),t.clickList(e,s)}}},[a("list",{class:{"approve-list-active":e._active},attrs:{data:e}})],1)}),t.doneList.length<t.doneTotal?a("div",{staticClass:"load"},[a("Loading")],1):t._e()],2)]),a("div",{staticClass:"approve-main-right"},[!t.detailsShow&&t.tabsValue=="done"?a("listDetails",{attrs:{data:t.details},on:{approve:t.tabsClick,revocation:t.tabsClick}}):t._e()],1)])]),a("TabPane",{attrs:{label:t.$L("\u6284\u9001\u6211"),name:"notify"}},[a("div",{staticClass:"approve-main-search"},[a("div",{staticClass:"approve-main-search"},[a("div",[a("Select",{on:{"on-change":function(e){return t.tabsClick(!1,0)}},model:{value:t.approvalType,callback:function(e){t.approvalType=e},expression:"approvalType"}},t._l(t.approvalList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1),a("Input",{attrs:{placeholder:t.$L("\u8BF7\u8F93\u5165\u7528\u6237\u540D")},model:{value:t.approvalName,callback:function(e){t.approvalName=e},expression:"approvalName"}}),a("Button",{directives:[{name:"show",rawName:"v-show",value:!t.isShowIcon,expression:"!isShowIcon"}],attrs:{type:"primary",loading:t.loadIng,icon:"ios-search"},on:{click:function(e){return t.tabsClick(!1,0)}}},[t._v(t._s(t.$L("\u641C\u7D22")))]),a("Button",{directives:[{name:"show",rawName:"v-show",value:t.isShowIcon,expression:"isShowIcon"}],attrs:{type:"primary",loading:t.loadIng,icon:"ios-search"},on:{click:function(e){return t.tabsClick(!1,0)}}})],1)])]),t.loadIng&&t.notifyList.length==0?a("div",{staticClass:"approve-load"},[a("Loading")],1):t.notifyList.length==0?a("div",{staticClass:"noData"},[t._v(t._s(t.$L("\u6682\u65E0\u6570\u636E")))]):a("div",{staticClass:"approve-mains"},[a("div",{staticClass:"approve-main-left"},[a("div",{staticClass:"approve-main-list",on:{scroll:t.handleScroll}},[t._l(t.notifyList,function(e,s){return a("div",{on:{click:function(o){return o.stopPropagation(),t.clickList(e,s)}}},[a("list",{class:{"approve-list-active":e._active},attrs:{data:e}})],1)}),t.notifyList.length<t.notifyTotal?a("div",{staticClass:"load"},[a("Loading")],1):t._e()],2)]),a("div",{staticClass:"approve-main-right"},[!t.detailsShow&&t.tabsValue=="notify"?a("listDetails",{attrs:{data:t.details},on:{approve:t.tabsClick,revocation:t.tabsClick}}):t._e()],1)])]),a("TabPane",{attrs:{label:t.$L("\u5DF2\u53D1\u8D77"),name:"initiated"}},[a("div",{staticClass:"approve-main-search"},[a("div",[a("Select",{on:{"on-change":function(e){return t.tabsClick(!1,0)}},model:{value:t.approvalType,callback:function(e){t.approvalType=e},expression:"approvalType"}},t._l(t.approvalList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1),a("Select",{on:{"on-change":function(e){return t.tabsClick(!1,0)}},model:{value:t.searchState,callback:function(e){t.searchState=e},expression:"searchState"}},t._l(t.searchStateList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1),a("Input",{attrs:{placeholder:t.$L("\u8BF7\u8F93\u5165\u7528\u6237\u540D")},model:{value:t.approvalName,callback:function(e){t.approvalName=e},expression:"approvalName"}}),a("Button",{directives:[{name:"show",rawName:"v-show",value:!t.isShowIcon,expression:"!isShowIcon"}],attrs:{type:"primary",loading:t.loadIng,icon:"ios-search"},on:{click:function(e){return t.tabsClick(!1,0)}}},[t._v(t._s(t.$L("\u641C\u7D22")))]),a("Button",{directives:[{name:"show",rawName:"v-show",value:t.isShowIcon,expression:"isShowIcon"}],attrs:{type:"primary",loading:t.loadIng,icon:"ios-search"},on:{click:function(e){return t.tabsClick(!1,0)}}})],1)]),t.loadIng&&t.initiatedList.length==0?a("div",{staticClass:"approve-load"},[a("Loading")],1):t.initiatedList.length==0?a("div",{staticClass:"noData"},[t._v(t._s(t.$L("\u6682\u65E0\u6570\u636E")))]):a("div",{staticClass:"approve-mains"},[a("div",{staticClass:"approve-main-left"},[a("div",{staticClass:"approve-main-list",on:{scroll:t.handleScroll}},[t._l(t.initiatedList,function(e,s){return a("div",{on:{click:function(o){return o.stopPropagation(),t.clickList(e,s)}}},[a("list",{class:{"approve-list-active":e._active},attrs:{data:e}})],1)}),t.initiatedList.length<t.initiatedTotal?a("div",{staticClass:"load"},[a("Loading")],1):t._e()],2)]),a("div",{staticClass:"approve-main-right"},[!t.detailsShow&&t.tabsValue=="initiated"?a("listDetails",{attrs:{data:t.details},on:{approve:t.tabsClick,revocation:t.tabsClick}}):t._e()],1)])])],1),a("ApproveSetting",{directives:[{name:"show",rawName:"v-show",value:t.showType!=1,expression:"showType!=1"}]})],1),a("DrawerOverlay",{attrs:{placement:"right",size:600},model:{value:t.detailsShow,callback:function(e){t.detailsShow=e},expression:"detailsShow"}},[t.detailsShow?a("listDetails",{staticStyle:{height:"100%","border-radius":"10px"},attrs:{data:t.details},on:{approve:t.tabsClick,revocation:t.tabsClick}}):t._e()],1),a("Modal",{staticClass:"page-approve-initiate",attrs:{title:t.$L(t.addTitle),"mask-closable":!1},model:{value:t.addShow,callback:function(e){t.addShow=e},expression:"addShow"}},[a("Form",{ref:"initiateRef",attrs:{model:t.addData,rules:t.addRule,"label-width":"auto"},nativeOn:{submit:function(e){e.preventDefault()}}},[t.departmentList.length>1?a("FormItem",{attrs:{prop:"department_id",label:t.$L("\u9009\u62E9\u90E8\u95E8")}},[a("Select",{attrs:{placeholder:t.$L("\u8BF7\u9009\u62E9\u90E8\u95E8")},model:{value:t.addData.department_id,callback:function(e){t.$set(t.addData,"department_id",e)},expression:"addData.department_id"}},t._l(t.departmentList,function(e,s){return a("Option",{key:s,attrs:{value:e.id}},[t._v(t._s(e.name))])}),1)],1):t._e(),a("FormItem",{attrs:{prop:"applyType",label:t.$L("\u7533\u8BF7\u7C7B\u578B")}},[a("Select",{attrs:{placeholder:t.$L("\u8BF7\u9009\u62E9\u7533\u8BF7\u7C7B\u578B")},model:{value:t.addData.applyType,callback:function(e){t.$set(t.addData,"applyType",e)},expression:"addData.applyType"}},t._l(t.procdefList,function(e,s){return a("Option",{key:s,attrs:{value:e.name}},[t._v(t._s(e.name))])}),1)],1),(t.addData.applyType||"").indexOf("\u8BF7\u5047")!==-1?a("FormItem",{attrs:{prop:"type",label:t.$L("\u5047\u671F\u7C7B\u578B")}},[a("Select",{attrs:{placeholder:t.$L("\u8BF7\u9009\u62E9\u5047\u671F\u7C7B\u578B")},model:{value:t.addData.type,callback:function(e){t.$set(t.addData,"type",e)},expression:"addData.type"}},t._l(t.selectTypes,function(e,s){return a("Option",{key:s,attrs:{value:e}},[t._v(t._s(t.$L(e)))])}),1)],1):t._e(),a("FormItem",{attrs:{prop:"startTime",label:t.$L("\u5F00\u59CB\u65F6\u95F4")}},[a("div",{staticStyle:{display:"flex",gap:"3px"}},[a("DatePicker",{staticStyle:{flex:"1","min-width":"122px"},attrs:{type:"date",format:"yyyy-MM-dd",editable:!1,placeholder:t.$L("\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4")},on:{"on-change":function(e){t.addData.startTime=e}},model:{value:t.addData.startTime,callback:function(e){t.$set(t.addData,"startTime",e)},expression:"addData.startTime"}}),a("Select",{staticStyle:{"max-width":"100px"},model:{value:t.addData.startTimeHour,callback:function(e){t.$set(t.addData,"startTimeHour",e)},expression:"addData.startTimeHour"}},t._l(24,function(e,s){return a("Option",{key:s,attrs:{value:e-1<10?"0"+(e-1):e-1}},[t._v(t._s(e-1<10?"0":"")+t._s(e-1))])}),1),a("Select",{staticStyle:{"max-width":"100px"},model:{value:t.addData.startTimeMinute,callback:function(e){t.$set(t.addData,"startTimeMinute",e)},expression:"addData.startTimeMinute"}},[a("Option",{attrs:{value:"00"}},[t._v("00")]),a("Option",{attrs:{value:"30"}},[t._v("30")])],1)],1)]),a("FormItem",{attrs:{prop:"endTime",label:t.$L("\u7ED3\u675F\u65F6\u95F4")}},[a("div",{staticStyle:{display:"flex",gap:"3px"}},[a("DatePicker",{staticStyle:{flex:"1","min-width":"122px"},attrs:{type:"date",format:"yyyy-MM-dd",editable:!1,placeholder:t.$L("\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4")},on:{"on-change":function(e){t.addData.endTime=e}},model:{value:t.addData.endTime,callback:function(e){t.$set(t.addData,"endTime",e)},expression:"addData.endTime"}}),a("Select",{staticStyle:{"max-width":"100px"},model:{value:t.addData.endTimeHour,callback:function(e){t.$set(t.addData,"endTimeHour",e)},expression:"addData.endTimeHour"}},t._l(24,function(e,s){return a("Option",{key:s,attrs:{value:e-1<10?"0"+(e-1):e-1+""}},[t._v(t._s(e-1<10?"0":"")+t._s(e-1))])}),1),a("Select",{staticStyle:{"max-width":"100px"},model:{value:t.addData.endTimeMinute,callback:function(e){t.$set(t.addData,"endTimeMinute",e)},expression:"addData.endTimeMinute"}},[a("Option",{attrs:{value:"00"}},[t._v("00")]),a("Option",{attrs:{value:"30"}},[t._v("30")])],1)],1)]),a("FormItem",{attrs:{prop:"description",label:t.$L("\u4E8B\u7531")}},[a("Input",{attrs:{type:"textarea"},model:{value:t.addData.description,callback:function(e){t.$set(t.addData,"description",e)},expression:"addData.description"}})],1),a("FormItem",{attrs:{prop:"other",label:t.$L("\u56FE\u7247")}},[a("ImgUpload",{attrs:{num:3,width:2e3,height:2e3,whcut:0},model:{value:t.addData.other,callback:function(e){t.$set(t.addData,"other",e)},expression:"addData.other"}})],1)],1),a("div",{staticClass:"adaption",attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"default"},on:{click:function(e){t.addShow=!1}}},[t._v(t._s(t.$L("\u53D6\u6D88")))]),a("Button",{attrs:{type:"primary",loading:t.loadIng>0},on:{click:t.onInitiate}},[t._v(t._s(t.$L("\u786E\u8BA4")))])],1)],1),a("ApproveExport",{model:{value:t.exportApproveShow,callback:function(e){t.exportApproveShow=e},expression:"exportApproveShow"}})],1)},P=[];const N={components:{list:S,listDetails:u,DrawerOverlay:c,ImgUpload:m,ApproveSetting:I,ApproveExport:f},name:"approve",data(){return{showType:1,exportApproveShow:!1,isShowIcon:!1,modalTransferIndex:window.modalTransferIndex,minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),currentDate:new Date(2021,0,17),procdefList:[],page:1,pageSize:10,total:0,noText:"",loadIng:!1,addLoadIng:!1,tabsValue:"",approvalType:"all",approvalName:"",approvalList:[{value:"all",label:this.$L("\u5168\u90E8\u5BA1\u6279")}],searchState:"all",searchStateList:[{value:"all",label:this.$L("\u5168\u90E8\u72B6\u6001")},{value:1,label:this.$L("\u5BA1\u6279\u4E2D")},{value:2,label:this.$L("\u5DF2\u901A\u8FC7")},{value:3,label:this.$L("\u5DF2\u62D2\u7EDD")},{value:4,label:this.$L("\u5DF2\u64A4\u56DE")}],unreadList:[],unreadPage:1,unreadTotal:0,unreadLoad:!1,doneList:[],donePage:1,doneLoad:!1,doneTotal:0,notifyList:[],notifyPage:1,notifyLoad:!1,notifyTotal:0,initiatedList:[],initiatedPage:1,initiatedLoad:!1,initiatedTotal:0,details:{},detailsShow:!1,addTitle:"",addShow:!1,startTimeOpen:!1,endTimeOpen:!1,addData:{department_id:0,applyType:"",type:"",startTime:"2023-04-20",startTimeHour:"09",startTimeMinute:"00",endTime:"2023-04-20",endTimeHour:"18",endTimeMinute:"00",other:""},addRule:{department_id:{type:"number",required:!0,message:this.$L("\u8BF7\u9009\u62E9\u90E8\u95E8\uFF01"),trigger:"change"},applyType:{type:"string",required:!0,message:this.$L("\u8BF7\u9009\u62E9\u7533\u8BF7\u7C7B\u578B\uFF01"),trigger:"change"},type:{type:"string",required:!0,message:this.$L("\u8BF7\u9009\u62E9\u5047\u671F\u7C7B\u578B\uFF01"),trigger:"change"},startTime:{type:"string",required:!0,message:this.$L("\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4\uFF01"),trigger:"change"},endTime:{type:"string",required:!0,message:this.$L("\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4\uFF01"),trigger:"change"},description:{type:"string",required:!0,message:this.$L("\u8BF7\u8F93\u5165\u4E8B\u7531\uFF01"),trigger:"change"}},selectTypes:["\u5E74\u5047","\u4E8B\u5047","\u75C5\u5047","\u8C03\u4F11","\u4EA7\u5047","\u966A\u4EA7\u5047","\u5A5A\u5047","\u4E27\u5047","\u54FA\u4E73\u5047"],showDateTime:!1}},computed:{..._(["wsMsg","userInfo","userIsAdmin","windowWidth"]),departmentList(){let t=(this.userInfo.department_name||"").split(",");return(this.userInfo.department||[]).map((i,a)=>({id:i,name:t[a]}))}},watch:{$route(t){t.name=="manage-approve"&&this.init()},wsMsg:{handler(t){var o,n;const{type:i,action:a,mode:e,data:s}=t;switch(i){case"approve":a=="unread"&&this.tabsClick();break;case"dialog":e=="add"&&((n=(o=s==null?void 0:s.msg)==null?void 0:o.text)==null?void 0:n.indexOf("open-approve-details"))!=-1&&this.tabsClick();break}},deep:!0},addShow(t){t||(this.addData.other="")},showType(t){t==1&&this.init()},windowWidth(t){this.isShowIcon=t<515}},activated(){this.showType=1},mounted(){this.tabsValue="unread",this.init()},methods:{init(){this.tabsClick(),this.getProcdefList(),this.tabsValue!="unread"&&this.getUnreadList(),this.addData.department_id=this.userInfo.department[0]||0,this.addData.startTime=this.addData.endTime=this.getCurrentDate(),this.isShowIcon=this.windowWidth<515},getProcdefList(){return new Promise((t,i)=>{this.$store.dispatch("call",{url:"approve/procdef/all",method:"post"}).then(({data:a})=>{this.procdefList=a.rows||[],this.approvalList=this.procdefList.map(e=>({value:e.name,label:e.name})),this.approvalList.unshift({value:"all",label:this.$L("\u5168\u90E8\u5BA1\u6279")}),t()}).catch(({msg:a})=>{$A.modalError(a),i()})})},getCurrentDate(){const t=new Date,i=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),e=String(t.getDate()).padStart(2,"0");return`${i}-${a}-${e}`},tabsClick(t,i=1e3){!t&&this.__tabsClick&&i>0||(this.__tabsClick=setTimeout(()=>{this.__tabsClick=null},i),this.tabsValue=t||this.tabsValue,t&&(this.approvalType=this.searchState="all",this.approvalName=""),this.detailsShow=!1,this.loadIng=!0,this.tabsValue=="unread"&&(t===!1&&(this.unreadPage=1,this.unreadList=[]),this.getUnreadList()),this.tabsValue=="done"&&(t===!1&&(this.donePage=1,this.doneList=[]),this.getDoneList()),this.tabsValue=="notify"&&(t===!1&&(this.notifyPage=1,this.notifyList=[]),this.getNotifyList()),this.tabsValue=="initiated"&&(t===!1&&(this.initiatedPage=1,this.initiatedList=[]),this.getInitiatedList()))},clickList(t){if(this.unreadList.map(i=>{i._active=!1}),this.doneList.map(i=>{i._active=!1}),this.notifyList.map(i=>{i._active=!1}),this.initiatedList.map(i=>{i._active=!1}),window.innerWidth<426){this.goForward({name:"manage-approve-details",query:{id:t.id}});return}window.innerWidth<1010?this.detailsShow=!0:t._active=!0,this.details={},this.$nextTick(()=>{this.details=t})},handleScroll(t){t.target.scrollTop+t.target.clientHeight>=t.target.scrollHeight&&(this.tabsValue=="unread"&&!this.unreadLoad&&this.unreadList.length<this.unreadTotal&&(this.unreadLoad=!0,this.unreadPage=this.unreadPage+1,this.getUnreadList("scroll")),this.tabsValue=="done"&&!this.doneLoad&&this.doneList.length<this.doneTotal&&(this.doneLoad=!0,this.donePage=this.donePage+1,this.getDoneList("scroll")),this.tabsValue=="notify"&&!this.notifyLoad&&this.notifyList.length<this.notifyTotal&&(this.notifyLoad=!0,this.notifyPage=this.notifyPage+1,this.getNotifyList("scroll")),this.tabsValue=="initiated"&&!this.initiatedLoad&&this.initiatedList.length<this.initiatedTotal&&(this.initiatedLoad=!0,this.initiatedPage=this.initiatedPage+1,this.getInitiatedList("scroll")))},getUnreadList(t="init"){this.$store.dispatch("call",{method:"get",url:"approve/process/findTask",data:{page:t=="scroll"?this.unreadPage:1,page_size:t=="scroll"?this.pageSize:this.unreadPage*this.pageSize,proc_def_name:this.approvalType=="all"?"":this.approvalType,username:this.approvalName}}).then(({data:i})=>{this.updateData("unread",i,t)}).catch(i=>{$A.modalError(i)}).finally(i=>{this.loadIng=!1,this.unreadLoad=!1})},getDoneList(t="init"){this.$store.dispatch("call",{method:"get",url:"approve/procHistory/findTask",data:{page:t=="scroll"?this.donePage:1,page_size:t=="scroll"?this.pageSize:this.donePage*this.pageSize,proc_def_name:this.approvalType=="all"?"":this.approvalType,username:this.approvalName}}).then(({data:i})=>{this.updateData("done",i,t)}).catch(({msg:i})=>{$A.modalError(i)}).finally(i=>{this.loadIng=!1,this.doneLoad=!1})},getNotifyList(t){this.$store.dispatch("call",{method:"get",url:"approve/procHistory/findProcNotify",data:{page:t=="scroll"?this.notifyPage:1,page_size:t=="scroll"?this.pageSize:this.notifyPage*this.pageSize,proc_def_name:this.approvalType=="all"?"":this.approvalType,username:this.approvalName}}).then(({data:i})=>{this.updateData("notify",i,t)}).catch(({msg:i})=>{$A.modalError(i)}).finally(i=>{this.loadIng=!1,this.notifyLoad=!1})},getInitiatedList(t){this.$store.dispatch("call",{method:"post",url:"approve/process/startByMyselfAll",data:{page:t=="scroll"?this.initiatedPage:1,page_size:t=="scroll"?this.pageSize:this.initiatedPage*this.pageSize,proc_def_name:this.approvalType=="all"?"":this.approvalType,state:this.searchState=="all"?"":this.searchState,username:this.approvalName}}).then(({data:i})=>{this.updateData("initiated",i,t)}).catch(({msg:i})=>{$A.modalError(i)}).finally(i=>{this.loadIng=!1,this.initiatedLoad=!1})},addApply(){this.addLoadIng=!0,this.$store.dispatch("call",{url:"users/basic",data:{userid:[this.userInfo.userid]},skipAuthError:!0}).then(({data:t})=>{var i;this.addData.department_id=((i=t[0])==null?void 0:i.department[0])||0,this.getProcdefList().then(a=>{this.addTitle=this.$L("\u6DFB\u52A0\u7533\u8BF7"),this.addShow=!0,this.addLoadIng=!1}).catch(a=>{this.addLoadIng=!1})}).catch(({msg:t})=>{this.addLoadIng=!1,$A.modalError(t)})},updateData(t,i,a){let e=t+"List";if(this[t+"Total"]=i.total,a!="scroll"?this[e]=i.rows:i.rows.map(s=>{this[e].map(o=>o.id).indexOf(s.id)==-1&&this[e].push(s)}),window.innerWidth>1010){let s=this[e].map((o,n)=>o._active?n:-1).filter(o=>o>-1)[0]||0;this[e].length>0&&(this[e][s]._active=!0,this.tabsValue==t&&this.$nextTick(()=>{this.details=this[e][s]||{}}))}},onInitiate(){this.$refs.initiateRef.validate(t=>{if(t){this.loadIng=!0;var i=JSON.parse(JSON.stringify(this.addData));i.startTime=i.startTime+" "+i.startTimeHour+":"+i.startTimeMinute,i.endTime=i.endTime+" "+i.endTimeHour+":"+i.endTimeMinute,this.addData.other&&(i.other=this.addData.other.map(a=>a.path).join(",")),this.$store.dispatch("call",{url:"approve/process/start",data:{proc_name:i.applyType,department_id:i.department_id,var:JSON.stringify(i)},method:"post"}).then(({data:a,msg:e})=>{$A.messageSuccess(e),this.addShow=!1,this.$refs.initiateRef.resetFields(),this.tabsValue="initiated",this.initiatedList.map(s=>{s._active=!1}),this.$nextTick(()=>{this.tabsClick(!1,0)})}).catch(({msg:a})=>{$A.modalError(a)}).finally(a=>{this.loadIng=!1})}})}}},p={};var A=r(N,D,P,!1,O,null,null,null);function O(t){for(let i in p)this[i]=p[i]}var wt=function(){return A.exports}();export{wt as default};
