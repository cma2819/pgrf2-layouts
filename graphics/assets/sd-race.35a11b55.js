import{r as e,c as t,o as a,b as s,d as u,e as l,m as n,u as r,j as o,F as c,h as i,f as d,n as m,i as v}from"./vendor.167e4e48.js";import{_ as f,a as h,s as b}from"./index.b5377775.js";import{_ as p,b as _,a as y,c as g,e as j,d as A}from"./Footer.1869d361.js";import{_ as I}from"./Split.5eb01fb9.js";const R={id:"runners"},k={class:"runner"},x={class:"runner"},C={id:"others"},T={id:"commentators"},w={id:"times"};v({setup(v){const b=e("768px"),E=e("576px"),F=d(),S=t((()=>F.getters.currentEst)),W=t((()=>F.getters.formattedTime)),q=t((()=>F.state.timer.status)),z=t((()=>F.state.runs.currentRunners)),B=t((()=>F.state.runs.currentCommentators));return a((()=>{setInterval((()=>{F.dispatch("rotateAccounts")}),1e4)})),(e,t)=>{const a=m("WatchReplicant");return s(),u(c,null,[l(a),l(f),l("header",null,[l(p)]),l("main",null,[l("div",R,[l("div",k,[l(_,{style:{width:b.value,height:E.value}},null,8,["style"]),l(y,{dense:"",label:"Runner I"},{default:n((()=>[l(j,{value:r(z)[0].name,account:r(z)[0].currentAccount()},null,8,["value","account"])])),_:1}),l(I,{id:1})]),l("div",x,[l(_,{style:{width:b.value,height:E.value}},null,8,["style"]),r(z)[1]?(s(),u(y,{key:0,dense:"",label:"Runner II"},{default:n((()=>[l(j,{value:r(z)[1].name,account:r(z)[1].currentAccount()},null,8,["value","account"])])),_:1})):o("",!0),r(z)[1]?(s(),u(I,{key:1,id:2})):o("",!0)])]),l("div",C,[l("div",T,[(s(!0),u(c,null,i(r(B),((e,t)=>(s(),u(y,{key:t,label:"Commentator"},{default:n((()=>[l(j,{value:e.name,account:e.currentAccount()},null,8,["value","account"])])),_:2},1024)))),128))]),l("div",w,[l(y,{time:"",label:"EST"},{default:n((()=>[l(A,{value:r(S)},null,8,["value"])])),_:1}),l(y,{time:"",label:"Current Time"},{default:n((()=>[l(A,{value:r(W),status:r(q)},null,8,["value","status"])])),_:1})]),l(h,{from:"right",small:""})])]),l("footer",null,[l(g)])],64)}}}).use(b).mount("#root");