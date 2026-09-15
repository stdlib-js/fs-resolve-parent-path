"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var d=o(function(L,q){
var T=require('@stdlib/assert-is-plain-object/dist'),V=require('@stdlib/assert-has-own-property/dist'),F=require('@stdlib/assert-is-string/dist').isPrimitive,c=require('@stdlib/error-tools-fmtprodmsg/dist');function S(e,r){return T(r)?V(r,"dir")&&(e.dir=r.dir,!F(e.dir))?new TypeError(c('0OP2W',"dir",e.dir)):null:new TypeError(c('0OP2V',r));}q.exports=S
});var y=o(function(M,P){
var v=require("path").resolve,j=require('@stdlib/assert-is-string/dist').isPrimitive,k=require('@stdlib/assert-is-function/dist'),g=require('@stdlib/process-cwd/dist'),w=require('@stdlib/fs-exists/dist'),h=require('@stdlib/error-tools-fmtprodmsg/dist'),C=d();function R(e,r,u){var a,s,i,t,n,l;if(!j(e))throw new TypeError(h('0OP3F',e));if(i={},arguments.length>2){if(t=u,l=C(i,r),l)throw l}else t=r;if(!k(t))throw new TypeError(h('0OP2b',t));i.dir?n=v(g(),i.dir):n=g(),a=v(n,e),w(a,m);function m(J,O){if(O)return t(null,a);if(s=n,n=v(n,".."),s===n)return t(null,null);a=v(n,e),w(a,m)}}P.exports=R
});var x=o(function(N,p){
var f=require("path").resolve,z=require('@stdlib/assert-is-string/dist').isPrimitive,b=require('@stdlib/process-cwd/dist'),A=require('@stdlib/fs-exists/dist').sync,B=require('@stdlib/error-tools-fmtprodmsg/dist'),D=d();function G(e,r){var u,a,s,i,t;if(!z(e))throw new TypeError(B('0OP3F',e));if(s={},arguments.length>1&&(t=D(s,r),t))throw t;for(s.dir?i=f(b(),s.dir):i=b();a!==i;){if(u=f(i,e),A(u))return u;a=i,i=f(i,"..")}return null}p.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=y(),I=x();H(E,"sync",I);module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
