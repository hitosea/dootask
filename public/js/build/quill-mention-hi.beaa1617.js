import{Q as p}from"./quill-hi.c85eceed.js";function T(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),t.push.apply(t,n)}return t}function O(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?T(Object(t),!0).forEach(function(n){w(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function C(i){return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(i)}function S(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function L(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,H(n.key),n)}}function N(i,e,t){return e&&L(i.prototype,e),t&&L(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function w(i,e,t){return e=H(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function x(){return x=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},x.apply(this,arguments)}function _(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&E(i,e)}function v(i){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(i)}function E(i,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},E(i,e)}function A(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function k(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function B(i,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return k(i)}function D(i){var e=A();return function(){var n=v(i),o;if(e){var s=v(this).constructor;o=Reflect.construct(n,arguments,s)}else o=n.apply(this,arguments);return B(this,o)}}function R(i,e){for(;!Object.prototype.hasOwnProperty.call(i,e)&&(i=v(i),i!==null););return i}function y(){return typeof Reflect!="undefined"&&Reflect.get?y=Reflect.get.bind():y=function(e,t,n){var o=R(e,t);if(!!o){var s=Object.getOwnPropertyDescriptor(o,t);return s.get?s.get.call(arguments.length<3?e:n):s.value}},y.apply(this,arguments)}function j(i,e){if(!!i){if(typeof i=="string")return M(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return M(i,e)}}function M(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function q(i,e){var t=typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(!t){if(Array.isArray(i)||(t=j(i))||e&&i&&typeof i.length=="number"){t&&(i=t);var n=0,o=function(){};return{s:o,n:function(){return n>=i.length?{done:!0}:{done:!1,value:i[n++]}},e:function(l){throw l},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,r=!1,a;return{s:function(){t=t.call(i)},n:function(){var l=t.next();return s=l.done,l},e:function(l){r=!0,a=l},f:function(){try{!s&&t.return!=null&&t.return()}finally{if(r)throw a}}}}function V(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function H(i){var e=V(i,"string");return typeof e=="symbol"?e:String(e)}var d={TAB:"Tab",ENTER:"Enter",ESCAPE:"Escape",UP:"ArrowUp",DOWN:"ArrowDown"};function Q(i,e,t){var n=i;return Object.keys(e).forEach(function(o){t.indexOf(o)>-1?n.dataset[o]=e[o]:delete n.dataset[o]}),n}function P(i,e){e!==null&&(C(e)==="object"?i.appendChild(e):i.innerHTML=e)}function W(i,e,t,n){return e.reduce(function(o,s){var r;if(t&&n){var a=new RegExp("^".concat(s,"|\\s").concat(s),"g"),l=(i.match(a)||[]).pop();if(!l)return{mentionChar:o.mentionChar,mentionCharIndex:o.mentionCharIndex};r=l!==s?i.lastIndexOf(l)+l.length-s.length:0}else r=i.lastIndexOf(s);return r>o.mentionCharIndex?{mentionChar:s,mentionCharIndex:r}:{mentionChar:o.mentionChar,mentionCharIndex:o.mentionCharIndex}},{mentionChar:null,mentionCharIndex:-1})}function U(i,e){return e.test(i)}function K(i,e,t,n){if(i===-1)return!1;if(!t)return!0;var o=i?e[i-1]:n;return!o||!!o.match(/\s/)}function J(i){return C(i)!=="object"||i===null?i:JSON.parse(JSON.stringify(i))}var z=p.import("blots/embed"),I=function(i){_(t,i);var e=D(t);function t(n,o){var s;return S(this,t),s=e.call(this,n,o),w(k(s),"hoverHandler",void 0),w(k(s),"hoverHandler",void 0),s.clickHandler=null,s.hoverHandler=null,s.mounted=!1,s}return N(t,[{key:"update",value:function(o,s){var r=this;if(t.isAndroid()){var a=q(o),l;try{for(a.s();!(l=a.n()).done;){var f=l.value;if(!(f.type==="attributes"&&f.attributeName==="contenteditable")){setTimeout(function(){return r.remove()},0);return}}}catch(u){a.e(u)}finally{a.f()}}else o.forEach(function(u){if(u.type==="characterData"&&(u.target===r.leftGuard||u.target===r.rightGuard)){var h=r.restore(u.target);h&&(s.range=h)}})}},{key:"attach",value:function(){y(v(t.prototype),"attach",this).call(this),this.mounted||(this.mounted=!0,this.clickHandler=this.getClickHandler(),this.hoverHandler=this.getHoverHandler(),this.domNode.addEventListener("click",this.clickHandler,!1),this.domNode.addEventListener("mouseenter",this.hoverHandler,!1))}},{key:"detach",value:function(){y(v(t.prototype),"detach",this).call(this),this.mounted=!1,this.clickHandler&&(this.domNode.removeEventListener("click",this.clickHandler),this.clickHandler=null)}},{key:"getClickHandler",value:function(){var o=this;return function(s){var r=o.buildEvent("mention-clicked",s);window.dispatchEvent(r),s.preventDefault()}}},{key:"getHoverHandler",value:function(){var o=this;return function(s){var r=o.buildEvent("mention-hovered",s);window.dispatchEvent(r),s.preventDefault()}}},{key:"buildEvent",value:function(o,s){var r=new Event(o,{bubbles:!0,cancelable:!0});return r.value=x({},this.domNode.dataset),r.event=s,r}}],[{key:"create",value:function(o){var s=y(v(t),"create",this).call(this),r=document.createElement("span");if(r.className="ql-mention-denotation-char",r.innerHTML=o.denotationChar,s.appendChild(r),s.innerHTML+=o.value,t.isAndroid()){var a=document.createElement("span");a.innerHTML="&nbsp;",a.setAttribute("style","display: inline-block; height: 1px; width: 1px; overflow: hidden; "),s.appendChild(a)}return t.setDataValues(s,o)}},{key:"setDataValues",value:function(o,s){setTimeout(function(){t.isAndroid()?o.getElementsByTagName("span")[0].setAttribute("contenteditable","inherit"):t.isChrome()&&o.getElementsByTagName("span")[0].parentNode.setAttribute("contenteditable","false")},0);var r=o;return Object.keys(s).forEach(function(a){r.dataset[a]=s[a]}),r}},{key:"value",value:function(o){return o.dataset}},{key:"isAndroid",value:function(){var o=typeof window!="undefined"&&window.navigator.userAgent.toLowerCase();return o&&o.indexOf("android")>0}},{key:"isChrome",value:function(){var o=typeof window!="undefined"&&window.navigator.userAgent.toLowerCase();return o.match(/Chrome/i)+""=="chrome"}}]),t}(z);I.blotName="mention";I.tagName="span";I.className="mention";p.register("blots/mention",I);var G=function(){function i(e,t){var n=this;S(this,i),this.isOpen=!1,this.itemIndex=0,this.mentionCharPos=null,this.cursorPos=null,this.values=[],this.suspendMouseEnter=!1,this.existingSourceExecutionToken=null,this.quill=e,this.options={source:null,renderItem:function(r){var a=r.value;return"".concat(a)},renderLoading:function(){return null},onSelect:function(r,a){a(r)},mentionDenotationChars:["@"],showDenotationChar:!0,allowedChars:/^[a-zA-Z0-9_]*$/,minChars:0,maxChars:31,offsetTop:2,offsetLeft:0,isolateCharacter:!1,allowInlineMentionChar:!1,fixMentionsToQuill:!1,positioningStrategy:"normal",defaultMenuOrientation:"bottom",blotName:"mention",dataAttributes:["id","value","denotationChar","link","target","disabled"],linkTarget:"_blank",onOpen:function(){return!0},onBeforeClose:function(){return!0},onClose:function(){return!0},listItemClass:"ql-mention-list-item",mentionContainerClass:"ql-mention-list-container",mentionListClass:"ql-mention-list",spaceAfterInsert:!0,selectKeys:[d.ENTER]},x(this.options,t,{dataAttributes:Array.isArray(t.dataAttributes)?this.options.dataAttributes.concat(t.dataAttributes):this.options.dataAttributes});for(var o in this.options)typeof this.options[o]=="function"&&(this.options[o]=this.options[o].bind(this));this.mentionContainer=document.createElement("div"),this.mentionContainer.className=this.options.mentionContainerClass?this.options.mentionContainerClass:"",this.mentionContainer.style.cssText="display: none; position: absolute;",this.mentionContainer.onmousemove=this.onContainerMouseMove.bind(this),this.options.fixMentionsToQuill&&(this.mentionContainer.style.width="auto"),this.mentionList=document.createElement("ul"),this.mentionList.id="quill-mention-list",e.root.setAttribute("aria-owns","quill-mention-list"),this.mentionList.className=this.options.mentionListClass?this.options.mentionListClass:"",this.mentionContainer.appendChild(this.mentionList),e.on("text-change",this.onTextChange.bind(this)),e.on("selection-change",this.onSelectionChange.bind(this)),e.container.addEventListener("paste",function(){setTimeout(function(){var s=e.getSelection();n.onSelectionChange(s)})}),e.keyboard.addBinding({key:d.TAB},this.selectHandler.bind(this)),e.keyboard.bindings[d.TAB].unshift(e.keyboard.bindings[d.TAB].pop()),e.keyboard.addBinding({key:d.ENTER},this.selectHandler.bind(this)),e.keyboard.bindings[d.ENTER].unshift(e.keyboard.bindings[d.ENTER].pop()),e.keyboard.addBinding({key:d.ESCAPE},this.escapeHandler.bind(this)),e.keyboard.addBinding({key:d.UP},this.upHandler.bind(this)),e.keyboard.addBinding({key:d.DOWN},this.downHandler.bind(this))}return N(i,[{key:"selectHandler",value:function(){return this.isOpen&&!this.existingSourceExecutionToken?(this.selectItem(),!1):!0}},{key:"escapeHandler",value:function(){return this.isOpen?(this.existingSourceExecutionToken&&(this.existingSourceExecutionToken.abandoned=!0),this.hideMentionList(),!1):!0}},{key:"upHandler",value:function(){return this.isOpen&&!this.existingSourceExecutionToken?(this.prevItem(),!1):!0}},{key:"downHandler",value:function(){return this.isOpen&&!this.existingSourceExecutionToken?(this.nextItem(),!1):!0}},{key:"showMentionList",value:function(){this.options.positioningStrategy==="fixed"?document.body.appendChild(this.mentionContainer):this.quill.container.appendChild(this.mentionContainer),this.mentionContainer.style.visibility="hidden",this.mentionContainer.style.display="",this.mentionContainer.scrollTop=0,this.setMentionContainerPosition(),this.setIsOpen(!0)}},{key:"hideMentionList",value:function(){this.options.onBeforeClose(),this.mentionContainer.style.display="none",this.mentionContainer.remove(),this.setIsOpen(!1),this.quill.root.removeAttribute("aria-activedescendant")}},{key:"highlightItem",value:function(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,n=0;n<this.mentionList.childNodes.length;n+=1)this.mentionList.childNodes[n].classList.remove("selected");if(!(this.itemIndex===-1||this.mentionList.childNodes[this.itemIndex].dataset.disabled==="true")&&(this.mentionList.childNodes[this.itemIndex].classList.add("selected"),this.quill.root.setAttribute("aria-activedescendant",this.mentionList.childNodes[this.itemIndex].id),t)){var o=this.mentionList.childNodes[this.itemIndex].offsetHeight,s=this.mentionList.childNodes[this.itemIndex].offsetTop,r=this.mentionContainer.scrollTop,a=r+this.mentionContainer.offsetHeight;s<r?this.mentionContainer.scrollTop=s:s>a-o&&(this.mentionContainer.scrollTop+=s-a+o)}}},{key:"onContainerMouseMove",value:function(){this.suspendMouseEnter=!1}},{key:"selectItem",value:function(){var t=this;if(this.itemIndex!==-1){var n=this.mentionList.childNodes[this.itemIndex].dataset;n.disabled||(this.options.onSelect(n,function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return t.insertItem(o,s,r)}),this.hideMentionList())}}},{key:"insertItem",value:function(t,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=t;if(s!==null){var r=O(O({},this.options),o);r.showDenotationChar||(s.denotationChar="");var a;n?a=this.cursorPos:(a=this.mentionCharPos,this.quill.deleteText(this.mentionCharPos,this.cursorPos-this.mentionCharPos,p.sources.USER));var l=this.quill.insertEmbed(a,r.blotName,s,p.sources.USER);return r.spaceAfterInsert?(this.quill.insertText(a+1," ",p.sources.USER),this.quill.setSelection(a+2,p.sources.USER)):this.quill.setSelection(a+1,p.sources.USER),this.hideMentionList(),l}}},{key:"onItemMouseEnter",value:function(t){if(!this.suspendMouseEnter){var n=Number(t.target.dataset.index);!Number.isNaN(n)&&n!==this.itemIndex&&(this.itemIndex=n,this.highlightItem(!1))}}},{key:"onDisabledItemMouseEnter",value:function(t){this.suspendMouseEnter||(this.itemIndex=-1,this.highlightItem(!1))}},{key:"onItemClick",value:function(t){t.button===0&&(t.preventDefault(),t.stopImmediatePropagation(),this.itemIndex=t.currentTarget.dataset.index,this.highlightItem(),this.selectItem())}},{key:"onItemMouseDown",value:function(t){t.preventDefault(),t.stopImmediatePropagation()}},{key:"renderLoading",value:function(){var t=this.options.renderLoading();if(!!t){if(this.mentionContainer.getElementsByClassName("ql-mention-loading").length>0){this.showMentionList();return}this.mentionList.innerHTML="";var n=document.createElement("div");n.className="ql-mention-loading",P(n,this.options.renderLoading()),this.mentionContainer.append(n),this.showMentionList()}}},{key:"removeLoading",value:function(){var t=this.mentionContainer.getElementsByClassName("ql-mention-loading");t.length>0&&t[0].remove()}},{key:"renderList",value:function(t,n,o){if(n&&n.length>0){this.removeLoading(),this.values=n,this.mentionList.innerHTML="";for(var s=-1,r=0;r<n.length;r+=1){var a=document.createElement("li");a.id="quill-mention-item-"+r,a.className=this.options.listItemClass?this.options.listItemClass:"",n[r].disabled?(a.className+=" disabled",a.setAttribute("aria-hidden","true")):s===-1&&(s=r),a.dataset.index=r;var l=this.options.renderItem(n[r],o);P(a,l),n[r].disabled?a.onmouseenter=this.onDisabledItemMouseEnter.bind(this):(a.onmouseenter=this.onItemMouseEnter.bind(this),a.onmouseup=this.onItemClick.bind(this),a.onmousedown=this.onItemMouseDown.bind(this)),a.dataset.denotationChar=t,this.mentionList.appendChild(Q(a,n[r],this.options.dataAttributes))}this.itemIndex=s,this.highlightItem(),this.showMentionList()}else this.hideMentionList()}},{key:"nextItem",value:function(){var t=0,n;do{t++,n=(this.itemIndex+t)%this.values.length;var o=this.mentionList.childNodes[n].dataset.disabled==="true";if(t===this.values.length+1){n=-1;break}}while(o);this.itemIndex=n,this.suspendMouseEnter=!0,this.highlightItem()}},{key:"prevItem",value:function(){var t=0,n;do{t++,n=(this.itemIndex+this.values.length-t)%this.values.length;var o=this.mentionList.childNodes[n].dataset.disabled==="true";if(t===this.values.length+1){n=-1;break}}while(o);this.itemIndex=n,this.suspendMouseEnter=!0,this.highlightItem()}},{key:"containerBottomIsNotVisible",value:function(t,n){var o=t+this.mentionContainer.offsetHeight+n.top;return o>window.pageYOffset+window.innerHeight}},{key:"containerRightIsNotVisible",value:function(t,n){if(this.options.fixMentionsToQuill)return!1;var o=t+this.mentionContainer.offsetWidth+n.left,s=window.pageXOffset+document.documentElement.clientWidth;return o>s}},{key:"setIsOpen",value:function(t){this.isOpen!==t&&(t?this.options.onOpen():this.options.onClose(),this.isOpen=t)}},{key:"setMentionContainerPosition",value:function(){this.options.positioningStrategy==="fixed"?this.setMentionContainerPosition_Fixed():this.setMentionContainerPosition_Normal()}},{key:"setMentionContainerPosition_Normal",value:function(){var t=this,n=this.quill.container.getBoundingClientRect(),o=this.quill.getBounds(this.mentionCharPos),s=this.mentionContainer.offsetHeight,r=this.options.offsetTop,a=this.options.offsetLeft;if(this.options.fixMentionsToQuill){var l=0;this.mentionContainer.style.right="".concat(l,"px")}else a+=o.left;if(this.containerRightIsNotVisible(a,n)){var f=this.mentionContainer.offsetWidth+this.options.offsetLeft,u=n.width;a=u-f}if(this.options.defaultMenuOrientation==="top"){if(this.options.fixMentionsToQuill?r=-1*(s+this.options.offsetTop):r=o.top-(s+this.options.offsetTop),r+n.top<=0){var h=this.options.offsetTop;this.options.fixMentionsToQuill?h+=n.height:h+=o.bottom,r=h}}else if(this.options.fixMentionsToQuill?r+=n.height:r+=o.bottom,this.containerBottomIsNotVisible(r,n)){var m=this.options.offsetTop*-1;this.options.fixMentionsToQuill||(m+=o.top),r=m-s}r>=0?this.options.mentionContainerClass.split(" ").forEach(function(c){t.mentionContainer.classList.add("".concat(c,"-bottom")),t.mentionContainer.classList.remove("".concat(c,"-top"))}):this.options.mentionContainerClass.split(" ").forEach(function(c){t.mentionContainer.classList.add("".concat(c,"-top")),t.mentionContainer.classList.remove("".concat(c,"-bottom"))}),this.mentionContainer.style.top="".concat(r,"px"),this.mentionContainer.style.left="".concat(a,"px"),this.mentionContainer.style.visibility="visible"}},{key:"setMentionContainerPosition_Fixed",value:function(){var t=this;this.mentionContainer.style.position="fixed",this.mentionContainer.style.height=null;var n=J(this.quill.container.getBoundingClientRect());n.top+=window.scrollY;var o=this.quill.getBounds(this.mentionCharPos),s={left:n.left+o.left,top:n.top+o.top,width:0,height:o.height},r=this.options.fixMentionsToQuill?n:s,a=this.options.offsetTop,l=this.options.offsetLeft;if(this.options.fixMentionsToQuill){var f=r.right;this.mentionContainer.style.right="".concat(f,"px")}else l+=r.left,l+this.mentionContainer.offsetWidth>document.documentElement.clientWidth&&(l-=l+this.mentionContainer.offsetWidth-document.documentElement.clientWidth);var u=r.top,h=document.documentElement.clientHeight-(r.top+r.height),m=this.mentionContainer.offsetHeight<=h,c=this.mentionContainer.offsetHeight<=u,g;this.options.defaultMenuOrientation==="top"&&c?g="top":this.options.defaultMenuOrientation==="bottom"&&m?g="bottom":g=h>u?"bottom":"top",g==="bottom"?(a=r.top+r.height,m||(this.mentionContainer.style.height=h-3+"px"),this.options.mentionContainerClass.split(" ").forEach(function(b){t.mentionContainer.classList.add("".concat(b,"-bottom")),t.mentionContainer.classList.remove("".concat(b,"-top"))})):(a=r.top-this.mentionContainer.offsetHeight,c||(this.mentionContainer.style.height=u-3+"px",a=3),this.options.mentionContainerClass.split(" ").forEach(function(b){t.mentionContainer.classList.add("".concat(b,"-top")),t.mentionContainer.classList.remove("".concat(b,"-bottom"))})),this.mentionContainer.style.top="".concat(a,"px"),this.mentionContainer.style.left="".concat(l,"px"),this.mentionContainer.style.visibility="visible"}},{key:"getTextBeforeCursor",value:function(){var t=Math.max(0,this.cursorPos-this.options.maxChars),n=this.quill.getText(t,this.cursorPos-t);return n}},{key:"onSomethingChange",value:function(){var t=this,n=this.quill.getSelection();if(n!=null){this.cursorPos=n.index;var o=this.getTextBeforeCursor(),s=Math.max(0,this.cursorPos-this.options.maxChars),r=s?this.quill.getText(s-1,s):"",a=W(o,this.options.mentionDenotationChars,this.options.isolateCharacter,this.options.allowInlineMentionChar),l=a.mentionChar,f=a.mentionCharIndex;if(K(f,o,this.options.isolateCharacter,r)){var u=this.cursorPos-(o.length-f);this.mentionCharPos=u;var h=o.substring(f+l.length);if(h.length>=this.options.minChars&&U(h,this.getAllowedCharsRegex(l))){this.existingSourceExecutionToken&&(this.existingSourceExecutionToken.abandoned=!0),this.renderLoading();var m={abandoned:!1};this.existingSourceExecutionToken=m,this.options.source(h,function(c,g){m.abandoned||(t.existingSourceExecutionToken=null,t.renderList(l,c,g))},l)}else this.existingSourceExecutionToken&&(this.existingSourceExecutionToken.abandoned=!0),this.hideMentionList()}else this.existingSourceExecutionToken&&(this.existingSourceExecutionToken.abandoned=!0),this.hideMentionList()}}},{key:"getAllowedCharsRegex",value:function(t){return this.options.allowedChars instanceof RegExp?this.options.allowedChars:this.options.allowedChars(t)}},{key:"onTextChange",value:function(t,n,o){o==="user"&&setTimeout(this.onSomethingChange.bind(this),50)}},{key:"onSelectionChange",value:function(t){t&&t.length===0?this.onSomethingChange():this.hideMentionList()}},{key:"openMenu",value:function(t){var n=this.quill.getSelection(!0);this.quill.insertText(n.index,t),this.quill.blur(),this.quill.focus()}}]),i}();p.register("modules/mention",G);
