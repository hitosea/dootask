import{_ as m}from"./openpgp_hi.15f91b1d.js";import{P as l}from"./photoswipe.dc41054b.js";import{n as h}from"./app.57070a0d.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.accd1716.js";import"./@traptitech.363dce05.js";import"./katex.0b94f27c.js";import"./localforage.879ac172.js";import"./markdown-it.f3afa976.js";import"./entities.797c3e49.js";import"./uc.micro.39573202.js";import"./mdurl.2f66c031.js";import"./linkify-it.3ecfda1e.js";import"./punycode.87a5269f.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./vue.eaf71fac.js";import"./vuex.cc7cb26e.js";import"./axios.6ec123f8.js";import"./le5le-store.b40f9152.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.4402036c.js";import"./clipboard.d74ec60d.js";import"./view-design-hi.76cbd75d.js";import"./default-passive-events.a3d698c9.js";import"./vuedraggable.c8fae132.js";import"./sortablejs.8b819437.js";import"./vue-resize-observer.5fb00380.js";import"./element-sea.b954f5d6.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.e60103ad.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.289edf0d.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var d=function(){var r=this,i=r.$createElement,o=r._self._c||i;return o("div")},u=[];const c={props:{className:{type:String,default:()=>"preview-image-swipe-"+Math.round(Math.random()*1e4)},urlList:{type:Array,default:()=>[]},initialIndex:{type:Number,default:0}},data(){return{lightbox:null}},beforeDestroy(){var r;(r=this.lightbox)==null||r.destroy()},watch:{urlList:{handler(r){var n;let i=!1,o=!1;(n=this.lightbox)==null||n.destroy();const a=r.map(t=>{if($A.isJson(t)){if(t.src&&(t.src=$A.thumbRestore(t.src)),parseInt(t.width)>0&&parseInt(t.height)>0)return t;t=t.src}return o=!0,{html:`<div class="preview-image-swipe"><img src="${$A.thumbRestore(t)}"/></div>`}});this.lightbox=new l({dataSource:a,escKey:!1,mainClass:this.className,showHideAnimationType:"none",pswpModule:()=>m(()=>import("./photoswipe.dc41054b.js").then(function(t){return t.p}),["js/build/photoswipe.dc41054b.js","js/build/photoswipe.0fb72215.css"])}),this.lightbox.on("change",t=>{!o||$A.loadScript("js/pinch-zoom.umd.min.js").then(g=>{document.querySelector(`.${this.className}`).querySelectorAll(".preview-image-swipe").forEach(e=>{e.getAttribute("data-init-pinch-zoom")!=="init"&&(e.setAttribute("data-init-pinch-zoom","init"),e.querySelector("img").addEventListener("pointermove",p=>{i&&p.stopPropagation()}),new PinchZoom.default(e,{draggableUnzoomed:!1,onDragStart:()=>{i=!0},onDragEnd:()=>{i=!1}}))})})}),this.lightbox.on("close",()=>{this.$emit("on-close")}),this.lightbox.on("destroy",()=>{this.$emit("on-destroy")}),this.lightbox.init(),this.lightbox.loadAndOpen(this.initialIndex)},immediate:!0},initialIndex(r){var i;(i=this.lightbox)==null||i.loadAndOpen(r)}}},s={};var _=h(c,d,u,!1,f,null,null,null);function f(r){for(let i in s)this[i]=s[i]}var rt=function(){return _.exports}();export{rt as default};
