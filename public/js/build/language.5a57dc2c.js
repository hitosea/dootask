import{a as m,l as n,f as s,n as l}from"./app.ea3ef4bf.js";import{m as p}from"./vuex.cc7cb26e.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.09269dc1.js";import"./@babel.38585eb3.js";import"./localforage.46fb664b.js";import"./markdown-it.8235c9de.js";import"./entities.797c3e49.js";import"./uc.micro.5276dc67.js";import"./mdurl.25c036fe.js";import"./linkify-it.b48b7350.js";import"./punycode.f92dffc3.js";import"./highlight.js.ab8aeea4.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.686cf470.js";import"./vue.1c5be313.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.6335fa7c.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.e5938850.js";import"./clipboard.ec9e96ef.js";import"./view-design-hi.1e6e32e3.js";import"./vuedraggable.326b11e2.js";import"./sortablejs.19385b96.js";import"./vue-resize-observer.60e1f2f5.js";import"./element-sea.71c7dbcd.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.212d45b6.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.4a10d1df.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var u=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"setting-item submit"},[a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.ruleData,labelPosition:t.formLabelPosition,labelWidth:t.formLabelWidth},nativeOn:{submit:function(o){o.preventDefault()}}},[a("FormItem",{attrs:{label:t.$L("\u9009\u62E9\u8BED\u8A00"),prop:"language"}},[a("Select",{attrs:{placeholder:t.$L("\u9009\u9879\u8BED\u8A00")},model:{value:t.formData.language,callback:function(o){t.$set(t.formData,"language",o)},expression:"formData.language"}},t._l(t.languageList,function(o,i){return a("Option",{key:i,attrs:{value:i}},[t._v(t._s(o))])}),1)],1)],1),a("div",{staticClass:"setting-footer"},[a("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("\u63D0\u4EA4")))]),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("\u91CD\u7F6E")))])],1)],1)},f=[];const g={data(){return{loadIng:0,languageList:m,formData:{language:""},ruleData:{}}},mounted(){this.initData()},computed:{...p(["formLabelPosition","formLabelWidth"])},methods:{initData(){this.$set(this.formData,"language",n),this.formData_bak=$A.cloneJSON(this.formData)},submitForm(){this.$refs.formData.validate(t=>{t&&s(this.formData.language)})},resetForm(){this.formData=$A.cloneJSON(this.formData_bak)}}},e={};var c=l(g,u,f,!1,_,null,null,null);function _(t){for(let r in e)this[r]=e[r]}var X=function(){return c.exports}();export{X as default};
