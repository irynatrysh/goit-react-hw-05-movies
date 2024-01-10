"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[336],{4377:function(n,r,e){e.d(r,{Hg:function(){return c},Jh:function(){return d},Ry:function(){return s},qP:function(){return u},yO:function(){return p}});var t=e(5861),a=e(4687),o=e.n(a),i=e(5294);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"2c32cf6e2f1b9ee11784c9e34961f238"};var c=function(){var n=(0,t.Z)(o().mark((function n(){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/trending/all/day");case 3:return r=n.sent,e=r.data,n.abrupt("return",e);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching trending movies",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(o().mark((function n(r){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/search/movie?language=en-US&query=".concat(r));case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching searchFilm",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(o().mark((function n(r){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(r,"?language=en-US"));case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(0),console.error("Error fetching movie details",n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(r){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(r,"/credits?language=en-US"));case 3:return e=n.sent,t=e.data,console.log("Casts data:",t),n.abrupt("return",t);case 9:throw n.prev=9,n.t0=n.catch(0),console.error("Error fetching casts",n.t0),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(o().mark((function n(r){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(r,"/reviews?language=en-US"));case 3:return e=n.sent,t=e.data,console.log("Reviews data:",t),n.abrupt("return",t);case 9:throw n.prev=9,n.t0=n.catch(0),console.error("Error fetching reviews",n.t0),n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(r){return n.apply(this,arguments)}}()},3336:function(n,r,e){e.r(r),e.d(r,{default:function(){return O}});var t,a,o,i,c,s,u,p,d=e(5861),l=e(9439),f=e(4687),x=e.n(f),h=e(4377),g=e(2791),v=e(7689),m=e(168),w=e(8445),b=(0,w.ZP)("ul")(t||(t=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  row-gap: 50px;\n  align-items: center;\n  justify-content: center;\n  padding-left: 0;\n  padding-bottom: 20px;\n"]))),Z=(0,w.ZP)("li")(a||(a=(0,m.Z)(["\n  width: 200px;\n  height: 310px;\n"]))),j=(0,w.ZP)("div")(o||(o=(0,m.Z)(["\n  height: 200px;\n  width: 200px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-bottom: 5px;\n"]))),y=(0,w.ZP)("img")(i||(i=(0,m.Z)(["\n  width: 200px;\n  height: auto;\n\n  object-fit: cover;\n"]))),k=(0,w.ZP)("div")(c||(c=(0,m.Z)(["\n  display: flex;\n  margin: 0 auto;\n  margin-top: 20px;\n  border-radius: 20px;\n  box-shadow: 9px 10px 8px -10px rgba(0, 0, 0, 0.1);\n  border: 1px solid #dfe5ed;\n  background-color: #fff;\n  max-width: 1100px;\n  overflow: hidden;\n  margin-bottom: 20px;\n"]))),P=(0,w.ZP)("div")(s||(s=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  height: 110px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 20px;\n  box-shadow: 9px 10px 8px -10px rgba(0, 0, 0, 0.1);\n  border: 1px solid #dfe5ed;\n  background-color: rgb(225, 236, 244);\n"]))),_=(0,w.ZP)("p")(u||(u=(0,m.Z)(["\n  display: flex;\n  margin: 0 auto;\n  text-align: center;\n  color: rgb(57, 115, 157);\n  font-size: 20px;\n  margin-bottom: 15px;\n"]))),U=(0,w.ZP)("p")(p||(p=(0,m.Z)(["\n  display: flex;\n  margin: 0 auto;\n  text-align: center;\n  color: rgb(57, 115, 157);\n"]))),E=e(9406),S=e(4438),C=e(184),O=function(){var n=(0,v.UO)().movieId,r=(0,g.useState)(null),e=(0,l.Z)(r,2),t=e[0],a=e[1],o=(0,g.useState)(!1),i=(0,l.Z)(o,2),c=i[0],s=i[1];if((0,g.useEffect)((function(){var r=function(){var r=(0,d.Z)(x().mark((function r(){var e;return x().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,s(!0),r.next=4,(0,h.yO)(n);case 4:e=r.sent,a(e),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("Error fetching casts",r.t0);case 11:return r.prev=11,s(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[n]),c)return(0,C.jsxs)(E.gx,{children:[c&&(0,C.jsx)(S.a,{}),(0,C.jsx)(E.sd,{children:"We are loading the cast of this movie"})]});if(!t||!t.cast||0===t.cast.length)return(0,C.jsxs)(E.gx,{children:[c&&(0,C.jsx)(S.a,{}),(0,C.jsx)(E.sd,{children:"Unfortunately, we do not have data on the cast of this film. We apologize"})]});return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(k,{children:(0,C.jsx)(b,{children:t.cast.map((function(n){var r=n.id,e=n.profile_path,t=n.name,a=n.character;return(0,C.jsxs)(Z,{children:[(0,C.jsx)(j,{children:(0,C.jsx)(y,{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg",alt:t,width:250})}),(0,C.jsxs)(P,{children:[(0,C.jsx)(_,{children:t}),(0,C.jsxs)(U,{children:["Character: ",(0,C.jsx)("br",{}),a]})]})]},r)}))})})})}},4438:function(n,r,e){e.d(r,{a:function(){return s}});var t,a=e(4137),o=e(168),i=(0,e(8445).ZP)("div")(t||(t=(0,o.Z)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),c=e(184),s=function(){return(0,c.jsx)(i,{children:(0,c.jsx)(a.s5,{strokeColor:"#4b0082",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},9406:function(n,r,e){e.d(r,{Bu:function(){return d},UB:function(){return p},gx:function(){return u},sd:function(){return l}});var t,a,o,i,c=e(168),s=e(8445),u=(0,s.ZP)("div")(t||(t=(0,c.Z)(["\n  display: flex;\n  margin: 0 auto;\n  margin-top: 20px;\n  border-radius: 20px;\n  box-shadow: 9px 10px 8px -10px rgba(0, 0, 0, 0.1);\n  border: 1px solid #dfe5ed;\n  background-color: #fff;\n  max-width: 1100px;\n  margin-bottom: 20px;\n  justify-content: center;\n  align-items: center;\n"]))),p=(0,s.ZP)("ul")(a||(a=(0,c.Z)(["\n  padding: 10px 40px 10px 40px;\n"]))),d=(0,s.ZP)("p")(o||(o=(0,c.Z)(["\n  color: #122236;\n  text-align: justify;\n"]))),l=(0,s.ZP)("p")(i||(i=(0,c.Z)(["\n  display: flex;\n  color: #122236;\n"])))}}]);
//# sourceMappingURL=336.8a960ad9.chunk.js.map