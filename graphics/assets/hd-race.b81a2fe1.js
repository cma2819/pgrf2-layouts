import{r as e,c as t,o as a,b as l,d as s,e as u,m as n,u as r,j as o,F as c,h as i,f as d,i as m}from"./vendor.9cdb726b.js";import{_ as v,a as f,b,s as h}from"./index.760c7d5f.js";import{_ as p,b as _,a as y,c as g,e as j,d as A}from"./Footer.c709d84e.js";import{_ as I}from"./Split.e49bf0f1.js";const k={id:"runners"},x={class:"runner"},C={class:"runner"},R={id:"others"},T={id:"commentators"},w={id:"times"};m({setup(m){const h=e(1920*.48+"px"),E=e("518.4px"),F=d(),S=t((()=>F.getters.currentEst)),q=t((()=>F.getters.formattedTime)),z=t((()=>F.state.timer.status)),B=t((()=>F.state.runs.currentRunners)),D=t((()=>F.state.runs.currentCommentators));return a((()=>{setInterval((()=>{F.dispatch("rotateAccounts")}),1e4)})),(e,t)=>(l(),s(c,null,[u(v),u(f),u("header",null,[u(p)]),u("main",null,[u("div",k,[u("div",x,[u(_,{style:{width:h.value,height:E.value}},null,8,["style"]),u(y,{dense:"",label:"Runner I"},{default:n((()=>[u(j,{value:r(B)[0].name,account:r(B)[0].currentAccount()},null,8,["value","account"])])),_:1}),u(I,{id:r(B)[0].id},null,8,["id"])]),u("div",C,[u(_,{style:{width:h.value,height:E.value}},null,8,["style"]),r(B)[1]?(l(),s(y,{key:0,dense:"",label:"Runner II"},{default:n((()=>[u(j,{value:r(B)[1].name,account:r(B)[1].currentAccount()},null,8,["value","account"])])),_:1})):o("",!0),r(B)[1]?(l(),s(I,{key:1,id:r(B)[1].id},null,8,["id"])):o("",!0)])]),u("div",R,[u("div",T,[(l(!0),s(c,null,i(r(D),((e,t)=>(l(),s(y,{key:t,label:"Commentator"},{default:n((()=>[u(j,{value:e.name,account:e.currentAccount()},null,8,["value","account"])])),_:2},1024)))),128))]),u("div",w,[u(y,{time:"",label:"EST"},{default:n((()=>[u(A,{value:r(S)},null,8,["value"])])),_:1}),u(y,{time:"",label:"Current Time"},{default:n((()=>[u(A,{value:r(q),status:r(z)},null,8,["value","status"])])),_:1})]),u(b,{from:"right",small:""})])]),u("footer",null,[u(g)])],64))}}).use(h).mount("#root");
