(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{329:function(e,t,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("463ba5e5",content,!0,{sourceMap:!1})},368:function(e,t,n){"use strict";n(329)},369:function(e,t,n){var o=n(14)(!1);o.push([e.i,".feedback[data-v-47a378f5]{position:fixed;top:calc(.5rem + 94px);right:.5rem;z-index:2002;pointer-events:none}.feedback>*[data-v-47a378f5]{pointer-events:auto}.feedback .minibutton[data-v-47a378f5]{width:40px;height:40px;background:rgba(50,50,50,.7);color:#fff;font-weight:700;box-shadow:0 0 10px rgba(0,0,0,.1);display:flex;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;align-items:center;justify-content:center;transition:background .2s}.feedback .minibutton *[data-v-47a378f5]{max-width:50%;max-height:50%;fill:#fff}@media only screen and (min-width:768px){.feedback .minibutton[data-v-47a378f5]:hover{background:#323232}}.feedback .minibutton.open[data-v-47a378f5],.feedback .panel[data-v-47a378f5]{background:#323232}.feedback .panel[data-v-47a378f5]{position:absolute;top:0;right:120%;width:400px;max-width:80vw;padding:1.5rem 2rem;color:#fff}@media(max-width:768px){.feedback .panel[data-v-47a378f5]{position:fixed;top:.5rem;right:52px}}.feedback h3[data-v-47a378f5]{margin:0;text-transform:uppercase;text-align:center;line-height:1.3}.feedback .happiness[data-v-47a378f5]{display:flex;height:4em;align-items:stretch;justify-content:stretch;margin:1em 0}@media(max-width:768px){.feedback .happiness[data-v-47a378f5]{height:3em;margin:.5em 0}}.feedback .happiness .option[data-v-47a378f5]{cursor:pointer;font-size:3rem;flex:1;height:100%;display:flex;align-items:center;justify-content:center;transition:opacity .2s;opacity:.8}.feedback .happiness .option.selected[data-v-47a378f5],.feedback .happiness .option[data-v-47a378f5]:hover{opacity:1}.feedback .happiness .option[data-v-47a378f5]:not(.selected){opacity:.2}.feedback textarea[data-v-47a378f5]{height:5em;width:100%;resize:none}@media(max-width:768px){.feedback textarea[data-v-47a378f5]{height:3em}}.feedback .button[data-v-47a378f5]{width:100%;margin-top:1em}@media(max-width:768px){.feedback .button[data-v-47a378f5]{margin-top:.5em}}",""]),e.exports=o},384:function(e,t,n){"use strict";n.r(t);n(8),n(7),n(9),n(10),n(11);var o=n(3),c=(n(38),n(5));function r(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={props:{},data:function(){return{on:!0,panelOpen:!1,thanks:!1,selectedHappiness:void 0,inputComment:""}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)(["showWorld","sentFeedback"])),watch:{panelOpen:function(){this.panelOpen?(window.addEventListener("click",this.checkClose),window.addEventListener("touchstart",this.checkClose),window.addEventListener("mousewheel",this.checkClose),window.addEventListener("DOMMouseScroll",this.checkClose)):(window.removeEventListener("click",this.checkClose),window.removeEventListener("touchstart",this.checkClose),window.removeEventListener("mousewheel",this.checkClose),window.removeEventListener("DOMMouseScroll",this.checkClose))}},created:function(){},mounted:function(){},beforeDestroy:function(){window.removeEventListener("click",this.checkClose),window.removeEventListener("touchstart",this.checkClose),window.removeEventListener("mousewheel",this.checkClose),window.removeEventListener("DOMMouseScroll",this.checkClose)},methods:{submit:function(){(this.selectedHappiness||this.inputComment)&&(fetch("/feedback/".concat(this.selectedHappiness||"0","/").concat(encodeURIComponent(this.inputComment||"(no comment)"))),this.selectedHappiness=void 0,this.inputComment="",this.thanks=!0,this.$store.commit("set",{sentFeedback:!0}))},happiness:function(e){this.selectedHappiness=e},checkClose:function(e){var path=[];if(e.path)path=e.path;else for(var t=e.target;null!==t.parentNode;)path.push(t),t=t.parentNode;path.find((function(e){return e.classList&&e.classList.contains("feedback")}))||(this.panelOpen=!1,this.thanks&&(this.on=!1))}}},d=l,h=(n(368),n(4)),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"medfade"}},[e.on?n("div",{staticClass:"feedback"},[n("div",{staticClass:"minibutton",class:{open:e.panelOpen},on:{click:function(t){e.panelOpen=!e.panelOpen}}},[n("svg",{attrs:{width:"96px",height:"96px",viewBox:"0 0 96 96",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{id:"Group",transform:"translate(0.500000, 0.500000)",fill:"#000000","fill-rule":"nonzero"}},[n("path",{attrs:{d:"M64.4,54.3 C62,53.1 59.2,54.1 58,56.5 C56,60.5 52,63 47.5,63 C43,63 39,60.5 37,56.5 C35.8,54.1 33,53.2 30.6,54.3 C28.2,55.5 27.3,58.3 28.4,60.7 C32,67.9 39.4,72.5 47.5,72.5 C55.6,72.5 63,67.8 66.6,60.6 C67.7,58.3 66.7,55.4 64.4,54.3 Z",id:"Path"}}),e._v(" "),n("path",{attrs:{d:"M47.5,0 C21.3,0 0,21.3 0,47.5 C0,73.7 21.3,95 47.5,95 C73.7,95 95,73.7 95,47.5 C95,21.3 73.7,0 47.5,0 Z M47.5,85.5 C26.6,85.5 9.5,68.5 9.5,47.5 C9.5,26.5 26.5,9.5 47.5,9.5 C68.4,9.5 85.5,26.5 85.5,47.5 C85.5,68.5 68.4,85.5 47.5,85.5 Z",id:"Shape"}}),e._v(" "),n("circle",{attrs:{id:"Oval",cx:"32.6",cy:"36.6",r:"7.8"}}),e._v(" "),n("circle",{attrs:{id:"Oval",cx:"62.4",cy:"36.6",r:"7.8"}})])])])]),e._v(" "),n("transition",{attrs:{name:"fade"}},[e.panelOpen?n("div",{staticClass:"panel"},[e.sentFeedback||e.thanks?[n("h3",["es"===e.$i18n.locale?[e._v("\n              ¡Entendido! Gracias por tus comentarios.\n            ")]:"ja"===e.$i18n.locale?[e._v("\n              登録しました！ご意見ありがとうございました。\n            ")]:[e._v("\n              Got it! Thanks for your feedback.\n            ")]],2)]:[n("h3",["es"===e.$i18n.locale?[e._v("\n              ¿Cómo ha sido tu experiencia en Ultramundos?\n            ")]:"ja"===e.$i18n.locale?[e._v("\n               オーバーワールドはいかがでしたか？\n            ")]:[e._v("\n              How are you enjoying Overworld?\n            ")]],2),e._v(" "),n("div",{staticClass:"happiness"},[n("div",{staticClass:"option",class:{selected:5===e.selectedHappiness||!e.selectedHappiness},on:{click:function(t){return e.happiness(5)}}},[e._v("\n               😄\n            ")]),e._v(" "),n("div",{staticClass:"option",class:{selected:4===e.selectedHappiness||!e.selectedHappiness},on:{click:function(t){return e.happiness(4)}}},[e._v("\n               🙂\n            ")]),e._v(" "),n("div",{staticClass:"option",class:{selected:3===e.selectedHappiness||!e.selectedHappiness},on:{click:function(t){return e.happiness(3)}}},[e._v("\n               😐\n            ")]),e._v(" "),n("div",{staticClass:"option",class:{selected:2===e.selectedHappiness||!e.selectedHappiness},on:{click:function(t){return e.happiness(2)}}},[e._v("\n               🙁\n            ")]),e._v(" "),n("div",{staticClass:"option",class:{selected:1===e.selectedHappiness||!e.selectedHappiness},on:{click:function(t){return e.happiness(1)}}},[e._v("\n               😖\n            ")])]),e._v(" "),n("div",{staticClass:"sub"},["es"===e.$i18n.locale?[e._v("\n              Deja un comentario (opcional)\n            ")]:"ja"===e.$i18n.locale?[e._v("\n              コメント（任意）\n            ")]:[e._v("\n              Leave a comment (optional)\n            ")]],2),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.inputComment,expression:"inputComment"}],attrs:{placeholder:"es"===e.$i18n.locale?"Escriba aquí...":"ja"===this.$i18n.locale?"記入する":"Type here..."},domProps:{value:e.inputComment},on:{input:function(t){t.target.composing||(e.inputComment=t.target.value)}}}),e._v(" "),n("div",{staticClass:"button",on:{click:e.submit}},["es"===e.$i18n.locale?[e._v("\n              Enviar\n            ")]:"ja"===e.$i18n.locale?[e._v("\n              送信\n            ")]:[e._v("Submit")]],2)]],2):e._e()])],1):e._e()])}),[],!1,null,"47a378f5",null);t.default=component.exports}}]);