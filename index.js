// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function o(r,t,n){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function f(r){var t,e,f;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,f=parseInt(e,10),!isFinite(f)){if(!n(e))throw new Error("invalid integer. Value: "+e);f=0}return f<0&&("u"===r.specifier||10!==t)&&(f=4294967295+f+1),f<0?(e=(-f).toString(t),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=f.toString(t),f||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function u(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,w=/^(\d+)e/,g=/\.0$/,h=/\.0*e/,A=/(\..*[^0])0*e/;function b(r){var t,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),e=o.toExponential(t)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,A,"$1e"),e=p.call(e,h,"e"),e=p.call(e,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,v,"e-0$1"),r.alternate&&(e=p.call(e,d,"$1."),e=p.call(e,w,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function F(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function m(r,t,n){var e=t-r.length;return e<0?r:r=n?r+F(e):F(e)+r}var N=String.fromCharCode,I=isNaN,E=Array.isArray;function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function j(r){var t,n,e,i,a,c,l,s,p;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,s=0;s<r.length;s++)if(u(e=r[s]))c+=e;else{if(t=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(i=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,I(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,I(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=f(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!I(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=I(a)?String(e.arg):N(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=b(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=m(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function U(r){var t,n,e,o;for(n=[],o=0,e=T.exec(r);e;)(t=r.slice(o,T.lastIndex-e[0].length)).length&&n.push(t),n.push(S(e)),o=T.lastIndex,e=T.exec(r);return(t=r.slice(o)).length&&n.push(t),n}function k(r){return"string"==typeof r}function x(r){var t,n;if(!k(r))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[U(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return j.apply(null,t)}var O=Object.prototype,V=O.toString,H=O.__defineGetter__,G=O.__defineSetter__,W=O.__lookupGetter__,L=O.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(W.call(r,t)||L.call(r,t)?(e=r.__proto__,r.__proto__=O,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&H&&H.call(r,t,n.get),a&&G&&G.call(r,t,n.set),r};function P(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function C(r){return r!=r}var M=Math.floor;function R(r){return M(r)===r}function Y(r){return R(r/2)}function Z(r){return Y(r>0?r-1:r+1)}var q=Number.POSITIVE_INFINITY,X=Number,z=X.NEGATIVE_INFINITY;function B(r){return r===q||r===z}var D=Math.sqrt;function J(r){return Math.abs(r)}var K,Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),rr=Object.prototype.toString,tr=Object.prototype.hasOwnProperty,nr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof nr?nr.toStringTag:"",or=Q&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,i;if(null==r)return rr.call(r);n=r[er],i=er,t=null!=(o=r)&&tr.call(o,i);try{r[er]=void 0}catch(t){return rr.call(r)}return e=rr.call(r),t?r[er]=n:delete r[er],e}:function(r){return rr.call(r)},ir="function"==typeof Uint32Array,ar="function"==typeof Uint32Array?Uint32Array:null,fr="function"==typeof Uint32Array?Uint32Array:void 0;K=function(){var r,t,n;if("function"!=typeof ar)return!1;try{t=new ar(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ir&&n instanceof Uint32Array||"[object Uint32Array]"===or(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var ur,cr=K,lr="function"==typeof Float64Array,sr="function"==typeof Float64Array?Float64Array:null,pr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,t,n;if("function"!=typeof sr)return!1;try{t=new sr([1,3.14,-3.14,NaN]),n=t,r=(lr&&n instanceof Float64Array||"[object Float64Array]"===or(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr,vr=ur,dr="function"==typeof Uint8Array,wr="function"==typeof Uint8Array?Uint8Array:null,gr="function"==typeof Uint8Array?Uint8Array:void 0;yr=function(){var r,t,n;if("function"!=typeof wr)return!1;try{t=new wr(t=[1,3.14,-3.14,256,257]),n=t,r=(dr&&n instanceof Uint8Array||"[object Uint8Array]"===or(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var hr,Ar=yr,br="function"==typeof Uint16Array,Fr="function"==typeof Uint16Array?Uint16Array:null,mr="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,t,n;if("function"!=typeof Fr)return!1;try{t=new Fr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===or(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Nr,Ir={uint16:hr,uint8:Ar};(Nr=new Ir.uint16(1))[0]=4660;var Er,_r,jr=52===new Ir.uint8(Nr.buffer)[0];!0===jr?(Er=1,_r=0):(Er=0,_r=1);var Tr={HIGH:Er,LOW:_r},Sr=new vr(1),Ur=new cr(Sr.buffer),kr=Tr.HIGH,xr=Tr.LOW;function Or(r,t,n,e){return Sr[0]=r,t[e]=Ur[kr],t[e+n]=Ur[xr],t}function Vr(r){return Or(r,[0,0],1,0)}P(Vr,"assign",Or);var Hr,Gr="function"==typeof Float64Array,Wr="function"==typeof Float64Array?Float64Array:null,Lr="function"==typeof Float64Array?Float64Array:void 0;Hr=function(){var r,t,n;if("function"!=typeof Wr)return!1;try{t=new Wr([1,3.14,-3.14,NaN]),n=t,r=(Gr&&n instanceof Float64Array||"[object Float64Array]"===or(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var $r=!0===jr?0:1,Pr=new Hr(1),Cr=new cr(Pr.buffer);function Mr(r,t){return Pr[0]=r,Cr[$r]=t>>>0,Pr[0]}function Rr(r){return 0|r}var Yr,Zr,qr,Xr=X.NEGATIVE_INFINITY,zr=Number.POSITIVE_INFINITY,Br=2147483647,Dr="function"==typeof Float64Array,Jr="function"==typeof Float64Array?Float64Array:null,Kr="function"==typeof Float64Array?Float64Array:void 0;Yr=function(){var r,t,n;if("function"!=typeof Jr)return!1;try{t=new Jr([1,3.14,-3.14,NaN]),n=t,r=(Dr&&n instanceof Float64Array||"[object Float64Array]"===or(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Kr:function(){throw new Error("not implemented")},!0===jr?(Zr=1,qr=0):(Zr=0,qr=1);var Qr={HIGH:Zr,LOW:qr},rt=new Yr(1),tt=new cr(rt.buffer),nt=Qr.HIGH,et=Qr.LOW;function ot(r,t,n,e){return rt[0]=r,t[e]=tt[nt],t[e+n]=tt[et],t}function it(r){return ot(r,[0,0],1,0)}P(it,"assign",ot);var at,ft="function"==typeof Float64Array,ut="function"==typeof Float64Array?Float64Array:null,ct="function"==typeof Float64Array?Float64Array:void 0;at=function(){var r,t,n;if("function"!=typeof ut)return!1;try{t=new ut([1,3.14,-3.14,NaN]),n=t,r=(ft&&n instanceof Float64Array||"[object Float64Array]"===or(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ct:function(){throw new Error("not implemented")};var lt=!0===jr?1:0,st=new at(1),pt=new cr(st.buffer);function yt(r){return st[0]=r,pt[lt]}var vt,dt,wt,gt="function"==typeof Float64Array,ht="function"==typeof Float64Array?Float64Array:null,At="function"==typeof Float64Array?Float64Array:void 0;vt=function(){var r,t,n;if("function"!=typeof ht)return!1;try{t=new ht([1,3.14,-3.14,NaN]),n=t,r=(gt&&n instanceof Float64Array||"[object Float64Array]"===or(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?At:function(){throw new Error("not implemented")},!0===jr?(dt=1,wt=0):(dt=0,wt=1);var bt={HIGH:dt,LOW:wt},Ft=new vt(1),mt=new cr(Ft.buffer),Nt=bt.HIGH,It=bt.LOW;function Et(r,t){return mt[Nt]=r,mt[It]=t,Ft[0]}var _t=[0,0];function jt(r,t){var n,e;return it.assign(r,_t,1,0),n=_t[0],n&=2147483647,e=yt(t),Et(n|=e&=2147483648,_t[1])}var Tt,St="function"==typeof Float64Array,Ut="function"==typeof Float64Array?Float64Array:null,kt="function"==typeof Float64Array?Float64Array:void 0;Tt=function(){var r,t,n;if("function"!=typeof Ut)return!1;try{t=new Ut([1,3.14,-3.14,NaN]),n=t,r=(St&&n instanceof Float64Array||"[object Float64Array]"===or(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?kt:function(){throw new Error("not implemented")};var xt=!0===jr?1:0,Ot=new Tt(1),Vt=new cr(Ot.buffer);function Ht(r,t){return Ot[0]=r,Vt[xt]=t>>>0,Ot[0]}var Gt=1023,Wt=1048576,Lt=[1,1.5],$t=[0,.5849624872207642],Pt=[0,1.350039202129749e-8],Ct=Number.POSITIVE_INFINITY,Mt=X.NEGATIVE_INFINITY;function Rt(r,t,n,e){return C(r)||B(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}P((function(r){return Rt(r,[0,0],1,0)}),"assign",Rt);var Yt,Zt,qt,Xt=2146435072,zt="function"==typeof Float64Array,Bt="function"==typeof Float64Array?Float64Array:null,Dt="function"==typeof Float64Array?Float64Array:void 0;Yt=function(){var r,t,n;if("function"!=typeof Bt)return!1;try{t=new Bt([1,3.14,-3.14,NaN]),n=t,r=(zt&&n instanceof Float64Array||"[object Float64Array]"===or(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Dt:function(){throw new Error("not implemented")},!0===jr?(Zt=1,qt=0):(Zt=0,qt=1);var Jt={HIGH:Zt,LOW:qt},Kt=new Yt(1),Qt=new cr(Kt.buffer),rn=Jt.HIGH,tn=Jt.LOW;function nn(r,t,n,e){return Kt[0]=r,t[e]=Qt[rn],t[e+n]=Qt[tn],t}function en(r){return nn(r,[0,0],1,0)}P(en,"assign",nn);var on=[0,0],an=[0,0];function fn(r,t){var n,e;return 0===t||0===r||C(r)||B(r)?r:(Rt(r,on,1,0),t+=on[1],t+=function(r){var t=yt(r);return(t=(t&Xt)>>>20)-Gt|0}(r=on[0]),t<-1074?jt(0,r):t>1023?r<0?Mt:Ct:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,en.assign(r,an,1,0),n=an[0],n&=2148532223,e*Et(n|=t+Gt<<20,an[1])))}var un=1048575,cn=1048576,ln=1083179008,sn=1e300,pn=1e-300,yn=[0,0],vn=[0,0];function dn(r,t){var n,e,o,i,a,f,u,c,l,s,p,y,v,d;if(C(r)||C(t))return NaN;if(Vr.assign(t,yn,1,0),a=yn[0],0===yn[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return D(r);if(-.5===t)return 1/D(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(B(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:J(r)<1==(t===zr)?0:zr}(r,t)}if(Vr.assign(r,yn,1,0),i=yn[0],0===yn[1]){if(0===i)return function(r,t){return t===Xr?zr:t===zr?0:t>0?Z(t)?r:0:Z(t)?jt(zr,r):zr}(r,t);if(1===r)return 1;if(-1===r&&Z(t))return-1;if(B(r))return r===Xr?dn(-0,-t):t<0?0:zr}if(r<0&&!1===R(t))return(r-r)/(r-r);if(o=J(r),n=i&Br|0,e=a&Br|0,u=a>>>31|0,f=(f=i>>>31|0)&&Z(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(yt(r)&Br)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===u?f*sn*sn:f*pn*pn;if(n>1072693248)return 0===u?f*sn*sn:f*pn*pn;p=function(r,t){var n,e,o,i,a,f;return n=(a=1.9259629911266175e-8*(o=t-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Mr(e=(i=1.4426950216293335*o)+a,0))-i),r[0]=e,r[1]=n,r}(vn,o)}else p=function(r,t,n){var e,o,i,a,f,u,c,l,s,p,y,v,d,w,g,h,A,b,F,m,N;return b=0,n<Wt&&(b-=53,n=yt(t*=9007199254740992)),b+=(n>>20)-Gt|0,n=1072693248|(F=1048575&n|0),F<=235662?m=0:F<767610?m=1:(m=0,b+=1,n-=Wt),a=Mr(o=(h=(t=Ht(t,n))-(c=Lt[m]))*(A=1/(t+c)),0),e=524288+(n>>1|536870912),u=Ht(0,e+=m<<18),g=(i=o*o)*i*(0===(N=i)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),u=Mr(u=3+(i=a*a)+(g+=(f=A*(h-a*u-a*(t-(u-c))))*(a+o)),0),d=(y=-7.028461650952758e-9*(s=Mr(s=(h=a*u)+(A=f*u+(g-(u-3-i))*o),0))+.9617966939259756*(A-(s-h))+Pt[m])-((v=Mr(v=(p=.9617967009544373*s)+y+(l=$t[m])+(w=b),0))-w-l-p),r[0]=v,r[1]=d,r}(vn,o,n);if(y=(s=(t-(c=Mr(t,0)))*p[0]+t*p[1])+(l=c*p[0]),Vr.assign(y,yn,1,0),v=Rr(yn[0]),d=Rr(yn[1]),v>=ln){if(0!=(v-ln|d))return f*sn*sn;if(s+8008566259537294e-32>y-l)return f*sn*sn}else if((v&Br)>=1083231232){if(0!=(v-3230714880|d))return f*pn*pn;if(s<=y-l)return f*pn*pn}return y=function(r,t,n){var e,o,i,a,f,u,c,l,s,p;return s=((l=r&Br|0)>>20)-Gt|0,c=0,l>1071644672&&(o=Ht(0,((c=r+(cn>>s+1)>>>0)&~(un>>(s=((c&Br)>>20)-Gt|0)))>>>0),c=(c&un|cn)>>20-s>>>0,r<0&&(c=-c),t-=o),r=Rr(r=yt(u=1-((u=(i=.6931471824645996*(o=Mr(o=n+t,0)))+(a=.6931471805599453*(n-(o-t))+-1.904654299957768e-9*o))*(e=u-(o=u*u)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=a-(u-i))+u*f)-u))),(r+=c<<20>>>0)>>20<=0?fn(u,c):Ht(u,r)}(v,l,s),f*y}function wn(r,t){var n,e,o,i;return o=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(n=.5*i))+(1-o-n+(i*e-r*t))}var gn=-.16666666666666632;function hn(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(gn+o*n):r-(o*(.5*t-e*n)-t-e*gn)}var An,bn="function"==typeof Float64Array,Fn="function"==typeof Float64Array?Float64Array:null,mn="function"==typeof Float64Array?Float64Array:void 0;An=function(){var r,t,n;if("function"!=typeof Fn)return!1;try{t=new Fn([1,3.14,-3.14,NaN]),n=t,r=(bn&&n instanceof Float64Array||"[object Float64Array]"===or(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?mn:function(){throw new Error("not implemented")};var Nn=!0===jr?0:1,In=new An(1),En=new cr(In.buffer);function _n(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var jn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Tn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Sn=16777216,Un=5.960464477539063e-8,kn=_n(20),xn=_n(20),On=_n(20),Vn=_n(20);function Hn(r,t,n,e,o,i,a,f,u){var c,l,s,p,y,v,d,w,g;for(p=i,g=e[n],w=n,y=0;w>0;y++)l=Un*g|0,Vn[y]=g-Sn*l|0,g=e[w-1]+l,w-=1;if(g=fn(g,o),g-=8*M(.125*g),g-=d=0|g,s=0,o>0?(d+=y=Vn[n-1]>>24-o,Vn[n-1]-=y<<24-o,s=Vn[n-1]>>23-o):0===o?s=Vn[n-1]>>23:g>=.5&&(s=2),s>0){for(d+=1,c=0,y=0;y<n;y++)w=Vn[y],0===c?0!==w&&(c=1,Vn[y]=16777216-w):Vn[y]=16777215-w;if(o>0)switch(o){case 1:Vn[n-1]&=8388607;break;case 2:Vn[n-1]&=4194303}2===s&&(g=1-g,0!==c&&(g-=fn(1,o)))}if(0===g){for(w=0,y=n-1;y>=i;y--)w|=Vn[y];if(0===w){for(v=1;0===Vn[i-v];v++);for(y=n+1;y<=n+v;y++){for(u[f+y]=jn[a+y],l=0,w=0;w<=f;w++)l+=r[w]*u[f+(y-w)];e[y]=l}return Hn(r,t,n+=v,e,o,i,a,f,u)}}if(0===g)for(n-=1,o-=24;0===Vn[n];)n-=1,o-=24;else(g=fn(g,-o))>=Sn?(l=Un*g|0,Vn[n]=g-Sn*l|0,o+=24,Vn[n+=1]=l):Vn[n]=0|g;for(l=fn(1,o),y=n;y>=0;y--)e[y]=l*Vn[y],l*=Un;for(y=n;y>=0;y--){for(l=0,v=0;v<=p&&v<=n-y;v++)l+=Tn[v]*e[y+v];On[n-y]=l}for(l=0,y=n;y>=0;y--)l+=On[y];for(t[0]=0===s?l:-l,l=On[0]-l,y=1;y<=n;y++)l+=On[y];return t[1]=0===s?l:-l,7&d}function Gn(r,t,n,e){var o,i,a,f,u,c,l;for((i=(n-3)/24|0)<0&&(i=0),f=n-24*(i+1),c=i-(a=e-1),l=a+4,u=0;u<=l;u++)kn[u]=c<0?0:jn[c],c+=1;for(u=0;u<=4;u++){for(o=0,c=0;c<=a;c++)o+=r[c]*kn[a+(u-c)];xn[u]=o}return Hn(r,t,4,xn,f,4,i,a,kn)}var Wn=Math.round;function Ln(r,t,n){var e,o,i,a,f;return i=r-1.5707963267341256*(e=Wn(.6366197723675814*r)),a=6077100506506192e-26*e,f=t>>20|0,n[0]=i-a,f-(yt(n[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=i)-(i=o-(a=6077100506303966e-26*e))-a),n[0]=i-a,f-(yt(n[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=i)-(i=o-(a=20222662487111665e-37*e))-a),n[0]=i-a)),n[1]=i-n[0]-a,e}var $n=1.5707963267341256,Pn=6077100506506192e-26,Cn=2*Pn,Mn=3*Pn,Rn=4*Pn,Yn=[0,0,0],Zn=[0,0];function qn(r,t){var n,e,o,i,a,f,u;if((o=2147483647&yt(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(o&un)?Ln(r,o,t):o<=1073928572?r>0?(u=r-$n,t[0]=u-Pn,t[1]=u-t[0]-Pn,1):(u=r+$n,t[0]=u+Pn,t[1]=u-t[0]+Pn,-1):r>0?(u=r-2*$n,t[0]=u-Cn,t[1]=u-t[0]-Cn,2):(u=r+2*$n,t[0]=u+Cn,t[1]=u-t[0]+Cn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Ln(r,o,t):r>0?(u=r-3*$n,t[0]=u-Mn,t[1]=u-t[0]-Mn,3):(u=r+3*$n,t[0]=u+Mn,t[1]=u-t[0]+Mn,-3):1075388923===o?Ln(r,o,t):r>0?(u=r-4*$n,t[0]=u-Rn,t[1]=u-t[0]-Rn,4):(u=r+4*$n,t[0]=u+Rn,t[1]=u-t[0]+Rn,-4);if(o<1094263291)return Ln(r,o,t);if(o>=Xt)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return In[0]=r,En[Nn]}(r),u=Et(o-((e=(o>>20)-1046)<<20|0),n),a=0;a<2;a++)Yn[a]=0|u,u=16777216*(u-Yn[a]);for(Yn[2]=u,i=3;0===Yn[i-1];)i-=1;return f=Gn(Yn,Zn,e,i),r<0?(t[0]=-Zn[0],t[1]=-Zn[1],-f):(t[0]=Zn[0],t[1]=Zn[1],f)}var Xn=[0,0];function zn(r){var t;if(t=yt(r),(t&=2147483647)<=1072243195)return t<1045430272?r:hn(r,0);if(t>=Xt)return NaN;switch(3&qn(r,Xn)){case 0:return hn(Xn[0],Xn[1]);case 1:return wn(Xn[0],Xn[1]);case 2:return-hn(Xn[0],Xn[1]);default:return-wn(Xn[0],Xn[1])}}var Bn=1.5707963267948966;function Dn(r,t,n){return C(t)||C(n)||t>=n||C(r)||r<0||r>1?NaN:t+dn(zn(Bn*r),2)*(n-t)}return P(Dn,"factory",(function(r,t){return C(r)||C(t)||r>=t?(n=NaN,function(){return n}):function(n){return C(n)||n<0||n>1?NaN:r+dn(zn(Bn*n),2)*(t-r)};var n})),Dn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).quantile=t();
//# sourceMappingURL=index.js.map