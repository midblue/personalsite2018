(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{260:function(t,e){t.exports=["spectrum","mentor","gameux","esports7","hud"]},322:function(t,e,n){"use strict";n.r(e);n(268),n(25),n(14);var r=n(271),o=n(253),c={props:[],components:{PostList:r.a,Nav:o.a},data:function(){return{}},asyncData:function(){var t=[],e=n(269);e.keys().forEach((function(n){"writing"===e(n).category&&t.push(e(n))}));var r=n(260);return{posts:t,postOrder:r}},head:function(){return{title:"Writing",meta:[{hid:"description",name:"description",content:"UX engineer, friendly ghost."}]}},computed:{userLanguage:function(){return this.$store.state.userLanguage},orderedPosts:function(){var t=this;return this.postOrder.map((function(e){var n=t.posts.find((function(p){return p.slug===e}));if(n)return-1!==t.userLanguage.toLowerCase().indexOf("ja")&&!0===n.s?null:n})).filter((function(p){return p}))}},watch:{},mounted:function(){this.$store.commit("set",{page:"writing",pageCategory:"writing"})},methods:{}},d=n(8),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return this.orderedPosts?e("div",{staticClass:"page-content"},[e("PostList",{attrs:{posts:this.orderedPosts||this.posts}})],1):this._e()}),[],!1,null,null,null);e.default=component.exports}}]);