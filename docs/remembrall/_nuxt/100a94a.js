(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{246:function(t,e,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("9b77877e",content,!0,{sourceMap:!1})},252:function(t,e,n){"use strict";n.r(e);n(79),n(80),n(27),n(63),n(267);var o=n(253),r=n(244),c=n(180),d=18e5,l={ok:4,hard:1,again:.1},h=[300,3e4],v={components:{Card:o.default,AutoSpeaker:r.default},props:{reverse:{},front:{},back:{},id:{},set:{},timeMod:{default:0},nextReview:{default:0},totalReviews:{default:0},imageURL:{},examples:{},created:{default:function(){return(new Date).getTime()}},ok:{default:0},again:{default:0}},data:function(){return{msToString:c.msToString,showBack:!1,startedCardTime:new Date,revealedBackTime:new Date,averageTime:7e3,reviewsSoFar:0,metaDown:!1,textToSpeak:"",isFirefox:navigator.userAgent.toLowerCase().includes("firefox")}},computed:{settings:function(){return this.$store.state.setList[this.$store.state.currentSetId].settings},isStudying:function(){return"study"===this.$store.state.appState},isEditing:function(){return"editCard"===this.$store.state.appState},isMobile:function(){return this.$store.state.isMobile},isEditingText:function(){return this.$store.state.isEditingText},isNewCard:function(){return!this.totalReviews||0===this.totalReviews},spokenLanguage:function(){return this.settings.autoSpeak?this.isStudying&&this.showBack?this.settings.languageTools:"en":this.settings.languageTools},timeBonuses:function(){return{ok:this.getTimeBonus("ok"),hard:this.getTimeBonus("hard"),again:this.getTimeBonus("again")}}},watch:{id:function(){this.startedCardTime=new Date,this.showBack=!1,this.settings.autoSpeakFront&&(this.textToSpeak=(this.reverse?this.back:this.front).replace(/\n.*/g,""));var t=this.$el.getBoundingClientRect().top+window.scrollY-10;t>window.scrollY+100||window.scrollTo(0,t)}},mounted:function(){window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp),this.settings.autoSpeakFront&&(this.textToSpeak=(this.reverse?this.back:this.front).replace(/\n.*/g,""))},beforeDestroy:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp)},methods:{showBackAction:function(){this.showBack=!0,this.revealedBackTime=new Date;var t=this.$refs.card.$el.getBoundingClientRect(),e=t.top+window.scrollY+t.height-window.innerHeight+(this.isMobile?70:120);e<=0||e<window.scrollY||window.scrollTo(0,e)},answer:function(t){"loading"===this.imageURL&&this.$store.commit("updateCard",{id:this.id,imageURL:null}),this.showBack=!1,this.reviewsSoFar++;var e=this.revealedBackTime-this.startedCardTime,n=e<h[0]||e>h[1];n||(this.averageTime=this.averageTime*((this.reviewsSoFar-1)/this.reviewsSoFar)+e*(1/this.reviewsSoFar));var o={};o.answerTime=n?0:1-(e-h[0])/h[1];o.maturity=this.totalReviews>30?1:this.totalReviews/30;var r=.2*(this.ok||0)/(this.again||1);o.successRatio=r>1?1:r;var l=this.front.length+this.back.length-5;l<0&&(l=0);o.length=l>40?1:l/40;var v={answerTime:.4,maturity:.25,successRatio:.25,length:.1};console.log("base time mod:",Object(c.msToString)(this.timeBonuses[t]));var m=0;for(var w in o)console.log(w+" bonus:",(100*o[w]).toFixed(0)+"% (+"+(o[w]*v[w]*100).toFixed(0)+"% adjusted)"),m+=o[w]*v[w];console.log("final bonus multiplier:",m);var f=this.timeBonuses[t]/2+this.timeBonuses[t]*m;f=Math.floor(f),console.log("pre-overlong-scaled time mod:",Object(c.msToString)(f)),(f=Math.floor(f*(-1*f/3e12+1)))<-1e3&&(f=3e12),f<1&&(f=1),"again"!==t&&f<d&&(f=d);var k=36e6;this.settings.oncePerDay&&f<k&&(f=k),console.log("old time mod:",Object(c.msToString)(this.timeMod)),console.log("new time mod:",Object(c.msToString)(f)),console.log("");var _=new Date(Date.now()+f).getTime(),y=this.totalReviews+1,T=this.again+("again"===t?1:0),S=y-T;this.$store.commit("studyCard",{id:this.id,lastStudied:Date.now(),timeMod:f,nextReview:_,totalReviews:y,ok:S,again:T}),this.$emit("done",f)},getTimeBonus:function(t){var e=(!this.timeMod||isNaN(this.timeMod)?0:this.timeMod)*l[t]*(this.settings.reviewIntervalMultiplier||1);"again"===t&&(e=0);var n=1-Math.min(.8,(Date.now()-(this.nextReview||Date.now()))/2592e6);return"again"===t&&console.log("overdue multiplier:",n.toFixed(2)),e*=n,"again"!==t&&e<d&&(e=d),e},keyDown:function(t){var e=this;"Control"===t.key&&(this.metaDown=!0),"Meta"===t.key?this.metaDown=!0:"i"===t.key&&this.metaDown&&(this.$store.commit("updateCard",{id:this.id,imageURL:"loading"}),Object(c.getRandomImage)(this.front||this.back).then((function(image){image&&e.$store.commit("updateCard",{id:e.id,imageURL:image})}))),this.isStudying&&!this.isEditingText&&("1"===t.key&&this.showBack&&this.answer("again"),"2"===t.key&&this.showBack?this.answer("hard"):" "===t.key||"Enter"===t.key?(t.preventDefault(),t.stopPropagation(),this.showBack?this.answer("ok"):this.showBackAction()):"3"===t.key&&this.showBack?this.answer("ok"):"p"===t.key&&this.$emit("postpone"))},keyUp:function(t){"Control"===t.key&&(this.metaDown=!1),"Meta"===t.key&&(this.metaDown=!1)}}},m=(n(269),n(52)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.settings.languageTools?n("AutoSpeaker",{attrs:{text:t.textToSpeak,language:t.spokenLanguage}}):t._e(),t._v(" "),n("Card",{ref:"card",staticClass:"card",attrs:{id:t.id,front:t.front,back:t.back,reverse:t.reverse,"time-mod":t.timeMod,"next-review":t.nextReview,"total-reviews":t.totalReviews,created:t.created,ok:t.ok,again:t.again,"for-study":!0,"show-back":t.showBack,set:t.set,"image-u-r-l":t.imageURL,examples:t.examples},on:{showBack:t.showBackAction}}),t._v(" "),n("div",{staticClass:"buttonlist primary"},[t.showBack?[void 0!==t.timeBonuses.again?n("button",{key:"again",on:{click:function(e){return t.answer("again")}}},[t._v("\n        Wrong\n        "),n("span",{staticClass:"sub"},[n("span",{staticClass:"fade"},[t._v(t._s(t.msToString(0,!0)))])]),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.timeBonuses.hard?n("button",{key:"hard",on:{click:function(e){return t.answer("hard")}}},[t._v("\n        Hard\n        "),n("span",{staticClass:"sub"},[n("span",{staticClass:"fade"},[t._v("~"+t._s(t.msToString(t.timeBonuses.hard,!0)))])]),t._v(" "),t._m(2)]):t._e(),t._v(" "),t.timeBonuses.ok?n("button",{key:"ok",on:{click:function(e){return t.answer("ok")}}},[t._v("\n        Right\n        "),n("span",{staticClass:"sub"},[n("span",{staticClass:"fade"},[t._v("~"+t._s(t.msToString(t.timeBonuses.ok,!0)))])]),t._v(" "),n("div",[n("kbd",{staticClass:"keyicon"},[t._v("3")]),t._v(" "),t.isMobile?t._e():n("span",[t._v("/")]),t._v(" "),n("kbd",{staticClass:"keyicon"},[t._v("Space")])])]):t._e()]:n("button",{key:"showback",staticClass:"showback",on:{click:t.showBackAction}},[t._v("\n      Show Back\n      "),t._m(0)])],2),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"centertext"},[n("button",{staticStyle:{"padding-right":"15%","padding-left":"15%"},on:{click:function(e){return t.$emit("postpone")}}},[t._v("\n      Postpone\n      "),t._m(3)])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("kbd",{staticClass:"keyicon"},[t._v("Space")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("kbd",{staticClass:"keyicon"},[t._v("1")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("kbd",{staticClass:"keyicon"},[t._v("2")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"keyicon"},[t._v("P")])])}],!1,null,"c7de95b0",null);e.default=component.exports;installComponents(component,{AutoSpeaker:n(244).default,Card:n(253).default})},267:function(t,e,n){"use strict";var o=n(5),r=n(1),c=n(4),d=n(55),l=n(268),h=n(183),v=n(7),m=r.RangeError,w=r.String,f=Math.floor,k=c(h),_=c("".slice),y=c(1..toFixed),T=function(t,e,n){return 0===e?n:e%2==1?T(t,e-1,n*t):T(t*t,e/2,n)},S=function(data,t,e){for(var n=-1,o=e;++n<6;)o+=t*data[n],data[n]=o%1e7,o=f(o/1e7)},B=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=f(n/t),n=n%t*1e7},x=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=w(data[t]);s=""===s?e:s+k("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:v((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!v((function(){y({})}))},{toFixed:function(t){var e,n,o,r,c=l(this),h=d(t),data=[0,0,0,0,0,0],v="",f="0";if(h<0||h>20)throw m("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return w(c);if(c<0&&(v="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*T(2,69,1))-69)<0?c*T(2,-e,1):c/T(2,e,1),n*=4503599627370496,(e=52-e)>0){for(S(data,0,n),o=h;o>=7;)S(data,1e7,0),o-=7;for(S(data,T(10,o,1),0),o=e-1;o>=23;)B(data,1<<23),o-=23;B(data,1<<o),S(data,1,1),B(data,2),f=x(data)}else S(data,0,n),S(data,1<<-e,0),f=x(data)+k("0",h);return f=h>0?v+((r=f.length)<=h?"0."+k("0",h-r)+f:_(f,0,r-h)+"."+_(f,r-h)):v+f}})},268:function(t,e,n){var o=n(4);t.exports=o(1..valueOf)},269:function(t,e,n){"use strict";n(246)},270:function(t,e,n){var o=n(134)(!1);o.push([t.i,".card[data-v-c7de95b0]{margin-bottom:20px}.showback[data-v-c7de95b0]{width:100%}@media(max-width:768px){.buttonlist.primary[data-v-c7de95b0]{position:relative;z-index:1000;width:100%;border-radius:0;position:fixed;bottom:0;left:0;border-bottom:none}.buttonlist.primary button[data-v-c7de95b0]{background:#eee;border-radius:0}.buttonlist.primary button[data-v-c7de95b0]:hover{background:#ddd}}",""]),t.exports=o}}]);