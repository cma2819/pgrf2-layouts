import{p as s,a,r as e,D as t,c as n,o as l,b as o,d as r,e as u,t as d,u as c,F as i,f as p,g as v,h as m,i as g}from"./vendor.9cdb726b.js";import{_ as f,a as b,b as h,s as x}from"./index.e42f7545.js";s("data-v-38687ee8");const N=u("span",{id:"presents"},"presents",-1),y={id:"now",class:"time"};a();const _={setup(s){const a=e(t.now()),p=n((()=>{const s=a.value;return s.second%2==0?s.toFormat("HH:mm"):s.toFormat("HH mm")})),v=e(""),m=e("");return l((()=>{setInterval((()=>{a.value=t.now()}),50),nodecg.Replicant("assets:logo").on("change",(s=>{var a;v.value=(null==(a=s[0])?void 0:a.url)||""})),nodecg.Replicant("assets:ome-logo").on("change",(s=>{var a;m.value=(null==(a=s[0])?void 0:a.url)||""}))})),(s,a)=>(o(),r(i,null,[u("img",{id:"logo-ome",src:m.value,alt:"OME"},null,8,["src"]),N,u("img",{id:"logo-pgrf",src:v.value,alt:"PGRF"},null,8,["src"]),u("div",y,d(c(p)),1)],64))},__scopeId:"data-v-38687ee8"};s("data-v-37b149d0");const R={id:"spotify"},j=u("div",{id:"hashtag-guide"},[v("hashtag: "),u("span",null,"#PGRF2")],-1);a();const w={setup(s){const a=p(),e=n((()=>a.state.spotify));return(s,a)=>(o(),r(i,null,[u("div",R,[u("span",null,"Now playing: "+d(c(e).title)+" / "+d(c(e).artist),1)]),j],64))},__scopeId:"data-v-37b149d0"};s("data-v-652ded40");const F={key:0,id:"up-next",class:"label"},I={key:1,class:"time"},H={class:"title"},O={class:"info"},P={class:"category"},k=u("span",{class:"label"},"Category: ",-1),C={class:"platform"},E=u("span",{class:"label"},"Platform: ",-1),S={class:"est"},G=u("span",{class:"label"},"EST: ",-1),T={class:"info"},A={class:"runner"},B=u("span",{class:"label"},"Runner: ",-1),D={class:"commentator"},M=u("span",{class:"label"},"Commentator: ",-1);a();const U={props:{run:Object,upNext:Boolean},setup:s=>(a,e)=>(o(),r("div",{class:["run",{"later-than-next":!s.upNext}]},[s.upNext?(o(),r("p",F,"UP NEXT:")):(o(),r("div",I,d(s.run.startsAtOnSchedule())+"~",1)),u("div",{class:["content-box",{next:s.upNext,"later-than-next":!s.upNext}]},[u("span",H,d(s.run.title),1),u("div",O,[u("div",P,[k,v(d(s.run.category),1)]),u("div",C,[E,v(d(s.run.platform),1)]),u("div",S,[G,v(d(s.run.est),1)])]),u("div",T,[u("div",A,[B,v(d(s.run.joinedRunnerNames()),1)]),u("div",D,[M,v(d(s.run.joinedCommentatorNames()),1)])])],2)],2)),__scopeId:"data-v-652ded40"};s("data-v-bffad1ea");const X={id:"schedule"};a();const q={setup(s){const a=p(),e=n((()=>a.getters.runsOnSchedule));return(s,a)=>(o(),r("div",X,[(o(!0),r(i,null,m(c(e),((s,a)=>(o(),r(U,{key:a,run:s,upNext:0===a},null,8,["run","upNext"])))),128))]))},__scopeId:"data-v-bffad1ea"};g({setup:s=>(s,a)=>(o(),r(i,null,[u(f),u(b,{animated:""}),u("header",null,[u(_)]),u("main",null,[u(q),u(h,{style:{width:"480px"}})]),u("footer",null,[u(w)])],64))}).use(x).mount("#root");
