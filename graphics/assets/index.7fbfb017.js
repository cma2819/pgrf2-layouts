import{b as t,d as e,r as s,p as n,a,F as r,i as o,e as i,f as c,c as u,u as l,t as d,h as m,T as p,w as g,g as h,o as y,D as f,k as v,l as w}from"./vendor.801e32df.js";const T={props:{opacity:{type:Number,default:1}},setup:s=>(n,a)=>(t(),e("div",{class:"box",style:{opacity:s.opacity}},null,4)),__scopeId:"data-v-e6d9ce8a"};const S={props:{animated:Boolean},setup(n){const a=s(10*Math.random()+5);return(s,n)=>(t(),e(T,{class:"animated",style:{animationDuration:`${a.value}s`}},null,8,["style"]))},__scopeId:"data-v-fefe2e50"};n("data-v-718e75f4");const A={id:"wrapper"},R=i("div",{id:"filter"},null,-1),b={key:0,id:"boxes"},I={key:1,id:"boxes"};a();const x={props:{animated:Boolean},setup(n){const a=s(60);return(s,i)=>(t(),e("div",A,[R,n.animated?(t(),e("div",b,[(t(!0),e(r,null,o([...Array(a.value)].map(((t,e)=>e)),(s=>(t(),e(S,{key:s})))),128))])):(t(),e("div",I,[(t(!0),e(r,null,o([...Array(a.value)].map(((t,e)=>e)),(s=>(t(),e(T,{key:s,opacity:Math.random()},null,8,["opacity"])))),128))]))]))},__scopeId:"data-v-718e75f4"};const M=g();n("data-v-4a20e45f");const _={key:0,id:"tweet"},j=i("div",{id:"tweet-label",class:"label"},[h(" TWEET WITH "),i("span",null,"#PGRF2"),h(": ")],-1),$={class:"box"},k={id:"twitter-user"},F={id:"twitter-id"};a();const O={props:{width:{type:String,default:"420px"},small:{type:Boolean},from:{type:String,default:"left"}},setup(s){const n=s,a=c(),r=u((()=>a.getters.tweet)),o=u((()=>({"from-left":"left"===n.from,"from-right":"right"===n.from})));return(n,a)=>(t(),e(p,{name:`slide-from-${s.from}`},{default:M((()=>[l(r)?(t(),e("div",{key:0,id:"tweet-wrapper",class:l(o)},[l(r)?(t(),e("div",_,[j,i("div",$,[i("div",k,[i("img",{id:"twitter-icon",src:l(r).icon,alt:"icon"},null,8,["src"]),i("span",F,"@"+d(l(r).id),1)]),i("div",{id:"tweet-text",class:{small:s.small}},d(l(r).content),3)])])):m("",!0)],2)):m("",!0)])),_:1},8,["name"]))},__scopeId:"data-v-4a20e45f"},D={setup(t){const e=c();return y((()=>{const t=nodecg,s=nodecg;t.Replicant("runDataActiveRunSurrounding","nodecg-speedcontrol").on("change",(n=>{t.readReplicant("runDataArray","nodecg-speedcontrol",(t=>{const a=n.current,r=Math.max(t.findIndex((t=>t.id===a)),0);s.readReplicant("commentatorArray","speedcontrol-additions",(n=>{s.readReplicant("speedcontrolUserAdditionArray","speedcontrol-additions",(s=>{const a=t.slice(r,r+4).map((t=>{return{title:t.game||"",category:t.category||"",platform:t.system||"",startsAt:(e=new Date(t.scheduled),`${e.getFullYear()}/${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getDate().toString().padStart(2,"0")} ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}:${e.getSeconds().toString().padStart(2,"0")}`),est:t.estimate||"",runners:t.teams.flatMap((t=>t.players.map((e=>{var n,a,r;const o=s.find((t=>t.id===e.customData.oengusId));return{id:t.id,name:e.name,accounts:{twitch:e.social.twitch,twitter:null==(n=null==o?void 0:o.social)?void 0:n.twitter,nico:null==(a=null==o?void 0:o.social)?void 0:a.nico,youtube:null==(r=null==o?void 0:o.social)?void 0:r.youtube}}})))),commentators:n.filter((e=>e.assignedRunIdArray.includes(t.externalID))).map((t=>({name:t.name,accounts:t.social})))};var e}));e.dispatch("setRuns",a)}))}))}))}));const n={stopped:"suspend",running:"running",paused:"suspend",finished:"complete"};t.Replicant("timer","nodecg-speedcontrol").on("change",(t=>{e.dispatch("setTimer",{time:t.time||"00:00",status:n[t.state||"paused"],split:(Object.entries(t.teamFinishTimes)||[]).map((([t,e])=>({id:t,time:e.time})))})}));nodecg.Replicant("spotifyPlayingTrack","nodecg-spotify-widget").on("change",(t=>{e.dispatch("setMusic",{title:(null==t?void 0:t.name)||"",artist:(null==t?void 0:t.artists.join(","))||""})}));nodecg.Replicant("activeTweet","nodecg-twitter-widget").on("change",(t=>{e.dispatch("setTweet",t&&{id:t.screenName,icon:t.profileImageUrl,content:t.text})}));nodecg.Replicant("runner-scores").on("change",(t=>{e.dispatch("setScores",t.filter((t=>null!==t.score)))}))})),()=>{}}};class E{constructor(t){this.title=t.title,this.category=t.category,this.platform=t.platform,this.startsAt=f.fromFormat(t.startsAt,"yyyy/MM/dd HH:mm:ss"),this.est=t.est,this.runners=t.runners,this.commentators=t.commentators}joinedRunnerNames(t=" / "){return this.runners.map((t=>t.name)).join(t)}joinedCommentatorNames(t=" / "){return this.commentators.map((t=>t.name)).join(t)}startsAtOnSchedule(){return this.startsAt.toFormat("HH:mm")}isSetupBlock(){return!this.runners||0===this.runners.length}}class H{constructor(t){this.id=t.id,this.name=t.name,this.accounts=this._excludeEmptyField(t.accounts),this.accountTypes=Object.keys(this.accounts)}currentAccount(){return{[this.accountTypes[0]]:this.accounts[this.accountTypes[0]]}}rotateAccountTypes(){this.accountTypes=this.accountTypes.slice(1).concat(this.accountTypes[0])}_excludeEmptyField(t){return Object.entries(t).filter((([t,e])=>e)).reduce(((t,[e,s])=>Object.assign(t,{[e]:s})),{})}}var B=[{id:"team-id-a",score:123456},{id:"team-id-b",score:234567}],C=w({modules:{runs:{state:()=>({runs:[],currentRunners:[],currentCommentators:[]}),getters:{runsOnSchedule:({runs:t})=>t.slice(0,3).map((t=>new E(t))),currentEst({runs:t}){var e;return(null==(e=t[0])?void 0:e.est)||"00:00:00"},headerInfo({runs:t}){var e,s,n;return{title:(null==(e=t[0])?void 0:e.title)||"",category:(null==(s=t[0])?void 0:s.category)||"",platform:(null==(n=t[0])?void 0:n.platform)||""}},footerInfo:({runs:t})=>t.length>1&&t[1].category?{title:t[1].title,category:t[1].category}:void 0},mutations:{setRuns(t,e){var s,n;t.runs=e,t.currentRunners=((null==(s=e[0])?void 0:s.runners)||[]).map((t=>new H(t))),t.currentCommentators=((null==(n=e[0])?void 0:n.commentators)||[]).map((t=>new H(t)))},rotateAccounts({currentRunners:t,currentCommentators:e}){t.forEach((t=>{t.rotateAccountTypes()})),e.forEach((t=>{t.rotateAccountTypes()}))}},actions:{setRuns({commit:t},e){t("setRuns",e)},rotateAccounts({commit:t}){t("rotateAccounts")}}},timer:{state:()=>({time:"00:00:00",status:"suspend",splits:[]}),getters:{formattedTime:({time:t})=>{const e=t.split(":"),s=v.fromObject({hours:parseInt(e[0]),minutes:parseInt(e[1]),seconds:parseInt(e[2])});return s.hours>0?s.toFormat("hh:mm:ss"):s.toFormat("mm:ss")},splitOfId:({splits:t})=>e=>{const s=t.find((t=>e===t.id));return s?s.time:""}},mutations:{setTimer(t,e){t.time=e.time,t.status=e.status,t.splits=e.split}},actions:{setTimer({commit:t},e){t("setTimer",e)}}},scores:{state:()=>({scores:B}),getters:{scoreOf:({scores:t})=>e=>{const s=t.find((t=>t.id===e));return s?s.score:0}},mutations:{setScores(t,e){t.scores=e}},actions:{setScores({commit:t},e){t("setScores",e)}}},tweet:{state:()=>({tweet:null}),getters:{tweet:({tweet:t})=>t},mutations:{setTweet(t,e){t.tweet=e}},actions:{setTweet({commit:t},e){t("setTweet",e)}}},spotify:{state:()=>({title:"",artist:""}),getters:{shortSpotifyInfo({title:t,artist:e}){const s=`${t} / ${e}`;return s.length>80?`${s.substring(0,80)}...`:s}},mutations:{setMusic(t,e){t.title=e.title,t.artist=e.artist}},actions:{setMusic({commit:t},e){t("setMusic",e)}}}}});export{D as _,x as a,O as b,C as s};
