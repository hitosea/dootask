import{R as o}from"./ReportDetail.34ab1e4e.js";import{n as a}from"./app.ac398669.js";import"./vuex.cc7cb26e.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.5dc24677.js";import"./@traptitech.1821eed0.js";import"./katex.2732e2fc.js";import"./localforage.dd9cd905.js";import"./markdown-it.67231d85.js";import"./entities.797c3e49.js";import"./uc.micro.4d0617d5.js";import"./mdurl.6c31ac34.js";import"./linkify-it.afb42329.js";import"./punycode.69e96b57.js";import"./highlight.js.b91af88c.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./vue.b897e178.js";import"./axios.6ec123f8.js";import"./le5le-store.aa7d93fc.js";import"./openpgp_hi.15f91b1d.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.9fd7ffef.js";import"./clipboard.844c30f9.js";import"./view-design-hi.ee8241e6.js";import"./vuedraggable.95307f2f.js";import"./sortablejs.3b0c8136.js";import"./vue-resize-observer.ad42cb7f.js";import"./element-sea.5f08028a.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.be6bd013.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.d40a63be.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var p=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"electron-report"},[e("PageTitle",{attrs:{title:t.$L("\u62A5\u544A\u8BE6\u60C5")}}),e("ReportDetail",{attrs:{data:t.detailData}})],1)},m=[];const s={components:{ReportDetail:o},data(){return{detailData:{}}},computed:{reportDetailId(){const{reportDetailId:t}=this.$route.params;return parseInt(/^\d+$/.test(t)?t:0)}},watch:{reportDetailId:{handler(){this.getDetail()},immediate:!0}},methods:{getDetail(){this.reportDetailId<=0||this.$store.dispatch("call",{url:"report/detail",data:{id:this.reportDetailId}}).then(({data:t})=>{this.detailData=t}).catch(({msg:t})=>{$A.messageError(t)})}}},i={};var l=a(s,p,m,!1,n,"76126c11",null,null);function n(t){for(let r in i)this[r]=i[r]}var Q=function(){return l.exports}();export{Q as default};
