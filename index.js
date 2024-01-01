// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,v,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var E=String.fromCharCode,N=isNaN,U=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,c,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(e=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,N(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!N(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=k.exec(r);t;)(e=r.slice(i,k.lastIndex-t[0].length)).length&&n.push(e),n.push(x(t)),i=k.lastIndex,t=k.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R=Math.floor;function M(r){return R(r)===r}function Z(r){return M(r/2)}function q(r){return Z(r>0?r-1:r+1)}var X=Number.POSITIVE_INFINITY,Y=Number.NEGATIVE_INFINITY;function z(r){return r===X||r===Y}var B=Math.sqrt;function D(r){return Math.abs(r)}var J,K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,er="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof er?er.toStringTag:"",tr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Q.call(r);n=r[nr],a=nr,e=null!=(i=r)&&rr.call(i,a);try{r[nr]=void 0}catch(e){return Q.call(r)}return t=Q.call(r),e?r[nr]=n:delete r[nr],t}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array,ar="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,e,n;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ir&&n instanceof Uint32Array||"[object Uint32Array]"===tr(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur,fr=J,cr="function"==typeof Float64Array,sr="function"==typeof Float64Array?Float64Array:null,lr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),n=e,r=(cr&&n instanceof Float64Array||"[object Float64Array]"===tr(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,yr=ur,gr="function"==typeof Uint8Array,dr="function"==typeof Uint8Array?Uint8Array:null,vr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,n;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,256,257]),n=e,r=(gr&&n instanceof Uint8Array||"[object Uint8Array]"===tr(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var hr,wr=pr,br="function"==typeof Uint16Array,mr="function"==typeof Uint16Array?Uint16Array:null,Ar="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,e,n;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(br&&n instanceof Uint16Array||"[object Uint16Array]"===tr(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Er={uint16:hr,uint8:wr};(_r=new Er.uint16(1))[0]=4660;var Nr,Ur,Ir=52===new Er.uint8(_r.buffer)[0];!0===Ir?(Nr=1,Ur=0):(Nr=0,Ur=1);var Sr={HIGH:Nr,LOW:Ur},kr=new yr(1),xr=new fr(kr.buffer),Fr=Sr.HIGH,jr=Sr.LOW;function Tr(r,e,n,t){return kr[0]=r,e[t]=xr[Fr],e[t+n]=xr[jr],e}function Or(r){return Tr(r,[0,0],1,0)}L(Or,"assign",Tr);var Vr=!0===Ir?0:1,$r=new yr(1),Gr=new fr($r.buffer);function Hr(r,e){return $r[0]=r,Gr[Vr]=e>>>0,$r[0]}function Wr(r){return 0|r}var Cr,Lr,Pr=2147483647,Rr=!0===Ir?1:0,Mr=new yr(1),Zr=new fr(Mr.buffer);function qr(r){return Mr[0]=r,Zr[Rr]}!0===Ir?(Cr=1,Lr=0):(Cr=0,Lr=1);var Xr={HIGH:Cr,LOW:Lr},Yr=new yr(1),zr=new fr(Yr.buffer),Br=Xr.HIGH,Dr=Xr.LOW;function Jr(r,e){return zr[Br]=r,zr[Dr]=e,Yr[0]}var Kr=[0,0];function Qr(r,e){var n,t;return Or.assign(r,Kr,1,0),n=Kr[0],n&=Pr,t=qr(e),Jr(n|=t&=2147483648,Kr[1])}var re=!0===Ir?1:0,ee=new yr(1),ne=new fr(ee.buffer);function te(r,e){return ee[0]=r,ne[re]=e>>>0,ee[0]}var ie=1023,ae=1048576,oe=[1,1.5],ue=[0,.5849624872207642],fe=[0,1.350039202129749e-8];function ce(r,e,n,t){return P(r)||z(r)?(e[t]=r,e[t+n]=0,e):0!==r&&D(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return ce(r,[0,0],1,0)}),"assign",ce);var se=2146435072,le=[0,0],pe=[0,0];function ye(r,e){var n,t;return 0===e||0===r||P(r)||z(r)?r:(ce(r,le,1,0),e+=le[1],e+=function(r){var e=qr(r);return(e=(e&se)>>>20)-ie|0}(r=le[0]),e<-1074?Qr(0,r):e>1023?r<0?Y:X:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Or.assign(r,pe,1,0),n=pe[0],n&=2148532223,t*Jr(n|=e+ie<<20,pe[1])))}var ge=1048575,de=1048576,ve=1083179008,he=1e300,we=1e-300,be=[0,0],me=[0,0];function Ae(r,e){var n,t,i,a,o,u,f,c,s,l,p,y,g,d;if(P(r)||P(e))return NaN;if(Or.assign(e,be,1,0),o=be[0],0===be[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return B(r);if(-.5===e)return 1/B(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:D(r)<1==(e===X)?0:X}(r,e)}if(Or.assign(r,be,1,0),a=be[0],0===be[1]){if(0===a)return function(r,e){return e===Y?X:e===X?0:e>0?q(e)?r:0:q(e)?Qr(X,r):X}(r,e);if(1===r)return 1;if(-1===r&&q(e))return-1;if(z(r))return r===Y?Ae(-0,-e):e<0?0:X}if(r<0&&!1===M(e))return(r-r)/(r-r);if(i=D(r),n=a&Pr|0,t=o&Pr|0,f=o>>>31|0,u=(u=a>>>31|0)&&q(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(qr(r)&Pr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*he*he:u*we*we;if(n>1072693248)return 0===f?u*he*he:u*we*we;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Hr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(me,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,d,v,h,w,b,m,A,_,E;return m=0,n<ae&&(m-=53,n=qr(e*=9007199254740992)),m+=(n>>20)-ie|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=ae),o=Hr(i=(w=(e=te(e,n))-(c=oe[_]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=te(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Hr(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=Hr(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+fe[_])-((g=Hr(g=(p=.9617967009544373*l)+y+(s=ue[_])+(v=m),0))-v-s-p),r[0]=g,r[1]=d,r}(me,i,n);if(y=(l=(e-(c=Hr(e,0)))*p[0]+e*p[1])+(s=c*p[0]),Or.assign(y,be,1,0),g=Wr(be[0]),d=Wr(be[1]),g>=ve){if(0!=(g-ve|d))return u*he*he;if(l+8008566259537294e-32>y-s)return u*he*he}else if((g&Pr)>=1083231232){if(0!=(g-3230714880|d))return u*we*we;if(l<=y-s)return u*we*we}return y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&Pr|0)>>20)-ie|0,c=0,s>1071644672&&(i=te(0,((c=r+(de>>l+1)>>>0)&~(ge>>(l=((c&Pr)>>20)-ie|0)))>>>0),c=(c&ge|de)>>20-l>>>0,r<0&&(c=-c),e-=i),r=Wr(r=qr(f=1-((f=(a=.6931471824645996*(i=Hr(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?ye(f,c):te(f,r)}(g,s,l),u*y}function _e(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Ee=-.16666666666666632;function Ne(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(Ee+i*n):r-(i*(.5*e-t*n)-e-t*Ee)}var Ue=!0===Ir?0:1,Ie=new yr(1),Se=new fr(Ie.buffer);function ke(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var xe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Fe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],je=16777216,Te=5.960464477539063e-8,Oe=ke(20),Ve=ke(20),$e=ke(20),Ge=ke(20);function He(r,e,n,t,i,a,o,u,f){var c,s,l,p,y,g,d,v,h;for(p=a,h=t[n],v=n,y=0;v>0;y++)s=Te*h|0,Ge[y]=h-je*s|0,h=t[v-1]+s,v-=1;if(h=ye(h,i),h-=8*R(.125*h),h-=d=0|h,l=0,i>0?(d+=y=Ge[n-1]>>24-i,Ge[n-1]-=y<<24-i,l=Ge[n-1]>>23-i):0===i?l=Ge[n-1]>>23:h>=.5&&(l=2),l>0){for(d+=1,c=0,y=0;y<n;y++)v=Ge[y],0===c?0!==v&&(c=1,Ge[y]=16777216-v):Ge[y]=16777215-v;if(i>0)switch(i){case 1:Ge[n-1]&=8388607;break;case 2:Ge[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=ye(1,i)))}if(0===h){for(v=0,y=n-1;y>=a;y--)v|=Ge[y];if(0===v){for(g=1;0===Ge[a-g];g++);for(y=n+1;y<=n+g;y++){for(f[u+y]=xe[o+y],s=0,v=0;v<=u;v++)s+=r[v]*f[u+(y-v)];t[y]=s}return He(r,e,n+=g,t,i,a,o,u,f)}}if(0===h)for(n-=1,i-=24;0===Ge[n];)n-=1,i-=24;else(h=ye(h,-i))>=je?(s=Te*h|0,Ge[n]=h-je*s|0,i+=24,Ge[n+=1]=s):Ge[n]=0|h;for(s=ye(1,i),y=n;y>=0;y--)t[y]=s*Ge[y],s*=Te;for(y=n;y>=0;y--){for(s=0,g=0;g<=p&&g<=n-y;g++)s+=Fe[g]*t[y+g];$e[n-y]=s}for(s=0,y=n;y>=0;y--)s+=$e[y];for(e[0]=0===l?s:-s,s=$e[0]-s,y=1;y<=n;y++)s+=$e[y];return e[1]=0===l?s:-s,7&d}function We(r,e,n,t){var i,a,o,u,f,c,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)Oe[f]=c<0?0:xe[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*Oe[o+(f-c)];Ve[f]=i}return He(r,e,4,Ve,u,4,a,o,Oe)}var Ce=Math.round;function Le(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=Ce(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(qr(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(qr(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var Pe=1.5707963267341256,Re=6077100506506192e-26,Me=2*Re,Ze=3*Re,qe=4*Re,Xe=[0,0,0],Ye=[0,0];function ze(r,e){var n,t,i,a,o,u,f;if((i=qr(r)&Pr|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(i&ge)?Le(r,i,e):i<=1073928572?r>0?(f=r-Pe,e[0]=f-Re,e[1]=f-e[0]-Re,1):(f=r+Pe,e[0]=f+Re,e[1]=f-e[0]+Re,-1):r>0?(f=r-2*Pe,e[0]=f-Me,e[1]=f-e[0]-Me,2):(f=r+2*Pe,e[0]=f+Me,e[1]=f-e[0]+Me,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?Le(r,i,e):r>0?(f=r-3*Pe,e[0]=f-Ze,e[1]=f-e[0]-Ze,3):(f=r+3*Pe,e[0]=f+Ze,e[1]=f-e[0]+Ze,-3):1075388923===i?Le(r,i,e):r>0?(f=r-4*Pe,e[0]=f-qe,e[1]=f-e[0]-qe,4):(f=r+4*Pe,e[0]=f+qe,e[1]=f-e[0]+qe,-4);if(i<1094263291)return Le(r,i,e);if(i>=se)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Ie[0]=r,Se[Ue]}(r),f=Jr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Xe[o]=0|f,f=16777216*(f-Xe[o]);for(Xe[2]=f,a=3;0===Xe[a-1];)a-=1;return u=We(Xe,Ye,t,a),r<0?(e[0]=-Ye[0],e[1]=-Ye[1],-u):(e[0]=Ye[0],e[1]=Ye[1],u)}var Be=[0,0];function De(r){var e;if(e=qr(r),(e&=Pr)<=1072243195)return e<1045430272?r:Ne(r,0);if(e>=se)return NaN;switch(3&ze(r,Be)){case 0:return Ne(Be[0],Be[1]);case 1:return _e(Be[0],Be[1]);case 2:return-Ne(Be[0],Be[1]);default:return-_e(Be[0],Be[1])}}var Je=1.5707963267948966;function Ke(r,e,n){return P(e)||P(n)||e>=n||P(r)||r<0||r>1?NaN:e+Ae(De(Je*r),2)*(n-e)}return L(Ke,"factory",(function(r,e){return P(r)||P(e)||r>=e?(n=NaN,function(){return n}):function(n){return P(n)||n<0||n>1?NaN:r+Ae(De(Je*n),2)*(e-r)};var n})),Ke},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).quantile=e();
//# sourceMappingURL=index.js.map
