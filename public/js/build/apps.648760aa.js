import{M as p}from"./MicroApps.1ed022be.js";import{n as m}from"./app.ac398669.js";import"./vue.b897e178.js";import"./@traptitech.1821eed0.js";import"./katex.2732e2fc.js";import"./vuex.cc7cb26e.js";import"./@micro-zoe.c2e1472d.js";import"./DialogWrapper.f47ff290.js";import"./le5le-store.aa7d93fc.js";import"./longpress.5305f240.js";import"./index.74d30558.js";import"./quill.58ac9f0a.js";import"./quill-mention-hi.90e13dce.js";import"./vue-jsonp.be27271b.js";import"./vue-virtual-scroll-list-hi.cfa6db23.js";import"./ImgUpload.acabf55d.js";import"./view-design-hi.ee8241e6.js";import"./details.0ce16165.js";import"./jquery.5dc24677.js";import"./localforage.dd9cd905.js";import"./markdown-it.67231d85.js";import"./entities.797c3e49.js";import"./uc.micro.4d0617d5.js";import"./mdurl.6c31ac34.js";import"./linkify-it.afb42329.js";import"./punycode.69e96b57.js";import"./highlight.js.b91af88c.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./axios.6ec123f8.js";import"./openpgp_hi.15f91b1d.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.9fd7ffef.js";import"./clipboard.844c30f9.js";import"./vuedraggable.95307f2f.js";import"./sortablejs.3b0c8136.js";import"./vue-resize-observer.ad42cb7f.js";import"./element-sea.5f08028a.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.be6bd013.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.d40a63be.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";import"./tip.5b3b68f9.js";var e=function(){var t=this,r=t.$createElement,o=t._self._c||r;return!t.loading&&t.$route.name=="manage-apps"?o("MicroApps",{attrs:{url:t.appUrl,path:t.path}}):t._e()},a=[];const n={components:{MicroApps:p},data(){return{loading:!1,appUrl:"",path:""}},deactivated(){this.loading=!0},watch:{$route:{handler(t){this.loading=!0,t.name=="manage-apps"?this.$nextTick(()=>{this.loading=!1,this.appUrl="http://127.0.0.1:5567/",this.path=this.$route.query.path||""}):this.appUrl=""},immediate:!0}}},i={};var s=m(n,e,a,!1,l,null,null,null);function l(t){for(let r in i)this[r]=i[r]}var ot=function(){return s.exports}();export{ot as default};
