"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[143],{53265:(e,t,n)=>{var a=n(26427),r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)};r._withStripped=!0;var o=n(40810),i=(0,o.Z)({name:"app"},r,[],!1,null,"7ba5bd90",null);i.options.__file="src/App.vue";const s=i.exports;var l=n(47595);a.default.use(l.Z);var p=[{name:"welcome to webpack vue",path:"/",redirect:"/login"},{name:"登录",path:"/login",component:function(){return Promise.all([n.e(186),n.e(564)]).then(n.bind(n,9564))}},{name:"主页",path:"/home",component:function(){return n.e(483).then(n.bind(n,43483))},children:[{name:"第一期",path:"/page-v1",component:function(){return Promise.all([n.e(454),n.e(992)]).then(n.bind(n,66992))}},{name:"第二期",path:"/page-v2",component:function(){return n.e(742).then(n.bind(n,96742))}},{name:"第三期",path:"/page-v3",component:function(){return Promise.all([n.e(454),n.e(946)]).then(n.bind(n,84946))}},{name:"第四期",path:"/page-v4",component:function(){return Promise.all([n.e(186),n.e(246)]).then(n.bind(n,53246))}}]},{path:"*",redirect:"/home"}],c=new l.Z({mode:"history",base:"/",routes:p});c.beforeEach((function(e,t,n){document.title=e.name,n()}));const u=c;var d=n(77382);a.default.use(d.ZP);const m=new d.ZP.Store({strict:!1,state:{},getters:{},mutations:{},actions:{},modules:{}});var h=n(16396),f=n.n(h),v=(n(36391),n(42751)),_=n.n(v),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pre-loader"},[e.isLoading?n("div",{staticClass:"wrapper"},[e._m(0)]):e._e()])};w._withStripped=!0;const b={name:"pre-load",props:{isLoading:{type:Boolean,default:!1}}};var g=(0,o.Z)(b,w,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"loading"},[t("div",{staticClass:"inner one"}),t("div",{staticClass:"inner two"}),t("div",{staticClass:"inner three"})])}],!1,null,"0102cdef",null);g.options.__file="src/components/pre-loader/pre-loader.vue";const C=g.exports;a.default.use(f()),a.default.use(_()),a.default.component("pre-loader",C);var P=new a.default({el:"#app",router:u,store:m,render:function(e){return e(s)}});window.__app__=P}},e=>{e.O(0,[998],(()=>(53265,e(e.s=53265)))),e.O()}]);