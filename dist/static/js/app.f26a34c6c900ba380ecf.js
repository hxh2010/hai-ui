webpackJsonp([3],{"13xi":function(t,e){},2355:function(t,e){},FSro:function(t,e){t.exports={"指南":[{name:"giud",path:"/giud",desc:"介绍"},{name:"install",path:"/install",desc:"安装"},{name:"start",path:"/start",desc:"开始"}],"组件":[{desc:"basic",path:"/component",items:[{desc:"Icon 图标",name:"icon",path:"/icon"},{desc:"Button 按钮",name:"button",path:"/button"}]},{desc:"notice",path:"/component",items:[{desc:"message 消息提示",name:"message",path:"/message"}]},{desc:"others",path:"/component",items:[{desc:"carousel 走马灯",name:"carousel",path:"/carousel"}]}],"笔记":[{name:"test",path:"/test",type:"other"},{name:"create",path:"/create",desc:"项目创建"},{name:"markdown",path:"/markdown",desc:"Markdown"},{name:"theme",path:"/theme",desc:"样式管理"},{name:"iconfont",path:"/iconfont",desc:"Iconfont"}]}},Hnyh:function(t,e,n){"use strict";var s=n("+VlJ"),o={success:"emoji",info:"prompt",warning:"remind",error:"delete"},i={data:function(){return{visible:!1,message:"",duration:3e3,type:"info",iconClass:"",customClass:"",onClose:null,showClose:!0,closed:!1,timer:null,isButton:!1,buttonText:[],buttonConfirm:null}},computed:{typeClass:function(){return this.type&&!this.iconClass?"h-message__icon h-icon-"+o[this.type]:""}},watch:{closed:function(t){t&&(this.visible=!1,this.$el.addEventListener("transitionend",this.destroyElement))}},methods:{destroyElement:function(){this.$el.removeEventListener("transitionend",this.destroyElement),this.$destroy(!0),this.$el.parentNode.removeChild(this.$el)},close:function(t){t&&(this.buttonConfirm=t),this.closed=!0,"function"==typeof this.onClose&&this.onClose(this)},clearTimer:function(){clearTimeout(this.timer)},startTimer:function(){var t=this;this.duration>0&&(this.timer=setTimeout(function(){t.closed||t.close()},this.duration))},keydown:function(t){27===t.keyCode&&(this.closed||this.close())}},mounted:function(){this.startTimer(),document.addEventListener("keydown",this.keydown),this.isButton&&(this.duration=0,this.buttonText&&1===this.buttonText.length?this.buttonText[1]="取消":this.buttonText&&this.buttonText.length||(this.buttonText[0]="确定",this.buttonText[1]="取消"))},beforeDestroy:function(){document.removeEventListener("keydown",this.keydown)}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"h-message-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"h-message",on:{click:t.close}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"h-message__body",class:["h-message","h-message--"+t.type,t.customClass],on:{mouseenter:t.clearTimer,mouseleave:t.startTimer}},[t.isButton?n("div",{staticClass:"h-message--button"},[n("div",{staticClass:"h-message__message"},[t._v("\n          "+t._s(t.message)+"\n        ")]),t._v(" "),n("h-button",{attrs:{type:"error"===t.type?"danger":t.type},on:{click:function(e){t.close(t.buttonText[0])}}},[t._v(t._s(t.buttonText[0]))]),t._v(" "),n("h-button",{attrs:{type:"info",plain:""},on:{click:function(e){t.close(t.buttonText[1])}}},[t._v(t._s(t.buttonText[1]))])],1):n("div",[t.iconClass?n("i",{class:t.iconClass}):n("i",{class:t.typeClass}),t._v(" "),n("i",{staticClass:"h-message__closeBtn h-icon-close",on:{click:t.close}}),t._v(" "),n("div",{staticClass:"h-message__message"},[t._v("\n          "+t._s(t.message)+"\n        ")])])])])])},staticRenderFns:[]},l=n("C7Lr")(i,a,!1,null,null,null).exports;let r,c=s.a.extend(l),d=[],u=1,h=2e3;const m=function(t){if(s.a.prototype.$isServer)return;"string"==typeof(t=t||{})&&(t={message:t});let e=t.onClose,n="message_"+u++;return t.onClose=function(){m.close(n,e)},(r=new c({data:t})).id=n,r.vm=r.$mount(),document.body.appendChild(r.vm.$el),r.vm.visible=!0,r.dom=r.vm.$el,r.dom.style.zIndex=h++,d.push(r),r.vm};["success","warning","info","error"].forEach(t=>{m[t]=(e=>("string"==typeof e&&(e={message:e}),e.type=t,m(e)))}),m.close=function(t,e){for(let n=0,s=d.length;n<s;n++)if(t===d[n].id){"function"==typeof e&&("string"==typeof d[n].buttonConfirm?e(d[n].buttonConfirm):e(d[n])),d.splice(n,1);break}},m.closeAll=function(){for(let t=d.length-1;t>=0;t--)d[t].close()};var p=m;e.a=p},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("+VlJ"),o=n("FSro"),i=n.n(o),a={data:function(){return{data:i.a}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},t._l(Object.keys(t.data),function(e){return n("div",{staticClass:"group-container"},[n("p",{staticClass:"menu-title"},[t._v(t._s(e))]),t._v(" "),t._l(t.data[e],function(e){return e.desc?n("div",{staticClass:"menu-items"},[e.name?n("router-link",{class:t.$route.name===e.name?"active":"",attrs:{to:{name:e.name}}},[t._v("\n        "+t._s(e.desc)+"\n      ")]):n("p",{staticClass:"menu-group"},[t._v(t._s(e.desc))]),t._v(" "),t._l(e.items,function(e){return n("div",{staticClass:"menu-items-son"},[n("router-link",{staticClass:"menu-component",class:t.$route.name===e.name?"active":"",attrs:{to:{name:e.name}}},[t._v(t._s(e.desc)+"\n        ")])],1)})],2):t._e()})],2)}),0)},staticRenderFns:[]};var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[t._m(0),t._v(" "),n("div",{staticClass:"list"},[n("div",{staticClass:"list-son",on:{click:function(e){t.$router.push({path:"/icon"})}}},[t._v("组件")]),t._v(" "),n("div",{staticClass:"list-son",on:{click:function(e){t.$router.push({path:"/create"})}}},[t._v("笔记")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:n("PdA0")}}),this._v(" "),e("div",[this._v("Hai-UI")])])}]};var c={name:"App",components:{Menu:n("C7Lr")(a,l,!1,function(t){n("iISR")},"data-v-3c4f1a80",null).exports,Header:n("C7Lr")({data:function(){return{}},methods:{},computed:{},components:{},mounted:function(){}},r,!1,function(t){n("da4M")},"data-v-bb637fac",null).exports}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("div",{staticClass:"app-main"},[e("div",{staticClass:"app-main-left"},[e("Menu")],1),this._v(" "),e("div",{staticClass:"app-main-right"},[e("router-view")],1)])],1)},staticRenderFns:[]};var u=n("C7Lr")(c,d,!1,function(t){n("oBbk")},null,null).exports,h=n("ZLEe"),m=n.n(h),p=n("KGCO");s.a.use(p.a);var f=[];m()(i.a).forEach(function(t){f=f.concat(i.a[t])});!function t(e){e.forEach(function(e){if(e.items)t(e.items),f=f.concat(e.items);else{if("other"===e.type)return void(e.component=function(t){return n.e(1).then(function(){return t(n("OLoe")("./"+e.name+".vue"))}.bind(null,n)).catch(n.oe)});e.component=function(t){return n.e(0).then(function(){return t(n("J8Iv")("./"+e.name+".md"))}.bind(null,n)).catch(n.oe)}}})}(f),f.push({path:"/",redirect:"/giud"});var v=new p.a({routes:f}),g=(n("tXPK"),n("13xi"),n("2355"),{render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("collapseTransition",[t.isShow?n("div",{staticClass:"container"},[n("div",{staticClass:"docs"},[t._t("highlight")],2)]):t._e()]),t._v(" "),n("span",{staticClass:"docs-trans",on:{click:function(e){t.isShow=!t.isShow}}},[t._v(t._s(t.isShow?"隐藏代码":"显示代码"))])],1)},staticRenderFns:[]});var y=n("C7Lr")({data:function(){return{isShow:!1}}},g,!1,function(t){n("pwXA")},"data-v-e89653c0",null).exports,_=(n("rw7y"),{name:"HButton",props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean},computed:{buttonSize:function(){return this.size},buttonDisabled:function(){return this.disabled}},methods:{handleClick:function(t){this.$emit("click",t)}}}),b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"h-button",class:[t.type?"h-button--"+t.type:"",t.buttonSize?"h-button--"+t.buttonSize:"",{"is-disabled":t.buttonDisabled,"is-loading":t.loading,"is-plain":t.plain,"is-round":t.round,"is-circle":t.circle}],attrs:{disabled:t.buttonDisabled||t.loading,autofocus:t.autofocus,type:t.nativeType},on:{click:t.handleClick}},[t.icon&&!t.loading?n("i",{class:t.icon}):t._e(),t._v(" "),t.$slots.default?n("span",[t._t("default")],2):t._e()])},staticRenderFns:[]},C=n("C7Lr")(_,b,!1,null,null,null).exports;C.install=function(t){t.component(C.name,C)};var w=C;const x="0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out",T={"before-enter"(t){t.style.transition=x,t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?(t.style.height=t.scrollHeight+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.height="",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},"after-enter"(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow},"before-leave"(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.height=t.scrollHeight+"px",t.style.overflow="hidden"},leave(t){0!==t.scrollHeight&&(t.style.transition=x,t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0)},"after-leave"(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}};var E={name:"collapseTransition",functional:!0,render:(t,{children:e})=>t("transition",{on:T},e)},S=n("Hnyh"),k=n("Y9jk"),L=n("/Wj5"),B=n.n(L);const $="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>-1;var A={bind(t,e){!function(t,e){t&&t.addEventListener&&t.addEventListener($?"DOMMouseScroll":"mousewheel",function(t){const n=B()(t);e&&e.apply(this,[t,n]),t.preventDefault&&t.preventDefault()})}(t,e.value)}},O=n("BdcJ"),F={name:"HCarousel",props:{height:{type:String,default:"500px"},width:{type:String,default:"100%"}},data:function(){return{index:0,maxIndex:4,allArray:[]}},computed:{},directives:{Mousewheel:A},watch:{index:function(t){this.setClass(t)}},methods:{setClass:function(t){for(var e=this.allArray.slice(t,t+4),n=0;n<document.querySelectorAll(".h-carousel-item").length;n++)Object(k.d)(document.querySelectorAll(".h-carousel-item")[n],"is-front is-right is-behind is-left is-other"),n===e[0]?Object(k.a)(document.querySelectorAll(".h-carousel-item")[n],"is-front"):n===e[1]?Object(k.a)(document.querySelectorAll(".h-carousel-item")[n],"is-right"):n===e[2]?Object(k.a)(document.querySelectorAll(".h-carousel-item")[n],"is-behind"):n===e[3]?Object(k.a)(document.querySelectorAll(".h-carousel-item")[n],"is-left"):Object(k.a)(document.querySelectorAll(".h-carousel-item")[n],"is-other")}},created:function(){var t=this;this.changeScale=Object(O.a)(300,function(e,n){e.wheelDelta>0?(t.index--,t.index<0&&(t.index=t.maxIndex)):(t.index++,t.index>=t.maxIndex&&(t.index=0))})},mounted:function(){var t=this;this.$nextTick(function(){t.maxIndex=document.querySelectorAll(".h-carousel-item").length;for(var e=0;e<t.maxIndex;e++)t.allArray.push(e);t.allArray=t.allArray.concat(t.allArray),t.setClass(0)})},beforeDestroy:function(){}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-carousel",style:{height:this.height,width:this.width}},[e("div",{directives:[{name:"mousewheel",rawName:"v-mousewheel.stop",value:this.changeScale,expression:"changeScale",modifiers:{stop:!0}}],staticClass:"h-carousel__container"},[this._t("default")],2)])},staticRenderFns:[]},H=n("C7Lr")(F,P,!1,null,null,null).exports;H.install=function(t){t.component(H.name,H)};var I=H,j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-carousel-item"},[e("div",{staticClass:"h-carousel-item__container"},[this._t("default")],2)])},staticRenderFns:[]},N=n("C7Lr")({name:"HCarouselItem"},j,!1,null,null,null).exports;N.install=function(t){t.component(N.name,N)};var M=N;const R=[w,E,I,M],D=function(t){D.installed||(R.map(e=>t.component(e.name,e)),t.prototype.$message=S.a)};"undefined"!=typeof window&&window.Vue&&D(window.Vue);var q={install:D,Button:w,Message:S.a,collapseTransition:E,Carousel:I,CarouselItem:M};s.a.component("demo-block",y),s.a.use(q),s.a.config.productionTip=!1,new s.a({el:"#app",router:v,components:{App:u},template:"<App/>"}),v.beforeEach(function(t,e,n){window.scrollTo({top:0,behavior:"smooth"}),n()})},PdA0:function(t,e,n){t.exports=n.p+"static/img/hai.fb4833e.png"},Y9jk:function(t,e,n){"use strict";e.a=function(t,e){if(!t)return;for(var n=t.className,s=(e||"").split(" "),o=0,i=s.length;o<i;o++){var a=s[o];a&&(t.classList?t.classList.add(a):l(t,a)||(n+=" "+a))}t.classList||(t.className=n)},e.d=function(t,e){if(!t||!e)return;for(var n=e.split(" "),s=" "+t.className+" ",i=0,a=n.length;i<a;i++){var r=n[i];r&&(t.classList?t.classList.remove(r):l(t,r)&&(s=s.replace(" "+r+" "," ")))}t.classList||(t.className=o(s))};const s=n("+VlJ").a.prototype.$isServer,o=(s||Number(document.documentMode),function(t){return(t||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")}),i=!s&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)};e.b=i;const a=!s&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};function l(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}e.c=function(t,e,n){var s=function(){n&&n.apply(this,arguments),a(t,e,s)};i(t,e,s)}},da4M:function(t,e){},iISR:function(t,e){},oBbk:function(t,e){},pwXA:function(t,e){},rw7y:function(t,e){},tXPK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f26a34c6c900ba380ecf.js.map