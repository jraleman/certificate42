!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(n){return e[n]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s="mdyV")}({MV5A:function(){},QfWi:function(e,n,t){"use strict";t.r(n),function(e){function r(){return e("div",null,e("h1",null,"Hello, World!"))}t.d(n,"default",(function(){return r}));t("MV5A")}.call(this,t("hosL").h)},hosL:function(e,n,t){"use strict";function r(e,n){for(var t in n)e[t]=n[t];return e}function o(e){var n=e.parentNode;n&&n.removeChild(e)}function _(e,n,t){var r,o,_,u=arguments,i={};for(_ in n)"key"==_?r=n[_]:"ref"==_?o=n[_]:i[_]=n[_];if(arguments.length>3)for(t=[t],_=3;_<arguments.length;_++)t.push(u[_]);if(null!=t&&(i.children=t),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===i[_]&&(i[_]=e.defaultProps[_]);return l(e,i,r,o,null)}function l(e,n,t,r,o){var _={type:e,props:n,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++W.__v:o};return null!=W.vnode&&W.vnode(_),_}function u(){return{current:null}}function i(e){return e.children}function c(e,n){this.props=e,this.context=n}function f(e,n){if(null==n)return e.__?f(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?f(e):null}function s(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return s(e)}}function p(e){(!e.__d&&(e.__d=!0)&&U.push(e)&&!d.__r++||N!==W.debounceRendering)&&((N=W.debounceRendering)||O)(d)}function d(){for(var e;d.__r=U.length;)e=U.sort((function(e,n){return e.__v.__b-n.__v.__b})),U=[],e.some((function(e){var n,t,o,_,l,u;e.__d&&(l=(_=(n=e).__v).__e,(u=n.__P)&&(t=[],(o=r({},_)).__v=_.__v+1,C(u,_,o,n.__n,void 0!==u.ownerSVGElement,null!=_.__h?[l]:null,t,null==l?f(_):l,_.__h),x(t,_),_.__e!=l&&s(_)))}))}function a(e,n,t,r,o,_,u,c,s,p){var d,a,v,m,g,k,b,x=r&&r.__k||H,S=x.length;for(t.__k=[],d=0;d<n.length;d++)if(null!=(m=t.__k[d]=null==(m=n[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?l(null,m,null,null,m):Array.isArray(m)?l(i,{children:m},null,null,null):m.__b>0?l(m.type,m.props,m.key,null,m.__v):m)){if(m.__=t,m.__b=t.__b+1,null===(v=x[d])||v&&m.key==v.key&&m.type===v.type)x[d]=void 0;else for(a=0;a<S;a++){if((v=x[a])&&m.key==v.key&&m.type===v.type){x[a]=void 0;break}v=null}C(e,m,v=v||R,o,_,u,c,s,p),g=m.__e,(a=m.ref)&&v.ref!=a&&(b||(b=[]),v.ref&&b.push(v.ref,null,m),b.push(a,m.__c||g,m)),null!=g?(null==k&&(k=g),"function"==typeof m.type&&null!=m.__k&&m.__k===v.__k?m.__d=s=h(m,s,e):s=y(e,m,v,x,g,s),p||"option"!==t.type?"function"==typeof t.type&&(t.__d=s):e.value=""):s&&v.__e==s&&s.parentNode!=e&&(s=f(v))}for(t.__e=k,d=S;d--;)null!=x[d]&&("function"==typeof t.type&&null!=x[d].__e&&x[d].__e==t.__d&&(t.__d=f(r,d+1)),A(x[d],x[d]));if(b)for(d=0;d<b.length;d++)P(b[d],b[++d],b[++d])}function h(e,n,t){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,n="function"==typeof o.type?h(o,n,t):y(t,o,o,e.__k,o.__e,n));return n}function v(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){v(e,n)})):n.push(e)),n}function y(e,n,t,r,o,_){var l,u,i;if(void 0!==n.__d)l=n.__d,n.__d=void 0;else if(null==t||o!=_||null==o.parentNode)e:if(null==_||_.parentNode!==e)e.appendChild(o),l=null;else{for(u=_,i=0;(u=u.nextSibling)&&i<r.length;i+=2)if(u==o)break e;e.insertBefore(o,_),l=_}return void 0!==l?l:o.nextSibling}function m(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||F.test(n)?t:t+"px"}function g(e,n,t,r,o){var _;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(n in r)t&&n in t||m(e.style,n,"");if(t)for(n in t)r&&t[n]===r[n]||m(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])_=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+_]=t,t?r||e.addEventListener(n,_?b:k,_):e.removeEventListener(n,_?b:k,_);else if("dangerouslySetInnerHTML"!==n){if(o)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function k(e){this.l[e.type+!1](W.event?W.event(e):e)}function b(e){this.l[e.type+!0](W.event?W.event(e):e)}function C(e,n,t,o,_,l,u,f,s){var p,d,h,v,y,m,g,k,b,C,x,P=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(s=t.__h,f=n.__e=t.__e,n.__h=null,l=[f]),(p=W.__b)&&p(n);try{e:if("function"==typeof P){if(k=n.props,b=(p=P.contextType)&&o[p.__c],C=p?b?b.props.value:p.__:o,t.__c?g=(d=n.__c=t.__c).__=d.__E:("prototype"in P&&P.prototype.render?n.__c=d=new P(k,C):(n.__c=d=new c(k,C),d.constructor=P,d.render=T),b&&b.sub(d),d.props=k,d.state||(d.state={}),d.context=C,d.__n=o,h=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=P.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=r({},d.__s)),r(d.__s,P.getDerivedStateFromProps(k,d.__s))),v=d.props,y=d.state,h)null==P.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(k,C),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(k,d.__s,C)||n.__v===t.__v){d.props=k,d.state=d.__s,n.__v!==t.__v&&(d.__d=!1),d.__v=n,n.__e=t.__e,n.__k=t.__k,d.__h.length&&u.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(k,d.__s,C),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,y,m)}))}d.context=C,d.props=k,d.state=d.__s,(p=W.__r)&&p(n),d.__d=!1,d.__v=n,d.__P=e,p=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(o=r(r({},o),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(m=d.getSnapshotBeforeUpdate(v,y)),x=null!=p&&p.type===i&&null==p.key?p.props.children:p,a(e,Array.isArray(x)?x:[x],n,t,o,_,l,u,f,s),d.base=n.__e,n.__h=null,d.__h.length&&u.push(d),g&&(d.__E=d.__=null),d.__e=!1}else null==l&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=S(t.__e,n,t,o,_,l,u,s);(p=W.diffed)&&p(n)}catch(e){n.__v=null,(s||null!=l)&&(n.__e=f,n.__h=!!s,l[l.indexOf(f)]=null),W.__e(e,n,t)}}function x(e,n){W.__c&&W.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){W.__e(e,n.__v)}}))}function S(e,n,t,r,_,l,u,i){var c,f,s,p,d=t.props,h=n.props,v=n.type,y=0;if("svg"===v&&(_=!0),null!=l)for(;y<l.length;y++)if((c=l[y])&&(c===e||(v?c.localName==v:3==c.nodeType))){e=c,l[y]=null;break}if(null==e){if(null===v)return document.createTextNode(h);e=_?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),l=null,i=!1}if(null===v)d===h||i&&e.data===h||(e.data=h);else{if(l=l&&H.slice.call(e.childNodes),f=(d=t.props||R).dangerouslySetInnerHTML,s=h.dangerouslySetInnerHTML,!i){if(null!=l)for(d={},p=0;p<e.attributes.length;p++)d[e.attributes[p].name]=e.attributes[p].value;(s||f)&&(s&&(f&&s.__html==f.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}if(function(e,n,t,r,o){var _;for(_ in t)"children"===_||"key"===_||_ in n||g(e,_,null,t[_],r);for(_ in n)o&&"function"!=typeof n[_]||"children"===_||"key"===_||"value"===_||"checked"===_||t[_]===n[_]||g(e,_,n[_],t[_],r)}(e,h,d,_,i),s)n.__k=[];else if(y=n.props.children,a(e,Array.isArray(y)?y:[y],n,t,r,_&&"foreignObject"!==v,l,u,e.firstChild,i),null!=l)for(y=l.length;y--;)null!=l[y]&&o(l[y]);i||("value"in h&&void 0!==(y=h.value)&&(y!==e.value||"progress"===v&&!y)&&g(e,"value",y,d.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==e.checked&&g(e,"checked",y,d.checked,!1))}return e}function P(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){W.__e(e,t)}}function A(e,n,t){var r,_,l;if(W.unmount&&W.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||P(r,null,n)),t||"function"==typeof e.type||(t=null!=(_=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){W.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&A(r[l],n,t);null!=_&&o(_)}function T(e,n,t){return this.constructor(e,t)}function E(e,n,t){var r,o,l;W.__&&W.__(e,n),o=(r="function"==typeof t)?null:t&&t.__k||n.__k,l=[],C(n,e=(!r&&t||n).__k=_(i,null,[e]),o||R,R,void 0!==n.ownerSVGElement,!r&&t?[t]:o?null:n.firstChild?H.slice.call(n.childNodes):null,l,!r&&t?t:o?o.__e:n.firstChild,r),x(l,e)}function w(e,n){E(e,n,w)}function D(e,n,t){var o,_,u,i=arguments,c=r({},e.props);for(u in n)"key"==u?o=n[u]:"ref"==u?_=n[u]:c[u]=n[u];if(arguments.length>3)for(t=[t],u=3;u<arguments.length;u++)t.push(i[u]);return null!=t&&(c.children=t),l(e.type,c,o||e.key,_||e.ref,null)}function M(e,n){var t={__c:n="__cC"+j++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,r;return this.getChildContext||(t=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(p)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}t.r(n),t.d(n,"render",(function(){return E})),t.d(n,"hydrate",(function(){return w})),t.d(n,"createElement",(function(){return _})),t.d(n,"h",(function(){return _})),t.d(n,"Fragment",(function(){return i})),t.d(n,"createRef",(function(){return u})),t.d(n,"isValidElement",(function(){return L})),t.d(n,"Component",(function(){return c})),t.d(n,"cloneElement",(function(){return D})),t.d(n,"createContext",(function(){return M})),t.d(n,"toChildArray",(function(){return v})),t.d(n,"options",(function(){return W}));var W,L,U,O,N,j,R={},H=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;W={__e:function(e,n){for(var t,r,o;n=n.__;)if((t=n.__c)&&!t.__)try{if((r=t.constructor)&&null!=r.getDerivedStateFromError&&(t.setState(r.getDerivedStateFromError(e)),o=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),o=t.__d),o)return t.__E=t}catch(n){e=n}throw e},__v:0},L=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},t),this.props)),e&&r(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),p(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),p(this))},c.prototype.render=i,U=[],O="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,d.__r=0,j=0},mdyV:function(e,n,t){"use strict";t.r(n);var r=t("hosL");const{h:o,render:_,hydrate:l}=r,u=e=>e&&e.default?e.default:e,i=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(t.p+"sw-esm.js"),"function"==typeof u(t("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;0,(()=>{let n=u(t("QfWi")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const f={preRenderData:r},s=r.url?i(r.url):"",p=l&&s===i(location.pathname);e=(p?l:_)(o(n,{CLI_DATA:f}),document.body,e)})()}}});
//# sourceMappingURL=bundle.cc252.esm.js.map