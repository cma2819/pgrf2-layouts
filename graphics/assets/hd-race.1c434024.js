import{r as e,c as t,o as a,b as s,d as u,e as l,m as n,u as r,j as o,F as c,h as i,f as d,i as m}from"./vendor.9cdb726b.js";import{_ as v,a as f,b,s as h}from"./index.3fc4feae.js";import{_ as p,b as _,a as y,c as g,e as j,d as A}from"./Footer.968b89f5.js";import{_ as I}from"./Split.e49bf0f1.js";const k={id:"runners"},x={class:"runner"},C={class:"runner"},R={id:"others"},T={id:"commentators"},w={id:"times"};m({setup(m){const h=e(1920*.48+"px"),E=e("518.4px"),F=d(),S=t((()=>F.getters.currentEst)),q=t((()=>F.getters.formattedTime)),z=t((()=>F.state.timer.status)),B=t((()=>F.state.runs.currentRunners)),D=t((()=>F.state.runs.currentCommentators));return a((()=>{setInterval((()=>{F.dispatch("rotateAccounts")}),1e4)})),(e,t)=>(s(),u(c,null,[l(v),l(f),l("header",null,[l(p)]),l("main",null,[l("div",k,[l("div",x,[l(_,{style:{width:h.value,height:E.value}},null,8,["style"]),l(y,{dense:"",label:"Runner I"},{default:n((()=>[l(j,{value:r(B)[0].name,account:r(B)[0].currentAccount()},null,8,["value","account"])])),_:1}),l(I,{id:1})]),l("div",C,[l(_,{style:{width:h.value,height:E.value}},null,8,["style"]),r(B)[1]?(s(),u(y,{key:0,dense:"",label:"Runner II"},{default:n((()=>[l(j,{value:r(B)[1].name,account:r(B)[1].currentAccount()},null,8,["value","account"])])),_:1})):o("",!0),r(B)[1]?(s(),u(I,{key:1,id:2})):o("",!0)])]),l("div",R,[l("div",T,[(s(!0),u(c,null,i(r(D),((e,t)=>(s(),u(y,{key:t,label:"Commentator"},{default:n((()=>[l(j,{value:e.name,account:e.currentAccount()},null,8,["value","account"])])),_:2},1024)))),128))]),l("div",w,[l(y,{time:"",label:"EST"},{default:n((()=>[l(A,{value:r(S)},null,8,["value"])])),_:1}),l(y,{time:"",label:"Current Time"},{default:n((()=>[l(A,{value:r(q),status:r(z)},null,8,["value","status"])])),_:1})]),l(b,{from:"right",small:""})])]),l("footer",null,[l(g)])],64))}}).use(h).mount("#root");
