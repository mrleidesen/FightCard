import{o as v,c as y,a as c,n as q,t as f,i as T,v as x,j as O,k as X,F as W,l as J,m as j,p as B,u as ne,q as se,s as oe,r as w,b as h}from"./vendor.f3cff02a.js";import{g as le,l as E,m as b,p,d as G,a as U,b as S}from"./monster.55658c16.js";import{_ as $}from"./index.4008110f.js";var m=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function ie(e,r){var t=-1,a=e.length;for(r||(r=Array(a));++t<a;)r[t]=e[t];return r}var ce=ie,ue=Math.floor,fe=Math.random;function de(e,r){return e+ue(fe()*(r-e+1))}var be=de,ve=be;function ye(e,r){var t=-1,a=e.length,n=a-1;for(r=r===void 0?a:r;++t<r;){var o=ve(t,n),i=e[o];e[o]=e[t],e[t]=i}return e.length=r,e}var Q=ye,ge=ce,pe=Q;function _e(e){return pe(ge(e))}var he=_e;function me(e,r){for(var t=-1,a=e==null?0:e.length,n=Array(a);++t<a;)n[t]=r(e[t],t,e);return n}var Te=me,xe=Te;function je(e,r){return xe(r,function(t){return e[t]})}var $e=je;function ke(e,r){for(var t=-1,a=Array(e);++t<e;)a[t]=r(t);return a}var Ae=ke,we=typeof m=="object"&&m&&m.Object===Object&&m,Y=we,Se=Y,Oe=typeof self=="object"&&self&&self.Object===Object&&self,Pe=Se||Oe||Function("return this")(),Z=Pe,Ie=Z,Fe=Ie.Symbol,z=Fe,D=z,ee=Object.prototype,Le=ee.hasOwnProperty,Me=ee.toString,_=D?D.toStringTag:void 0;function Be(e){var r=Le.call(e,_),t=e[_];try{e[_]=void 0;var a=!0}catch{}var n=Me.call(e);return a&&(r?e[_]=t:delete e[_]),n}var Ee=Be,Ge=Object.prototype,Ue=Ge.toString;function De(e){return Ue.call(e)}var Re=De,R=z,Ce=Ee,Ke=Re,Ve="[object Null]",Ne="[object Undefined]",C=R?R.toStringTag:void 0;function He(e){return e==null?e===void 0?Ne:Ve:C&&C in Object(e)?Ce(e):Ke(e)}var F=He;function qe(e){return e!=null&&typeof e=="object"}var L=qe,Xe=F,We=L,Je="[object Arguments]";function Qe(e){return We(e)&&Xe(e)==Je}var Ye=Qe,K=Ye,Ze=L,te=Object.prototype,ze=te.hasOwnProperty,et=te.propertyIsEnumerable,tt=K(function(){return arguments}())?K:function(e){return Ze(e)&&ze.call(e,"callee")&&!et.call(e,"callee")},rt=tt,at=Array.isArray,re=at,P={exports:{}};function nt(){return!1}var st=nt;(function(e,r){var t=Z,a=st,n=r&&!r.nodeType&&r,o=n&&!0&&e&&!e.nodeType&&e,i=o&&o.exports===n,u=i?t.Buffer:void 0,d=u?u.isBuffer:void 0,l=d||a;e.exports=l})(P,P.exports);var ot=9007199254740991,lt=/^(?:0|[1-9]\d*)$/;function it(e,r){var t=typeof e;return r=r==null?ot:r,!!r&&(t=="number"||t!="symbol"&&lt.test(e))&&e>-1&&e%1==0&&e<r}var ct=it,ut=9007199254740991;function ft(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ut}var ae=ft,dt=F,bt=ae,vt=L,yt="[object Arguments]",gt="[object Array]",pt="[object Boolean]",_t="[object Date]",ht="[object Error]",mt="[object Function]",Tt="[object Map]",xt="[object Number]",jt="[object Object]",$t="[object RegExp]",kt="[object Set]",At="[object String]",wt="[object WeakMap]",St="[object ArrayBuffer]",Ot="[object DataView]",Pt="[object Float32Array]",It="[object Float64Array]",Ft="[object Int8Array]",Lt="[object Int16Array]",Mt="[object Int32Array]",Bt="[object Uint8Array]",Et="[object Uint8ClampedArray]",Gt="[object Uint16Array]",Ut="[object Uint32Array]",s={};s[Pt]=s[It]=s[Ft]=s[Lt]=s[Mt]=s[Bt]=s[Et]=s[Gt]=s[Ut]=!0;s[yt]=s[gt]=s[St]=s[pt]=s[Ot]=s[_t]=s[ht]=s[mt]=s[Tt]=s[xt]=s[jt]=s[$t]=s[kt]=s[At]=s[wt]=!1;function Dt(e){return vt(e)&&bt(e.length)&&!!s[dt(e)]}var Rt=Dt;function Ct(e){return function(r){return e(r)}}var Kt=Ct,I={exports:{}};(function(e,r){var t=Y,a=r&&!r.nodeType&&r,n=a&&!0&&e&&!e.nodeType&&e,o=n&&n.exports===a,i=o&&t.process,u=function(){try{var d=n&&n.require&&n.require("util").types;return d||i&&i.binding&&i.binding("util")}catch{}}();e.exports=u})(I,I.exports);var Vt=Rt,Nt=Kt,V=I.exports,N=V&&V.isTypedArray,Ht=N?Nt(N):Vt,qt=Ht,Xt=Ae,Wt=rt,Jt=re,Qt=P.exports,Yt=ct,Zt=qt,zt=Object.prototype,er=zt.hasOwnProperty;function tr(e,r){var t=Jt(e),a=!t&&Wt(e),n=!t&&!a&&Qt(e),o=!t&&!a&&!n&&Zt(e),i=t||a||n||o,u=i?Xt(e.length,String):[],d=u.length;for(var l in e)(r||er.call(e,l))&&!(i&&(l=="length"||n&&(l=="offset"||l=="parent")||o&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Yt(l,d)))&&u.push(l);return u}var rr=tr,ar=Object.prototype;function nr(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||ar;return e===t}var sr=nr;function or(e,r){return function(t){return e(r(t))}}var lr=or,ir=lr,cr=ir(Object.keys,Object),ur=cr,fr=sr,dr=ur,br=Object.prototype,vr=br.hasOwnProperty;function yr(e){if(!fr(e))return dr(e);var r=[];for(var t in Object(e))vr.call(e,t)&&t!="constructor"&&r.push(t);return r}var gr=yr;function pr(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var _r=pr,hr=F,mr=_r,Tr="[object AsyncFunction]",xr="[object Function]",jr="[object GeneratorFunction]",$r="[object Proxy]";function kr(e){if(!mr(e))return!1;var r=hr(e);return r==xr||r==jr||r==Tr||r==$r}var Ar=kr,wr=Ar,Sr=ae;function Or(e){return e!=null&&Sr(e.length)&&!wr(e)}var Pr=Or,Ir=rr,Fr=gr,Lr=Pr;function Mr(e){return Lr(e)?Ir(e):Fr(e)}var Br=Mr,Er=$e,Gr=Br;function Ur(e){return e==null?[]:Er(e,Gr(e))}var Dr=Ur,Rr=Q,Cr=Dr;function Kr(e){return Rr(Cr(e))}var Vr=Kr,Nr=he,Hr=Vr,qr=re;function Xr(e){var r=qr(e)?Nr:Hr;return r(e)}var H=Xr;const Wr={props:{skill:{type:Object,default:()=>le("\u666E\u901A\u653B\u51FB","atk",[1,2],0)},atkDisabled:{type:Boolean,default:!1},skillDisabled:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}}},Jr={class:"relative border border-white w-32 h-48 rounded-xl bg-gray-700 overflow-hidden py-1 select-none flex flex-col cursor-pointer transition-transform hover:-translate-y-3 hover:z-20"},Qr={class:"border-b border-white px-2 pb-1 w-full flex justify-between"},Yr={class:"text-xl text-white"},Zr={class:"flex-1 flex justify-center items-center px-2 text-center"},zr={class:"font-semibold text-2xl"},ea={class:"absolute inset-0 top-0 left-0 bg-black opacity-50"},ta={class:"absolute inset-0 top-0 left-0 bg-black opacity-50"},ra={class:"absolute inset-0 top-0 left-0 bg-black opacity-50"};function aa(e,r,t,a,n,o){return v(),y("div",Jr,[c("div",Qr,[c("span",{class:q(["font-semibold text-xl",{"text-red-500":t.skill.type==="atk","text-green-500":t.skill.type==="heal","text-orange-500":t.skill.type==="skill","text-blue-500":t.skill.type==="healMp"}])},f(t.skill.value.min)+"-"+f(t.skill.value.max),3),c("span",Yr,f(t.skill.cost),1)]),c("div",Zr,[c("span",zr,f(t.skill.name),1)]),T(c("div",ea,null,512),[[x,t.disabled]]),T(c("div",ta,null,512),[[x,t.skill.type==="atk"&&t.atkDisabled]]),T(c("div",ra,null,512),[[x,t.skill.type!=="atk"&&t.skillDisabled]])])}var na=$(Wr,[["render",aa]]);const sa={setup(){const e=O(null);return X(()=>[...E],()=>{setTimeout(()=>{var r,t;(t=e==null?void 0:e.value)==null||t.scrollTo(0,(r=e==null?void 0:e.value)==null?void 0:r.scrollHeight)},0)}),{logs:E,el:e}}},oa={ref:"el",class:"w-full h-full border border-white overflow-y-auto overflow-x-hidden p-1"},la={class:"text-gray-200 text-sm"};function ia(e,r,t,a,n,o){return v(),y("div",oa,[(v(!0),y(W,null,J(a.logs,i=>(v(),y("div",{key:i.date},[c("span",la,f(i.date),1),c("p",null,f(i.text),1)]))),128))],512)}var ca=$(sa,[["render",ia]]);const ua={props:{status:{type:Object,default:()=>({name:"",maxHP:100,hp:100,maxMP:0,mp:0})}},setup(e){const r=j(()=>e.status.hp/e.status.maxHP*100),t=j(()=>r.value<=50&&r.value>20?"bg-orange-500":r.value<=20?"bg-red-500":"bg-green-500"),a=j(()=>e.status.mp/e.status.maxMP*100);return{healPercent:r,statusColor:t,mpPercent:a}}},fa={class:"w-full flex flex-col"},da={class:"border border-white w-full h-2 bg-gray-700"},ba={class:"border border-white w-full h-2 bg-gray-700"};function va(e,r,t,a,n,o){return v(),y("div",fa,[c("span",null,f(t.status.name)+" \uFF08"+f(t.status.hp)+"/"+f(t.status.maxHP)+"\uFF09\uFF08"+f(t.status.mp)+"/"+f(t.status.maxMP)+"\uFF09 ",1),c("div",da,[c("div",{class:q(["h-full",a.statusColor]),style:B(`width: ${a.healPercent}%;`)},null,6)]),T(c("div",ba,[c("div",{class:"h-full bg-blue-500",style:B(`width: ${a.mpPercent}%;`)},null,4)],512),[[x,t.status.maxMP>0]])])}var ya=$(ua,[["render",va]]);const ga={components:{GameCard:na,GameLogs:ca,UserStatus:ya},setup(){const e=ne(),r=O(!1),t=O(!1),a=2e3,n=4e3;let o=null;const i=j(()=>b.hp===0||p.hp===0);X(i,()=>{i.value&&(l(),e.push(`/end?result=${b.hp===0?"win":"lose"}`))}),se(()=>{d()}),oe(()=>{l()});function u(){const k=b.hp/b.maxHP*100,g=H(U.filter(A=>A.type!=="heal"));k<90?S(b,p,H(U).pop()):S(b,p,g.pop())}function d(){o&&l(),o=setInterval(()=>{u()},n)}function l(){o&&(clearInterval(o),o=null)}function M(k){const g=G.find(A=>A.name===k);g.type==="atk"&&t.value||g.type!=="atk"&&r.value||p.mp<g.cost||(S(p,b,g),g.type==="atk"?(t.value=!0,setTimeout(()=>{t.value=!1},1500)):(r.value=!0,setTimeout(()=>{r.value=!1},a)))}return{player:p,monster:b,playerSkills:G,handleUseSkill:M,skillDisabled:r,atkDisabled:t}}},pa={class:"w-full h-full p-4 flex flex-col gap-4"},_a={class:"flex-shrink-0"},ha={class:"flex-1 w-full border border-white rounded p-2 flex flex-col"},ma={class:"h-48"},Ta={class:"flex-1 items-end flex overflow-x-auto"},xa={class:"flex-shrink-0"};function ja(e,r,t,a,n,o){const i=w("user-status"),u=w("game-logs"),d=w("game-card");return v(),y("div",pa,[c("div",_a,[h(i,{status:a.monster},null,8,["status"])]),c("div",ha,[c("div",ma,[h(u)]),c("div",Ta,[(v(!0),y(W,null,J(a.playerSkills,l=>(v(),y("div",{key:l.name,class:"first:ml-0 -ml-16 relative"},[h(d,{skill:l,"atk-disabled":a.atkDisabled,"skill-disabled":a.skillDisabled,disabled:a.player.mp<l.cost,onClick:M=>a.handleUseSkill(l.name)},null,8,["skill","atk-disabled","skill-disabled","disabled","onClick"])]))),128))])]),c("div",xa,[h(i,{status:a.player},null,8,["status"])])])}var wa=$(ga,[["render",ja]]);export{wa as default};
