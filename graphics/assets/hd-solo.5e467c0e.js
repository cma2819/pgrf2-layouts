import{r as e,c as a,o as t,b as s,d as l,e as u,F as n,h as r,u as o,m as c,f as m,i}from"./vendor.9cdb726b.js";import{_ as d,a as v,s as f}from"./index.778b346a.js";import{_ as b,a as p,b as h,c as y,d as _}from"./Footer.c709d84e.js";import{_ as g}from"./WatchReplicant.488b2cf0.js";const j={id:"sidebar"},C={id:"infos"};i({setup(i){const f=e("1612.8px"),T=e(1080*.84+"px"),x=m(),A=a((()=>x.getters.currentEst)),R=a((()=>x.getters.formattedTime)),k=a((()=>x.state.timer.status)),E=a((()=>x.state.runs.currentRunners)),F=a((()=>x.state.runs.currentCommentators));return t((()=>{setInterval((()=>{x.dispatch("rotateAccounts")}),1e4)})),(e,a)=>(s(),l(n,null,[u(g),u(d),u("header",null,[u(b)]),u("main",{style:{gridTemplateColumns:`1fr ${f.value}`}},[u("div",j,[u(v,{small:""}),u("div",C,[(s(!0),l(n,null,r(o(E),(e=>(s(),l(p,{key:e.id,label:"Runner",value:e.name,account:e.currentAccount()},null,8,["value","account"])))),128)),(s(!0),l(n,null,r(o(F),((e,a)=>(s(),l(p,{key:a,label:"Commentator",value:e.name,account:e.currentAccount()},null,8,["value","account"])))),128)),u(p,{time:"",label:"EST"},{default:c((()=>[u(_,{value:o(A)},null,8,["value"])])),_:1}),u(p,{time:"",label:"Current Time"},{default:c((()=>[u(_,{value:o(R),status:o(k)},null,8,["value","status"])])),_:1})])]),u(h,{style:{width:f.value,height:T.value}},null,8,["style"])],4),u("footer",null,[u(y)])],64))}}).use(f).mount("#root");
