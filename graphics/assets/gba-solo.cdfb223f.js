import{r as e,c as a,o as t,b as s,d as l,e as u,F as n,h as r,u as o,m as c,f as m,i}from"./vendor.9cdb726b.js";import{_ as d,a as v,b,s as f}from"./index.3d716ce5.js";import{_ as p,a as h,b as y,c as g,d as x}from"./Footer.968b89f5.js";const C={id:"sidebar"},T={id:"infos"};i({setup(i){const f=e(1920*.72+"px"),_=e(1280*.72+"px"),j=m(),A=a((()=>j.getters.currentEst)),k=a((()=>j.getters.formattedTime)),E=a((()=>j.state.timer.status)),F=a((()=>j.state.runs.currentRunners)),R=a((()=>j.state.runs.currentCommentators));return t((()=>{setInterval((()=>{j.dispatch("rotateAccounts")}),1e4)})),(e,a)=>(s(),l(n,null,[u(d),u(v),u("header",null,[u(p)]),u("main",{style:{gridTemplateColumns:`420px ${f.value}`}},[u("div",C,[u(b,{small:""}),u("div",T,[(s(!0),l(n,null,r(o(F),(e=>(s(),l(h,{key:e.id,label:"Runner",value:e.name,account:e.currentAccount()},null,8,["value","account"])))),128)),(s(!0),l(n,null,r(o(R),((e,a)=>(s(),l(h,{key:a,label:"Commentator",value:e.name,account:e.currentAccount()},null,8,["value","account"])))),128)),u(h,{time:"",label:"EST"},{default:c((()=>[u(x,{value:o(A)},null,8,["value"])])),_:1}),u(h,{time:"",label:"Current Time"},{default:c((()=>[u(x,{value:o(k),status:o(E)},null,8,["value","status"])])),_:1})])]),u(y,{style:{width:f.value,height:_.value}},null,8,["style"])],4),u("footer",null,[u(g)])],64))}}).use(f).mount("#root");
