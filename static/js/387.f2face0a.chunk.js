"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r,a=e(439),u=e(689),c=e(791),i=e(975),s=e(168),o=e(686).Z.ul(r||(r=(0,s.Z)(["\n  list-style-type: none;\n"]))),f=e(184),p=function(){var n=(0,u.UO)().movieId,t=(0,c.useState)([]),e=(0,a.Z)(t,2),r=e[0],s=e[1],p=(0,c.useState)(!1),l=(0,a.Z)(p,2),d=l[0],h=l[1];return(0,c.useEffect)((function(){h(!0),(0,i.Bt)(n).then((function(n){s(n)})).catch((function(n){console.log(n)})).finally((function(){h(!1)}))}),[n]),(0,f.jsxs)(f.Fragment,{children:[d&&"loading...",0!==r.length&&(0,f.jsx)("div",{children:(0,f.jsx)(o,{children:r.map((function(n){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h2",{children:["Author: ",n.author]}),(0,f.jsx)("p",{children:n.content})]},n.id)}))})}),0===r.length&&(0,f.jsx)("div",{children:"We don't have any reviews for this movie"})]})}},975:function(n,t,e){e.d(t,{Bt:function(){return p},Ml:function(){return s},Tg:function(){return i},Y5:function(){return o},wL:function(){return f}});var r=e(165),a=e(861),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="f5cf9d53a5e444e3b2e363ad130147b7",i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(c));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.f2face0a.chunk.js.map