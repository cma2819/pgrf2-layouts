import{r as e,c as a,o as t,b as s,d as u,e as l,F as n,h as r,u as o,m as c,f as m,i}from"./vendor.9cdb726b.js";import{_ as d,a as v,b,s as f}from"./index.a88be41f.js";import{_ as p,a as h,b as y,c as _,d as g}from"./Footer.c709d84e.js";const j={id:"sidebar"},x={id:"infos"};i({setup(i){const f=e("1024px"),A=e("921.6px"),C=m(),T=a((()=>C.getters.currentEst)),k=a((()=>C.getters.formattedTime)),E=a((()=>C.state.timer.status)),F=a((()=>C.state.runs.currentRunners)),R=a((()=>C.state.runs.currentCommentators));return t((()=>{setInterval((()=>{C.dispatch("rotateAccounts")}),1e4)})),(e,a)=>(s(),u(n,null,[l(d),l(v),l("header",null,[l(p)]),l("main",null,[l("div",j,[l(b,{small:""}),l("div",x,[(s(!0),u(n,null,r(o(F),(e=>(s(),u(h,{key:e.id,label:"Runner",value:e.name,account:e.currentAccount()},null,8,["value","account"])))),128)),(s(!0),u(n,null,r(o(R),((e,a)=>(s(),u(h,{key:a,label:"Commentator",value:e.name,account:e.currentAccount()},null,8,["value","account"])))),128)),l(h,{time:"",label:"EST"},{default:c((()=>[l(g,{value:o(T)},null,8,["value"])])),_:1}),l(h,{time:"",label:"Current Time"},{default:c((()=>[l(g,{value:o(k),status:o(E)},null,8,["value","status"])])),_:1})])]),l(y,{style:{width:f.value,height:A.value}},null,8,["style"])]),l("footer",null,[l(_)])],64))}}).use(f).mount("#root");
