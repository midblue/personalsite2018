(window.webpackJsonp=window.webpackJsonp||[]).push([[27,13,15,18,19,24],{237:function(t,e,n){"use strict";n.r(e);n(27),n(64);var r={props:{text:{required:!1,default:"",type:String},lineBreaksAllowed:{required:!1,default:!0,type:Boolean},acceptBlank:{required:!1,default:!1,type:Boolean},disableEdits:{required:!1,default:!1,type:Boolean},placeholder:{required:!1,default:"",type:String},focus:{required:!1,default:!1,type:Boolean}},components:{},data:function(){return{displayText:this.text,isEditing:!1,metaDown:!1,shiftDown:!1,isPlaceholder:0===this.text.length}},model:{prop:"text",event:"changeText"},computed:{},watch:{text:function(t){this.isEditing||this.resetTextTo(t)},disableEdits:function(t){this.isEditing=!1,this.metaDown=!1,this.shiftDown=!1},focus:function(t){var e=this;t&&this.$nextTick((function(){e.startEdit()}))}},mounted:function(){window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp),this.isPlaceholder&&(this.displayText=this.placeholder),this.focus&&this.startEdit()},beforeDestroy:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp)},methods:{startEdit:function(){var t=this;this.isEditing||this.disableEdits||(this.isEditing=!0,this.isPlaceholder&&(this.displayText=""),this.isPlaceholder=!1,this.metaDown=!1,this.shiftDown=!1,this.$nextTick((function(){t.$el.focus(),t.$nextTick(t.selectText)})),this.$emit("startEdit",this.displayText))},resetTextTo:function(t){var e=this;this.displayText="",this.$el.innerHTML="",this.$nextTick((function(){e.displayText=t,t||!e.placeholder||e.isEditing||(e.displayText=e.placeholder,e.isPlaceholder=!0)}))},commitEdit:function(){window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.empty(),this.isEditing=!1,this.metaDown=!1,this.shiftDown=!1;var t=this.sanitize(this.$el.innerHTML);t.length>0?this.$emit("endEdit",t):this.resetTextTo(this.text)},keyDown:function(t){this.isEditing&&!this.disableEdits&&("Meta"===t.key&&(this.metaDown=!0),"Shift"===t.key&&(this.shiftDown=!0),"Enter"!==t.key||this.lineBreaksAllowed||this.commitEdit(),"Enter"===t.key&&this.metaDown&&this.commitEdit(),"Tab"===t.key&&this.shiftDown&&this.$emit("prev",t),"Tab"===t.key&&this.$emit("next",t),"Escape"===t.key&&(this.resetTextTo(this.text),this.$nextTick(this.commitEdit)))},keyUp:function(t){this.isEditing&&!this.disableEdits&&("Meta"===t.key&&(this.metaDown=!1),"Shift"===t.key&&(this.shiftDown=!1))},selectText:function(){if(document.body.createTextRange){var t=document.body.createTextRange();t.moveToElementText(this.$el),t.select()}else if(window.getSelection){var e=window.getSelection(),n=document.createRange();n.selectNodeContents(this.$el),e.removeAllRanges(),e.addRange(n)}},sanitize:function(text){return text.replace(/<div>/g,"\n").replace(/<br\s?\/?>/g,"\n").replace(/<[^>]*>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/^[\s\n\t]*/g,"")},paste:function(t){t.stopPropagation(),t.preventDefault();var e=t.clipboardData||window.clipboardData,n=this.sanitize(e.getData("Text"));if(/.(jpe?g|png|gif|webm|bmp)$/gi.test(n))return this.$emit("setImageURL",n);if(/^data:/gi.test(n))return alert("that's image data, not a link! make sure you get an image url that ends in .jpg, .png, .gif, etc.");var r,o,d,c,l,h=document.activeElement.innerText,f=(r=this.$el,o=function(){var t=window.getSelection();if(null!=t&&t.rangeCount>0){var e=t.getRangeAt(0);return{start:d(r,e.startContainer,e.startOffset),end:d(r,e.endContainer,e.endOffset)}}return null},d=function t(e,n,r){var o=0;if("#text"===n.nodeName)o+=r;else for(var i=0;i<r;i++)o+=c(n.childNodes[i]);return n!==e&&(o+=t(e,n.parentNode,l(n))),o},c=function t(e){var n=0;if("BR"===e.nodeName)n=1;else if("#text"===e.nodeName)n=e.nodeValue.length;else if(null!==e.childNodes)for(var i=0;i<e.childNodes.length;i++)n+=t(e.childNodes[i]);return n},l=function t(e){return null==e?-1:1+t(e.previousSibling)},o(document.activeElement)),v=h.substring(0,f.start)+n+h.substring(f.end);this.displayText=v,this.$emit("changeText",v),this.$nextTick(this.moveCursorToEnd)},moveCursorToEnd:function(){var t,e;document.createRange?((t=document.createRange()).selectNodeContents(this.$el),t.collapse(!1),(e=window.getSelection()).removeAllRanges(),e.addRange(t)):document.selection&&((t=document.body.createTextRange()).moveToElementText(this.$el),t.collapse(!1),t.select())}}},o=(n(255),n(52)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"editabletext",class:{editabletextediting:t.isEditing,placeholder:t.isPlaceholder},attrs:{contenteditable:t.isEditing,tabindex:"0"},domProps:{innerHTML:t._s(t.displayText)},on:{focus:t.startEdit,click:t.startEdit,input:function(e){t.$emit("changeText",t.sanitize(t.$el.innerHTML))},blur:t.commitEdit,paste:t.paste}})}),[],!1,null,null,null);e.default=component.exports},238:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(108);var o=n(137),d=n(81);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(d.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},239:function(t,e,n){"use strict";n.r(e);var r=n(238),o=(n(63),n(34),n(53),n(15),n(44),n(67),n(46),n(27),n(35),n(69),n(70),n(47),n(180));function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,d=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return d=t.done,t},e:function(t){l=!0,o=t},f:function(){try{d||null==n.return||n.return()}finally{if(l)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={components:{},props:{cards:{},slots:{default:10},maxTime:{default:null},title:{default:"All upcoming reviews:"}},data:function(){return{updateGraphTimer:null,reviewGraph:{},firstFrame:!0}},watch:{cards:function(){this.updateGraph()}},mounted:function(){var t=this;this.updateGraphTimer=setInterval(this.updateGraph,3e4),this.updateGraph(),setTimeout((function(){return t.firstFrame=!1}),100)},beforeDestroy:function(){clearInterval(this.updateGraphTimer)},methods:{updateGraph:function(){if(this.cards&&0!==this.cards.length){for(var t=Date.now(),e=this.cards.map((function(e){return parseInt(e.nextReview)-t})),n=this.maxTime?this.maxTime:Math.max.apply(Math,Object(r.a)(e)),c=[],l=[],h=0;h<this.slots;h++)c[h]=0,l[this.slots-1-h]=Object(o.msToString)(n-n/this.slots*(h+.5));var f,v=d(e);try{for(v.s();!(f=v.n()).done;){var time=f.value,m=Math.floor(time/n*(this.slots-1));m>=this.slots||(c[m]?c[m]++:c[m]=1)}}catch(t){v.e(t)}finally{v.f()}var w=Math.max.apply(Math,c);this.reviewGraph={graphPoints:c,labels:l,maxValue:w}}}}},h=(n(258),n(52)),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reviewgraph"},[t.reviewGraph.graphPoints?n("h4",[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"bars"},t._l(t.reviewGraph.graphPoints,(function(e,r){return n("div",{key:"bar"+r,staticClass:"fill",style:{height:t.firstFrame?0:e/t.reviewGraph.maxValue*100+"%"}},[n("div",{staticClass:"count"},[t._v(t._s(e))])])})),0),t._v(" "),n("div",{staticClass:"labels"},t._l(t.reviewGraph.labels,(function(label,e){return n("span",{key:"label"+e,staticClass:"sub"},[t._v(t._s(label)+"\n    ")])})),0)])}),[],!1,null,"451472b2",null);e.default=component.exports},240:function(t,e,n){"use strict";n.r(e);var r={props:{text:{},offset:{default:0},color:{default:"green"}},data:function(){return{textToFloat:null}},watch:{text:function(t){var e=this;this.textToFloat=null,this.$nextTick((function(){return e.textToFloat=e.text}))}}},o=(n(260),n(52)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.textToFloat?n("div",{staticClass:"floattext",style:{transform:"translateY("+t.offset+"px)",color:t.color}},[t._v("\n\t\t"+t._s(t.textToFloat)+"\n\t")]):t._e()}),[],!1,null,"d16cf874",null);e.default=component.exports},241:function(t,e,n){var content=n(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("8202c81e",content,!0,{sourceMap:!1})},242:function(t,e,n){var content=n(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("2b827ed1",content,!0,{sourceMap:!1})},243:function(t,e,n){var content=n(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("62f984fd",content,!0,{sourceMap:!1})},246:function(t,e,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("f19735ea",content,!0,{sourceMap:!1})},247:function(t,e,n){var content=n(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("f36acca2",content,!0,{sourceMap:!1})},252:function(t,e,n){"use strict";n.r(e);n(79),n(80),n(27),n(64),n(267);var r=n(253),o=n(244),d=n(180),c=18e5,l={ok:3,hard:1,again:.1},h=[300,3e4],f={components:{Card:r.default,AutoSpeaker:o.default},props:{reverse:{},front:{},back:{},id:{},set:{},timeMod:{default:0},nextReview:{default:0},totalReviews:{default:0},imageURL:{},created:{default:function(){return(new Date).getTime()}},ok:{default:0},again:{default:0}},data:function(){return{msToString:d.msToString,showBack:!1,startedCardTime:new Date,revealedBackTime:new Date,averageTime:7e3,reviewsSoFar:0,metaDown:!1,textToSpeak:"",isFirefox:navigator.userAgent.toLowerCase().includes("firefox")}},computed:{settings:function(){return this.$store.state.setList[this.$store.state.currentSetId].settings},isStudying:function(){return"study"===this.$store.state.appState},isEditing:function(){return"editCard"===this.$store.state.appState},isMobile:function(){return this.$store.state.isMobile},isEditingText:function(){return this.$store.state.isEditingText},isNewCard:function(){return!this.totalReviews||0===this.totalReviews},timeBonuses:function(){return{ok:this.getTimeBonus("ok"),hard:this.getTimeBonus("hard"),again:this.getTimeBonus("again")}}},watch:{id:function(){this.startedCardTime=new Date,this.showBack=!1,this.settings.autoSpeakFront&&(this.textToSpeak=(this.reverse?this.back:this.front).replace(/\n.*/g,""));var t=this.$el.getBoundingClientRect().top+window.scrollY-10;t>window.scrollY+100||window.scrollTo(0,t)}},mounted:function(){window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp),this.settings.autoSpeakFront&&(this.textToSpeak=(this.reverse?this.back:this.front).replace(/\n.*/g,""))},beforeDestroy:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp)},methods:{showBackAction:function(){this.showBack=!0,this.revealedBackTime=new Date;var t=this.$refs.card.$el.getBoundingClientRect(),e=t.top+window.scrollY+t.height-window.innerHeight+(this.isMobile?70:120);e<=0||e<window.scrollY||window.scrollTo(0,e)},answer:function(t){"loading"===this.imageURL&&this.$store.commit("updateCard",{id:this.id,imageURL:null}),this.showBack=!1,this.reviewsSoFar++;var e=this.revealedBackTime-this.startedCardTime,n=e<h[0]||e>h[1];n||(this.averageTime=this.averageTime*((this.reviewsSoFar-1)/this.reviewsSoFar)+e*(1/this.reviewsSoFar));var r={};r.answerTime=n?0:1-(e-h[0])/h[1];r.maturity=this.totalReviews>30?1:this.totalReviews/30;var o=.2*(this.ok||0)/(this.again||1);r.successRatio=o>1?1:o;var l=this.front.length+this.back.length-5;l<0&&(l=0);r.length=l>40?1:l/40;var f={answerTime:.4,maturity:.25,successRatio:.25,length:.1};console.log("base time mod:",Object(d.msToString)(this.timeBonuses[t]));var v=0;for(var m in r)console.log(m+" bonus:",(100*r[m]).toFixed(0)+"% (+"+(r[m]*f[m]*100).toFixed(0)+"% adjusted)"),v+=r[m]*f[m];console.log("final bonus multiplier:",v);var w=this.timeBonuses[t]/2+this.timeBonuses[t]*v;w=Math.floor(w),console.log("pre-overlong-scaled time mod:",Object(d.msToString)(w)),(w=Math.floor(w*(-1*w/3e12+1)))<-1e3&&(w=3e12),w<1&&(w=1),"again"!==t&&w<c&&(w=c);var y=36e6;this.settings.oncePerDay&&w<y&&(w=y),console.log("old time mod:",Object(d.msToString)(this.timeMod)),console.log("new time mod:",Object(d.msToString)(w)),console.log("");var x=new Date(Date.now()+w).getTime(),k=this.totalReviews+1,_=this.again+("again"===t?1:0),T=k-_;this.$store.commit("studyCard",{id:this.id,lastStudied:Date.now(),timeMod:w,nextReview:x,totalReviews:k,ok:T,again:_}),this.$emit("done",w)},getTimeBonus:function(t){var e=(!this.timeMod||isNaN(this.timeMod)?0:this.timeMod)*l[t];"again"===t&&(e=0);var n=1-Math.min(.8,(Date.now()-(this.nextReview||Date.now()))/2592e6);return"again"===t&&console.log("overdue multiplier:",n.toFixed(2)),e*=n,"again"!==t&&e<c&&(e=c),e},keyDown:function(t){var e=this;"Control"===t.key&&(this.metaDown=!0),"Meta"===t.key?this.metaDown=!0:"i"===t.key&&this.metaDown&&(this.$store.commit("updateCard",{id:this.id,imageURL:"loading"}),Object(d.getRandomImage)(this.front||this.back).then((function(image){image&&e.$store.commit("updateCard",{id:e.id,imageURL:image})}))),this.isStudying&&!this.isEditingText&&("1"===t.key&&this.showBack&&this.answer("again"),"2"===t.key&&this.showBack?this.answer("hard"):" "===t.key||"Enter"===t.key?(t.preventDefault(),t.stopPropagation(),this.showBack?this.answer("ok"):this.showBackAction()):"3"===t.key&&this.showBack?this.answer("ok"):"p"===t.key&&this.$emit("postpone"))},keyUp:function(t){"Control"===t.key&&(this.metaDown=!1),"Meta"===t.key&&(this.metaDown=!1)}}},v=(n(269),n(52)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.settings.languageTools?n("AutoSpeaker",{attrs:{text:t.textToSpeak,language:t.settings.languageTools}}):t._e(),t._v(" "),n("Card",{ref:"card",staticClass:"card",attrs:{id:t.id,front:t.front,back:t.back,reverse:t.reverse,"time-mod":t.timeMod,"next-review":t.nextReview,"total-reviews":t.totalReviews,created:t.created,ok:t.ok,again:t.again,"for-study":!0,"show-back":t.showBack,set:t.set,"image-u-r-l":t.imageURL},on:{showBack:t.showBackAction}}),t._v(" "),n("div",{staticClass:"buttonlist primary"},[t.showBack?[void 0!==t.timeBonuses.again?n("button",{key:"again",on:{click:function(e){return t.answer("again")}}},[t._v("\n        Wrong\n        "),n("span",{staticClass:"sub"},[n("span",{staticClass:"fade"},[t._v(t._s(t.msToString(0,!0)))])]),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.timeBonuses.hard?n("button",{key:"hard",on:{click:function(e){return t.answer("hard")}}},[t._v("\n        Hard\n        "),n("span",{staticClass:"sub"},[n("span",{staticClass:"fade"},[t._v("~"+t._s(t.msToString(t.timeBonuses.hard,!0)))])]),t._v(" "),t._m(2)]):t._e(),t._v(" "),t.timeBonuses.ok?n("button",{key:"ok",on:{click:function(e){return t.answer("ok")}}},[t._v("\n        Right\n        "),n("span",{staticClass:"sub"},[n("span",{staticClass:"fade"},[t._v("~"+t._s(t.msToString(t.timeBonuses.ok,!0)))])]),t._v(" "),n("div",[n("kbd",{staticClass:"keyicon"},[t._v("3")]),t._v(" "),t.isMobile?t._e():n("span",[t._v("/")]),t._v(" "),n("kbd",{staticClass:"keyicon"},[t._v("Space")])])]):t._e()]:n("button",{key:"showback",staticClass:"showback",on:{click:t.showBackAction}},[t._v("\n      Show Back\n      "),t._m(0)])],2),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"centertext"},[n("button",{staticStyle:{"padding-right":"15%","padding-left":"15%"},on:{click:function(e){return t.$emit("postpone")}}},[t._v("\n      Postpone\n      "),t._m(3)])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("kbd",{staticClass:"keyicon"},[t._v("Space")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("kbd",{staticClass:"keyicon"},[t._v("1")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("kbd",{staticClass:"keyicon"},[t._v("2")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"keyicon"},[t._v("P")])])}],!1,null,"e25235da",null);e.default=component.exports;installComponents(component,{AutoSpeaker:n(244).default,Card:n(253).default})},254:function(t,e,n){"use strict";n.r(e);var r={props:{toStudy:{},startedWith:{}},components:{},data:function(){return{adjustedStartedWith:this.toStudy.length}},computed:{},watch:{toStudy:function(t){t.length>=this.startedWith&&(this.adjustedStartedWith=t.length)},startedWith:function(t){t>=this.toStudy.length&&(this.adjustedStartedWith=t)}},mounted:function(){},beforeDestroy:function(){},methods:{}},o=(n(271),n(52)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"remainingcards"},[t._l(t.adjustedStartedWith-t.toStudy.length>0?t.adjustedStartedWith-t.toStudy.length:0,(function(t){return n("div",{key:t,staticClass:"card"})})),t._v(" "),t._l(t.toStudy,(function(t,e){return n("div",{key:t.id,staticClass:"card",class:{review:t.totalReviews,new:!t.totalReviews,current:0===e}})}))],2)}),[],!1,null,"805d34fa",null);e.default=component.exports},255:function(t,e,n){"use strict";n(241)},256:function(t,e,n){var r=n(134)(!1);r.push([t.i,".editabletext{cursor:pointer}.editabletext.placeholder{color:rgba(0,0,0,.2)}.editabletext.editabletextediting{cursor:text}",""]),t.exports=r},258:function(t,e,n){"use strict";n(242)},259:function(t,e,n){var r=n(134)(!1);r.push([t.i,".reviewgraph[data-v-451472b2]{width:100%;margin-bottom:30px}.reviewgraph .bars[data-v-451472b2]{height:70px;display:flex;justify-content:stretch;align-items:flex-end}.reviewgraph .bars .fill[data-v-451472b2]{flex:1;background:#ddd;margin:0 3px;border-top-right-radius:5px;border-top-left-radius:5px;position:relative;transition:all 1s;height:0}.reviewgraph .count[data-v-451472b2]{font-size:.8em;opacity:.3;position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(-93%)}.reviewgraph .labels[data-v-451472b2]{margin-top:2px;display:flex;justify-content:stretch;text-align:center}.reviewgraph .labels>*[data-v-451472b2]{flex:1}",""]),t.exports=r},260:function(t,e,n){"use strict";n(243)},261:function(t,e,n){var r=n(134)(!1);r.push([t.i,".floattext[data-v-d16cf874]{z-index:1000;width:100%;left:0;position:absolute;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;font-weight:600;-webkit-animation:pointsscroll-data-v-d16cf874 1.5s ease-out normal forwards;animation:pointsscroll-data-v-d16cf874 1.5s ease-out normal forwards}@-webkit-keyframes pointsscroll-data-v-d16cf874{0%{opacity:0;bottom:0}50%{opacity:1}to{opacity:0;bottom:100px}}@keyframes pointsscroll-data-v-d16cf874{0%{opacity:0;bottom:0}50%{opacity:1}to{opacity:0;bottom:100px}}",""]),t.exports=r},263:function(t,e,n){var content=n(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("d8ea2cc8",content,!0,{sourceMap:!1})},267:function(t,e,n){"use strict";var r=n(5),o=n(1),d=n(4),c=n(55),l=n(268),h=n(183),f=n(7),v=o.RangeError,m=o.String,w=Math.floor,y=d(h),x=d("".slice),k=d(1..toFixed),_=function(t,e,n){return 0===e?n:e%2==1?_(t,e-1,n*t):_(t*t,e/2,n)},T=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=w(r/1e7)},C=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=w(n/t),n=n%t*1e7},S=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+y("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:f((function(){return"0.000"!==k(8e-5,3)||"1"!==k(.9,0)||"1.25"!==k(1.255,2)||"1000000000000000128"!==k(0xde0b6b3a7640080,0)}))||!f((function(){k({})}))},{toFixed:function(t){var e,n,r,o,d=l(this),h=c(t),data=[0,0,0,0,0,0],f="",w="0";if(h<0||h>20)throw v("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return m(d);if(d<0&&(f="-",d=-d),d>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(d*_(2,69,1))-69)<0?d*_(2,-e,1):d/_(2,e,1),n*=4503599627370496,(e=52-e)>0){for(T(data,0,n),r=h;r>=7;)T(data,1e7,0),r-=7;for(T(data,_(10,r,1),0),r=e-1;r>=23;)C(data,1<<23),r-=23;C(data,1<<r),T(data,1,1),C(data,2),w=S(data)}else T(data,0,n),T(data,1<<-e,0),w=S(data)+y("0",h);return w=h>0?f+((o=w.length)<=h?"0."+y("0",h-o)+w:x(w,0,o-h)+"."+x(w,o-h)):f+w}})},268:function(t,e,n){var r=n(4);t.exports=r(1..valueOf)},269:function(t,e,n){"use strict";n(246)},270:function(t,e,n){var r=n(134)(!1);r.push([t.i,".card[data-v-e25235da]{margin-bottom:20px}.showback[data-v-e25235da]{width:100%}@media(max-width:768px){.buttonlist.primary[data-v-e25235da]{position:relative;z-index:1000;width:100%;border-radius:0;position:fixed;bottom:0;left:0;border-bottom:none}.buttonlist.primary button[data-v-e25235da]{background:#eee;border-radius:0}.buttonlist.primary button[data-v-e25235da]:hover{background:#ddd}}",""]),t.exports=r},271:function(t,e,n){"use strict";n(247)},272:function(t,e,n){var r=n(134)(!1);r.push([t.i,".remainingcards[data-v-805d34fa]{display:flex;justify-content:center;align-items:center;width:100%;height:10px;position:relative;margin:10px 0 20px}.remainingcards .card[data-v-805d34fa]{flex-shrink:1;flex-grow:0;width:4px;height:4px;background:#ddd;opacity:.5;transform:scaleX(1)}.remainingcards .card.review[data-v-805d34fa]{background:#bbb}.remainingcards .card.review.current[data-v-805d34fa]{opacity:1}.remainingcards .card.new[data-v-805d34fa]{background:#bbb}.remainingcards .card.new.current[data-v-805d34fa]{opacity:1}.remainingcards .card.current[data-v-805d34fa]{flex-shrink:0;-webkit-animation-duration:0s;animation-duration:0s;width:10px;height:10px;border-radius:5px}",""]),t.exports=r},276:function(t,e,n){"use strict";n.r(e);var r=n(238),o=(n(53),n(296),n(45),n(15),n(65),n(182),n(63),n(252)),d=n(237),c=n(254),l=n(239),h=n(240),f=n(180),v={components:{SingleCardStudy:o.default,ReviewGraph:l.default,FloatingText:h.default,EditableTextField:d.default,RemainingCardIndicator:c.default},props:{cards:{}},data:function(){return{refreshCardsTimer:null,startedWith:0,displayTimeMod:null,updatedCards:[],cardsToStudy:[]}},computed:{appState:function(){return this.$store.state.appState},currentSetId:function(){return this.$store.state.currentSetId},settings:function(){return this.$store.state.setList[this.$store.state.currentSetId].settings||{}},newToday:function(){return this.$store.state.setList[this.$store.state.currentSetId].newToday},reviewsToday:function(){return this.$store.state.setList[this.$store.state.currentSetId].reviewsToday},doneForDay:function(){return this.doneReviewing&&this.doneWithNewCards},newCards:function(){var t=(this.settings.maxNewPerDay||0)-(this.newToday||0);return this.updatedCards.filter((function(t){return!t.totalReviews&&(!t.nextReview||t.nextReview<Date.now())})).sort((function(a,b){return a.id>b.id?1:-1})).slice(0,t>0?t:0)},doneWithNewCards:function(){return this.newToday>=this.settings.maxNewPerDay||0===this.newCards.length},newCardsAreLeftOver:function(){var t=this.updatedCards.filter((function(t){return 0===t.totalReviews||!t.totalReviews})).length;return t>0&&t+this.newToday>this.settings.maxNewPerDay},newCardsLeftOver:function(){return this.newCardsAreLeftOver?this.updatedCards.filter((function(t){return 0===t.totalReviews||!t.totalReviews})).length:0},dueCards:function(){var t=this.settings.maxReviewsPerDay?this.settings.maxReviewsPerDay-(this.reviewsToday||0):99999,e=Date.now();return this.updatedCards.filter((function(t){return t.totalReviews&&t.totalReviews>0&&t.nextReview<e})).sort((function(a,b){return a.nextReview>b.nextReview?1:-1})).slice(0,t>0?t:0)},doneReviewing:function(){return 0===this.dueCards.length||this.settings.maxReviewsPerDay&&this.reviewsToday>=this.settings.maxReviewsPerDay},reviewsAreLeftOver:function(){return this.doneReviewing&&this.dueCards.length},reviewsLeftOver:function(){return this.dueCards.length},allStudyableCards:function(){return this.doneWithNewCards?Object(r.a)(this.dueCards):[].concat(Object(r.a)(this.newCards),Object(r.a)(this.dueCards))},cardToStudy:function(){return this.cardsToStudy[0]},nextReviewIn:function(){if(this.settings.maxReviewsPerDay&&this.reviewsToday>=this.settings.maxReviewsPerDay)return"a day";var t=(this.doneForDay?this.updatedCards.filter((function(t){return t.totalReviews&&t.totalReviews>0})):this.updatedCards).reduce((function(t,e){var n=e.nextReview;return n<t?n:t}),1e19);return Object(f.msToString)(t-Date.now())}},watch:{currentSetId:function(){var t=this;this.toReview=[],this.$nextTick((function(){t.refreshCards(),t.startedWith=t.dueCards.length+t.newCards.length}))},cards:function(){this.$nextTick(this.refreshCards)},doneForDay:function(t){t&&(window.scrollTo(0,0),this.$nextTick(this.refreshCards),this.startedWith=0)},allStudyableCards:function(t){var e=this,n=function(t){return t.sort((function(){return Math.random()-.5}))},o=t.filter((function(t){return!e.cardsToStudy.find((function(e){return e.id===t.id}))}));if(!!this.cardsToStudy.find((function(e){return!t.find((function(t){return e.id===t.id}))})))return this.cardsToStudy=this.settings.shuffleCards?n(t):t;if(0!==o.length){var d,c=[].concat(Object(r.a)(this.cardsToStudy),Object(r.a)(this.settings.shuffleCards?n(o):o));this.cardsToStudy=this.settings.shuffleCards?(d=c,[].concat(Object(r.a)(d.slice(0,1)),Object(r.a)(n(d.slice(1,d.length-2))),Object(r.a)(d.slice(d.length-2)))):c.sort((function(a,b){return a.nextReview-b.nextReview}))}}},mounted:function(){void 0!==this.settings.maxNewPerDay&&null!==this.settings.maxNewPerDay||this.$store.commit("updateSetSettings",{maxNewPerDay:10}),void 0!==this.settings.studyReverse&&null!==this.settings.studyReverse||this.$store.commit("updateSetSettings",{studyReverse:!1}),this.refreshCardsTimer=setInterval(this.refreshCards,1e4),this.refreshCards(),this.startedWith=this.dueCards.length+this.newCards.length},beforeDestroy:function(){clearInterval(this.refreshCardsTimer)},methods:{finishedCurrentCard:function(t){var e=this;if(this.cardsToStudy.shift(),void 0!==t){var text=t>1?"+"+Object(f.msToString)(t):"Again!";this.displayTimeMod=null,this.$nextTick((function(){return e.displayTimeMod=text})),this.preloadNextImage()}},postponeCurrentCard:function(){var t=this,e=this.cardsToStudy.shift(),n=36e5;this.$store.commit("updateCard",{id:e.id,nextReview:new Date(Date.now()+n).getTime()}),this.displayTimeMod=null,this.$nextTick((function(){return t.displayTimeMod="Postponed for "+Object(f.msToString)(n)})),this.preloadNextImage()},preloadNextImage:function(){var t=this.cardsToStudy[1];t&&t.imageURL&&((new Image).src=t.imageURL,console.log("preloaded",t.imageURL))},refreshCards:function(){this.updatedCards=Object(r.a)(this.cards.filter((function(t){return!t.suspended})))},updateMaxNewPerDay:function(t){var e=parseInt(t)||10;this.$store.commit("updateSetSettings",{maxNewPerDay:e})},updateMaxReviewsPerDay:function(t){var e=parseInt(t)||0;this.$store.commit("updateSetSettings",{maxReviewsPerDay:e})}}},m=(n(292),n(52)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"studyframe",class:{focus:"study"===t.appState||"editCard"===t.appState}},[t.settings.studyReverse?n("div",{staticClass:"sub"},[t._v("\n    Studying cards back-to-front.\n    "),n("u",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$store.commit("updateSetSettings",{studyReverse:!1})}}},[t._v("\n      Back to normal\n    ")])]):t._e(),t._v(" "),n("FloatingText",{attrs:{text:t.displayTimeMod,color:t.displayTimeMod?"Again!"===t.displayTimeMod?"#fa4":"#0c6":"green",offset:"-120"}}),t._v(" "),t.doneForDay?t.doneForDay&&t.reviewsAreLeftOver?[n("div",{staticClass:"padtb centertext"},[n("h3",[t._v("Done for now!")]),t._v(" "),n("div",[t._v("\n        There "+t._s(1===t.reviewsLeftOver?"is":"are")+"\n        "),n("b",[t._v(t._s(t.reviewsLeftOver))]),t._v(" more card"+t._s(1===t.reviewsLeftOver?"":"s")+"\n        due to be reviewed. If you want to study more cards today, change the\n        setting below.\n      ")]),t._v(" "),n("p",{staticClass:"singlesetting"},[n("EditableTextField",{staticClass:"visibletextfield",attrs:{text:""+t.settings.maxReviewsPerDay,"line-breaks-allowed":!1},on:{endEdit:t.updateMaxReviewsPerDay}}),t._v("   "),n("b",[t._v("Max reviews per day (0 for no limit)")])],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),t.nextReviewIn?n("p",[t._v("Otherwise, come back tomorrow to study more.")]):t._e()])]:t.doneForDay&&t.newCardsAreLeftOver?[n("div",{staticClass:"padtb centertext"},[n("h3",[t._v("Done for now!")]),t._v(" "),n("div",[t._v("\n        There "+t._s(1===t.newCardsLeftOver?"is":"are")+"\n        "),n("b",[t._v(t._s(t.newCardsLeftOver))]),t._v(" new card"+t._s(1===t.newCardsLeftOver?"":"s")+"\n        remaining to be learned. If you want to study more new cards, change\n        the setting below.\n      ")]),t._v(" "),n("p",{staticClass:"singlesetting"},[n("EditableTextField",{staticClass:"visibletextfield",attrs:{text:""+t.settings.maxNewPerDay,"line-breaks-allowed":!1},on:{endEdit:t.updateMaxNewPerDay}}),t._v("   "),n("b",[t._v("New cards per day")])],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),t.nextReviewIn?n("p",[t._v("\n        Otherwise, your next review is in "+t._s(t.nextReviewIn)+".\n      ")]):t._e()])]:0===t.cards.length?[n("div",{staticClass:"padtb centertext"},[n("h3",[t._v("No cards yet!")]),t._v(" "),n("button",{on:{click:function(e){return t.$store.commit("setAppState","addCard")}}},[t._v("\n        + Add Cards\n      ")])])]:[n("div",{staticClass:"padtb centertext"},[n("h3",[t._v("Done for now!")]),t._v(" "),t.nextReviewIn?n("div",[t._v("\n        Your next review is in "+t._s(t.nextReviewIn)+".\n      ")]):t._e()])]:[n("div",{staticClass:"sub centertext padt-small"},[t.newCards.length>0?n("span",[n("b",[t._v(t._s(t.newCards.length))]),t._v(" new card"+t._s(1===t.newCards.length?"":"s")+"\n        "),t.dueCards.length>0?n("span",[t._v("and")]):t._e()]):t._e(),t._v(" "),t.dueCards.length>0?n("span",[n("b",[t._v(t._s(t.dueCards.length))]),t._v(" review"+t._s(1===t.dueCards.length?"":"s")+"\n      ")]):t._e(),t._v("\n      left.\n    ")]),t._v(" "),n("RemainingCardIndicator",{attrs:{"to-study":t.allStudyableCards,"started-with":t.startedWith}}),t._v(" "),n("SingleCardStudy",t._b({attrs:{reverse:t.settings.studyReverse},on:{done:t.finishedCurrentCard,postpone:t.postponeCurrentCard}},"SingleCardStudy",t.cardToStudy,!1))],t._v(" "),t.doneForDay&&t.cards.length>0?[n("ReviewGraph",{attrs:{cards:t.updatedCards,slots:7,"max-time":6048e5,title:"Upcoming reviews:"}})]:t._e()],2)}),[],!1,null,"49273830",null);e.default=component.exports;installComponents(component,{FloatingText:n(240).default,RemainingCardIndicator:n(254).default,SingleCardStudy:n(252).default,EditableTextField:n(237).default,ReviewGraph:n(239).default})},292:function(t,e,n){"use strict";n(263)},293:function(t,e,n){var r=n(134)(!1);r.push([t.i,".studyframe[data-v-49273830]{position:relative;opacity:.3;transition:all .5s}.studyframe.focus[data-v-49273830]{opacity:1}.padt-small[data-v-49273830],.padtb-small[data-v-49273830]{padding-top:15px}.padtb-small[data-v-49273830]{padding-bottom:15px}.padtb[data-v-49273830]{padding:100px 0}.progressbar[data-v-49273830]{position:relative;width:100%;height:0}.progressbar div[data-v-49273830]{background:#ccc;transition:.5s;height:5px}.singlesetting[data-v-49273830]{display:inline-block;border-radius:5px;padding:15px 20px;background:#eee}.singlesetting>*[data-v-49273830]{min-width:50px;display:inline-block}",""]),t.exports=r},296:function(t,e,n){"use strict";var r=n(5),o=n(4),d=n(66),c=n(30),l=n(38),h=n(12),f=n(7),v=n(186),m=n(140),w=n(327),y=n(328),x=n(82),k=n(329),_=[],T=o(_.sort),C=o(_.push),S=f((function(){_.sort(void 0)})),R=f((function(){_.sort(null)})),D=m("sort"),E=!f((function(){if(x)return x<70;if(!(w&&w>3)){if(y)return!0;if(k)return k<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)_.push({k:t+n,v:e})}for(_.sort((function(a,b){return b.v-a.v})),n=0;n<_.length;n++)t=_[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:S||!R||!D||!E},{sort:function(t){void 0!==t&&d(t);var e=c(this);if(E)return void 0===t?T(e):T(e,t);var n,r,o=[],f=l(e);for(r=0;r<f;r++)r in e&&C(o,e[r]);for(v(o,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:h(e)>h(n)?1:-1}}(t)),n=o.length,r=0;r<n;)e[r]=o[r++];for(;r<f;)delete e[r++];return e}})},327:function(t,e,n){var r=n(68).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},328:function(t,e,n){var r=n(68);t.exports=/MSIE|Trident/.test(r)},329:function(t,e,n){var r=n(68).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]}}]);