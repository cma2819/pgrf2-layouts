import{r as a,c as e,o as t,b as s,d as l,e as u,F as n,h as r,u as o,m as c,f as m,i}from"./vendor.82ab3a02.js";import{_ as d,a as v,s as f}from"./index.323d1d4a.js";import{_ as b,a as p,b as h,c as y,d as _}from"./Footer.f31b230b.js";import{_ as g}from"./WatchReplicant.6590e94a.js";const j={id:"sidebar"},C={id:"infos"};i({setup(i){const f=a("1612.8px"),T=a(1080*.84+"px"),x=m(),A=e((()=>x.getters.currentEst)),R=e((()=>x.getters.formattedTime)),k=e((()=>x.state.timer.status)),E=e((()=>x.state.runs.currentRunners)),F=e((()=>x.state.runs.currentCommentators));return t((()=>{setInterval((()=>{x.dispatch("rotateAccounts")}),1e4)})),(a,e)=>(s(),l(n,null,[u(g),u(d),u("header",null,[u(b)]),u("main",{style:{gridTemplateColumns:`1fr ${f.value}`}},[u("div",j,[u(v,{small:""}),u("div",C,[(s(!0),l(n,null,r(o(E),(a=>(s(),l(p,{key:a.id,label:"Runner",value:a.name,account:a.currentAccount()},null,8,["value","account"])))),128)),(s(!0),l(n,null,r(o(F),((a,e)=>(s(),l(p,{key:e,label:"Commentator",value:a.name,account:a.currentAccount()},null,8,["value","account"])))),128)),u(p,{time:"",label:"EST"},{default:c((()=>[u(_,{value:o(A)},null,8,["value"])])),_:1}),u(p,{time:"",label:"Current Time"},{default:c((()=>[u(_,{value:o(R),status:o(k)},null,8,["value","status"])])),_:1})])]),u(h,{style:{width:f.value,height:T.value}},null,8,["style"])],4),u("footer",null,[u(y)])],64))}}).use(f).mount("#root");
