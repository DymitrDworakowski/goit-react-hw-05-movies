"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[602],{183:function(n,e,t){t.d(e,{Z:function(){return d}});var r,a,u,o=t(689),i=t(168),c=t(686),s=t(87),f=c.Z.ul(r||(r=(0,i.Z)(["\n  list-style-type: none;\n"]))),p=c.Z.li(a||(a=(0,i.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),l=(0,c.Z)(s.rU)(u||(u=(0,i.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: blue;\n  }\n"]))),h=t(184),d=function(n){var e=n.films,t=(0,o.TH)();return(0,h.jsx)(f,{children:e.map((function(n){return(0,h.jsx)(p,{children:(0,h.jsx)(l,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})}},602:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r,a,u,o=t(439),i=t(791),c=t(183),s=t(168),f=t(686),p=f.Z.form(r||(r=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n"]))),l=f.Z.input(a||(a=(0,s.Z)(["\n  padding: 12px 14px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 20px;\n  margin-right: 10px;\n  outline: none;\n\n  &:hover {\n    color: blue;\n    \n  }\n"]))),h=f.Z.button(u||(u=(0,s.Z)(["\n  padding: 12px 12px;\n  font: inherit;\n  cursor: pointer;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  \n\n  &:hover {\n    color: blue;\n    \n  }\n"]))),d=t(184),v=function(n){var e=n.searchMovies,t=(0,i.useState)(""),r=(0,o.Z)(t,2),a=r[0],u=r[1];return(0,d.jsxs)(p,{onSubmit:function(n){n.preventDefault(),e(a.toLowerCase())},children:[(0,d.jsx)(l,{type:"text",name:"query",autoFocus:!0,value:a,onChange:function(n){u(n.target.value)}}),(0,d.jsx)(h,{type:"submit",children:"Search"})]})},Z=t(975),g=t(87),x=function(){var n=(0,i.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,i.useState)(!1),u=(0,o.Z)(a,2),s=u[0],f=u[1],p=(0,g.lr)(),l=(0,o.Z)(p,2),h=l[0],x=l[1],m=h.get("query");(0,i.useEffect)((function(){m&&(0,Z.Ml)(m).then((function(n){r(n),f(0===n.length)})).catch((function(n){console.log(n)}))}),[m]);return(0,d.jsxs)("main",{children:[(0,d.jsx)(v,{searchMovies:function(n){x({query:n})}}),s&&(0,d.jsx)("p",{children:"There is no movies with this request. Please, try again"}),t&&(0,d.jsx)(c.Z,{films:t})]})}},975:function(n,e,t){t.d(e,{Bt:function(){return p},Ml:function(){return c},Tg:function(){return i},Y5:function(){return s},wL:function(){return f}});var r=t(165),a=t(861),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="f5cf9d53a5e444e3b2e363ad130147b7",i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=602.d3d34524.chunk.js.map