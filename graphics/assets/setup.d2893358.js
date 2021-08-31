import{p as a,a as e,r as s,D as t,c as n,o as l,b as o,d as r,e as c,t as d,u,F as i,f as p,g as m,h as g,i as v}from"./vendor.9cdb726b.js";import{_ as f,a as h,s as x}from"./index.5fabbc48.js";a("data-v-32a9486c");const b=c("span",{id:"presents"},"presents",-1),y={id:"now",class:"time"};e();const R={setup(a){const e=s(t.now()),p=n((()=>{const a=e.value;return a.second%2==0?a.toFormat("HH:mm"):a.toFormat("HH mm")})),m=s(""),g=s("");return l((()=>{setInterval((()=>{e.value=t.now()}),50),nodecg.Replicant("assets:logo").on("change",(a=>{console.log(a.url),m.value=a.url})),nodecg.Replicant("assets:ome-logo").on("change",(a=>{g.value=a.url}))})),(a,e)=>(o(),r(i,null,[c("img",{id:"logo-ome",src:g.value,alt:"OME"},null,8,["src"]),b,c("img",{id:"logo-pgrf",src:m.value,alt:"PGRF"},null,8,["src"]),c("div",y,d(u(p)),1)],64))},__scopeId:"data-v-32a9486c"};a("data-v-37b149d0");const N={id:"spotify"},I=c("div",{id:"hashtag-guide"},[m("hashtag: "),c("span",null,"#PGRF2")],-1);e();const _={setup(a){const e=p(),s=n((()=>e.state.spotify));return(a,e)=>(o(),r(i,null,[c("div",N,[c("span",null,"Now playing: "+d(u(s).title)+" / "+d(u(s).artist),1)]),I],64))},__scopeId:"data-v-37b149d0"};a("data-v-652ded40");const A={key:0,id:"up-next",class:"label"},j={key:1,class:"time"},w={class:"title"},D={class:"info"},F={class:"category"},H=c("span",{class:"label"},"Category: ",-1),O={class:"platform"},P=c("span",{class:"label"},"Platform: ",-1),S={class:"est"},k=c("span",{class:"label"},"EST: ",-1),C={class:"info"},E={class:"runner"},M=c("span",{class:"label"},"Runner: ",-1),G={class:"commentator"},T=c("span",{class:"label"},"Commentator: ",-1);e();const B={props:{run:Object,upNext:Boolean},setup:a=>(e,s)=>(o(),r("div",{class:["run",{"later-than-next":!a.upNext}]},[a.upNext?(o(),r("p",A,"UP NEXT:")):(o(),r("div",j,d(a.run.startsAtOnSchedule())+"~",1)),c("div",{class:["content-box",{next:a.upNext,"later-than-next":!a.upNext}]},[c("span",w,d(a.run.title),1),c("div",D,[c("div",F,[H,m(d(a.run.category),1)]),c("div",O,[P,m(d(a.run.platform),1)]),c("div",S,[k,m(d(a.run.est),1)])]),c("div",C,[c("div",E,[M,m(d(a.run.joinedRunnerNames()),1)]),c("div",G,[T,m(d(a.run.joinedCommentatorNames()),1)])])],2)],2)),__scopeId:"data-v-652ded40"};a("data-v-bffad1ea");const U={id:"schedule"};e();const X={setup(a){const e=p(),s=n((()=>e.getters.runsOnSchedule));return(a,e)=>(o(),r("div",U,[(o(!0),r(i,null,g(u(s),((a,e)=>(o(),r(B,{key:e,run:a,upNext:0===e},null,8,["run","upNext"])))),128))]))},__scopeId:"data-v-bffad1ea"},q=p(),z=nodecg,J=nodecg;z.Replicant("runDataActiveRunSurrounding","nodecg-speedcontrol").on("change",(a=>{z.readReplicant("runDataArray","nodecg-speedcontrol",(e=>{const s=a.current,t=Math.max(e.findIndex((a=>a.id===s)),0);J.readReplicant("commentatorArray","speedcontrol-additions",(a=>{const s=e.slice(t,t+4).map((e=>({title:e.game||"",category:e.category||"",platform:e.system||"",startsAt:e.scheduled||"",est:e.estimate||"",runners:e.teams.flatMap((a=>a.players.map((a=>({id:a.externalID,name:a.name,accounts:{}}))))),commentators:a.filter((a=>a.assignedRunIdArray.includes(e.externalID))).map((a=>({name:a.name,accounts:a.social})))})));q.dispatch("setRuns",s)}))}))}));const K={};v({setup:a=>(a,e)=>(o(),r(i,null,[c(K),c(f,{animated:""}),c("header",null,[c(R)]),c("main",null,[c(X),c(h,{style:{width:"480px"}})]),c("footer",null,[c(_)])],64))}).use(x).mount("#root");
