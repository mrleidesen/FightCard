import{s as u,u as i,l as m,r as d,o as _,c as p,a as f,t as h,b as x,w as g,e as b}from"./vendor.0ee23b34.js";import{_ as v,U as y}from"./index.eac90679.js";import{b as a,r as C,u as R,m as r,e as k,l as n}from"./cards.9c21be67.js";const B={components:{UiButton:y},setup(){const s=u(),o=i(),e=s.query.result;return{resultText:m(()=>e==="lose"?`\u4F60\u88AB${a}\u6253\u8D25\u4E86`:e==="win"?`\u4F60\u51FB\u8D25\u4E86${a}`:"\u7ED3\u679C\u672A\u51FA"),handleRestart:()=>{C(),R.value=r,k.value=r,n.splice(0,n.length),o.push("/game")}}}},T={class:"h-full p-5 flex flex-col items-center justify-center gap-6"},$={class:"font-semibold text-3xl text-center"},w=b("\u91CD\u65B0\u73A9\u513F");function H(s,o,e,t,l,N){const c=d("ui-button");return _(),p("div",T,[f("h1",$,h(t.resultText),1),x(c,{onClick:t.handleRestart},{default:g(()=>[w]),_:1},8,["onClick"])])}var j=v(B,[["render",H]]);export{j as default};