// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r,n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return n({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,u=Object.prototype,o=u.toString,f=u.__defineGetter__,i=u.__defineSetter__,c=u.__lookupGetter__,a=u.__lookupSetter__,l=e,y=function(r,n,t){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(r,n)||a.call(r,n)?(e=r.__proto__,r.__proto__=u,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&f&&f.call(r,n,t.get),p&&i&&i.call(r,n,t.set),r},p=t()?l:y,b=function(r,n,t){p(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})},v=function(r){return r!=r},s=Math.floor,w=s,d=function(r){return w(r)===r},A=d,_=function(r){return A(r/2)},m=function(r){return _(r>0?r-1:r+1)},h=Number.POSITIVE_INFINITY,N=Number.NEGATIVE_INFINITY,U=h,g=N,j=function(r){return r===U||r===g},I=Math.sqrt,O=function(r){return Math.abs(r)},S="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),E=Object.prototype.toString,F=E,T=function(r){return F.call(r)},H=Object.prototype.hasOwnProperty,G=function(r,n){return null!=r&&H.call(r,n)},P="function"==typeof Symbol?Symbol.toStringTag:"",L=G,M=P,V=E,W=T,k=function(r){var n,t,e;if(null==r)return V.call(r);t=r[M],n=L(r,M);try{r[M]=void 0}catch(n){return V.call(r)}return e=V.call(r),n?r[M]=t:delete r[M],e},x=S&&"symbol"==typeof Symbol.toStringTag?k:W,q=x,Y="function"==typeof Uint32Array,C="function"==typeof Uint32Array?Uint32Array:null,z=function(r){return Y&&r instanceof Uint32Array||"[object Uint32Array]"===q(r)},B=C,D=function(){var r,n;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,4294967296,4294967297]),r=z(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},J="function"==typeof Uint32Array?Uint32Array:void 0,K=function(){throw new Error("not implemented")},Q=D()?J:K,R=x,X="function"==typeof Float64Array,Z="function"==typeof Float64Array?Float64Array:null,$=function(r){return X&&r instanceof Float64Array||"[object Float64Array]"===R(r)},rr=Z,nr=function(){var r,n;if("function"!=typeof rr)return!1;try{n=new rr([1,3.14,-3.14,NaN]),r=$(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r},tr="function"==typeof Float64Array?Float64Array:void 0,er=function(){throw new Error("not implemented")},ur=nr()?tr:er,or=x,fr="function"==typeof Uint8Array,ir="function"==typeof Uint8Array?Uint8Array:null,cr=function(r){return fr&&r instanceof Uint8Array||"[object Uint8Array]"===or(r)},ar=ir,lr=function(){var r,n;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,256,257]),r=cr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},yr="function"==typeof Uint8Array?Uint8Array:void 0,pr=function(){throw new Error("not implemented")},br=lr()?yr:pr,vr=x,sr="function"==typeof Uint16Array,wr="function"==typeof Uint16Array?Uint16Array:null,dr=function(r){return sr&&r instanceof Uint16Array||"[object Uint16Array]"===vr(r)},Ar=wr,_r=function(){var r,n;if("function"!=typeof Ar)return!1;try{n=new Ar(n=[1,3.14,-3.14,65536,65537]),r=dr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},mr="function"==typeof Uint16Array?Uint16Array:void 0,hr=function(){throw new Error("not implemented")},Nr={uint16:_r()?mr:hr,uint8:br};(r=new Nr.uint16(1))[0]=4660;var Ur,gr,jr=52===new Nr.uint8(r.buffer)[0];!0===jr?(Ur=1,gr=0):(Ur=0,gr=1);var Ir,Or,Sr=Q,Er={HIGH:Ur,LOW:gr},Fr=new ur(1),Tr=new Sr(Fr.buffer),Hr=Er.HIGH,Gr=Er.LOW,Pr=function(r,n){return Fr[0]=n,r[0]=Tr[Hr],r[1]=Tr[Gr],r},Lr=function(r,n){return 1===arguments.length?Pr([0,0],r):Pr(r,n)},Mr=Lr,Vr=Q,Wr=!0===jr?0:1,kr=new ur(1),xr=new Vr(kr.buffer),qr=function(r,n){return kr[0]=r,xr[Wr]=n>>>0,kr[0]},Yr=qr,Cr=function(r){return 0|r},zr=Q,Br=!0===jr?1:0,Dr=new ur(1),Jr=new zr(Dr.buffer),Kr=function(r){return Dr[0]=r,Jr[Br]};!0===jr?(Ir=1,Or=0):(Ir=0,Or=1);var Qr=Q,Rr={HIGH:Ir,LOW:Or},Xr=new ur(1),Zr=new Qr(Xr.buffer),$r=Rr.HIGH,rn=Rr.LOW,nn=function(r,n){return Zr[$r]=r,Zr[rn]=n,Xr[0]},tn=nn,en=Mr,un=Kr,on=tn,fn=[0,0],cn=function(r,n){var t,e;return en(fn,r),t=fn[0],t&=2147483647,e=un(n),on(t|=e&=2147483648,fn[1])},an=m,ln=cn,yn=N,pn=h,bn=function(r,n){return n===yn?pn:n===pn?0:n>0?an(n)?r:0:an(n)?ln(pn,r):pn},vn=Kr,sn=function(r,n){return(2147483647&vn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},wn=O,dn=h,An=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:wn(r)<1==(n===dn)?0:dn},_n=Q,mn=!0===jr?1:0,hn=new ur(1),Nn=new _n(hn.buffer),Un=function(r,n){return hn[0]=r,Nn[mn]=n>>>0,hn[0]},gn=Kr,jn=Yr,In=Un,On=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Sn=1048576,En=[1,1.5],Fn=[0,.5849624872207642],Tn=[0,1.350039202129749e-8],Hn=Yr,Gn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)},Pn=j,Ln=v,Mn=O,Vn=function(r,n){return Ln(n)||Pn(n)?(r[0]=n,r[1]=0,r):0!==n&&Mn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)},Wn=function(r,n){return 1===arguments.length?Vn([0,0],r):Vn(r,n)},kn=Kr,xn=function(r){var n=kn(r);return(n=(2146435072&n)>>>20)-1023|0},qn=h,Yn=N,Cn=v,zn=j,Bn=cn,Dn=Wn,Jn=xn,Kn=Mr,Qn=tn,Rn=[0,0],Xn=[0,0],Zn=function(r,n){var t,e;return 0===n||0===r||Cn(r)||zn(r)?r:(Dn(Rn,r),n+=Rn[1],(n+=Jn(r=Rn[0]))<-1074?Bn(0,r):n>1023?r<0?Yn:qn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Kn(Xn,r),t=Xn[0],t&=2148532223,e*Qn(t|=n+1023<<20,Xn[1])))},$n=Zn,rt=Kr,nt=Un,tt=Yr,et=Cr,ut=$n,ot=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},ft=2147483647,it=1048575,ct=1048576,at=v,lt=m,yt=j,pt=d,bt=I,vt=O,st=Mr,wt=Yr,dt=Cr,At=N,_t=h,mt=bn,ht=sn,Nt=An,Ut=function(r,n,t){var e,u,o,f,i,c,a,l,y,p,b,v,s,w,d,A,_,m,h,N;return m=0,t<Sn&&(m-=53,t=gn(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,m+=1,t-=Sn),e=524288+(t>>1|536870912),i=(_=1/((n=In(n,t))+(a=En[N])))*((A=n-a)-(f=jn(u=A*_,0))*(c=In(0,e+=N<<18))-f*(n-(c-a))),d=(o=u*u)*o*On(o),c=jn(c=3+(o=f*f)+(d+=i*(f+u)),0),s=(b=-7.028461650952758e-9*(y=jn(y=(A=f*c)+(_=i*c+(d-(c-3-o))*u),0))+.9617966939259756*(_-(y-A))+Tn[N])-((v=jn(v=(p=.9617967009544373*y)+b+(l=Fn[N])+(w=m),0))-w-l-p),r[0]=v,r[1]=s,r},gt=function(r,n){var t,e,u,o,f;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*Gn(u)*1.4426950408889634)-((e=Hn(e=(o=1.4426950216293335*u)+f,0))-o),r[0]=e,r[1]=t,r},jt=function(r,n,t){var e,u,o,f,i,c,a,l,y;return y=((l=r&ft|0)>>20)-1023|0,a=0,l>1071644672&&(u=nt(0,((a=r+(ct>>y+1)>>>0)&~(it>>(y=((a&ft)>>20)-1023|0)))>>>0),a=(a&it|ct)>>20-y>>>0,r<0&&(a=-a),n-=u),i=(f=.6931471805599453*(t-((u=tt(u=t+n,0))-n))+-1.904654299957768e-9*u)-((c=(o=.6931471824645996*u)+f)-o),e=c-(u=c*c)*ot(u),r=rt(c=1-(c*e/(e-2)-(i+c*i)-c)),r=et(r),c=(r+=a<<20>>>0)>>20<=0?ut(c,a):nt(c,r)},It=2147483647,Ot=1083179008,St=1e300,Et=1e-300,Ft=[0,0],Tt=[0,0],Ht=function r(n,t){var e,u,o,f,i,c,a,l,y,p,b,v,s,w;if(at(n)||at(t))return NaN;if(st(Ft,t),i=Ft[0],0===Ft[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return bt(n);if(-.5===t)return 1/bt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(yt(t))return Nt(n,t)}if(st(Ft,n),f=Ft[0],0===Ft[1]){if(0===f)return mt(n,t);if(1===n)return 1;if(-1===n&&lt(t))return-1;if(yt(n))return n===At?r(-0,-t):t<0?0:_t}if(n<0&&!1===pt(t))return(n-n)/(n-n);if(o=vt(n),e=f&It|0,u=i&It|0,a=i>>>31|0,c=(c=f>>>31|0)&&lt(t)?-1:1,u>1105199104){if(u>1139802112)return ht(n,t);if(e<1072693247)return 1===a?c*St*St:c*Et*Et;if(e>1072693248)return 0===a?c*St*St:c*Et*Et;b=gt(Tt,o)}else b=Ut(Tt,o,e);if(p=(t-(l=wt(t,0)))*b[0]+t*b[1],y=l*b[0],st(Ft,v=p+y),s=dt(Ft[0]),w=dt(Ft[1]),s>=Ot){if(0!=(s-Ot|w))return c*St*St;if(p+8008566259537294e-32>v-y)return c*St*St}else if((s&It)>=1083231232){if(0!=(s-3230714880|w))return c*Et*Et;if(p<=v-y)return c*Et*Et}return c*(v=jt(s,y,p))},Gt=Ht,Pt=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},Lt=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7},Mt=function(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*Pt(o),e+=u*u*Lt(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))},Vt=-.16666666666666632,Wt=function(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(Vt+u*t):r-(u*(.5*n-e*t)-n-e*Vt)},kt=Q,xt=!0===jr?0:1,qt=new ur(1),Yt=new kt(qt.buffer),Ct=function(r){return qt[0]=r,Yt[xt]},zt=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t},Bt=s,Dt=$n,Jt=function(r){return zt(0,r)},Kt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Qt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Rt=16777216,Xt=5.960464477539063e-8,Zt=Jt(20),$t=Jt(20),re=Jt(20),ne=Jt(20);function te(r,n,t,e,u,o,f,i,c){var a,l,y,p,b,v,s,w,d;for(p=o,d=e[t],w=t,b=0;w>0;b++)l=Xt*d|0,ne[b]=d-Rt*l|0,d=e[w-1]+l,w-=1;if(d=Dt(d,u),d-=8*Bt(.125*d),d-=s=0|d,y=0,u>0?(s+=b=ne[t-1]>>24-u,ne[t-1]-=b<<24-u,y=ne[t-1]>>23-u):0===u?y=ne[t-1]>>23:d>=.5&&(y=2),y>0){for(s+=1,a=0,b=0;b<t;b++)w=ne[b],0===a?0!==w&&(a=1,ne[b]=16777216-w):ne[b]=16777215-w;if(u>0)switch(u){case 1:ne[t-1]&=8388607;break;case 2:ne[t-1]&=4194303}2===y&&(d=1-d,0!==a&&(d-=Dt(1,u)))}if(0===d){for(w=0,b=t-1;b>=o;b--)w|=ne[b];if(0===w){for(v=1;0===ne[o-v];v++);for(b=t+1;b<=t+v;b++){for(c[i+b]=Kt[f+b],l=0,w=0;w<=i;w++)l+=r[w]*c[i+(b-w)];e[b]=l}return te(r,n,t+=v,e,u,o,f,i,c)}}if(0===d)for(t-=1,u-=24;0===ne[t];)t-=1,u-=24;else(d=Dt(d,-u))>=Rt?(l=Xt*d|0,ne[t]=d-Rt*l|0,u+=24,ne[t+=1]=l):ne[t]=0|d;for(l=Dt(1,u),b=t;b>=0;b--)e[b]=l*ne[b],l*=Xt;for(b=t;b>=0;b--){for(l=0,v=0;v<=p&&v<=t-b;v++)l+=Qt[v]*e[b+v];re[t-b]=l}for(l=0,b=t;b>=0;b--)l+=re[b];for(n[0]=0===y?l:-l,l=re[0]-l,b=1;b<=t;b++)l+=re[b];return n[1]=0===y?l:-l,7&s}var ee=function(r,n,t,e){var u,o,f,i,c,a,l;for((o=(t-3)/24|0)<0&&(o=0),i=t-24*(o+1),a=o-(f=e-1),l=f+4,c=0;c<=l;c++)Zt[c]=a<0?0:Kt[a],a+=1;for(c=0;c<=4;c++){for(u=0,a=0;a<=f;a++)u+=r[a]*Zt[f+(c-a)];$t[c]=u}return te(r,n,4,$t,i,4,o,f,Zt)},ue=Math.round,oe=Kr,fe=Kr,ie=Ct,ce=tn,ae=ee,le=function(r,n,t){var e,u,o,f,i;return o=r-1.5707963267341256*(e=ue(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=o-f,i-(oe(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=o)-(o=u-(f=6077100506303966e-26*e))-f),t[0]=o-f,i-(oe(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=o)-(o=u-(f=20222662487111665e-37*e))-f),t[0]=o-f)),t[1]=o-t[0]-f,e},ye=1.5707963267341256,pe=6077100506506192e-26,be=2*pe,ve=3*pe,se=4*pe,we=[0,0,0],de=[0,0],Ae=function(r,n){var t,e,u,o,f,i,c;if((u=2147483647&fe(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?le(r,u,n):u<=1073928572?r>0?(c=r-ye,n[0]=c-pe,n[1]=c-n[0]-pe,1):(c=r+ye,n[0]=c+pe,n[1]=c-n[0]+pe,-1):r>0?(c=r-2*ye,n[0]=c-be,n[1]=c-n[0]-be,2):(c=r+2*ye,n[0]=c+be,n[1]=c-n[0]+be,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?le(r,u,n):r>0?(c=r-3*ye,n[0]=c-ve,n[1]=c-n[0]-ve,3):(c=r+3*ye,n[0]=c+ve,n[1]=c-n[0]+ve,-3):1075388923===u?le(r,u,n):r>0?(c=r-4*ye,n[0]=c-se,n[1]=c-n[0]-se,4):(c=r+4*ye,n[0]=c+se,n[1]=c-n[0]+se,-4);if(u<1094263291)return le(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=ie(r),c=ce(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)we[f]=0|c,c=16777216*(c-we[f]);for(we[2]=c,o=3;0===we[o-1];)o-=1;return i=ae(we,de,e,o),r<0?(n[0]=-de[0],n[1]=-de[1],-i):(n[0]=de[0],n[1]=de[1],i)},_e=Kr,me=Mt,he=Wt,Ne=Ae,Ue=[0,0],ge=function(r){var n;if(n=_e(r),(n&=2147483647)<=1072243195)return n<1045430272?r:he(r,0);if(n>=2146435072)return NaN;switch(3&Ne(r,Ue)){case 0:return he(Ue[0],Ue[1]);case 1:return me(Ue[0],Ue[1]);case 2:return-he(Ue[0],Ue[1]);default:return-me(Ue[0],Ue[1])}},je=1.5707963267948966;function Ie(r,n,t){return v(n)||v(t)||n>=t||v(r)||r<0||r>1?NaN:n+Gt(ge(je*r),2)*(t-n)}var Oe=function(r){return function(){return r}};return b(Ie,"factory",(function(r,n){return v(r)||v(n)||r>=n?Oe(NaN):function(t){return v(t)||t<0||t>1?NaN:r+Gt(ge(je*t),2)*(n-r)}})),Ie},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).quantile=n();
//# sourceMappingURL=index.js.map
