(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(t,e){t.exports={ak:"AIzaSyBq6NsJZ7lcXK4_9m95RBI7GLaoBqgGNFE",ad:"remembrall-522f0.firebaseapp.com",pid:"remembrall-522f0",sb:"remembrall-522f0.appspot.com",GOOGLE:"AIzaSyCOXGdZH5uF1O6jmXLc80PSbzSJyVRzdT0",GSEARCH:"010322187392027779852:etpv6mruimg",rapidAPI:"84ff2428fdmshb42d48d6af5a776p10f852jsn922e80e12a04"}},180:function(t,e,n){n(12),n(27),n(53),n(108),n(63),n(65);n(138);function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=encodeURI(t);return new Promise((function(t){try{fetch("https://us-central1-general-prototype-project.cloudfunctions.net/cors-proxy?url=https://www.flickr.com/search/?text=".concat(r)).then((function(t){return t.text()})).then((function(html){for(var r=[],c=/photo-list-photo-view[^>]*url\((.*)\)/g,o=c.exec(html);o;)r.push("https:".concat(o[1])),o=c.exec(html);r=r.slice(n%r.length).slice(0,e),t(r)}))}catch(e){t([])}}))}function c(text){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return text.replace(/\(.*\)/g,"").replace(/[*_-]/g,"").split("\n")[0].toLowerCase().split(t?/[/;.,?¿!+()\[\]{}<>]/:/[  ・/;.,?¿!+()\[\]{}<>]/).reduce((function(t,e){return e.length>t.length?e:t}),"")}e.findImagesForKeyword=r,e.getKeyWord=c;var o=1;e.getRandomImage=function(text){var t=c(text,!0);return o=o%99+1,new Promise((function(e){r(t,1,o).then((function(t){t?e(t[Math.floor(Math.random()*t.length)]):e()}))}))},e.getNumberDueInSet=function(t){var e=Date.now(),n=t.settings?t.settings.maxNewPerDay:999999,r=t.newToday;if(!t.cards)return 0;var c=Math.min(t.cards.reduce((function(t,n){return n.nextReview<e&&n.totalReviews&&n.totalReviews>0&&!n.suspended?t+1:t}),0),t.settings&&t.settings.maxReviewsPerDay?t.settings.maxReviewsPerDay-t.reviewsToday:999999),o=t.cards.reduce((function(t,e){return e.totalReviews&&0!==e.totalReviews||e.suspended?t:t+1}),0);return c+Math.min(n-Math.min(r,n),o)},e.msToString=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t<0?"-":"";n&&(t*=-1);var r=Math.floor(t/1e3),c=Math.floor(r/31536e3);r-=60*c*60*24*365;var o=Math.floor(r/86400);r-=60*o*60*24;var d=Math.floor(r/3600);r-=60*d*60;var l=Math.floor(r/60),f=r-=60*l;return f<10&&l>0&&(f="0".concat(f)),c||o||d||l?c||o||d?c||o?c?"".concat(n).concat(c,"y").concat(!e&&o?" ".concat(o,"d"):""):"".concat(n).concat(o,"d").concat(!e&&d?" ".concat(d,"h"):""):"".concat(n).concat(d,"h").concat(!e&&l?" ".concat(l,"m"):""):"".concat(n).concat(l).concat(!e&&f?":".concat(f):"m"):"".concat(n).concat(f,"s")}},183:function(t,e,n){var r,c=n(236);function o(){if("object"===("undefined"==typeof localStorage?"undefined":c(localStorage)))try{localStorage.setItem("localStorage",1),localStorage.removeItem("localStorage"),r=!0}catch(t){r=!1,console.log("LocalStorage is unavailable. Reverting to Cookies as a fallback.")}else r=!1}function d(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=new Date;r.setTime(r.getTime()+31536e6*(n?-1:1));var c="expires="+r.toUTCString();document.cookie=t+"="+e+";"+c+";path=/"}n(38),n(27),n(108),e.list=function(t){for(var e=[],n=Object.keys(localStorage),i=n.length;i--;)e.push(localStorage.getItem(n[i]));return e},e.set=function(t,e){var n=Array.isArray(e)||"object"===c(e)?encodeURI(JSON.stringify(e)):e;void 0===r&&o(),r?localStorage.setItem(t,n):d(t,e)},e.remove=function(t){void 0===r&&o(),r?localStorage.removeItem(t):d(t,"",!0)},e.get=function(t){void 0===r&&o();var e=r?localStorage.getItem(t):function(t){for(var e=t+"=",n=decodeURIComponent(document.cookie).split(";"),i=0;i<n.length;i++){for(var r=n[i];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(e))return r.substring(e.length,r.length)}return""}(t);return e}},189:function(t,e,n){n(190),t.exports=n(191)},232:function(t,e,n){var content=n(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(107).default)("5c670272",content,!0,{sourceMap:!1})},233:function(t,e,n){var r=n(106)(!1);r.push([t.i,".textcenter{text-align:center}.textright{text-align:right}.sub{font-size:.85em}.fade,.sub{opacity:.7}.sub.fade{opacity:.5}.fakelink{text-decoration:underline;cursor:pointer}",""]),t.exports=r},234:function(t,e,n){"use strict";n.r(e);n(36),n(73),n(74);var r=n(25),c=(n(45),n(38),n(182),n(12),n(235),n(35),n(37),n(34),n(44)),o=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=n(183),S=n(237),v=n(180).getNumberDueInSet;function m(){return{id:Date.now(),name:"New set",settings:{maxNewPerDay:10,maxReviewsPerDay:50,languageTools:"none",studyReverse:!1},lastUpdated:Date.now(),newToday:0,reviewsToday:0,cards:[]}}o.a.use(c.a),e.default=function(){return new c.a.Store({state:{currentUser:null,setList:{},currentSetId:null,appState:"study",isMobile:!1,pauseDbSets:!1,isEditingText:!1},mutations:{setUsername:function(t,e){t.currentUser=e,f.set("currentUser",e)},setSetList:function(t,e){t.setList=e},setCurrentSetId:function(t,e){t.currentSetId=e,"user"===t.appState&&(t.appState="study"),f.set("currentSetId",e)},logOut:function(t){f.remove("currentUser"),f.remove("currentSetId"),t.currentUser=null,t.setList=[],t.currentSetId=null},setAppWidth:function(t,e){t.isMobile=parseInt(e)<=768},setPauseDbSets:function(t,e){t.pauseDbSets=e},setIsEditingText:function(t,e){t.isEditingText=e},setAppState:function(t,e){t.appState=e||"study"},updateSetName:function(t,e){o.a.set(t.setList[t.currentSetId],"name",e),o.a.set(t.setList[t.currentSetId],"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:t.currentSetId,name:t.setList[t.currentSetId].name,lastUpdated:t.setList[t.currentSetId].lastUpdated},"updating set name")},updateSetSettings:function(t,e){for(var param in e)t.setList[t.currentSetId].settings||(t.setList[t.currentSetId].settings={}),o.a.set(t.setList[t.currentSetId].settings,param,e[param]);o.a.set(t.setList[t.currentSetId],"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:t.currentSetId,settings:t.setList[t.currentSetId].settings,lastUpdated:t.setList[t.currentSetId].lastUpdated},"updating set settings")},addSet:function(t){var e=m();t.setList[e.id]=e,t.currentSetId=e.id,f.set("currentSetId",e.id),t.pauseDbSets||S.setSet(t.currentUser,e)},uploadSet:function(t,e){var n=m();for(var r in e)"id"!==r&&(n[r]=e[r]);t.setList[n.id]=n,t.currentSetId=n.id,f.set("currentSetId",n.id),t.pauseDbSets||S.setSet(t.currentUser,n)},deleteSet:function(t,e){o.a.delete(t.setList,e),t.currentSetId=Object.keys(t.setList)[0],t.pauseDbSets||S.deleteSet(t.currentUser,e)},resetSetDay:function(t,e){o.a.set(t.setList[e],"newToday",0),o.a.set(t.setList[e],"reviewsToday",0),o.a.set(t.setList[e],"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:e,newToday:0,reviewsToday:0,lastUpdated:t.setList[e].lastUpdated},"resetting set day")},addCard:function(t,e){var n=t.setList[t.currentSetId].cards||[];n.push(l(l({},e),{},{id:Date.now()})),o.a.set(t.setList[t.currentSetId],"cards",n),o.a.set(t.setList[t.currentSetId],"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:t.currentSetId,cards:n,lastUpdated:t.setList[t.currentSetId].lastUpdated},"adding card")},updateCard:function(t,e){var n;for(var r in t.setList)if(t.setList[r].cards&&t.setList[r].cards.find((function(t){return t.id===e.id}))){n=parseInt(r);break}if(!n)return console.log("No card found by the id",e.id,"in any deck.");var c=t.setList[n].cards.findIndex((function(t){return t.id===e.id}));if(void 0!==c)for(var param in e)o.a.set(t.setList[n].cards[c],param,e[param]);o.a.set(t.setList[n],"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:n,cards:t.setList[n].cards,lastUpdated:t.setList[n].lastUpdated},"updating card")},studyCard:function(t,e){var n=t.setList[t.currentSetId].cards.findIndex((function(t){return t.id===e.id}));if(void 0!==n)for(var param in e)o.a.set(t.setList[t.currentSetId].cards[n],param,e[param]);new Date(t.setList[t.currentSetId].lastUpdated).getDate()!==(new Date).getDate()&&(o.a.set(t.setList[t.currentSetId],"newToday",0),o.a.set(t.setList[t.currentSetId],"reviewsToday",0)),e.totalReviews<=1?o.a.set(t.setList[t.currentSetId],"newToday",t.setList[t.currentSetId].newToday?t.setList[t.currentSetId].newToday+1:1):o.a.set(t.setList[t.currentSetId],"reviewsToday",t.setList[t.currentSetId].reviewsToday?t.setList[t.currentSetId].reviewsToday+1:1),o.a.set(t.setList[t.currentSetId],"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:t.currentSetId,lastUpdated:t.setList[t.currentSetId].lastUpdated,newToday:t.setList[t.currentSetId].newToday,reviewsToday:t.setList[t.currentSetId].reviewsToday,cards:t.setList[t.currentSetId].cards},"studying card")},deleteCard:function(t,e){var n;for(var r in t.setList)if(t.setList[r].cards&&t.setList[r].cards.find((function(t){return t.id===e}))){n=t.setList[r];break}if(!n)return console.log("No card found by the id",e,"in any deck.");var c=n.cards.filter((function(t){return t.id!==e}));o.a.set(n,"cards",c),o.a.set(n,"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:n.id,cards:n.cards,lastUpdated:n.lastUpdated})},moveCard:function(t,e){var n=e.id,r=e.from,c=e.to;if(r==c)return console.log("Same set!");var d=t.setList[r].cards.find((function(t){return t.id===n}));if(d){d.set=c;var l=t.setList[c].cards;l.push(d),o.a.set(t.setList[c],"cards",l),o.a.set(t.setList[c],"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:c,cards:t.setList[c].cards,lastUpdated:t.setList[c].lastUpdated},"moving card to new set");var f=t.setList[r].cards.filter((function(t){return t.id!==n}));o.a.set(t.setList[r],"cards",f),o.a.set(t.setList[r],"lastUpdated",Date.now()),t.pauseDbSets||S.updateSet(t.currentUser,{id:t.setList[r].id,cards:t.setList[r].cards,lastUpdated:t.setList[r].lastUpdated},"deleting moved card from old set")}}},actions:{logInAs:function(t,e){var n=t.commit,r=t.state;S.getAllSets(e).then((function(t){var c=t.docs,o=t.empty;if(o&&e===r.currentUser)return console.log("dc"),n("setPauseDbSets",!1);var d={};c.forEach((function(t){var e=t.data();d[e.id]=e}));var v=function(t){if(!d[t].cards)return"continue";d[t].cards=d[t].cards.map((function(e){return l(l({},e),{},{set:parseInt(t)})}))};for(var m in d)v(m);if(!r.currentUser&&o&&(console.log("first"),S.newUser(e)),!o&&e===r.currentUser)for(var h in d)r.setList[h]?d[h].lastUpdated<r.setList[h].lastUpdated&&(f.set("".concat(h),d[h].cards),console.log("old version of set ".concat(d[h].name," in database. skipping update from database."),d[h].lastUpdated,r.setList[h].lastUpdated,d[h],r.setList[h]),d[h]=r.setList[h]):console.log("Deck "+h+" has been created elsewhere, and will now be loaded.");n("setUsername",e),n("setSetList",d),n("setCurrentSetId",d[f.get("currentSetId")]?f.get("currentSetId"):Object.keys(d)[0]),n("setPauseDbSets",!1)}))},goToNextSet:function(t){var e=t.commit,n=t.state,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=Object.keys(n.setList);if(r&&(c=c.filter((function(t){return v(n.setList[t])>0}))),0!==c.length){var o=c[(c.indexOf(n.currentSetId)+1)%c.length];e("setCurrentSetId",o)}},goToPreviousSet:function(t){var e=t.commit,n=t.state,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],c=Object.keys(n.setList);if(r&&(c=c.filter((function(t){return v(n.setList[t])>0}))),0!==c.length){var o=c[(c.indexOf(n.currentSetId)-1+c.length)%c.length];e("setCurrentSetId",o)}}}})}},237:function(t,e,n){"use strict";n.r(e),n.d(e,"newUser",(function(){return y})),n.d(e,"updateSet",(function(){return L})),n.d(e,"setSet",(function(){return I})),n.d(e,"deleteSet",(function(){return U})),n.d(e,"getAllSets",(function(){return D}));n(64),n(35),n(12),n(66),n(67);var r=n(9),c=(n(61),n(65),n(34),n(178)),o=n(20),d=n(138),l=Object(c.a)({apiKey:d.ak,authDomain:d.ad,projectId:d.pid,storageBucket:d.sb}),f=Object(o.f)(l),S="users",v="sets";function m(t,e){return new Promise(function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){var c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("adding set",e),c=Object(o.c)(f,"".concat(S,"/").concat(t,"/").concat(v,"/").concat(e.id)),n.prev=2,n.next=5,Object(o.g)(c,e);case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(2),console.log("error",n.t0);case 10:r("set set success!");case 11:case"end":return n.stop()}}),n,null,[[2,7]])})));return function(t){return n.apply(this,arguments)}}())}var h=!1,w=[];function y(t){w.push({type:"newUser",user:t})}function L(t,e,n){w.push({type:"updateSet",user:t,set:e})}function I(t,e){w.push({type:"setSet",user:t,set:e})}function U(t,e){w.push({type:"deleteSet",user:t,setId:e})}setInterval((function(){if(!h&&w.length)try{h=!0;var t=w.shift();if("newUser"===t.type)(n=t.user,new Promise(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object(o.c)(f,"".concat(S,"/").concat(n)),t.next=3,Object(o.g)(r,{});case 3:e("create new user success!");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())).then((function(t){h=!1,Date.now()})).catch((function(t){h=!1}));else if("updateSet"===t.type){var e=w.filter((function(e){var n;return"updateSet"===e.type&&(null===(n=e.set)||void 0===n?void 0:n.id)===t.set.id}));e.length&&(t=e[e.length-1],console.log("skipping ".concat(e.length," queued update/s for same set, jumping ahead to most recent update"),t.set.id),w=w.filter((function(t){return!e.includes(t)}))),console.log("Updating set in db",t.set.id,"..."),function(t,e){return new Promise(function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){var c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=Object(o.c)(f,"".concat(S,"/").concat(t,"/").concat(v,"/").concat(e.id)),n.prev=1,n.next=4,Object(o.h)(c,e);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log("failed to update set",n.t0);case 9:r("update set success!");case 10:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(t){return n.apply(this,arguments)}}())}(t.user,t.set).then((function(e){if("not-found"===e.code)return m(t.user,t.set).then((function(t){h=!1,Date.now()}));console.log("Done updating set in db",t.set.id),h=!1,Date.now()})).catch((function(t){h=!1}))}else"setSet"===t.type?m(t.user,t.set).then((function(t){h=!1,Date.now()})).catch((function(t){h=!1})):"deleteSet"===t.type?function(t,e){return new Promise(function(){var n=Object(r.a)(regeneratorRuntime.mark((function n(r){var c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=Object(o.c)(f,"".concat(S,"/").concat(t,"/").concat(v,"/").concat(e)),n.next=3,Object(o.b)(c);case 3:r("delete set successful");case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())}(t.user,t.setId).then((function(t){h=!1,Date.now()})).catch((function(t){h=!1})):(console.log("invalid db update, skipping..."),h=!1)}catch(t){console.log("failed to update db:",t),h=!1}var n}),100);var D=function(t){return new Promise(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){var r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(o.a)(f,"".concat(S,"/").concat(t,"/").concat(v)),e.next=3,Object(o.e)(r);case 3:c=e.sent,console.log("got sets",c.docs.map((function(t){return t.data()}))),n(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},[[189,32,5,33]]]);