"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[942],{1967:function(e,n,r){r.d(n,{Av:function(){return o},BG:function(){return u},uT:function(){return i}});var t=r(5861),a=r(7757),s=r.n(a),c=r(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,t.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:"3698df5e437f17f7b871cad5fa2ce7cd"},e.next=3,c.Z.get("trending/movie/day",{params:n});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:"3698df5e437f17f7b871cad5fa2ce7cd",query:n,include_adult:!1,language:"en-US"},e.next=3,c.Z.get("search/movie",{params:r});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:"3698df5e437f17f7b871cad5fa2ce7cd",language:"en-US"},e.next=3,c.Z.get("movie/".concat(n),{params:r});case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},1942:function(e,n,r){r.r(n),r.d(n,{default:function(){return j}});var t,a=r(5861),s=r(9439),c=r(7757),i=r.n(c),o=r(168),u=r(8617),l=r(1087),d=r(6444),f=r(184),p=(0,d.ZP)(l.OL)(t||(t=(0,o.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  :hover {\n    color: blue;\n  }\n"]))),h=function(e){var n=e.to,r=e.children;return(0,f.jsxs)(p,{to:n,children:[(0,f.jsx)(u.jTe,{size:"12"}),r]})},v=r(7689),x=function(e){var n=e.url,r=e.tag,t=e.title,a=e.score,s=e.overview,c=e.genres;return(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{src:n?"https://image.tmdb.org/t/p/original".concat(n):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsiVE6bpD6TDmfsrz4LwcCRl-TWNy5zq_qFxjkJ3NqeQ4bgotQt5IRpH1m7SBt9f-O1ag&usqp=CAU",alt:r}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:t}),(0,f.jsxs)("p",{children:["User Score: ",Math.round(10*a),"%"]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:s}),(0,f.jsx)("h4",{children:"Genres"}),(0,f.jsx)("ul",{children:c.map((function(e){return(0,f.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,f.jsx)("h2",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)("link",{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)("link",{to:"reviews",children:"Reviews"})})]}),(0,f.jsx)(v.j3,{})]})},g=r(2791),m=r(1967),j=function(){var e,n,r=(0,g.useState)(null),t=(0,s.Z)(r,2),c=t[0],o=t[1],u=(0,v.UO)().movieId,l=v.TH,d=(0,g.useRef)(null!==(e=null===(n=l.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");console.log(d),console.log(d.current),(0,g.useEffect)((function(){console.log("hello"),(0,a.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.BG)(u);case 3:n=e.sent,console.log("hi"),o(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[u]);var p=c.poster_path,j=c.title,w=c.vote_average,b=c.overview,k=c.genres;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h,{to:d.current,children:"Go Back"}),c&&(0,f.jsx)(x,{tag:j,url:p,title:j,score:w,overview:b,genres:k})]})}}}]);
//# sourceMappingURL=942.a1533b86.chunk.js.map