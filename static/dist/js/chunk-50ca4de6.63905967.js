(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50ca4de6","chunk-2d0e6c6b"],{"24e2":function(e,t,i){"use strict";var n=i("e0c7");t["a"]=n["a"]},"297c":function(e,t,i){"use strict";i("a9e3");var n=i("2b0e"),s=i("37c6");t["a"]=n["default"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(s["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"326d":function(e,t,i){"use strict";var n=i("e449");t["a"]=n["a"]},"34ef":function(e,t,i){"use strict";var n=i("cc20");t["a"]=n["a"]},"37c6":function(e,t,i){"use strict";i("a9e3"),i("c7cd");var n=i("5530"),s=i("ade3"),a=(i("6ece"),i("0789")),r=i("a9ad"),o=i("fe6c"),l=i("a452"),c=i("7560"),u=i("80d2"),d=i("58df"),h=Object(d["a"])(r["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),l["a"],c["a"]),p=h.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(u["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(u["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(s["a"])(e,this.isReversed?"right":"left",Object(u["f"])(this.normalizedValue,"%")),Object(s["a"])(e,"width",Object(u["f"])(this.normalizedBuffer-this.normalizedValue,"%")),e},classes:function(){return Object(n["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?a["d"]:a["e"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(u["f"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(u["n"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(s["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),i=t.width;this.internalValue=e.offsetX/i*100}},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(u["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});t["a"]=p},"4bd4":function(e,t,i){"use strict";i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b");var n=i("5530"),s=i("58df"),a=i("7e2b"),r=i("3206");t["a"]=Object(s["a"])(a["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,i=function(e){return e.$watch("hasError",(function(i){t.$set(t.errorBag,e._uid,i)}),{immediate:!0})},n={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=e.$watch("shouldValidate",(function(s){s&&(t.errorBag.hasOwnProperty(e._uid)||(n.valid=i(e)))})):n.valid=i(e),n},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var i=this.watchers.find((function(e){return e._uid===t._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},"615b":function(e,t,i){},"68dd":function(e,t,i){},"6d75":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"container--fluid fill-height primary"},[i("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12",sm:"8",md:"4",lg:"4"}},[i("v-card",{staticClass:"elevation-5 pa-3"},[i("v-card-text",[i("div",{staticClass:"layout column align-center"},[i("img",{attrs:{src:"img/icons/android-icon-144x144.png",alt:"Vue Vuetify Admin Logo",width:"120",height:"120"}}),i("h1",{staticClass:"text-center my-4 primary--text"},[e._v("Register")])]),i("v-form",[i("v-text-field",{attrs:{"append-icon":"mdi-phone",name:"phone",label:e.$t("login.phone"),type:"text",required:""},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}}),i("v-text-field",{attrs:{"append-icon":"mdi-account",name:"name",label:e.$t("login.name"),type:"text",required:""},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}}),i("v-text-field",{attrs:{"append-icon":"mdi-at",name:"email",label:e.$t("login.email"),type:"email",required:"",autocomplete:"username"},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}}),i("v-text-field",{attrs:{"append-icon":"mdi-lock",name:"password",label:e.$t("login.password"),type:"password",required:"",autocomplete:"new-password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}}),i("v-text-field",{attrs:{"append-icon":"mdi-lock",name:"confirm",label:e.$t("login.confirm"),type:"password",required:"",autocomplete:"new-password"},model:{value:e.model.confirm,callback:function(t){e.$set(e.model,"confirm",t)},expression:"model.confirm"}}),i("v-select",{attrs:{items:e.model.sex,"error-messages":e.selectErrors,label:"Sex",required:""},on:{change:function(t){return e.$v.select.$touch()},blur:function(t){return e.$v.select.$touch()}},model:{value:e.model.select,callback:function(t){e.$set(e.model,"select",t)},expression:"model.select"}}),i("v-select",{attrs:{items:e.model.age,"error-messages":e.selectErrors,label:"Age Group",required:""},on:{change:function(t){return e.$v.select.$touch()},blur:function(t){return e.$v.select.$touch()}},model:{value:e.model.select,callback:function(t){e.$set(e.model,"select",t)},expression:"model.select"}})],1)],1),i("v-card-actions",[i("localization"),i("v-spacer"),i("v-btn",{attrs:{color:"primary",outlined:"",to:"/login"}},[e._v(" "+e._s(e.$t("login.login"))+" ")]),i("v-btn",{attrs:{color:"primary",loading:e.loading},on:{click:e.login}},[e._v(" "+e._s(e.$t("login.register"))+" ")])],1)],1)],1)],1)],1)},s=[],a=i("bead"),r=i("a6f4"),o=Object(r["c"])({name:"Register",components:{Localization:a["default"]},setup:function(){var e=Object(r["e"])({email:"admin@vvadmin.io",password:"password",name:"admin",address:"Address",confirm:"password",phone:"12345678",key:"",select:null,sex:["Male","Female","Not Provided"],age:["Below 10","10-20","21-30","31-40","41-50","51-60","Above 60"]}),t=Object(r["f"])(!1);function i(){var i=this;this.$route.query.key&&(e.key=this.$route.query.key),console.log(e),t.value=!0,setTimeout((function(){i.$router.push("/home")}),1e3)}return{model:e,loading:t,login:i}}}),l=o,c=i("0c7c"),u=i("6544"),d=i.n(u),h=i("8336"),p=i("b0af"),m=i("99d9"),f=i("62ad"),v=i("a523"),g=i("4bd4"),b=i("0fd9"),x=(i("99af"),i("4de4"),i("c740"),i("a630"),i("caad"),i("d81d"),i("13d5"),i("fb6a"),i("a434"),i("b0c0"),i("4ec9"),i("d3b7"),i("ac1f"),i("25f0"),i("2532"),i("3ca3"),i("1276"),i("2ca0"),i("498a"),i("ddb0"),i("b85c")),y=i("ade3"),$=i("5530"),I=(i("4ff9"),i("68dd"),i("34ef")),C=i("326d"),k=(i("c975"),i("a15b"),i("b64b"),i("4160"),i("159b"),i("cf36"),i("5607")),_=i("2b0e"),O=i("132d"),S=i("a9ad"),w=i("7560"),B=i("d9f7"),j=i("80d2"),V=_["default"].extend({name:"v-simple-checkbox",functional:!0,directives:{ripple:k["a"]},props:Object($["a"])(Object($["a"])(Object($["a"])({},S["a"].options.props),w["a"].options.props),{},{disabled:Boolean,ripple:{type:Boolean,default:!0},value:Boolean,indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},onIcon:{type:String,default:"$checkboxOn"},offIcon:{type:String,default:"$checkboxOff"}}),render:function(e,t){var i=t.props,n=t.data,s=(t.listeners,[]);if(i.ripple&&!i.disabled){var a=e("div",S["a"].options.methods.setTextColor(i.color,{staticClass:"v-input--selection-controls__ripple",directives:[{name:"ripple",value:{center:!0}}]}));s.push(a)}var r=i.offIcon;i.indeterminate?r=i.indeterminateIcon:i.value&&(r=i.onIcon),s.push(e(O["a"],S["a"].options.methods.setTextColor(i.value&&i.color,{props:{disabled:i.disabled,dark:i.dark,light:i.light}}),r));var o={"v-simple-checkbox":!0,"v-simple-checkbox--disabled":i.disabled};return e("div",Object(B["a"])(n,{class:o,on:{click:function(e){e.stopPropagation(),n.on&&n.on.input&&!i.disabled&&Object(j["x"])(n.on.input).forEach((function(e){return e(!i.value)}))}}}),s)}}),T=i("b810"),A=i("24e2"),D=i("da13"),M=i("1800"),E=i("5d23"),L=i("8860"),P=i("58df"),z=Object(P["a"])(S["a"],w["a"]).extend({name:"v-select-list",directives:{ripple:k["a"]},props:{action:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:function(){return[]}},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},noDataText:String,noFilter:Boolean,searchInput:null,selectedItems:{type:Array,default:function(){return[]}}},computed:{parsedItems:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},tileActiveClass:function(){return Object.keys(this.setTextColor(this.color).class||{}).join(" ")},staticNoDataTile:function(){var e={attrs:{role:void 0},on:{mousedown:function(e){return e.preventDefault()}}};return this.$createElement(D["a"],e,[this.genTileContent(this.noDataText)])}},methods:{genAction:function(e,t){var i=this;return this.$createElement(M["a"],[this.$createElement(V,{props:{color:this.color,value:t},on:{input:function(){return i.$emit("select",e)}}})])},genDivider:function(e){return this.$createElement(T["a"],{props:e})},genFilteredText:function(e){if(e=e||"",!this.searchInput||this.noFilter)return Object(j["i"])(e);var t=this.getMaskedCharacters(e),i=t.start,n=t.middle,s=t.end;return"".concat(Object(j["i"])(i)).concat(this.genHighlight(n)).concat(Object(j["i"])(s))},genHeader:function(e){return this.$createElement(A["a"],{props:e},e.header)},genHighlight:function(e){return'<span class="v-list-item__mask">'.concat(Object(j["i"])(e),"</span>")},getMaskedCharacters:function(e){var t=(this.searchInput||"").toString().toLocaleLowerCase(),i=e.toLocaleLowerCase().indexOf(t);if(i<0)return{start:e,middle:"",end:""};var n=e.slice(0,i),s=e.slice(i,i+t.length),a=e.slice(i+t.length);return{start:n,middle:s,end:a}},genTile:function(e){var t=this,i=e.item,n=e.index,s=e.disabled,a=void 0===s?null:s,r=e.value,o=void 0!==r&&r;o||(o=this.hasItem(i)),i===Object(i)&&(a=null!==a?a:this.getDisabled(i));var l={attrs:{"aria-selected":String(o),id:"list-item-".concat(this._uid,"-").concat(n),role:"option"},on:{mousedown:function(e){e.preventDefault()},click:function(){return a||t.$emit("select",i)}},props:{activeClass:this.tileActiveClass,disabled:a,ripple:!0,inputValue:o}};if(!this.$scopedSlots.item)return this.$createElement(D["a"],l,[this.action&&!this.hideSelected&&this.items.length>0?this.genAction(i,o):null,this.genTileContent(i,n)]);var c=this,u=this.$scopedSlots.item({parent:c,item:i,attrs:Object($["a"])(Object($["a"])({},l.attrs),l.props),on:l.on});return this.needsTile(u)?this.$createElement(D["a"],l,u):u},genTileContent:function(e){var t=this.genFilteredText(this.getText(e));return this.$createElement(E["b"],[this.$createElement(E["d"],{domProps:{innerHTML:t}})])},hasItem:function(e){return this.parsedItems.indexOf(this.getValue(e))>-1},needsTile:function(e){return 1!==e.length||null==e[0].componentOptions||"v-list-item"!==e[0].componentOptions.Ctor.options.name},getDisabled:function(e){return Boolean(Object(j["m"])(e,this.itemDisabled,!1))},getText:function(e){return String(Object(j["m"])(e,this.itemText,e))},getValue:function(e){return Object(j["m"])(e,this.itemValue,this.getText(e))}},render:function(){for(var e=[],t=this.items.length,i=0;i<t;i++){var n=this.items[i];this.hideSelected&&this.hasItem(n)||(null==n?e.push(this.genTile({item:n,index:i})):n.header?e.push(this.genHeader(n)):n.divider?e.push(this.genDivider(n)):e.push(this.genTile({item:n,index:i})))}return e.length||e.push(this.$slots["no-data"]||this.staticNoDataTile),this.$slots["prepend-item"]&&e.unshift(this.$slots["prepend-item"]),this.$slots["append-item"]&&e.push(this.$slots["append-item"]),this.$createElement(L["a"],{staticClass:"v-select-list",class:this.themeClasses,attrs:{role:"listbox",tabindex:-1},props:{dense:this.dense}},e)}}),F=i("c37a"),q=i("8654"),H=i("8547"),N=i("b848"),R=_["default"].extend({name:"filterable",props:{noDataText:{type:String,default:"$vuetify.noDataText"}}}),J=i("a293"),K=i("d9bd"),U={closeOnClick:!1,closeOnContentClick:!1,disableKeys:!0,openOnClick:!1,maxHeight:304},W=Object(P["a"])(q["a"],H["a"],N["a"],R),G=W.extend().extend({name:"v-select",directives:{ClickOutside:J["a"]},props:{appendIcon:{type:String,default:"$dropdown"},attach:{type:null,default:!1},cacheItems:Boolean,chips:Boolean,clearable:Boolean,deletableChips:Boolean,disableLookup:Boolean,eager:Boolean,hideSelected:Boolean,items:{type:Array,default:function(){return[]}},itemColor:{type:String,default:"primary"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},menuProps:{type:[String,Array,Object],default:function(){return U}},multiple:Boolean,openOnClear:Boolean,returnObject:Boolean,smallChips:Boolean},data:function(){return{cachedItems:this.cacheItems?this.items:[],menuIsBooted:!1,isMenuActive:!1,lastItem:20,lazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,selectedIndex:-1,selectedItems:[],keyboardLookupPrefix:"",keyboardLookupLastTime:0}},computed:{allItems:function(){return this.filterDuplicates(this.cachedItems.concat(this.items))},classes:function(){return Object($["a"])(Object($["a"])({},q["a"].options.computed.classes.call(this)),{},{"v-select":!0,"v-select--chips":this.hasChips,"v-select--chips--small":this.smallChips,"v-select--is-menu-active":this.isMenuActive,"v-select--is-multi":this.multiple})},computedItems:function(){return this.allItems},computedOwns:function(){return"list-".concat(this._uid)},computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.getText(this.selectedItems[0])||"").toString().length},directives:function(){var e=this;return this.isFocused?[{name:"click-outside",value:{handler:this.blur,closeConditional:this.closeConditional,include:function(){return e.getOpenDependentElements()}}}]:void 0},dynamicHeight:function(){return"auto"},hasChips:function(){return this.chips||this.smallChips},hasSlot:function(){return Boolean(this.hasChips||this.$scopedSlots.selection)},isDirty:function(){return this.selectedItems.length>0},listData:function(){var e=this.$vnode&&this.$vnode.context.$options._scopeId,t=e?Object(y["a"])({},e,!0):{};return{attrs:Object($["a"])(Object($["a"])({},t),{},{id:this.computedOwns}),props:{action:this.multiple,color:this.itemColor,dense:this.dense,hideSelected:this.hideSelected,items:this.virtualizedItems,itemDisabled:this.itemDisabled,itemText:this.itemText,itemValue:this.itemValue,noDataText:this.$vuetify.lang.t(this.noDataText),selectedItems:this.selectedItems},on:{select:this.selectItem},scopedSlots:{item:this.$scopedSlots.item}}},staticList:function(){return(this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"])&&Object(K["b"])("assert: staticList should not be called if slots are used"),this.$createElement(z,this.listData)},virtualizedItems:function(){return this.$_menuProps.auto?this.computedItems:this.computedItems.slice(0,this.lastItem)},menuCanShow:function(){return!0},$_menuProps:function(){var e="string"===typeof this.menuProps?this.menuProps.split(","):this.menuProps;return Array.isArray(e)&&(e=e.reduce((function(e,t){return e[t.trim()]=!0,e}),{})),Object($["a"])(Object($["a"])({},U),{},{eager:this.eager,value:this.menuCanShow&&this.isMenuActive,nudgeBottom:e.offsetY?1:0},e)}},watch:{internalValue:function(e){this.initialValue=e,this.setSelectedItems()},isMenuActive:function(e){var t=this;window.setTimeout((function(){return t.onMenuActiveChange(e)}))},items:{immediate:!0,handler:function(e){var t=this;this.cacheItems&&this.$nextTick((function(){t.cachedItems=t.filterDuplicates(t.cachedItems.concat(e))})),this.setSelectedItems()}}},methods:{blur:function(e){q["a"].options.methods.blur.call(this,e),this.isMenuActive=!1,this.isFocused=!1,this.selectedIndex=-1},activateMenu:function(){this.isInteractive&&!this.isMenuActive&&(this.isMenuActive=!0)},clearableCallback:function(){var e=this;this.setValue(this.multiple?[]:void 0),this.setMenuIndex(-1),this.$nextTick((function(){return e.$refs.input&&e.$refs.input.focus()})),this.openOnClear&&(this.isMenuActive=!0)},closeConditional:function(e){return!this.isMenuActive||!this._isDestroyed&&(!this.getContent()||!this.getContent().contains(e.target))&&this.$el&&!this.$el.contains(e.target)&&e.target!==this.$el},filterDuplicates:function(e){for(var t=new Map,i=0;i<e.length;++i){var n=e[i];if(n.header||n.divider)t.set(n,n);else{var s=this.getValue(n);!t.has(s)&&t.set(s,n)}}return Array.from(t.values())},findExistingIndex:function(e){var t=this,i=this.getValue(e);return(this.internalValue||[]).findIndex((function(e){return t.valueComparator(t.getValue(e),i)}))},getContent:function(){return this.$refs.menu&&this.$refs.menu.$refs.content},genChipSelection:function(e,t){var i=this,n=!this.isInteractive||this.getDisabled(e);return this.$createElement(I["a"],{staticClass:"v-chip--select",attrs:{tabindex:-1},props:{close:this.deletableChips&&!n,disabled:n,inputValue:t===this.selectedIndex,small:this.smallChips},on:{click:function(e){n||(e.stopPropagation(),i.selectedIndex=t)},"click:close":function(){return i.onChipInput(e)}},key:JSON.stringify(this.getValue(e))},this.getText(e))},genCommaSelection:function(e,t,i){var n=t===this.selectedIndex&&this.computedColor,s=!this.isInteractive||this.getDisabled(e);return this.$createElement("div",this.setTextColor(n,{staticClass:"v-select__selection v-select__selection--comma",class:{"v-select__selection--disabled":s},key:JSON.stringify(this.getValue(e))}),"".concat(this.getText(e)).concat(i?"":", "))},genDefaultSlot:function(){var e=this.genSelections(),t=this.genInput();return Array.isArray(e)?e.push(t):(e.children=e.children||[],e.children.push(t)),[this.genFieldset(),this.$createElement("div",{staticClass:"v-select__slot",directives:this.directives},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,e,this.suffix?this.genAffix("suffix"):null,this.genClearIcon(),this.genIconSlot(),this.genHiddenInput()]),this.genMenu(),this.genProgress()]},genIcon:function(e,t,i){var n=F["a"].options.methods.genIcon.call(this,e,t,i);return"append"===e&&(n.children[0].data=Object(B["a"])(n.children[0].data,{attrs:{tabindex:n.children[0].componentOptions.listeners&&"-1","aria-hidden":"true","aria-label":void 0}})),n},genInput:function(){var e=q["a"].options.methods.genInput.call(this);return delete e.data.attrs.name,e.data=Object(B["a"])(e.data,{domProps:{value:null},attrs:{readonly:!0,type:"text","aria-readonly":String(this.isReadonly),"aria-activedescendant":Object(j["l"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(j["l"])(e.data,"attrs.autocomplete","off")},on:{keypress:this.onKeyPress}}),e},genHiddenInput:function(){return this.$createElement("input",{domProps:{value:this.lazyValue},attrs:{type:"hidden",name:this.attrs$.name}})},genInputSlot:function(){var e=q["a"].options.methods.genInputSlot.call(this);return e.data.attrs=Object($["a"])(Object($["a"])({},e.data.attrs),{},{role:"button","aria-haspopup":"listbox","aria-expanded":String(this.isMenuActive),"aria-owns":this.computedOwns}),e},genList:function(){return this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"]?this.genListWithSlot():this.staticList},genListWithSlot:function(){var e=this,t=["prepend-item","no-data","append-item"].filter((function(t){return e.$slots[t]})).map((function(t){return e.$createElement("template",{slot:t},e.$slots[t])}));return this.$createElement(z,Object($["a"])({},this.listData),t)},genMenu:function(){var e=this,t=this.$_menuProps;return t.activator=this.$refs["input-slot"],""===this.attach||!0===this.attach||"attach"===this.attach?t.attach=this.$el:t.attach=this.attach,this.$createElement(C["a"],{attrs:{role:void 0},props:t,on:{input:function(t){e.isMenuActive=t,e.isFocused=t},scroll:this.onScroll},ref:"menu"},[this.genList()])},genSelections:function(){var e,t=this.selectedItems.length,i=new Array(t);e=this.$scopedSlots.selection?this.genSlotSelection:this.hasChips?this.genChipSelection:this.genCommaSelection;while(t--)i[t]=e(this.selectedItems[t],t,t===i.length-1);return this.$createElement("div",{staticClass:"v-select__selections"},i)},genSlotSelection:function(e,t){var i=this;return this.$scopedSlots.selection({attrs:{class:"v-chip--select"},parent:this,item:e,index:t,select:function(e){e.stopPropagation(),i.selectedIndex=t},selected:t===this.selectedIndex,disabled:!this.isInteractive})},getMenuIndex:function(){return this.$refs.menu?this.$refs.menu.listIndex:-1},getDisabled:function(e){return Object(j["m"])(e,this.itemDisabled,!1)},getText:function(e){return Object(j["m"])(e,this.itemText,e)},getValue:function(e){return Object(j["m"])(e,this.itemValue,this.getText(e))},onBlur:function(e){e&&this.$emit("blur",e)},onChipInput:function(e){this.multiple?this.selectItem(e):this.setValue(null),0===this.selectedItems.length?this.isMenuActive=!0:this.isMenuActive=!1,this.selectedIndex=-1},onClick:function(e){this.isInteractive&&(this.isAppendInner(e.target)||(this.isMenuActive=!0),this.isFocused||(this.isFocused=!0,this.$emit("focus")),this.$emit("click",e))},onEscDown:function(e){e.preventDefault(),this.isMenuActive&&(e.stopPropagation(),this.isMenuActive=!1)},onKeyPress:function(e){var t=this;if(!this.multiple&&this.isInteractive&&!this.disableLookup){var i=1e3,n=performance.now();n-this.keyboardLookupLastTime>i&&(this.keyboardLookupPrefix=""),this.keyboardLookupPrefix+=e.key.toLowerCase(),this.keyboardLookupLastTime=n;var s=this.allItems.findIndex((function(e){var i=(t.getText(e)||"").toString();return i.toLowerCase().startsWith(t.keyboardLookupPrefix)})),a=this.allItems[s];-1!==s&&(this.lastItem=Math.max(this.lastItem,s+5),this.setValue(this.returnObject?a:this.getValue(a)),this.$nextTick((function(){return t.$refs.menu.getTiles()})),setTimeout((function(){return t.setMenuIndex(s)})))}},onKeyDown:function(e){var t=this;if(!this.isReadonly||e.keyCode===j["r"].tab){var i=e.keyCode,n=this.$refs.menu;if([j["r"].enter,j["r"].space].includes(i)&&this.activateMenu(),this.$emit("keydown",e),n)return this.isMenuActive&&i!==j["r"].tab&&this.$nextTick((function(){n.changeListIndex(e),t.$emit("update:list-index",n.listIndex)})),!this.isMenuActive&&[j["r"].up,j["r"].down].includes(i)?this.onUpDown(e):i===j["r"].esc?this.onEscDown(e):i===j["r"].tab?this.onTabDown(e):i===j["r"].space?this.onSpaceDown(e):void 0}},onMenuActiveChange:function(e){if(!(this.multiple&&!e||this.getMenuIndex()>-1)){var t=this.$refs.menu;if(t&&this.isDirty)for(var i=0;i<t.tiles.length;i++)if("true"===t.tiles[i].getAttribute("aria-selected")){this.setMenuIndex(i);break}}},onMouseUp:function(e){var t=this;this.hasMouseDown&&3!==e.which&&this.isInteractive&&this.isAppendInner(e.target)&&this.$nextTick((function(){return t.isMenuActive=!t.isMenuActive})),q["a"].options.methods.onMouseUp.call(this,e)},onScroll:function(){var e=this;if(this.isMenuActive){if(this.lastItem>this.computedItems.length)return;var t=this.getContent().scrollHeight-(this.getContent().scrollTop+this.getContent().clientHeight)<200;t&&(this.lastItem+=20)}else requestAnimationFrame((function(){return e.getContent().scrollTop=0}))},onSpaceDown:function(e){e.preventDefault()},onTabDown:function(e){var t=this.$refs.menu;if(t){var i=t.activeTile;!this.multiple&&i&&this.isMenuActive?(e.preventDefault(),e.stopPropagation(),i.click()):this.blur(e)}},onUpDown:function(e){var t=this.$refs.menu;if(t){if(e.preventDefault(),this.multiple)return this.activateMenu();var i=e.keyCode;t.isBooted=!0,window.requestAnimationFrame((function(){t.getTiles(),j["r"].up===i?t.prevTile():t.nextTile(),t.activeTile&&t.activeTile.click()}))}},selectItem:function(e){var t=this;if(this.multiple){var i=(this.internalValue||[]).slice(),n=this.findExistingIndex(e);if(-1!==n?i.splice(n,1):i.push(e),this.setValue(i.map((function(e){return t.returnObject?e:t.getValue(e)}))),this.$nextTick((function(){t.$refs.menu&&t.$refs.menu.updateDimensions()})),!this.multiple)return;var s=this.getMenuIndex();if(this.setMenuIndex(-1),this.hideSelected)return;this.$nextTick((function(){return t.setMenuIndex(s)}))}else this.setValue(this.returnObject?e:this.getValue(e)),this.isMenuActive=!1},setMenuIndex:function(e){this.$refs.menu&&(this.$refs.menu.listIndex=e)},setSelectedItems:function(){var e,t=this,i=[],n=this.multiple&&Array.isArray(this.internalValue)?this.internalValue:[this.internalValue],s=Object(x["a"])(n);try{var a=function(){var n=e.value,s=t.allItems.findIndex((function(e){return t.valueComparator(t.getValue(e),t.getValue(n))}));s>-1&&i.push(t.allItems[s])};for(s.s();!(e=s.n()).done;)a()}catch(r){s.e(r)}finally{s.f()}this.selectedItems=i},setValue:function(e){var t=this.internalValue;this.internalValue=e,e!==t&&this.$emit("change",e)},isAppendInner:function(e){var t=this.$refs["append-inner"];return t&&(t===e||t.contains(e))}}}),X=i("2fa4"),Y=Object(c["a"])(l,n,s,!1,null,null,null);t["default"]=Y.exports;d()(Y,{VBtn:h["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["c"],VCol:f["a"],VContainer:v["a"],VForm:g["a"],VRow:b["a"],VSelect:G,VSpacer:X["a"],VTextField:q["a"]})},"6ece":function(e,t,i){},8547:function(e,t,i){"use strict";var n=i("2b0e"),s=i("80d2");t["a"]=n["default"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["h"]}}})},"99d9":function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return o})),i.d(t,"d",(function(){return l}));var n=i("b0af"),s=i("80d2"),a=Object(s["g"])("v-card__actions"),r=Object(s["g"])("v-card__subtitle"),o=Object(s["g"])("v-card__text"),l=Object(s["g"])("v-card__title");n["a"]},b0af:function(e,t,i){"use strict";i("0481"),i("4069"),i("a9e3");var n=i("5530"),s=(i("615b"),i("10d2")),a=i("297c"),r=i("1c87"),o=i("58df");t["a"]=Object(o["a"])(a["a"],r["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},r["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var e=Object(n["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=a["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),i=t.tag,n=t.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),e(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},b810:function(e,t,i){"use strict";var n=i("ce7e");t["a"]=n["a"]},cf36:function(e,t,i){}}]);
//# sourceMappingURL=chunk-50ca4de6.63905967.js.map