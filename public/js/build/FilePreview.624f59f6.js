import{_ as o}from"./openpgp_hi.15f91b1d.js";import{I as n}from"./IFrame.ee00e8fc.js";import{n as a}from"./app.4fa74fc7.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.a18d5b27.js";import"./@babel.2fb63f12.js";import"./localforage.bbaccc2b.js";import"./markdown-it.7c5efbd6.js";import"./entities.797c3e49.js";import"./uc.micro.4d0617d5.js";import"./mdurl.6c31ac34.js";import"./linkify-it.afb42329.js";import"./punycode.64d7844d.js";import"./highlight.js.b91af88c.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.dbce67c2.js";import"./katex.756172bd.js";import"./vue.6ce721e5.js";import"./vuex.cc7cb26e.js";import"./axios.6ec123f8.js";import"./le5le-store.aa7d93fc.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.b7f8142e.js";import"./clipboard.02a36be0.js";import"./view-design-hi.d7bac4dd.js";import"./vuedraggable.345db9fd.js";import"./sortablejs.ab995a42.js";import"./vue-resize-observer.d5f637d1.js";import"./element-sea.e850965b.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.a2452442.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.078475eb.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"file-preview"},[t.isPreview?e("IFrame",{staticClass:"preview-iframe",attrs:{src:t.previewUrl},on:{"on-load":t.onFrameLoad}}):t.contentDetail?[e("div",{directives:[{name:"show",rawName:"v-show",value:t.headerShow&&!["word","excel","ppt"].includes(t.file.type),expression:"headerShow && !['word', 'excel', 'ppt'].includes(file.type)"}],staticClass:"edit-header"},[e("div",{staticClass:"header-title"},[e("div",{staticClass:"title-name"},[t._v(t._s(t.$A.getFileName(t.file)))]),e("Tag",{attrs:{color:"default"}},[t._v(t._s(t.$L("\u53EA\u8BFB")))]),e("div",{staticClass:"refresh"},[t.contentLoad?e("Loading"):e("Icon",{attrs:{type:"ios-refresh"},on:{click:t.getContent}})],1)],1)]),e("div",{staticClass:"content-body"},[t.file.type=="document"?[t.contentDetail.type=="md"?e("VMPreview",{attrs:{value:t.contentDetail.content}}):e("TEditor",{attrs:{value:t.contentDetail.content,height:"100%",readOnly:""}})]:t.file.type=="drawio"?e("Drawio",{ref:"myFlow",attrs:{value:t.contentDetail,title:t.file.name,readOnly:""}}):t.file.type=="mind"?e("Minder",{ref:"myMind",attrs:{value:t.contentDetail,readOnly:""}}):["code","txt"].includes(t.file.type)?e("AceEditor",{attrs:{value:t.contentDetail.content,ext:t.file.ext,readOnly:""}}):["word","excel","ppt"].includes(t.file.type)?e("OnlyOffice",{attrs:{value:t.contentDetail,code:t.code,historyId:t.historyId,documentKey:t.documentKey,readOnly:""}}):t._e()],2)]:t._e(),t.contentLoad?e("div",{staticClass:"content-load"},[e("Loading")],1):t._e()],2)},s=[];const d=()=>o(()=>import("./preview.ac832cf9.js"),["js/build/preview.ac832cf9.js","js/build/openpgp_hi.15f91b1d.js","js/build/index.40a8e116.js","js/build/app.4fa74fc7.js","js/build/app.47d94c24.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.a18d5b27.js","js/build/@babel.2fb63f12.js","js/build/localforage.bbaccc2b.js","js/build/markdown-it.7c5efbd6.js","js/build/entities.797c3e49.js","js/build/uc.micro.4d0617d5.js","js/build/mdurl.6c31ac34.js","js/build/linkify-it.afb42329.js","js/build/punycode.64d7844d.js","js/build/highlight.js.b91af88c.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.dbce67c2.js","js/build/katex.756172bd.js","js/build/vue.6ce721e5.js","js/build/vuex.cc7cb26e.js","js/build/axios.6ec123f8.js","js/build/le5le-store.aa7d93fc.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.b7f8142e.js","js/build/clipboard.02a36be0.js","js/build/view-design-hi.d7bac4dd.js","js/build/vuedraggable.345db9fd.js","js/build/sortablejs.ab995a42.js","js/build/vue-resize-observer.d5f637d1.js","js/build/element-sea.e850965b.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.a2452442.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.078475eb.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),c=()=>o(()=>import("./TEditor.466b0f2f.js"),["js/build/TEditor.466b0f2f.js","js/build/tinymce.7b838bb9.js","js/build/@babel.2fb63f12.js","js/build/ImgUpload.c03d49ff.js","js/build/app.4fa74fc7.js","js/build/app.47d94c24.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.a18d5b27.js","js/build/localforage.bbaccc2b.js","js/build/markdown-it.7c5efbd6.js","js/build/entities.797c3e49.js","js/build/uc.micro.4d0617d5.js","js/build/mdurl.6c31ac34.js","js/build/linkify-it.afb42329.js","js/build/punycode.64d7844d.js","js/build/highlight.js.b91af88c.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.dbce67c2.js","js/build/katex.756172bd.js","js/build/vue.6ce721e5.js","js/build/vuex.cc7cb26e.js","js/build/openpgp_hi.15f91b1d.js","js/build/axios.6ec123f8.js","js/build/le5le-store.aa7d93fc.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.b7f8142e.js","js/build/clipboard.02a36be0.js","js/build/view-design-hi.d7bac4dd.js","js/build/vuedraggable.345db9fd.js","js/build/sortablejs.ab995a42.js","js/build/vue-resize-observer.d5f637d1.js","js/build/element-sea.e850965b.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.a2452442.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.078475eb.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),p=()=>o(()=>import("./AceEditor.36c5f142.js"),["js/build/AceEditor.36c5f142.js","js/build/vuex.cc7cb26e.js","js/build/app.4fa74fc7.js","js/build/app.47d94c24.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.a18d5b27.js","js/build/@babel.2fb63f12.js","js/build/localforage.bbaccc2b.js","js/build/markdown-it.7c5efbd6.js","js/build/entities.797c3e49.js","js/build/uc.micro.4d0617d5.js","js/build/mdurl.6c31ac34.js","js/build/linkify-it.afb42329.js","js/build/punycode.64d7844d.js","js/build/highlight.js.b91af88c.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.dbce67c2.js","js/build/katex.756172bd.js","js/build/vue.6ce721e5.js","js/build/openpgp_hi.15f91b1d.js","js/build/axios.6ec123f8.js","js/build/le5le-store.aa7d93fc.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.b7f8142e.js","js/build/clipboard.02a36be0.js","js/build/view-design-hi.d7bac4dd.js","js/build/vuedraggable.345db9fd.js","js/build/sortablejs.ab995a42.js","js/build/vue-resize-observer.d5f637d1.js","js/build/element-sea.e850965b.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.a2452442.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.078475eb.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),m=()=>o(()=>import("./OnlyOffice.8720f4fd.js"),["js/build/OnlyOffice.8720f4fd.js","js/build/OnlyOffice.5570973b.css","js/build/vuex.cc7cb26e.js","js/build/IFrame.ee00e8fc.js","js/build/app.4fa74fc7.js","js/build/app.47d94c24.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.a18d5b27.js","js/build/@babel.2fb63f12.js","js/build/localforage.bbaccc2b.js","js/build/markdown-it.7c5efbd6.js","js/build/entities.797c3e49.js","js/build/uc.micro.4d0617d5.js","js/build/mdurl.6c31ac34.js","js/build/linkify-it.afb42329.js","js/build/punycode.64d7844d.js","js/build/highlight.js.b91af88c.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.dbce67c2.js","js/build/katex.756172bd.js","js/build/vue.6ce721e5.js","js/build/openpgp_hi.15f91b1d.js","js/build/axios.6ec123f8.js","js/build/le5le-store.aa7d93fc.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.b7f8142e.js","js/build/clipboard.02a36be0.js","js/build/view-design-hi.d7bac4dd.js","js/build/vuedraggable.345db9fd.js","js/build/sortablejs.ab995a42.js","js/build/vue-resize-observer.d5f637d1.js","js/build/element-sea.e850965b.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.a2452442.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.078475eb.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),u=()=>o(()=>import("./Drawio.eab0085d.js"),["js/build/Drawio.eab0085d.js","js/build/Drawio.6a04e353.css","js/build/vuex.cc7cb26e.js","js/build/IFrame.ee00e8fc.js","js/build/app.4fa74fc7.js","js/build/app.47d94c24.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.a18d5b27.js","js/build/@babel.2fb63f12.js","js/build/localforage.bbaccc2b.js","js/build/markdown-it.7c5efbd6.js","js/build/entities.797c3e49.js","js/build/uc.micro.4d0617d5.js","js/build/mdurl.6c31ac34.js","js/build/linkify-it.afb42329.js","js/build/punycode.64d7844d.js","js/build/highlight.js.b91af88c.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.dbce67c2.js","js/build/katex.756172bd.js","js/build/vue.6ce721e5.js","js/build/openpgp_hi.15f91b1d.js","js/build/axios.6ec123f8.js","js/build/le5le-store.aa7d93fc.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.b7f8142e.js","js/build/clipboard.02a36be0.js","js/build/view-design-hi.d7bac4dd.js","js/build/vuedraggable.345db9fd.js","js/build/sortablejs.ab995a42.js","js/build/vue-resize-observer.d5f637d1.js","js/build/element-sea.e850965b.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.a2452442.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.078475eb.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),_=()=>o(()=>import("./Minder.9b5c8c98.js"),["js/build/Minder.9b5c8c98.js","js/build/Minder.1839e1ef.css","js/build/IFrame.ee00e8fc.js","js/build/app.4fa74fc7.js","js/build/app.47d94c24.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.a18d5b27.js","js/build/@babel.2fb63f12.js","js/build/localforage.bbaccc2b.js","js/build/markdown-it.7c5efbd6.js","js/build/entities.797c3e49.js","js/build/uc.micro.4d0617d5.js","js/build/mdurl.6c31ac34.js","js/build/linkify-it.afb42329.js","js/build/punycode.64d7844d.js","js/build/highlight.js.b91af88c.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.dbce67c2.js","js/build/katex.756172bd.js","js/build/vue.6ce721e5.js","js/build/vuex.cc7cb26e.js","js/build/openpgp_hi.15f91b1d.js","js/build/axios.6ec123f8.js","js/build/le5le-store.aa7d93fc.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.b7f8142e.js","js/build/clipboard.02a36be0.js","js/build/view-design-hi.d7bac4dd.js","js/build/vuedraggable.345db9fd.js","js/build/sortablejs.ab995a42.js","js/build/vue-resize-observer.d5f637d1.js","js/build/element-sea.e850965b.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.a2452442.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.078475eb.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),h={name:"FilePreview",components:{IFrame:n,AceEditor:p,TEditor:c,VMPreview:d,OnlyOffice:m,Drawio:u,Minder:_},props:{code:{type:String,default:""},historyId:{type:Number,default:0},file:{type:Object,default:()=>({})},headerShow:{type:Boolean,default:!0}},data(){return{loadContent:0,contentDetail:null,loadPreview:!0}},watch:{"file.id":{handler(t){t&&(this.contentDetail=null,this.getContent())},immediate:!0,deep:!0}},computed:{contentLoad(){return this.loadContent>0||this.previewLoad},isPreview(){return this.contentDetail&&this.contentDetail.preview===!0},previewLoad(){return this.isPreview&&this.loadPreview===!0},previewUrl(){if(this.isPreview){const{name:t,key:i}=this.contentDetail;return $A.onlinePreviewUrl(t,i)}return""}},methods:{onFrameLoad(){this.loadPreview=!1},getContent(){if(["word","excel","ppt"].includes(this.file.type)){this.contentDetail=$A.cloneJSON(this.file);return}setTimeout(t=>{this.loadContent++},600),this.$store.dispatch("call",{url:"file/content",data:{id:this.code||this.file.id,history_id:this.historyId}}).then(({data:t})=>{this.contentDetail=t.content}).catch(({msg:t})=>{$A.modalError(t)}).finally(t=>{this.loadContent--})},documentKey(){return new Promise((t,i)=>{this.$store.dispatch("call",{url:"file/content",data:{id:this.code||this.file.id,only_update_at:"yes"}}).then(({data:e})=>{t(`${e.id}-${$A.Time(e.update_at)}`)}).catch(e=>{i(e)})})},exportMenu(t){switch(this.file.type){case"mind":this.$refs.myMind.exportHandle(t,this.file.name);break}}}},r={};var v=a(h,l,s,!1,f,null,null,null);function f(t){for(let i in r)this[i]=r[i]}var et=function(){return v.exports}();export{et as default};
