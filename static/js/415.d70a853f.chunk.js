"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{1967:function(n,e,t){t.d(e,{Av:function(){return s},BG:function(){return o},Nf:function(){return p},uT:function(){return i},y8:function(){return f}});var r=t(5861),a=t(7757),u=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var n=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:"3698df5e437f17f7b871cad5fa2ce7cd"},n.next=3,c.Z.get("trending/movie/day",{params:e});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e,t){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={api_key:"3698df5e437f17f7b871cad5fa2ce7cd",query:e,page:t,include_adult:!1,language:"en-US"},n.next=3,c.Z.get("search/movie",{params:r});case 3:return a=n.sent,n.abrupt("return",a.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:"3698df5e437f17f7b871cad5fa2ce7cd",language:"en-US"},n.next=3,c.Z.get("movie/".concat(e),{params:t});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:"3698df5e437f17f7b871cad5fa2ce7cd",language:"en-US"},n.next=3,c.Z.get("movie/".concat(e,"/credits"),{params:t});case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:"3698df5e437f17f7b871cad5fa2ce7cd",language:"en-US"},n.next=3,c.Z.get("movie/".concat(e,"/reviews"),{params:t});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6368:function(n,e,t){var r=t(1544),a=t(7689),u=t(184);e.Z=function(n){var e=n.movies,t=(0,a.TH)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(r.aV,{children:e.map((function(n,e){var a=n.id,c=n.poster_path,i=n.title;return(0,u.jsx)(r.ck,{children:(0,u.jsxs)(r.rU,{to:"/movies/".concat(a),state:{from:t},children:[(0,u.jsx)(r.Ei,{src:c?"https://image.tmdb.org/t/p/original".concat(c):"https://www.reelviews.net/resources/img/default_poster.jpg",alt:"poster movie"}),(0,u.jsx)(r.dk,{children:i})]})},e)}))})})}},1544:function(n,e,t){t.d(e,{Ei:function(){return m},IT:function(){return x},aV:function(){return l},ck:function(){return v},dk:function(){return g},mJ:function(){return h},rU:function(){return Z}});var r,a,u,c,i,s,o,f=t(168),p=t(1087),d=t(6444),l=d.ZP.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  flex-wrap: wrap;\n  gap: 30px;\n  margin-bottom: 20px;\n"]))),v=d.ZP.li(a||(a=(0,f.Z)(["\n  text-align: center;\n\n  width: 300px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),m=d.ZP.img(u||(u=(0,f.Z)(["\n  border: 1px solid lightskyblue;\n  border-radius: 8px;\n  margin-bottom: 5px;\n"]))),g=d.ZP.p(c||(c=(0,f.Z)(["\n  color: lightskyblue;\n"]))),h=d.ZP.ul(i||(i=(0,f.Z)(["\n  list-style-type: none;\n  padding: 0;\n"]))),x=d.ZP.li(s||(s=(0,f.Z)(["\n  list-style-type: none;\n"]))),Z=(0,d.ZP)(p.OL)(o||(o=(0,f.Z)(["\n  text-decoration: none;\n"])))},5415:function(n,e,t){t.r(e);var r=t(5861),a=t(9439),u=t(7757),c=t.n(u),i=t(6368),s=t(2791),o=t(1967),f=t(184);e.default=function(){var n=(0,s.useState)([]),e=(0,a.Z)(n,2),t=e[0],u=e[1],p=(0,s.useState)(!1),d=(0,a.Z)(p,2),l=d[0],v=d[1];return(0,s.useEffect)((function(){v(!0),(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.uT)();case 3:e=n.sent,u(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:return n.prev=10,v(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})))()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.Z,{movies:t}),l&&(0,f.jsx)("div",{children:"Loading..."})]})}}}]);
//# sourceMappingURL=415.d70a853f.chunk.js.map