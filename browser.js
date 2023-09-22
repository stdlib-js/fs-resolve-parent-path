// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).resolveParentPath=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,v=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,b,"e"),n=p.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,v,"$1."),n=p.call(n,h,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var T=String.fromCharCode,O=isNaN,S=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,a,l,f,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,s=0;s<r.length;s++)if(u(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,o;for(t=[],o=0,n=k.exec(r);n;)(e=r.slice(o,k.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),o=k.lastIndex,n=k.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function F(r){return"string"==typeof r}function V(r){var e,t,n;if(!F(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return x.apply(null,t)}var L,$=Object.prototype,C=$.toString,I=$.__defineGetter__,M=$.__defineSetter__,R=$.__lookupGetter__,z=$.__lookupSetter__;L=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(r,e)||z.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(r,e,t.get),a&&M&&M.call(r,e,t.set),r};var B=L;function G(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function N(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function D(r,e){for(var t=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var W=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,Z=function(r){return W.exec(r).slice(1)};function U(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=D(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function X(r){var e=J(r),t="/"===tr(r,-1);return(r=D(er(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function J(r){return"/"===r.charAt(0)}function q(){var r=Array.prototype.slice.call(arguments,0);return X(er(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function H(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=U(r).substr(1),e=U(e).substr(1);for(var n=t(r.split("/")),o=t(e.split("/")),i=Math.min(n.length,o.length),a=i,c=0;c<i;c++)if(n[c]!==o[c]){a=c;break}var u=[];for(c=a;c<n.length;c++)u.push("..");return(u=u.concat(o.slice(a))).join("/")}function K(r){var e=Z(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function Q(r,e){var t=Z(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function Y(r){return Z(r)[3]}var rr={extname:Y,basename:Q,dirname:K,sep:"/",delimiter:":",relative:H,join:q,isAbsolute:J,normalize:X,resolve:U};function er(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var tr="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},nr=N(Object.freeze({__proto__:null,basename:Q,default:rr,delimiter:":",dirname:K,extname:Y,isAbsolute:J,join:q,normalize:X,relative:H,resolve:U,sep:"/"}));function or(r){return"string"==typeof r}var ir="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function ar(){return ir&&"symbol"==typeof Symbol.toStringTag}var cr=Object.prototype.toString;var ur=Object.prototype.hasOwnProperty;function lr(r,e){return null!=r&&ur.call(r,e)}var fr="function"==typeof Symbol?Symbol:void 0,sr="function"==typeof fr?fr.toStringTag:"";var pr=ar()?function(r){var e,t,n;if(null==r)return cr.call(r);t=r[sr],e=lr(r,sr);try{r[sr]=void 0}catch(e){return cr.call(r)}return n=cr.call(r),e?r[sr]=t:delete r[sr],n}:function(r){return cr.call(r)},gr=String.prototype.valueOf;var dr=ar();function vr(r){return"object"==typeof r&&(r instanceof String||(dr?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object String]"===pr(r)))}function hr(r){return or(r)||vr(r)}G(hr,"isPrimitive",or),G(hr,"isObject",vr);var yr=/./;function br(r){return"boolean"==typeof r}var wr=Object.prototype.toString;var mr="function"==typeof fr?fr.toStringTag:"";var jr=ar()?function(r){var e,t,n;if(null==r)return wr.call(r);t=r[mr],e=lr(r,mr);try{r[mr]=void 0}catch(e){return wr.call(r)}return n=wr.call(r),e?r[mr]=t:delete r[mr],n}:function(r){return wr.call(r)},_r=Boolean,Tr=Boolean.prototype.toString;var Or=ar();function Sr(r){return"object"==typeof r&&(r instanceof _r||(Or?function(r){try{return Tr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===jr(r)))}function Er(r){return br(r)||Sr(r)}function xr(){return new Function("return this;")()}G(Er,"isPrimitive",br),G(Er,"isObject",Sr);var kr="object"==typeof self?self:null,Ar="object"==typeof window?window:null,Pr="object"==typeof globalThis?globalThis:null;var Fr=function(r){if(arguments.length){if(!br(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return xr()}if(Pr)return Pr;if(kr)return kr;if(Ar)return Ar;throw new Error("unexpected error. Unable to resolve global object.")}(),Vr=Fr.document&&Fr.document.childNodes,Lr=Int8Array;var $r=Object.prototype.toString;var Cr="function"==typeof fr?fr.toStringTag:"";var Ir=ar()?function(r){var e,t,n;if(null==r)return $r.call(r);t=r[Cr],e=lr(r,Cr);try{r[Cr]=void 0}catch(e){return $r.call(r)}return n=$r.call(r),e?r[Cr]=t:delete r[Cr],n}:function(r){return $r.call(r)};function Mr(){return/^\s*function\s*([^(]*)/i}var Rr=/^\s*function\s*([^(]*)/i;G(Mr,"REGEXP",Rr);var zr=Object.prototype.toString;var Br="function"==typeof fr?fr.toStringTag:"";var Gr=ar()?function(r){var e,t,n;if(null==r)return zr.call(r);t=r[Br],e=lr(r,Br);try{r[Br]=void 0}catch(e){return zr.call(r)}return n=zr.call(r),e?r[Br]=t:delete r[Br],n}:function(r){return zr.call(r)};var Nr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Gr(r)};function Dr(r){return null!==r&&"object"==typeof r}function Wr(r){var e,t,n,o;if(("Object"===(t=Ir(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Rr.exec(n.toString()))return e[1]}return Dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}G(Dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Nr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Dr));var Zr="function"==typeof yr||"object"==typeof Lr||"function"==typeof Vr?function(r){return Wr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Wr(r).toLowerCase():e};function Ur(r){return"function"===Zr(r)}var Xr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function Jr(){throw new Error("setTimeout has not been defined")}function qr(){throw new Error("clearTimeout has not been defined")}var Hr=Jr,Kr=qr;function Qr(r){if(Hr===setTimeout)return setTimeout(r,0);if((Hr===Jr||!Hr)&&setTimeout)return Hr=setTimeout,setTimeout(r,0);try{return Hr(r,0)}catch(e){try{return Hr.call(null,r,0)}catch(e){return Hr.call(this,r,0)}}}"function"==typeof Xr.setTimeout&&(Hr=setTimeout),"function"==typeof Xr.clearTimeout&&(Kr=clearTimeout);var Yr,re=[],ee=!1,te=-1;function ne(){ee&&Yr&&(ee=!1,Yr.length?re=Yr.concat(re):te=-1,re.length&&oe())}function oe(){if(!ee){var r=Qr(ne);ee=!0;for(var e=re.length;e;){for(Yr=re,re=[];++te<e;)Yr&&Yr[te].run();te=-1,e=re.length}Yr=null,ee=!1,function(r){if(Kr===clearTimeout)return clearTimeout(r);if((Kr===qr||!Kr)&&clearTimeout)return Kr=clearTimeout,clearTimeout(r);try{Kr(r)}catch(e){try{return Kr.call(null,r)}catch(e){return Kr.call(this,r)}}}(r)}}function ie(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];re.push(new ae(r,e)),1!==re.length||ee||Qr(oe)}function ae(r,e){this.fun=r,this.array=e}ae.prototype.run=function(){this.fun.apply(null,this.array)};var ce="browser",ue="browser",le={},fe=[],se={},pe={},ge={};function de(){}var ve=de,he=de,ye=de,be=de,we=de,me=de,je=de;function _e(r){throw new Error("process.binding is not supported")}function Te(){return"/"}function Oe(r){throw new Error("process.chdir is not supported")}function Se(){return 0}var Ee=Xr.performance||{},xe=Ee.now||Ee.mozNow||Ee.msNow||Ee.oNow||Ee.webkitNow||function(){return(new Date).getTime()};function ke(r){var e=.001*xe.call(Ee),t=Math.floor(e),n=Math.floor(e%1*1e9);return r&&(t-=r[0],(n-=r[1])<0&&(t--,n+=1e9)),[t,n]}var Ae=new Date;function Pe(){return(new Date-Ae)/1e3}var Fe={nextTick:ie,title:ce,browser:true,env:le,argv:fe,version:"",versions:se,on:ve,addListener:he,once:ye,off:be,removeListener:we,removeAllListeners:me,emit:je,binding:_e,cwd:Te,chdir:Oe,umask:Se,hrtime:ke,platform:ue,release:pe,config:ge,uptime:Pe},Ve=N(Object.freeze({__proto__:null,addListener:he,argv:fe,binding:_e,browser:true,chdir:Oe,config:ge,cwd:Te,default:Fe,emit:je,env:le,hrtime:ke,nextTick:ie,off:be,on:ve,once:ye,platform:ue,release:pe,removeAllListeners:me,removeListener:we,title:ce,umask:Se,uptime:Pe,version:"",versions:se}));function Le(){return Ve.cwd()}var $e,Ce=N(Object.freeze({__proto__:null,default:{}})),Ie=Ce;function Me(r,e){$e(r,(function(r){if(2===e.length)return r?e(r,!1):e(null,!0);if(r)return e(!1);return e(!0)}))}$e="function"==typeof Ie.access?Ie.access:Ie.stat;var Re,ze=Ce;function Be(r){try{Re(r)}catch(r){return!1}return!0}function Ge(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}Re="function"==typeof ze.accessSync?ze.accessSync:ze.statSync,G(Me,"sync",Be);var Ne=Object,De=Object.getPrototypeOf,We=Object.prototype.toString;var Ze="function"==typeof fr?fr.toStringTag:"";var Ue,Xe=ar()?function(r){var e,t,n;if(null==r)return We.call(r);t=r[Ze],e=lr(r,Ze);try{r[Ze]=void 0}catch(e){return We.call(r)}return n=We.call(r),e?r[Ze]=t:delete r[Ze],n}:function(r){return We.call(r)};Ue=Ur(Object.getPrototypeOf)?De:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Xe(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Je=Ue;var qe=Object.prototype.toString;var He="function"==typeof fr?fr.toStringTag:"";var Ke=ar()?function(r){var e,t,n;if(null==r)return qe.call(r);t=r[He],e=lr(r,He);try{r[He]=void 0}catch(e){return qe.call(r)}return n=qe.call(r),e?r[He]=t:delete r[He],n}:function(r){return qe.call(r)},Qe=Object.prototype;function Ye(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Nr(r)}(r)&&(e=function(r){return null==r?null:(r=Ne(r),Je(r))}(r),!e||!lr(r,"constructor")&&lr(e,"constructor")&&Ur(e.constructor)&&"[object Function]"===Ke(e.constructor)&&lr(e,"isPrototypeOf")&&Ur(e.isPrototypeOf)&&(e===Qe||function(r){var e;for(e in r)if(!lr(r,e))return!1;return!0}(r)))}function rt(r,e){return Ye(e)?lr(e,"dir")&&(r.dir=e.dir,!or(r.dir))?new TypeError(Ge("0OP2W,Gh","dir",r.dir)):null:new TypeError(Ge("0OP2V,FD",e))}var et=nr.resolve;function tt(r,e,t){var n,o,i,a,c,u;if(!or(r))throw new TypeError(Ge("0OP3F,Ex",r));if(i={},arguments.length>2){if(a=t,u=rt(i,e))throw u}else a=e;if(!Ur(a))throw new TypeError(Ge("0OP2b,GJ",a));function l(e,t){return t?a(null,n):(o=c,c=et(c,".."),o===c?a(null,null):void Me(n=et(c,r),l))}c=i.dir?et(Le(),i.dir):Le(),Me(n=et(c,r),l)}var nt=nr.resolve;return G(tt,"sync",(function(r,e){var t,n,o,i,a;if(!or(r))throw new TypeError(Ge("0OP3F,Ex",r));if(o={},arguments.length>1&&(a=rt(o,e)))throw a;for(i=o.dir?nt(Le(),o.dir):Le();n!==i;){if(Be(t=nt(i,r)))return t;n=i,i=nt(i,"..")}return null})),tt}));
//# sourceMappingURL=browser.js.map
