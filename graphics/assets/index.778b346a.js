import{b as t,d as e,r as s,p as a,a as r,F as n,h as o,e as i,f as c,c as u,u as m,t as l,j as d,T as p,w as y,g as h,D as f,k as v,l as w}from"./vendor.9cdb726b.js";const T={props:{opacity:{type:Number,default:1}},setup:s=>(a,r)=>(t(),e("div",{class:"box",style:{opacity:s.opacity}},null,4)),__scopeId:"data-v-e6d9ce8a"};const g={props:{animated:Boolean},setup(a){const r=s(10*Math.random()+5);return(s,a)=>(t(),e(T,{class:"animated",style:{animationDuration:`${r.value}s`}},null,8,["style"]))},__scopeId:"data-v-fefe2e50"};a("data-v-718e75f4");const b={id:"wrapper"},A=i("div",{id:"filter"},null,-1),_={key:0,id:"boxes"},I={key:1,id:"boxes"};r();const j={props:{animated:Boolean},setup(a){const r=s(60);return(s,i)=>(t(),e("div",b,[A,a.animated?(t(),e("div",_,[(t(!0),e(n,null,o([...Array(r.value)].map(((t,e)=>e)),(s=>(t(),e(g,{key:s})))),128))])):(t(),e("div",I,[(t(!0),e(n,null,o([...Array(r.value)].map(((t,e)=>e)),(s=>(t(),e(T,{key:s,opacity:Math.random()},null,8,["opacity"])))),128))]))]))},__scopeId:"data-v-718e75f4"};const k=y();a("data-v-24d3cb30");const x={key:0,id:"tweet-wrapper"},F={key:0,id:"tweet"},O=i("div",{id:"tweet-label",class:"label"},[h(" TWEET WITH "),i("span",null,"#PGRF2"),h(": ")],-1),R={class:"box"},S={id:"twitter-user"},E={id:"twitter-id"};r();const M={props:{width:{type:String,default:"420px"},small:{type:Boolean},from:{type:String,default:"left"}},setup(s){const a=c(),r=u((()=>a.getters.tweet));return(a,n)=>(t(),e(p,{name:`slide-from-${s.from}`},{default:k((()=>[m(r)?(t(),e("div",x,[m(r)?(t(),e("div",F,[O,i("div",R,[i("div",S,[i("img",{id:"twitter-icon",src:m(r).icon,alt:"icon"},null,8,["src"]),i("span",E,"@"+l(m(r).id),1)]),i("div",{id:"tweet-text",class:{small:s.small}},l(m(r).content),3)])])):d("",!0)])):d("",!0)])),_:1},8,["name"]))},__scopeId:"data-v-24d3cb30"};class H{constructor(t){this.title=t.title,this.category=t.category,this.platform=t.platform,this.startsAt=f.fromFormat(t.startsAt,"yyyy/MM/dd HH:mm:ss"),this.est=t.est,this.runners=t.runners,this.commentators=t.commentators}joinedRunnerNames(t=" / "){return this.runners.map((t=>t.name)).join(t)}joinedCommentatorNames(t=" / "){return this.commentators.map((t=>t.name)).join(t)}startsAtOnSchedule(){return this.startsAt.toFormat("HH:mm")}isSetupBlock(){return!this.runners||0===this.runners.length}}class B{constructor(t){this.id=t.id,this.name=t.name,this.accounts=this._excludeEmptyField(t.accounts),this.accountTypes=Object.keys(this.accounts)}currentAccount(){return{[this.accountTypes[0]]:this.accounts[this.accountTypes[0]]}}rotateAccountTypes(){this.accountTypes=this.accountTypes.slice(1).concat(this.accountTypes[0])}_excludeEmptyField(t){return Object.entries(t).filter((([t,e])=>e)).reduce(((t,[e,s])=>Object.assign(t,{[e]:s})),{})}}var C=[{id:"team-id-a",score:123456},{id:"team-id-b",score:234567}],N=w({modules:{runs:{state:()=>({runs:[],currentRunners:[],currentCommentators:[]}),getters:{runsOnSchedule:({runs:t})=>t.slice(0,3).map((t=>new H(t))),currentEst({runs:t}){var e;return(null==(e=t[0])?void 0:e.est)||"00:00:00"},headerInfo({runs:t}){var e,s,a;return{title:(null==(e=t[0])?void 0:e.title)||"",category:(null==(s=t[0])?void 0:s.category)||"",platform:(null==(a=t[0])?void 0:a.platform)||""}},footerInfo:({runs:t})=>t.length>1?{title:t[1].title,category:t[1].category}:void 0},mutations:{setRuns(t,e){var s,a;t.runs=e,t.currentRunners=((null==(s=e[0])?void 0:s.runners)||[]).map((t=>new B(t))),t.currentCommentators=((null==(a=e[0])?void 0:a.commentators)||[]).map((t=>new B(t)))},rotateAccounts({currentRunners:t,currentCommentators:e}){t.forEach((t=>{t.rotateAccountTypes()})),e.forEach((t=>{t.rotateAccountTypes()}))}},actions:{setRuns({commit:t},e){t("setRuns",e)},rotateAccounts({commit:t}){t("rotateAccounts")}}},timer:{state:()=>({time:"00:00:00",status:"suspend",splits:[]}),getters:{formattedTime:({time:t})=>{const e=t.split(":"),s=v.fromObject({hours:parseInt(e[0]),minutes:parseInt(e[1]),seconds:parseInt(e[2])});return s.hours>0?s.toFormat("hh:mm:ss"):s.toFormat("mm:ss")},splitOfId:({splits:t})=>e=>{const s=t.find((t=>e===t.id));return s?s.time:""}},mutations:{setTimer(t,e){t.time=e.time,t.status=e.status,t.splits=e.split}},actions:{setTimer({commit:t},e){t("setTimer",e)}}},scores:{state:()=>({scores:C}),getters:{scoreOf:({scores:t})=>e=>{const s=t.find((t=>t.id===e));return s?s.score:0}},mutations:{setScores(t,e){t.scores=e}},actions:{setScores({commit:t},e){t("setScores",e)}}},tweet:{state:()=>({tweet:null}),getters:{tweet:({tweet:t})=>t},mutations:{setTweet(t,e){t.tweet=e}},actions:{setTweet({commit:t},e){t("setTweet",e)}}},spotify:{state:()=>({title:"",artist:""}),mutations:{setMusic(t,e){t.title=e.title,t.artist=e.artist}},actions:{setMusic({commit:t},e){t("setMusic",e)}}}}});export{j as _,M as a,N as s};
