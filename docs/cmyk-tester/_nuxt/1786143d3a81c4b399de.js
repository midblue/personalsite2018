(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{157:function(t,e,n){var content=n(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("ed868df0",content,!0,{sourceMap:!1})},158:function(t,e,n){var content=n(185);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("407dc9bc",content,!0,{sourceMap:!1})},161:function(t,e,n){var content=n(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("126866ef",content,!0,{sourceMap:!1})},162:function(t,e,n){var content=n(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("0f83fee2",content,!0,{sourceMap:!1})},163:function(t,e,n){var content=n(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("310cdf88",content,!0,{sourceMap:!1})},164:function(t,e,n){var content=n(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("4f240213",content,!0,{sourceMap:!1})},165:function(t,e,n){var content=n(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("5ca9b03c",content,!0,{sourceMap:!1})},166:function(t,e,n){var content=n(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("4faa0d98",content,!0,{sourceMap:!1})},167:function(t,e,n){var content=n(215);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("2e107364",content,!0,{sourceMap:!1})},168:function(t,e,n){n(21),n(12),n(45);var o=n(175);n(32),n(20);var r,l,c=n(180),d=n(181),f=[],h=[];function m(t){return v.apply(this,arguments)}function v(){return(v=c(regeneratorRuntime.mark((function t(e){var n,data,o=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=o.length>1&&void 0!==o[1]?o[1]:null,!r||e.substring(1e3,1400)!==r.name||n!==l){t.next=6;break}return console.log("using preloaded file."),t.next=5,r.data;case 5:return t.abrupt("return",t.sent);case 6:return t.next=8,d.read(e).then((function(image){return n?image.scaleToFit(n,n):image})).catch((function(t){console.log(t)}));case 8:return data=t.sent,r={name:e.substring(1e3,1400),data:data},console.log("loaded and resized image"),t.abrupt("return",data);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){return(x=c(regeneratorRuntime.mark((function t(e,n,d,v){var x,_,k,C,$,O;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(_ in console.log("target colors:",n),x=[],n)x.push(n[_]!==f[_]||d[_]!==h[_]||e.substring(1e3,1400)!==r.name||v!==l);return console.log("generating",x.reduce((function(t,e){return t+(e?1:0)}),0),"layers at",v+"px"),console.time("time to create image"),t.next=7,m(e,v);case 7:return k=t.sent,C=k.bitmap.data,$=x.map(function(){var t=c(regeneratorRuntime.mark((function t(e,i){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",!1);case 2:return k.bitmap.data=o(C),r=y(n[i]),t.abrupt("return",k.scan(0,0,k.bitmap.width,k.bitmap.height,(function(t,e,n){var o=w(this.bitmap.data[n],this.bitmap.data[n+1],this.bitmap.data[n+2]),l=parseInt(255*o[i]*d[i]);this.bitmap.data[n]=r[0],this.bitmap.data[n+1]=r[1],this.bitmap.data[n+2]=r[2],this.bitmap.data[n+3]=l})).getBase64Async("image/png"));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),k.bitmap.data=o(C),t.next=13,Promise.all($);case 13:return O=t.sent,console.timeEnd("time to create image"),f=n,h=d,l=v,t.abrupt("return",O);case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t,g,b){var e=0,n=0,o=0;if(0==t&&0==g&&0==b)return 1,[0,0,0,1];e=1-t/255,n=1-g/255,o=1-b/255;var r=Math.min(e,Math.min(n,o));return[e=(e-r)/(1-r),n=(n-r)/(1-r),o=(o-r)/(1-r),r]}function y(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}t.exports={split:function(t,e,n,o){return x.apply(this,arguments)},preload:m}},172:function(t,e,n){n(108);var o,r=n(188);function l(){if("object"===("undefined"==typeof localStorage?"undefined":r(localStorage)))try{localStorage.setItem("localStorage",1),localStorage.removeItem("localStorage"),o=!0}catch(t){o=!1,console.log("LocalStorage is unavailable. Reverting to Cookies as a fallback.")}else o=!1}function c(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=new Date;o.setTime(o.getTime()+31536e6*(n?-1:1));var r="expires="+o.toUTCString();document.cookie=t+"="+e+";"+r+";path=/"}t.exports={set:function(t,e){void 0===o&&l(),o?localStorage.setItem(t,e):c(t,e)},remove:function(t){void 0===o&&l(),o?localStorage.removeItem(t):c(t,"",!0)},get:function(t){return void 0===o&&l(),o?localStorage.getItem(t):function(t){for(var e=t+"=",n=decodeURIComponent(document.cookie).split(";"),i=0;i<n.length;i++){for(var o=n[i];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return""}(t)}}},182:function(t,e,n){"use strict";var o=n(157);n.n(o).a},183:function(t,e,n){(e=n(42)(!1)).push([t.i,"input[type=file][data-v-286025e1]{display:none}label[data-v-286025e1]{margin:0}.passthrough[data-v-286025e1]{position:relative}",""]),t.exports=e},184:function(t,e,n){"use strict";var o=n(158);n.n(o).a},185:function(t,e,n){(e=n(42)(!1)).push([t.i,".intro[data-v-0d22397c]{position:fixed;z-index:950;top:0;left:0;bottom:0;right:0;margin:0;background:#222;color:#fff}.dropzone[data-v-0d22397c],.intro[data-v-0d22397c]{display:flex;flex-direction:column;align-items:center;justify-content:center}.dropzone[data-v-0d22397c]{width:60vw;height:40vh;border:2px dashed hsla(0,0%,100%,.2);background:rgba(0,0,0,.2);margin-bottom:60px}h1[data-v-0d22397c]{font-size:3em;font-weight:800;margin-bottom:30px}div[data-v-0d22397c]{margin:15px 0}button[data-v-0d22397c]{max-width:200px}",""]),t.exports=e},196:function(t,e,n){"use strict";var o=n(161);n.n(o).a},197:function(t,e,n){(e=n(42)(!1)).push([t.i,".slider{display:flex;align-items:center}.slider div{margin-left:10px;font-size:1em;font-weight:700;position:relative;top:-1px}input[type=range]{flex:1;-webkit-appearance:none;margin:15px 0;width:100%}input[type=range]:focus{outline:none}input[type=range]::-webkit-slider-runnable-track{width:100%;height:8.4px;cursor:pointer;background:inherit!important}input[type=range]::-webkit-slider-thumb{border:2px solid rgba(0,0,0,.7);height:20px;width:20px;border-radius:5px;background:transparent;cursor:pointer;-webkit-appearance:none;margin-top:-6px}input[type=range]::-moz-range-track{width:100%;height:8.4px;cursor:pointer;background:inherit!important}input[type=range]::-moz-range-thumb{border:2px solid rgba(0,0,0,.7);height:20px;width:20px;border-radius:5px;background:transparent;cursor:pointer}",""]),t.exports=e},198:function(t,e,n){"use strict";var o=n(162);n.n(o).a},199:function(t,e,n){(e=n(42)(!1)).push([t.i,'.download{display:flex;align-items:center;justify-content:center}button{margin:0;width:100%}.loader{display:inline-block}.loader,.loader:after,.loader:before{border-radius:50%;width:1em;height:1em;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation:load7 1.8s ease-in-out infinite;animation:load7 1.8s ease-in-out infinite}.loader{color:#fff;font-size:10px;margin:0 25px 0 0;position:relative;top:-2.5em;text-indent:-9999em;transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.loader:after,.loader:before{content:"";position:absolute;top:0}.loader:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader:after{left:1.5em}@-webkit-keyframes load7{0%,80%,to{box-shadow:0 2.5em 0 -1.3em}40%{box-shadow:0 2.5em 0 0}}@keyframes load7{0%,80%,to{box-shadow:0 2.5em 0 -1.3em}40%{box-shadow:0 2.5em 0 0}}',""]),t.exports=e},205:function(t,e){t.exports=[[0,0,0,100,"Black"],[24,94,1,21,"Burgundy"],[99,22,0,1,"Blue"],[73,0,81,0,"Green"],[87,59,0,0,"Medium Blue"],[0,67,60,5,"Bright Red"],[100,65,1,17,"Federal Blue"],[61,73,0,0,"Purple"],[100,1,40,7,"Teal"],[6,26,97,15,"Flat Gold"],[96,7,80,33,"Hunter Green"],[68,0,79,16,"Flourescent Green"],[0,60,63,0,"Red"],[18,62,84,23,"Brown"],[0,9,100,0,"Yellow"],[30,0,70,0,"Flourescent Yellow"],[1,91,72,3,"Marine Red"],[0,58,82,0,"Orange"],[0,72,31,0,"Fluorescent Pink"],[25,17,15,44,"Light Gray"],[22,33,68,8,"Metallic Gold"],[0,55,53,0,"Fluorescent Orange"],[54,10,0,0,"Cornflower"],[70,30,0,0,"Sky Blue"],[100,4,4,24,"Sea Blue"],[93,54,0,0,"Lake"],[97,82,3,18,"Indigo"],[98,60,33,47,"Midnight"],[15,4,11,6,"Mist"],[36,22,30,2,"Granite"],[57,46,38,11,"Charcoal"],[70,27,36,6,"Smoky Teal"],[97,36,10,41,"Steel"],[66,41,71,29,"Slate"],[68,0,39,0,"Turquoise"],[82,0,92,0,"Emerald"],[80,3,93,17,"Grass"],[72,11,91,41,"Forest"],[87,30,71,39,"Spruce"],[38,11,89,42,"Moss"],[53,0,33,0,"Sea Foam"],[52,0,86,0,"Kelly Green"],[93,0,36,0,"Light Teal"],[71,0,72,0,"Ivy"],[94,4,62,8,"Pine"],[98,16,47,34,"Lagoon"],[40,51,0,0,"Violet"],[28,5,0,0,"Orchid"],[54,81,0,0,"Plum"],[40,63,9,35,"Raisin"],[69,85,10,11,"Grape"],[0,67,64,4,"Scarlet"],[1,91,72,3,"Tomato"],[19,83,56,4,"Cranberry"],[11,96,5,25,"Maroon"],[26,83,47,6,"Raspberry Red"],[8,85,59,18,"Brick"],[10,0,60,0,"Light Lime"],[0,29,93,0,"Sunflower"],[0,32,77,0,"Melon"],[0,35,69,4,"Apricot"],[0,47,68,7,"Paprika"],[0,56,70,0,"Pumpkin"],[5,8,100,15,"Bright Olive Green"],[3,36,97,9,"Bright Gold"],[5,54,95,8,"Copper"],[24,77,67,25,"Mahogany"],[1,22,7,0,"Bisque"],[5,48,0,0,"Bubble Gum"],[2,28,4,0,"Light Mauve"],[12,44,7,5,"Dark Mauve"],[24,94,1,21,"Wine"],[10,10,13,36,"Gray"],[0,44,43,0,"Coral"],[49,0,11,0,"Aqua"],[38,0,16,0,"Mint"]]},206:function(t,e,n){"use strict";var o=n(163);n.n(o).a},207:function(t,e,n){(e=n(42)(!1)).push([t.i,".modalcontainer[data-v-3c014998]{position:absolute;top:0;left:0;width:100vw;height:100vh;z-index:900;background:rgba(30,30,30,.8);display:flex;align-items:center;justify-content:center}.coloreditor[data-v-3c014998]{position:relative;background:#fff;box-shadow:0 10px 20px rgba(0,0,0,.2);padding:30px;display:flex;flex-direction:column;max-width:1000px}.close[data-v-3c014998]{cursor:pointer;position:absolute;top:0;right:0;padding:15px 20px;transition:all .2s;font-size:1.2em;color:rgba(0,0,0,.4)}.close[data-v-3c014998]:hover{background:rgba(0,0,0,.2);color:#000}h2[data-v-3c014998]{font-weight:800;margin-top:0;margin-bottom:10px}.twocolumn[data-v-3c014998]{flex:1;display:grid;grid-gap:30px;grid-template-columns:1fr 1fr}.twocolumn>.box[data-v-3c014998]{padding:15px;height:40vh;overflow:scroll;margin-top:5px}.twocolumn>.box.shadow[data-v-3c014998]{box-shadow:inset 0 5px 10px rgba(0,0,0,.1);background:#f8f8f8}.subbox[data-v-3c014998]{margin-top:5px;margin-bottom:15px}.manual[data-v-3c014998]{height:45px;display:flex}.manual>*[data-v-3c014998]{font-size:1rem;text-align:center;display:block;height:100%;width:20%}.color[data-v-3c014998]{padding-left:20px;color:#fff;text-shadow:0 0 5px rgba(0,0,0,.8);display:flex;justify-content:space-between;align-items:center;display:grid;grid-template-columns:150px 1fr 35px}.removecolor[data-v-3c014998]{cursor:pointer;padding:10px;transition:background .2s;text-shadow:none;background:rgba(0,0,0,.1);text-align:center}.removecolor[data-v-3c014998]:hover{background:red}.addcolor[data-v-3c014998]{font-weight:700;cursor:pointer;padding:10px;transition:background .2s;text-shadow:none;background:rgba(0,0,0,.1);text-align:center}.addcolor[data-v-3c014998]:hover{background:rgba(0,0,0,.2)}",""]),t.exports=e},208:function(t,e,n){"use strict";var o=n(164);n.n(o).a},209:function(t,e,n){(e=n(42)(!1)).push([t.i,".controlpanel[data-v-499bec88]{background:#f9f9f9;height:100%;overflow:scroll;border-right:1px solid rgba(0,0,0,.1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.top[data-v-499bec88]{position:relative;display:flex;align-items:stretch;margin-bottom:30px}.top>*[data-v-499bec88]{width:50%;margin:0}.previewpane[data-v-499bec88]{position:relative;width:100%;padding:0 15px}.previewpane div[data-v-499bec88]{display:inline-block;position:absolute;top:0;right:15px;color:#fff;background:rgba(0,0,0,.3);padding:3px;font-size:.9em}.previewpane div span[data-v-499bec88]{margin:-3px -3px -3px 5px;padding:3px 6px;background:red;cursor:pointer}.preview[data-v-499bec88]{display:block;max-width:100%;max-height:30vh;margin:0 auto}.pickers[data-v-499bec88]{display:flex;flex-wrap:wrap;justify-content:center;margin-bottom:100px}.picker[data-v-499bec88]{padding:30px 0 0}",""]),t.exports=e},210:function(t,e,n){"use strict";var o=n(165);n.n(o).a},211:function(t,e,n){(e=n(42)(!1)).push([t.i,".rightpane{width:100%;height:100vh;overflow:hidden;padding-bottom:5vh;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center}.loading{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,.4);font-size:1rem;color:#fff;padding:30px 50px;z-index:3}.output{position:relative;flex:0;width:100%}.output img{position:relative;width:95%;max-height:77vh;-o-object-fit:contain;object-fit:contain;top:0;left:50%;transform:translateX(-50%);mix-blend-mode:multiply;transition:opacity .2s;z-index:1}.output.fade img{opacity:.1}.output div{top:50%;left:50%;transform:translate(-50%,-50%)}.output div,.output img:not(:first-of-type){position:absolute}.bycolor{position:relative;width:95%;max-height:13vh;display:flex;margin:0 auto}.bycolor img{-o-object-fit:contain;object-fit:contain;flex:1;width:25%}.bottomcenter{position:absolute;bottom:15px;left:50%;transform:translateX(-50%);z-index:10;margin:0}",""]),t.exports=e},212:function(t,e,n){"use strict";var o=n(166);n.n(o).a},213:function(t,e,n){(e=n(42)(!1)).push([t.i,".modalcontainer[data-v-3475d5a2]{position:absolute;top:0;left:0;width:100vw;height:100vh;z-index:1050;background:rgba(30,30,30,.8);display:flex;align-items:center;justify-content:center}.about[data-v-3475d5a2]{position:relative;background:#fff;box-shadow:0 10px 20px rgba(0,0,0,.2);padding:30px;display:flex;flex-direction:column;max-width:1000px}.close[data-v-3475d5a2]{cursor:pointer;position:absolute;top:0;right:0;padding:15px 20px;transition:all .2s;font-size:1.2em;color:rgba(0,0,0,.4)}.close[data-v-3475d5a2]:hover{background:rgba(0,0,0,.2);color:#000}h2[data-v-3475d5a2]{font-weight:800;margin-top:0;margin-bottom:10px}p[data-v-3475d5a2]{line-height:1.6;font-weight:400;margin:15px 0}",""]),t.exports=e},214:function(t,e,n){"use strict";var o=n(167);n.n(o).a},215:function(t,e,n){(e=n(42)(!1)).push([t.i,'.master{width:100vw;height:100vh;overflow:scroll;display:grid;grid-template-columns:300px 1fr}.master:after{content:"Drop an image to upload";top:0;left:0;right:0;bottom:0;z-index:1000;background:rgba(50,50,50,.9);color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;border:3px solid #fff}.master:after,.master:before{position:absolute;pointer-events:none;opacity:0;transition:opacity .2s}.master:before{content:"";z-index:1001;top:50px;left:50px;right:50px;bottom:50px;border:3px dashed #fff}.master.dragging:after,.master.dragging:before{opacity:1}',""]),t.exports=e},217:function(t,e,n){"use strict";n.r(e);n(32),n(20);var o=n(3);n(108);var r={props:{buttonType:{default:""}},data:function(){return{}},components:{},watch:{file:function(){this.file||(this.$refs.fileinput.files=void 0)}},computed:{file:function(){return this.$store.state.file}},mounted:function(){},methods:{fileChange:function(t){var e,n=this,r=this.$refs.fileinput.files;if(r&&r[0]){if(e=r[0].name,!/.*\.(jpe?g|png|gif)$/gi.exec(e))return alert("Please pick a valid image file.");this.$store.commit("set",{filename:r[0].name});var l=new FileReader;l.onload=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("loaded file."),n.$store.commit("set",{file:e.target.result});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l.readAsDataURL(r[0])}}}},l=(n(182),n(19)),c=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"passthrough"},[e("label",{staticClass:"button",class:this.buttonType,attrs:{for:"file-upload"}},[this._t("default",[this._v("Pick Image")])],2),this._v(" "),e("input",{ref:"fileinput",attrs:{id:"file-upload",type:"file",file:this.file},on:{change:this.fileChange}})])}),[],!1,null,"286025e1",null).exports,d={props:{},data:function(){return{}},components:{uploadbutton:c},watch:{},mounted:function(){},computed:{},methods:{}},f=(n(184),Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro"},[n("h1",[t._v("CMYK Tester")]),t._v(" "),n("div",{staticClass:"dropzone"},[n("div",[n("uploadbutton")],1),t._v(" "),n("div",[t._v("Or, drag an image in to start.")])]),t._v(" "),n("button",{staticClass:"secondary",on:{click:function(e){return t.$store.commit("set",{aboutOpen:!0})}}},[t._v("\n    About\n  ")])])}),[],!1,null,"0d22397c",null).exports),h=(n(64),n(23),n(21),n(12),n(46),n(29)),m=n(174),v=n(216),x={props:{min:{default:0},max:{default:1},step:{default:.1},color:{default:"#222"}},data:function(){return{value:1}},components:{},watch:{},mounted:function(){},methods:{}},w=(n(196),Object(l.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],style:{background:"linear-gradient(to right, transparent, "+t.color+")"},attrs:{type:"range",min:t.min,max:t.max,step:t.step},domProps:{value:t.value},on:{mouseup:function(e){t.$emit("input",parseFloat(e.target.value))},__r:function(e){t.value=e.target.value}}}),t._v(" "),n("div",[t._v(t._s(100*t.value)+"%")])])}),[],!1,null,null,null).exports),y=n(168),_=y.split,k=(y.preload,{props:{},data:function(){return{isLoading:!1,targetColor:"#000000",maxWH:3e3}},components:{},watch:{},mounted:function(){},computed:{file:function(){return this.$store.state.file},filename:function(){return this.$store.state.filename},alphas:function(){return this.$store.state.alphas}},methods:{download:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,_(t.file,[t.targetColor,t.targetColor,t.targetColor,t.targetColor],t.alphas,t.maxWH);case 3:for(i in n=e.sent)(a=document.createElement("a")).href=n[i],a.download="".concat(t.filename," ").concat(["C","M","Y","K"][i],".png"),document.body.appendChild(a),a.click(),document.body.removeChild(a);setTimeout((function(){return t.isLoading=!1}),100);case 6:case"end":return e.stop()}}),e)})))()}}}),C=(n(198),Object(l.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"download"},[e("button",{attrs:{disabled:this.isLoading},on:{click:this.download}},[this._v("\n    "+this._s(this.isLoading?"Loading, Please Wait... (May take some time)":"Download High-Res Channels")+"\n  ")])])}),[],!1,null,null,null).exports),$=(n(200),n(173),n(204),n(170)),O=n(205),j=n(172).set,M={props:{open:{default:!1}},data:function(){return{C:0,M:0,Y:0,K:0,convert:$,presets:O}},components:{},watch:{colors:function(){j("colors",JSON.stringify(this.colors))}},computed:{colors:function(){return this.$store.state.colors}},mounted:function(){},methods:{addColor:function(t){this.$store.commit("set",{colors:[].concat(Object(m.a)(this.colors),[t])})},addColorManually:function(){var t=parseInt(this.C),e=parseInt(this.M),n=parseInt(this.Y),o=parseInt(this.K);return Number.isNaN(t)||Number.isNaN(e)||Number.isNaN(n)||Number.isNaN(o)?alert("Invalid value!"):t>100||t<0||e>100||e<0||n>100||n<0||o>100||o<0?alert("Color values must be between 0 and 100."):void this.$store.commit("set",{colors:[].concat(Object(m.a)(this.colors),[[t,e,n,o,"Custom Color"]])})},removeColor:function(t){var e=Object(m.a)(this.colors),n=e.findIndex((function(e){return e===t}));n>=0&&e.splice(n,1),this.$store.commit("set",{colors:e})},checkClose:function(t){"modalcontainer"===t.path[0].classList[0]&&this.$emit("close")}}},T=(n(206),Object(l.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modalcontainer",on:{click:t.checkClose}},[n("div",{staticClass:"coloreditor"},[n("div",{staticClass:"close",on:{click:function(e){return t.$emit("close")}}},[t._v("✖")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"twocolumn"},[n("div",{staticClass:"box shadow"},[n("div",[t._v("Manual Entry")]),t._v(" "),n("form",{staticClass:"manual subbox",on:{submit:function(t){t.preventDefault()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.C,expression:"C"}],attrs:{type:"number"},domProps:{value:t.C},on:{input:function(e){e.target.composing||(t.C=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.M,expression:"M"}],attrs:{type:"number"},domProps:{value:t.M},on:{input:function(e){e.target.composing||(t.M=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.Y,expression:"Y"}],attrs:{type:"number"},domProps:{value:t.Y},on:{input:function(e){e.target.composing||(t.Y=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.K,expression:"K"}],attrs:{type:"number"},domProps:{value:t.K},on:{input:function(e){e.target.composing||(t.K=e.target.value)}}}),n("button",{attrs:{type:"submit"},on:{click:t.addColorManually}},[t._v("Add")])]),t._v(" "),n("div",[t._v("Presets")]),t._v(" "),n("div",{staticClass:"subbox"},t._l(t.presets,(function(e,o){var r;return n("div",{key:o+e[4],staticClass:"color",style:{background:"#"+(r=t.convert.cmyk).hex.apply(r,e)}},[n("span",{staticStyle:{"margin-right":"10px"}},[t._v(t._s(e.slice(0,4).join(", ")))]),t._v(" "),n("span",{staticStyle:{"margin-right":"10px"}},[t._v(t._s(e[4]))]),t._v(" "),n("span",{staticClass:"addcolor",on:{click:function(n){return t.addColor(e)}}},[t._v("＋")])])})),0)]),t._v(" "),n("div",{staticClass:"box shadow"},t._l(t.colors,(function(e,o){var r;return n("div",{key:o+e[4],staticClass:"color",style:{background:"#"+(r=t.convert.cmyk).hex.apply(r,e)}},[n("span",{staticStyle:{"margin-right":"10px"}},[t._v(t._s(e.slice(0,4).join(", ")))]),t._v(" "),n("span",{staticStyle:{"margin-right":"10px"}},[t._v(t._s(e[4]))]),t._v(" "),n("span",{staticClass:"removecolor",on:{click:function(n){return t.removeColor(e)}}},[t._v("✖")])])})),0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"twocolumn"},[e("h2",[this._v("\n        Add Colors\n      ")]),this._v(" "),e("h2",[this._v("\n        Your Colors\n      ")])])}],!1,null,"3c014998",null).exports);function R(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function L(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=n(170),P=n(172).get;var Y={data:function(){return{isLoading:!1,colorEditorOpen:!1,changeCTo:{hex:"#"+S.cmyk.hex(100,0,0,0)},changeMTo:{hex:"#"+S.cmyk.hex(0,100,0,0)},changeYTo:{hex:"#"+S.cmyk.hex(0,0,100,0)},changeKTo:{hex:"#"+S.cmyk.hex(0,0,0,100)},alphaC:1,alphaM:1,alphaY:1,alphaK:1}},components:{picker:v.a,slider:w,download:C,uploadbutton:c,coloreditor:T},watch:{file:function(){this.go()},changeCTo:function(){this.go()},changeMTo:function(){this.go()},changeYTo:function(){this.go()},changeKTo:function(){this.go()},alphaC:function(){this.$store.commit("set",{alphas:[this.alphaC,this.alphas[1],this.alphas[2],this.alphas[3]]})},alphaM:function(){this.$store.commit("set",{alphas:[this.alphas[0],this.alphaM,this.alphas[2],this.alphas[3]]})},alphaY:function(){this.$store.commit("set",{alphas:[this.alphas[0],this.alphas[1],this.alphaY,this.alphas[3]]})},alphaK:function(){this.$store.commit("set",{alphas:[this.alphas[0],this.alphas[1],this.alphas[2],this.alphaK]})},alphas:function(){this.go()}},computed:{file:function(){return this.$store.state.file},filename:function(){return this.$store.state.filename},colors:function(){return this.$store.state.colors.map((function(t){var e;return"#"+(e=S.cmyk).hex.apply(e,Object(m.a)(t))}))},alphas:function(){return this.$store.state.alphas}},mounted:function(){var t=JSON.parse(P("colors"));t&&Array.isArray(t)&&(console.log("Loaded saved palette.",t),this.$store.commit("set",{colors:t}))},methods:{go:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("go",L({},t));case 1:case"end":return e.stop()}}),e)})))()},fileChange:function(t){var e,n=this,r=this.$refs.fileinput.files;if(r&&r[0]){if(e=r[0].name,!/.*\.(jpe?g|png|gif)$/gi.exec(e))return alert("Please pick a valid image file.");this.$store.commit("set",{filename:r[0].name});var l=new FileReader;l.onload=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.$store.commit("set",{file:e.target.result}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l.readAsDataURL(r[0])}},removeImage:function(){this.$store.commit("set",{file:null,filename:"file",alphas:[1,1,1,1]}),this.$refs.preview&&(this.$refs.preview.src="")},editColors:function(){}}},D=(n(208),Object(l.a)(Y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"controlpanel"},[t.colorEditorOpen?n("coloreditor",{on:{close:function(e){t.colorEditorOpen=!1}}}):t._e(),t._v(" "),n("div",{staticClass:"top"},[n("uploadbutton",{attrs:{buttonType:"secondary"}}),t._v(" "),n("button",{staticClass:"tertiary",on:{click:function(e){t.colorEditorOpen=!0}}},[t._v("\n      Edit Palette\n    ")])],1),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.file?n("div",{staticClass:"center"},[n("div",{staticClass:"previewpane"},[n("img",{ref:"preview",staticClass:"preview",attrs:{src:t.file}}),t._v(" "),n("div",[t._v("\n          Source Image"),n("span",{staticClass:"removeimage",on:{click:t.removeImage}},[t._v("✖")])])]),t._v(" "),n("client-only",[n("div",{staticClass:"pickers"},[n("div",{staticClass:"picker"},[n("span",[t._v("C Channel")]),t._v(" "),n("picker",{attrs:{palette:t.colors},model:{value:t.changeCTo,callback:function(e){t.changeCTo=e},expression:"changeCTo"}}),t._v(" "),n("slider",{attrs:{color:t.changeCTo.hex},model:{value:t.alphaC,callback:function(e){t.alphaC=e},expression:"alphaC"}})],1),t._v(" "),n("div",{staticClass:"picker"},[n("span",[t._v("M Channel")]),t._v(" "),n("picker",{attrs:{palette:t.colors},model:{value:t.changeMTo,callback:function(e){t.changeMTo=e},expression:"changeMTo"}}),t._v(" "),n("slider",{attrs:{color:t.changeMTo.hex},model:{value:t.alphaM,callback:function(e){t.alphaM=e},expression:"alphaM"}})],1),t._v(" "),n("div",{staticClass:"picker"},[n("span",[t._v("Y Channel")]),t._v(" "),n("picker",{attrs:{palette:t.colors},model:{value:t.changeYTo,callback:function(e){t.changeYTo=e},expression:"changeYTo"}}),t._v(" "),n("slider",{attrs:{color:t.changeYTo.hex},model:{value:t.alphaY,callback:function(e){t.alphaY=e},expression:"alphaY"}})],1),t._v(" "),n("div",{staticClass:"picker"},[n("span",[t._v("K Channel")]),t._v(" "),n("picker",{attrs:{palette:t.colors},model:{value:t.changeKTo,callback:function(e){t.changeKTo=e},expression:"changeKTo"}}),t._v(" "),n("slider",{attrs:{color:t.changeKTo.hex},model:{value:t.alphaK,callback:function(e){t.alphaK=e},expression:"alphaK"}})],1)])])],1):t._e()])],1)}),[],!1,null,"499bec88",null).exports),E={props:{isLoading:{},output:{default:function(){return[]}}},data:function(){return{}},components:{download:C},watch:{},mounted:function(){},computed:{file:function(){return this.$store.state.file}},methods:{}},K=(n(210),Object(l.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rightpane"},[n("transition",{attrs:{name:"fade"}},[t.isLoading?n("div",{staticClass:"loading"},[t._v("Loading...")]):t._e()]),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.output[0]?n("div",[n("div",{staticClass:"output"},[n("img",{attrs:{src:t.output[0]}}),t._v(" "),n("img",{attrs:{src:t.output[1]}}),t._v(" "),n("img",{attrs:{src:t.output[2]}}),t._v(" "),n("img",{attrs:{src:t.output[3]}})]),t._v(" "),n("div",{staticClass:"bycolor"},[n("img",{attrs:{src:t.output[0]}}),t._v(" "),n("img",{attrs:{src:t.output[1]}}),t._v(" "),n("img",{attrs:{src:t.output[2]}}),t._v(" "),n("img",{attrs:{src:t.output[3]}})]),t._v(" "),n("download",{staticClass:"bottomcenter"})],1):t._e()])],1)}),[],!1,null,null,null).exports),z={data:function(){return{}},components:{},watch:{},mounted:function(){},computed:{aboutOpen:function(){return this.$store.state.aboutOpen}},methods:{checkClose:function(t){"modalcontainer"===t.path[0].classList[0]&&this.$store.commit("set",{aboutOpen:!1})}}},I=(n(212),Object(l.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.aboutOpen?n("div",{staticClass:"modalcontainer",on:{click:t.checkClose}},[n("div",{staticClass:"about"},[n("div",{staticClass:"close",on:{click:function(e){return t.$store.commit("set",{aboutOpen:!1})}}},[t._v("\n      ✖\n    ")]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      Made by\n      "),e("a",{attrs:{href:"https://www.jasperstephenson.com/",target:"_blank"}},[this._v("Jasper Stephenson")]),this._v("\n      in 2020 as freeware for risograph printers. "),e("br"),this._v("\n      No images are stored online in any capacity, nor can I view anything you\n      edit here. "),e("br"),this._v(" "),e("a",{attrs:{href:"mailto:jasperstephenson@gmail.com",target:"_blank"}},[this._v("Email me")]),this._v("\n      if you have any feedback or feature requests.\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      日本語も喋るので、評価や機能依頼があれば気軽に"),e("a",{attrs:{href:"mailto:jasperstephenson@gmail.com",target:"_blank"}},[this._v("連絡して")]),this._v("ください！\n    ")])}],!1,null,"3475d5a2",null).exports),N=n(168),B=N.split;N.preload;var G={head:function(){return{title:"CMYK Tester"}},data:function(){return{isLoading:!1,isDragging:!1,outputChannels:[]}},components:{intro:f,controlpanel:D,result:K,about:I},watch:{},mounted:function(){},computed:{file:function(){return this.$store.state.file},alphas:function(){return this.$store.state.alphas}},methods:{go:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.isLoading){n.next=2;break}return n.abrupt("return",console.log("skipping double"));case 2:if(e.file){n.next=6;break}return console.log("clearing"),e.outputChannels=[],n.abrupt("return");case 6:return e.isLoading=!0,n.next=9,B(e.file,[t.changeCTo.hex,t.changeMTo.hex,t.changeYTo.hex,t.changeKTo.hex],e.alphas,500);case 9:o=n.sent,e.outputChannels=o.map((function(t,i){return t||e.outputChannels[i]})),setTimeout((function(){return e.isLoading=!1}),100);case 12:case"end":return n.stop()}}),n)})))()},fileDrop:function(t){var e=this;this.isDragging=!1;var n,r=t.dataTransfer.files;if(r&&r[0]){if(n=r[0].name,!/.*\.(jpe?g|png|gif)$/gi.exec(n))return alert("Please pick a valid image file.");this.$store.commit("set",{filename:r[0].name});var l=new FileReader;l.onload=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.$store.commit("set",{file:n.target.result}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l.readAsDataURL(r[0])}}}},F=(n(214),Object(l.a)(G,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"master",class:{dragging:t.isDragging},on:{drop:function(e){return e.preventDefault(),t.fileDrop(e)},dragover:function(e){e.preventDefault(),t.isDragging=!0},dragleave:function(e){e.preventDefault(),t.isDragging=!1},dragend:function(e){e.preventDefault(),t.isDragging=!1}}},[n("about"),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.file?t._e():n("intro")],1),t._v(" "),n("controlpanel",{on:{go:t.go}}),t._v(" "),n("result",{attrs:{isLoading:t.isLoading,output:t.outputChannels}})],1)}),[],!1,null,null,null));e.default=F.exports}}]);