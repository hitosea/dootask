import{_ as o}from"./openpgp_hi.15f91b1d.js";import{m as n}from"./vuex.cc7cb26e.js";import{I as a}from"./IFrame.8ea232f6.js";import{n as m}from"./app.ea3ef4bf.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.09269dc1.js";import"./@babel.38585eb3.js";import"./localforage.46fb664b.js";import"./markdown-it.8235c9de.js";import"./entities.797c3e49.js";import"./uc.micro.5276dc67.js";import"./mdurl.25c036fe.js";import"./linkify-it.b48b7350.js";import"./punycode.f92dffc3.js";import"./highlight.js.ab8aeea4.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.686cf470.js";import"./vue.1c5be313.js";import"./axios.6ec123f8.js";import"./le5le-store.6335fa7c.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.e5938850.js";import"./clipboard.ec9e96ef.js";import"./view-design-hi.1e6e32e3.js";import"./vuedraggable.326b11e2.js";import"./sortablejs.19385b96.js";import"./vue-resize-observer.60e1f2f5.js";import"./element-sea.71c7dbcd.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.212d45b6.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.4a10d1df.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"single-file-msg"},[e("PageTitle",{attrs:{title:t.title}}),t.loadIng>0?e("Loading"):t.isWait?t._e():[t.isType("md")?e("VMPreview",{attrs:{value:t.msgDetail.content.content}}):t.isType("text")?e("TEditor",{attrs:{value:t.msgDetail.content.content,height:"100%",readOnly:""}}):t.isType("drawio")?e("Drawio",{attrs:{title:t.msgDetail.msg.name,readOnly:""},model:{value:t.msgDetail.content,callback:function(r){t.$set(t.msgDetail,"content",r)},expression:"msgDetail.content"}}):t.isType("mind")?e("Minder",{attrs:{value:t.msgDetail.content,readOnly:""}}):t.isType("code")?[t.isLongText(t.msgDetail.msg.name)?e("div",{staticClass:"view-code",domProps:{innerHTML:t._s(t.$A.formatTextMsg(t.msgDetail.content.content,t.userId))}}):e("AceEditor",{staticClass:"view-editor",attrs:{ext:t.msgDetail.msg.ext,readOnly:""},model:{value:t.msgDetail.content.content,callback:function(r){t.$set(t.msgDetail.content,"content",r)},expression:"msgDetail.content.content"}})]:t.isType("office")?e("OnlyOffice",{attrs:{code:t.officeCode,documentKey:t.documentKey,readOnly:""},model:{value:t.officeContent,callback:function(r){t.officeContent=r},expression:"officeContent"}}):t.isType("preview")?e("IFrame",{staticClass:"preview-iframe",attrs:{src:t.previewUrl}}):e("div",{staticClass:"no-support"},[t._v(t._s(t.$L("\u4E0D\u652F\u6301\u5355\u72EC\u67E5\u770B\u6B64\u6D88\u606F")))])]],2)},c=[];const d=()=>o(()=>import("./preview.22b88ae7.js"),["js/build/preview.22b88ae7.js","js/build/openpgp_hi.15f91b1d.js","js/build/index.40a8e116.js","js/build/app.ea3ef4bf.js","js/build/app.ca18e26f.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.09269dc1.js","js/build/@babel.38585eb3.js","js/build/localforage.46fb664b.js","js/build/markdown-it.8235c9de.js","js/build/entities.797c3e49.js","js/build/uc.micro.5276dc67.js","js/build/mdurl.25c036fe.js","js/build/linkify-it.b48b7350.js","js/build/punycode.f92dffc3.js","js/build/highlight.js.ab8aeea4.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.686cf470.js","js/build/vue.1c5be313.js","js/build/vuex.cc7cb26e.js","js/build/axios.6ec123f8.js","js/build/le5le-store.6335fa7c.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.e5938850.js","js/build/clipboard.ec9e96ef.js","js/build/view-design-hi.1e6e32e3.js","js/build/vuedraggable.326b11e2.js","js/build/sortablejs.19385b96.js","js/build/vue-resize-observer.60e1f2f5.js","js/build/element-sea.71c7dbcd.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.212d45b6.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.4a10d1df.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),p=()=>o(()=>import("./TEditor.3202cc3b.js"),["js/build/TEditor.3202cc3b.js","js/build/tinymce.c1594aa2.js","js/build/@babel.38585eb3.js","js/build/ImgUpload.fd4c7d27.js","js/build/app.ea3ef4bf.js","js/build/app.ca18e26f.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.09269dc1.js","js/build/localforage.46fb664b.js","js/build/markdown-it.8235c9de.js","js/build/entities.797c3e49.js","js/build/uc.micro.5276dc67.js","js/build/mdurl.25c036fe.js","js/build/linkify-it.b48b7350.js","js/build/punycode.f92dffc3.js","js/build/highlight.js.ab8aeea4.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.686cf470.js","js/build/vue.1c5be313.js","js/build/vuex.cc7cb26e.js","js/build/openpgp_hi.15f91b1d.js","js/build/axios.6ec123f8.js","js/build/le5le-store.6335fa7c.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.e5938850.js","js/build/clipboard.ec9e96ef.js","js/build/view-design-hi.1e6e32e3.js","js/build/vuedraggable.326b11e2.js","js/build/sortablejs.19385b96.js","js/build/vue-resize-observer.60e1f2f5.js","js/build/element-sea.71c7dbcd.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.212d45b6.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.4a10d1df.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),_=()=>o(()=>import("./AceEditor.dbbb6276.js"),["js/build/AceEditor.dbbb6276.js","js/build/vuex.cc7cb26e.js","js/build/app.ea3ef4bf.js","js/build/app.ca18e26f.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.09269dc1.js","js/build/@babel.38585eb3.js","js/build/localforage.46fb664b.js","js/build/markdown-it.8235c9de.js","js/build/entities.797c3e49.js","js/build/uc.micro.5276dc67.js","js/build/mdurl.25c036fe.js","js/build/linkify-it.b48b7350.js","js/build/punycode.f92dffc3.js","js/build/highlight.js.ab8aeea4.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.686cf470.js","js/build/vue.1c5be313.js","js/build/openpgp_hi.15f91b1d.js","js/build/axios.6ec123f8.js","js/build/le5le-store.6335fa7c.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.e5938850.js","js/build/clipboard.ec9e96ef.js","js/build/view-design-hi.1e6e32e3.js","js/build/vuedraggable.326b11e2.js","js/build/sortablejs.19385b96.js","js/build/vue-resize-observer.60e1f2f5.js","js/build/element-sea.71c7dbcd.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.212d45b6.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.4a10d1df.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),u=()=>o(()=>import("./OnlyOffice.99fa9343.js"),["js/build/OnlyOffice.99fa9343.js","js/build/OnlyOffice.5570973b.css","js/build/vuex.cc7cb26e.js","js/build/IFrame.8ea232f6.js","js/build/app.ea3ef4bf.js","js/build/app.ca18e26f.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.09269dc1.js","js/build/@babel.38585eb3.js","js/build/localforage.46fb664b.js","js/build/markdown-it.8235c9de.js","js/build/entities.797c3e49.js","js/build/uc.micro.5276dc67.js","js/build/mdurl.25c036fe.js","js/build/linkify-it.b48b7350.js","js/build/punycode.f92dffc3.js","js/build/highlight.js.ab8aeea4.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.686cf470.js","js/build/vue.1c5be313.js","js/build/openpgp_hi.15f91b1d.js","js/build/axios.6ec123f8.js","js/build/le5le-store.6335fa7c.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.e5938850.js","js/build/clipboard.ec9e96ef.js","js/build/view-design-hi.1e6e32e3.js","js/build/vuedraggable.326b11e2.js","js/build/sortablejs.19385b96.js","js/build/vue-resize-observer.60e1f2f5.js","js/build/element-sea.71c7dbcd.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.212d45b6.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.4a10d1df.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),g=()=>o(()=>import("./Drawio.ee97b0b5.js"),["js/build/Drawio.ee97b0b5.js","js/build/Drawio.6a04e353.css","js/build/vuex.cc7cb26e.js","js/build/IFrame.8ea232f6.js","js/build/app.ea3ef4bf.js","js/build/app.ca18e26f.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.09269dc1.js","js/build/@babel.38585eb3.js","js/build/localforage.46fb664b.js","js/build/markdown-it.8235c9de.js","js/build/entities.797c3e49.js","js/build/uc.micro.5276dc67.js","js/build/mdurl.25c036fe.js","js/build/linkify-it.b48b7350.js","js/build/punycode.f92dffc3.js","js/build/highlight.js.ab8aeea4.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.686cf470.js","js/build/vue.1c5be313.js","js/build/openpgp_hi.15f91b1d.js","js/build/axios.6ec123f8.js","js/build/le5le-store.6335fa7c.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.e5938850.js","js/build/clipboard.ec9e96ef.js","js/build/view-design-hi.1e6e32e3.js","js/build/vuedraggable.326b11e2.js","js/build/sortablejs.19385b96.js","js/build/vue-resize-observer.60e1f2f5.js","js/build/element-sea.71c7dbcd.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.212d45b6.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.4a10d1df.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),f=()=>o(()=>import("./Minder.b64bce27.js"),["js/build/Minder.b64bce27.js","js/build/Minder.1839e1ef.css","js/build/IFrame.8ea232f6.js","js/build/app.ea3ef4bf.js","js/build/app.ca18e26f.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.09269dc1.js","js/build/@babel.38585eb3.js","js/build/localforage.46fb664b.js","js/build/markdown-it.8235c9de.js","js/build/entities.797c3e49.js","js/build/uc.micro.5276dc67.js","js/build/mdurl.25c036fe.js","js/build/linkify-it.b48b7350.js","js/build/punycode.f92dffc3.js","js/build/highlight.js.ab8aeea4.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/@traptitech.686cf470.js","js/build/vue.1c5be313.js","js/build/vuex.cc7cb26e.js","js/build/openpgp_hi.15f91b1d.js","js/build/axios.6ec123f8.js","js/build/le5le-store.6335fa7c.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.e5938850.js","js/build/clipboard.ec9e96ef.js","js/build/view-design-hi.1e6e32e3.js","js/build/vuedraggable.326b11e2.js","js/build/sortablejs.19385b96.js","js/build/vue-resize-observer.60e1f2f5.js","js/build/element-sea.71c7dbcd.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.212d45b6.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.4a10d1df.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),v={components:{IFrame:a,AceEditor:_,TEditor:p,VMPreview:d,OnlyOffice:u,Drawio:g,Minder:f},data(){return{loadIng:0,isWait:!1,msgDetail:{}}},mounted(){},watch:{$route:{handler(){this.getInfo()},immediate:!0}},computed:{...n(["userId"]),msgId(){const{msgId:t}=this.$route.params;return parseInt(/^\d+$/.test(t)?t:0)},title(){const{msg:t}=this.msgDetail;return t&&t.name?t.name:"Loading..."},isType(){const{msgDetail:t}=this;return function(i){return t.type=="file"&&t.file_mode==i}},officeContent(){return{id:this.msgDetail.id||0,type:this.msgDetail.msg.ext,name:this.title}},officeCode(){return"msgFile_"+this.msgDetail.id},previewUrl(){const{name:t,key:i}=this.msgDetail.content;return $A.onlinePreviewUrl(t,i)}},methods:{getInfo(){this.msgId<=0||(setTimeout(t=>{this.loadIng++},600),this.isWait=!0,this.$store.dispatch("call",{url:"dialog/msg/detail",data:{msg_id:this.msgId}}).then(({data:t})=>{this.msgDetail=t}).catch(({msg:t})=>{$A.modalError({content:t,onOk:()=>{this.$Electron&&window.close()}})}).finally(t=>{this.loadIng--,this.isWait=!1}))},documentKey(){return new Promise((t,i)=>{this.$store.dispatch("call",{url:"dialog/msg/detail",data:{msg_id:this.msgId,only_update_at:"yes"}}).then(({data:e})=>{t(`${e.id}-${$A.Time(e.update_at)}`)}).catch(e=>{i(e)})})},isLongText(t){return/^LongText-/.test(t)}}},s={};var h=m(v,l,c,!1,D,null,null,null);function D(t){for(let i in s)this[i]=s[i]}var it=function(){return h.exports}();export{it as default};
