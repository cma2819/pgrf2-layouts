import{b as t,d as e,r as s,p as a,a as o,F as r,h as n,e as i,f as c,c as m,u,t as l,j as d,T as p,w as D,g as w,D as y,k as h,l as f}from"./vendor.9cdb726b.js";const T={props:{opacity:{type:Number,default:1}},setup:s=>(a,o)=>(t(),e("div",{class:"box",style:{opacity:s.opacity}},null,4)),__scopeId:"data-v-e6d9ce8a"};const b={props:{animated:Boolean},setup(a){const o=s(10*Math.random()+5);return(s,a)=>(t(),e(T,{class:"animated",style:{animationDuration:`${o.value}s`}},null,8,["style"]))},__scopeId:"data-v-fefe2e50"};a("data-v-44d89221");const g={id:"wrapper"},v=i("div",{id:"filter"},null,-1),A={key:0,id:"boxes"},C={key:1,id:"boxes"};o();const _={props:{animated:Boolean},setup(a){const o=s(60);return(s,i)=>(t(),e("div",g,[v,a.animated?(t(),e("div",A,[(t(!0),e(r,null,n([...Array(o.value)].map(((t,e)=>e)),(s=>(t(),e(b,{key:s})))),128))])):(t(),e("div",C,[(t(!0),e(r,null,n([...Array(o.value)].map(((t,e)=>e)),(s=>(t(),e(T,{key:s,opacity:Math.random()},null,8,["opacity"])))),128))]))]))},__scopeId:"data-v-44d89221"};const E=D();a("data-v-24d3cb30");const I={key:0,id:"tweet-wrapper"},j={key:0,id:"tweet"},B=i("div",{id:"tweet-label",class:"label"},[w(" TWEET WITH "),i("span",null,"#PGRF2"),w(": ")],-1),R={class:"box"},k={id:"twitter-user"},x={id:"twitter-id"};o();const F={props:{width:{type:String,default:"420px"},small:{type:Boolean},from:{type:String,default:"left"}},setup(s){const a=c(),o=m((()=>a.getters.tweet));return(a,r)=>(t(),e(p,{name:`slide-from-${s.from}`},{default:E((()=>[u(o)?(t(),e("div",I,[u(o)?(t(),e("div",j,[B,i("div",R,[i("div",k,[i("img",{id:"twitter-icon",src:u(o).icon,alt:"icon"},null,8,["src"]),i("span",x,"@"+l(u(o).id),1)]),i("div",{id:"tweet-text",class:{small:s.small}},l(u(o).content),3)])])):d("",!0)])):d("",!0)])),_:1},8,["name"]))},__scopeId:"data-v-24d3cb30"};var M=[{title:"ゲームタイトル1",category:"Category1%",platform:"Platform1",startsAt:"2021/09/04 12:00:00",est:"00:10:00",runners:[{id:1,name:"走者A",accounts:{twitch:"twitchA",twitter:"twitterA",youtube:"youtubeA"}}],commentators:[{name:"コメンテータA",accounts:{twitter:"comTwitterA"}}]},{title:"ゲームタイトル2",category:"Category2%",platform:"Platform2",startsAt:"2021/09/04 12:25:00",est:"00:20:00",runners:[{id:1,name:"走者B",accounts:{twitter:"twitterB",youtube:"youtubeB"}},{id:2,name:"走者C",accounts:{twitch:"twitchC",twitter:"twitterC"}}],commentators:[{name:"コメンテータB",accounts:{twitch:"comTwitchB",twitter:"comTwitterB",youtube:"comYoutubeB"}},{name:"コメンテータC",accounts:{twitch:"commentatorC",twitter:"commentatorC"}},{name:"コメンテータX",accounts:{twitch:"commentatorX",youtube:"commentatorX"}}]},{title:"わがまま☆フェアリー ミルモでポン! 対戦まほうだま",category:"Taisen Puzzle-Dama (たいせんモード ノーマル)",platform:"Platform3",startsAt:"2021/09/04 12:55:00",est:"00:30:00",runners:[{id:1,name:"走者DDDDDDDDDDDD",accounts:{twitch:"twitchDDDDDDDDDDDDDDDDDDD",twitter:"twitterDDDDDDD",youtube:"youtubeDDDDDDDDDDDDDDDDDD"}}],commentators:[{name:"コメンテータDDDDDDDDDDDD",accounts:{twitter:"comTwitterD"}}]},{title:"ゲームタイトル4",category:"Category4%",platform:"Platform4",startsAt:"2021/09/04 13:35:00",est:"00:40:00",runners:[{id:1,name:"走者E",accounts:{twitch:"twitchE",twitter:"twitterE",youtube:"youtubeE"}}],commentators:[{name:"コメンテータE",accounts:{twitter:"comTwitterE"}}]}];class P{constructor(t){this.title=t.title,this.category=t.category,this.platform=t.platform,this.startsAt=y.fromFormat(t.startsAt,"yyyy/MM/dd HH:mm:ss"),this.est=t.est,this.runners=t.runners,this.commentators=t.commentators}joinedRunnerNames(t=" / "){return this.runners.map((t=>t.name)).join(t)}joinedCommentatorNames(t=" / "){return this.commentators.map((t=>t.name)).join(t)}startsAtOnSchedule(){return this.startsAt.toFormat("HH:mm")}}class H{constructor(t){this.id=t.id,this.name=t.name,this.accounts=t.accounts,this.accountTypes=Object.keys(t.accounts)}currentAccount(){return{[this.accountTypes[0]]:this.accounts[this.accountTypes[0]]}}rotateAccountTypes(){this.accountTypes=this.accountTypes.slice(1).concat(this.accountTypes[0])}}var O={time:"00:12:34",status:"suspend",split:[{id:1,time:"00:11:11"}]},N={id:"twitter_id",icon:"https://pbs.twimg.com/profile_images/1350337470353666049/1fFwzKj2_400x400.jpg",content:"テストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイートテストツイート #PGRF"},S="Music Title",z="Artist Name",X=f({modules:{runs:{state:()=>({runs:M,currentRunners:M[0].runners.map((t=>new H(t))),currentCommentators:M[0].commentators.map((t=>new H(t)))}),getters:{runsOnSchedule:({runs:t})=>t.slice(0,3).map((t=>new P(t))),currentEst:({runs:t})=>t[0].est,headerInfo:({runs:t})=>({title:t[0].title,category:t[0].category,platform:t[0].platform}),footerInfo:({runs:t})=>t.length>1?{title:t[1].title,category:t[1].category}:void 0},mutations:{setRuns(t,e){t.runs=e,t.currentRunners=e[0].runners.map((t=>new H(t))),t.currentCommentators=e[0].commentators.map((t=>new H(t)))},rotateAccounts({currentRunners:t,currentCommentators:e}){t.forEach((t=>{t.rotateAccountTypes()})),e.forEach((t=>{t.rotateAccountTypes()}))}},actions:{setRuns({commit:t},e){t("setRuns",e)},rotateAccounts({commit:t}){t("rotateAccounts")}}},timer:{state:()=>({time:O.time,status:O.status,splits:O.split}),getters:{formattedTime:({time:t})=>{const e=t.split(":"),s=h.fromObject({hours:parseInt(e[0]),minutes:parseInt(e[1]),seconds:parseInt(e[2])});return s.hours>0?s.toFormat("hh:mm:ss"):s.toFormat("mm:ss")},splitOfId:({splits:t})=>e=>{const s=t.find((t=>e===t.id));return s?s.time:""}},mutations:{setTimer(t,e){t.time=e.time,t.status=e.status,t.splits=e.split}},actions:{setTimer({commit:t},e){t("setTimer",e)}}},tweet:{state:()=>({tweet:N}),getters:{tweet:({tweet:t})=>t},mutations:{setTweet(t,e){}},actions:{setTweet({commit:t},e){t("setTweet",e)}}},spotify:{state:()=>({title:S,artist:z}),mutations:{setMusic(t,e){t.title=e.title,t.artist=e.artist}},actions:{setMusic({commit:t},e){t("setMusic",e)}}}}});export{_,F as a,X as s};
