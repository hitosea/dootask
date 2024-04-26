import{m,a as f}from"./vuex.cc7cb26e.js";import"./tui-date-picker.87c69814.js";import"./tui-time-picker.edd3de9f.js";import{C as g}from"./tui-calendar-hi.ae5960be.js";import{n as p,T as k,d as $}from"./app.57070a0d.js";import{h as o}from"./moment.620e955d.js";import{l as y}from"./le5le-store.b40f9152.js";import"./@traptitech.363dce05.js";import"./katex.0b94f27c.js";import"./tui-code-snippet.449e7a67.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.accd1716.js";import"./localforage.879ac172.js";import"./markdown-it.f3afa976.js";import"./entities.797c3e49.js";import"./uc.micro.39573202.js";import"./mdurl.2f66c031.js";import"./linkify-it.3ecfda1e.js";import"./punycode.87a5269f.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./vue.eaf71fac.js";import"./axios.6ec123f8.js";import"./openpgp_hi.15f91b1d.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.4402036c.js";import"./clipboard.d74ec60d.js";import"./view-design-hi.76cbd75d.js";import"./default-passive-events.a3d698c9.js";import"./vuedraggable.c8fae132.js";import"./sortablejs.8b819437.js";import"./vue-resize-observer.5fb00380.js";import"./element-sea.b954f5d6.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.e60103ad.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.289edf0d.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var _=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{ref:"tuiCalendar",staticClass:"calendar-wrapper"})},w=[];const T={name:"Calendar",props:{calendars:{type:Array,default(){return[]}},schedules:{type:Array,default(){return[]},validator(e){let a=!1;return e.forEach(t=>{a=["start","category"].some(s=>!t.hasOwnProperty(s))}),!a}},view:{type:String,default:"week"},taskView:{type:[Boolean,Array],default:!0},scheduleView:{type:[Boolean,Array],default:!0},theme:{type:Object,default(){return{}}},template:{type:Object,default(){return{}}},week:{type:Object,default(){return{}}},month:{type:Object,default(){return{}}},useCreationPopup:{type:Boolean,default:!0},useDetailPopup:{type:Boolean,default:!0},timezones:{type:Array,default(){return[]}},disableDblClick:{type:Boolean,default:!1},disableClick:{type:Boolean,default:!1},isReadOnly:{type:Boolean,default:!1},usageStatistics:{type:Boolean,default:!0}},data(){return{calendarInstance:null}},watch:{calendars(e){this.calendarInstance.setCalendars(e),this.$nextTick(this.resetRender)},schedules(){this.resetRender()},view(e){this.calendarInstance.changeView(e,!0)},taskView(e){this.calendarInstance.setOptions({taskView:e})},scheduleView(e){this.calendarInstance.setOptions({scheduleView:e})},theme:{handler(e){this.calendarInstance.setTheme($A.cloneJSON(e))},deep:!0},week:{handler(e){const a=this.view!=="week"&&this.view!=="day";this.calendarInstance.setOptions({week:$A.cloneJSON(e)},a)},deep:!0},month:{handler(e){const a=this.view!=="month";this.calendarInstance.setOptions({month:$A.cloneJSON(e)},a)},deep:!0},timezones(e){this.calendarInstance.setOptions({timezones:e})},disableDblClick(e){this.calendarInstance.setOptions({disableDblClick:e})},disableClick(e){this.calendarInstance.setOptions({disableClick:e})},isReadOnly(e){this.calendarInstance.setOptions({isReadOnly:e})},windowPortrait:{handler(e){this.resetRender()},immediate:!0}},mounted(){this.calendarInstance=new g(this.$refs.tuiCalendar,{defaultView:this.view,taskView:this.taskView,scheduleView:this.scheduleView,theme:this.theme,template:this.template,week:this.week,month:this.month,calendars:this.calendars,useCreationPopup:this.useCreationPopup,useDetailPopup:this.useDetailPopup,timezones:this.timezones,disableDblClick:this.disableDblClick,disableClick:this.disableClick,isReadOnly:this.isReadOnly,usageStatistics:this.usageStatistics}),this.addEventListeners(),this.reflectSchedules(),window.addEventListener("resize",this.resetRender)},beforeDestroy(){this.calendarInstance.off(),this.calendarInstance.destroy(),window.removeEventListener("resize",this.resetRender)},methods:{addEventListeners(){for(const e of Object.keys(this.$listeners))this.calendarInstance.on(e,(...a)=>this.$emit(e,...a))},reflectSchedules(){this.schedules.length>0&&this.invoke("createSchedules",this.schedules)},getRootElement(){return this.$refs.tuiCalendar},getInstance(){return this.calendarInstance},resetRender(){this.calendarInstance&&(this.calendarInstance.clear(),this.reflectSchedules())},invoke(e,...a){let t;return this.calendarInstance[e]&&(t=this.calendarInstance[e](...a)),t}}},h={};var v=p(T,_,w,!1,C,null,null,null);function C(e){for(let a in h)this[a]=h[a]}var b=function(){return v.exports}(),S=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page-calendar"},[t("PageTitle",{attrs:{title:e.$L("\u65E5\u5386")}}),t("div",{staticClass:"calendar-head"},[t("div",{staticClass:"calendar-titbox"},[t("div",{staticClass:"calendar-title"},[t("div",{staticClass:"common-nav-back portrait",on:{click:function(s){return e.goForward({name:"manage-application"},!0)}}},[t("i",{staticClass:"taskfont"},[e._v("\uE676")])]),t("h1",[e._v(e._s(e.rangeText))])]),t("ButtonGroup",{staticClass:"calendar-arrow",attrs:{size:"small"}},[t("Button",{on:{click:e.preMonth}},[t("Icon",{attrs:{type:"ios-arrow-back"}})],1),t("Button",{on:{click:e.afterMonth}},[t("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1),t("ButtonGroup",{staticClass:"calendar-arrow",attrs:{size:"small"}},[t("Button",{on:{click:e.curMonth}},[e._v(e._s(e.$L("\u4ECA\u5929")))])],1),t("ButtonGroup",{staticClass:"calendar-view"},[t("Button",{attrs:{type:e.calendarView=="day"?"primary":"default"},on:{click:function(s){return e.setView("day")}}},[e._v(e._s(e.$L("\u65E5")))]),t("Button",{attrs:{type:e.calendarView=="week"?"primary":"default"},on:{click:function(s){return e.setView("week")}}},[e._v(e._s(e.$L("\u5468")))]),t("Button",{attrs:{type:e.calendarView=="month"?"primary":"default"},on:{click:function(s){return e.setView("month")}}},[e._v(e._s(e.$L("\u6708")))])],1)],1)]),t("div",{staticClass:"calendar-box"},[t("Calendar",{ref:"cal",attrs:{view:e.calendarView,week:e.calendarWeek,month:e.calendarMonth,theme:e.calendarTheme,template:e.calendarTemplate,schedules:e.list,taskView:!1,useCreationPopup:!1,"disable-click":""},on:{beforeCreateSchedule:e.onBeforeCreateSchedule,beforeClickSchedule:e.onBeforeClickSchedule,beforeUpdateSchedule:e.onBeforeUpdateSchedule}})],1),t("div",{staticClass:"calendar-menu",style:e.calendarMenuStyles},[t("TaskMenu",{ref:"calendarTaskMenu",attrs:{task:e.calendarTask,updateBefore:""}})],1)],1)},D=[];const I={components:{TaskMenu:k,Calendar:b},data(){return{lists:[],rangeText:"Calendar",rangeTime:[],calendarView:"month",calendarWeek:{},calendarMonth:{},calendarTheme:{},calendarTemplate:{},calendarTask:{},calendarMenuStyles:{top:0,left:0},loadIng:0,loadTimeout:null}},created(){$([{key:"{\u65E5}",zh:"\u65E5",general:"Sun"},{key:"{\u4E00}",zh:"\u4E00",general:"Mon"},{key:"{\u4E8C}",zh:"\u4E8C",general:"Tue"},{key:"{\u4E09}",zh:"\u4E09",general:"Wed"},{key:"{\u56DB}",zh:"\u56DB",general:"Thu"},{key:"{\u4E94}",zh:"\u4E94",general:"Fri"},{key:"{\u516D}",zh:"\u516D",general:"Sat"}]);let e=[this.$L("{\u65E5}"),this.$L("{\u4E00}"),this.$L("{\u4E8C}"),this.$L("{\u4E09}"),this.$L("{\u56DB}"),this.$L("{\u4E94}"),this.$L("{\u516D}")];this.calendarWeek={daynames:e},this.calendarMonth={daynames:e},this.calendarTheme={"common.border":"1px solid rgba(0,0,0,0)","month.dayname.fontSize":"14px","month.dayname.borderLeft":"1px solid rgba(0,0,0,0)","month.dayname.height":"50px"},this.windowLandscape&&(this.calendarTheme={"common.border":"1px solid #f4f5f5","month.dayname.fontSize":"14px","month.dayname.borderLeft":"1px solid #f4f5f5","month.dayname.height":"50px"}),this.calendarTemplate={titlePlaceholder:()=>this.$L("\u4EFB\u52A1\u63CF\u8FF0"),popupSave:()=>this.$L("\u4FDD\u5B58"),popupEdit:()=>this.$L("\u8BE6\u60C5"),popupDelete:()=>this.$L("\u5220\u9664")}},activated(){this.$refs.cal.resetRender(),this.setRenderRange()},deactivated(){this.$store.dispatch("forgetTaskCompleteTemp",!0)},computed:{...m(["cacheTasks","taskCompleteTemps","wsOpenNum","themeName"]),...f(["transforTasks"]),list(){const{cacheTasks:e,taskCompleteTemps:a}=this,t=(r,i=!0)=>r.archived_at||r.complete_at&&i===!0||!r.end_at?!1:r.owner==1;let s=e.filter(r=>t(r));if(a.length>0){let r=e.filter(i=>a.includes(i.id)&&t(i,!1));r.length>0&&(s=$A.cloneJSON(s),s.push(...r))}return this.transforTasks(s).map(r=>{const i=$A.rightExists(r.start_at,"00:00:00")&&$A.rightExists(r.end_at,"23:59:59"),n={id:r.id,calendarId:String(r.project_id),title:r.name,body:r.desc,isAllDay:i,category:i?"allday":"time",start:$A.Date(r.start_at).toISOString(),end:$A.Date(r.end_at).toISOString(),color:"#515a6e",bgColor:r.color||"#E3EAFD",borderColor:r.p_color,priority:"",preventClick:!0,preventCheckHide:!0,isChecked:!!r.complete_at,complete_at:r.complete_at,start_at:r.start_at,end_at:r.end_at,_time:r._time};if(r.p_name){let l=`background-color:${r.p_color}`;this.themeName==="dark"&&(l=`color:${r.p_color};border:1px solid ${r.p_color};padding:1px 3px;`),n.priority=`<span class="priority" style="${l}">${r.p_name}</span>`}return r.sub_my&&r.sub_my.length>0&&(n.title=`[+${r.sub_my.length}] ${n.title}`),r.sub_top===!0&&(n.title=`[${this.$L("\u5B50\u4EFB\u52A1")}] ${n.title}`),r.flow_item_name&&(n.title=`[${r.flow_item_name}] ${n.title}`),r.complete_at?(n.color="#c3c2c2",n.bgColor="#f3f3f3",n.borderColor="#e3e3e3"):r.overdue&&(n.title=`[${this.$L("\u8D85\u671F")}] ${n.title}`,n.color="#f56c6c",n.bgColor=r.color||"#fef0f0",n.priority+=`<span class="overdue">${this.$L("\u8D85\u671F\u672A\u5B8C\u6210")}</span>`),n.borderColor||(n.borderColor=n.bgColor),n})}},watch:{rangeTime(e){this.getTask(e)},wsOpenNum(e){e<=1||(this.wsOpenTimeout&&clearTimeout(this.wsOpenTimeout),this.wsOpenTimeout=setTimeout(()=>{this.$route.name=="manage-calendar"&&this.setRenderRange()},5e3))}},methods:{getTask(e){if(this.loadIng>0){clearTimeout(this.loadTimeout),this.loadTimeout=setTimeout(()=>{this.getTask(e)},100);return}this.loadIng++,this.$store.dispatch("getTasks",{time:e}).finally(a=>{this.loadIng--})},preMonth(){this.$refs.cal.getInstance().prev(),this.setRenderRange()},curMonth(){this.$refs.cal.getInstance().today(),this.setRenderRange()},afterMonth(){this.$refs.cal.getInstance().next(),this.setRenderRange()},setView(e){this.calendarView=e,this.setRenderRange()},setRenderRange(){this.$nextTick(()=>{const e=this.$refs.cal.getInstance();let a=e.getOptions(),t=e.getViewName(),s=[];t==="day"?s.push(this.currentCalendarDate("YYYY.MM.DD")):t==="month"&&(!a.month.visibleWeeksCount||a.month.visibleWeeksCount>4)?s.push(this.currentCalendarDate("YYYY.MM")):(s.push(o(e.getDateRangeStart().getTime()).format("YYYY.MM.DD")),s.push(" ~ "),s.push(o(e.getDateRangeEnd().getTime()).format(" MM.DD"))),this.rangeText=s.join(""),this.rangeTime=[o(e.getDateRangeStart().getTime()).format("YYYY-MM-DD"),o(e.getDateRangeEnd().getTime()).format("YYYY-MM-DD")]})},currentCalendarDate(e){const a=this.$refs.cal.getInstance();return o([a.getDate().getFullYear(),a.getDate().getMonth(),a.getDate().getDate()]).format(e)},onBeforeCreateSchedule({start:e,end:a,isAllDay:t,guide:s}){t||this.calendarView=="month"?(e=$A.date2string(e.toDate(),"Y-m-d 00:00:00"),a=$A.date2string(a.toDate(),"Y-m-d 23:59:59")):(e=$A.date2string(e.toDate(),"Y-m-d H:i:s"),a=$A.date2string(a.toDate(),"Y-m-d H:i:s")),y.Store.set("addTask",{times:[e,a],owner:[this.userId],beforeClose:()=>s.clearGuideElement()})},onBeforeClickSchedule(e){const{type:a,schedule:t}=e;let s=this.cacheTasks.find(({id:r})=>r===t.id);if(!!s)switch(a){case"check":this.calendarMenuStyles={left:`${this.getElementLeft(e.target)}px`,top:`${this.getElementTop(e.target)-8}px`},this.calendarTask=s,this.$nextTick(this.$refs.calendarTaskMenu.show);break;case"edit":this.$store.dispatch("openTask",s);break;case"delete":$A.modalConfirm({title:"\u5220\u9664\u4EFB\u52A1",content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u4EFB\u52A1\u3010"+s.name+"\u3011\u5417\uFF1F",loading:!0,onOk:()=>new Promise((r,i)=>{this.$store.dispatch("removeTask",{task_id:s.id}).then(({msg:n})=>{r(n)}).catch(({msg:n})=>{i(n),this.setRenderRange()})})});break}},onBeforeUpdateSchedule(e){var r,i,n,l;const{changes:a,schedule:t}=e;let s=this.cacheTasks.find(({id:d})=>d===t.id);!s||((r=a==null?void 0:a.start)==null?void 0:r.getTime())==((i=t==null?void 0:t.start)==null?void 0:i.getTime())&&((n=a==null?void 0:a.end)==null?void 0:n.getTime())==((l=t==null?void 0:t.end)==null?void 0:l.getTime())||((a==null?void 0:a.start)||(a==null?void 0:a.end))&&(this.$refs.cal.getInstance().updateSchedule(t.id,t.calendarId,a),this.$store.dispatch("taskUpdate",{task_id:s.id,times:[(a.start||t.start).toDate(),(a.end||t.end).toDate()]}).then(({msg:c})=>{$A.messageSuccess(c)}).catch(({msg:c})=>{$A.modalError(c),this.setRenderRange()}))},getElementLeft(e){let a=e.offsetLeft,t=e.offsetParent;for(;t!==null&&t!=this.$el;)a+=t.offsetLeft+t.clientLeft,t=t.offsetParent;return a},getElementTop(e){let a=e.offsetTop,t=e.offsetParent;for(;t!==null&&t!=this.$el;)a+=t.offsetTop+t.clientTop,t=t.offsetParent;return a}}},u={};var R=p(I,S,D,!1,L,null,null,null);function L(e){for(let a in u)this[a]=u[a]}var $e=function(){return R.exports}();export{$e as default};
