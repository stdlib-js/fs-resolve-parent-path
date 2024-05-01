// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path"),require("process"),require("fs")):"function"==typeof define&&define.amd?define(["path","process","fs"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).resolveParentPath=e(r.require$$0$2,r.require$$0,r.require$$0$1)}(this,(function(r,e,t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var i=Object.defineProperty;function o(r){return"number"==typeof r}function a(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function c(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+a(i):a(i)+r,n&&(r="-"+r)),r}var u=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function f(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=c(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=c(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===s.call(r.specifier)?s.call(t):u.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var l=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,d=String.prototype.replace,y=/e\+(\d)$/,h=/e-(\d)$/,b=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,m=/\.0*e/,j=/(\..*[^0])0*e/;function _(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!o(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":l(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=d.call(t,j,"$1e"),t=d.call(t,m,"e"),t=d.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=d.call(t,y,"e+0$1"),t=d.call(t,h,"e-0$1"),r.alternate&&(t=d.call(t,b,"$1."),t=d.call(t,v,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===g.call(r.specifier)?g.call(t):p.call(t)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var O=String.fromCharCode,S=isNaN,x=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function P(r){var e,t,n,i,o,a,u,s,l,p,g,d,y;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,S(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):O(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+E(y):E(y)+p)),a+=n.arg||"",u+=1}return a}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=k.exec(r);n;)(e=r.slice(i,k.lastIndex-n[0].length)).length&&t.push(e),t.push($(n)),i=k.lastIndex,n=k.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return P.apply(null,e)}var V,C=Object.prototype,I=C.toString,R=C.__defineGetter__,B=C.__defineSetter__,q=C.__lookupGetter__,L=C.__lookupSetter__;V=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?i:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(q.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var G=V;function W(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(r){return"string"==typeof r}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return U&&"symbol"==typeof Symbol.toStringTag}var N=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&X.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=M()?function(r){var e,t,n;if(null==r)return N.call(r);t=r[H],e=z(r,H);try{r[H]=void 0}catch(e){return N.call(r)}return n=N.call(r),e?r[H]=t:delete r[H],n}:function(r){return N.call(r)},K=String.prototype.valueOf;var Q=M();function Y(r){return"object"==typeof r&&(r instanceof String||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function rr(r){return Z(r)||Y(r)}W(rr,"isPrimitive",Z),W(rr,"isObject",Y);var er=/./;function tr(r){return"boolean"==typeof r}var nr=Boolean,ir=Boolean.prototype.toString;var or=M();function ar(r){return"object"==typeof r&&(r instanceof nr||(or?function(r){try{return ir.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function cr(r){return tr(r)||ar(r)}W(cr,"isPrimitive",tr),W(cr,"isObject",ar);var ur="object"==typeof self?self:null,sr="object"==typeof window?window:null,fr="object"==typeof global?global:null,lr="object"==typeof globalThis?globalThis:null;var pr=function(r){if(arguments.length){if(!tr(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(lr)return lr;if(ur)return ur;if(sr)return sr;if(fr)return fr;throw new Error("unexpected error. Unable to resolve global object.")}(),gr=pr.document&&pr.document.childNodes,dr=Int8Array;function yr(){return/^\s*function\s*([^(]*)/i}var hr=/^\s*function\s*([^(]*)/i;W(yr,"REGEXP",hr);var br=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function vr(r){return null!==r&&"object"==typeof r}function wr(r){var e,t,n,i;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=hr.exec(n.toString()))return e[1]}return vr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!br(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(vr));var mr="function"==typeof er||"object"==typeof dr||"function"==typeof gr?function(r){return wr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?wr(r).toLowerCase():e};function jr(r){return"function"===mr(r)}var _r=e;function Er(){return _r.cwd()}var Or,Sr=t;function xr(r,e){Or(r,(function(r){if(2===e.length)return r?e(r,!1):e(null,!0);if(r)return e(!1);return e(!0)}))}Or="function"==typeof Sr.access?Sr.access:Sr.stat;var Tr,Pr=t;function kr(r){try{Tr(r)}catch(r){return!1}return!0}function $r(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}Tr="function"==typeof Pr.accessSync?Pr.accessSync:Pr.statSync,W(xr,"sync",kr);var Ar,Fr=Object,Vr=Object.getPrototypeOf;Ar=jr(Object.getPrototypeOf)?Vr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Cr=Ar;var Ir=Object.prototype;function Rr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!br(r)}(r)&&(e=function(r){return null==r?null:(r=Fr(r),Cr(r))}(r),!e||!z(r,"constructor")&&z(e,"constructor")&&jr(e.constructor)&&"[object Function]"===J(e.constructor)&&z(e,"isPrototypeOf")&&jr(e.isPrototypeOf)&&(e===Ir||function(r){var e;for(e in r)if(!z(r,e))return!1;return!0}(r)))}function Br(r,e){return Rr(e)?z(e,"dir")&&(r.dir=e.dir,!Z(r.dir))?new TypeError($r("0OP2W","dir",r.dir)):null:new TypeError($r("0OP2V",e))}var qr=r.resolve;function Lr(r,e,t){var n,i,o,a,c,u;if(!Z(r))throw new TypeError($r("0OP3F",r));if(o={},arguments.length>2){if(a=t,u=Br(o,e))throw u}else a=e;if(!jr(a))throw new TypeError($r("0OP2b",a));c=o.dir?qr(Er(),o.dir):Er(),xr(n=qr(c,r),(function e(t,o){if(o)return a(null,n);if(i=c,c=qr(c,".."),i===c)return a(null,null);xr(n=qr(c,r),e)}))}var Gr=r.resolve;return W(Lr,"sync",(function(r,e){var t,n,i,o,a;if(!Z(r))throw new TypeError($r("0OP3F",r));if(i={},arguments.length>1&&(a=Br(i,e)))throw a;for(o=i.dir?Gr(Er(),i.dir):Er();n!==o;){if(kr(t=Gr(o,r)))return t;n=o,o=Gr(o,"..")}return null})),Lr}));
//# sourceMappingURL=index.js.map