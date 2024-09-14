import"./lodash.159daa16.js";import{m as i}from"./vuex.cc7cb26e.js";import{n as s}from"./app.ea3ef4bf.js";import"./@babel.38585eb3.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.09269dc1.js";import"./localforage.46fb664b.js";import"./markdown-it.8235c9de.js";import"./entities.797c3e49.js";import"./uc.micro.5276dc67.js";import"./mdurl.25c036fe.js";import"./linkify-it.b48b7350.js";import"./punycode.f92dffc3.js";import"./highlight.js.ab8aeea4.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.686cf470.js";import"./vue.1c5be313.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.6335fa7c.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.e5938850.js";import"./clipboard.ec9e96ef.js";import"./view-design-hi.1e6e32e3.js";import"./vuedraggable.326b11e2.js";import"./sortablejs.19385b96.js";import"./vue-resize-observer.60e1f2f5.js";import"./element-sea.71c7dbcd.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.212d45b6.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.4a10d1df.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"setting-item submit"},[t.configLoad>0?r("Loading"):r("Form",{ref:"formData",attrs:{model:t.formData,rules:t.ruleDatum,labelPosition:t.formLabelPosition,labelWidth:t.formLabelWidth},nativeOn:{submit:function(o){o.preventDefault()}}},[r("FormItem",{attrs:{label:"AGENT_ID",prop:"agent_id"}},[r("Input",{attrs:{placeholder:t.$L("\u8F93\u5165agent_id")},model:{value:t.formData.agent_id,callback:function(o){t.$set(t.formData,"agent_id",o)},expression:"formData.agent_id"}})],1),r("FormItem",{attrs:{label:"COPR_ID",prop:"copr_id"}},[r("Input",{attrs:{placeholder:t.$L("\u8F93\u5165copr_id")},model:{value:t.formData.copr_id,callback:function(o){t.$set(t.formData,"copr_id",o)},expression:"formData.copr_id"}})],1),r("FormItem",{attrs:{label:"APP_SECRET",prop:"app_secret"}},[r("Input",{attrs:{placeholder:t.$L("\u8F93\u5165app_secret")},model:{value:t.formData.app_secret,callback:function(o){t.$set(t.formData,"app_secret",o)},expression:"formData.app_secret"}})],1),r("FormItem",{attrs:{label:"\u901A\u8BAF\u5F55\u540C\u6B65-SECRET",prop:"address_secret"}},[r("Input",{attrs:{placeholder:""},model:{value:t.formData.address_secret,callback:function(o){t.$set(t.formData,"address_secret",o)},expression:"formData.address_secret"}})],1)],1),r("div",{staticClass:"setting-footer"},[r("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("\u63D0\u4EA4")))]),r("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("\u91CD\u7F6E")))])],1)],1)},p=[];const n={data(){return{loadIng:0,configLoad:0,formData:{copr_id:"",agent_id:"",app_secret:"",address_secret:""},ruleDatum:{copr_id:[{validator:(t,e,r)=>{e.trim()===""?r(new Error(this.$L("\u8F93\u5165copr_id"))):r()},required:!0,trigger:"change"}],agent_id:[{validator:(t,e,r)=>{e.trim()===""?r(new Error(this.$L("\u8F93\u5165agent_id"))):r()},required:!0,trigger:"change"}],app_secret:[{validator:(t,e,r)=>{e.trim()===""?r(new Error(this.$L("\u8F93\u5165app_secret"))):r()},required:!0,trigger:"change"}]}}},computed:{...i(["formLabelPosition","formLabelWidth"])},mounted(){this.systemSetting()},methods:{submitForm(){this.$refs.formData.validate(t=>{t&&this.systemSetting(!0)})},resetForm(){this.formData=$A.cloneJSON(this.formData_bak)},systemSetting(t){this.loadIng++,this.$store.dispatch("call",{url:"system/setting/wecom?type="+(t?"save":"all"),data:this.formData}).then(({data:e})=>{t&&$A.messageSuccess("\u4FEE\u6539\u6210\u529F"),this.formData=e,this.formData_bak=$A.cloneJSON(this.formData)}).catch(({msg:e})=>{t&&$A.modalError(e)}).finally(e=>{this.loadIng--})}}},a={};var l=s(n,m,p,!1,c,null,null,null);function c(t){for(let e in a)this[e]=a[e]}var Q=function(){return l.exports}();export{Q as default};
