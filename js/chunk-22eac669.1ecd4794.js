(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22eac669"],{"83fc":function(e,t,r){},a253:function(e,t,r){"use strict";r("83fc")},c69a:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("96cf");var n=r("1da1"),a=r("d4ec"),u=r("bee2"),c=r("bc3a"),i=r.n(c),o=function(){function e(){Object(a["a"])(this,e)}return Object(u["a"])(e,[{key:"getApiVersion",value:function(){return i.a.get("GetApiVersion")}},{key:"getHomePageData",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()({url:"/api/GetHomePageData/"+t});case 3:return n=e.sent,a=n.data,r=a,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return",r);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getProductDetail",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()({url:"/api/GetProductDetail/"+t});case 3:return n=e.sent,a=n.data,r=a,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return",r);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getIndustries",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,i()({url:"/api/GetIndustries"});case 4:return r=e.sent,n=r.data,t=n,e.abrupt("return",t);case 10:return e.prev=10,e.t0=e["catch"](1),e.abrupt("return",t);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"getOrders",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,i()({url:"/api/GetOrders"});case 4:return r=e.sent,n=r.data,t=n,e.abrupt("return",t);case 10:return e.prev=10,e.t0=e["catch"](1),e.abrupt("return",t);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"getPeople",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,i()({url:"/api/GetPeople"});case 4:return r=e.sent,n=r.data,t=n.people,e.abrupt("return",t);case 10:return e.prev=10,e.t0=e["catch"](1),e.abrupt("return",t);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"makeOrder",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=null,e.prev=1,e.next=4,i()({url:"/SalesOrder",method:"POST",data:t});case 4:return n=e.sent,a=n.data,r=a,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e["catch"](1),e.abrupt("return",r);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getChatMessages",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],e.prev=1,e.next=4,i()({url:"/SalesChat/GetComments/"+t,method:"GET"});case 4:return n=e.sent,a=n.data,r=a,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e["catch"](1),e.abrupt("return",r);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));function t(t){return e.apply(this,arguments)}return t}()}]),e}()},e718:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{flat:"",tile:""}},[r("v-window",{staticClass:"elevation-1",attrs:{vertical:""},model:{value:e.window,callback:function(t){e.window=t},expression:"window"}},[r("v-window-item",[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",{staticClass:"ml-5"},[e._v(" "+e._s(e.$t("products.title")))])],1),r("products-slider",{attrs:{products:e.hotProducts},on:{"on-product-selection":e.onProductDetails}}),r("list-panes",{attrs:{industries:e.industries,productsIndustries:e.productsIndustries},on:{"on-industry-selection":e.handleSelection,"on-product-selection":e.onProductDetails}})],1),r("v-window-item",[r("v-card",{attrs:{flat:""}},[r("product-details",{attrs:{item:e.product},on:{"on-back-button":e.onBackButton}})],1)],1)],1)],1)},a=[],u=(r("99af"),r("4de4"),r("13d5"),r("d3b7"),r("96cf"),r("1da1")),c=r("a6f4"),i=r("c69a"),o=Object(c["c"])({name:"Product",components:{ProductDetails:function(){return Promise.all([r.e("chunk-07709945"),r.e("chunk-20af070c"),r.e("chunk-2d0e6c6b")]).then(r.bind(null,"3e97"))},ProductsSlider:function(){return r.e("chunk-d118d588").then(r.bind(null,"38a0"))},ListPanes:function(){return Promise.all([r.e("chunk-dff4dbb4"),r.e("chunk-dc360f26")]).then(r.bind(null,"d139"))}},setup:function(){var e="資訊中心",t=new i["a"],r=Object(c["f"])(0),n=Object(c["f"])([]),a=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getIndustries();case 2:a=e.sent,n.value=a,r.value=a[0].industryId;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a();var o=Object(c["a"])((function(){return n.value.filter((function(e){return e.industryId===r.value}))})),s=Object(c["a"])((function(){return n.value.reduce((function(e,t){return e.concat(t.products||[])}),[])})),l=Object(c["f"])(0),p=Object(c["f"])(["Hot Deal","All Products"]),d=Object(c["f"])("Lorem ipsum dolor sit amet, consect"),f=function(e){r.value=e};function v(e){console.log(e),b.value=e,b.value.src="https://referlo.azurewebsites.net"+b.value.src,w.value=1}var b=Object(c["f"])({});function h(){w.value=0}var w=Object(c["f"])(0);return{title:e,getIndustries:a,industries:n,selected:r,productsIndustries:o,tab:l,items:p,text:d,handleSelection:f,product:b,window:w,onProductDetails:v,onBackButton:h,hotProducts:s}}}),s=o,l=(r("a253"),r("0c7c")),p=r("6544"),d=r.n(p),f=r("b0af"),v=r("71d9"),b=r("2a7f"),h=r("f665"),w=r("1e6c"),m=Object(l["a"])(s,n,a,!1,null,null,null);t["default"]=m.exports;d()(m,{VCard:f["a"],VToolbar:v["a"],VToolbarTitle:b["a"],VWindow:h["a"],VWindowItem:w["a"]})}}]);
//# sourceMappingURL=chunk-22eac669.1ecd4794.js.map