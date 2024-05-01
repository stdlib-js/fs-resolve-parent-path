// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).resolveParentPath=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,b=/(\..*[^0])0*e/;function w(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":u(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=l.call(n,b,"$1e"),n=l.call(n,y,"e"),n=l.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,g,"e-0$1"),e.alternate&&(n=l.call(n,h,"$1."),n=l.call(n,d,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):s.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var j=String.fromCharCode,_=isNaN,T=Array.isArray;function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,i,a,u,s,f,l,p,g,h,d;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",s=1,f=0;f<e.length;f++)if(n=e[f],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,_(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,d=void 0,(d=g-p.length)<0?p:p=h?p+m(d):m(d)+p)),u+=n.arg||"",s+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function x(e){var r,t,n,o;for(t=[],o=0,n=S.exec(e);n;)(r=e.slice(o,S.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),o=S.lastIndex,n=S.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function A(e){var r,t;if("string"!=typeof e)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[x(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return O.apply(null,r)}var P,F=Object.prototype,V=F.toString,L=F.__defineGetter__,$=F.__defineSetter__,C=F.__lookupGetter__,I=F.__lookupSetter__;P=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(C.call(e,r)||I.call(e,r)?(n=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(e,r,t.get),a&&$&&$.call(e,r,t.set),e};var R=P;function M(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function z(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}function B(e,r){for(var t=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(r)for(;t--;t)e.unshift("..");return e}var N=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,G=function(e){return N.exec(e).slice(1)};function W(){for(var e="",r=!1,t=arguments.length-1;t>=-1&&!r;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(e=n+"/"+e,r="/"===n.charAt(0))}return(r?"/":"")+(e=B(Q(e.split("/"),(function(e){return!!e})),!r).join("/"))||"."}function Z(e){var r=D(e),t="/"===Y(e,-1);return(e=B(Q(e.split("/"),(function(e){return!!e})),!r).join("/"))||r||(e="."),e&&t&&(e+="/"),(r?"/":"")+e}function D(e){return"/"===e.charAt(0)}function U(){return Z(Q(Array.prototype.slice.call(arguments,0),(function(e,r){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))}function X(e,r){function t(e){for(var r=0;r<e.length&&""===e[r];r++);for(var t=e.length-1;t>=0&&""===e[t];t--);return r>t?[]:e.slice(r,t-r+1)}e=W(e).substr(1),r=W(r).substr(1);for(var n=t(e.split("/")),o=t(r.split("/")),i=Math.min(n.length,o.length),a=i,c=0;c<i;c++)if(n[c]!==o[c]){a=c;break}var u=[];for(c=a;c<n.length;c++)u.push("..");return(u=u.concat(o.slice(a))).join("/")}function q(e){var r=G(e),t=r[0],n=r[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function H(e,r){var t=G(e)[2];return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t}function J(e){return G(e)[3]}var K={extname:J,basename:H,dirname:q,sep:"/",delimiter:":",relative:X,join:U,isAbsolute:D,normalize:Z,resolve:W};function Q(e,r){if(e.filter)return e.filter(r);for(var t=[],n=0;n<e.length;n++)r(e[n],n,e)&&t.push(e[n]);return t}var Y="b"==="ab".substr(-1)?function(e,r,t){return e.substr(r,t)}:function(e,r,t){return r<0&&(r=e.length+r),e.substr(r,t)},ee=z(Object.freeze({__proto__:null,basename:H,default:K,delimiter:":",dirname:q,extname:J,isAbsolute:D,join:U,normalize:Z,relative:X,resolve:W,sep:"/"}));function re(e){return"string"==typeof e}var te="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function ne(){return te&&"symbol"==typeof Symbol.toStringTag}var oe=Object.prototype.toString;var ie=Object.prototype.hasOwnProperty;function ae(e,r){return null!=e&&ie.call(e,r)}var ce="function"==typeof Symbol?Symbol:void 0,ue="function"==typeof ce?ce.toStringTag:"";var se=ne()?function(e){var r,t,n;if(null==e)return oe.call(e);t=e[ue],r=ae(e,ue);try{e[ue]=void 0}catch(r){return oe.call(e)}return n=oe.call(e),r?e[ue]=t:delete e[ue],n}:function(e){return oe.call(e)},fe=String.prototype.valueOf;var le=ne();function pe(e){return"object"==typeof e&&(e instanceof String||(le?function(e){try{return fe.call(e),!0}catch(e){return!1}}(e):"[object String]"===se(e)))}function ge(e){return re(e)||pe(e)}M(ge,"isPrimitive",re),M(ge,"isObject",pe);var he=/./;function de(e){return"boolean"==typeof e}var ve=Boolean,ye=Boolean.prototype.toString;var be=ne();function we(e){return"object"==typeof e&&(e instanceof ve||(be?function(e){try{return ye.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===se(e)))}function me(e){return de(e)||we(e)}M(me,"isPrimitive",de),M(me,"isObject",we);var je="object"==typeof self?self:null,_e="object"==typeof window?window:null,Te="object"==typeof globalThis?globalThis:null;var Ee=function(e){if(arguments.length){if(!de(e))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(Te)return Te;if(je)return je;if(_e)return _e;throw new Error("unexpected error. Unable to resolve global object.")}(),Oe=Ee.document&&Ee.document.childNodes,Se=Int8Array;function ke(){return/^\s*function\s*([^(]*)/i}var xe=/^\s*function\s*([^(]*)/i;M(ke,"REGEXP",xe);var Ae=Array.isArray?Array.isArray:function(e){return"[object Array]"===se(e)};function Pe(e){return null!==e&&"object"==typeof e}function Fe(e){var r,t,n,o;if(("Object"===(t=se(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=xe.exec(n.toString()))return r[1]}return Pe(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}M(Pe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Ae(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Pe));var Ve="function"==typeof he||"object"==typeof Se||"function"==typeof Oe?function(e){return Fe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Fe(e).toLowerCase():r};function Le(e){return"function"===Ve(e)}var $e="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function Ce(){throw new Error("setTimeout has not been defined")}function Ie(){throw new Error("clearTimeout has not been defined")}var Re=Ce,Me=Ie;function ze(e){if(Re===setTimeout)return setTimeout(e,0);if((Re===Ce||!Re)&&setTimeout)return Re=setTimeout,setTimeout(e,0);try{return Re(e,0)}catch(r){try{return Re.call(null,e,0)}catch(r){return Re.call(this,e,0)}}}"function"==typeof $e.setTimeout&&(Re=setTimeout),"function"==typeof $e.clearTimeout&&(Me=clearTimeout);var Be,Ne=[],Ge=!1,We=-1;function Ze(){Ge&&Be&&(Ge=!1,Be.length?Ne=Be.concat(Ne):We=-1,Ne.length&&De())}function De(){if(!Ge){var e=ze(Ze);Ge=!0;for(var r=Ne.length;r;){for(Be=Ne,Ne=[];++We<r;)Be&&Be[We].run();We=-1,r=Ne.length}Be=null,Ge=!1,function(e){if(Me===clearTimeout)return clearTimeout(e);if((Me===Ie||!Me)&&clearTimeout)return Me=clearTimeout,clearTimeout(e);try{return Me(e)}catch(r){try{return Me.call(null,e)}catch(r){return Me.call(this,e)}}}(e)}}function Ue(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];Ne.push(new Xe(e,r)),1!==Ne.length||Ge||ze(De)}function Xe(e,r){this.fun=e,this.array=r}Xe.prototype.run=function(){this.fun.apply(null,this.array)};var qe="browser",He="browser",Je={},Ke=[],Qe={},Ye={},er={};function rr(){}var tr=rr,nr=rr,or=rr,ir=rr,ar=rr,cr=rr,ur=rr;function sr(e){throw new Error("process.binding is not supported")}function fr(){return"/"}function lr(e){throw new Error("process.chdir is not supported")}function pr(){return 0}var gr=$e.performance||{},hr=gr.now||gr.mozNow||gr.msNow||gr.oNow||gr.webkitNow||function(){return(new Date).getTime()};function dr(e){var r=.001*hr.call(gr),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var vr=new Date;function yr(){return(new Date-vr)/1e3}var br={nextTick:Ue,title:qe,browser:true,env:Je,argv:Ke,version:"",versions:Qe,on:tr,addListener:nr,once:or,off:ir,removeListener:ar,removeAllListeners:cr,emit:ur,binding:sr,cwd:fr,chdir:lr,umask:pr,hrtime:dr,platform:He,release:Ye,config:er,uptime:yr},wr=z(Object.freeze({__proto__:null,addListener:nr,argv:Ke,binding:sr,browser:true,chdir:lr,config:er,cwd:fr,default:br,emit:ur,env:Je,hrtime:dr,nextTick:Ue,off:ir,on:tr,once:or,platform:He,release:Ye,removeAllListeners:cr,removeListener:ar,title:qe,umask:pr,uptime:yr,version:"",versions:Qe}));function mr(){return wr.cwd()}var jr,_r=z(Object.freeze({__proto__:null,default:{}})),Tr=_r;function Er(e,r){jr(e,(function(e){if(2===r.length)return e?r(e,!1):r(null,!0);if(e)return r(!1);return r(!0)}))}jr="function"==typeof Tr.access?Tr.access:Tr.stat;var Or,Sr=_r;function kr(e){try{Or(e)}catch(e){return!1}return!0}function xr(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}Or="function"==typeof Sr.accessSync?Sr.accessSync:Sr.statSync,M(Er,"sync",kr);var Ar,Pr=Object,Fr=Object.getPrototypeOf;Ar=Le(Object.getPrototypeOf)?Fr:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===se(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Vr=Ar;var Lr=Object.prototype;function $r(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!Ae(e)}(e)&&(r=function(e){return null==e?null:(e=Pr(e),Vr(e))}(e),!r||!ae(e,"constructor")&&ae(r,"constructor")&&Le(r.constructor)&&"[object Function]"===se(r.constructor)&&ae(r,"isPrototypeOf")&&Le(r.isPrototypeOf)&&(r===Lr||function(e){var r;for(r in e)if(!ae(e,r))return!1;return!0}(e)))}function Cr(e,r){return $r(r)?ae(r,"dir")&&(e.dir=r.dir,!re(e.dir))?new TypeError(xr("0OP2W","dir",e.dir)):null:new TypeError(xr("0OP2V",r))}var Ir=ee.resolve;function Rr(e,r,t){var n,o,i,a,c,u;if(!re(e))throw new TypeError(xr("0OP3F",e));if(i={},arguments.length>2){if(a=t,u=Cr(i,r))throw u}else a=r;if(!Le(a))throw new TypeError(xr("0OP2b",a));c=i.dir?Ir(mr(),i.dir):mr(),Er(n=Ir(c,e),(function r(t,i){if(i)return a(null,n);if(o=c,c=Ir(c,".."),o===c)return a(null,null);Er(n=Ir(c,e),r)}))}var Mr=ee.resolve;return M(Rr,"sync",(function(e,r){var t,n,o,i,a;if(!re(e))throw new TypeError(xr("0OP3F",e));if(o={},arguments.length>1&&(a=Cr(o,r)))throw a;for(i=o.dir?Mr(mr(),o.dir):mr();n!==i;){if(kr(t=Mr(i,e)))return t;n=i,i=Mr(i,"..")}return null})),Rr}));
//# sourceMappingURL=browser.js.map