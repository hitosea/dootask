import{V as t,d as s,a,b as n,c as l,_ as u,e as _,v as c}from"./@kangc.bfe2e3e8.js";import{P as v}from"./prismjs.f84724cf.js";import{l as o,n as d}from"./app.4fa74fc7.js";import{p as f}from"./index.40a8e116.js";import"./@babel.2fb63f12.js";import"./vue.6ce721e5.js";import"./copy-to-clipboard.a53c061d.js";import"./toggle-selection.d2487283.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.a18d5b27.js";import"./localforage.bbaccc2b.js";import"./markdown-it.7c5efbd6.js";import"./entities.797c3e49.js";import"./uc.micro.4d0617d5.js";import"./mdurl.6c31ac34.js";import"./linkify-it.afb42329.js";import"./punycode.64d7844d.js";import"./highlight.js.b91af88c.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.dbce67c2.js";import"./katex.756172bd.js";import"./vuex.cc7cb26e.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.aa7d93fc.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.b7f8142e.js";import"./clipboard.02a36be0.js";import"./view-design-hi.d7bac4dd.js";import"./vuedraggable.345db9fd.js";import"./sortablejs.ab995a42.js";import"./vue-resize-observer.d5f637d1.js";import"./element-sea.e850965b.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.a2452442.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.078475eb.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var h=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("div",{staticClass:"vmpreview-wrapper",on:{click:e.handleClick}},[i("v-md-preview",{attrs:{text:e.value}})],1)},x=[];o==="zh"||o==="zh-CHT"?t.lang.use("zh-CN",s):t.lang.use("en-US",a);t.use(n());t.use(l());t.use(u());t.use(_());const w={mixins:[f],components:{[t.name]:t},created(){t.use(c,{Prism:v,extend(e){}})},methods:{handleClick({target:e}){if(e.nodeName==="IMG"){const r=[...this.$el.querySelectorAll("img").values()].map(p=>p.src);if(r.length===0)return;const i=Math.max(0,r.indexOf(e.src));this.$store.dispatch("previewImage",{index:i,list:r})}}}},m={};var g=d(w,h,x,!1,$,"6ef45f6c",null,null);function $(e){for(let r in m)this[r]=m[r]}var ne=function(){return g.exports}();export{ne as default};
