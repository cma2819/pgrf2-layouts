import{p as a,a as t,f as e,c as s,r as c,o as n,b as o,d as l,e as u,t as p,u as d,F as i,T as r,_ as v,n as g,g as b,q as m,s as y,w as h,v as _,j as f}from"./vendor.82ab3a02.js";a("data-v-0b758a62");const I={id:"title"},w={id:"game-title"},k={id:"category-platform"};t();const S={setup(a){const t=e(),r=s((()=>t.getters.headerInfo)),v=c("");return n((()=>{nodecg.Replicant("assets:logo").on("change",(a=>{v.value=a.url}))})),(a,t)=>(o(),l(i,null,[u("img",{id:"logo",src:v.value},null,8,["src"]),u("div",I,[u("p",w,p(d(r).title),1),u("p",k,p(d(r).category)+" - "+p(d(r).platform),1)])],64))},__scopeId:"data-v-0b758a62"};const j=h();a("data-v-9800aba4");const x={class:"value"},z={class:"account"},B={key:0},F={key:1},O={key:2},R={key:3};t();const T={props:{value:String,account:{type:Object,default:{}}},setup:a=>(t,e)=>(o(),l("div",null,[u("p",x,p(a.value),1),u("p",z,[u(r,{name:"switch"},{default:j((()=>[a.account.twitch?(o(),l("span",B,[u(d(v),{type:"mdi",path:d(g),size:"1.1em",style:{top:"0.1em"}},null,8,["path"]),b(" "+p(a.account.twitch),1)])):a.account.twitter?(o(),l("span",F,[u(d(v),{type:"mdi",path:d(m),size:"1.1em",style:{top:"0.1em"}},null,8,["path"]),b(" "+p(a.account.twitter),1)])):a.account.youtube?(o(),l("span",O,[u(d(v),{type:"mdi",path:d(y),size:"1.1em",style:{top:"0.2em"}},null,8,["path"]),b(" "+p(a.account.youtube),1)])):(o(),l("span",R,"-"))])),_:1})])])),__scopeId:"data-v-9800aba4"};a("data-v-ce3697b8");const q={class:"info-box"},G={class:"value-area"};t();const H={props:{label:String,value:String,account:Object,dense:Boolean,time:Boolean},setup:a=>(t,e)=>(o(),l("div",q,[u("span",{class:["label",{dense:a.dense}]},p(a.label),3),u("div",G,[_(t.$slots,"default",{},(()=>[u(T,{value:a.value,account:a.account},null,8,["value","account"])]),{})])])),__scopeId:"data-v-ce3697b8"};const N={props:{value:String,status:String},setup(a){const t=a,e=s((()=>({suspend:"suspend"===t.status,complete:"complete"===t.status})));return(t,s)=>(o(),l("span",{class:["value time",d(e)]},p(a.value),3))},__scopeId:"data-v-0b7714aa"};const P={},$=h()(((a,t)=>(o(),l("div"))));P.render=$,P.__scopeId="data-v-2974b49f";a("data-v-5219e488");const A=u("div",{id:"hashtag-guide"},[b("Hashtag: "),u("span",{class:"hashtag"},"#PGRF2")],-1),C={key:0,id:"next-title"},D=u("span",{class:"label"},"Next Title: ",-1);t();const E={setup(a){const t=e(),c=s((()=>t.getters.footerInfo));return(a,t)=>(o(),l(i,null,[A,d(c)?(o(),l("div",C,[D,b(p(d(c).title)+" | "+p(d(c).category),1)])):f("",!0)],64))},__scopeId:"data-v-5219e488"};export{S as _,H as a,P as b,E as c,N as d,T as e};
