(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{298:function(t,r,o){var content=o(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("7f1a7bf2",content,!0,{sourceMap:!1})},311:function(t,r,o){"use strict";o(298)},312:function(t,r,o){var n=o(14)(!1);n.push([t.i,".arrowcontrols[data-v-0cf9502a]{position:fixed;z-index:5;bottom:2vw;right:2vw;-webkit-user-select:none;-ms-user-select:none;user-select:none}.arrowcontrols .arrowbutton[data-v-0cf9502a]{position:absolute;width:40px;height:40px;opacity:.3;background:#fff;border:1px solid #000;cursor:pointer;display:flex;align-items:center;justify-content:center;--spacer:39px;transition:opacity .2s}.arrowcontrols .arrowbutton.on[data-v-0cf9502a]{opacity:1}.arrowcontrols .arrowbutton.up[data-v-0cf9502a]{bottom:var(--spacer);right:var(--spacer)}.arrowcontrols .arrowbutton.right[data-v-0cf9502a]{bottom:0;right:0}.arrowcontrols .arrowbutton.right span[data-v-0cf9502a]{transform:rotate(90deg)}.arrowcontrols .arrowbutton.down[data-v-0cf9502a]{bottom:0;right:var(--spacer)}.arrowcontrols .arrowbutton.left[data-v-0cf9502a]{bottom:0;right:calc(var(--spacer)*2)}.arrowcontrols .arrowbutton.left span[data-v-0cf9502a]{transform:rotate(-90deg)}.arrowcontrols.big[data-v-0cf9502a]{bottom:.5rem;right:.5rem}.arrowcontrols.big .arrowbutton[data-v-0cf9502a]{width:50px;height:50px;--spacer:49px}",""]),t.exports=n},336:function(t,r,o){"use strict";o.r(r);o(8),o(7),o(9),o(10),o(11);var n=o(3),e=o(5);function c(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,o)}return r}var l={props:{canGoUp:{},canGoDown:{},canGoRight:{},canGoLeft:{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(r){Object(n.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}({},Object(e.b)(["isMobile"]))},f=l,w=(o(311),o(4)),component=Object(w.a)(f,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",{staticClass:"arrowcontrols",class:{big:t.isMobile}},[o("div",{staticClass:"arrowbutton up",class:{on:t.canGoUp},on:{click:function(r){return t.$emit("up")}}},[t._v("\n    ▲\n  ")]),t._v(" "),o("div",{staticClass:"arrowbutton right",class:{on:t.canGoRight},on:{click:function(r){return t.$emit("right")}}},[o("span",[t._v("▲")])]),t._v(" "),o("div",{staticClass:"arrowbutton down",class:{on:t.canGoDown},on:{click:function(r){return t.$emit("down")}}},[t._v("\n    ▼\n  ")]),t._v(" "),o("div",{staticClass:"arrowbutton left",class:{on:t.canGoLeft},on:{click:function(r){return t.$emit("left")}}},[o("span",[t._v("▲")])])])}),[],!1,null,"0cf9502a",null);r.default=component.exports}}]);