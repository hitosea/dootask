import{a as m,l as n,f as s,n as l}from"./app.f1b2eef6.js";import{m as p}from"./vuex.cc7cb26e.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.70f9fbe0.js";import"./@babel.bf7d9895.js";import"./localforage.70b1c685.js";import"./markdown-it.5805e7b3.js";import"./entities.797c3e49.js";import"./uc.micro.5e15fe26.js";import"./mdurl.9b711dc1.js";import"./linkify-it.e19f2cc9.js";import"./punycode.1f63f7c7.js";import"./highlight.js.ab8aeea4.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.5dd4b97c.js";import"./vue.c9220c0f.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.ed1761e9.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.43956d0e.js";import"./clipboard.136ac061.js";import"./view-design-hi.b9fa657a.js";import"./vuedraggable.1db9a3fb.js";import"./sortablejs.0856e76f.js";import"./vue-resize-observer.47f133f6.js";import"./element-sea.fa7547f0.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.53897542.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.72c7ddab.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var u=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"setting-item submit"},[a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.ruleData,labelPosition:t.formLabelPosition,labelWidth:t.formLabelWidth},nativeOn:{submit:function(o){o.preventDefault()}}},[a("FormItem",{attrs:{label:t.$L("\u9009\u62E9\u8BED\u8A00"),prop:"language"}},[a("Select",{attrs:{placeholder:t.$L("\u9009\u9879\u8BED\u8A00")},model:{value:t.formData.language,callback:function(o){t.$set(t.formData,"language",o)},expression:"formData.language"}},t._l(t.languageList,function(o,i){return a("Option",{key:i,attrs:{value:i}},[t._v(t._s(o))])}),1)],1)],1),a("div",{staticClass:"setting-footer"},[a("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("\u63D0\u4EA4")))]),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("\u91CD\u7F6E")))])],1)],1)},f=[];const g={data(){return{loadIng:0,languageList:m,formData:{language:""},ruleData:{}}},mounted(){this.initData()},computed:{...p(["formLabelPosition","formLabelWidth"])},methods:{initData(){this.$set(this.formData,"language",n),this.formData_bak=$A.cloneJSON(this.formData)},submitForm(){this.$refs.formData.validate(t=>{t&&s(this.formData.language)})},resetForm(){this.formData=$A.cloneJSON(this.formData_bak)}}},e={};var c=l(g,u,f,!1,_,null,null,null);function _(t){for(let r in e)this[r]=e[r]}var X=function(){return c.exports}();export{X as default};
