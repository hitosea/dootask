"use strict";(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[914],{88341:(t,e,s)=>{s.r(e),s.d(e,{default:()=>u});var n=s(20629),i=s(80641);function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){a(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const c={data:function(){return{curPath:this.$route.path,show768Menu:!0,version:window.systemInfo.version}},mounted:function(){},computed:o(o({},(0,n.rn)(["userInfo","userIsAdmin","clientNewVersion"])),{},{menu:function(){var t=[{path:"personal",name:"个人设置"},{path:"password",name:"密码设置"}];return this.userIsAdmin&&t.push.apply(t,[{path:"system",name:"系统设置",divided:!0}]),t},titleNameRoute:function(){var t=this.curPath,e=this.menu,s="";return e.some((function(e){if($A.leftExists(t,"/manage/setting/"+e.path))return s=e.name,!0})),s||"设置"}}),watch:{$route:function(t){this.curPath=t.path}},methods:{toggleRoute:function(t){"version"!=t?(this.show768Menu=!1,this.goForward({path:"/manage/setting/"+t})):i.Store.set("releasesNotification",null)},classNameRoute:function(t,e){return{active:$A.leftExists(this.curPath,"/manage/setting/"+t),divided:!!e}}}};const u=(0,s(51900).Z)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-setting"},[s("PageTitle",{attrs:{title:t.$L(t.titleNameRoute)}}),t._v(" "),s("div",{staticClass:"setting-head"},[s("div",{staticClass:"setting-titbox"},[s("div",{staticClass:"setting-title"},[s("h1",[t._v(t._s(t.$L("设置")))]),t._v(" "),s("div",{staticClass:"setting-more",on:{click:function(e){t.show768Menu=!t.show768Menu}}},[s("Icon",{attrs:{type:t.show768Menu?"md-close":"md-more"}})],1)])])]),t._v(" "),s("div",{staticClass:"setting-box"},[s("div",{staticClass:"setting-menu",class:{"show768-menu":t.show768Menu}},[s("ul",[t._l(t.menu,(function(e,n){return s("li",{key:n,class:t.classNameRoute(e.path,e.divided),on:{click:function(s){return t.toggleRoute(e.path)}}},[t._v(t._s(t.$L(e.name)))])})),t._v(" "),t.clientNewVersion?s("li",{class:t.classNameRoute("version",!0),on:{click:function(e){return t.toggleRoute("version")}}},[s("AutoTip",{attrs:{disabled:""}},[t._v(t._s(t.$L("版本"))+": "+t._s(t.version))]),t._v(" "),s("Badge",{attrs:{text:t.clientNewVersion}})],1):s("li",{staticClass:"version divided"},[s("AutoTip",[t._v(t._s(t.$L("版本"))+": "+t._s(t.version))])],1)],2)]),t._v(" "),s("div",{staticClass:"setting-content"},[s("div",{staticClass:"setting-content-title"},[t._v(t._s(t.$L(t.titleNameRoute)))]),t._v(" "),s("div",{staticClass:"setting-content-view"},[s("router-view",{staticClass:"setting-router-view"})],1)])])],1)}),[],!1,null,null,null).exports}}]);