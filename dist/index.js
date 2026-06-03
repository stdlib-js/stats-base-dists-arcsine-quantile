"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=a(function(_,s){
var u=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-pow/dist'),N=require('@stdlib/math-base-special-sin/dist'),y=require('@stdlib/constants-float64-half-pi/dist');function l(e,r,i){return u(r)||u(i)||r>=i?NaN:u(e)||e<0||e>1?NaN:r+f(N(y*e),2)*(i-r)}s.exports=l
});var v=a(function(d,o){
var x=require('@stdlib/utils-constant-function/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-pow/dist'),w=require('@stdlib/math-base-special-sin/dist'),A=require('@stdlib/constants-float64-half-pi/dist');function H(e,r){if(n(e)||n(r)||e>=r)return x(NaN);return i;function i(t){return n(t)||t<0||t>1?NaN:e+F(w(A*t),2)*(r-e)}}o.exports=H
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),L=v();I(c,"factory",L);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
