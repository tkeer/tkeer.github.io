(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b68877ea"],{"1bfb":function(t,e,i){},"71a3":function(t,e,i){"use strict";i("c975"),i("ac1f"),i("5319");var s=i("5530"),a=i("4e82"),r=i("1c87"),n=i("7560"),o=i("80d2"),l=i("58df"),c=Object(l["a"])(r["a"],Object(a["a"])("tabsBar"),n["a"]);e["a"]=c.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:function(){return{proxyClass:"v-tab--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-tab":!0},r["a"].options.computed.classes.call(this)),{},{"v-tab--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},mounted:function(){this.onRouteChange()},methods:{click:function(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render:function(t){var e=this,i=this.generateRouteLink(),a=i.tag,r=i.data;return r.attrs=Object(s["a"])(Object(s["a"])({},r.attrs),{},{"aria-selected":String(this.isActive),role:"tab",tabindex:0}),r.on=Object(s["a"])(Object(s["a"])({},r.on),{},{keydown:function(t){t.keyCode===o["r"].enter&&e.click(t),e.$emit("keydown",t)}}),t(a,r,this.$slots.default)}})},a0b6:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"mx-auto",attrs:{tile:"",height:"100%"}},[i("v-toolbar",{attrs:{dark:"",color:"primary"}},[i("v-btn",{attrs:{icon:""},on:{click:t.prev}},[i("v-icon",{attrs:{large:""}},[t._v("mdi-chevron-left")])],1),i("v-toolbar-title",{staticClass:"primary justify-center display-1 text-h5 white--text"},[t._v(" "+t._s(t.title)+" ")])],1),i("v-tabs",{attrs:{grow:"",dark:"",color:"gold"}},[i("v-tab",[t._v(" Product Detail ")]),i("v-tab",[t._v(" Orders Chat ")]),i("v-tab-item",[i("orders-product-detail",{attrs:{order:t.order}})],1),i("v-tab-item",[i("orders-chat",{attrs:{items:t.items,order:t.order}})],1)],1)],1)},a=[],r=(i("a9e3"),i("d3b7"),[{id:"1",icon:"mdi-home",color:"gold",timestamp:"2020-10-14 16:15",msg:["dd","dd"],year:"1960"},{id:"1",icon:"mdi-home",color:"gold",timestamp:"2020-10-14 16:15",msg:["dd","dd"],year:"1970"},{id:"1",icon:"mdi-home",color:"gold",timestamp:"2020-10-14 16:15",msg:["dd","dd"],year:"1980"},{id:"1",icon:"mdi-home",color:"gold",timestamp:"2020-10-14 16:15",msg:["dd","dd"],year:"1990"},{id:"1",icon:"mdi-home",color:"gold",timestamp:"2020-10-14 16:15",msg:["dd","dd"],year:"2000"}]),n=i("a6f4"),o=Object(n["c"])({name:"OrdersChatDetail",components:{OrdersChat:function(){return Promise.all([i.e("chunk-07709945"),i.e("chunk-8ee72912"),i.e("chunk-187563f2")]).then(i.bind(null,"0bc7"))},OrdersProductDetail:function(){return i.e("chunk-2d20fcc7").then(i.bind(null,"b4ba"))}},props:{order:Object,tab:Number,show:Boolean,value:Boolean},setup:function(t,e){var i=e.emit,s=Object(n["f"])(r),a="訂單詳情";function o(t){return"#"+t}var l=function(){return i("click")};return{items:s,title:a,formatOrder:o,prev:l}}}),l=o,c=i("0c7c"),d=i("6544"),h=i.n(d),u=i("8336"),f=i("b0af"),m=i("132d"),b=i("71a3"),v=i("c671"),p=i("fe57"),g=i("71d9"),w=i("2a7f"),k=Object(c["a"])(l,s,a,!1,null,null,null);e["default"]=k.exports;h()(k,{VBtn:u["a"],VCard:f["a"],VIcon:m["a"],VTab:b["a"],VTabItem:v["a"],VTabs:p["a"],VToolbar:g["a"],VToolbarTitle:w["a"]})},aac8:function(t,e,i){"use strict";var s=i("5530"),a=i("f665"),r=i("604c");e["a"]=a["a"].extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-tabs-items":!0})},isDark:function(){return this.rootIsDark}},methods:{getValue:function(t,e){return t.id||r["a"].options.methods.getValue.call(this,t,e)}}})},c671:function(t,e,i){"use strict";var s=i("1e6c");e["a"]=s["a"].extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=s["a"].options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},fe57:function(t,e,i){"use strict";i("b0c0"),i("a9e3");var s=i("5530"),a=(i("1bfb"),i("b85c")),r=i("7efd"),n=i("7560"),o=i("d10f"),l=i("58df"),c=Object(l["a"])(r["a"],o["a"],n["a"]).extend({name:"v-tabs-bar",provide:function(){return{tabsBar:this}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows},this.themeClasses)}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider:function(){this.isBooted&&this.$emit("call:slider")},genContent:function(){var t=r["a"].options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange:function(t,e){if(!this.mandatory){var i,s=this.items,r=t.path,n=e.path,o=!1,l=!1,c=Object(a["a"])(s);try{for(c.s();!(i=c.n()).done;){var d=i.value;if(d.to===r?o=!0:d.to===n&&(l=!0),o&&l)break}}catch(h){c.e(h)}finally{c.f()}!o&&l&&(this.internalValue=void 0)}}},render:function(t){var e=r["a"].options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),d=i("aac8"),h=i("a9ad"),u=Object(l["a"])(h["a"]).extend({name:"v-tabs-slider",render:function(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),f=i("a452"),m=i("dc22"),b=i("80d2"),v=Object(l["a"])(h["a"],f["a"],n["a"]);e["a"]=v.extend().extend({name:"v-tabs",directives:{Resize:m["a"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data:function(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes:function(){return Object(s["a"])({"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical},this.themeClasses)},isReversed:function(){return this.$vuetify.rtl&&this.vertical},sliderStyles:function(){return{height:Object(b["f"])(this.slider.height),left:this.isReversed?void 0:Object(b["f"])(this.slider.left),right:this.isReversed?Object(b["f"])(this.slider.right):void 0,top:this.vertical?Object(b["f"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(b["f"])(this.slider.width)}},computedColor:function(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",iconsAndText:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted:function(){var t=this;this.$nextTick((function(){window.setTimeout(t.callSlider,30)}))},methods:{callSlider:function(){var t=this;return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick((function(){var e=t.$refs.items.selectedItems[0];if(!e||!e.$el)return t.slider.width=0,void(t.slider.left=0);var i=e.$el;t.slider={height:t.vertical?i.scrollHeight:Number(t.sliderSize),left:t.vertical?0:i.offsetLeft,right:t.vertical?0:i.offsetLeft+i.offsetWidth,top:i.offsetTop,width:t.vertical?Number(t.sliderSize):i.scrollWidth}})),!0):(this.slider.width=0,!1)},genBar:function(t,e){var i=this,s={style:{height:Object(b["f"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:function(t){i.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,s),this.setBackgroundColor(this.backgroundColor,s),this.$createElement(c,s,[this.genSlider(e),t])},genItems:function(t,e){var i=this;return t||(e.length?this.$createElement(d["a"],{props:{value:this.internalValue},on:{change:function(t){i.internalValue=t}}},e):null)},genSlider:function(t){return this.hideSlider?null:(t||(t=this.$createElement(u,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize:function(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes:function(){for(var t=null,e=null,i=[],s=[],a=this.$slots.default||[],r=a.length,n=0;n<r;n++){var o=a[n];if(o.componentOptions)switch(o.componentOptions.Ctor.options.name){case"v-tabs-slider":e=o;break;case"v-tabs-items":t=o;break;case"v-tab-item":i.push(o);break;default:s.push(o)}else s.push(o)}return{tab:s,slider:e,items:t,item:i}}},render:function(t){var e=this.parseNodes(),i=e.tab,s=e.slider,a=e.items,r=e.item;return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(i,s),this.genItems(a,r)])}})}}]);
//# sourceMappingURL=chunk-b68877ea.9bfee35b.js.map