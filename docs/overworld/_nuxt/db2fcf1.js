(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{297:function(t,o,e){var content=e(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(15).default)("75b37013",content,!0,{sourceMap:!1})},309:function(t,o,e){"use strict";e(297)},310:function(t,o,e){var n=e(14)(!1);n.push([t.i,".minimap[data-v-5ebd5224]{--gap:5px;display:inline-block;position:absolute;z-index:5;bottom:2vw;left:2vw}@media(max-width:768px){.minimap[data-v-5ebd5224]{--gap:3px;padding:calc(var(--gap)*2);bottom:.5rem;left:.5rem}}.minimap .row[data-v-5ebd5224]{display:grid;grid-gap:var(--gap)}.minimap .row[data-v-5ebd5224]:not(:last-of-type){margin-bottom:var(--gap)}.minimap .room[data-v-5ebd5224]{width:30px;height:20px;background:hsla(0,0%,100%,.342);transition:background .2s,box-shadow .2s;box-shadow:0 0 1em rgba(0,0,0,.3)}.minimap .room.current[data-v-5ebd5224]{background:hsla(0,0%,100%,.9);box-shadow:0 0 .6em rgba(0,0,0,.5)}.minimap .room[data-v-5ebd5224]:not(.real){background:none;box-shadow:none}@media(max-width:768px){.minimap .room[data-v-5ebd5224]{width:20px;height:14px}}",""]),t.exports=n},335:function(t,o,e){"use strict";e.r(o);e(28);var n={props:{map:{},x:{},y:{}},computed:{mapWidth:function(){return this.map.reduce((function(t,o){return Math.max(t,o.length)}),0)}}},r=(e(309),e(4)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"minimap"},t._l(t.map.length,(function(o){return e("div",{key:"row"+o,staticClass:"row",style:{"grid-template-columns":"repeat("+t.mapWidth+", 1fr)"}},t._l(t.mapWidth,(function(n){return e("div",{key:n+" "+o,staticClass:"room",class:{current:t.y===o-1&&t.x===n-1,real:t.map[o-1][n-1]},on:{click:function(e){return t.$emit("go",[n-1,o-1])}}})})),0)})),0)}),[],!1,null,"5ebd5224",null);o.default=component.exports}}]);