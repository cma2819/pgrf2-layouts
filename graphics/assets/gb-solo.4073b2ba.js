import{r as a,c as e,o as t,b as s,d as u,e as l,F as n,i as r,u as o,m as c,f as m,j as i}from"./vendor.801e32df.js";import{_ as d,a as v,b as f,s as b}from"./index.7fbfb017.js";import{_ as p,a as h,b as j,c as y,d as _}from"./Footer.11da7d07.js";const g={id:"sidebar"},x={id:"infos"};i({setup(i){const b=a("1024px"),A=a("921.6px"),C=m(),T=e((()=>C.getters.currentEst)),k=e((()=>C.getters.formattedTime)),E=e((()=>C.state.timer.status)),F=e((()=>C.state.runs.currentRunners)),R=e((()=>C.state.runs.currentCommentators));return t((()=>{setInterval((()=>{C.dispatch("rotateAccounts")}),1e4)})),(a,e)=>(s(),u(n,null,[l(d),l(v),l("header",null,[l(p)]),l("main",null,[l("div",g,[l(f,{small:""}),l("div",x,[(s(!0),u(n,null,r(o(F),(a=>(s(),u(h,{key:a.id,label:"Runner",value:a.name,account:a.currentAccount()},null,8,["value","account"])))),128)),(s(!0),u(n,null,r(o(R),((a,e)=>(s(),u(h,{key:e,label:"Commentator",value:a.name,account:a.currentAccount()},null,8,["value","account"])))),128)),l(h,{time:"",label:"EST"},{default:c((()=>[l(_,{value:o(T)},null,8,["value"])])),_:1}),l(h,{time:"",label:"Current Time"},{default:c((()=>[l(_,{value:o(k),status:o(E)},null,8,["value","status"])])),_:1})])]),l(j,{style:{width:b.value,height:A.value}},null,8,["style"])]),l("footer",null,[l(y)])],64))}}).use(b).mount("#root");
