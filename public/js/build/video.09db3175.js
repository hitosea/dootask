import{n as p}from"./app.ea3ef4bf.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.09269dc1.js";import"./@babel.38585eb3.js";import"./localforage.46fb664b.js";import"./markdown-it.8235c9de.js";import"./entities.797c3e49.js";import"./uc.micro.5276dc67.js";import"./mdurl.25c036fe.js";import"./linkify-it.b48b7350.js";import"./punycode.f92dffc3.js";import"./highlight.js.ab8aeea4.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.686cf470.js";import"./vue.1c5be313.js";import"./vuex.cc7cb26e.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.6335fa7c.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.e5938850.js";import"./clipboard.ec9e96ef.js";import"./view-design-hi.1e6e32e3.js";import"./vuedraggable.326b11e2.js";import"./sortablejs.19385b96.js";import"./vue-resize-observer.60e1f2f5.js";import"./element-sea.71c7dbcd.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.212d45b6.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.4a10d1df.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var n=function(){var i=this,t=i.$createElement,r=i._self._c||t;return r("div",{ref:"view",staticClass:"common-preview-video"},[i.item.src?r("video",{attrs:{width:i.videoStyle("width"),height:i.videoStyle("height"),controls:"",autoplay:""}},[r("source",{attrs:{src:i.item.src,type:"video/mp4"}})]):i._e()])},s=[];const d={props:{item:{type:Object,default:()=>({src:"",width:0,height:0})}},data(){return{}},mounted(){},methods:{videoStyle(i){let{width:t,height:r}=this.item;const o=this.windowWidth,e=this.windowHeight;return t>o&&(r=r*o/t,t=o),r>e&&(t=t*e/r,r=e),i==="width"?t:i==="height"?r:{width:`${t}px`,height:`${r}px`}}}},m={};var h=p(d,n,s,!1,a,"1115e79e",null,null);function a(i){for(let t in m)this[t]=m[t]}var Q=function(){return h.exports}();export{Q as default};
