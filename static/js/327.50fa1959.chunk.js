"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[327],{4377:function(n,e,t){t.d(e,{Hg:function(){return s},Jh:function(){return f},Ry:function(){return u},qP:function(){return p},yO:function(){return l}});var r=t(5861),a=t(4687),c=t.n(a),o=t(5294),i="12c32cf6e2f1b9ee11784c9e34961f238";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/trending/all/day?api_key=".concat(i));case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching trending movies",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching searchFilm",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching movie details",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return t=n.sent,r=t.data,console.log("Casts data:",r),n.abrupt("return",r);case 9:throw n.prev=9,n.t0=n.catch(0),console.error("Error fetching casts",n.t0),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return t=n.sent,r=t.data,console.log("Reviews data:",r),n.abrupt("return",r);case 9:throw n.prev=9,n.t0=n.catch(0),console.error("Error fetching reviews",n.t0),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},1327:function(n,e,t){t.r(e),t.d(e,{HomePage:function(){return d}});var r,a=t(5861),c=t(9439),o=t(4687),i=t.n(o),s=t(4377),u=t(3677),p=t(2791),l=t(168),f=(0,t(8445).ZP)("h1")(r||(r=(0,l.Z)(["\n  color: #273563;\n  padding: 5px 0 5px 45px;\n"]))),h=t(184),d=function(){var n=(0,p.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1];return(0,p.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Hg)();case 3:e=n.sent,r(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0.massage);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f,{children:"Trending today"}),(0,h.jsx)(u.s,{films:t})]})}},3677:function(n,e,t){t.d(e,{s:function(){return y}});t(2791);var r,a,c,o,i,s,u,p=t(168),l=t(8445),f=(0,l.ZP)("ul")(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 35px;\n  list-style: none;\n"]))),h=(0,l.ZP)("li")(a||(a=(0,p.Z)(["\n  width: 250px;\n  border-radius: 15px;\n  overflow: hidden;\n"]))),d=((0,l.ZP)("a")(c||(c=(0,p.Z)(["\n  text-decoration: none;\n  &:hover {\n    transform: scale(0.2);\n  }\n"]))),(0,l.ZP)("img")(o||(o=(0,p.Z)(["\n  display: block;\n  height: 100%;\n  object-fit: cover;\n"])))),v=(0,l.ZP)("p")(i||(i=(0,p.Z)(["\n  display: flex;\n  margin: 0 auto;\n  text-align: center;\n  color: white;\n"]))),g=(0,l.ZP)("div")(s||(s=(0,p.Z)(["\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: indigo;\n"]))),x=(0,l.ZP)("div")(u||(u=(0,p.Z)(["\n  width: 100%;\n  height: 370px;\n"]))),m=t(7689),w=t(1087),Z=t(184),y=function(n){var e=n.films,t=(0,m.TH)();return(0,Z.jsx)(f,{children:e.map((function(n){return(0,Z.jsx)(h,{children:(0,Z.jsxs)(w.rU,{to:"/movies/".concat(n.id),state:{from:t},children:[(0,Z.jsx)(x,{children:(0,Z.jsx)(d,{src:n.poster_path?"https://image.tmdb.org/t/p/w500/".concat(n.poster_path):"https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",width:250,alt:"poster"})}),(0,Z.jsx)(g,{children:(0,Z.jsx)(v,{children:n.title||n.name})})]})},n.id)}))})}}}]);
//# sourceMappingURL=327.50fa1959.chunk.js.map