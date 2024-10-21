import{m as l}from"./vuex.cc7cb26e.js";import{l as m}from"./le5le-store.ed1761e9.js";import{a as c}from"./axios.6ec123f8.js";import{n as o}from"./app.f1b2eef6.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.70f9fbe0.js";import"./@babel.bf7d9895.js";import"./localforage.70b1c685.js";import"./markdown-it.5805e7b3.js";import"./entities.797c3e49.js";import"./uc.micro.5e15fe26.js";import"./mdurl.9b711dc1.js";import"./linkify-it.e19f2cc9.js";import"./punycode.1f63f7c7.js";import"./highlight.js.ab8aeea4.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.5dd4b97c.js";import"./vue.c9220c0f.js";import"./openpgp_hi.15f91b1d.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.43956d0e.js";import"./clipboard.136ac061.js";import"./view-design-hi.b9fa657a.js";import"./vuedraggable.1db9a3fb.js";import"./sortablejs.0856e76f.js";import"./vue-resize-observer.47f133f6.js";import"./element-sea.fa7547f0.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.53897542.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.72c7ddab.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var p=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"mobile-nav-box"},[t._t("left",function(){return[e("div",{staticClass:"nav-back",on:{click:t.onBack}},[e("i",{staticClass:"taskfont"},[t._v("\uE676")])])]}),e("div",{staticClass:"nav-title"},[t._v(t._s(t.title))]),t._t("right")],2)},u=[];const h={name:"MobileNavTitle",props:{title:{default:""},beforeBack:{type:Function}},methods:{onBack(){if(typeof this.beforeBack=="function"){const t=this.beforeBack();t&&t.then&&t.then(()=>{this.goBack()});return}this.goBack()}}},n={};var d=o(h,p,u,!1,v,"305e6ddf",null,null);function v(t){for(let i in n)this[i]=n[i]}var _=function(){return d.exports}(),g=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"page-setting"},[e("PageTitle",{attrs:{title:t.titleNameRoute}}),e("div",{staticClass:"setting-head"},[e("div",{staticClass:"setting-titbox"},[e("div",{staticClass:"setting-title"},[e("h1",[t._v(t._s(t.settingTitleName))])])])]),e("div",{staticClass:"setting-box"},[e("div",{staticClass:"setting-menu"},[e("MobileNavTitle",{attrs:{title:t.$L("\u8BBE\u7F6E")}}),e("ul",[t._l(t.menu,function(s,r){return e("li",{key:r,class:t.classNameRoute(s.path,s.divided),on:{click:function(b){return t.toggleRoute(s.path)}}},[t._v(t._s(t.$L(s.name)))])}),t.clientNewVersion?e("li",{staticClass:"flex",class:t.classNameRoute("version",!0),on:{click:function(s){return t.toggleRoute("version")}}},[e("AutoTip",{attrs:{disabled:""}},[t._v(t._s(t.$L("\u7248\u672C"))+": "+t._s(t.version))]),e("Badge",{attrs:{text:t.clientNewVersion}})],1):e("li",{staticClass:"version divided",on:{click:t.onVersion}},[e("AutoTip",[t._v(t._s(t.$L("\u7248\u672C"))+": "+t._s(t.version))])],1)],2)],1),e("transition",{attrs:{name:t.$isEEUiApp?"mobile-dialog":"none"}},[t.showContent?e("div",{staticClass:"setting-content"},[e("MobileNavTitle",{attrs:{title:t.settingTitleName}}),e("div",{staticClass:"setting-content-title"},[t._v(t._s(t.titleNameRoute))]),e("div",{staticClass:"setting-content-view"},[e("router-view",{staticClass:"setting-router-view"})],1)],1):t._e()])],1)],1)},f=[];const $={components:{MobileNavTitle:_},data(){return{version:window.systemInfo.version}},mounted(){this.$isEEUiApp&&(this.version=`${window.systemInfo.version} (${$A.eeuiAppLocalVersion()})`)},computed:{...l(["userInfo","userIsAdmin","clientNewVersion","systemConfig"]),routeName(){return this.$route.name},showContent(){return this.$route.path.match(/^\/manage\/setting\/\w+$/)},menu(){const t=[{path:"personal",name:"\u4E2A\u4EBA\u8BBE\u7F6E"},{path:"password",name:"\u5BC6\u7801\u8BBE\u7F6E"},{path:"email",name:"\u4FEE\u6539\u90AE\u7BB1"},{path:"language",name:"\u8BED\u8A00\u8BBE\u7F6E",divided:!0},{path:"theme",name:"\u4E3B\u9898\u8BBE\u7F6E"}];return(this.$Electron||this.$isEEUiApp)&&t.push({path:"keyboard",name:"\u952E\u76D8\u8BBE\u7F6E",desc:" (Beta)"}),$A.isDooServer()&&this.$isEEUiApp&&t.push({path:"privacy",name:"\u9690\u79C1\u653F\u7B56",divided:!0},{path:"delete",name:"\u5220\u9664\u5E10\u53F7"}),this.userIsAdmin&&t.push({path:"system",name:"\u7CFB\u7EDF\u8BBE\u7F6E",divided:!0},{path:"wxsetting",name:"\u4F01\u5FAE\u8BBE\u7F6E"},{path:"license",name:"License Key"}),t.push({path:"clearCache",name:"\u6E05\u9664\u7F13\u5B58",divided:!0},{path:"logout",name:"\u9000\u51FA\u767B\u5F55"}),t},titleNameRoute(){const{routeName:t,menu:i}=this;let e="";return i.some(s=>{if(t===`manage-setting-${s.path}`)return e=`${this.$L(s.name)}${s.desc||""}`,!0}),e||this.$L("\u8BBE\u7F6E")},settingTitleName(){return this.windowPortrait?this.titleNameRoute:this.$L("\u8BBE\u7F6E")}},watch:{routeName:{handler(t){t==="manage-setting"&&this.windowLandscape&&this.goForward({name:"manage-setting-personal"},!0)},immediate:!0}},methods:{toggleRoute(t){switch(t){case"clearCache":$A.modalConfirm({title:"\u6E05\u9664\u7F13\u5B58",content:"\u4F60\u786E\u5B9A\u8981\u6E05\u9664\u7F13\u5B58\u5417\uFF1F",onOk:()=>{$A.IDBSet("clearCache","handle").then(i=>{$A.reloadUrl()})}});break;case"logout":$A.modalConfirm({title:"\u9000\u51FA\u767B\u5F55",content:"\u4F60\u786E\u5B9A\u8981\u767B\u51FA\u7CFB\u7EDF\u5417\uFF1F",onOk:()=>{this.$store.dispatch("logout",!1)}});break;case"version":m.Store.set("updateNotification",null);break;case"privacy":this.openPrivacy();break;case"index":this.goForward({name:"manage-setting"});break;default:this.goForward({name:"manage-setting-"+t});break}},openPrivacy(){const t=$A.apiUrl("privacy");this.$isEEUiApp?this.$store.dispatch("openAppChildPage",{pageType:"app",pageTitle:" ",url:"web.js",params:{url:t,browser:!0,showProgress:!0}}):window.open(t)},classNameRoute(t,i){return{active:this.windowLandscape&&this.routeName===`manage-setting-${t}`,divided:!!i}},onVersion(){const t=[];this.getServerVersion().then(i=>{t.push(`${this.$L("\u670D\u52A1\u5668")}: ${$A.getDomain($A.mainUrl())}`),t.push(`${this.$L("\u670D\u52A1\u5668\u7248\u672C")}: v${i}`),t.push(`${this.$L("\u5BA2\u6237\u7AEF\u7248\u672C")}: v${this.version}`),$A.modalInfo({language:!1,title:this.$L("\u7248\u672C\u4FE1\u606F"),content:t.join("<br/>")})})},getServerVersion(){return new Promise(t=>{if(/^\d+\.\d+\.\d+$/.test(this.systemConfig.server_version)){t(this.systemConfig.server_version);return}c.get($A.apiUrl("system/version")).then(({status:i,data:e})=>{i===200&&t(e.version)}).catch(i=>{})})}}},a={};var w=o($,g,f,!1,C,null,null,null);function C(t){for(let i in a)this[i]=a[i]}var nt=function(){return w.exports}();export{nt as default};
