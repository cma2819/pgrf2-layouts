import{r as e,c as t,o as a,b as l,d as s,e as u,u as n,m as r,h as o,F as c,i,f as d,j as m}from"./vendor.801e32df.js";import{_ as v,a as f,b as h,s as b}from"./index.7fbfb017.js";import{_ as p,b as y,a as _,c as g,e as j,d as k}from"./Footer.11da7d07.js";import{_ as A}from"./Split.71c6f3c3.js";const I={id:"runners"},x={key:0,class:"runner"},C={key:1,class:"runner"},R={id:"others"},T={id:"commentators"},w={id:"times"};m({setup(m){const b=e(1920*.48+"px"),E=e("518.4px"),F=d(),S=t((()=>F.getters.currentEst)),q=t((()=>F.getters.formattedTime)),z=t((()=>F.state.timer.status)),B=t((()=>F.state.runs.currentRunners)),D=t((()=>F.state.runs.currentCommentators));return a((()=>{setInterval((()=>{F.dispatch("rotateAccounts")}),1e4)})),(e,t)=>(l(),s(c,null,[u(v),u(f),u("header",null,[u(p)]),u("main",null,[u("div",I,[n(B)[0]?(l(),s("div",x,[u(y,{style:{width:b.value,height:E.value}},null,8,["style"]),u(_,{dense:"",label:"Runner I"},{default:r((()=>[u(j,{value:n(B)[0].name,account:n(B)[0].currentAccount()},null,8,["value","account"])])),_:1}),u(A,{id:n(B)[0].id},null,8,["id"])])):o("",!0),n(B)[1]?(l(),s("div",C,[u(y,{style:{width:b.value,height:E.value}},null,8,["style"]),n(B)[1]?(l(),s(_,{key:0,dense:"",label:"Runner II"},{default:r((()=>[u(j,{value:n(B)[1].name,account:n(B)[1].currentAccount()},null,8,["value","account"])])),_:1})):o("",!0),n(B)[1]?(l(),s(A,{key:1,id:n(B)[1].id},null,8,["id"])):o("",!0)])):o("",!0)]),u("div",R,[u("div",T,[(l(!0),s(c,null,i(n(D),((e,t)=>(l(),s(_,{key:t,label:"Commentator"},{default:r((()=>[u(j,{value:e.name,account:e.currentAccount()},null,8,["value","account"])])),_:2},1024)))),128))]),u("div",w,[u(_,{time:"",label:"EST"},{default:r((()=>[u(k,{value:n(S)},null,8,["value"])])),_:1}),u(_,{time:"",label:"Current Time"},{default:r((()=>[u(k,{value:n(q),status:n(z)},null,8,["value","status"])])),_:1})]),u(h,{from:"right",small:""})])]),u("footer",null,[u(g)])],64))}}).use(b).mount("#root");
