import{p as a,a as s,r as t,D as e,c as n,o as l,b as o,d as r,e as u,t as c,u as d,F as i,f as p,g as v,h as m,i as f}from"./vendor.82ab3a02.js";import{_ as g,a as b,s as x}from"./index.323d1d4a.js";import{_ as h}from"./WatchReplicant.6590e94a.js";a("data-v-38687ee8");const N=u("span",{id:"presents"},"presents",-1),y={id:"now",class:"time"};s();const _={setup(a){const s=t(e.now()),p=n((()=>{const a=s.value;return a.second%2==0?a.toFormat("HH:mm"):a.toFormat("HH mm")})),v=t(""),m=t("");return l((()=>{setInterval((()=>{s.value=e.now()}),50),nodecg.Replicant("assets:logo").on("change",(a=>{var s;v.value=(null==(s=a[0])?void 0:s.url)||""})),nodecg.Replicant("assets:ome-logo").on("change",(a=>{var s;m.value=(null==(s=a[0])?void 0:s.url)||""}))})),(a,s)=>(o(),r(i,null,[u("img",{id:"logo-ome",src:m.value,alt:"OME"},null,8,["src"]),N,u("img",{id:"logo-pgrf",src:v.value,alt:"PGRF"},null,8,["src"]),u("div",y,c(d(p)),1)],64))},__scopeId:"data-v-38687ee8"};a("data-v-37b149d0");const R={id:"spotify"},j=u("div",{id:"hashtag-guide"},[v("hashtag: "),u("span",null,"#PGRF2")],-1);s();const k={setup(a){const s=p(),t=n((()=>s.state.spotify));return(a,s)=>(o(),r(i,null,[u("div",R,[u("span",null,"Now playing: "+c(d(t).title)+" / "+c(d(t).artist),1)]),j],64))},__scopeId:"data-v-37b149d0"};a("data-v-2fb5232a");const F={key:0,id:"up-next",class:"label"},I={key:1,class:"time"},w={class:"title"},H={class:"info"},O={class:"category"},P=u("span",{class:"label"},"Category: ",-1),S={class:"platform"},C=u("span",{class:"label"},"Platform: ",-1),E={class:"est"},B=u("span",{class:"label"},"EST: ",-1),D={class:"info"},G={class:"runner"},T=u("span",{class:"label"},"Runner: ",-1),A={class:"commentator"},M=u("span",{class:"label"},"Commentator: ",-1),U={class:"title"},W={class:"info"},X=u("span",{class:"label"},"Duration: ",-1),q={class:"time"};s();const z={props:{run:Object,upNext:Boolean},setup:a=>(s,t)=>(o(),r("div",{class:["run",{"later-than-next":!a.upNext}]},[a.upNext?(o(),r("p",F,"UP NEXT:")):(o(),r("div",I,c(a.run.startsAtOnSchedule())+"~",1)),a.run.isSetupBlock()?(o(),r("div",{key:3,class:["content-box setup",{next:a.upNext,"later-than-next":!a.upNext}]},[u("span",U,c(a.run.title),1),u("div",W,[X,u("span",q,c(a.run.est),1)])],2)):(o(),r("div",{key:2,class:["content-box",{next:a.upNext,"later-than-next":!a.upNext}]},[u("span",w,c(a.run.title),1),u("div",H,[u("div",O,[P,v(c(a.run.category),1)]),u("div",S,[C,v(c(a.run.platform),1)]),u("div",E,[B,v(c(a.run.est),1)])]),u("div",D,[u("div",G,[T,v(c(a.run.joinedRunnerNames()),1)]),u("div",A,[M,v(c(a.run.joinedCommentatorNames()),1)])])],2))],2)),__scopeId:"data-v-2fb5232a"};a("data-v-bffad1ea");const J={id:"schedule"};s();const K={setup(a){const s=p(),t=n((()=>s.getters.runsOnSchedule));return(a,s)=>(o(),r("div",J,[(o(!0),r(i,null,m(d(t),((a,s)=>(o(),r(z,{key:s,run:a,upNext:0===s},null,8,["run","upNext"])))),128))]))},__scopeId:"data-v-bffad1ea"};f({setup:a=>(a,s)=>(o(),r(i,null,[u(h),u(g,{animated:""}),u("header",null,[u(_)]),u("main",null,[u(K),u(b)]),u("footer",null,[u(k)])],64))}).use(x).mount("#root");
