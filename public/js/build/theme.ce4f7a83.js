import{m as a}from"./vuex.cc7cb26e.js";import{n as s}from"./app.57070a0d.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.accd1716.js";import"./@traptitech.363dce05.js";import"./katex.0b94f27c.js";import"./localforage.879ac172.js";import"./markdown-it.f3afa976.js";import"./entities.797c3e49.js";import"./uc.micro.39573202.js";import"./mdurl.2f66c031.js";import"./linkify-it.3ecfda1e.js";import"./punycode.87a5269f.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./vue.eaf71fac.js";import"./axios.6ec123f8.js";import"./le5le-store.b40f9152.js";import"./openpgp_hi.15f91b1d.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.4402036c.js";import"./clipboard.d74ec60d.js";import"./view-design-hi.76cbd75d.js";import"./default-passive-events.a3d698c9.js";import"./vuedraggable.c8fae132.js";import"./sortablejs.8b819437.js";import"./vue-resize-observer.5fb00380.js";import"./element-sea.b954f5d6.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.e60103ad.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.289edf0d.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"setting-item submit"},[o("Form",{ref:"formData",attrs:{model:t.formData,rules:t.ruleData,labelPosition:t.formLabelPosition,labelWidth:t.formLabelWidth},nativeOn:{submit:function(r){r.preventDefault()}}},[o("FormItem",{attrs:{label:t.$L("\u9009\u62E9\u4E3B\u9898"),prop:"theme"}},[o("Select",{attrs:{placeholder:t.$L("\u9009\u9879\u4E3B\u9898")},model:{value:t.formData.theme,callback:function(r){t.$set(t.formData,"theme",r)},expression:"formData.theme"}},t._l(t.themeList,function(r,m){return o("Option",{key:m,attrs:{value:r.value}},[t._v(t._s(t.$L(r.name)))])}),1)],1)],1),o("div",{staticClass:"setting-footer"},[o("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("\u63D0\u4EA4")))]),o("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("\u91CD\u7F6E")))])],1)],1)},l=[];const p={data(){return{loadIng:0,formData:{theme:""},ruleData:{}}},mounted(){this.initData()},computed:{...a(["themeConf","themeList","formLabelPosition","formLabelWidth"])},methods:{initData(){this.$set(this.formData,"theme",this.themeConf),this.formData_bak=$A.cloneJSON(this.formData)},submitForm(){this.$refs.formData.validate(t=>{t&&this.$store.dispatch("setTheme",this.formData.theme).then(e=>{e&&$A.messageSuccess("\u4FDD\u5B58\u6210\u529F")})})},resetForm(){this.formData=$A.cloneJSON(this.formData_bak)}}},i={};var f=s(p,n,l,!1,c,null,null,null);function c(t){for(let e in i)this[e]=i[e]}var U=function(){return f.exports}();export{U as default};
