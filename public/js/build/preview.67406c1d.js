import{V as t,d as s,a,b as n,c as l,_ as u,e as _,v as c}from"./@kangc.4bee3230.js";import{P as v}from"./prismjs.0d1dd90a.js";import{l as o,n as d}from"./app.ea3ef4bf.js";import{p as f}from"./index.40a8e116.js";import"./@babel.38585eb3.js";import"./vue.1c5be313.js";import"./copy-to-clipboard.a53c061d.js";import"./toggle-selection.d2487283.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.09269dc1.js";import"./localforage.46fb664b.js";import"./markdown-it.8235c9de.js";import"./entities.797c3e49.js";import"./uc.micro.5276dc67.js";import"./mdurl.25c036fe.js";import"./linkify-it.b48b7350.js";import"./punycode.f92dffc3.js";import"./highlight.js.ab8aeea4.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.686cf470.js";import"./vuex.cc7cb26e.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.6335fa7c.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.e5938850.js";import"./clipboard.ec9e96ef.js";import"./view-design-hi.1e6e32e3.js";import"./vuedraggable.326b11e2.js";import"./sortablejs.19385b96.js";import"./vue-resize-observer.60e1f2f5.js";import"./element-sea.71c7dbcd.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.212d45b6.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.4a10d1df.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var h=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",{staticClass:"vmpreview-wrapper",on:{click:e.handleClick}},[i("v-md-preview",{attrs:{text:e.value}})],1)},x=[];o==="zh"||o==="zh-CHT"?t.lang.use("zh-CN",s):t.lang.use("en-US",a);t.use(n());t.use(l());t.use(u());t.use(_());const w={mixins:[f],components:{[t.name]:t},created(){t.use(c,{Prism:v,extend(e){}})},methods:{handleClick({target:e}){if(e.nodeName==="IMG"){const r=[...this.$el.querySelectorAll("img").values()].map(p=>p.src);if(r.length===0)return;const i=Math.max(0,r.indexOf(e.src));this.$store.dispatch("previewImage",{index:i,list:r})}}}},m={};var g=d(w,h,x,!1,$,"6ef45f6c",null,null);function $(e){for(let r in m)this[r]=m[r]}var ae=function(){return g.exports}();export{ae as default};
