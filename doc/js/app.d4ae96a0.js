(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"150b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("custom-header"),n("router-view"),n("custom-footer")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("div",{staticClass:"logo"}),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)])])},i=[],c={},l=c,u=n("2877"),p=Object(u["a"])(l,s,i,!1,null,null,null),f=p.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("h1",[t._v("Footer")])])}],v={},g=v,m=Object(u["a"])(g,d,h,!1,null,null,null),b=m.exports,_={name:"Home",components:{"custom-header":f,"custom-footer":b}},y=_,w=Object(u["a"])(y,o,a,!1,null,null,null),P=w.exports,j=(n("150b"),n("8c4f")),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-container",{attrs:{fluid:""}},[[n("v-row",t._l(t.displayedPosts,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",sm:"6",md:"4",lg:"6"}},[n("v-card",[n("router-link",{staticClass:"post-links font-weight-regular",attrs:{to:{name:"PostDetails",params:{id:e.id}}}},[n("v-card-title",{staticClass:"subheading font-weight-normal"},[n("h3",[t._v(t._s(e.id))])]),n("v-divider"),n("v-card-title",{staticClass:"font-weight-regular"},[n("h3",[t._v(t._s(e.title))])])],1)],1)],1)})),1)],[n("v-row",{staticClass:"mt-9",attrs:{align:"center",justify:"center"}},[1!=t.page?n("v-btn",{staticClass:"mr-1",attrs:{fab:"",dark:"",color:"blue darken-3"},on:{click:function(e){t.page--}}},[n("v-icon",[t._v("mdi-chevron-left")])],1):t._e(),t._l(t.pages.slice(t.page-1,t.page+5),(function(e){return n("v-btn",{key:e,staticClass:"mr-1",attrs:{fab:"",dark:"",color:"blue darken-3"},on:{click:function(n){t.page=e}}},[t._v(" "+t._s(e)+" ")])})),t.page<t.pages.length?n("v-btn",{staticClass:"mr-1",attrs:{fab:"",dark:"",color:"blue darken-3"},on:{click:function(e){t.page++}}},[n("v-icon",[t._v("mdi-chevron-right")])],1):t._e()],2)]],2)],1)},O=[],C=(n("fb6a"),n("bc3a")),x=n.n(C),V={data:function(){return{posts:[],baseUrl:"https://jsonplaceholder.typicode.com/",page:1,perPage:10,pages:[]}},methods:{getPosts:function(){var t=this;x.a.get(this.baseUrl+"posts").then((function(e){t.posts=e.data})).catch((function(t){console.log(t)}))},setPages:function(){for(var t=Math.ceil(this.posts.length/this.perPage),e=1;e<=t;e++)this.pages.push(e)},paginate:function(t){var e=this.page,n=this.perPage,r=e*n-n,o=e*n;return t.slice(r,o)}},computed:{displayedPosts:function(){return this.paginate(this.posts)}},watch:{posts:function(){this.setPages()}},created:function(){this.getPosts()}},$=V,E=n("6544"),M=n.n(E),S=n("7496"),T=n("8336"),D=n("b0af"),H=n("99d9"),A=n("62ad"),J=n("a523"),U=n("ce7e"),B=n("132d"),F=n("0fd9"),I=Object(u["a"])($,k,O,!1,null,null,null),L=I.exports;M()(I,{VApp:S["a"],VBtn:T["a"],VCard:D["a"],VCardTitle:H["a"],VCol:A["a"],VContainer:J["a"],VDivider:U["a"],VIcon:B["a"],VRow:F["a"]});var N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.post?n("div",{staticClass:"post-page"},[n("h1",[t._v("Post No "+t._s(t.post.id))]),n("h2",[t._v(t._s(t.post.title))]),n("p",[t._v(" "+t._s(t.post.body)+" ")])]):n("div",[t._v("Loading posts...")])])},R=[],q=(n("d3b7"),{props:["id"],data:function(){return{post:null}},mounted:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/posts/"+this.id).then((function(t){return t.json()})).then((function(e){return t.post=e})).catch((function(t){return console.log(t.message)}))}}),z=q,G=Object(u["a"])(z,N,R,!1,null,null,null),K=G.exports;M()(G,{VApp:S["a"]}),r["a"].use(j["a"]);var Q=[{path:"/",name:"Home",component:L},{path:"/posts/:id",name:"PostDetails",component:K,props:!0}],W=new j["a"]({mode:"history",base:"/",routes:Q}),X=n("f309");r["a"].use(X["a"]);var Y=new X["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:W,vuetify:Y,render:function(t){return t(P)}}).$mount("#app")}});
//# sourceMappingURL=app.d4ae96a0.js.map