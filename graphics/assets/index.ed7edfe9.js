import{b as t,d as e,r as s,p as a,a as n,o,F as r,h as i,e as c,f as m,c as u,u as l,t as d,j as p,T as D,w as y,g,D as w,k as h,l as f}from"./vendor.9cdb726b.js";const T={props:{opacity:{type:Number,default:1}},setup:s=>(a,n)=>(t(),e("div",{class:"box",style:{opacity:s.opacity}},null,4)),__scopeId:"data-v-e6d9ce8a"};const v={props:{animated:Boolean},setup(a){const n=s(10*Math.random()+5);return(s,a)=>(t(),e(T,{class:"animated",style:{animationDuration:`${n.value}s`}},null,8,["style"]))},__scopeId:"data-v-fefe2e50"};a("data-v-eac602c2");const b={id:"wrapper"},A=c("div",{id:"filter"},null,-1),R={key:0,id:"boxes"},I={key:1,id:"boxes"};n();const S={props:{animated:Boolean},setup(a){const n=s(60);return o((()=>{nodecg.Replicant("assets:background").on("change",(t=>{var e;document.getElementById("root").style.backgroundImage=`url(${null==(e=t[0])?void 0:e.url})`}))})),(s,o)=>(t(),e("div",b,[A,a.animated?(t(),e("div",R,[(t(!0),e(r,null,i([...Array(n.value)].map(((t,e)=>e)),(s=>(t(),e(v,{key:s})))),128))])):(t(),e("div",I,[(t(!0),e(r,null,i([...Array(n.value)].map(((t,e)=>e)),(s=>(t(),e(T,{key:s,opacity:Math.random()},null,8,["opacity"])))),128))]))]))},__scopeId:"data-v-eac602c2"};const x=y();a("data-v-24d3cb30");const C={key:0,id:"tweet-wrapper"},M={key:0,id:"tweet"},_=c("div",{id:"tweet-label",class:"label"},[g(" TWEET WITH "),c("span",null,"#PGRF2"),g(": ")],-1),j={class:"box"},E={id:"twitter-user"},k={id:"twitter-id"};n();const B={props:{width:{type:String,default:"420px"},small:{type:Boolean},from:{type:String,default:"left"}},setup(s){const a=m(),n=u((()=>a.getters.tweet));return(a,o)=>(t(),e(D,{name:`slide-from-${s.from}`},{default:x((()=>[l(n)?(t(),e("div",C,[l(n)?(t(),e("div",M,[_,c("div",j,[c("div",E,[c("img",{id:"twitter-icon",src:l(n).icon,alt:"icon"},null,8,["src"]),c("span",k,"@"+d(l(n).id),1)]),c("div",{id:"tweet-text",class:{small:s.small}},d(l(n).content),3)])])):p("",!0)])):p("",!0)])),_:1},8,["name"]))},__scopeId:"data-v-24d3cb30"},F={setup(t){const e=m();return o((()=>{const t=nodecg,s=nodecg;t.Replicant("runDataActiveRunSurrounding","nodecg-speedcontrol").on("change",(a=>{t.readReplicant("runDataArray","nodecg-speedcontrol",(t=>{const n=a.current,o=Math.max(t.findIndex((t=>t.id===n)),0);s.readReplicant("commentatorArray","speedcontrol-additions",(s=>{const a=t.slice(o,o+4).map((t=>{return{title:t.game||"",category:t.category||"",platform:t.system||"",startsAt:(e=new Date(t.scheduled),`${e.getFullYear()}/${(e.getMonth()+1).toString().padStart(2,"0")}/${e.getDate().toString().padStart(2,"0")} ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}:${e.getSeconds().toString().padStart(2,"0")}`),est:t.estimate||"",runners:t.teams.flatMap((t=>t.players.map((e=>({id:t.id,name:e.name,accounts:{}}))))),commentators:s.filter((e=>e.assignedRunIdArray.includes(t.externalID))).map((t=>({name:t.name,accounts:t.social})))};var e}));e.dispatch("setRuns",a)}))}))}));const a={stopped:"suspend",running:"running",paused:"suspend",finished:"complete"};t.Replicant("timer","nodecg-speedcontrol").on("change",(t=>{e.dispatch("setTimer",{time:t.time||"00:00",status:a[t.state||"paused"],split:(Object.entries(t.teamFinishTimes)||[]).map((([t,e])=>({id:t,time:e.time})))})}));nodecg.Replicant("spotifyPlayingTrack","nodecg-spotify-widget").on("change",(t=>{e.dispatch("setMusic",{title:(null==t?void 0:t.name)||"",artist:(null==t?void 0:t.artists.join(","))||""})}));nodecg.Replicant("activeTweet","nodecg-twitter-widget").on("change",(t=>{console.log(t&&{id:t.screenName,icon:t.profileImageUrl,content:t.text}),e.dispatch("setTweet",t&&{id:t.screenName,icon:t.profileImageUrl,content:t.text})}))})),()=>{}}};var $=[{title:"ゲームタイトル1",category:"Category1%",platform:"Platform1",startsAt:"2021/09/04 12:00:00",est:"00:10:00",runners:[{id:1,name:"走者A",accounts:{twitch:"twitchA",twitter:"twitterA",youtube:"youtubeA"}}],commentators:[{name:"コメンテータA",accounts:{twitter:"comTwitterA"}}]},{title:"ゲームタイトル2",category:"Category2%",platform:"Platform2",startsAt:"2021/09/04 12:25:00",est:"00:20:00",runners:[{id:1,name:"走者B",accounts:{twitter:"twitterB",youtube:"youtubeB"}},{id:2,name:"走者C",accounts:{twitch:"twitchC",twitter:"twitterC"}}],commentators:[{name:"コメンテータB",accounts:{twitch:"comTwitchB",twitter:"comTwitterB",youtube:"comYoutubeB"}},{name:"コメンテータC",accounts:{twitch:"commentatorC",twitter:"commentatorC"}},{name:"コメンテータX",accounts:{twitch:"commentatorX",youtube:"commentatorX"}}]},{title:"わがまま☆フェアリー ミルモでポン! 対戦まほうだま",category:"Taisen Puzzle-Dama (たいせんモード ノーマル)",platform:"Platform3",startsAt:"2021/09/04 12:55:00",est:"00:30:00",runners:[{id:1,name:"走者DDDDDDDDDDDD",accounts:{twitch:"twitchDDDDDDDDDDDDDDDDDDD",twitter:"twitterDDDDDDD",youtube:"youtubeDDDDDDDDDDDDDDDDDD"}}],commentators:[{name:"コメンテータDDDDDDDDDDDD",accounts:{twitter:"comTwitterD"}}]},{title:"ゲームタイトル4",category:"Category4%",platform:"Platform4",startsAt:"2021/09/04 13:35:00",est:"00:40:00",runners:[{id:1,name:"走者E",accounts:{twitch:"twitchE",twitter:"twitterE",youtube:"youtubeE"}}],commentators:[{name:"コメンテータE",accounts:{twitter:"comTwitterE"}}]}];class P{constructor(t){this.title=t.title,this.category=t.category,this.platform=t.platform,this.startsAt=w.fromFormat(t.startsAt,"yyyy/MM/dd HH:mm:ss"),this.est=t.est,this.runners=t.runners,this.commentators=t.commentators}joinedRunnerNames(t=" / "){return this.runners.map((t=>t.name)).join(t)}joinedCommentatorNames(t=" / "){return this.commentators.map((t=>t.name)).join(t)}startsAtOnSchedule(){return this.startsAt.toFormat("HH:mm")}}class H{constructor(t){this.id=t.id,this.name=t.name,this.accounts=t.accounts,this.accountTypes=Object.keys(t.accounts)}currentAccount(){return{[this.accountTypes[0]]:this.accounts[this.accountTypes[0]]}}rotateAccountTypes(){this.accountTypes=this.accountTypes.slice(1).concat(this.accountTypes[0])}}var N={time:"00:12:34",status:"suspend",split:[{id:1,time:"00:11:11"}]},O={id:"twitter_id",icon:"https://pbs.twimg.com/profile_images/1350337470353666049/1fFwzKj2_400x400.jpg",content:"テストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイート #PGRF"},z="Music Title",X="Artist Name",G=f({modules:{runs:{state:()=>({runs:$,currentRunners:$[0].runners.map((t=>new H(t))),currentCommentators:$[0].commentators.map((t=>new H(t)))}),getters:{runsOnSchedule:({runs:t})=>t.slice(0,3).map((t=>new P(t))),currentEst:({runs:t})=>t[0].est,headerInfo:({runs:t})=>({title:t[0].title,category:t[0].category,platform:t[0].platform}),footerInfo:({runs:t})=>t.length>1?{title:t[1].title,category:t[1].category}:void 0},mutations:{setRuns(t,e){t.runs=e,t.currentRunners=e[0].runners.map((t=>new H(t))),t.currentCommentators=e[0].commentators.map((t=>new H(t)))},rotateAccounts({currentRunners:t,currentCommentators:e}){t.forEach((t=>{t.rotateAccountTypes()})),e.forEach((t=>{t.rotateAccountTypes()}))}},actions:{setRuns({commit:t},e){t("setRuns",e)},rotateAccounts({commit:t}){t("rotateAccounts")}}},timer:{state:()=>({time:N.time,status:N.status,splits:N.split}),getters:{formattedTime:({time:t})=>{const e=t.split(":"),s=h.fromObject({hours:parseInt(e[0]),minutes:parseInt(e[1]),seconds:parseInt(e[2])});return s.hours>0?s.toFormat("hh:mm:ss"):s.toFormat("mm:ss")},splitOfId:({splits:t})=>e=>{const s=t.find((t=>e===t.id));return s?s.time:""}},mutations:{setTimer(t,e){t.time=e.time,t.status=e.status,t.splits=e.split}},actions:{setTimer({commit:t},e){t("setTimer",e)}}},tweet:{state:()=>({tweet:O}),getters:{tweet:({tweet:t})=>t},mutations:{setTweet(t,e){}},actions:{setTweet({commit:t},e){t("setTweet",e)}}},spotify:{state:()=>({title:z,artist:X}),mutations:{setMusic(t,e){t.title=e.title,t.artist=e.artist}},actions:{setMusic({commit:t},e){t("setMusic",e)}}}}});export{F as _,S as a,B as b,G as s};
