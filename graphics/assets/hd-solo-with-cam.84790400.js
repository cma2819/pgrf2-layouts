import{c as t,o as e,b as a,d as s,e as l,u,F as n,h as r,m as o,f as i,i as c}from"./vendor.82ab3a02.js";import{_ as m,a as d,b as v,s as b}from"./index.27240014.js";import{_ as f,b as h,a as p,c as y,d as g}from"./Footer.f31b230b.js";const x={id:"sidebar"},C={id:"infos"};c({setup(c){const b=t((()=>({width:"1228.8px",height:"691.2px"}))),T=t((()=>({width:"576px",height:"384px"}))),_=i(),j=t((()=>_.getters.currentEst)),w=t((()=>_.getters.formattedTime)),A=t((()=>_.state.timer.status)),k=t((()=>_.state.runs.currentRunners)),E=t((()=>_.state.runs.currentCommentators));return e((()=>{setInterval((()=>{_.dispatch("rotateAccounts")}),1e4)})),(t,e)=>(a(),s(n,null,[l(m),l(d),l("header",null,[l(f)]),l("main",{style:{gridTemplateColumns:`1fr ${u(b).width}`}},[l("div",x,[l(h,{style:u(T)},null,8,["style"]),l(v,{small:""}),l("div",C,[(a(!0),s(n,null,r(u(k),(t=>(a(),s(p,{key:t.id,label:"Runner",value:t.name,account:t.currentAccount()},null,8,["value","account"])))),128)),(a(!0),s(n,null,r(u(E),((t,e)=>(a(),s(p,{key:e,label:"Commentator",value:t.name,account:t.currentAccount()},null,8,["value","account"])))),128)),l(p,{time:"",label:"EST",id:"est"},{default:o((()=>[l(g,{value:u(j)},null,8,["value"])])),_:1}),l(p,{time:"",label:"Current Time",id:"current-time"},{default:o((()=>[l(g,{value:u(w),status:u(A)},null,8,["value","status"])])),_:1})])]),l(h,{style:u(b)},null,8,["style"])],4),l("footer",null,[l(y)])],64))}}).use(b).mount("#root");
