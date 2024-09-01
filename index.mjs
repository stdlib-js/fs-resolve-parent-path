// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/process-cwd@v0.2.2-esm/index.mjs";import s,{sync as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/fs-exists@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";function f(r){if(r.__esModule)return r;var t=r.default;if("function"==typeof t){var e=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}function c(r,t){for(var e=0,n=r.length-1;n>=0;n--){var s=r[n];"."===s?r.splice(n,1):".."===s?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,p=function(r){return a.exec(r).slice(1)};function d(){for(var r="",t=!1,e=arguments.length-1;e>=-1&&!t;e--){var n=e>=0?arguments[e]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,t="/"===n.charAt(0))}return(t?"/":"")+(r=c(x(r.split("/"),(function(r){return!!r})),!t).join("/"))||"."}function h(r){var t=m(r),e="/"===O(r,-1);return(r=c(x(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function m(r){return"/"===r.charAt(0)}function v(){return h(x(Array.prototype.slice.call(arguments,0),(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function j(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=d(r).substr(1),t=d(t).substr(1);for(var n=e(r.split("/")),s=e(t.split("/")),i=Math.min(n.length,s.length),o=i,u=0;u<i;u++)if(n[u]!==s[u]){o=u;break}var l=[];for(u=o;u<n.length;u++)l.push("..");return(l=l.concat(s.slice(o))).join("/")}function b(r){var t=p(r),e=t[0],n=t[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."}function g(r,t){var e=p(r)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e}function y(r){return p(r)[3]}var w={extname:y,basename:g,dirname:b,sep:"/",delimiter:":",relative:j,join:v,isAbsolute:m,normalize:h,resolve:d};function x(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var O="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},E=f(Object.freeze({__proto__:null,basename:g,default:w,delimiter:":",dirname:b,extname:y,isAbsolute:m,join:v,normalize:h,relative:j,resolve:d,sep:"/"}));function P(r,e){return u(e)?l(e,"dir")&&(r.dir=e.dir,!t(r.dir))?new TypeError(o("0OP2W","dir",r.dir)):null:new TypeError(o("0OP2V",e))}var _=E.resolve;function A(r,i,u){var l,f,c,a,p,d;if(!t(r))throw new TypeError(o("0OP3F",r));if(c={},arguments.length>2){if(a=u,d=P(c,i))throw d}else a=i;if(!e(a))throw new TypeError(o("0OP2b",a));p=c.dir?_(n(),c.dir):n(),l=_(p,r),s(l,(function t(e,n){if(n)return a(null,l);if(f=p,p=_(p,".."),f===p)return a(null,null);l=_(p,r),s(l,t)}))}var T=E.resolve;function z(r,e){var s,u,l,f,c;if(!t(r))throw new TypeError(o("0OP3F",r));if(l={},arguments.length>1&&(c=P(l,e)))throw c;for(f=l.dir?T(n(),l.dir):n();u!==f;){if(s=T(f,r),i(s))return s;u=f,f=T(f,"..")}return null}r(A,"sync",z);export{A as default,z as sync};
//# sourceMappingURL=index.mjs.map
