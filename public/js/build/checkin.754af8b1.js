import{n as h}from"./app.ac398669.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.5dc24677.js";import"./@traptitech.1821eed0.js";import"./katex.2732e2fc.js";import"./localforage.dd9cd905.js";import"./markdown-it.67231d85.js";import"./entities.797c3e49.js";import"./uc.micro.4d0617d5.js";import"./mdurl.6c31ac34.js";import"./linkify-it.afb42329.js";import"./punycode.69e96b57.js";import"./highlight.js.b91af88c.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./vue.b897e178.js";import"./vuex.cc7cb26e.js";import"./axios.6ec123f8.js";import"./le5le-store.aa7d93fc.js";import"./openpgp_hi.15f91b1d.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.9fd7ffef.js";import"./clipboard.844c30f9.js";import"./view-design-hi.ee8241e6.js";import"./vuedraggable.95307f2f.js";import"./sortablejs.3b0c8136.js";import"./vue-resize-observer.ad42cb7f.js";import"./element-sea.5f08028a.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.be6bd013.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.d40a63be.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"checkin-calendar"},[e("div",{staticClass:"calendar-header"},[e("div",{staticClass:"calendar-header-menu"},[e("Icon",{staticClass:"month-less",attrs:{type:"ios-arrow-back"},on:{click:t.prevMonth}}),e("h4",[t._v(t._s(t.$L("(*)\u5E74(*)\u6708",t.year,t.month)))]),t.hasNextMonth?e("Icon",{staticClass:"month-add",attrs:{type:"ios-arrow-forward"},on:{click:t.nextMonth}}):t._e()],1),t.hasNextMonth?e("Button",{staticClass:"calendar-header-back",attrs:{size:"small"},on:{click:t.nowMonth}},[t._v(t._s(t.$L("\u8FD4\u56DE\u672C\u6708")))]):t._e()],1),e("table",{staticClass:"check-table"},[e("thead",[e("tr",[e("th",[t._v(t._s(t.$L("\u65E5")))]),e("th",[t._v(t._s(t.$L("\u4E00")))]),e("th",[t._v(t._s(t.$L("\u4E8C")))]),e("th",[t._v(t._s(t.$L("\u4E09")))]),e("th",[t._v(t._s(t.$L("\u56DB")))]),e("th",[t._v(t._s(t.$L("\u4E94")))]),e("th",[t._v(t._s(t.$L("\u516D")))])])]),e("tbody",t._l(t.dateArray,function(s){return e("tr",[t._l(s,function(i){return[i.month?e("td",{class:{today:i.today,checkin:t.isCheck(i.date)}},[e("ETooltip",{attrs:{"max-width":"auto",disabled:!t.isCheck(i.date)}},[e("div",{attrs:{slot:"content"},domProps:{innerHTML:t._s(t.getTimes(i.date))},slot:"content"}),e("div",{staticClass:"item-day"},[i.today?e("div",[t._v(t._s(t.$L("\u4ECA\u5929")))]):e("div",[t._v(t._s(i.day))]),t.isCheck(i.date)?e("div",{staticClass:"ui-state-down"},[t._v(t._s(t.$L("\u5DF2\u7B7E\u5230")))]):i.today?e("div",{staticClass:"ui-state-default"},[t._v(t._s(t.$L("\u5C1A\u672A\u7B7E\u5230")))]):t._e()])])],1):e("td",{staticClass:"disabled"},[e("div",{staticClass:"item-day"},[e("div",[t._v(t._s(i.day))]),t.isCheck(i.date)?e("div",{staticClass:"ui-state-down"},[t._v(t._s(t.$L("\u5DF2\u7B7E\u5230")))]):t._e()])])]})],2)}),0)]),t.loadIng?e("div",{staticClass:"calendar-loading"},[e("Loading")],1):t._e()])},d=[];const _={name:"CheckinCalendar",props:{checkin:{type:Array},loadIng:{type:Boolean,default:!1}},data(){return{year:"",month:"",startTime:"",endTime:"",dateArray:[],historys:[]}},created(){const t=new Date;this.year=t.getFullYear(),this.month=t.getMonth()+1,this.generateCalendar()},watch:{checkin:{handler(t){t.some(({date:a,section:e})=>{a=a.replace(/-0?/g,"/");let s=this.historys.findIndex(i=>i.date==a);s>-1?this.historys.splice(s,1,{date:a,section:e}):this.historys.push({date:a,section:e})})},immediate:!0}},computed:{hasNextMonth(){const{year:t,month:a}=this;return parseInt(t)!=$A.formatDate("Y")||parseInt(a)<$A.formatDate("m")}},methods:{ym(){return this.year+"-"+(this.month<10?"0"+this.month:this.month)},isCheck(t){return!!this.historys.find(a=>a.date==t)},setMonth(t){this.$emit("setMonth",t,[this.startTime,this.endTime])},getTimes(t){const a=this.historys.find(e=>e.date==t);return a==null?void 0:a.section.map(e=>`${e[0]} - ${e[1]||"None"}`).join("<br/>")},generateCalendar(){let t=new Date($A.formatDate("Y/m/d")),a=new Date(this.year,this.month-1,1),e=a.getTime()-a.getDay()*86400*1e3,s=[];for(let i=0;i<6;i++){s[i]=[];for(let n=0;n<7;n++){let r=new Date(e),o=r.getMonth()+1;s[i][n]={day:r.getDate(),date:`${r.getFullYear()}/${o}/${r.getDate()}`,today:t.getTime()==r.getTime(),future:t.getTime()<r.getTime(),month:o==this.month},e+=86400*1e3}}this.dateArray=s,this.startTime=s[0][0].date,this.endTime=s[5][6].date,this.setMonth(this.year+"/"+this.month,[this.startTime,this.endTime])},nextMonth(){this.month==12?(this.year++,this.month=1):this.month++,this.generateCalendar(),this.$emit("changeMonth",this.ym())},prevMonth(){this.month==1?(this.year--,this.month=12):this.month--,this.generateCalendar(),this.$emit("changeMonth",this.ym())},nowMonth(){this.year=parseInt($A.formatDate("Y")),this.month=parseInt($A.formatDate("m")),this.generateCalendar(),this.$emit("changeMonth",this.ym())}}},l={};var u=h(_,m,d,!1,p,null,null,null);function p(t){for(let a in l)this[a]=l[a]}var f=function(){return u.exports}(),v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"setting-item submit"},[e("Form",{ref:"formData",attrs:{"label-width":"auto"},nativeOn:{submit:function(s){s.preventDefault()}}},[e("Divider",{staticStyle:{"margin-top":"0"},attrs:{orientation:"left"}},[t._v(t._s(t.$L("\u7B7E\u5230\u8BB0\u5F55")))]),t.latelyLoad>0?e("div",{staticClass:"setting-checkin-load"},[e("Loading")],1):e("Timeline",{staticClass:"setting-checkin-lately"},t._l(t.latelyData,function(s,i){return e("TimelineItem",{key:i,attrs:{color:s.section.length>0?"blue":"#F29D38"}},[e("Icon",{attrs:{slot:"dot",type:s.section.length>0?"md-checkmark-circle":"md-close-circle"},slot:"dot"}),e("p",{staticClass:"time"},[t._v(t._s(s.date))]),e("p",{staticClass:"content",domProps:{innerHTML:t._s(s.section.length>0?t.latelySection(s.section):t.$L("\u672A\u7B7E\u5230"))}})],1)}),1),e("div",{staticClass:"setting-checkin-button",on:{click:function(s){t.calendarShow=!0}}},[t._v(t._s(t.$L("\u67E5\u770B\u66F4\u591A\u7B7E\u5230\u6570\u636E")))]),e("Divider",{attrs:{orientation:"left"}},[t._v(t._s(t.$L("\u7B7E\u5230\u8BBE\u7F6E")))]),e("Alert",[t._v(" "+t._s(t.$L("\u8BBE\u5907\u8FDE\u63A5\u4E0A\u6307\u5B9A\u8DEF\u7531\u5668\uFF08WiFi\uFF09\u540E\u81EA\u52A8\u7B7E\u5230\u3002"))+" ")]),e("div",{staticClass:"setting-checkin-row"},[e("Row",{staticClass:"setting-template"},[e("Col",{attrs:{span:"12"}},[t._v(t._s(t.$L("\u8BBE\u5907MAC\u5730\u5740")))]),e("Col",{attrs:{span:"12"}},[t._v(t._s(t.$L("\u5907\u6CE8")))])],1),t._l(t.formData,function(s,i){return e("Row",{key:i,staticClass:"setting-template"},[e("Col",{attrs:{span:"12"}},[e("Input",{attrs:{maxlength:20,placeholder:t.$L("\u8BF7\u8F93\u5165\u8BBE\u5907MAC\u5730\u5740"),clearable:""},on:{"on-clear":function(n){return t.delDatum(i)}},model:{value:s.mac,callback:function(n){t.$set(s,"mac",n)},expression:"item.mac"}})],1),e("Col",{attrs:{span:"12"}},[e("Input",{attrs:{maxlength:100,placeholder:t.$L("\u5907\u6CE8")},model:{value:s.remark,callback:function(n){t.$set(s,"remark",n)},expression:"item.remark"}})],1)],1)})],2),e("Button",{attrs:{type:"default",icon:"md-add"},on:{click:t.addDatum}},[t._v(t._s(t.$L("\u6DFB\u52A0\u8BBE\u5907")))])],1),e("div",{staticClass:"setting-footer"},[e("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("\u63D0\u4EA4")))]),e("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("\u91CD\u7F6E")))])],1),e("Modal",{attrs:{title:t.$L("\u7B7E\u5230\u6570\u636E"),"footer-hide":"","mask-closable":!1},model:{value:t.calendarShow,callback:function(s){t.calendarShow=s},expression:"calendarShow"}},[e("CheckinCalendar",{ref:"calendar",attrs:{loadIng:t.calendarLoading>0,checkin:t.calendarData},on:{changeMonth:t.changeMonth}})],1)],1)},y=[];const $={name:"ManageCheckin",components:{CheckinCalendar:f},data(){return{loadIng:0,formData:[],nullDatum:{mac:"",remark:""},latelyLoad:0,latelyData:[],calendarShow:!1,calendarLoading:0,calendarData:[]}},mounted(){this.initData(),this.getLately()},watch:{calendarShow(t){t&&this.$nextTick(a=>{this.changeMonth(this.$refs.calendar.ym())})}},methods:{initData(){this.loadIng++,this.$store.dispatch("call",{url:"users/checkin/get"}).then(({data:t})=>{this.formData=t.length>0?t:[$A.cloneJSON(this.nullDatum)],this.formData_bak=$A.cloneJSON(this.formData)}).catch(({msg:t})=>{$A.modalError(t)}).finally(t=>{this.loadIng--})},submitForm(){this.$refs.formData.validate(t=>{if(t){const a=this.formData.filter(e=>/^[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}:[A-Fa-f\d]{2}$/.test(e.mac.trim())).map(e=>({mac:e.mac.trim(),remark:e.remark.trim()}));this.loadIng++,this.$store.dispatch("call",{url:"users/checkin/save",data:{list:a},method:"post"}).then(({data:e})=>{this.formData=e,this.formData_bak=$A.cloneJSON(this.formData),$A.messageSuccess("\u4FEE\u6539\u6210\u529F")}).catch(({msg:e})=>{$A.modalError(e)}).finally(e=>{this.loadIng--})}})},resetForm(){this.formData=$A.cloneJSON(this.formData_bak)},addDatum(){this.formData.push($A.cloneJSON(this.nullDatum))},delDatum(t){this.formData.splice(t,1),this.formData.length===0&&this.addDatum()},getLately(){this.latelyLoad++,this.$store.dispatch("call",{url:"users/checkin/list",data:{ym:$A.formatDate("Y-m"),before:1}}).then(({data:t})=>{this.latelyFormat(t)}).finally(t=>{this.latelyLoad--})},latelyFormat(t){const a=$A.Time();this.latelyData=[];for(let e=0;e<5;e++){const s=$A.formatDate("Y-m-d",a-e*86400),i=t.find(({date:n})=>n==s)||{date:s,section:[]};this.latelyData.push(i)}},latelySection(t){return t.map(a=>`${a[0]} - ${a[1]||"None"}`).join("<br/>")},changeMonth(t){setTimeout(a=>{this.calendarLoading++},600),this.$store.dispatch("call",{url:"users/checkin/list",data:{ym:t,before:1}}).then(({data:a})=>{this.$refs.calendar.ym()==t&&(this.calendarData=a,t==$A.formatDate("Y-m")&&this.latelyFormat(a))}).catch(({msg:a})=>{this.calendarData=[],$A.modalError(a)}).finally(a=>{this.calendarLoading--})}}},c={};var g=h($,v,y,!1,D,null,null,null);function D(t){for(let a in c)this[a]=c[a]}var st=function(){return g.exports}();export{st as default};
