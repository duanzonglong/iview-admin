webpackJsonp([12],{286:function(t,e,n){n(806);var i=n(2)(n(501),n(866),null,null);i.options.__file="/Users/lizhigang/Documents/TD/iview-admin/src/views/my-components/draggable-list/draggable-list.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] draggable-list.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},386:function(t,e,n){var i,a;/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */
!function(o){"use strict";i=o,void 0!==(a="function"==typeof i?i.call(e,n,e,t):i)&&(t.exports=a)}(function(){"use strict";function t(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=b({},e),t[z]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0}};for(var i in n)!(i in e)&&(e[i]=n[i]);rt(e);for(var a in this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this));this.nativeDraggable=!e.forceFallback&&$,o(t,"mousedown",this._onTapStart),o(t,"touchstart",this._onTapStart),o(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(o(t,"dragover",this),o(t,"dragenter",this)),at.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function e(t,e){"clone"!==t.lastPullMode&&(e=!0),x&&x.state!==e&&(l(x,"display",e?"none":""),e||x.state&&(t.options.group.revertClone?(S.insertBefore(x,E),t._animate(D,x)):S.insertBefore(x,D)),x.state=e)}function n(t,e,n){if(t){n=n||q;do{if(">*"===e&&t.parentNode===n||m(t,e))return t}while(t=i(t))}return null}function i(t){var e=t.host;return e&&e.nodeType?e:t.parentNode}function a(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.preventDefault()}function o(t,e,n){t.addEventListener(e,n,Z)}function r(t,e,n){t.removeEventListener(e,n,Z)}function s(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(H," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(H," ")}}function l(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return q.defaultView&&q.defaultView.getComputedStyle?n=q.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function d(t,e,n){if(t){var i=t.getElementsByTagName(e),a=0,o=i.length;if(n)for(;a<o;a++)n(i[a],a);return i}return[]}function c(t,e,n,i,a,o,r){t=t||e[z];var s=q.createEvent("Event"),l=t.options,d="on"+n.charAt(0).toUpperCase()+n.substr(1);s.initEvent(n,!0,!0),s.to=e,s.from=a||e,s.item=i||e,s.clone=x,s.oldIndex=o,s.newIndex=r,e.dispatchEvent(s),l[d]&&l[d].call(t,s)}function u(t,e,n,i,a,o,r,s){var l,d,c=t[z],u=c.options.onMove;return l=q.createEvent("Event"),l.initEvent("move",!0,!0),l.to=e,l.from=t,l.dragged=n,l.draggedRect=i,l.related=a||e,l.relatedRect=o||e.getBoundingClientRect(),l.willInsertAfter=s,t.dispatchEvent(l),u&&(d=u.call(c,l,r)),d}function h(t){t.draggable=!1}function p(){tt=!1}function f(t,e){var n=t.lastElementChild,i=n.getBoundingClientRect();return e.clientY-(i.top+i.height)>5||e.clientX-(i.left+i.width)>5}function g(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function v(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!m(t,e)||n++;return n}function m(t,e){if(t){e=e.split(".");var n=e.shift().toUpperCase(),i=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");return!(""!==n&&t.nodeName.toUpperCase()!=n||e.length&&((" "+t.className+" ").match(i)||[]).length!=e.length)}return!1}function _(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,setTimeout(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function b(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function y(t){return J?J(t).clone(!0)[0]:Q&&Q.dom?Q.dom(t).cloneNode(!0):t.cloneNode(!0)}function w(t){for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var i=e[n];i.checked&&it.push(i)}}if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var D,C,T,x,S,E,k,N,B,I,A,L,R,M,O,Y,X,P,j,F,U={},H=/\s+/g,W=/left|right|inline/,z="Sortable"+(new Date).getTime(),V=window,q=V.document,G=V.parseInt,J=V.jQuery||V.Zepto,Q=V.Polymer,Z=!1,$=!!("draggable"in q.createElement("div")),K=function(t){return!navigator.userAgent.match(/Trident.*rv[ :]?11\./)&&(t=q.createElement("x"),t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents)}(),tt=!1,et=Math.abs,nt=Math.min,it=[],at=[],ot=_(function(t,e,n){if(n&&e.scroll){var i,a,o,r,s,l,d=n[z],c=e.scrollSensitivity,u=e.scrollSpeed,h=t.clientX,p=t.clientY,f=window.innerWidth,g=window.innerHeight;if(B!==n&&(N=e.scroll,B=n,I=e.scrollFn,!0===N)){N=n;do{if(N.offsetWidth<N.scrollWidth||N.offsetHeight<N.scrollHeight)break}while(N=N.parentNode)}N&&(i=N,a=N.getBoundingClientRect(),o=(et(a.right-h)<=c)-(et(a.left-h)<=c),r=(et(a.bottom-p)<=c)-(et(a.top-p)<=c)),o||r||(o=(f-h<=c)-(h<=c),r=(g-p<=c)-(p<=c),(o||r)&&(i=V)),U.vx===o&&U.vy===r&&U.el===i||(U.el=i,U.vx=o,U.vy=r,clearInterval(U.pid),i&&(U.pid=setInterval(function(){if(l=r?r*u:0,s=o?o*u:0,"function"==typeof I)return I.call(d,s,l,t);i===V?V.scrollTo(V.pageXOffset+s,V.pageYOffset+l):(i.scrollTop+=l,i.scrollLeft+=s)},24)))}},30),rt=function(t){function e(t,e){return void 0!==t&&!0!==t||(t=n.name),"function"==typeof t?t:function(n,i){var a=i.options.group.name;return e?t:t&&(t.join?t.indexOf(a)>-1:a==t)}}var n={},i=t.group;i&&"object"==typeof i||(i={name:i}),n.name=i.name,n.checkPull=e(i.pull,!0),n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n};t.prototype={constructor:t,_onTapStart:function(t){var e,i=this,a=this.el,o=this.options,r=o.preventOnFilter,s=t.type,l=t.touches&&t.touches[0],d=(l||t).target,u=t.target.shadowRoot&&t.path&&t.path[0]||d,h=o.filter;if(w(a),!D&&!(/mousedown|pointerdown/.test(s)&&0!==t.button||o.disabled)&&(d=n(d,o.draggable,a))&&k!==d){if(e=v(d,o.draggable),"function"==typeof h){if(h.call(this,t,d,this))return c(i,u,"filter",d,a,e),void(r&&t.preventDefault())}else if(h&&(h=h.split(",").some(function(t){if(t=n(u,t.trim(),a))return c(i,t,"filter",d,a,e),!0})))return void(r&&t.preventDefault());o.handle&&!n(u,o.handle,a)||this._prepareDragStart(t,l,d,e)}},_prepareDragStart:function(t,e,n,i){var a,r=this,l=r.el,u=r.options,p=l.ownerDocument;n&&!D&&n.parentNode===l&&(P=t,S=l,D=n,C=D.parentNode,E=D.nextSibling,k=n,Y=u.group,M=i,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,D.style["will-change"]="transform",a=function(){r._disableDelayedDrag(),D.draggable=r.nativeDraggable,s(D,u.chosenClass,!0),r._triggerDragStart(t,e),c(r,S,"choose",D,S,M)},u.ignore.split(",").forEach(function(t){d(D,t.trim(),h)}),o(p,"mouseup",r._onDrop),o(p,"touchend",r._onDrop),o(p,"touchcancel",r._onDrop),o(p,"pointercancel",r._onDrop),o(p,"selectstart",r),u.delay?(o(p,"mouseup",r._disableDelayedDrag),o(p,"touchend",r._disableDelayedDrag),o(p,"touchcancel",r._disableDelayedDrag),o(p,"mousemove",r._disableDelayedDrag),o(p,"touchmove",r._disableDelayedDrag),o(p,"pointermove",r._disableDelayedDrag),r._dragStartTimer=setTimeout(a,u.delay)):a())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),r(t,"mouseup",this._disableDelayedDrag),r(t,"touchend",this._disableDelayedDrag),r(t,"touchcancel",this._disableDelayedDrag),r(t,"mousemove",this._disableDelayedDrag),r(t,"touchmove",this._disableDelayedDrag),r(t,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(t,e){e=e||("touch"==t.pointerType?t:null),e?(P={target:D,clientX:e.clientX,clientY:e.clientY},this._onDragStart(P,"touch")):this.nativeDraggable?(o(D,"dragend",this),o(S,"dragstart",this._onDragStart)):this._onDragStart(P,!0);try{q.selection?setTimeout(function(){q.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){if(S&&D){var e=this.options;s(D,e.ghostClass,!0),s(D,e.dragClass,!1),t.active=this,c(this,S,"start",D,S,M)}else this._nulling()},_emulateDragOver:function(){if(j){if(this._lastX===j.clientX&&this._lastY===j.clientY)return;this._lastX=j.clientX,this._lastY=j.clientY,K||l(T,"display","none");var t=q.elementFromPoint(j.clientX,j.clientY),e=t,n=at.length;if(e)do{if(e[z]){for(;n--;)at[n]({clientX:j.clientX,clientY:j.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);K||l(T,"display","")}},_onTouchMove:function(e){if(P){var n=this.options,i=n.fallbackTolerance,a=n.fallbackOffset,o=e.touches?e.touches[0]:e,r=o.clientX-P.clientX+a.x,s=o.clientY-P.clientY+a.y,d=e.touches?"translate3d("+r+"px,"+s+"px,0)":"translate("+r+"px,"+s+"px)";if(!t.active){if(i&&nt(et(o.clientX-this._lastX),et(o.clientY-this._lastY))<i)return;this._dragStarted()}this._appendGhost(),F=!0,j=o,l(T,"webkitTransform",d),l(T,"mozTransform",d),l(T,"msTransform",d),l(T,"transform",d),e.preventDefault()}},_appendGhost:function(){if(!T){var t,e=D.getBoundingClientRect(),n=l(D),i=this.options;T=D.cloneNode(!0),s(T,i.ghostClass,!1),s(T,i.fallbackClass,!0),s(T,i.dragClass,!0),l(T,"top",e.top-G(n.marginTop,10)),l(T,"left",e.left-G(n.marginLeft,10)),l(T,"width",e.width),l(T,"height",e.height),l(T,"opacity","0.8"),l(T,"position","fixed"),l(T,"zIndex","100000"),l(T,"pointerEvents","none"),i.fallbackOnBody&&q.body.appendChild(T)||S.appendChild(T),t=T.getBoundingClientRect(),l(T,"width",2*e.width-t.width),l(T,"height",2*e.height-t.height)}},_onDragStart:function(t,e){var n=t.dataTransfer,i=this.options;this._offUpEvents(),Y.checkPull(this,this,D,t)&&(x=y(D),x.draggable=!1,x.style["will-change"]="",l(x,"display","none"),s(x,this.options.chosenClass,!1),S.insertBefore(x,D),c(this,S,"clone",D)),s(D,i.dragClass,!0),e?("touch"===e?(o(q,"touchmove",this._onTouchMove),o(q,"touchend",this._onDrop),o(q,"touchcancel",this._onDrop),o(q,"pointermove",this._onTouchMove),o(q,"pointerup",this._onDrop)):(o(q,"mousemove",this._onTouchMove),o(q,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,50)):(n&&(n.effectAllowed="move",i.setData&&i.setData.call(this,n,D)),o(q,"drop",this),setTimeout(this._dragStarted,0))},_onDragOver:function(i){var a,o,r,s,d=this.el,c=this.options,h=c.group,g=t.active,v=Y===h,m=!1,_=c.sort;if(void 0!==i.preventDefault&&(i.preventDefault(),!c.dragoverBubble&&i.stopPropagation()),!D.animated&&(F=!0,g&&!c.disabled&&(v?_||(s=!S.contains(D)):X===this||(g.lastPullMode=Y.checkPull(this,g,D,i))&&h.checkPut(this,g,D,i))&&(void 0===i.rootEl||i.rootEl===this.el))){if(ot(i,c,this.el),tt)return;if(a=n(i.target,c.draggable,d),o=D.getBoundingClientRect(),X!==this&&(X=this,m=!0),s)return e(g,!0),C=S,void(x||E?S.insertBefore(D,x||E):_||S.appendChild(D));if(0===d.children.length||d.children[0]===T||d===i.target&&f(d,i)){if(0!==d.children.length&&d.children[0]!==T&&d===i.target&&(a=d.lastElementChild),a){if(a.animated)return;r=a.getBoundingClientRect()}e(g,v),!1!==u(S,d,D,o,a,r,i)&&(D.contains(d)||(d.appendChild(D),C=d),this._animate(o,D),a&&this._animate(r,a))}else if(a&&!a.animated&&a!==D&&void 0!==a.parentNode[z]){A!==a&&(A=a,L=l(a),R=l(a.parentNode)),r=a.getBoundingClientRect();var b=r.right-r.left,y=r.bottom-r.top,w=W.test(L.cssFloat+L.display)||"flex"==R.display&&0===R["flex-direction"].indexOf("row"),k=a.offsetWidth>D.offsetWidth,N=a.offsetHeight>D.offsetHeight,B=(w?(i.clientX-r.left)/b:(i.clientY-r.top)/y)>.5,I=a.nextElementSibling,M=!1;if(w){var O=D.offsetTop,P=a.offsetTop;M=O===P?a.previousElementSibling===D&&!k||B&&k:a.previousElementSibling===D||D.previousElementSibling===a?(i.clientY-r.top)/y>.5:P>O}else m||(M=I!==D&&!N||B&&N);var j=u(S,d,D,o,a,r,i,M);!1!==j&&(1!==j&&-1!==j||(M=1===j),tt=!0,setTimeout(p,30),e(g,v),D.contains(d)||(M&&!I?d.appendChild(D):a.parentNode.insertBefore(D,M?I:a)),C=D.parentNode,this._animate(o,D),this._animate(r,a))}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();1===t.nodeType&&(t=t.getBoundingClientRect()),l(e,"transition","none"),l(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,l(e,"transition","all "+n+"ms"),l(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=setTimeout(function(){l(e,"transition",""),l(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;r(q,"touchmove",this._onTouchMove),r(q,"pointermove",this._onTouchMove),r(t,"mouseup",this._onDrop),r(t,"touchend",this._onDrop),r(t,"pointerup",this._onDrop),r(t,"touchcancel",this._onDrop),r(t,"pointercancel",this._onDrop),r(t,"selectstart",this)},_onDrop:function(e){var n=this.el,i=this.options;clearInterval(this._loopId),clearInterval(U.pid),clearTimeout(this._dragStartTimer),r(q,"mousemove",this._onTouchMove),this.nativeDraggable&&(r(q,"drop",this),r(n,"dragstart",this._onDragStart)),this._offUpEvents(),e&&(F&&(e.preventDefault(),!i.dropBubble&&e.stopPropagation()),T&&T.parentNode&&T.parentNode.removeChild(T),S!==C&&"clone"===t.active.lastPullMode||x&&x.parentNode&&x.parentNode.removeChild(x),D&&(this.nativeDraggable&&r(D,"dragend",this),h(D),D.style["will-change"]="",s(D,this.options.ghostClass,!1),s(D,this.options.chosenClass,!1),c(this,S,"unchoose",D,S,M),S!==C?(O=v(D,i.draggable))>=0&&(c(null,C,"add",D,S,M,O),c(this,S,"remove",D,S,M,O),c(null,C,"sort",D,S,M,O),c(this,S,"sort",D,S,M,O)):D.nextSibling!==E&&(O=v(D,i.draggable))>=0&&(c(this,S,"update",D,S,M,O),c(this,S,"sort",D,S,M,O)),t.active&&(null!=O&&-1!==O||(O=M),c(this,S,"end",D,S,M,O),this.save()))),this._nulling()},_nulling:function(){S=D=C=T=E=x=k=N=B=P=j=F=O=A=L=X=Y=t.active=null,it.forEach(function(t){t.checked=!0}),it.length=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragover":case"dragenter":D&&(this._onDragOver(t),a(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,a=0,o=i.length,r=this.options;a<o;a++)t=i[a],n(t,r.draggable,this.el)&&e.push(t.getAttribute(r.dataIdAttr)||g(t));return e},sort:function(t){var e={},i=this.el;this.toArray().forEach(function(t,a){var o=i.children[a];n(o,this.options.draggable,i)&&(e[t]=o)},this),t.forEach(function(t){e[t]&&(i.removeChild(e[t]),i.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return n(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&rt(n)},destroy:function(){var t=this.el;t[z]=null,r(t,"mousedown",this._onTapStart),r(t,"touchstart",this._onTapStart),r(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(r(t,"dragover",this),r(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),at.splice(at.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},o(q,"touchmove",function(e){t.active&&e.preventDefault()});try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){Z={capture:!1,passive:!1}}}))}catch(t){}return t.utils={on:o,off:r,css:l,find:d,is:function(t,e){return!!n(t,e,t)},extend:b,throttle:_,closest:n,toggleClass:s,clone:y,index:v},t.create=function(e,n){return new t(e,n)},t.version="1.6.1",t})},501:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(386),a=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={name:"draggable-list",data:function(){return{todoArray:[{content:"完成iview-admin基本开发"},{content:"对iview-admin进行性能优化"},{content:"对iview-admin的细节进行优化"},{content:"完成iview-admin开发"},{content:"解决发现的bug"},{content:"添加更多组件"},{content:"封装更多图表"},{content:"增加更多人性化功能"}],doArray:[],shoppingList:[{name:"香肠"},{name:"烤鸭"},{name:"烧鸡"},{name:"卤煮"},{name:"酱汁腊肉"},{name:"松花小肚"},{name:"白丸子"},{name:"红丸子"},{name:"汆丸子"},{name:"蒸熊掌"},{name:"蒸羊羔"},{name:"蒸鹿尾"},{name:"梅菜扣肉"},{name:"四喜丸子"},{name:"酒酿萝卜皮"},{name:"红烧胖大海"},{name:"连年有鱼"}],affordList:[]}},mounted:function(){document.body.ondrop=function(t){t.preventDefault(),t.stopPropagation()};var t=this,e=document.getElementById("todoList");a.default.create(e,{group:{name:"list",pull:!0},animation:120,ghostClass:"placeholder-style",fallbackClass:"iview-admin-cloned-item",onRemove:function(e){t.doArray.splice(e.newIndex,0,t.todoArray[e.item.getAttribute("data-index")])}});var n=document.getElementById("doList");a.default.create(n,{group:{name:"list",pull:!0},sort:!1,filter:".iview-admin-draggable-delete",animation:120,fallbackClass:"iview-admin-cloned-item",onRemove:function(e){t.doArray.splice(e.oldIndex,1)}});var i=document.getElementById("shoppingList");a.default.create(i,{group:{name:"list",pull:!0},animation:120,ghostClass:"placeholder-style",fallbackClass:"iview-admin-cloned-item",onRemove:function(e){t.affordList.splice(e.newIndex,0,t.shoppingList[e.item.getAttribute("data-index")])}});var o=document.getElementById("affordList");a.default.create(o,{group:{name:"list",pull:!0},sort:!1,filter:".iview-admin-draggable-delete",animation:120,fallbackClass:"iview-admin-cloned-item",onRemove:function(e){t.affordList.splice(e.oldIndex,1)}})}}},806:function(t,e){},866:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Row",[n("Col",{attrs:{span:"16"}},[n("Card",[n("Row",[n("Col",{attrs:{span:"12"}},[n("Card",{attrs:{"dis-hover":""}},[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"ios-list-outline"}}),t._v("\n                                本周欲完成任务清单(拖拽到右侧删除)\n                            ")],1),t._v(" "),n("div",{staticStyle:{height:"360px"}},[n("ul",{staticClass:"iview-admin-draggable-list",attrs:{id:"doList"}})])])],1),t._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"12"}},[n("Card",{attrs:{"dis-hover":""}},[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"ios-list"}}),t._v("\n                                所剩任务清单(拖拽到左侧添加)\n                            ")],1),t._v(" "),n("div",{staticStyle:{height:"360px"}},[n("ul",{staticClass:"iview-admin-draggable-list",attrs:{id:"todoList"}},t._l(t.todoArray,function(e,i){return n("li",{key:i,staticClass:"notwrap todolist-item",attrs:{"data-index":i}},[t._v("\n                                        "+t._s(e.content)+"\n                                    ")])}))])])],1)],1)],1)],1),t._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"ios-paper-outline"}}),t._v("\n                    本周已选任务清单\n                ")],1),t._v(" "),n("div",{staticStyle:{height:"394px"}},[n("ul",{staticClass:"iview-admin-draggable-list"},t._l(t.doArray,function(e,i){return n("li",{key:i,staticClass:"notwrap",attrs:{"data-index":i}},[t._v("\n                            "+t._s(e.content)+"\n                        ")])}))])])],1)],1),t._v(" "),n("Row",{staticClass:"margin-top-10"},[n("Col",{attrs:{span:"16"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"navicon-round"}}),t._v("\n                    可滚动拖拽\n                ")],1),t._v(" "),n("Row",[n("Col",{attrs:{span:"12"}},[n("Card",{attrs:{"dis-hover":""}},[n("div",{staticStyle:{height:"360px"}},[n("ul",{staticClass:"iview-admin-draggable-list",attrs:{id:"affordList"}})])])],1),t._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"12"}},[n("Card",{attrs:{"dis-hover":""}},[n("div",{staticStyle:{height:"360px"}},[n("ul",{staticClass:"iview-admin-draggable-list",attrs:{id:"shoppingList"}},t._l(t.shoppingList,function(e,i){return n("li",{key:i,staticClass:"notwrap todolist-item",attrs:{"data-index":i}},[t._v("\n                                        好吃的美食--"+t._s(e.name)+"\n                                    ")])}))])])],1)],1)],1)],1),t._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"8"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"android-funnel"}}),t._v("\n                    买得起的清单\n                ")],1),t._v(" "),n("div",{staticStyle:{height:"394px"}},[n("ul",{staticClass:"iview-admin-draggable-list"},t._l(t.affordList,function(e,i){return n("li",{key:i,staticClass:"notwrap",attrs:{"data-index":i}},[t._v("\n                            "+t._s(e.name)+"\n                        ")])}))])])],1)],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});