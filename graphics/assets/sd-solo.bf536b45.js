import{r as a,c as e,o as t,b as s,d as u,e as l,F as n,h as r,u as o,m as c,f as m,i}from"./vendor.82ab3a02.js";import{_ as d,a as v,b,s as f}from"./index.27240014.js";import{_ as p,a as h,b as y,c as _,d as g}from"./Footer.d6e861c6.js";const j={id:"sidebar"},x={id:"infos"};i({setup(i){const f=a("1228.8px"),A=a("921.6px"),C=m(),T=e((()=>C.getters.currentEst)),k=e((()=>C.getters.formattedTime)),E=e((()=>C.state.timer.status)),F=e((()=>C.state.runs.currentRunners)),R=e((()=>C.state.runs.currentCommentators));return t((()=>{setInterval((()=>{C.dispatch("rotateAccounts")}),1e4)})),(a,e)=>(s(),u(n,null,[l(d),l(v),l("header",null,[l(p)]),l("main",null,[l("div",j,[l(b,{small:""}),l("div",x,[(s(!0),u(n,null,r(o(F),(a=>(s(),u(h,{key:a.id,label:"Runner",value:a.name,account:a.currentAccount()},null,8,["value","account"])))),128)),(s(!0),u(n,null,r(o(R),((a,e)=>(s(),u(h,{key:e,label:"Commentator",value:a.name,account:a.currentAccount()},null,8,["value","account"])))),128)),l(h,{time:"",label:"EST"},{default:c((()=>[l(g,{value:o(T)},null,8,["value"])])),_:1}),l(h,{time:"",label:"Current Time"},{default:c((()=>[l(g,{value:o(k),status:o(E)},null,8,["value","status"])])),_:1})])]),l(y,{style:{width:f.value,height:A.value}},null,8,["style"])]),l("footer",null,[l(_)])],64))}}).use(f).mount("#root");