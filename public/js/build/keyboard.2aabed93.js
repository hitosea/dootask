import{n as r}from"./app.6c8b31b1.js";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"setting-item submit"},[a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.ruleData,"label-width":"auto"},nativeOn:{submit:function(e){e.preventDefault()}}},[t.$Electron?[a("FormItem",{attrs:{label:t.$L("\u622A\u56FE\u5FEB\u6377\u952E"),prop:"screenshot_key"}},[a("div",{staticClass:"input-box"},[t._v(" "+t._s(t.mateName)),a("div",{staticClass:"input-box-push"},[t._v("+")]),t._v("Shift"),a("div",{staticClass:"input-box-push"},[t._v("+")]),a("Input",{staticClass:"input-box-key",attrs:{maxlength:2},model:{value:t.formData.screenshot_key,callback:function(e){t.$set(t.formData,"screenshot_key",e)},expression:"formData.screenshot_key"}})],1)]),a("FormItem",{attrs:{label:t.$L("\u65B0\u5EFA\u9879\u76EE")}},[a("div",{staticClass:"input-box"},[t._v(" "+t._s(t.mateName)),a("div",{staticClass:"input-box-push"},[t._v("+")]),t._v("B ")])]),a("FormItem",{attrs:{label:t.$L("\u65B0\u5EFA\u4EFB\u52A1")}},[a("div",{staticClass:"input-box"},[t._v(" "+t._s(t.mateName)),a("div",{staticClass:"input-box-push"},[t._v("+")]),t._v("N (K) ")])]),a("FormItem",{attrs:{label:t.$L("\u65B0\u4F1A\u8BAE")}},[a("div",{staticClass:"input-box"},[t._v(" "+t._s(t.mateName)),a("div",{staticClass:"input-box-push"},[t._v("+")]),t._v("J ")])]),a("FormItem",{attrs:{label:t.$L("\u8BBE\u7F6E")}},[a("div",{staticClass:"input-box"},[t._v(" "+t._s(t.mateName)),a("div",{staticClass:"input-box-push"},[t._v("+")]),t._v(", ")])])]:t._e(),a("FormItem",{attrs:{label:t.$L("\u53D1\u9001\u6309\u94AE"),prop:"anonMessage"}},[a("RadioGroup",{model:{value:t.formData.separate_send_button,callback:function(e){t.$set(t.formData,"separate_send_button",e)},expression:"formData.separate_send_button"}},[a("Radio",{attrs:{label:"open"}},[t._v(t._s(t.$L("\u5F00\u542F")))]),a("Radio",{attrs:{label:"close"}},[t._v(t._s(t.$L("\u5173\u95ED")))])],1),a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5F00\u542F\u540E\uFF0C\u53D1\u9001\u6D88\u606F\u65F6\u952E\u76D8\u4E0A\u7684\u53D1\u9001\u6309\u94AE\u4F1A\u88AB\u66FF\u6362\u6210\u6362\u884C")))])],1)],2),a("div",{staticClass:"setting-footer"},[a("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("\u4FDD\u5B58")))]),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("\u91CD\u7F6E")))])],1)],1)},n=[];const _={data(){return{loadIng:0,mateName:/macintosh|mac os x/i.test(navigator.userAgent)?"Command":"Ctrl",formData:{screenshot_key:"",separate_send_button:"open"},ruleData:{screenshot_key:[{validator:(t,s,a)=>{s=s.trim(),s=s.substring(s.length-1),s&&!/^[A-Za-z0-9]?$/.test(s)?a(new Error(this.$L("\u53EA\u80FD\u8F93\u5165\u5B57\u6BCD\u6216\u6570\u5B57"))):a(),this.$nextTick(e=>{this.$set(this.formData,t.field,s.toUpperCase())})},trigger:"change"}]}}},mounted(){this.initData()},methods:{initData(){this.formData=Object.assign({screenshot_key:"",separate_send_button:"open"},$A.jsonParse(window.localStorage.getItem("__keyboard:data__"))||{}),this.formData_bak=$A.cloneJSON(this.formData)},submitForm(){this.$refs.formData.validate(t=>{t&&(window.localStorage.setItem("__keyboard:data__",$A.jsonStringify(this.formData)),this.$Electron&&$A.bindScreenshotKey(this.formData),$A.messageSuccess("\u4FDD\u5B58\u6210\u529F"))})},resetForm(){this.formData=$A.cloneJSON(this.formData_bak)}}},o={};var l=r(_,i,n,!1,m,"c1fe678c",null,null);function m(t){for(let s in o)this[s]=o[s]}var d=function(){return l.exports}();export{d as default};
