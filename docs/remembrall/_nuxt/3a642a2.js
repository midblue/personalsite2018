(window.webpackJsonp=window.webpackJsonp||[]).push([[8,14,15,16],{238:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(108);var r=n(137),c=n(81);function l(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||Object(r.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},240:function(t,e,n){"use strict";n.r(e);var o={props:{text:{},offset:{default:0},color:{default:"green"}},data:function(){return{textToFloat:null}},watch:{text:function(t){var e=this;this.textToFloat=null,this.$nextTick((function(){return e.textToFloat=e.text}))}}},r=(n(260),n(52)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.textToFloat?n("div",{staticClass:"floattext",style:{transform:"translateY("+t.offset+"px)",color:t.color}},[t._v("\n\t\t"+t._s(t.textToFloat)+"\n\t")]):t._e()}),[],!1,null,"d16cf874",null);e.default=component.exports},243:function(t,e,n){var content=n(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("62f984fd",content,!0,{sourceMap:!1})},250:function(t,e,n){"use strict";n.r(e);n(27),n(64),n(136),n(34),n(106);var o=n(323)({breaks:!0,html:!0,typographer:!0});var r={props:{text:{required:!1,default:"",type:String},lineBreaksAllowed:{required:!1,default:!0,type:Boolean},acceptBlank:{required:!1,default:!1,type:Boolean},disableEdits:{required:!1,default:!1,type:Boolean},placeholder:{required:!1,default:"",type:String},focus:{required:!1,default:!1,type:Boolean}},components:{},data:function(){return{displayText:this.text,isEditing:!1,metaDown:!1,shiftDown:!1,isPlaceholder:0===this.text.length}},model:{prop:"text",event:"changeText"},computed:{displayMarkdown:function(){return(this.displayText.length>0?this.displayText:this.text).split("\n").map((function(t){return o.render(t)||"<br />"})).join("").replace(/(<br \/>)*$/,"")}},watch:{text:function(t){this.isPlaceholder=0===t.length,this.isEditing||this.resetTextTo(t)},disableEdits:function(t){this.isEditing=!1,this.metaDown=!1,this.shiftDown=!1},focus:function(t){var e=this;t&&this.$nextTick((function(){e.startEdit()}))}},mounted:function(){window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp),this.isPlaceholder&&(this.displayText=this.placeholder),this.focus&&this.startEdit()},beforeDestroy:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp)},methods:{startEdit:function(){var t=this;this.isEditing||this.disableEdits||(this.isEditing=!0,this.isPlaceholder&&(this.displayText=""),this.isPlaceholder=!1,this.metaDown=!1,this.shiftDown=!1,this.$nextTick((function(){t.$el.focus(),t.$nextTick(t.selectText)})),this.$emit("startEdit",this.displayText))},resetTextTo:function(t){var e=this;this.displayText="",this.$el.innerHTML="",this.$nextTick((function(){e.displayText=t,t||!e.placeholder||e.isEditing||(e.displayText=e.placeholder,e.isPlaceholder=!0)}))},commitEdit:function(){window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.empty(),this.isEditing=!1,this.metaDown=!1,this.shiftDown=!1;var t=this.sanitize(this.$el.innerHTML);t.length>0?(this.displayText=t,this.$emit("endEdit",t)):this.resetTextTo(this.text)},keyDown:function(t){this.isEditing&&!this.disableEdits&&("Meta"===t.key&&(this.metaDown=!0),"Shift"===t.key&&(this.shiftDown=!0),"Enter"!==t.key||this.lineBreaksAllowed||this.commitEdit(),"Enter"===t.key&&this.metaDown&&this.commitEdit(),"Tab"===t.key&&this.shiftDown&&this.$emit("prev",t),"Tab"===t.key&&this.$emit("next",t),"Escape"===t.key&&(this.resetTextTo(this.text),this.$nextTick(this.commitEdit)))},keyUp:function(t){this.isEditing&&!this.disableEdits&&("Meta"===t.key&&(this.metaDown=!1),"Shift"===t.key&&(this.shiftDown=!1))},selectText:function(){if(document.body.createTextRange){var t=document.body.createTextRange();t.moveToElementText(this.$el),t.select()}else if(window.getSelection){var e=window.getSelection(),n=document.createRange();n.selectNodeContents(this.$el),e.removeAllRanges(),e.addRange(n)}},sanitize:function(text){return text.replace(/<div>/g,"\n").replace(/\n<br ?\/?>/g,"\n").replace(/<br ?\/?>/g,"\n").replace(/<[^>]*>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/^[\s\n\t]*/g,"")},paste:function(t){t.stopPropagation(),t.preventDefault();var e=t.clipboardData||window.clipboardData,n=this.sanitize(e.getData("Text"));if(/.(jpe?g|png|gif|webm|bmp)$/gi.test(n))return this.$emit("setImageURL",n);if(/^data:/gi.test(n))return alert("that's image data, not a link! make sure you get an image url that ends in .jpg, .png, .gif, etc.");var o,r,c,l,d,f=document.activeElement.innerText,h=(o=this.$el,r=function(){var t=window.getSelection();if(null!=t&&t.rangeCount>0){var e=t.getRangeAt(0);return{start:c(o,e.startContainer,e.startOffset),end:c(o,e.endContainer,e.endOffset)}}return null},c=function t(e,n,o){var r=0;if("#text"===n.nodeName)r+=o;else for(var i=0;i<o;i++)r+=l(n.childNodes[i]);return n!==e&&(r+=t(e,n.parentNode,d(n))),r},l=function t(e){var n=0;if("BR"===e.nodeName)n=1;else if("#text"===e.nodeName)n=e.nodeValue.length;else if(null!==e.childNodes)for(var i=0;i<e.childNodes.length;i++)n+=t(e.childNodes[i]);return n},d=function t(e){return null==e?-1:1+t(e.previousSibling)},r(document.activeElement)),m=f.substring(0,h.start)+n+f.substring(h.end);this.displayText=m,this.$emit("changeText",m),this.$nextTick(this.moveCursorToEnd)},moveCursorToEnd:function(){var t,e;document.createRange?((t=document.createRange()).selectNodeContents(this.$el),t.collapse(!1),(e=window.getSelection()).removeAllRanges(),e.addRange(t)):document.selection&&((t=document.body.createTextRange()).moveToElementText(this.$el),t.collapse(!1),t.select())}}},c=(n(302),n(52)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"editabletext",class:{editabletextediting:t.isEditing,placeholder:t.isPlaceholder},attrs:{contenteditable:t.isEditing,tabindex:"0"},domProps:{innerHTML:t._s(t.isEditing?t.displayText:t.displayMarkdown)},on:{focus:t.startEdit,click:t.startEdit,input:function(e){t.$emit("changeText",t.sanitize(t.$el.innerHTML))},blur:t.commitEdit,paste:t.paste}})}),[],!1,null,null,null);e.default=component.exports},251:function(t,e,n){"use strict";n.r(e);var o={props:{url:{required:!0}},data:function(){return{loaded:!1,hide:!1}},watch:{url:function(t){this.loaded=!1,this.loadImg(t)}},mounted:function(){this.loadImg(this.url)},methods:{loadImg:function(t){var e=this;this.hide=!1;var img=new Image;img.onload=function(){e.loaded=!0},img.onerror=function(){"loading"!==t&&(console.log("Failed to load card image:",t),e.hide=!0,e.$emit("failed"))},"loading"!==t&&(img.src=t)}}},r=(n(304),n(52)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hide?t._e():n("div",{key:t.url},[t.loaded?n("img",{attrs:{src:t.url}}):n("svg",{attrs:{width:"105",height:"105",viewBox:"0 0 105 105",xmlns:"http://www.w3.org/2000/svg",fill:"#333"}},[n("circle",{attrs:{cx:"12.5",cy:"12.5",r:"12.5"}},[n("animate",{attrs:{attributeName:"fill-opacity",begin:"0s",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),n("circle",{attrs:{cx:"12.5",cy:"52.5",r:"12.5","fill-opacity":"0.5"}},[n("animate",{attrs:{attributeName:"fill-opacity",begin:"100ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),n("circle",{attrs:{cx:"52.5",cy:"12.5",r:"12.5"}},[n("animate",{attrs:{attributeName:"fill-opacity",begin:"300ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),n("circle",{attrs:{cx:"52.5",cy:"52.5",r:"12.5"}},[n("animate",{attrs:{attributeName:"fill-opacity",begin:"600ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),n("circle",{attrs:{cx:"92.5",cy:"12.5",r:"12.5"}},[n("animate",{attrs:{attributeName:"fill-opacity",begin:"800ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),n("circle",{attrs:{cx:"92.5",cy:"52.5",r:"12.5"}},[n("animate",{attrs:{attributeName:"fill-opacity",begin:"400ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),n("circle",{attrs:{cx:"12.5",cy:"92.5",r:"12.5"}},[n("animate",{attrs:{attributeName:"fill-opacity",begin:"700ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),n("circle",{attrs:{cx:"52.5",cy:"92.5",r:"12.5"}},[n("animate",{attrs:{attributeName:"fill-opacity",begin:"500ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})]),t._v(" "),n("circle",{attrs:{cx:"92.5",cy:"92.5",r:"12.5"}},[n("animate",{attrs:{attributeName:"fill-opacity",begin:"200ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"}})])])])}),[],!1,null,"2f1aa15a",null);e.default=component.exports},260:function(t,e,n){"use strict";n(243)},261:function(t,e,n){var o=n(134)(!1);o.push([t.i,".floattext[data-v-d16cf874]{z-index:1000;width:100%;left:0;position:absolute;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;font-weight:600;-webkit-animation:pointsscroll-data-v-d16cf874 1.5s ease-out normal forwards;animation:pointsscroll-data-v-d16cf874 1.5s ease-out normal forwards}@-webkit-keyframes pointsscroll-data-v-d16cf874{0%{opacity:0;bottom:0}50%{opacity:1}to{opacity:0;bottom:100px}}@keyframes pointsscroll-data-v-d16cf874{0%{opacity:0;bottom:0}50%{opacity:1}to{opacity:0;bottom:100px}}",""]),t.exports=o},262:function(t,e,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("1593ca32",content,!0,{sourceMap:!1})},273:function(t,e,n){"use strict";n.r(e);n(79),n(80),n(182),n(15),n(63),n(27),n(106);var o=n(240),r=n(250),c=n(251),l=n(180),d=n(23),f=n(238),h=(n(136),n(53),n(65),n(138),{components:{FloatingText:o.default,EditableTextFieldMarkdown:r.default,ImageLoader:c.default},props:{},data:function(){return{front:"",back:"",imageURL:"",metaDown:!1,floatText:"",isDuplicate:!1,setFocus:"front",isFirefox:navigator.userAgent.toLowerCase().includes("firefox"),loadingAutocomplete:!1}},computed:{languageTools:function(){return this.$store.state.setList[this.$store.state.currentSetId].settings.languageTools},cards:function(){return this.$store.state.setList[this.$store.state.currentSetId].cards}},watch:{front:function(t){if(t.length<2)return this.isDuplicate=!1;this.isDuplicate=this.cards.find((function(e){return e.front.toLowerCase()===t.toLowerCase()}))}},mounted:function(){window.addEventListener("keydown",this.keyDown),window.addEventListener("keyup",this.keyUp),this.$store.commit("setAppState","addCard")},beforeDestroy:function(){window.removeEventListener("keydown",this.keyDown),window.removeEventListener("keyup",this.keyUp),this.$store.commit("setIsEditingText",!1)},methods:{newCard:function(){var t=this;(this.front||this.imageURL)&&this.back&&(this.$store.commit("addCard",{id:Date.now(),front:this.front,back:this.back,imageURL:this.imageURL,nextReview:0,set:parseInt(this.$store.state.currentSetId)}),this.floatText="Card added.",setTimeout((function(){return t.floatText=""}),1500),this.$nextTick((function(){t.front="",t.back="",t.imageURL="",t.isDuplicate=!1,t.setFocus=null,t.$nextTick((function(){return t.setFocus="front"}))})))},keyDown:function(t){"Control"===t.key&&(this.metaDown=!0),"Meta"===t.key&&(this.metaDown=!0),"Enter"===t.key&&this.metaDown&&this.$nextTick(this.newCard),"i"===t.key&&this.metaDown&&(t.preventDefault(),t.stopPropagation(),this.autoSetImage()),"m"===t.key&&this.metaDown&&(t.preventDefault(),t.stopPropagation(),this.autoComplete())},keyUp:function(t){"Control"===t.key&&(this.metaDown=!1),"Meta"===t.key&&(this.metaDown=!1)},focus:function(){this.$store.commit("setIsEditingText",!0)},tab:function(t){var e=this;t.preventDefault(),this.setFocus=null,this.$nextTick((function(){return e.setFocus="back"}))},shiftTab:function(t){var e=this;t.preventDefault(),this.setFocus=null,this.$nextTick((function(){return e.setFocus="front"}))},setImageURL:function(t){this.imageURL=t},autoSetImage:function(){var t=this;Object(l.getRandomImage)(this.front||this.back).then((function(image){image&&(t.imageURL=image)}))},autoComplete:function(){var t=this;this.loadingAutocomplete=!0;var e=!!this.front,n=(e?this.front:this.back).split("\n")[0];if(!n)return this.loadingAutocomplete=!1,console.log("no basis text");(function(t){var e=t.language,n=t.textToBaseOn,o=t.basedOnFrontText,r=t.front,c=t.back;return"ja"===e?new Promise((function(t){var e=/[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\u3400-\u4DBF]/.test(n),l=/[\u4E00-\u9FAF\u3400-\u4DBF]/.test(n);try{fetch("https://us-central1-general-prototype-project.cloudfunctions.net/cors-proxy?url=https://jisho.org/api/v1/search/words?keyword=".concat(n)).then((function(t){return t.json()})).then((function(data){return data.data[0]})).then((function(n){n||(o&&t({front:"",back:"Couldn't find a definition for that!"}),t({back:"",front:"Couldn't find a definition for that!"}));var d=n.is_common,h=r,m=c,v=!1,x=n.senses.slice(0,2).reduce((function(t,e){return[].concat(Object(f.a)(t),Object(f.a)(e.english_definitions.slice(0,2)))}),[]).join(", ");o?e?(l&&n.japanese[0].reading?m=n.japanese[0].reading:!l&&n.japanese[0].word&&(m=n.japanese[0].word),m=m+"\n"+x):e||(h=x,m=(n.japanese[0].word?n.japanese[0].word+"\n":"")+(n.japanese[0].reading?n.japanese[0].reading:""),v=!0):o||(e?(h=x,m=(n.japanese[0].word?n.japanese[0].word+"\n":"")+(n.japanese[0].reading?n.japanese[0].reading:""),v=!0):e||(h=n.japanese[0].word?n.japanese[0].word:n.japanese[0].reading?n.japanese[0].reading:"Whoops, couldn't find that one.",m=(n.japanese[0].reading?n.japanese[0].reading+"\n":"")+x)),t({front:h,back:m+=d?"":"\n_(uncommon word)_",shouldAutoSetImage:v})}))}catch(e){t({front:o?n:"Error in fetching data!",back:o?"Error in fetching data!":n})}})):"es"===e?new Promise((function(t){try{fetch("https://us-central1-general-prototype-project.cloudfunctions.net/cors-proxy?url=https://www.spanishdict.com/translate/".concat(n)).then((function(t){return console.log(t.status),t.text()})).then((function(e){var n=/<div id="headword-(en|es)" [^>]*><h1 [^<]*>([^<]*)<\/h1><\/div>.*<div .*quickdef1[^>]*><a href="\/translate[^>]*>([^<]*)/g.exec(e);if(!n)return o&&t({front:"",back:"Couldn't find a definition for that!"}),void t({back:"",front:"Couldn't find a definition for that!"});var r=Object(d.a)(n,4),c=(r[0],r[1]),l=r[2],f=r[3];console.log(c,l,f),t({front:o?l:f,back:o?f:l,shouldAutoSetImage:o&&"en"===c||!o&&"es"===c})}))}catch(e){t({front:o?n:"Error in fetching data!",back:o?"Error in fetching data!":n})}})):void resolve({front:o?n:"That language isn't supported yet!",back:o?"That language isn't supported yet!":n})})({front:this.front,back:this.back,basedOnFrontText:e,textToBaseOn:n,language:this.languageTools}).then((function(e){t.front=e.front||t.front,t.back=e.back||t.back,t.imageURL="",e.shouldAutoSetImage&&t.autoSetImage(),t.loadingAutocomplete=!1}))}}}),m=(n(289),n(52)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cardcreator",class:{loading:t.loadingAutocomplete}},[n("div",{staticClass:"cardframe"},[n("EditableTextFieldMarkdown",{staticClass:"textfield front",class:{duplicate:t.isDuplicate},attrs:{focus:"front"===t.setFocus,placeholder:"Hint"},on:{startEdit:t.focus,next:t.tab,setImageURL:t.setImageURL},model:{value:t.front,callback:function(e){t.front=e},expression:"front"}}),t._v(" "),t.imageURL?n("div",{staticClass:"imagecontainer",on:{click:function(e){t.imageURL=""}}},[n("ImageLoader",{attrs:{url:t.imageURL}})],1):t._e(),t._v(" "),n("EditableTextFieldMarkdown",{staticClass:"textfield back",attrs:{focus:"back"===t.setFocus,placeholder:"Answer"},on:{startEdit:t.focus,prev:t.shiftTab,setImageURL:t.setImageURL},model:{value:t.back,callback:function(e){t.back=e},expression:"back"}})],1),t._v(" "),n("FloatingText",{attrs:{text:t.floatText,offset:"-30"}}),t._v(" "),n("div",{staticClass:"buttonlist"},[n("button",{on:{click:t.newCard}},[n("div",[t._v("Add Card")]),t._v(" "),n("kbd",{staticClass:"keyicon"},[t._v("⌘-Enter")])])]),t._v(" "),t.front||t.back?n("center",[["ja","es"].includes(t.languageTools)?[n("button",{on:{click:t.autoComplete}},[n("div",[t._v("Auto-Complete Card")]),t._v(" "),n("kbd",{staticClass:"keyicon"},[t._v(t._s(t.isFirefox?"ctrl":"⌘")+"-m")])]),t._v(" "),n("br"),t._v(" "),n("br")]:t._e(),t._v(" "),n("span",{staticClass:"sub"},[t._v("Paste an image link to add your own image.")]),t._v(" "),n("span",{staticClass:"sub"},[t._v("Or,")]),t._v(" "),n("br"),t._v(" "),n("button",{on:{click:t.autoSetImage}},[n("div",[t._v("Auto-Set Image")]),t._v(" "),n("kbd",{staticClass:"keyicon"},[t._v(t._s(t.isFirefox?"ctrl":"⌘")+"-i")])]),t._v(" "),n("br"),t._v(" "),t.imageURL?n("div",{staticClass:"sub",staticStyle:{position:"relative",top:"5px"}},[t._v("\n      (click image to remove it)\n    ")]):t._e(),t._v(" "),n("br"),t._v(" "),n("br")],2):t._e()],1)}),[],!1,null,"677d3eb2",null);e.default=component.exports;installComponents(component,{EditableTextFieldMarkdown:n(250).default,ImageLoader:n(251).default,FloatingText:n(240).default})},278:function(t,e,n){var content=n(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("130a7ad1",content,!0,{sourceMap:!1})},279:function(t,e,n){var content=n(305);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(135).default)("2a3b4a7c",content,!0,{sourceMap:!1})},289:function(t,e,n){"use strict";n(262)},290:function(t,e,n){var o=n(134)(!1);o.push([t.i,'.cardcreator[data-v-677d3eb2]{position:relative;margin:0 auto;opacity:1;transition:all .5s}.cardcreator.loading[data-v-677d3eb2]{pointer-events:none;opacity:.3}.cardcreator>*[data-v-677d3eb2]{display:block}.cardcreator .cardframe[data-v-677d3eb2]{position:relative;overflow:hidden;border-radius:10px}.cardcreator .imagecontainer[data-v-677d3eb2]{background:#f8f8f8;text-align:center}.cardcreator .imagecontainer>*[data-v-677d3eb2]{margin:0 auto;max-width:80%;max-height:250px}.cardcreator .textfield[data-v-677d3eb2]{background:#f8f8f8;padding:50px 20px;font-size:1.5rem;text-align:center;transition:background .2s;outline:0}.cardcreator .textfield.editabletextediting[data-v-677d3eb2]{background:rgba(0,0,0,.05)}.cardcreator .textfield[data-v-677d3eb2]:after{position:absolute;top:10px;right:-10px;opacity:0;content:"";transition:all .4s;font-weight:600;font-size:.5em}.cardcreator .textfield[data-v-677d3eb2]:hover:not(.editabletextediting){position:relative;background:rgba(0,0,0,.05)}.cardcreator .textfield[data-v-677d3eb2]:hover:not(.editabletextediting):after{right:10px;content:"Click to Edit";opacity:1;color:rgba(0,0,0,.2)}.cardcreator .textfield.duplicate[data-v-677d3eb2]:after{right:10px;content:"Duplicate card!"!important;color:#f52!important;opacity:1}.cardcreator .back[data-v-677d3eb2]{border-top:1px solid #ddd;transition:.2s}.cardcreator .buttonlist[data-v-677d3eb2]{display:flex;width:100%;margin-top:20px;margin-bottom:20px}',""]),t.exports=o},302:function(t,e,n){"use strict";n(278)},303:function(t,e,n){var o=n(134)(!1);o.push([t.i,'.editabletext.editabletextediting:empty:before{content:"\ufeff"}.editabletext{cursor:pointer;white-space:normal}.editabletext.placeholder{color:rgba(0,0,0,.2)}.editabletext.editabletextediting{cursor:text;white-space:pre-wrap}.editabletext div,.editabletext h1,.editabletext h2,.editabletext h3,.editabletext h4,.editabletext ol,.editabletext p,.editabletext ul{padding:0;margin:0}.editabletext ol,.editabletext ul{padding:0 10%;text-align:left}',""]),t.exports=o},304:function(t,e,n){"use strict";n(279)},305:function(t,e,n){var o=n(134)(!1);o.push([t.i,"svg[data-v-2f1aa15a]{opacity:.3;width:30px!important}img[data-v-2f1aa15a]{margin:0 auto;max-width:90%;max-height:250px;padding-bottom:10px;transition:all .5s}@media(max-width:768px){img[data-v-2f1aa15a]{max-height:200px;padding-bottom:5px}}",""]),t.exports=o}}]);