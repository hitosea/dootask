import{m as a}from"./vuex.cc7cb26e.js";import{n as i}from"./app.ac398669.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.5dc24677.js";import"./@traptitech.1821eed0.js";import"./katex.2732e2fc.js";import"./localforage.dd9cd905.js";import"./markdown-it.67231d85.js";import"./entities.797c3e49.js";import"./uc.micro.4d0617d5.js";import"./mdurl.6c31ac34.js";import"./linkify-it.afb42329.js";import"./punycode.69e96b57.js";import"./highlight.js.b91af88c.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./vue.b897e178.js";import"./axios.6ec123f8.js";import"./le5le-store.aa7d93fc.js";import"./openpgp_hi.15f91b1d.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.9fd7ffef.js";import"./clipboard.844c30f9.js";import"./view-design-hi.ee8241e6.js";import"./vuedraggable.95307f2f.js";import"./sortablejs.3b0c8136.js";import"./vue-resize-observer.ad42cb7f.js";import"./element-sea.5f08028a.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.be6bd013.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.d40a63be.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var m=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"setting-item submit"},[r("Form",{ref:"formDatum",attrs:{model:t.formDatum,rules:t.ruleDatum,labelPosition:t.formLabelPosition,labelWidth:t.formLabelWidth},nativeOn:{submit:function(e){e.preventDefault()}}},[t.userInfo.changepass?r("Alert",{staticStyle:{"margin-bottom":"32px"},attrs:{type:"warning",showIcon:""}},[t._v(t._s(t.$L("\u8BF7\u5148\u4FEE\u6539\u767B\u5F55\u5BC6\u7801\uFF01")))]):t._e(),r("FormItem",{attrs:{label:t.$L("\u65E7\u5BC6\u7801"),prop:"oldpass"}},[r("Input",{attrs:{type:"password"},model:{value:t.formDatum.oldpass,callback:function(e){t.$set(t.formDatum,"oldpass",e)},expression:"formDatum.oldpass"}})],1),r("FormItem",{attrs:{label:t.$L("\u65B0\u5BC6\u7801"),prop:"newpass"}},[r("Input",{attrs:{type:"password"},model:{value:t.formDatum.newpass,callback:function(e){t.$set(t.formDatum,"newpass",e)},expression:"formDatum.newpass"}})],1),r("FormItem",{attrs:{label:t.$L("\u786E\u8BA4\u65B0\u5BC6\u7801"),prop:"checkpass"}},[r("Input",{attrs:{type:"password"},model:{value:t.formDatum.checkpass,callback:function(e){t.$set(t.formDatum,"checkpass",e)},expression:"formDatum.checkpass"}})],1)],1),r("div",{staticClass:"setting-footer"},[r("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("\u63D0\u4EA4")))]),r("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("\u91CD\u7F6E")))])],1)],1)},p=[];const n={data(){return{loadIng:0,formDatum:{oldpass:"",newpass:"",checkpass:""},ruleDatum:{oldpass:[{required:!0,message:this.$L("\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801\uFF01"),trigger:"change"},{type:"string",min:6,message:this.$L("\u5BC6\u7801\u957F\u5EA6\u81F3\u5C116\u4F4D\uFF01"),trigger:"change"}],newpass:[{validator:(t,s,r)=>{s===""?r(new Error(this.$L("\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801\uFF01"))):(this.formDatum.checkpass!==""&&this.$refs.formDatum.validateField("checkpass"),r())},required:!0,trigger:"change"},{type:"string",min:6,message:this.$L("\u5BC6\u7801\u957F\u5EA6\u81F3\u5C116\u4F4D\uFF01"),trigger:"change"}],checkpass:[{validator:(t,s,r)=>{s===""?r(new Error(this.$L("\u8BF7\u91CD\u65B0\u8F93\u5165\u65B0\u5BC6\u7801\uFF01"))):s!==this.formDatum.newpass?r(new Error(this.$L("\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4\uFF01"))):r()},required:!0,trigger:"change"}]}}},computed:{...a(["userInfo","formLabelPosition","formLabelWidth"])},methods:{submitForm(){this.$refs.formDatum.validate(t=>{t&&(this.loadIng++,this.$store.dispatch("call",{url:"users/editpass",data:this.formDatum}).then(({data:s})=>{$A.messageSuccess("\u4FEE\u6539\u6210\u529F"),this.$store.dispatch("saveUserInfo",s),this.$refs.formDatum.resetFields()}).catch(({msg:s})=>{$A.modalError(s)}).finally(s=>{this.loadIng--}))})},resetForm(){this.$refs.formDatum.resetFields()}}},o={};var l=i(n,m,p,!1,u,null,null,null);function u(t){for(let s in o)this[s]=o[s]}var N=function(){return l.exports}();export{N as default};
