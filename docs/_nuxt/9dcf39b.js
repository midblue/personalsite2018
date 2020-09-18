(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{255:function(e,t,o){var content=o(275);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(20).default)("581b193c",content,!0,{sourceMap:!1})},256:function(e,t,o){var content=o(278);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(20).default)("5593c174",content,!0,{sourceMap:!1})},274:function(e,t,o){"use strict";var n=o(255);o.n(n).a},275:function(e,t,o){(t=o(19)(!1)).push([e.i,".post[data-v-104b5dfc]{width:100%;max-width:1200px;margin:0 auto 110px;display:grid;grid-template-columns:50% 1fr;position:relative}@media (max-width:768px){.post[data-v-104b5dfc]{grid-template-columns:1fr;margin-bottom:50px}}.post .listimg[data-v-104b5dfc]{background:#eee;background-size:cover;background-position:50%;-ms-flex-negative:0;flex-shrink:0;height:100%}@media (max-width:768px){.post .listimg[data-v-104b5dfc]{height:150px}}.post .infobox[data-v-104b5dfc]{-webkit-box-flex:1;-ms-flex:1;flex:1;background:#fff}.post .infobox .title[data-v-104b5dfc]{margin-bottom:25px;margin-top:0}.post .infobox .title a[data-v-104b5dfc]{color:#302c31}@media (max-width:768px){.post .infobox .title[data-v-104b5dfc]{margin-top:15px;margin-bottom:10px}}.post .infobox .info[data-v-104b5dfc]{padding-left:40px}@media (max-width:768px){.post .infobox .info[data-v-104b5dfc]{padding-left:20px;padding-right:20px}}.post .infobox .info.padbot[data-v-104b5dfc]{padding-bottom:15px}.post .infobox .info.nopadleft[data-v-104b5dfc]{padding-left:0}.post summary[data-v-104b5dfc]{padding-top:10px;max-width:675px}",""]),e.exports=t},276:function(e,t,o){"use strict";o.r(t),t.default='<section><h2><a href="https://www.jasperstephenson.com/vidsynth">VidSynth</a>: a Webcam-Controlled Virtual Instrument</h2>\n<h4>Sep 2020</h4>\n<p><img src="/labs/vidsynth/1.jpg" alt="Vidsynth demo"> After attending <a href="https://gaudeamus.nl/en/events/workshop-designing-a-reprogrammable-instrument-rafaele-andrade/">a workshop</a> in Utrecht about designing a reprogrammable instrument, and I ended up inspired to create something using video as an input source.</p>\n<p>A day of tinkering later, I made <a href="https://www.jasperstephenson.com/vidsynth">this demo</a> (<a href="https://github.com/midblue/vidsynth">source code</a>) which takes 4 color points from your webcam and uses their hue, saturation, and lightness to generate tones, bpm, and chord choices. It sounds like chaos, but in a slightly ordered fashion. I can imagine the applications for something like this being used to help blind people “see” through audio, or to make soundscapes of various spaces — for example, maybe to be used as background music for a podcast about different cities?</p>\n<p>I generated the sounds using <a href="https://p5js.org/reference/#/libraries/p5.sound">p5.js</a>, which was my first time using that libary — I can’t wait to dig deeper into what p5 can do, especially in terms of visualization!</p>\n<hr>\n<h2><a href="https://www.jasperstephenson.com/cmyk-tester/">CMYK Splitter</a> for Risograph Printing</h2>\n<h4>May 2020</h4>\n<p><img src="/labs/cmyksplitter/1.jpg" alt="CMYK splitter interface"> While designing <a href="https://travelingurbanism.stores.jp/">the second zine</a> for <a href="https://www.travelingcircusofurbanism.com/">Traveling Circus of Urbanism</a>, I was inspired by Oda-san of <a href="https://handsawpresstokyo.com/index.html">Hand Saw Press Kyoto</a> to develop a web tool for <a href="https://en.wikipedia.org/wiki/Risograph">Risograph</a> printing that can split any image into CMYK and reassign new colors/opacities to each channel. You can then download all of the channels as the transparent/black that’s necessary for printing.</p>\n<p>I had a lot of fun going back and forth with Oda-san over how this tool should work, and I hear that it’s starting to catch on with Risograph printers in Japan!</p>\n<p>Try it <a href="https://www.jasperstephenson.com/cmyk-tester/">here</a>, or check out the <a href="https://github.com/midblue/cmyk-tester">source code</a>!</p>\n<hr>\n<h2><a href="https://www.jasperstephenson.com/svgmaker">Autogenerated SVG Art</a></h2>\n<h4>May 2020</h4>\n<p><img src="/labs/svgmaker/1.jpg" alt="Auto-generated art from the svgmaker"> When determining the style for the <a href="https://travelingurbanism.stores.jp/">the second zine</a> for <a href="https://www.travelingcircusofurbanism.com/">Traveling Circus of Urbanism</a>, I decided I wanted to have an element of technological randomness in the illustrations. We knew we’d be going for a 2-color print, so I developed <a href="https://www.jasperstephenson.com/svgmaker">this tool</a> to create randomized visuals that we could generate infinitely and then curate the best ones to use in the zine.</p>\n<p>It uses a variety of shapes, gradients, and masks, all created programmatically using Vue. <a href="https://www.jasperstephenson.com/svgmaker">Give it a whirl</a> if you’re curious, or take a peek at the <a href="https://github.com/midblue/svgArt">source code</a>.</p>\n<hr>\n<h2>Ludum Dare Game Jam #46: <a href="https://swsteffes.itch.io/final-flower-petals-of-a-lost-age">Final Flower</a></h2>\n<h4>Apr 2020</h4>\n<div class="videowrapper"><video src="/labs/finalflower/1.mp4" autoplay muted loop ></video></div>\n<p><img src="/labs/finalflower/1.png" alt="Final Flower cover image"> I was part of a 5-person team tasked with making a game in 3 days on the theme of “keep it alive.” I was in charge of the UI, music, sound effects, level design, and menus for <a href="https://swsteffes.itch.io/final-flower-petals-of-a-lost-age">our challening platformer</a> in which you play as a robot tasked with keeping the last flower on Earth alive in a hostile, metallic world. I also made a <a href="https://github.com/midblue/highscore">high score API</a> for this game that can be used in anyone’s project — it’s open source, so you can use it in your next game jam! We got some amazing replayability out of the high score system — we saw hundreds of players competing for the top spots, with some extreme optimizations. Overall, I think it’s the best game-jam game I’ve been a part of yet!</p>\n<p>You can play the game in your browser, so <a href="https://swsteffes.itch.io/final-flower-petals-of-a-lost-age">check it out!</a></p>\n<hr>\n<h2>Image Color Analyzer</h2>\n<h4>Mar 2020</h4>\n<p><img src="/labs/coloranalyzer/1.jpg" alt="Example of color analysis"> A friend of mine was trying to take a deeper look at the color pallettes of some of her favorite photographers. I developed this simple tool using <a href="https://github.com/lovell/sharp">Sharp.js</a> to extract color information from an image and organize it in several patterns: by hue, by saturation, and by lightness. From there, she could learn what swaths of colors were being prioritized in filters, how much or little flat whites/blacks were in use, which hues were being desaturated or shifted toward another color, and more.</p>\n<hr>\n<h2>Global Game Jam 2020: <a href="https://swsteffes.itch.io/track-beat">TrackBeat</a></h2>\n<h4>Mar 2020</h4>\n<p><img src="/labs/trackbeat/1.jpg" alt="TrackBeat cover image"> I made this game on the theme of “repair” as part of a 5-person team in Osaka. TrackBeat is a rhythm game about being tied to the front of a train, hammering the bumps in the track into shape in time with the music as you roll along. We had some real heavy hitters in our squad — professional 3d modellers and rock-star coders — so I decided to go a role I’d never tried: music! I made a few unique tracks for the game, and I’m happy with how they came out. I also took on the UI and 2D graphics for the game.</p>\n<p><a href="https://swsteffes.itch.io/track-beat">Download it here!</a> (Windows only)</p>\n<hr>\n<h2><a href="https://www.brdg.to">Bridge To</a>: An Urbanist Residency in Kyoto</h2>\n<h4>Dec 2019</h4>\n<p><img src="/labs/bridgetosite/1.jpg" alt="brdg.to homepage"> I developed this website for <a href="https://www.brdg.to">Bridge To</a>, a new urbanist residency in Kyoto, Japan that my wife and I run. It’s got a few fun tricks involving position:sticky elements, and I’m overall very happy with how it came out. The applications have been coming in, so I guess it’s working!</p>\n<p>This project was a good excuse to stretch my illustration capabilities — I created the diagram of our space in Sketch, and then brought it to life on the web.</p>\n<hr>\n<h2><a href="https://www.jasperstephenson.com/autochess/">Literal Auto Chess</a></h2>\n<h4>Oct 2019</h4>\n<p><video src="/labs/autochess/1.mp4" autoplay muted loop ></video><br>\nThere’s been a huge boom of “auto chess” games lately, from the original Dota 2 Auto Chess to Teamfight Tactics to Dota Underlords. Seeing all of those got me thinking — what if it were <i>actually</i> chess that were automated?</p>\n<p>The video above says it all. Earn gold to buy pieces, position them carefully, and stay alive! The game is single-player with leaderboards where you can show off your auto chess skills.</p>\n<p>As fun as this is, it’s true that pieces sometimes move in silly ways. I’ve been looking into ways to reduce the randomness without sacrificing excitement, so keep an eye out for updates once I figure that one out ;)</p>\n<p><a href="https://www.jasperstephenson.com/autochess/">Play it here</a>, or check out the <a href="https://github.com/midblue/literal-autochess">source code</a></p>\n<hr>\n<h2>Tsk: A Hypersimple Text-Based Task Tracker</h2>\n<h4>Oct 2019</h4>\n<p><img src="/labs/tsk/1.jpg" alt="Tsk in action"> Born out of personal necessity, I used Vue and Electron to make a task tracker that permanently lives on my desktop.</p>\n<p>Elements are draggable, section headers are color-customizable, and if you add a date like “(16/9)” or “(next week)” in parentheses it will automatically track the time until that date for you, making the element in question glow red more and more as the deadline approaches.</p>\n<p>I plan on continuing to add features to it as the need arises, such as improved semantic date recognition and markdown-powered url embedding.</p>\n<p>It’s proven invaluable for keeping track of my many clients and side projects! (And to remember to vote! Trump can GTFO.)</p>\n<hr>\n<p>That’s all for now! There’s more to come, so keep your eyes on this page!</p>\n</section>\n'},277:function(e,t,o){"use strict";var n=o(256);o.n(n).a},278:function(e,t,o){(t=o(19)(!1)).push([e.i,".labs{max-width:1000px;margin-bottom:20vh}@media (max-width:768px){.labs{max-width:100%;overflow-x:hidden;padding-left:20px;padding-right:20px}}.labs h2{margin-bottom:0}.labs h4{margin-top:.3em;margin-bottom:1.5em}.labs hr{margin:8em auto;background:none;border:1px solid #ddd;max-width:200px}@media (max-width:768px){.labs hr{margin:4em auto}}.labs img{max-width:200px;max-height:200px;margin:2em}.labs img:first-child{float:left;max-width:400px;max-height:550px;margin:0 3em 8em 0}@media (max-width:768px){.labs img{display:block;max-width:100%!important;float:none!important;margin:0 auto 1em!important}}.labs video{margin:0 auto;max-width:100%}.labs .videowrapper{text-align:center}.labs hr{clear:both}",""]),e.exports=t},319:function(e,t,o){"use strict";o.r(t);o(86),o(123);var n={props:["title","slug","date","img","content"],components:{},data:function(){return{}},computed:{},watch:{},mounted:function(){},methods:{}},r=(o(274),o(8)),h={props:[],components:{LabsPost:Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"post"},[e.img?o("div",{staticClass:"listimg",style:"background-image: url('"+e.img+"');"}):e._e(),e._v(" "),o("div",{staticClass:"infobox"},[o("div",{staticClass:"info padbot",class:{nopadleft:!e.img}},[o("h2",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),o("summary",{domProps:{innerHTML:e._s(e.$md.render(e.content))}})])])])}),[],!1,null,"104b5dfc",null).exports},data:function(){return{}},asyncData:function(){return{content:o(276).default.replace(/href=/gi,'target="_blank" href=').replace(/src=/gi,'align="top" src=').split("<hr />").map((function(e){return e}))}},head:function(){return{title:"Labs",meta:[{hid:"description",name:"description",content:"UX engineer, friendly ghost."}]}},computed:{labs:function(){return this.content.join("<hr />")}},watch:{},mounted:function(){this.$store.commit("set",{page:"labs",pageCategory:"labs"})},methods:{}},l=(o(277),Object(r.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-content labs"},[t("div",{domProps:{innerHTML:this._s(this.labs)}})])}),[],!1,null,null,null));t.default=l.exports}}]);