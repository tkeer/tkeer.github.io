(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e0c96cb","chunk-2d0e6c6b"],{"60d3":function(t,e,r){"use strict";r("8792")},"63b7":function(t,e,r){},"6b59":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{tile:"",flat:""}},[r("install-pwa"),r("v-window",{model:{value:t.window,callback:function(e){t.window=e},expression:"window"}},[r("v-window-item",[r("v-card",{staticClass:"mx-auto",attrs:{tile:"",flat:"",color:"transparent",height:"100%"}},[r("v-system-bar",{attrs:{absolute:"",light:"",color:"rgba(0, 30, 47, 0.1)"}},[r("v-icon",{staticClass:"gold--text lighten-4"},[t._v("fas fa-ad")])],1),r("v-carousel",{attrs:{height:"auto","hide-delimiter-background":"","show-arrows-on-hover":"",cycle:""}},t._l(t.ads,(function(e,n){return r("v-carousel-item",{key:n},[r("v-img",{staticClass:"cursor-pointer",attrs:{src:e.image_path,"aspect-ratio":1.91},on:{click:function(r){return t.onProductDetails(e)}}})],1)})),1),r("membership-info",{attrs:{person:t.person}}),r("v-card-text",{staticClass:"pa-0 mx-0 pb-15"},[r("app-widget",{attrs:{title:"Pie Chart"}},[r("option-chart",{attrs:{slot:"widget-content",data:t.chartData},slot:"widget-content"})],1)],1),r("page-footer",{on:{"on-show":t.onShowLinkDialog}}),r("referral-link-dialog",{attrs:{show:t.showLinkDialog},on:{close:t.closeDialog}})],1)],1),r("v-window-item",[r("v-card",{attrs:{flat:""}},[r("product-details",{attrs:{item:t.product},on:{"on-back-button":t.onBackButton}})],1)],1)],1)],1)},a=[],i=(r("d81d"),r("d3b7"),r("96cf"),r("1da1")),s=r("c69a"),o=r("a6f4"),u=Object(o["c"])({name:"Home",components:{AppWidget:function(){return r.e("chunk-2d0e64b6").then(r.bind(null,"97ac"))},OptionChart:function(){return Promise.all([r.e("chunk-8ee72912"),r.e("chunk-342a27da")]).then(r.bind(null,"3ced"))},ReferralLinkDialog:function(){return Promise.all([r.e("chunk-07709945"),r.e("chunk-bca09d18")]).then(r.bind(null,"3674"))},ProductDetails:function(){return Promise.all([r.e("chunk-07709945"),r.e("chunk-20af070c")]).then(r.bind(null,"3e97"))},MembershipInfo:function(){return r.e("chunk-2d0b1618").then(r.bind(null,"2037"))},PageFooter:function(){return r.e("chunk-20c34560").then(r.bind(null,"b461"))},InstallPwa:function(){return r.e("chunk-06b37a84").then(r.bind(null,"2e7a"))}},setup:function(t,e){var r=e.root,n=new s["a"],a=Object(o["f"])([]),u=Object(o["f"])([]),c=Object(o["f"])({}),l=Object(o["f"])({});Object(o["d"])((function(){h()}));var h=function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=1,t.next=3,n.getHomePageData(e);case 3:r=t.sent,i="https://referlo.azurewebsites.net",c.value=r.person,c.value.avatar=i+c.value.avatar,u.value=[r.person.refereal_submit,r.person.referral_wip,r.person.referral_completed],a.value=r.ads.map((function(t){return t.image_path=i+t.image_path,t}));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=Object(o["f"])(!1),p=Object(o["f"])(0),m=Object(o["a"])((function(){return!r.$vuetify.breakpoint.smAndDown})),f=function(){d.value=!1},v=function(t){d.value=t};function g(t){return b.apply(this,arguments)}function b(){return b=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,n.getProductDetail(e.supplier_product_id);case 3:r=t.sent,r.image_path="https://referlo.azurewebsites.net"+r.image_path,l.value=r,p.value=1;case 7:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}function w(){p.value=0}return{apiService:n,ads:a,absolute:m,person:c,showLinkDialog:d,closeDialog:f,chartData:u,window:p,product:l,onBackButton:w,onProductDetails:g,onShowLinkDialog:v}}}),c=u,l=(r("60d3"),r("0c7c")),h=r("6544"),d=r.n(h),p=r("b0af"),m=r("99d9"),f=(r("a9e3"),r("5530")),v=(r("63b7"),r("f665")),g=r("afdd"),b=r("9d26"),w=r("37c6"),k=r("3860"),y=r("80d2"),O=r("d9bd"),j=v["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(f["a"])(Object(f["a"])({},v["a"].options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(O["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:v["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,r=[],n=0;n<e;n++){var a=this.$createElement(g["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(b["a"],{props:{size:18}},this.delimiterIcon)]);r.push(a)}return this.$createElement(k["a"],{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},r)},genProgress:function(){return this.$createElement(w["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=v["a"].options.render.call(this,t);return e.data.style="height: ".concat(Object(y["f"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),x=r("1e6c"),D=r("adda"),_=r("58df"),C=r("1c87"),P=Object(_["a"])(x["a"],C["a"]),R=P.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(D["a"],{staticClass:"v-carousel__item",props:Object(f["a"])(Object(f["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(y["n"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,r=t.data;return r.staticClass="v-window-item",r.directives.push({name:"show",value:this.isActive}),this.$createElement(e,r,this.genDefaultSlot())}}}),T=r("132d"),V=(r("c7cd"),r("8308"),r("3a66")),$=r("a9ad"),I=r("7560"),B=Object(_["a"])(Object(V["a"])("bar",["height","window"]),$["a"],I["a"]).extend({name:"v-system-bar",props:{height:[Number,String],lightsOut:Boolean,window:Boolean},computed:{classes:function(){return Object(f["a"])({"v-system-bar--lights-out":this.lightsOut,"v-system-bar--absolute":this.absolute,"v-system-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-system-bar--window":this.window},this.themeClasses)},computedHeight:function(){return this.height?isNaN(parseInt(this.height))?this.height:parseInt(this.height):this.window?32:24},styles:function(){return{height:Object(y["f"])(this.computedHeight)}}},methods:{updateApplication:function(){return this.$el?this.$el.clientHeight:this.computedHeight}},render:function(t){var e={staticClass:"v-system-bar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),Object(y["n"])(this))}}),S=Object(l["a"])(c,n,a,!1,null,"097149b6",null);e["default"]=S.exports;d()(S,{VCard:p["a"],VCardText:m["c"],VCarousel:j,VCarouselItem:R,VIcon:T["a"],VImg:D["a"],VSystemBar:B,VWindow:v["a"],VWindowItem:x["a"]})},8308:function(t,e,r){},8792:function(t,e,r){},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return u}));var n=r("b0af"),a=r("80d2"),i=Object(a["g"])("v-card__actions"),s=Object(a["g"])("v-card__subtitle"),o=Object(a["g"])("v-card__text"),u=Object(a["g"])("v-card__title");n["a"]},c69a:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));r("96cf");var n=r("1da1"),a=r("d4ec"),i=r("bee2"),s=r("bc3a"),o=r.n(s),u=function(){function t(){Object(a["a"])(this,t)}return Object(i["a"])(t,[{key:"getApiVersion",value:function(){return o.a.get("GetApiVersion")}},{key:"getHomePageData",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o()({url:"/api/GetHomePageData/"+e});case 3:return n=t.sent,a=n.data,r=a,t.abrupt("return",r);case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",r);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getProductDetail",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o()({url:"/api/GetProductDetail/"+e});case 3:return n=t.sent,a=n.data,r=a,t.abrupt("return",r);case 9:return t.prev=9,t.t0=t["catch"](0),t.abrupt("return",r);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getIndustries",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=[],t.prev=1,t.next=4,o()({url:"/api/GetIndustries"});case 4:return r=t.sent,n=r.data,e=n,t.abrupt("return",e);case 10:return t.prev=10,t.t0=t["catch"](1),t.abrupt("return",e);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"getOrders",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=[],t.prev=1,t.next=4,o()({url:"/api/GetOrders"});case 4:return r=t.sent,n=r.data,e=n,t.abrupt("return",e);case 10:return t.prev=10,t.t0=t["catch"](1),t.abrupt("return",e);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"getPeople",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=[],t.prev=1,t.next=4,o()({url:"/api/GetPeople"});case 4:return r=t.sent,n=r.data,e=n.people,t.abrupt("return",e);case 10:return t.prev=10,t.t0=t["catch"](1),t.abrupt("return",e);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"makeOrder",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=null,t.prev=1,t.next=4,o()({url:"/SalesOrder",method:"POST",data:e});case 4:return n=t.sent,a=n.data,r=a,t.abrupt("return",r);case 10:return t.prev=10,t.t0=t["catch"](1),t.abrupt("return",r);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getChatMessages",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=[],t.prev=1,t.next=4,o()({url:"/SalesChat/GetComments/"+e,method:"GET"});case 4:return n=t.sent,a=n.data,r=a,t.abrupt("return",r);case 10:return t.prev=10,t.t0=t["catch"](1),t.abrupt("return",r);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));function e(e){return t.apply(this,arguments)}return e}()}]),t}()}}]);
//# sourceMappingURL=chunk-4e0c96cb.24e249ec.js.map