<<<<<<<< HEAD:public/js/build/@traptitech.1821eed0.js
import{k as m}from"./katex.2732e2fc.js";var $=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function x(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function _(r){if(r.__esModule)return r;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach(function(e){var l=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(n,e,l.get?l:{enumerable:!0,get:function(){return r[e]}})}),n}function y(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var d=m.exports;function k(r,n){var e,l,o=r.posMax,c=!0,i=!0;return e=n>0?r.src.charCodeAt(n-1):-1,l=n+1<=o?r.src.charCodeAt(n+1):-1,(e===32||e===9||l>=48&&l<=57)&&(i=!1),(l===32||l===9)&&(c=!1),{can_open:c,can_close:i}}function h(r,n){var e,l,o,c,i;if(r.src[r.pos]!=="$")return!1;if(c=k(r,r.pos),!c.can_open)return n||(r.pending+="$"),r.pos+=1,!0;for(e=r.pos+1,l=e;(l=r.src.indexOf("$",l))!==-1;){for(i=l-1;r.src[i]==="\\";)i-=1;if((l-i)%2==1)break;l+=1}return l===-1?(n||(r.pending+="$"),r.pos=e,!0):l-e===0?(n||(r.pending+="$$"),r.pos=e+1,!0):(c=k(r,l),c.can_close?(n||(o=r.push("math_inline","math",0),o.markup="$",o.content=r.src.slice(e,l)),r.pos=l+1,!0):(n||(r.pending+="$"),r.pos=e,!0))}function g(r,n,e,l){var o,c,i,a,u=!1,p,f=r.bMarks[n]+r.tShift[n],t=r.eMarks[n];if(f+2>t||r.src.slice(f,f+2)!=="$$")return!1;if(f+=2,o=r.src.slice(f,t),l)return!0;for(o.trim().slice(-2)==="$$"&&(o=o.trim().slice(0,-2),u=!0),i=n;!u&&(i++,!(i>=e||(f=r.bMarks[i]+r.tShift[i],t=r.eMarks[i],f<t&&r.tShift[i]<r.blkIndent)));)r.src.slice(f,t).trim().slice(-2)==="$$"&&(a=r.src.slice(0,t).lastIndexOf("$$"),c=r.src.slice(f,a),u=!0);return r.line=i+1,p=r.push("math_block","math",0),p.block=!0,p.content=(o&&o.trim()?o+`
========
import{k as m}from"./katex.0b94f27c.js";var $=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function x(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function _(r){if(r.__esModule)return r;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach(function(e){var l=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(n,e,l.get?l:{enumerable:!0,get:function(){return r[e]}})}),n}function y(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var d=m.exports;function k(r,n){var e,l,o=r.posMax,c=!0,i=!0;return e=n>0?r.src.charCodeAt(n-1):-1,l=n+1<=o?r.src.charCodeAt(n+1):-1,(e===32||e===9||l>=48&&l<=57)&&(i=!1),(l===32||l===9)&&(c=!1),{can_open:c,can_close:i}}function h(r,n){var e,l,o,c,i;if(r.src[r.pos]!=="$")return!1;if(c=k(r,r.pos),!c.can_open)return n||(r.pending+="$"),r.pos+=1,!0;for(e=r.pos+1,l=e;(l=r.src.indexOf("$",l))!==-1;){for(i=l-1;r.src[i]==="\\";)i-=1;if((l-i)%2==1)break;l+=1}return l===-1?(n||(r.pending+="$"),r.pos=e,!0):l-e===0?(n||(r.pending+="$$"),r.pos=e+1,!0):(c=k(r,l),c.can_close?(n||(o=r.push("math_inline","math",0),o.markup="$",o.content=r.src.slice(e,l)),r.pos=l+1,!0):(n||(r.pending+="$"),r.pos=e,!0))}function g(r,n,e,l){var o,c,i,a,u=!1,p,f=r.bMarks[n]+r.tShift[n],t=r.eMarks[n];if(f+2>t||r.src.slice(f,f+2)!=="$$")return!1;if(f+=2,o=r.src.slice(f,t),l)return!0;for(o.trim().slice(-2)==="$$"&&(o=o.trim().slice(0,-2),u=!0),i=n;!u&&(i++,!(i>=e||(f=r.bMarks[i]+r.tShift[i],t=r.eMarks[i],f<t&&r.tShift[i]<r.blkIndent)));)r.src.slice(f,t).trim().slice(-2)==="$$"&&(a=r.src.slice(0,t).lastIndexOf("$$"),c=r.src.slice(f,a),u=!0);return r.line=i+1,p=r.push("math_block","math",0),p.block=!0,p.content=(o&&o.trim()?o+`
>>>>>>>> pro:public/js/build/@traptitech.363dce05.js
`:"")+r.getLines(n+1,i,r.tShift[n],!0)+(c&&c.trim()?c:""),p.map=[n,r.line],p.markup="$$",!0}function s(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}var v=function(n,e){e=e||{},e.katex&&(d=e.katex),e.blockClass||(e.blockClass="");var l=function(a){e.displayMode=!1;try{return d.renderToString(a,e)}catch(u){return e.throwOnError&&console.log(u),`<span class='katex-error' title='${s(u.toString())}'>${s(a)}</span>`}},o=function(a,u){return l(a[u].content)},c=function(a){e.displayMode=!0;try{return`<p class="katex-block ${e.blockClass}">`+d.renderToString(a,e)+"</p>"}catch(u){return e.throwOnError&&console.log(u),`<p class='katex-block katex-error ${e.blockClass}' title='${s(u.toString())}'>${s(a)}</p>`}},i=function(a,u){return c(a[u].content)+`
`};n.inline.ruler.after("escape","math_inline",h),n.block.ruler.after("blockquote","math_block",g,{alt:["paragraph","reference","blockquote","list"]}),n.renderer.rules.math_inline=o,n.renderer.rules.math_block=i};export{y as a,x as b,$ as c,_ as g,v as m};
