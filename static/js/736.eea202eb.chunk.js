"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r,a,c=e(439),u=e(689),i=e(791),o=e(975),s=e(168),p=e(686),f=p.Z.ul(r||(r=(0,s.Z)(["\n  list-style-type: none;\n"]))),l=p.Z.p(a||(a=(0,s.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),d=e(184),h=function(){var n=(0,u.UO)().movieId,t=(0,i.useState)([]),e=(0,c.Z)(t,2),r=e[0],a=e[1],s=(0,i.useState)(!1),p=(0,c.Z)(s,2),h=p[0],v=p[1];return(0,i.useEffect)((function(){v(!0),(0,o.wL)(n).then((function(n){a(n)})).catch((function(n){console.log(n)})).finally((function(){v(!1)}))}),[n]),(0,d.jsxs)("div",{children:[h,(0,d.jsx)(f,{children:r.map((function(n){var t=n.id,e=n.profile_path,r=n.original_name,a=n.name,c=n.character;return(0,d.jsxs)("li",{children:[(0,d.jsx)("img",{width:"200px",src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:r}),(0,d.jsx)(l,{children:a}),(0,d.jsxs)(l,{children:["Character: ",c]})]},t)}))})]})}},975:function(n,t,e){e.d(t,{Bt:function(){return f},Ml:function(){return o},Tg:function(){return i},Y5:function(){return s},wL:function(){return p}});var r=e(165),a=e(861),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="992758a4802a699e8df27d4d6efc34fb",i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.eea202eb.chunk.js.map