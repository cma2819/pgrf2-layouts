import{c as t,o as e,b as a,d as s,e as l,u,F as n,i as r,m as o,f as i,j as c}from"./vendor.801e32df.js";import{_ as m,a as d,b as v,s as f}from"./index.cc0145b4.js";import{_ as p,b,a as h,c as y,d as g}from"./Footer.11da7d07.js";const x={id:"sidebar"},j={id:"infos"};c({setup(c){const f=t((()=>({width:"1228.8px",height:"691.2px"}))),C=t((()=>({width:"576px",height:"384px"}))),T=i(),_=t((()=>T.getters.currentEst)),w=t((()=>T.getters.formattedTime)),A=t((()=>T.state.timer.status)),k=t((()=>T.state.runs.currentRunners)),E=t((()=>T.state.runs.currentCommentators));return e((()=>{setInterval((()=>{T.dispatch("rotateAccounts")}),1e4)})),(t,e)=>(a(),s(n,null,[l(m),l(d),l("header",null,[l(p)]),l("main",{style:{gridTemplateColumns:`1fr ${u(f).width}`}},[l("div",x,[l(b,{style:u(C)},null,8,["style"]),l(v,{small:""}),l("div",j,[(a(!0),s(n,null,r(u(k),(t=>(a(),s(h,{key:t.id,label:"Runner",value:t.name,account:t.currentAccount()},null,8,["value","account"])))),128)),(a(!0),s(n,null,r(u(E),((t,e)=>(a(),s(h,{key:e,label:"Commentator",value:t.name,account:t.currentAccount()},null,8,["value","account"])))),128)),l(h,{time:"",label:"EST",id:"est"},{default:o((()=>[l(g,{value:u(_)},null,8,["value"])])),_:1}),l(h,{time:"",label:"Current Time",id:"current-time"},{default:o((()=>[l(g,{value:u(w),status:u(A)},null,8,["value","status"])])),_:1})])]),l(b,{style:u(f)},null,8,["style"])],4),l("footer",null,[l(y)])],64))}}).use(f).mount("#root");
