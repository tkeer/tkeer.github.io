(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29bf3510"],{b461:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.$vuetify.breakpoint.smAndDown?o("v-footer",{attrs:{color:"gold",app:""}},[o("v-card-text",{staticClass:"text-center py-2"},[o("app-button",{staticClass:"mr-3",attrs:{text:t.$t("home.referPeople")},on:{"on-click":t.referPeople}}),o("app-button",{staticClass:"ml-3",attrs:{text:t.$t("home.referProduct")},on:{"on-click":t.referProduct}})],1)],1):o("v-footer",{attrs:{color:"gold",absolute:""}},[o("v-card-text",{staticClass:"text-center py-2"},[o("app-button",{staticClass:"mr-3",attrs:{text:t.$t("home.referPeople")},on:{"on-click":t.referPeople}}),o("app-button",{staticClass:"ml-3",attrs:{text:t.$t("home.referProduct")},on:{"on-click":t.referProduct}})],1)],1)},i=[],n=(o("d3b7"),o("a6f4")),r=Object(n["c"])({name:"PageFooter",components:{AppButton:function(){return o.e("chunk-2d0e6914").then(o.bind(null,"98fe"))}},setup:function(t,e){var o=e.root,s=e.emit,i=function(){s("on-show",!0)},n=function(){o.$router.push("/products")};return{referPeople:i,referProduct:n}}}),a=r,c=o("0c7c"),u=o("6544"),l=o.n(u),p=o("99d9"),f=(o("a9e3"),o("c7cd"),o("5530")),h=(o("b5b6"),o("8dd9")),d=o("3a66"),b=o("d10f"),m=o("58df"),v=o("80d2"),g=Object(m["a"])(h["a"],Object(d["a"])("footer",["height","inset"]),b["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(f["a"])(Object(f["a"])({},h["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(f["a"])(Object(f["a"])({},h["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(v["f"])(t),left:Object(v["f"])(this.computedLeft),right:Object(v["f"])(this.computedRight),bottom:Object(v["f"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),P=Object(c["a"])(a,s,i,!1,null,null,null);e["default"]=P.exports;l()(P,{VCardText:p["c"],VFooter:g})},b5b6:function(t,e,o){}}]);
//# sourceMappingURL=chunk-29bf3510.28abe5a1.js.map