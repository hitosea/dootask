import{m as o,a as r,o as l,n as c}from"./app.cfcd9ffb.js";var u=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"page-setting"},[t("PageTitle",{attrs:{title:e.titleNameRoute}}),t("div",{staticClass:"setting-head"},[t("div",{staticClass:"setting-titbox"},[t("div",{staticClass:"setting-title"},[e.showMobileBox?t("div",{staticClass:"common-nav-back portrait",on:{click:function(a){return e.goForward({name:"manage-application"},!0)}}},[t("i",{staticClass:"taskfont"},[e._v("\uE676")])]):e._e(),t("h1",[e._v(e._s(e.settingTitleName))]),e.showMobileBox?e._e():t("div",{staticClass:"setting-more",on:{click:function(a){return e.goBack()}}},[t("Icon",{attrs:{type:"md-close"}})],1)])])]),t("div",{staticClass:"setting-box",class:{"show-mobile-box":e.showMobileBox}},[t("div",{staticClass:"setting-menu"},[t("ul",[e._l(e.menu,function(a,n){return t("li",{key:n,class:e.classNameRoute(a.path,a.divided),on:{click:function(v){return e.toggleRoute(a.path)}}},[e._v(e._s(e.$L(a.name)))])}),e.clientNewVersion?t("li",{staticClass:"flex",class:e.classNameRoute("version",!0),on:{click:function(a){return e.toggleRoute("version")}}},[t("AutoTip",{attrs:{disabled:""}},[e._v(e._s(e.$L("\u7248\u672C"))+": "+e._s(e.version))]),t("Badge",{attrs:{text:e.clientNewVersion}})],1):t("li",{staticClass:"version divided",on:{click:e.onVersion}},[t("AutoTip",[e._v(e._s(e.$L("\u7248\u672C"))+": "+e._s(e.version))])],1)],2)]),t("div",{staticClass:"setting-content"},[t("div",{staticClass:"setting-content-title"},[e._v(e._s(e.titleNameRoute))]),t("div",{staticClass:"setting-content-view"},[t("router-view",{staticClass:"setting-router-view"})],1)])])],1)},m=[];const d={data(){return{version:window.systemInfo.version}},mounted(){},computed:{...o(["userInfo","userIsAdmin","clientNewVersion"]),routeName(){return this.$route.name},showMobileBox(){return this.routeName==="manage-setting"},menu(){const e=[{path:"personal",name:"\u4E2A\u4EBA\u8BBE\u7F6E"},{path:"password",name:"\u5BC6\u7801\u8BBE\u7F6E"},{path:"email",name:"\u4FEE\u6539\u90AE\u7BB1"},{path:"language",name:"\u8BED\u8A00\u8BBE\u7F6E",divided:!0},{path:"theme",name:"\u4E3B\u9898\u8BBE\u7F6E"}];return(this.$Electron||this.$isEEUiApp)&&e.push({path:"keyboard",name:"\u952E\u76D8\u8BBE\u7F6E",desc:" (Beta)"}),$A.isDooServer()&&this.$isEEUiApp&&e.push({path:"privacy",name:"\u9690\u79C1\u653F\u7B56",divided:!0},{path:"delete",name:"\u5220\u9664\u5E10\u53F7"}),this.userIsAdmin&&e.push({path:"system",name:"\u7CFB\u7EDF\u8BBE\u7F6E",divided:!0},{path:"license",name:"License Key"}),e.push({path:"clearCache",name:"\u6E05\u9664\u7F13\u5B58",divided:!0},{path:"logout",name:"\u9000\u51FA\u767B\u5F55"}),e},titleNameRoute(){const{routeName:e,menu:s}=this;let t="";return s.some(a=>{if(e===`manage-setting-${a.path}`)return t=`${this.$L(a.name)}${a.desc||""}`,!0}),t||this.$L("\u8BBE\u7F6E")},settingTitleName(){return this.windowPortrait?this.titleNameRoute:this.$L("\u8BBE\u7F6E")}},watch:{routeName:{handler(e){e==="manage-setting"&&this.windowLandscape&&this.goForward({name:"manage-setting-personal"},!0)},immediate:!0}},methods:{toggleRoute(e){switch(e){case"clearCache":$A.modalConfirm({title:"\u6E05\u9664\u7F13\u5B58",content:"\u4F60\u786E\u5B9A\u8981\u6E05\u9664\u7F13\u5B58\u5417\uFF1F",onOk:()=>{$A.IDBSet("clearCache","handle").then(s=>{$A.reloadUrl()})}});break;case"logout":$A.modalConfirm({title:"\u9000\u51FA\u767B\u5F55",content:"\u4F60\u786E\u5B9A\u8981\u767B\u51FA\u7CFB\u7EDF\u5417\uFF1F",onOk:()=>{this.$store.dispatch("logout",!1)}});break;case"version":r.Store.set("updateNotification",null);break;case"privacy":this.openPrivacy();break;case"index":this.goForward({name:"manage-setting"});break;default:this.goForward({name:"manage-setting-"+e});break}},openPrivacy(){const e=$A.apiUrl("privacy");this.$isEEUiApp?$A.eeuiAppOpenPage({pageType:"app",pageTitle:" ",url:"web.js",params:{url:e,browser:!0,showProgress:!0}}):window.open(e)},classNameRoute(e,s){return{active:this.windowLandscape&&this.routeName===`manage-setting-${e}`,divided:!!s}},onVersion(){l.get($A.apiUrl("system/version")).then(({status:e,data:s})=>{if(e===200){let t=`${this.$L("\u670D\u52A1\u5668")}: ${$A.getDomain($A.apiUrl("../"))}`;t+=`<br/>${this.$L("\u670D\u52A1\u5668\u7248\u672C")}: v${s.version}`,t+=`<br/>${this.$L("\u5BA2\u6237\u7AEF\u7248\u672C")}: v${this.version}`,$A.modalInfo({language:!1,title:"\u7248\u672C\u4FE1\u606F",content:t})}}).catch(e=>{})}}},i={};var h=c(d,u,m,!1,p,null,null,null);function p(e){for(let s in i)this[s]=i[s]}var $=function(){return h.exports}();export{$ as default};
