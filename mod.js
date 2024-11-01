// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,y=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":u(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=f.call(n,b,"$1e"),n=f.call(n,y,"e"),n=f.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),r.alternate&&(n=f.call(n,h,"$1."),n=f.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function T(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,a,u,s,l,f,p,g,h,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",s=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,T(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,d=void 0,(d=g-p.length)<0?p:p=h?p+m(d):m(d)+p)),u+=n.arg||"",s+=1}return u}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,o;for(t=[],o=0,n=S.exec(r);n;)(e=r.slice(o,S.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),o=S.lastIndex,n=S.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function A(r){var e,t;if("string"!=typeof r)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var P,F=Object.prototype,V=F.toString,L=F.__defineGetter__,$=F.__defineSetter__,C=F.__lookupGetter__,I=F.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(C.call(r,e)||I.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(r,e,t.get),a&&$&&$.call(r,e,t.set),r};var R=P;function M(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function z(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function B(r,e){for(var t=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var G=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,N=function(r){return G.exec(r).slice(1)};function W(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=B(Q(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function Z(r){var e=D(r),t="/"===Y(r,-1);return(r=B(Q(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function D(r){return"/"===r.charAt(0)}function U(){return Z(Q(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function X(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=W(r).substr(1),e=W(e).substr(1);for(var n=t(r.split("/")),o=t(e.split("/")),i=Math.min(n.length,o.length),a=i,c=0;c<i;c++)if(n[c]!==o[c]){a=c;break}var u=[];for(c=a;c<n.length;c++)u.push("..");return(u=u.concat(o.slice(a))).join("/")}function q(r){var e=N(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function H(r,e){var t=N(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function J(r){return N(r)[3]}var K={extname:J,basename:H,dirname:q,sep:"/",delimiter:":",relative:X,join:U,isAbsolute:D,normalize:Z,resolve:W};function Q(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var Y="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},rr=z(Object.freeze({__proto__:null,basename:H,default:K,delimiter:":",dirname:q,extname:J,isAbsolute:D,join:U,normalize:Z,relative:X,resolve:W,sep:"/"}));function er(r){return"string"==typeof r}var tr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function nr(){return tr&&"symbol"==typeof Symbol.toStringTag}var or=Object.prototype.toString;var ir=Object.prototype.hasOwnProperty;function ar(r,e){return null!=r&&ir.call(r,e)}var cr="function"==typeof Symbol?Symbol:void 0,ur="function"==typeof cr?cr.toStringTag:"";var sr=nr()?function(r){var e,t,n;if(null==r)return or.call(r);t=r[ur],e=ar(r,ur);try{r[ur]=void 0}catch(e){return or.call(r)}return n=or.call(r),e?r[ur]=t:delete r[ur],n}:function(r){return or.call(r)},lr=String.prototype.valueOf;var fr=nr();function pr(r){return"object"==typeof r&&(r instanceof String||(fr?function(r){try{return lr.call(r),!0}catch(r){return!1}}(r):"[object String]"===sr(r)))}function gr(r){return er(r)||pr(r)}M(gr,"isPrimitive",er),M(gr,"isObject",pr);var hr=/./;function dr(r){return"boolean"==typeof r}var vr=Boolean,yr=Boolean.prototype.toString;var br=nr();function wr(r){return"object"==typeof r&&(r instanceof vr||(br?function(r){try{return yr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===sr(r)))}function mr(r){return dr(r)||wr(r)}M(mr,"isPrimitive",dr),M(mr,"isObject",wr);var jr="object"==typeof self?self:null,_r="object"==typeof window?window:null,Tr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Er="object"==typeof Tr?Tr:null,Or="object"==typeof globalThis?globalThis:null;var Sr=function(r){if(arguments.length){if(!dr(r))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Or)return Or;if(jr)return jr;if(_r)return _r;if(Er)return Er;throw new Error("unexpected error. Unable to resolve global object.")}(),kr=Sr.document&&Sr.document.childNodes,xr=Int8Array;function Ar(){return/^\s*function\s*([^(]*)/i}var Pr=/^\s*function\s*([^(]*)/i;M(Ar,"REGEXP",Pr);var Fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===sr(r)};function Vr(r){return null!==r&&"object"==typeof r}function Lr(r){var e,t,n,o;if(("Object"===(t=sr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Pr.exec(n.toString()))return e[1]}return Vr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}M(Vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Fr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Vr));var $r="function"==typeof hr||"object"==typeof xr||"function"==typeof kr?function(r){return Lr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Lr(r).toLowerCase():e};function Cr(r){return"function"===$r(r)}function Ir(){throw new Error("setTimeout has not been defined")}function Rr(){throw new Error("clearTimeout has not been defined")}var Mr=Ir,zr=Rr;function Br(r){if(Mr===setTimeout)return setTimeout(r,0);if((Mr===Ir||!Mr)&&setTimeout)return Mr=setTimeout,setTimeout(r,0);try{return Mr(r,0)}catch(e){try{return Mr.call(null,r,0)}catch(e){return Mr.call(this,r,0)}}}"function"==typeof Tr.setTimeout&&(Mr=setTimeout),"function"==typeof Tr.clearTimeout&&(zr=clearTimeout);var Gr,Nr=[],Wr=!1,Zr=-1;function Dr(){Wr&&Gr&&(Wr=!1,Gr.length?Nr=Gr.concat(Nr):Zr=-1,Nr.length&&Ur())}function Ur(){if(!Wr){var r=Br(Dr);Wr=!0;for(var e=Nr.length;e;){for(Gr=Nr,Nr=[];++Zr<e;)Gr&&Gr[Zr].run();Zr=-1,e=Nr.length}Gr=null,Wr=!1,function(r){if(zr===clearTimeout)return clearTimeout(r);if((zr===Rr||!zr)&&clearTimeout)return zr=clearTimeout,clearTimeout(r);try{return zr(r)}catch(e){try{return zr.call(null,r)}catch(e){return zr.call(this,r)}}}(r)}}function Xr(r){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];Nr.push(new qr(r,e)),1!==Nr.length||Wr||Br(Ur)}function qr(r,e){this.fun=r,this.array=e}qr.prototype.run=function(){this.fun.apply(null,this.array)};var Hr="browser",Jr="browser",Kr={},Qr=[],Yr={},re={},ee={};function te(){}var ne=te,oe=te,ie=te,ae=te,ce=te,ue=te,se=te;function le(r){throw new Error("process.binding is not supported")}function fe(){return"/"}function pe(r){throw new Error("process.chdir is not supported")}function ge(){return 0}var he=Tr.performance||{},de=he.now||he.mozNow||he.msNow||he.oNow||he.webkitNow||function(){return(new Date).getTime()};function ve(r){var e=.001*de.call(he),t=Math.floor(e),n=Math.floor(e%1*1e9);return r&&(t-=r[0],(n-=r[1])<0&&(t--,n+=1e9)),[t,n]}var ye=new Date;function be(){return(new Date-ye)/1e3}var we={nextTick:Xr,title:Hr,browser:true,env:Kr,argv:Qr,version:"",versions:Yr,on:ne,addListener:oe,once:ie,off:ae,removeListener:ce,removeAllListeners:ue,emit:se,binding:le,cwd:fe,chdir:pe,umask:ge,hrtime:ve,platform:Jr,release:re,config:ee,uptime:be},me=z(Object.freeze({__proto__:null,addListener:oe,argv:Qr,binding:le,browser:true,chdir:pe,config:ee,cwd:fe,default:we,emit:se,env:Kr,hrtime:ve,nextTick:Xr,off:ae,on:ne,once:ie,platform:Jr,release:re,removeAllListeners:ue,removeListener:ce,title:Hr,umask:ge,uptime:be,version:"",versions:Yr}));function je(){return me.cwd()}var _e,Te=z(Object.freeze({__proto__:null,default:{}})),Ee=Te;function Oe(r,e){_e(r,(function(r){if(2===e.length)return r?e(r,!1):e(null,!0);if(r)return e(!1);return e(!0)}))}_e="function"==typeof Ee.access?Ee.access:Ee.stat;var Se,ke=Te;function xe(r){try{Se(r)}catch(r){return!1}return!0}function Ae(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}Se="function"==typeof ke.accessSync?ke.accessSync:ke.statSync,M(Oe,"sync",xe);var Pe,Fe=Object,Ve=Object.getPrototypeOf;Pe=Cr(Object.getPrototypeOf)?Ve:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===sr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Le=Pe;var $e=Object.prototype;function Ce(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Fr(r)}(r)&&(e=function(r){return null==r?null:(r=Fe(r),Le(r))}(r),!e||!ar(r,"constructor")&&ar(e,"constructor")&&Cr(e.constructor)&&"[object Function]"===sr(e.constructor)&&ar(e,"isPrototypeOf")&&Cr(e.isPrototypeOf)&&(e===$e||function(r){var e;for(e in r)if(!ar(r,e))return!1;return!0}(r)))}function Ie(r,e){return Ce(e)?ar(e,"dir")&&(r.dir=e.dir,!er(r.dir))?new TypeError(Ae("0OP2W","dir",r.dir)):null:new TypeError(Ae("0OP2V",e))}var Re=rr.resolve;function Me(r,e,t){var n,o,i,a,c,u;if(!er(r))throw new TypeError(Ae("0OP3F",r));if(i={},arguments.length>2){if(a=t,u=Ie(i,e))throw u}else a=e;if(!Cr(a))throw new TypeError(Ae("0OP2b",a));c=i.dir?Re(je(),i.dir):je(),Oe(n=Re(c,r),(function e(t,i){if(i)return a(null,n);if(o=c,c=Re(c,".."),o===c)return a(null,null);Oe(n=Re(c,r),e)}))}var ze=rr.resolve;function Be(r,e){var t,n,o,i,a;if(!er(r))throw new TypeError(Ae("0OP3F",r));if(o={},arguments.length>1&&(a=Ie(o,e)))throw a;for(i=o.dir?ze(je(),o.dir):je();n!==i;){if(xe(t=ze(i,r)))return t;n=i,i=ze(i,"..")}return null}M(Me,"sync",Be);export{Me as default,Be as sync};
//# sourceMappingURL=mod.js.map
