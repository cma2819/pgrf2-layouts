import{r as e,c as a,o as t,b as s,d as l,e as u,F as n,h as r,u as o,m as c,f as m,i}from"./vendor.9cdb726b.js";import{_ as d,a as v,b,s as f}from"./index.71ad87e2.js";import{_ as p,a as h,b as y,c as g,d as C}from"./Footer.c709d84e.js";const T={id:"sidebar"},_={id:"infos"};i({setup(i){const f=e("1612.8px"),j=e(1080*.84+"px"),x=m(),A=a((()=>x.getters.currentEst)),k=a((()=>x.getters.formattedTime)),E=a((()=>x.state.timer.status)),F=a((()=>x.state.runs.currentRunners)),R=a((()=>x.state.runs.currentCommentators));return t((()=>{setInterval((()=>{x.dispatch("rotateAccounts")}),1e4)})),(e,a)=>(s(),l(n,null,[u(d),u(v),u("header",null,[u(p)]),u("main",{style:{gridTemplateColumns:`1fr ${f.value}`}},[u("div",T,[u(b,{small:""}),u("div",_,[(s(!0),l(n,null,r(o(F),(e=>(s(),l(h,{key:e.id,label:"Runner",value:e.name,account:e.currentAccount()},null,8,["value","account"])))),128)),(s(!0),l(n,null,r(o(R),((e,a)=>(s(),l(h,{key:a,label:"Commentator",value:e.name,account:e.currentAccount()},null,8,["value","account"])))),128)),u(h,{time:"",label:"EST"},{default:c((()=>[u(C,{value:o(A)},null,8,["value"])])),_:1}),u(h,{time:"",label:"Current Time"},{default:c((()=>[u(C,{value:o(k),status:o(E)},null,8,["value","status"])])),_:1})])]),u(y,{style:{width:f.value,height:j.value}},null,8,["style"])],4),u("footer",null,[u(g)])],64))}}).use(f).mount("#root");
