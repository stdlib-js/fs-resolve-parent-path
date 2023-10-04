// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/process-cwd@v0.1.0-esm/index.mjs";import i,{sync as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/fs-exists@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";function f(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function a(r,e){for(var t=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var p=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,c=function(r){return p.exec(r).slice(1)};function d(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=a(x(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function h(r){var e=m(r),t="/"===O(r,-1);return(r=a(x(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function m(r){return"/"===r.charAt(0)}function v(){var r=Array.prototype.slice.call(arguments,0);return h(x(r,(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function j(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=d(r).substr(1),e=d(e).substr(1);for(var n=t(r.split("/")),i=t(e.split("/")),s=Math.min(n.length,i.length),o=s,l=0;l<s;l++)if(n[l]!==i[l]){o=l;break}var u=[];for(l=o;l<n.length;l++)u.push("..");return(u=u.concat(i.slice(o))).join("/")}function b(r){var e=c(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function g(r,e){var t=c(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function y(r){return c(r)[3]}var w={extname:y,basename:g,dirname:b,sep:"/",delimiter:":",relative:j,join:v,isAbsolute:m,normalize:h,resolve:d};function x(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var O="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},E=f(Object.freeze({__proto__:null,basename:g,default:w,delimiter:":",dirname:b,extname:y,isAbsolute:m,join:v,normalize:h,relative:j,resolve:d,sep:"/"}));function P(r,t){return l(t)?u(t,"dir")&&(r.dir=t.dir,!e(r.dir))?new TypeError(o("0OP2W,Gh","dir",r.dir)):null:new TypeError(o("0OP2V,FD",t))}var _=E.resolve;function A(r,s,l){var u,f,a,p,c,d;if(!e(r))throw new TypeError(o("0OP3F,Ex",r));if(a={},arguments.length>2){if(p=l,d=P(a,s))throw d}else p=s;if(!t(p))throw new TypeError(o("0OP2b,GJ",p));function h(e,t){return t?p(null,u):(f=c,c=_(c,".."),f===c?p(null,null):(u=_(c,r),void i(u,h)))}c=a.dir?_(n(),a.dir):n(),u=_(c,r),i(u,h)}var T=E.resolve;function F(r,t){var i,l,u,f,a;if(!e(r))throw new TypeError(o("0OP3F,Ex",r));if(u={},arguments.length>1&&(a=P(u,t)))throw a;for(f=u.dir?T(n(),u.dir):n();l!==f;){if(i=T(f,r),s(i))return i;l=f,f=T(f,"..")}return null}r(A,"sync",F);export{A as default,F as sync};
//# sourceMappingURL=index.mjs.map
