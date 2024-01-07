"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[471],{4377:function(n,e,r){r.d(e,{Hg:function(){return c},Jh:function(){return l},Ry:function(){return s},qP:function(){return u},yO:function(){return d}});var t=r(5861),o=r(4687),i=r.n(o),a=r(5294);a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.params={api_key:"2c32cf6e2f1b9ee11784c9e34961f238"};var c=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("/trending/all/day");case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching trending movies",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("/search/movie?language=en-US&query=".concat(e));case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching searchFilm",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("movie/".concat(e,"?language=en-US"));case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching movie details",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("movie/".concat(e,"/credits?language=en-US"));case 3:return r=n.sent,t=r.data,console.log("Casts data:",t),n.abrupt("return",t);case 9:throw n.prev=9,n.t0=n.catch(0),console.error("Error fetching casts",n.t0),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.Z.get("movie/".concat(e,"/reviews?language=en-US"));case 3:return r=n.sent,t=r.data,console.log("Reviews data:",t),n.abrupt("return",t);case 9:throw n.prev=9,n.t0=n.catch(0),console.error("Error fetching reviews",n.t0),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},3471:function(n,e,r){r.r(e),r.d(e,{default:function(){return T}});var t,o,i,a,c,s,u,d,l,p,x,f,h,v,g=r(5861),b=r(9439),m=r(4687),Z=r.n(m),w=r(2791),j=r(7689),y=r(1087),k=r(4377),P=r(168),_=r(8445),U=r(861),z=(0,_.ZP)("div")(t||(t=(0,P.Z)(["\n  margin-top: 25px;\n  position: relative;\n"]))),E=(0,_.ZP)("button")(o||(o=(0,P.Z)(["\n  position: absolute;\n  position: fixed;\n  margin-left: 25px;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.5);\n  border: 3px solid #273563;\n  &:hover {\n    background-color: #b3d3ea;\n    color: #2c5777;\n  }\n  &:focus {\n    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);\n  }\n  &:active {\n    background-color: #a0c7e4;\n    box-shadow: none;\n    color: #2c5777;\n  }\n"]))),S=(0,_.ZP)("div")(i||(i=(0,P.Z)(["\n  display: flex;\n  margin: 0 auto;\n  margin-bottom: 15px;\n  border-radius: 20px;\n  box-shadow: 9px 10px 8px -10px rgba(0, 0, 0, 0.1);\n  border: 1px solid #dfe5ed;\n  background-color: #fff;\n  max-width: 1100px;\n  overflow: hidden;\n"]))),C=(0,_.ZP)("img")(a||(a=(0,P.Z)(["\n  max-width: 350px;\n  object-fit: contain;\n  box-shadow: rgba(0, 0, 0, 0.4) -12px 10px 16px 16px;\n"]))),I=(0,_.ZP)("div")(c||(c=(0,P.Z)(["\n  margin: 0 30px 0 30px;\n  padding: 15px;\n"]))),R=(0,_.ZP)("h2")(s||(s=(0,P.Z)(["\n  display: flex;\n  font-size: 35px;\n  justify-content: center;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #000;\n"]))),q=(0,_.ZP)("h3")(u||(u=(0,P.Z)(["\n  font-size: 25px;\n  justify-content: center;\n  padding-left: 25px;\n"]))),O=(0,_.ZP)("div")(d||(d=(0,P.Z)(["\n  font-size: 20px;\n  justify-content: center;\n"]))),B=(0,_.ZP)("ul")(l||(l=(0,P.Z)(["\n  display: flex;\n  gap: 4px;\n  padding-left: 0;\n"]))),F=((0,_.ZP)("li")(p||(p=(0,P.Z)(["\n  display: flex;\n  flex-basis: calc((100% - 3 * 35px) / 4);\n"]))),(0,_.ZP)("ul")(x||(x=(0,P.Z)(["\n  display: flex;\n  margin-top: 30px;\n  gap: 35px;\n  padding-left: 0;\n"])))),H=(0,_.ZP)(U.owl)(f||(f=(0,P.Z)(["\n  margin: 0 auto;\n  stroke: #273563;\n"]))),W=(0,_.ZP)(y.rU)(h||(h=(0,P.Z)(["\n  font-size: 20px;\n  display: flex;\n  padding: 10px;\n  width: 90px;\n  justify-content: center;\n  align-items: center;\n  background-color: #e1ecf4;\n  border-radius: 3px;\n  border: 1px solid #7aa7c7;\n  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;\n  box-sizing: border-box;\n  color: #39739d;\n  &:hover {\n    background-color: #b3d3ea;\n    color: #2c5777;\n  }\n  &:focus {\n    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);\n  }\n  &:active {\n    background-color: #a0c7e4;\n    box-shadow: none;\n    color: #2c5777;\n  }\n"]))),D=(0,_.ZP)("div")(v||(v=(0,P.Z)(["\n  display: flex;\n  padding: 20px;\n  color: #273563;\n  font-size: 20px;\n  justify-content: center;\n  align-items: center;\n"]))),G=r(4438),J=r(9406),L=r(184),T=function(){var n,e,r=(0,j.UO)(),t=(0,w.useState)(null),o=(0,b.Z)(t,2),i=o[0],a=o[1],c=(0,w.useState)(!1),s=(0,b.Z)(c,2),u=s[0],d=s[1],l=(0,j.TH)(),p=null!==(n=null===(e=l.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,w.useEffect)((function(){var n=function(){var n=(0,g.Z)(Z().mark((function n(){var e;return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log("Params:",r),n.next=4,(0,k.qP)(r.movieId);case 4:e=n.sent,a(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error("Error fetching movie details:",n.t0);case 11:return n.prev=11,d(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[r.movieId,r]),i?(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)(z,{children:[u&&(0,L.jsx)(D,{children:(0,L.jsx)(G.a,{})}),(0,L.jsx)(y.rU,{to:p,state:l,children:(0,L.jsx)(E,{type:"button",children:(0,L.jsx)(H,{size:"40"})})}),(0,L.jsxs)(S,{children:[(0,L.jsx)(C,{src:"https://image.tmdb.org/t/p/w500/".concat(i.poster_path),alt:i.title}),(0,L.jsx)("ul",{children:(0,L.jsxs)(I,{children:[(0,L.jsx)("li",{children:(0,L.jsx)(R,{children:i.title})}),(0,L.jsxs)("li",{children:[(0,L.jsx)(q,{children:"Overview"})," ",(0,L.jsx)(O,{children:i.overview})]}),(0,L.jsxs)("li",{children:[(0,L.jsx)(q,{children:"Genres"}),(0,L.jsx)(B,{children:i.genres.map((function(n){var e=n.id,r=n.name;return(0,L.jsxs)(O,{children:[r," /"]},e)}))})]}),(0,L.jsx)("li",{children:(0,L.jsx)("div",{children:(0,L.jsxs)(F,{children:[(0,L.jsx)("li",{children:(0,L.jsx)(W,{to:"/movies/".concat(r.movieId,"/cast"),children:"Cast"})}),(0,L.jsx)("li",{children:(0,L.jsx)(W,{to:"/movies/".concat(r.movieId,"/reviews"),children:"Reviews"})})]})})})]})})]}),(0,L.jsx)(j.j3,{})]})}):(0,L.jsxs)(D,{children:[u&&(0,L.jsx)(G.a,{}),(0,L.jsx)(J.sd,{children:"We are loading movies"})]})}},4438:function(n,e,r){r.d(e,{a:function(){return s}});var t,o=r(4137),i=r(168),a=(0,r(8445).ZP)("div")(t||(t=(0,i.Z)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),c=r(184),s=function(){return(0,c.jsx)(a,{children:(0,c.jsx)(o.s5,{strokeColor:"#4b0082",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},9406:function(n,e,r){r.d(e,{Bu:function(){return l},UB:function(){return d},gx:function(){return u},sd:function(){return p}});var t,o,i,a,c=r(168),s=r(8445),u=(0,s.ZP)("div")(t||(t=(0,c.Z)(["\n  display: flex;\n  margin: 0 auto;\n  margin-top: 20px;\n  border-radius: 20px;\n  box-shadow: 9px 10px 8px -10px rgba(0, 0, 0, 0.1);\n  border: 1px solid #dfe5ed;\n  background-color: #fff;\n  max-width: 1100px;\n  margin-bottom: 20px;\n  justify-content: center;\n  align-items: center;\n"]))),d=(0,s.ZP)("ul")(o||(o=(0,c.Z)(["\n  padding: 10px 40px 10px 40px;\n"]))),l=(0,s.ZP)("p")(i||(i=(0,c.Z)(["\n  color: #122236;\n  text-align: justify;\n"]))),p=(0,s.ZP)("p")(a||(a=(0,c.Z)(["\n  display: flex;\n  color: #122236;\n"])))}}]);
//# sourceMappingURL=471.59947ef3.chunk.js.map