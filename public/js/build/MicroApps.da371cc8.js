import{u as i,m as r,V as s,s as p,U as o,i as l,d as h,l as d,E as u,n as m}from"./app.350b47a4.js";import{D as c}from"./DialogWrapper.36672b4b.js";var f=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"page-microapp"},[a.showSpin?t("transition",{attrs:{name:"microapp-load"}},[t("div",{staticClass:"microapp-load"},[t("Loading")],1)]):a._e(),a.url&&!a.loading?t("micro-app",{attrs:{name:a.name,url:a.url,inline:"","keep-alive":"",disableSandbox:"",data:a.appData},on:{created:a.handleCreate,beforemount:a.handleBeforeMount,mounted:a.handleMount,unmount:a.handleUnmount,error:a.handleError,datachange:a.handleDataChange}}):a._e()],1)},g=[];const v={name:"MicroApps",props:{name:{type:String,default:"micro-app"},url:{type:String,default:""},path:{type:String,default:""},datas:{type:Object,default:()=>{}}},data(){return{showSpin:!1,loading:!1,appUrl:"",appData:{}}},deactivated(){},mounted(){this.showSpin=!0,this.appData=this.getAppData},watch:{loading(a){a&&(this.showSpin=!0)},url(a){this.loading=!0,this.$nextTick(()=>{this.loading=!1;let e=$A.apiUrl(a);e.indexOf("http")==-1&&(e=window.location.origin+e),this.appUrl={}.VITE_OKR_WEB_URL||e})},path(a){this.appData={path:a}},datas:{handler(a){this.appData=a},deep:!0},$route:{handler(a){(a.name=="manage-apps"||a.name=="single-apps")&&(this.appData={path:a.hash||a.fullPath})},immediate:!0},userToken(a){this.appData=this.getAppData,a?this.loading=!1:(i({destroy:!0}),this.loading=!0)}},computed:{...r(["userInfo","themeMode"]),getAppData(){return{type:"init",url:this.url,vues:{Vue:s,store:p,components:{DialogWrapper:c,UserSelect:o,DatePicker:l.exports.DatePicker}},theme:this.themeMode,languages:{languageList:h,languageType:d},userInfo:this.userInfo,path:this.path,electron:this.$Electron}}},methods:{handleCreate(a){window.eventCenterForAppNameVite=new u(a.detail.name),this.appData=this.getAppData,this.showSpin=!window["eventCenterForAppNameViteLoad-"+a.detail.name]},handleBeforeMount(a){window["eventCenterForAppNameViteLoad-"+a.detail.name]=1},handleMount(a){this.datas&&(this.appData=this.datas),this.path&&(this.appData.path=this.path),this.showSpin=!1},handleUnmount(a){window.dispatchEvent(new Event("apps-unmount"))},handleError(a){console.error("\u5B50\u5E94\u7528\u52A0\u8F7D\u51FA\u9519\u4E86",a.detail.error)},handleDataChange(a){}}},n={};var _=m(v,f,g,!1,w,null,null,null);function w(a){for(let e in n)this[e]=n[e]}var S=function(){return _.exports}();export{S as M};
