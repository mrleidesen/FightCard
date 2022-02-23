import{o as m,c as _,a as n,n as U,t as d,i as L,j,F as z,k as G,l as $,m as V,u as A,p as D,r as k,b as g,w as F,e as R}from"./vendor.0ee23b34.js";import{_ as S,U as q}from"./index.eac90679.js";import{l as B,m as T,u as b,e as y,a as H,b as E,c as I,d as f,f as c,g as J,h as K,i as N,o as M,j as O,k as Q,n as W}from"./cards.9c21be67.js";const X={props:{value:{type:Number,default:1},type:{type:String,default:"atk"},name:{type:String,default:"\u780D\u51FB"},desc:{type:String,default:""}}},Y=["title"],Z={class:"border-b border-white px-2 pb-1 w-full"},ee={class:"flex-1 flex justify-center items-center px-2 text-center"},te={class:"font-semibold text-2xl"};function ae(l,r,a,e,h,v){return m(),_("div",{class:"relative border border-white w-32 h-48 rounded-xl bg-gray-700 overflow-hidden py-1 select-none flex flex-col cursor-pointer transition-transform hover:-translate-y-3 hover:z-20",title:a.desc},[n("div",Z,[n("span",{class:U(["font-semibold text-xl",{"text-red-500":a.type==="atk","text-green-500":a.type==="heal","text-orange-500":a.type==="draw","text-blue-500":a.type==="drop"}])},d(a.value),3)]),n("div",ee,[n("span",te,d(a.name),1)])],8,Y)}var se=S(X,[["render",ae]]);const ne={setup(){const l=L(null);return j(()=>[...B],()=>{setTimeout(()=>{var r,a;(a=l==null?void 0:l.value)==null||a.scrollTo(0,(r=l==null?void 0:l.value)==null?void 0:r.scrollHeight)},0)}),{logs:B,el:l}}},le={ref:"el",class:"w-full h-full border border-white overflow-y-auto overflow-x-hidden p-1"},re={class:"text-gray-200 text-sm"};function oe(l,r,a,e,h,v){return m(),_("div",le,[(m(!0),_(z,null,G(e.logs,u=>(m(),_("div",{key:u.date},[n("span",re,d(u.date),1),n("p",null,d(u.text),1)]))),128))],512)}var ce=S(ne,[["render",oe]]);const de={props:{value:{type:Number,default:100},name:{type:String,default:""}},setup(l){const r=$(()=>l.value/T*100),a=$(()=>r.value<=50&&r.value>20?"bg-orange-500":r.value<=20?"bg-red-500":"bg-green-500");return{maxHealth:T,healPercent:r,statusColor:a}}},ue={class:"w-full flex flex-col"},ie={class:"border border-white w-full h-2 bg-gray-700"};function fe(l,r,a,e,h,v){return m(),_("div",ue,[n("span",null,d(a.name)+" \uFF08"+d(a.value)+"/"+d(e.maxHealth)+"\uFF09",1),n("div",ie,[n("div",{class:U(["h-full",e.statusColor]),style:V(`width: ${e.healPercent}%;`)},null,6)])])}var me=S(de,[["render",fe]]);const _e={components:{GameCard:se,GameLogs:ce,UserStatus:me,UiButton:q},setup(){const l=A(),r=L(0),a=$(()=>b.value===0||y.value===0),e=$(()=>r.value%2===0);j(e,()=>{e.value?N(f):(N(c),C())},{immediate:!0}),D(()=>{a.value&&(b.value===0?l.push("/end?result=lose"):l.push("/end?result=win"))});const h=()=>{a.value||(v(f),v(c),r.value+=1)},v=(s,o=4)=>{const i=s.length;if(!(i<=o))for(let x=0;x<i-o;x++){const t=Q(0,i-1);s.splice(t,1)}},u=(s,o=1)=>{s.length!==0&&s.splice(0,o)},p=s=>{if(a.value)return;const o=e.value?H:E,i=e.value?E:H,t=(e.value?f:c).find(P=>P.id===s);t.type==="atk"&&J(e.value?y:b,t.value),t.type==="heal"&&K(e.value?b:y,t.value),t.type==="draw"&&N(e.value?f:c,t.value),t.type==="drop"&&u(e.value?c:f,t.value),M(e.value?f:c,s),O(o,i,t.type,t.name,t.value)},w=s=>{if(s.length!==0)for(const o of s)p(o.id)},C=()=>{const s=c.filter(t=>t.type==="draw");if(s.length>0){w(s),setTimeout(C,50);return}const o=c.filter(t=>t.type==="drop"),i=c.filter(t=>t.type==="heal"),x=c.filter(t=>t.type==="atk");if(y.value<T*.8&&i.length!==0)for(const t of i)y.value<T*.9&&p(t.id);if(o.length!==0)for(const t of o){if(f.length===0)break;p(t.id)}w(x),W(),setTimeout(h,50)};return{userHealth:b,username:H,enemyHealth:y,enemyname:E,cards:I,userCards:f,enemyCards:c,handleTurnEnd:h,selectCard:p,turn:r,isUserTurn:e}}},he={class:"w-full h-full p-4 flex flex-col gap-4"},ve={class:"flex-shrink-0"},pe={class:"flex-1 w-full border border-white rounded p-2 flex flex-col"},ye={class:"h-48"},xe={class:"p-2"},ge={class:"mr-5"},be={class:"mr-5"},we=R("\u56DE\u5408\u7ED3\u675F"),Ce={class:"flex-1 items-end flex overflow-x-auto"},ke={class:"flex-shrink-0"};function $e(l,r,a,e,h,v){const u=k("user-status"),p=k("game-logs"),w=k("ui-button"),C=k("game-card");return m(),_("div",he,[n("div",ve,[g(u,{value:e.enemyHealth,name:e.enemyname},null,8,["value","name"])]),n("div",pe,[n("div",ye,[g(p)]),n("div",xe,[n("span",ge,"\u5BF9\u65B9\u624B\u724C\uFF1A"+d(e.enemyCards.length),1),n("span",be,"\u5269\u4F59\u5361\u724C\uFF1A"+d(e.cards.length),1),g(w,{onClick:e.handleTurnEnd},{default:F(()=>[we]),_:1},8,["onClick"])]),n("div",Ce,[(m(!0),_(z,null,G(e.userCards,s=>(m(),_("div",{key:s.id,class:"first:ml-0 -ml-16"},[g(C,{value:s.value,name:s.name,type:s.type,title:s.desc,onClick:o=>e.selectCard(s.id)},null,8,["value","name","type","title","onClick"])]))),128))])]),n("div",ke,[g(u,{value:e.userHealth,name:e.username},null,8,["value","name"])])])}var Ee=S(_e,[["render",$e]]);export{Ee as default};