// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).resolveParentPath={})}(this,(function(t){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(t,r,e.get),p&&c&&c.call(t,r,e.set),t};var a=e;function s(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(t,r){for(var e=0,n=t.length-1;n>=0;n--){var o=t[n];"."===o?t.splice(n,1):".."===o?(t.splice(n,1),e++):e&&(t.splice(n,1),e--)}if(r)for(;e--;e)t.unshift("..");return t}function y(){for(var t="",r=!1,e=arguments.length-1;e>=-1&&!r;e--){var n=e>=0?arguments[e]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(t=n+"/"+t,r="/"===n.charAt(0))}return(r?"/":"")+(t=p(v(t.split("/"),(function(t){return!!t})),!r).join("/"))||"."}function v(t,r){if(t.filter)return t.filter(r);for(var e=[],n=0;n<t.length;n++)r(t[n],n,t)&&e.push(t[n]);return e}function d(t){return"string"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return b&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;function g(t,r){return null!=t&&m.call(t,r)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var _=h()?function(t){var r,e,n;if(null==t)return w.call(t);e=t[j],r=g(t,j);try{t[j]=void 0}catch(r){return w.call(t)}return n=w.call(t),r?t[j]=e:delete t[j],n}:function(t){return w.call(t)},T=String.prototype.valueOf;var O=h();function E(t){return"object"==typeof t&&(t instanceof String||(O?function(t){try{return T.call(t),!0}catch(t){return!1}}(t):"[object String]"===_(t)))}function S(t){return d(t)||E(t)}s(S,"isPrimitive",d),s(S,"isObject",E);var P=/./;function A(t){return"boolean"==typeof t}var C=Boolean.prototype.toString;var x=h();function B(t){return"object"==typeof t&&(t instanceof Boolean||(x?function(t){try{return C.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function k(t){return A(t)||B(t)}function L(){return new Function("return this;")()}s(k,"isPrimitive",A),s(k,"isObject",B);var M="object"==typeof self?self:null,N="object"==typeof window?window:null,F="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},R="object"==typeof F?F:null;var V=function(t){if(arguments.length){if(!A(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return L()}if(M)return M;if(N)return N;if(R)return R;throw new Error("unexpected error. Unable to resolve global object.")}(),D=V.document&&V.document.childNodes,G=Int8Array;function I(){return/^\s*function\s*([^(]*)/i}var U=/^\s*function\s*([^(]*)/i;s(I,"REGEXP",U);var z=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};function X(t){return null!==t&&"object"==typeof t}function q(t){var r,e,n,o;if(("Object"===(e=_(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=U.exec(n.toString()))return r[1]}return X(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(X,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!z(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(X));var H="function"==typeof P||"object"==typeof G||"function"==typeof D?function(t){return q(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?q(t).toLowerCase():r};function J(t){return"function"===H(t)}function K(){throw new Error("setTimeout has not been defined")}function Q(){throw new Error("clearTimeout has not been defined")}var W=K,Y=Q;function Z(t){if(W===setTimeout)return setTimeout(t,0);if((W===K||!W)&&setTimeout)return W=setTimeout,setTimeout(t,0);try{return W(t,0)}catch(r){try{return W.call(null,t,0)}catch(r){return W.call(this,t,0)}}}"function"==typeof F.setTimeout&&(W=setTimeout),"function"==typeof F.clearTimeout&&(Y=clearTimeout);var $,tt=[],rt=!1,et=-1;function nt(){rt&&$&&(rt=!1,$.length?tt=$.concat(tt):et=-1,tt.length&&ot())}function ot(){if(!rt){var t=Z(nt);rt=!0;for(var r=tt.length;r;){for($=tt,tt=[];++et<r;)$&&$[et].run();et=-1,r=tt.length}$=null,rt=!1,function(t){if(Y===clearTimeout)return clearTimeout(t);if((Y===Q||!Y)&&clearTimeout)return Y=clearTimeout,clearTimeout(t);try{Y(t)}catch(r){try{return Y.call(null,t)}catch(r){return Y.call(this,t)}}}(t)}}function it(t,r){this.fun=t,this.array=r}it.prototype.run=function(){this.fun.apply(null,this.array)};function ut(){}var ct=ut,ft=ut,lt=ut,at=ut,st=ut,pt=ut,yt=ut;var vt=F.performance||{},dt=vt.now||vt.mozNow||vt.msNow||vt.oNow||vt.webkitNow||function(){return(new Date).getTime()};var bt=new Date;var ht={nextTick:function(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];tt.push(new it(t,r)),1!==tt.length||rt||Z(ot)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:ct,addListener:ft,once:lt,off:at,removeListener:st,removeAllListeners:pt,emit:yt,binding:function(t){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(t){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(t){var r=.001*dt.call(vt),e=Math.floor(r),n=Math.floor(r%1*1e9);return t&&(e-=t[0],(n-=t[1])<0&&(e--,n+=1e9)),[e,n]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-bt)/1e3}};function wt(){return ht.cwd()}var mt,gt,jt={};function _t(t,r){mt(t,(function(t){if(2===r.length)return t?r(t,!1):r(null,!0);if(t)return r(!1);return r(!0)}))}function Tt(t){try{gt(t)}catch(t){return!1}return!0}function Ot(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}mt="function"==typeof jt.access?jt.access:jt.stat,gt="function"==typeof jt.accessSync?jt.accessSync:jt.statSync,s(_t,"sync",Tt);var Et,St=Object.getPrototypeOf;Et=J(Object.getPrototypeOf)?St:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===_(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Pt=Et;var At=Object.prototype;function Ct(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!z(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),Pt(t))}(t),!r||!g(t,"constructor")&&g(r,"constructor")&&J(r.constructor)&&"[object Function]"===_(r.constructor)&&g(r,"isPrototypeOf")&&J(r.isPrototypeOf)&&(r===At||function(t){var r;for(r in t)if(!g(t,r))return!1;return!0}(t)))}function xt(t,r){return Ct(r)?g(r,"dir")&&(t.dir=r.dir,!d(t.dir))?new TypeError(Ot("0C72i","dir",t.dir)):null:new TypeError(Ot("0C72h",r))}function Bt(t,r,e){var n,o,i,u,c,f;if(!d(t))throw new TypeError(Ot("0C73R",t));if(i={},arguments.length>2){if(u=e,f=xt(i,r))throw f}else u=r;if(!J(u))throw new TypeError(Ot("0C72n",u));function l(r,e){return e?u(null,n):(o=c,c=y(c,".."),o===c?u(null,null):void _t(n=y(c,t),l))}c=i.dir?y(wt(),i.dir):wt(),_t(n=y(c,t),l)}function kt(t,r){var e,n,o,i,u;if(!d(t))throw new TypeError(Ot("0C73R",t));if(o={},arguments.length>1&&(u=xt(o,r)))throw u;for(i=o.dir?y(wt(),o.dir):wt();n!==i;){if(Tt(e=y(i,t)))return e;n=i,i=y(i,"..")}return null}s(Bt,"sync",kt),t.default=Bt,t.sync=kt,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=browser.js.map
