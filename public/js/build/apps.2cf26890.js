import{M as n}from"./MicroApps.e7ebd34f.js";import{n as p}from"./app.2da33dd4.js";import"./DialogWrapper.580b7397.js";import"./longpress.43ca7fd9.js";import"./index.d9f7f21d.js";import"./ImgUpload.7533e1f9.js";import"./details.03355913.js";import"./tip.7527d915.js";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return!t.loading&&t.$route.name=="manage-apps"?e("MicroApps",{attrs:{url:t.appUrl,path:t.path}}):t._e()},o=[];const s={components:{MicroApps:n},data(){return{loading:!1,appUrl:"",path:""}},deactivated(){this.loading=!0},watch:{$route:{handler(t){this.loading=!0,t.name=="manage-apps"?this.$nextTick(()=>{this.loading=!1,this.appUrl={}.VITE_OKR_WEB_URL||$A.apiUrl("../apps/okr"),this.path=this.$route.query.path||""}):this.appUrl=""},immediate:!0}}},r={};var l=p(s,i,o,!1,m,null,null,null);function m(t){for(let a in r)this[a]=r[a]}var U=function(){return l.exports}();export{U as default};
