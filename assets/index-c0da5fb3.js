(async()=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function ye(...e){let t=document.createElement("div");return t.classList.add(...e),t}Node.prototype.div=function(...e){let t=ye(...e);return this.append(t),t};async function J(e){let t=await fetch(e).then(n=>n.text());return new DOMParser().parseFromString(t,"text/html")}async function we(e){return fetch(e).then(t=>t.json())}function he(e,t,n){return Math.max(t,Math.min(n,e))}function O(e,t){return he(e,0,t-1)}function Q(e,t){return e>=0&&e<t}const ve="/PsiEdit/assets/controls-e7d3d7cb.html",V=["target","number","number1","number2","number3","number4","vector1","vector2","vector3","vector4","position","min","max","power","x","y","z","radius","distance","time","base","ray","vector","axis","angle","pitch","instrument","volume","list1","list2","list","direction","from1","from2","to1","to2","root","toggle","mask","channel","slot","ray_end","ray_start"];function L(e,t){j(e),e.element.append(t),e.piece=t}function j(e){e.piece&&(e.piece.remove(),e.piece=null)}function $(e){return e.cloneNode(!0)}function k(e,t,n=null,r=null){e.dataset.side=t,r&&w(r,n);let a=e.parentNode.querySelector(`.line[data-trigger='${e.dataset.key}']`);a&&(a.dataset.side=t)}function C(e){return e.dataset.side}function R(e){return e.dataset.optional!=null}function Y(e){return e.dataset.sortingName.toLowerCase()}let ee,te,ne,re;J(ve).then(e=>{ee=e.querySelector(".param-control"),re=e.querySelector(".related-control"),te=e.querySelector(".value-control"),ne=e.querySelector(".text-control")});function w(e,t){if(ke(e),!t.cell||!t.cell.piece)return;let n=t.cell.piece;if(e.element.style.setProperty("--piece-name",'"'+n.dataset.name+'"'),e.element.style.setProperty("--piece-desc",'"'+n.dataset.desc+'"'),n.querySelectorAll(".param").forEach(r=>{let a=ee.cloneNode(!0);a.style.setProperty("--param-name",'"'+r.dataset.name+'"'),r.dataset.color!=null&&(a.dataset.color=r.dataset.color),r.dataset.side!=null&&(a.dataset.side=r.dataset.side),r.dataset.optional!=null&&(a.dataset.optional=r.dataset.optional),a.querySelectorAll("[data-side]").forEach(o=>o.addEventListener("click",()=>{k(r,o.dataset.side,t,e)})),e.element.append(a),e.controls.push(a),e.params.push(r)}),n.dataset.key=="psi:constant_number"){let r=te.cloneNode(!0);r.style.setProperty("--param-name",'"Value"'),r.dataset.color="gray";let a=r.querySelector("[data-value]");a.value=n.querySelector("[data-value]").textContent,a.addEventListener("input",()=>{let o=n.querySelector("[data-value]");o.textContent=a.value=a.value.substring(0,5),o.style.setProperty("--scale-value",[1,1,.8,.7,.6,.5][a.value.length-1])}),e.element.append(r),e.controls.push(r)}{let r=ne.cloneNode(!0);r.style.setProperty("--param-name",'"Comment"'),r.dataset.color="gray";let a=r.querySelector("[data-value]");a.value=(n.dataset.comment||"").replaceAll(";",`
`),a.addEventListener("input",()=>n.dataset.comment=a.value.replaceAll(`
`,";")),e.element.append(r),e.controls.push(r),e.comment=a}if(n.dataset.related)for(let r of n.dataset.related.split(" ")){let a=re.cloneNode(!0);a.style.setProperty("--param-name",'"'+r.substring(0,r.indexOf("="))+'"'),a.dataset.color="gray";let o=a.querySelector("[data-pieces]");for(let s of r.substring(r.indexOf("=")+1).split(",")){let i=o.div("catalog-item"),l=s.includes(":")?s:n.dataset.key.substring(0,n.dataset.key.indexOf(":"))+":"+s;i.append(S[l].cloneNode(!0)),i.addEventListener("click",()=>{L(t.cell,$(S[l])),w(e,t)})}e.element.append(a),e.controls.push(a)}}function ke(e){e.element.style.removeProperty("--piece-name"),e.element.style.removeProperty("--piece-desc"),e.controls.forEach(t=>t.remove()),e.controls=[],e.params=[],e.values=[],e.comment=null}async function xe(e){let t={},n,r,a;if(e.querySelectorAll("meta").forEach(o=>{n=n||o.dataset.repo,r=r||o.dataset.namespace}),!n||!r)return console.error("Missing metadata in piece list"),t;e.querySelectorAll("[data-icon]").forEach(o=>{o.style.setProperty("--icon",`url('https://raw.githubusercontent.com/${n}/master/src/main/resources/assets/${r}/textures/spell/${o.dataset.icon}.png')`)});try{a=await we(`https://raw.githubusercontent.com/${n}/master/src/main/resources/assets/${r}/lang/en_us.json`)}catch{}return a=a||{},e.querySelectorAll(".piece").forEach(o=>{n&&r&&o.style.setProperty("--piece-icon",`url('https://raw.githubusercontent.com/${n}/master/src/main/resources/assets/${r}/textures/spell/${o.dataset.icon||o.dataset.type}.png')`),o.dataset.name=o.dataset.name||a[`${r}.spellpiece.${o.dataset.type}`]||`${r}.spellpiece.${o.dataset.type}`,o.dataset.desc=o.dataset.desc||a[`${r}.spellpiece.${o.dataset.type}.desc`]||`${r}.spellpiece.${o.dataset.type}.desc`,o.dataset.key=o.dataset.key||`${r}:${o.dataset.type}`,o.dataset.sortingName=o.dataset.sortingName||o.dataset.name,o.dataset.tooltip=o.dataset.name+`
`+o.dataset.desc,t[o.dataset.key]=o}),t}function Se(e,t=!1){if(t){let o=[],s=new TextEncoder().encode(e.dataset.key);if(s.length>255)throw new Error("Key too long");o.push(new Uint8Array([s.length&255])),o.push(s);let i=new TextEncoder().encode(e.dataset.comment||"");if(i.length>65535)throw new Error("Comment too long");o.push(new Uint8Array([i.length&255,i.length>>8&255])),o.push(i);let l={};if(e.querySelectorAll(".param").forEach(g=>{g.dataset.side!="off"&&(l[g.dataset.key]=ae(g.dataset.side))}),Object.keys(l).length>255)throw new Error("Too many params");o.push(new Uint8Array([Object.keys(l).length&255]));for(let g in l){if(g.startsWith("_")&&V.includes(g.substring(1)))o.push(new Uint8Array([255,V.indexOf(g.substring(1))]));else{let E=new TextEncoder().encode(g);if(g.length>254)throw new Error("Param key too long");o.push(new Uint8Array([E.length&255])),o.push(E)}o.push(new Uint8Array([l[g]&255]))}if(e.dataset.key=="psi:constant_number"){let g=e.querySelector("[data-value]").textContent,E=new TextEncoder().encode(g);o.push(new Uint8Array([E.length&255])),o.push(E)}let f=new Uint8Array(o.map(g=>g.length).reduce((g,E)=>g+E)),v=0;for(let g of o)f.set(g,v),v+=g.length;return f}let n={},r=!1;e.querySelectorAll(".param").forEach(o=>{n[o.dataset.key]=ae(o.dataset.side),r=!0});let a={key:e.dataset.key};return e.dataset.comment!=""&&(a.comment=e.dataset.comment),r&&(a.params=n),e.dataset.key=="psi:constant_number"&&(a.constantValue=e.querySelector("[data-value]").textContent),a}function oe(e){if(e instanceof Uint8Array){let n=0,r=e[n++],a=new TextDecoder().decode(e.slice(n,n+r)),o=$(S[a]);n+=r;let s=e[n++]|e[n++]<<8;o.dataset.comment=new TextDecoder().decode(e.slice(n,n+s)),n+=s;let i=e[n++];for(let l=0;l<i;l++){let f=e[n++],v;f==255?v="_"+V[e[n++]]:(v=new TextDecoder().decode(e.slice(n,n+f)),n+=f);let g=e[n++];k(o.querySelector(`.param[data-key="${v}"]`),se(g))}if(a=="psi:constant_number"){let l=e[n++],f=new TextDecoder().decode(e.slice(n,n+l));n+=l;let v=o.querySelector("[data-value]");v.textContent=f,v.style.setProperty("--scale-value",[1,1,.8,.7,.6,.5][f.length-1])}return o}let t=$(S[e.key]);if(e.params)for(const[n,r]of Object.entries(e.params))k(t.querySelector(`.param[data-key="${n}"]`),se(r));if(e.comment&&(t.dataset.comment=e.comment),e.constantValue){let n=t.querySelector("[data-value]");n.textContent=e.constantValue,n.style.setProperty("--scale-value",[1,1,.8,.7,.6,.5][e.constantValue.length-1])}return t}function ae(e){return{off:0,top:1,bottom:2,left:3,right:4}[e||"off"]}function se(e){return["off","top","bottom","left","right"][e]}function Ee(e){return{left:"right",right:"left",top:"bottom",bottom:"top",off:"off"}[e]}function Ae(e,t,n=null){if(!t.cell||!t.cell.piece)return!1;let r=t.cell.piece;if(r.dataset.key=="psi:constant_number"){if("FDfd".includes(e))return!1;let a=r.querySelector("[data-value]"),o=a.textContent;if(e=="Backspace")o.startsWith(".")?o="0"+o:o.startsWith("-.")&&(o="-0"+o.substring(1)),o=="-0"?o="0":o.startsWith("-")&&o.length==2?o="-0":o=o.substring(0,o.length-1).trim();else if((o=="0"||o=="-0")&&e!="-"&&e!="+"&&(o=o.replace("0","")),e=="+"?o.startsWith("-")&&(o=o.substring(1)):e=="-"?o.startsWith("-")||(o="-"+o):o=(o+e).trim(),o.length>5?o.startsWith("0.")?o=o.substring(1):o.startsWith("-0.")&&(o="-"+o.substring(2)):o.startsWith(".")?o="0"+o:o.startsWith("-.")&&(o="-0"+o.substring(1)),o.length>5)return!1;return o==""&&(o="0"),isNaN(parseFloat(o))?!1:(a.textContent=o,a.style.setProperty("--scale-value",[1,1,.8,.7,.6,.5][o.length-1]),n&&w(n,t),!0)}return!1}let ie="PsiEdit",le=[];function qe(e,t,n,r=null,a=null){let o=[];for(let s=0;s<t;s++){o[s]=[];for(let i=0;i<n;i++)o[s][i]=Le(e,o,s,i,r,a)}return o.width=t,o.height=n,o}function Le(e,t,n,r,a=null,o=null){let s={element:e.div("cell"),piece:null};return a&&(s.element.addEventListener("mousedown",i=>{i.button==0?W(t,o,n,r,a):i.button==2&&(j(s),w(a,o))}),["top","bottom"].forEach(i=>["left","right"].forEach(l=>s.element.div("selection",i,l)))),s}function W(e,t,n,r,a=null){t.x==n&&t.y==r||(t.cell&&t.cell.element.classList.remove("selected"),t.x=n,t.y=r,t.cell=e[n][r],t.cell.element.classList.add("selected"),a&&w(a,t))}function ce(e,t=!1){let n=[],r=new Uint8Array(Math.ceil(e.width*e.height/8)),a=0,o=0;for(let s=0;s<e.width;s++)for(let i=0;i<e.height;i++){if(a=a<<1&255,e[s][i].piece){a|=1;let l=Se(e[s][i].piece,t);if(t){if(l.length>65535)throw new Error("Piece data too large");n.push(new Uint8Array([l.length>>0&255,l.length>>8&255])),n.push(l)}else n.push({x:s,y:i,data:l})}++o%8==0&&r.set([a],o/8-1)}if(o%8!=0&&r.set([a],o/8),t){let s=new Uint8Array(r.length+n.map(l=>l.length).reduce((l,f)=>l+f));s.set(r,0);let i=r.length;for(let l of n)s.set(l,i),i+=l.length;return s}else return{modsRequired:le,validSpell:!0,spellName:ie,spellList:n}}function K(e,t){for(let n=0;n<t.width;n++)for(let r=0;r<t.height;r++)j(t[n][r]);if(e instanceof Uint8Array){let n=e.subarray(0,Math.ceil(t.width*t.height/8)),r=0,a=n.length;for(let o=0;o<t.width;o++)for(let s=0;s<t.height;s++){if(n[Math.floor(r/8)]>>7-r%8&1){let i=e[a+0]<<0|e[a+1]<<8,l=oe(e.subarray(a+2,a+i+2));L(t[o][s],l),a+=i+2}r++}}else{le=e.modsRequired,ie=e.spellName;for(let n of e.spellList)L(t[n.x][n.y],oe(n.data))}}let u;const h=new Array(128).fill(void 0);h.push(void 0,null,!0,!1);function c(e){return h[e]}let P=h.length;function $e(e){e<132||(h[e]=P,P=e)}function y(e){const t=c(e);return $e(e),t}const ue=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&ue.decode();let T=null;function D(){return(T===null||T.byteLength===0)&&(T=new Uint8Array(u.memory.buffer)),T}function A(e,t){return e=e>>>0,ue.decode(D().subarray(e,e+t))}function _(e){P===h.length&&h.push(h.length+1);const t=P;return P=h[t],h[t]=e,t}let x=0;const I=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},Pe=typeof I.encodeInto=="function"?function(e,t){return I.encodeInto(e,t)}:function(e,t){const n=I.encode(e);return t.set(n),{read:e.length,written:n.length}};function q(e,t,n){if(n===void 0){const i=I.encode(e),l=t(i.length)>>>0;return D().subarray(l,l+i.length).set(i),x=i.length,l}let r=e.length,a=t(r)>>>0;const o=D();let s=0;for(;s<r;s++){const i=e.charCodeAt(s);if(i>127)break;o[a+s]=i}if(s!==r){s!==0&&(e=e.slice(s)),a=n(a,r,r=s+e.length*3)>>>0;const i=D().subarray(a+s,a+r),l=Pe(e,i);s+=l.written}return x=s,a}function Z(e){return e==null}let N=null;function d(){return(N===null||N.byteLength===0)&&(N=new Int32Array(u.memory.buffer)),N}let U=null;function Te(){return(U===null||U.byteLength===0)&&(U=new Float64Array(u.memory.buffer)),U}function z(e){const t=typeof e;if(t=="number"||t=="boolean"||e==null)return`${e}`;if(t=="string")return`"${e}"`;if(t=="symbol"){const a=e.description;return a==null?"Symbol":`Symbol(${a})`}if(t=="function"){const a=e.name;return typeof a=="string"&&a.length>0?`Function(${a})`:"Function"}if(Array.isArray(e)){const a=e.length;let o="[";a>0&&(o+=z(e[0]));for(let s=1;s<a;s++)o+=", "+z(e[s]);return o+="]",o}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(n.length>1)r=n[1];else return toString.call(e);if(r=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:r}function G(e,t){try{return e.apply(this,t)}catch(n){u.__wbindgen_export_3(_(n))}}function de(e){try{const a=u.__wbindgen_add_to_stack_pointer(-16),o=q(e,u.__wbindgen_export_0,u.__wbindgen_export_1),s=x;u.snbtToSpell(a,o,s);var t=d()[a/4+0],n=d()[a/4+1],r=d()[a/4+2];if(r)throw y(n);return y(t)}finally{u.__wbindgen_add_to_stack_pointer(16)}}function Ne(e){try{const a=u.__wbindgen_add_to_stack_pointer(-16),o=q(e,u.__wbindgen_export_0,u.__wbindgen_export_1),s=x;u.urlSafeToSpell(a,o,s);var t=d()[a/4+0],n=d()[a/4+1],r=d()[a/4+2];if(r)throw y(n);return y(t)}finally{u.__wbindgen_add_to_stack_pointer(16)}}function Ue(e){let t,n;try{const f=u.__wbindgen_add_to_stack_pointer(-16);u.spellToUrlSafe(f,_(e));var r=d()[f/4+0],a=d()[f/4+1],o=d()[f/4+2],s=d()[f/4+3],i=r,l=a;if(s)throw i=0,l=0,y(o);return t=i,n=l,A(i,l)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export_2(t,n)}}function Oe(e){let t,n;try{const f=u.__wbindgen_add_to_stack_pointer(-16);u.spellToSnbt(f,_(e));var r=d()[f/4+0],a=d()[f/4+1],o=d()[f/4+2],s=d()[f/4+3],i=r,l=a;if(s)throw i=0,l=0,y(o);return t=i,n=l,A(i,l)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_export_2(t,n)}}async function je(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(r){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}else{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}function Ce(){const e={};return e.wbg={},e.wbg.__wbg_new_abda76e883ba8a5f=function(){const t=new Error;return _(t)},e.wbg.__wbg_stack_658279fe44541cf6=function(t,n){const r=c(n).stack,a=q(r,u.__wbindgen_export_0,u.__wbindgen_export_1),o=x;d()[t/4+1]=o,d()[t/4+0]=a},e.wbg.__wbg_error_f851667af71bcfc6=function(t,n){let r,a;try{r=t,a=n,console.error(A(t,n))}finally{u.__wbindgen_export_2(r,a)}},e.wbg.__wbindgen_object_drop_ref=function(t){y(t)},e.wbg.__wbg_get_e52aaca45f37b337=function(t,n){const r=c(t)[n>>>0];return _(r)},e.wbg.__wbg_length_070e3265c186df02=function(t){return c(t).length},e.wbg.__wbg_next_5a9700550e162aa3=function(){return G(function(t){const n=c(t).next();return _(n)},arguments)},e.wbg.__wbg_done_a184612220756243=function(t){return c(t).done},e.wbg.__wbg_value_6cc144c1d9645dd5=function(t){const n=c(t).value;return _(n)},e.wbg.__wbg_iterator_c1677479667ea090=function(){return _(Symbol.iterator)},e.wbg.__wbg_get_363c3b466fe4896b=function(){return G(function(t,n){const r=Reflect.get(c(t),c(n));return _(r)},arguments)},e.wbg.__wbindgen_is_function=function(t){return typeof c(t)=="function"},e.wbg.__wbg_call_f96b398515635514=function(){return G(function(t,n){const r=c(t).call(c(n));return _(r)},arguments)},e.wbg.__wbindgen_is_object=function(t){const n=c(t);return typeof n=="object"&&n!==null},e.wbg.__wbg_next_3975dcca26737a22=function(t){const n=c(t).next;return _(n)},e.wbg.__wbindgen_string_new=function(t,n){const r=A(t,n);return _(r)},e.wbg.__wbg_new_18bc2084e9a3e1ff=function(){const t=new Array;return _(t)},e.wbg.__wbg_set_aee8682c7ee9ac44=function(t,n,r){c(t)[n>>>0]=y(r)},e.wbg.__wbg_isArray_07d89ced8fb14171=function(t){return Array.isArray(c(t))},e.wbg.__wbg_instanceof_ArrayBuffer_de688b806c28ff28=function(t){let n;try{n=c(t)instanceof ArrayBuffer}catch{n=!1}return n},e.wbg.__wbg_isSafeInteger_fcdf4c4f25c86778=function(t){return Number.isSafeInteger(c(t))},e.wbg.__wbg_entries_c3e06bf0354f5d20=function(t){const n=Object.entries(c(t));return _(n)},e.wbg.__wbg_new_7befa02319b36069=function(){const t=new Object;return _(t)},e.wbg.__wbg_length_d9c4ded7e708c6a1=function(t){return c(t).length},e.wbg.__wbindgen_memory=function(){const t=u.memory;return _(t)},e.wbg.__wbg_buffer_fcbfb6d88b2732e9=function(t){const n=c(t).buffer;return _(n)},e.wbg.__wbg_new_bc5d9aad3f9ac80e=function(t){const n=new Uint8Array(c(t));return _(n)},e.wbg.__wbg_set_4b3aa8445ac1e91c=function(t,n,r){c(t).set(c(n),r>>>0)},e.wbg.__wbg_instanceof_Uint8Array_4733577ba827276b=function(t){let n;try{n=c(t)instanceof Uint8Array}catch{n=!1}return n},e.wbg.__wbindgen_error_new=function(t,n){const r=new Error(A(t,n));return _(r)},e.wbg.__wbg_String_88810dfeb4021902=function(t,n){const r=String(c(n)),a=q(r,u.__wbindgen_export_0,u.__wbindgen_export_1),o=x;d()[t/4+1]=o,d()[t/4+0]=a},e.wbg.__wbg_getwithrefkey_5e6d9547403deab8=function(t,n){const r=c(t)[c(n)];return _(r)},e.wbg.__wbindgen_is_undefined=function(t){return c(t)===void 0},e.wbg.__wbindgen_in=function(t,n){return c(t)in c(n)},e.wbg.__wbindgen_string_get=function(t,n){const r=c(n),a=typeof r=="string"?r:void 0;var o=Z(a)?0:q(a,u.__wbindgen_export_0,u.__wbindgen_export_1),s=x;d()[t/4+1]=s,d()[t/4+0]=o},e.wbg.__wbindgen_number_get=function(t,n){const r=c(n),a=typeof r=="number"?r:void 0;Te()[t/8+1]=Z(a)?0:a,d()[t/4+0]=!Z(a)},e.wbg.__wbindgen_jsval_loose_eq=function(t,n){return c(t)==c(n)},e.wbg.__wbg_set_841ac57cff3d672b=function(t,n,r){c(t)[y(n)]=y(r)},e.wbg.__wbindgen_number_new=function(t){return _(t)},e.wbg.__wbindgen_is_string=function(t){return typeof c(t)=="string"},e.wbg.__wbindgen_boolean_get=function(t){const n=c(t);return typeof n=="boolean"?n?1:0:2},e.wbg.__wbindgen_object_clone_ref=function(t){const n=c(t);return _(n)},e.wbg.__wbindgen_debug_string=function(t,n){const r=z(c(n)),a=q(r,u.__wbindgen_export_0,u.__wbindgen_export_1),o=x;d()[t/4+1]=o,d()[t/4+0]=a},e.wbg.__wbindgen_throw=function(t,n){throw new Error(A(t,n))},e}function Re(e,t){return u=e.exports,fe.__wbindgen_wasm_module=t,U=null,N=null,T=null,u.__wbindgen_start(),u}async function fe(e){if(u!==void 0)return u;typeof e>"u"&&(e=new URL("/PsiEdit/assets/psi_spell_encode_wasm_bg-bf0be7e6.wasm",self.location));const t=Ce();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await je(await e,t);return Re(n,r)}function We(){let e=new URLSearchParams(location.search);if(e.has("cursor")){let[t,n]=e.get("cursor").split(/-?/).map(r=>parseInt(r)-1);W(m,p,O(t,M),O(n,B))}if(e.has("spell")){let t=e.get("spell").match(/^([LGZ])?(?:([0-9]+)-)?(.*)$/),n=t[1],r=t[2],a=t[3];switch(n){case"Z":switch(r){case"1":K(Ne(a),m)}break;default:K(de(decodeURIComponent(a)),m)}w(b,p)}}function _e(){if(m.some(e=>e.some(t=>t.piece))){let e=new URLSearchParams;e.set("cursor",`${p.x+1}-${p.y+1}`),e.set("spell","Z1-"+Ue(ce(m,!1))),history.replaceState({},"",`${location.pathname}?${e}`)}else history.replaceState({},"",location.pathname)}const De="/PsiEdit/assets/psi_spell_encode_wasm_bg-bf0be7e6.wasm",Ie="/PsiEdit/assets/psi-8969a07a.html",Me="/PsiEdit/assets/phi-c032e098.html";await fe(De);const ge=9,M=ge,B=ge,Be=document.querySelector("#spell-grid"),F=document.querySelector("#search"),Fe=document.querySelector("#export"),Ve=document.querySelector("#import"),Ke=document.querySelector("#delete");let p={},b={element:document.querySelector("#piece-config"),controls:[],params:[],comment:null},m=qe(Be,M,B,b,p);W(m,p,4,4);const H=document.querySelector("#piece-catalog");let S={};await Promise.allSettled([Ie,Me].map(Ze)),We();async function Ze(e){let t=await J(e),n=await xe(t);Object.assign(S,n),ze()}function ze(){H.innerHTML="",Object.values(S).sort((e,t)=>Y(e)>Y(t)).forEach(e=>{let t=H.div("catalog-item");t.append(e.cloneNode(!0)),t.addEventListener("click",()=>{L(p.cell,$(e)),w(b,p)})})}function Ge(){let e=F.value.toLowerCase();H.childNodes.forEach(t=>{let n=t.querySelector(".piece");t.hidden=!n.dataset.name.toLowerCase().includes(e)})}function pe(){prompt("Export Spell SNBT",Oe(ce(m))),_e()}function be(){K(de(prompt("Import Spell SNBT")),m),_e(),w(b,p)}function me(){j(p.cell),w(b,p)}F.addEventListener("input",Ge),Fe.addEventListener("click",pe),Ve.addEventListener("click",be),Ke.addEventListener("click",me);let X;document.addEventListener("keydown",e=>{if(e.getModifierState("Control")&&e.key=="d"&&(e.preventDefault(),b.comment&&(e.target==b.comment?document.activeElement.blur():b.comment.focus())),["INPUT","TEXTAREA"].includes(e.target.nodeName)){e.key=={INPUT:"Enter",TEXTAREA:"Escape"}[e.target.nodeName]&&(e.preventDefault(),document.activeElement.blur());return}if(e.key=="Enter"){F.focus(),F.select();return}if(Ae(e.key,p,b))return;["Delete","Backspace"].includes(e.key)&&me(),"123456789".includes(e.key)&&(X=e.key);let t=b.params[X-1];if(t){e.key=="ArrowLeft"&&k(t,C(t)=="left"&&R(t)?"off":"left",p,b),e.key=="ArrowRight"&&k(t,C(t)=="right"&&R(t)?"off":"right",p,b),e.key=="ArrowUp"&&k(t,C(t)=="top"&&R(t)?"off":"top",p,b),e.key=="ArrowDown"&&k(t,C(t)=="bottom"&&R(t)?"off":"bottom",p,b);return}let n=p.x,r=p.y,a="off";if(e.key=="ArrowLeft"&&(n--,a="left"),e.key=="ArrowRight"&&(n++,a="right"),e.key=="ArrowUp"&&(r--,a="top"),e.key=="ArrowDown"&&(r++,a="bottom"),e.shiftKey&&Q(n,M)&&Q(r,B)&&a!="off"&&!m[n][r].piece){let o=$(S["psi:connector"]);k(o.querySelector(".param[data-key=_target]"),Ee(a)),L(m[n][r],o)}W(m,p,O(n,M),O(r,B),b),e.key=="e"&&pe(),e.key=="i"&&be()}),document.addEventListener("keyup",e=>{"123456789".includes(e.key)&&(X=null)}),document.addEventListener("contextmenu",e=>e.preventDefault())})();
