/**
 * TinyMCE version 6.3.1 (2022-12-06)
 */
!function(){"use strict";const e=e=>{let t=e;return{get:()=>t,set:e=>{t=e}}};var t=tinymce.util.Tools.resolve("tinymce.PluginManager");const n=e=>t=>(e=>{const t=typeof e;return null===e?"null":"object"===t&&Array.isArray(e)?"array":"object"===t&&(n=o=e,(r=String).prototype.isPrototypeOf(n)||(null===(s=o.constructor)||void 0===s?void 0:s.name)===r.name)?"string":t;var n,o,r,s})(t)===e,o=e=>t=>typeof t===e,r=n("string"),s=n("array"),a=o("boolean"),l=o("number"),i=()=>{},c=e=>()=>e,d=c(!0),u=c("[!-#%-*,-\\/:;?@\\[-\\]_{}\xa1\xab\xb7\xbb\xbf;\xb7\u055a-\u055f\u0589\u058a\u05be\u05c0\u05c3\u05c6\u05f3\u05f4\u0609\u060a\u060c\u060d\u061b\u061e\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0830-\u083e\u085e\u0964\u0965\u0970\u0df4\u0e4f\u0e5a\u0e5b\u0f04-\u0f12\u0f3a-\u0f3d\u0f85\u0fd0-\u0fd4\u0fd9\u0fda\u104a-\u104f\u10fb\u1361-\u1368\u1400\u166d\u166e\u169b\u169c\u16eb-\u16ed\u1735\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u180a\u1944\u1945\u1a1e\u1a1f\u1aa0-\u1aa6\u1aa8-\u1aad\u1b5a-\u1b60\u1bfc-\u1bff\u1c3b-\u1c3f\u1c7e\u1c7f\u1cd3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205e\u207d\u207e\u208d\u208e\u3008\u3009\u2768-\u2775\u27c5\u27c6\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc\u29fd\u2cf9-\u2cfc\u2cfe\u2cff\u2d70\u2e00-\u2e2e\u2e30\u2e31\u3001-\u3003\u3008-\u3011\u3014-\u301f\u3030\u303d\u30a0\u30fb\ua4fe\ua4ff\ua60d-\ua60f\ua673\ua67e\ua6f2-\ua6f7\ua874-\ua877\ua8ce\ua8cf\ua8f8-\ua8fa\ua92e\ua92f\ua95f\ua9c1-\ua9cd\ua9de\ua9df\uaa5c-\uaa5f\uaade\uaadf\uabeb\ufd3e\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe61\ufe63\ufe68\ufe6a\ufe6b\uff01-\uff03\uff05-\uff0a\uff0c-\uff0f\uff1a\uff1b\uff1f\uff20\uff3b-\uff3d\uff3f\uff5b\uff5d\uff5f-\uff65]");class m{constructor(e,t){this.tag=e,this.value=t}static some(e){return new m(!0,e)}static none(){return m.singletonNone}fold(e,t){return this.tag?t(this.value):e()}isSome(){return this.tag}isNone(){return!this.tag}map(e){return this.tag?m.some(e(this.value)):m.none()}bind(e){return this.tag?e(this.value):m.none()}exists(e){return this.tag&&e(this.value)}forall(e){return!this.tag||e(this.value)}filter(e){return!this.tag||e(this.value)?this:m.none()}getOr(e){return this.tag?this.value:e}or(e){return this.tag?this:e}getOrThunk(e){return this.tag?this.value:e()}orThunk(e){return this.tag?this:e()}getOrDie(e){if(this.tag)return this.value;throw new Error(null!=e?e:"Called getOrDie on None")}static from(e){return null==e?m.none():m.some(e)}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(e){this.tag&&e(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}m.singletonNone=new m(!1);const h=u;var g=tinymce.util.Tools.resolve("tinymce.Env"),f=tinymce.util.Tools.resolve("tinymce.util.Tools");const p=Array.prototype.slice,x=Array.prototype.push,y=(e,t)=>{const n=e.length,o=new Array(n);for(let r=0;r<n;r++){const n=e[r];o[r]=t(n,r)}return o},w=(e,t)=>{for(let n=0,o=e.length;n<o;n++)t(e[n],n)},b=(e,t)=>{for(let n=e.length-1;n>=0;n--)t(e[n],n)},v=(e,t)=>(e=>{const t=[];for(let n=0,o=e.length;n<o;++n){if(!s(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);x.apply(t,e[n])}return t})(y(e,t)),C=Object.hasOwnProperty,E=(e,t)=>C.call(e,t);"undefined"!=typeof window?window:Function("return this;")();const O=(3,e=>3===(e=>e.dom.nodeType)(e));const N=e=>{if(null==e)throw new Error("Node cannot be null or undefined");return{dom:e}},T=N,k=(e,t)=>({element:e,offset:t}),A=(e,t)=>{((e,t)=>{const n=(e=>m.from(e.dom.parentNode).map(T))(e);n.each((n=>{n.dom.insertBefore(t.dom,e.dom)}))})(e,t),((e,t)=>{e.dom.appendChild(t.dom)})(t,e)},S=((e,t)=>{const n=t=>e(t)?m.from(t.dom.nodeValue):m.none();return{get:t=>{if(!e(t))throw new Error("Can only get text value of a text node");return n(t).getOr("")},getOption:n,set:(t,n)=>{if(!e(t))throw new Error("Can only set raw text value of a text node");t.dom.nodeValue=n}}})(O),B=e=>S.get(e);var F=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker");const I=(e,t)=>e.isBlock(t)||E(e.schema.getVoidElements(),t.nodeName),M=(e,t)=>"false"===e.getContentEditable(t),R=(e,t)=>!e.isBlock(t)&&E(e.schema.getWhitespaceElements(),t.nodeName),P=(e,t)=>((e,t)=>{const n=(e=>y(e.dom.childNodes,T))(e);return n.length>0&&t<n.length?k(n[t],0):k(e,t)})(T(e),t),D=(e,t,n,o,r,s=!0)=>{let a=s?t(!1):n;for(;a;){const n=M(e,a);if(n||R(e,a)){if(n?o.cef(a):o.boundary(a))break;a=t(!0)}else{if(I(e,a)){if(o.boundary(a))break}else 3===a.nodeType&&o.text(a);if(a===r)break;a=t(!1)}}},W=(e,t,n,o,r)=>{var s;if(((e,t)=>I(e,t)||M(e,t)||R(e,t)||((e,t)=>"true"===e.getContentEditable(t)&&t.parentNode&&"false"===e.getContentEditableParent(t.parentNode))(e,t))(e,n))return;const a=null!==(s=e.getParent(o,e.isBlock))&&void 0!==s?s:e.getRoot(),l=new F(n,a),i=r?l.next.bind(l):l.prev.bind(l);D(e,i,n,{boundary:d,cef:d,text:e=>{r?t.fOffset+=e.length:t.sOffset+=e.length,t.elements.push(T(e))}})},$=(e,t,n,o,r,s=!0)=>{const a=new F(n,t),l=[];let i={sOffset:0,fOffset:0,elements:[]};W(e,i,n,t,!1);const c=()=>(i.elements.length>0&&(l.push(i),i={sOffset:0,fOffset:0,elements:[]}),!1);return D(e,a.next.bind(a),n,{boundary:c,cef:e=>(c(),r&&l.push(...r.cef(e)),!1),text:e=>{i.elements.push(T(e)),r&&r.text(e,i)}},o,s),o&&W(e,i,o,t,!0),c(),l},V=(e,t)=>{const n=P(t.startContainer,t.startOffset),o=n.element.dom,r=P(t.endContainer,t.endOffset),s=r.element.dom;return $(e,t.commonAncestorContainer,o,s,{text:(e,t)=>{e===s?t.fOffset+=e.length-r.offset:e===o&&(t.sOffset+=n.offset)},cef:t=>{return((e,t)=>{const n=p.call(e,0);return n.sort(((e,t)=>((e,t)=>((e,t,n)=>0!=(e.compareDocumentPosition(t)&n))(e,t,Node.DOCUMENT_POSITION_PRECEDING))(e.elements[0].dom,t.elements[0].dom)?1:-1)),n})(v((n=T(t),((e,t)=>{const n=void 0===t?document:t.dom;return 1!==(o=n).nodeType&&9!==o.nodeType&&11!==o.nodeType||0===o.childElementCount?[]:y(n.querySelectorAll(e),T);var o})("*[contenteditable=true]",n)),(t=>{const n=t.dom;return $(e,n,n)})));var n}},!1)},j=(e,t)=>t.collapsed?[]:V(e,t),_=(e,t)=>{const n=e.createRng();return n.selectNode(t),j(e,n)},z=(e,t)=>v(t,(t=>{const n=t.elements,o=y(n,B).join(""),r=((e,t,n=0,o=e.length)=>{const r=t.regex;r.lastIndex=n;const s=[];let a;for(;a=r.exec(e);){const e=a[t.matchIndex],n=a.index+a[0].indexOf(e),l=n+e.length;if(l>o)break;s.push({start:n,finish:l}),r.lastIndex=l}return s})(o,e,t.sOffset,o.length-t.fOffset);return((e,t)=>{const n=(o=e,r=(e,n)=>{const o=B(n),r=e.last,s=r+o.length,a=v(t,((e,t)=>e.start<s&&e.finish>r?[{element:n,start:Math.max(r,e.start)-r,finish:Math.min(s,e.finish)-r,matchId:t}]:[]));return{results:e.results.concat(a),last:s}},s={results:[],last:0},w(o,((e,t)=>{s=r(s,e)})),s).results;var o,r,s;return((e,t)=>{if(0===e.length)return[];{let n=t(e[0]);const o=[];let r=[];for(let s=0,a=e.length;s<a;s++){const a=e[s],l=t(a);l!==n&&(o.push(r),r=[]),n=l,r.push(a)}return 0!==r.length&&o.push(r),o}})(n,(e=>e.matchId))})(n,r)})),U=(e,t)=>{b(e,((e,n)=>{b(e,(e=>{const o=T(t.cloneNode(!1));((e,t,n)=>{((e,t,n)=>{if(!(r(n)||a(n)||l(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")})(e.dom,t,n)})(o,"data-mce-index",n);const s=e.element.dom;if(s.length===e.finish&&0===e.start)A(e.element,o);else{s.length!==e.finish&&s.splitText(e.finish);const t=s.splitText(e.start);A(T(t),o)}}))}))},q=e=>e.getAttribute("data-mce-index"),G=(e,t,n,o)=>{const r=e.dom.create("span",{"data-mce-bogus":1});r.className="mce-match-marker";const s=e.getBody();return te(e,t,!1),o?((e,t,n,o)=>{const r=n.getBookmark(),s=e.select("td[data-mce-selected],th[data-mce-selected]"),a=s.length>0?((e,t)=>v(t,(t=>_(e,t))))(e,s):j(e,n.getRng()),l=z(t,a);return U(l,o),n.moveToBookmark(r),l.length})(e.dom,n,e.selection,r):((e,t,n,o)=>{const r=_(e,n),s=z(t,r);return U(s,o),s.length})(e.dom,n,s,r)},K=e=>{var t;const n=e.parentNode;e.firstChild&&n.insertBefore(e.firstChild,e),null===(t=e.parentNode)||void 0===t||t.removeChild(e)},H=(e,t)=>{const n=[],o=f.toArray(e.getBody().getElementsByTagName("span"));if(o.length)for(let e=0;e<o.length;e++){const r=q(o[e]);null!==r&&r.length&&r===t.toString()&&n.push(o[e])}return n},J=(e,t,n)=>{const o=t.get();let r=o.index;const s=e.dom;n?r+1===o.count?r=0:r++:r-1==-1?r=o.count-1:r--,s.removeClass(H(e,o.index),"mce-match-marker-selected");const a=H(e,r);return a.length?(s.addClass(H(e,r),"mce-match-marker-selected"),e.selection.scrollIntoView(a[0]),r):-1},L=(e,t)=>{const n=t.parentNode;e.remove(t),n&&e.isEmpty(n)&&e.remove(n)},Q=(e,t,n,o,r,s)=>{const a=e.selection,l=((e,t)=>{const n="("+e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(/\s/g,"[^\\S\\r\\n\\uFEFF]")+")";return t?`(?:^|\\s|${h()})`+n+`(?=$|\\s|${h()})`:n})(n,r),i=a.isForward(),c={regex:new RegExp(l,o?"g":"gi"),matchIndex:1},d=G(e,t,c,s);if(g.browser.isSafari()&&a.setRng(a.getRng(),i),d){const a=J(e,t,!0);t.set({index:a,count:d,text:n,matchCase:o,wholeWord:r,inSelection:s})}return d},X=(e,t)=>{const n=J(e,t,!0);t.set({...t.get(),index:n})},Y=(e,t)=>{const n=J(e,t,!1);t.set({...t.get(),index:n})},Z=e=>{const t=q(e);return null!==t&&t.length>0},ee=(e,t,n,o,r)=>{const s=t.get(),a=s.index;let l,i=a;o=!1!==o;const c=e.getBody(),d=f.grep(f.toArray(c.getElementsByTagName("span")),Z);for(let t=0;t<d.length;t++){const c=q(d[t]);let u=l=parseInt(c,10);if(r||u===s.index){for(n.length?(d[t].innerText=n,K(d[t])):L(e.dom,d[t]);d[++t];){if(u=parseInt(q(d[t]),10),u!==l){t--;break}L(e.dom,d[t])}o&&i--}else l>a&&d[t].setAttribute("data-mce-index",String(l-1))}return t.set({...s,count:r?0:s.count-1,index:i}),o?X(e,t):Y(e,t),!r&&t.get().count>0},te=(e,t,n)=>{let o,r;const s=t.get(),a=f.toArray(e.getBody().getElementsByTagName("span"));for(let e=0;e<a.length;e++){const t=q(a[e]);null!==t&&t.length&&(t===s.index.toString()&&(o||(o=a[e].firstChild),r=a[e].firstChild),K(a[e]))}if(t.set({...s,index:-1,count:0,text:""}),o&&r){const t=e.dom.createRng();return t.setStart(o,0),t.setEnd(r,r.data.length),!1!==n&&e.selection.setRng(t),t}},ne=(t,n)=>{const o=(()=>{const t=(t=>{const n=e(m.none()),o=()=>n.get().each(t);return{clear:()=>{o(),n.set(m.none())},isSet:()=>n.get().isSome(),get:()=>n.get(),set:e=>{o(),n.set(m.some(e))}}})(i);return{...t,on:e=>t.get().each(e)}})();t.undoManager.add();const r=f.trim(t.selection.getContent({format:"text"})),s=e=>{e.setEnabled("next",((e,t)=>t.get().count>1)(0,n)),e.setEnabled("prev",((e,t)=>t.get().count>1)(0,n))},a=(e,t)=>{w(["replace","replaceall","prev","next"],(n=>e.setEnabled(n,!t)))},l=(e,t)=>{g.browser.isSafari()&&g.deviceType.isTouch()&&("find"===t||"replace"===t||"replaceall"===t)&&e.focus(t)},c=e=>{te(t,n,!1),a(e,!0),s(e)},d=e=>{const o=e.getData(),r=n.get();if(o.findtext.length){if(r.text===o.findtext&&r.matchCase===o.matchcase&&r.wholeWord===o.wholewords)X(t,n);else{const r=Q(t,n,o.findtext,o.matchcase,o.wholewords,o.inselection);r<=0&&(e=>{t.windowManager.alert("Could not find the specified string.",(()=>{e.focus("findtext")}))})(e),a(e,0===r)}s(e)}else c(e)},u=n.get(),h={title:"Find and Replace",size:"normal",body:{type:"panel",items:[{type:"bar",items:[{type:"input",name:"findtext",placeholder:"Find",maximized:!0,inputMode:"search"},{type:"button",name:"prev",text:"Previous",icon:"action-prev",enabled:!1,borderless:!0},{type:"button",name:"next",text:"Next",icon:"action-next",enabled:!1,borderless:!0}]},{type:"input",name:"replacetext",placeholder:"Replace with",inputMode:"search"}]},buttons:[{type:"menu",name:"options",icon:"preferences",tooltip:"Preferences",align:"start",items:[{type:"togglemenuitem",name:"matchcase",text:"Match case"},{type:"togglemenuitem",name:"wholewords",text:"Find whole words only"},{type:"togglemenuitem",name:"inselection",text:"Find in selection"}]},{type:"custom",name:"find",text:"Find",primary:!0},{type:"custom",name:"replace",text:"Replace",enabled:!1},{type:"custom",name:"replaceall",text:"Replace all",enabled:!1}],initialData:{findtext:r,replacetext:"",wholewords:u.wholeWord,matchcase:u.matchCase,inselection:u.inSelection},onChange:(e,t)=>{"findtext"===t.name&&n.get().count>0&&c(e)},onAction:(e,o)=>{const r=e.getData();switch(o.name){case"find":d(e);break;case"replace":ee(t,n,r.replacetext)?s(e):c(e);break;case"replaceall":ee(t,n,r.replacetext,!0,!0),c(e);break;case"prev":Y(t,n),s(e);break;case"next":X(t,n),s(e);break;case"matchcase":case"wholewords":case"inselection":(e=>{const t=e.getData(),o=n.get();n.set({...o,matchCase:t.matchcase,wholeWord:t.wholewords,inSelection:t.inselection})})(e),c(e)}l(e,o.name)},onSubmit:e=>{d(e),l(e,"find")},onClose:()=>{t.focus(),te(t,n),t.undoManager.add()}};o.set(t.windowManager.open(h,{inline:"toolbar"}))},oe=(e,t)=>()=>{ne(e,t)};t.add("searchreplace",(t=>{const n=e({index:-1,count:0,text:"",matchCase:!1,wholeWord:!1,inSelection:!1});return((e,t)=>{e.addCommand("SearchReplace",(()=>{ne(e,t)}))})(t,n),((e,t)=>{e.ui.registry.addMenuItem("searchreplace",{text:"Find and replace...",shortcut:"Meta+F",onAction:oe(e,t),icon:"search"}),e.ui.registry.addButton("searchreplace",{tooltip:"Find and replace",onAction:oe(e,t),icon:"search"}),e.shortcuts.add("Meta+F","",oe(e,t))})(t,n),((e,t)=>({done:n=>te(e,t,n),find:(n,o,r,s=!1)=>Q(e,t,n,o,r,s),next:()=>X(e,t),prev:()=>Y(e,t),replace:(n,o,r)=>ee(e,t,n,o,r)}))(t,n)}))}();
