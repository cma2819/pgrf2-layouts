import{r as e,c as a,o as t,b as l,d as s,e as u,u as n,m as r,v as i,j as o,F as d,h as c,f as m}from"./vendor.82ab3a02.js";import{_ as v,a as f}from"./index.323d1d4a.js";import{_ as p,b,a as h,c as _,e as y,d as j}from"./Footer.f31b230b.js";import{_ as I}from"./Split.baf9a69b.js";import{_ as g}from"./WatchReplicant.6590e94a.js";const k={id:"runners"},x={key:0,class:"runner"},A={key:1,class:"runner"},R={id:"others"},C={id:"commentators"},T={id:"times"},w={setup(w){const E=e("768px"),F=e("576px"),S=m(),$=a((()=>S.getters.currentEst)),W=a((()=>S.getters.formattedTime)),q=a((()=>S.state.timer.status)),z=a((()=>S.state.runs.currentRunners)),B=a((()=>S.state.runs.currentCommentators));return t((()=>{setInterval((()=>{S.dispatch("rotateAccounts")}),1e4)})),(e,a)=>(l(),s(d,null,[u(g),u(v),u("header",null,[u(p)]),u("main",null,[u("div",k,[n(z)[0]?(l(),s("div",x,[u(b,{style:{width:E.value,height:F.value}},null,8,["style"]),u(h,{dense:"",label:"Runner I"},{default:r((()=>[u(y,{value:n(z)[0].name,account:n(z)[0].currentAccount()},null,8,["value","account"])])),_:1}),i(e.$slots,"split1",{runnerId:n(z)[0].id},(()=>[u(I,{id:n(z)[0].id},null,8,["id"])]))])):o("",!0),n(z)[1]?(l(),s("div",A,[u(b,{style:{width:E.value,height:F.value}},null,8,["style"]),n(z)[1]?(l(),s(h,{key:0,dense:"",label:"Runner II"},{default:r((()=>[u(y,{value:n(z)[1].name,account:n(z)[1].currentAccount()},null,8,["value","account"])])),_:1})):o("",!0),n(z)[1]?i(e.$slots,"split2",{key:1,runnerId:n(z)[1].id},(()=>[u(I,{id:n(z)[1].id},null,8,["id"])])):o("",!0)])):o("",!0)]),u("div",R,[u("div",C,[(l(!0),s(d,null,c(n(B),((e,a)=>(l(),s(h,{key:a,label:"Commentator"},{default:r((()=>[u(y,{value:e.name,account:e.currentAccount()},null,8,["value","account"])])),_:2},1024)))),128))]),u("div",T,[u(h,{time:"",label:"EST"},{default:r((()=>[u(j,{value:n($)},null,8,["value"])])),_:1}),u(h,{time:"",label:"Current Time"},{default:r((()=>[u(j,{value:n(W),status:n(q)},null,8,["value","status"])])),_:1})]),u(f,{from:"right",small:""})])]),u("footer",null,[u(_)])],64))}};export{w as _};