"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[614],{1967:function(n,e,t){t.d(e,{Av:function(){return u},BG:function(){return s},Nf:function(){return d},uT:function(){return c},y8:function(){return p}});var r=t(5861),a=t(7757),i=t.n(a),o=t(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={api_key:"3698df5e437f17f7b871cad5fa2ce7cd"},n.next=3,o.Z.get("trending/movie/day",{params:e});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={api_key:"3698df5e437f17f7b871cad5fa2ce7cd",query:e,page:t,include_adult:!1,language:"en-US"},n.next=3,o.Z.get("search/movie",{params:r});case 3:return a=n.sent,n.abrupt("return",a.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:"3698df5e437f17f7b871cad5fa2ce7cd",language:"en-US"},n.next=3,o.Z.get("movie/".concat(e),{params:t});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:"3698df5e437f17f7b871cad5fa2ce7cd",language:"en-US"},n.next=3,o.Z.get("movie/".concat(e,"/credits"),{params:t});case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={api_key:"3698df5e437f17f7b871cad5fa2ce7cd",language:"en-US"},n.next=3,o.Z.get("movie/".concat(e,"/reviews"),{params:t});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6368:function(n,e,t){var r=t(1544),a=t(7689),i=t(184);e.Z=function(n){var e=n.movies,t=(0,a.TH)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.aV,{children:e.map((function(n,e){var a=n.id,o=n.poster_path,c=n.title;return(0,i.jsx)(r.ck,{children:(0,i.jsxs)(r.rU,{to:"/movies/".concat(a),state:{from:t},children:[(0,i.jsx)(r.Ei,{src:o?"https://image.tmdb.org/t/p/original".concat(o):"https://www.reelviews.net/resources/img/default_poster.jpg",alt:"poster movie"}),(0,i.jsx)(r.dk,{children:c})]})},e)}))})})}},1544:function(n,e,t){t.d(e,{Ei:function(){return g},IT:function(){return v},aV:function(){return f},ck:function(){return h},dk:function(){return x},mJ:function(){return m},rU:function(){return b}});var r,a,i,o,c,u,s,p=t(168),d=t(1087),l=t(6444),f=l.ZP.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n  flex-wrap: wrap;\n  gap: 30px;\n  margin-bottom: 20px;\n"]))),h=l.ZP.li(a||(a=(0,p.Z)(["\n  text-align: center;\n\n  width: 300px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),g=l.ZP.img(i||(i=(0,p.Z)(["\n  border: 1px solid lightskyblue;\n  border-radius: 8px;\n  margin-bottom: 5px;\n"]))),x=l.ZP.p(o||(o=(0,p.Z)(["\n  color: lightskyblue;\n"]))),m=l.ZP.ul(c||(c=(0,p.Z)(["\n  list-style-type: none;\n  padding: 0;\n"]))),v=l.ZP.li(u||(u=(0,p.Z)(["\n  list-style-type: none;\n"]))),b=(0,l.ZP)(d.OL)(s||(s=(0,p.Z)(["\n  text-decoration: none;\n"])))},5614:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,i,o,c,u=t(3433),s=t(5861),p=t(9439),d=t(7757),l=t.n(d),f=t(168),h=t(6444),g=h.ZP.button(r||(r=(0,f.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 15px;\n  border: 0;\n  border-radius: 7px;\n  color: white;\n  background-color: lightskyblue;\n  cursor: pointer;\n  margin-bottom: 20px;\n\n  &:hover {\n    background-color: lightblue;\n  }\n\n  &:active {\n    background-color: #62afc9;\n  }\n"]))),x=t(184),m=function(n){var e=n.loader;return(0,x.jsx)(g,{onClick:e,children:"Load More"})},v=t(6368),b=t(2791),Z=t(5705),w=(0,h.ZP)(Z.l0)(a||(a=(0,f.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 15px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #47ced3;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),k=h.ZP.button(i||(i=(0,f.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),y=h.ZP.span(o||(o=(0,f.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),j=(0,h.ZP)(Z.gN)(c||(c=(0,f.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  background-color: #47ced3;\n  color: white;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),_=t(3728),S=t(7596),P=function(n){var e=n.onSearch,t=(0,b.useState)(""),r=(0,p.Z)(t,2),a=r[0],i=r[1];return(0,x.jsx)(Z.J9,{initialValues:{search:""},children:(0,x.jsxs)(w,{onSubmit:function(n){n.preventDefault(),""!==a.trim()?e(a):S.Am.warn("Input search query")},children:[(0,x.jsxs)(k,{type:"submit",children:[(0,x.jsx)(_.Vph,{}),(0,x.jsx)(y,{children:"Search"})]}),(0,x.jsx)(j,{type:"text",name:"search",autoFocus:!0,placeholder:"Search images and photos",value:a,onChange:function(n){i(n.currentTarget.value.toLowerCase())}})]})})},U=t(1087),z=t(1967),C=function(){var n=(0,b.useState)([]),e=(0,p.Z)(n,2),t=e[0],r=e[1],a=(0,b.useState)(1),i=(0,p.Z)(a,2),o=i[0],c=i[1],d=(0,b.useState)(!1),f=(0,p.Z)(d,2),h=f[0],g=f[1],Z=(0,U.lr)(),w=(0,p.Z)(Z,2),k=w[0],y=w[1],j=k.get("query");(0,b.useEffect)((function(){j&&(g(!0),(0,s.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,z.Av)(j,o);case 3:e=n.sent,r((function(n){return[].concat((0,u.Z)(n),(0,u.Z)(e))})),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:return n.prev=10,g(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})))())}),[j,o]);var _=function(){c(o+1)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(P,{onSearch:function(n){y({query:n})}}),(0,x.jsx)(v.Z,{movies:t,loader:_}),h&&(0,x.jsx)("div",{children:"Loading..."}),0!==t.length&&!h&&(0,x.jsx)(m,{loader:_})]})}}}]);
//# sourceMappingURL=614.32db53e1.chunk.js.map