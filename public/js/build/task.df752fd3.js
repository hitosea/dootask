import{b as n}from"./TaskDetail.aa3e58b9.js";import{m as r,n as o}from"./app.712992b4.js";import"./ProjectLog.c93b55a2.js";import"./DialogWrapper.21488ea4.js";import"./longpress.43ca7fd9.js";import"./index.e2108e51.js";import"./UserSelect.f431d4e5.js";import"./ImgUpload.d3e01cb8.js";import"./details.bff0cb68.js";import"./tip.e68c6db5.js";import"./TaskMenu.42cd5a16.js";import"./TEditor.ada45f62.js";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"electron-task"},[s("PageTitle",{attrs:{title:t.taskInfo.name}}),t.loadIng>0?s("Loading"):s("TaskDetail",{ref:"taskDetail",attrs:{"task-id":t.taskInfo.id,"open-task":t.taskInfo,"can-update-blur":t.canUpdateBlur}})],1)},c=[];const d={components:{TaskDetail:n},data(){return{loadIng:0,canUpdateBlur:!0}},mounted(){document.addEventListener("keydown",this.shortcutEvent),this.$isSubElectron&&(window.__onBeforeUnload=()=>{if(this.$refs.taskDetail.checkUpdate())return this.canUpdateBlur=!1,$A.modalConfirm({content:"\u4FEE\u6539\u7684\u5185\u5BB9\u5C1A\u672A\u4FDD\u5B58\uFF0C\u771F\u7684\u8981\u653E\u5F03\u4FEE\u6539\u5417\uFF1F",cancelText:"\u53D6\u6D88",okText:"\u653E\u5F03",onOk:()=>{this.$Electron.sendMessage("windowDestroy")},onCancel:()=>{this.$refs.taskDetail.checkUpdate(!1),this.canUpdateBlur=!0}}),!0})},beforeDestroy(){document.removeEventListener("keydown",this.shortcutEvent)},computed:{...r(["cacheTasks"]),taskId(){const{taskId:t}=this.$route.params;return parseInt(/^\d+$/.test(t)?t:0)},taskInfo(){return this.cacheTasks.find(({id:t})=>t===this.taskId)||{}}},watch:{taskId:{handler(){this.getInfo()},immediate:!0}},methods:{getInfo(){this.taskId<=0||(this.loadIng++,this.$store.dispatch("getTaskOne",{task_id:this.taskId,archived:"all"}).then(()=>{this.$store.dispatch("getTaskContent",this.taskId),this.$store.dispatch("getTaskFiles",this.taskId),this.$store.dispatch("getTaskForParent",this.taskId).catch(()=>{}),this.$store.dispatch("getTaskPriority").catch(()=>{})}).catch(({msg:t})=>{$A.modalError({content:t,onOk:()=>{this.$Electron&&window.close()}})}).finally(t=>{this.loadIng--}))},shortcutEvent(t){(t.metaKey||t.ctrlKey)&&t.keyCode===83&&(t.preventDefault(),this.$refs.taskDetail.checkUpdate(!0))}}},a={};var l=o(d,i,c,!1,h,"7af6ba13",null,null);function h(t){for(let e in a)this[e]=a[e]}var E=function(){return l.exports}();export{E as default};
