(window.webpackJsonp=window.webpackJsonp||[]).push([[25,7,26],{244:function(t,e,n){"use strict";n.r(e);n(180);var r={props:{text:{default:""},language:{required:!0}},data:function(){return{speaker:null}},computed:{settings:function(){return this.$store.state.setList[this.$store.state.currentSetId].settings}},watch:{language:function(t){this.speaker.lang=t},text:function(t){t&&this.speakWord()}},methods:{spawnSpeaker:function(){window.speechSynthesis&&(this.speaker=new SpeechSynthesisUtterance,this.speaker.lang=this.language,this.speaker.volume=.4,this.speaker.rate=this.settings.speechSpeed||.8)},speakWord:function(){this.spawnSpeaker(),this.speaker&&(this.speaker.text=this.text,window.speechSynthesis.speak(this.speaker))}}},o=n(52),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports},281:function(t,e,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("1b23ee7e",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";n.r(e);n(27),n(64),n(67),n(46),n(15),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(47),n(65),n(34),n(36),n(53);var r=n(138),o={props:{text:{default:""},secondaryText:{default:""}},data:function(){return{kanjiList:[],examplesToShow:null}},computed:{settings:function(){return this.$store.state.setList[this.$store.state.currentSetId].settings},searchString:function(){return this.text.replace(/\n.*/g,"")}},watch:{text:function(){this.getKanjiData()}},mounted:function(){this.getKanjiData()},methods:{getKanjiData:function(){var t=this,e=Array.from(new Set("".concat(this.text.replace(/[^\u4e00-\u9faf]/g,"")).concat(this.secondaryText.replace(/[^\u4e00-\u9faf]/g,""))));this.kanjiList=e.map((function(t){return{character:t,meaning:"loading..."}})),Array.from(e).forEach((function(e,n){fetch("https://kanjialive-api.p.rapidapi.com/api/public/kanji/".concat(e),{headers:{"X-RapidAPI-Key":r.rapidAPI}}).then((function(t){return t.json()})).then((function(r){if(r.error||r.message)return t.$set(t.kanjiList,n,{character:e,message:r.error||r.message});t.$set(t.kanjiList,n,{character:r.kanji.character,meaning:r.kanji.meaning.english,examples:r.examples.slice(0,3).map((function(t){return{japanese:t.japanese,meaning:t.meaning.english}}))})}))}))}}},c=(n(308),n(52)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.kanjiList?n("div",[t._l(t.kanjiList,(function(e){return e.meaning?n("div",{key:e.character,staticClass:"kanji sub",on:{mouseover:function(n){t.examplesToShow=e.examples},mouseout:function(e){t.examplesToShow=null}}},[t._v("\n    "+t._s(e.character)+" : "+t._s(e.message||e.meaning)+"\n  ")]):t._e()})),t._v(" "),t.examplesToShow&&t.examplesToShow.length>0?n("div",{staticClass:"examplespopup"},t._l(t.examplesToShow,(function(e,r){return n("div",{key:r,staticClass:"sub"},[t._v("\n      "+t._s(e.japanese)+": "+t._s(e.meaning)+"\n    ")])})),0):t._e()],2):t._e()}),[],!1,null,"f650f436",null);e.default=component.exports},308:function(t,e,n){"use strict";n(281)},309:function(t,e,n){var r=n(134)(!1);r.push([t.i,".examplespopup[data-v-f650f436]{position:absolute;background:#f8f8f8;padding:20px;top:0;left:0;width:100%;pointer-events:none}",""]),t.exports=r},310:function(t,e,n){var content=n(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("3b4060d6",content,!0,{sourceMap:!1})},347:function(t,e,n){"use strict";n(310)},348:function(t,e,n){var r=n(134)(!1);r.push([t.i,".extras[data-v-9e16d8f4]{padding-bottom:20px}.fakelink[data-v-9e16d8f4]{text-decoration:underline;cursor:pointer}",""]),t.exports=r},355:function(t,e,n){"use strict";n.r(e);n(27),n(64),n(65),n(63);var r=n(244),o=n(298),c=n(180),l={components:{AutoSpeaker:r.default,StudyExtrasJA:o.default},props:{text:{default:""},secondaryText:{default:""},autoSpeak:{default:!1},shown:{default:!1}},data:function(){return{textToSpeak:""}},computed:{settings:function(){return this.$store.state.setList[this.$store.state.currentSetId].settings},searchString:function(){return this.text.replace(/\n.*/g,"")},searchWord:function(){return Object(c.getKeyWord)(this.searchString)},pronunciationLink:function(){return"https://forvo.com/word/".concat(this.searchWord,"/#").concat(this.settings.languageTools)},translationLink:function(){return"https://translate.google.com/#".concat(this.settings.languageTools,"/en/").concat(this.searchString)},definitionLink:function(){if("es"===this.settings.languageTools)return"https://www.spanishdict.com/translate/".concat(this.searchString)}},watch:{shown:function(t){t&&this.settings.autoSpeak&&this.speakWord()}},mounted:function(){},methods:{speakWord:function(){var t=this;this.textToSpeak=this.searchString,setTimeout((function(){return t.textToSpeak=""}),300)}}},f=(n(347),n(52)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.text?n("div",{staticClass:"extras"},[t.settings.languageTools?n("AutoSpeaker",{attrs:{text:t.textToSpeak,language:t.settings.languageTools}}):t._e(),t._v(" "),"ja"===t.settings.languageTools?n("StudyExtrasJA",{attrs:{text:t.text,"secondary-text":t.secondaryText}}):t._e(),t._v(" "),n("a",{staticClass:"fakelink sub",on:{click:t.speakWord}},[t._v("Speak it")]),n("span",[t._v(" ・ ")]),t._v(" "),n("a",{staticClass:"sub",attrs:{target:"_blank",href:t.pronunciationLink}},[t._v("Native")]),n("span",[t._v(" ・ ")]),t._v(" "),n("a",{staticClass:"sub",attrs:{target:"_blank",href:t.translationLink}},[t._v("Translation")]),t._v(" "),t.definitionLink?[n("span",[t._v(" ・ ")]),t._v(" "),n("a",{staticClass:"sub",attrs:{target:"_blank",href:t.definitionLink}},[t._v("Definition")])]:t._e()],2):t._e()}),[],!1,null,"9e16d8f4",null);e.default=component.exports;installComponents(component,{AutoSpeaker:n(244).default,StudyExtrasJA:n(298).default})}}]);