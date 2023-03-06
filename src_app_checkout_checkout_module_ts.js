"use strict";
(self["webpackChunkeshop"] = self["webpackChunkeshop"] || []).push([["src_app_checkout_checkout_module_ts"],{

/***/ 2277:
/*!***************************************************************!*\
  !*** ./src/app/checkout/breadcrumbs/breadcrumbs.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbsComponent": () => (/* binding */ BreadcrumbsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);




function BreadcrumbsComponent_ng_container_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4)(1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function BreadcrumbsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BreadcrumbsComponent_ng_container_1_Template_span_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const menu_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.stageClicked(menu_r1.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BreadcrumbsComponent_ng_container_1_span_3_Template, 3, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fw-semibold", ctx_r0.activeMenu === menu_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menu_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 !== ctx_r0.menuItems.length - 1);
  }
}
class BreadcrumbsComponent {
  constructor() {
    this.stageUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  stageClicked(stage) {
    this.stageUpdated.emit(stage);
  }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) {
  return new (t || BreadcrumbsComponent)();
};
BreadcrumbsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BreadcrumbsComponent,
  selectors: [["app-checkout-breadcrumbs"]],
  inputs: {
    menuItems: "menuItems",
    activeMenu: "activeMenu"
  },
  outputs: {
    stageUpdated: "stageUpdated"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "d-flex", "bread-container", "align-items-center", "justify-content-around", "fs-l", "text-primary", "w-100"], [4, "ngFor", "ngForOf"], [3, "click"], ["class", "d-flex", 4, "ngIf"], [1, "d-flex"], [1, "icon"]],
  template: function BreadcrumbsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbsComponent_ng_container_1_Template, 4, 4, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
  styles: [".active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  height: 22px;\n  width: 26px;\n  line-height: 24px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2hlY2tvdXQvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFGRiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3Nhc3M6bWFwJztcbkBpbXBvcnQgXCJzcmMvc3R5bGluZ3MvYnNfdmFyaWFibGVzXCI7XG5cbi5hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmljb24ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9013:
/*!***********************************************************************!*\
  !*** ./src/app/checkout/checkout-layout/checkout-layout.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutLayoutComponent": () => (/* binding */ CheckoutLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/main-layout/main-layout.component */ 583);


const _c0 = [[["", "content", ""]], [["", "breadcrumb", ""]]];
const _c1 = ["[content]", "[breadcrumb]"];
class CheckoutLayoutComponent {}
CheckoutLayoutComponent.ɵfac = function CheckoutLayoutComponent_Factory(t) {
  return new (t || CheckoutLayoutComponent)();
};
CheckoutLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CheckoutLayoutComponent,
  selectors: [["app-checkout-layout"]],
  ngContentSelectors: _c1,
  decls: 5,
  vars: 1,
  consts: [[3, "showTopbarLinks"], ["content", ""], ["top-header-section", ""]],
  template: function CheckoutLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-main-layout", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showTopbarLinks", false);
    }
  },
  dependencies: [_shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainLayoutComponent],
  styles: [".bread-container[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #f1f1f1;\n  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.15);\n  min-height: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQtbGF5b3V0L2NoZWNrb3V0LWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2290:
/*!*****************************************************!*\
  !*** ./src/app/checkout/checkout-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutRoutingModule": () => (/* binding */ CheckoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thank-you/thank-you.component */ 126);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/guards/auth.guard */ 7574);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index/index.component */ 1641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: '',
  component: _index_index_component__WEBPACK_IMPORTED_MODULE_2__.IndexComponent,
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
},
// {
//   path: 'summary',
//   component: SummaryComponent,
//   canActivate: [AuthGuard]
// },
// {
//   path: 'place-order',
//   component: PlaceOrderComponent,
//   canActivate: [AuthGuard]
// },
{
  path: 'thank-you/:orderId',
  component: _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_0__.ThankYouComponent,
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}];
class CheckoutRoutingModule {}
CheckoutRoutingModule.ɵfac = function CheckoutRoutingModule_Factory(t) {
  return new (t || CheckoutRoutingModule)();
};
CheckoutRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CheckoutRoutingModule
});
CheckoutRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CheckoutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 8400:
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutModule": () => (/* binding */ CheckoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout-routing.module */ 2290);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details/details.component */ 3926);
/* harmony import */ var _checkout_layout_checkout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout-layout/checkout-layout.component */ 9013);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stepper/stepper.component */ 542);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ 2277);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summary/summary.component */ 1426);
/* harmony import */ var _place_order_place_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./place-order/place-order.component */ 6555);
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./thank-you/thank-you.component */ 126);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index/index.component */ 1641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);













class CheckoutModule {}
CheckoutModule.ɵfac = function CheckoutModule_Factory(t) {
  return new (t || CheckoutModule)();
};
CheckoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: CheckoutModule
});
CheckoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckoutRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CheckoutModule, {
    declarations: [_details_details_component__WEBPACK_IMPORTED_MODULE_1__.DetailsComponent, _checkout_layout_checkout_layout_component__WEBPACK_IMPORTED_MODULE_2__.CheckoutLayoutComponent, _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_4__.StepperComponent, _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbsComponent, _summary_summary_component__WEBPACK_IMPORTED_MODULE_6__.SummaryComponent, _place_order_place_order_component__WEBPACK_IMPORTED_MODULE_7__.PlaceOrderComponent, _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_8__.ThankYouComponent, _index_index_component__WEBPACK_IMPORTED_MODULE_9__.IndexComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckoutRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule]
  });
})();

/***/ }),

/***/ 3926:
/*!*******************************************************!*\
  !*** ./src/app/checkout/details/details.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsComponent": () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/auto-destroy */ 7990);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _core_models_address_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models/address.model */ 2426);
/* harmony import */ var _account_pages_addresses_edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../account/pages/addresses/edit/edit.component */ 319);
/* harmony import */ var _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/enums/microservice-type.enum */ 7502);
/* harmony import */ var _models_shipping_method_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/shipping-method.model */ 9017);
/* harmony import */ var _models_payment_method_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/payment-method.model */ 646);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _core_services_auth_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/auth-user.service */ 6922);
/* harmony import */ var _core_services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/cart.service */ 4128);
/* harmony import */ var _core_services_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/order.service */ 6854);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/notification.service */ 1645);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_price_price_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/price/price.component */ 9563);
/* harmony import */ var _shared_components_product_thumbnail_product_thumbnail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/product-thumbnail/product-thumbnail.component */ 7124);
/* harmony import */ var _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/directives/loading.directive */ 3570);
/* harmony import */ var _shared_components_skeleton_loaders_skeleton_loader_grid_skeleton_loader_grid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/components/skeleton-loaders/skeleton-loader-grid/skeleton-loader-grid.component */ 4546);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _checkout_layout_checkout_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../checkout-layout/checkout-layout.component */ 9013);
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../stepper/stepper.component */ 542);
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../breadcrumbs/breadcrumbs.component */ 2277);




























function DetailsComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainer"](0);
  }
}
function DetailsComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainer"](0);
  }
}
function DetailsComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainer"](0);
  }
}
function DetailsComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainer"](0);
  }
}
function DetailsComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainer"](0);
  }
}
function DetailsComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainer"](0);
  }
}
function DetailsComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainer"](0);
  }
}
function DetailsComponent_ng_template_19_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Delivery address");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 23)(4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DetailsComponent_ng_template_19_div_0_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r27.updateActiveStageTo("Address"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "mat-divider", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r25.selectedAddr == null ? null : ctx_r25.selectedAddr.addressLine1);
  }
}
function DetailsComponent_ng_template_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Delivery option");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 23)(4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "app-price", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DetailsComponent_ng_template_19_div_1_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r29.updateActiveStageTo("Delivery"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](10, "mat-divider", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", ctx_r26.selectedDelMethod == null ? null : ctx_r26.selectedDelMethod.name, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("amount", ctx_r26.selectedDelMethod == null ? null : ctx_r26.selectedDelMethod.getCost((tmp_1_0 = ctx_r26.cart == null ? null : ctx_r26.cart.total) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0))("currency", ctx_r26.selectedDelMethod == null ? null : ctx_r26.selectedDelMethod.currency);
  }
}
function DetailsComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, DetailsComponent_ng_template_19_div_0_Template, 9, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, DetailsComponent_ng_template_19_div_1_Template, 11, 3, "div", 20);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r8.activeStage === "Payment" || ctx_r8.activeStage === "Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r8.activeStage === "Payment");
  }
}
function DetailsComponent_ng_template_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " By placing your order you agree to our ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "Terms and Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_21_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DetailsComponent_ng_template_21_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r35.moveToNextStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_ng_template_21_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DetailsComponent_ng_template_21_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r37.placeOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " Place your order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("appLoading", ctx_r33.loading["order"]);
  }
}
function DetailsComponent_ng_template_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, " Asking for consent by clearly disclosing what the consent is being given to and how the data will be used. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
}
function DetailsComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, DetailsComponent_ng_template_21_div_2_Template, 8, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, DetailsComponent_ng_template_21_button_4_Template, 2, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, DetailsComponent_ng_template_21_button_5_Template, 2, 1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, DetailsComponent_ng_template_21_div_6_Template, 4, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 5)(8, "div", 31)(9, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DetailsComponent_ng_template_21_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r39.showCheckoutSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](11, "mat-divider", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r10.activeStage === "Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r10.activeStage !== "Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r10.activeStage === "Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r10.activeStage !== "Payment");
  }
}
function DetailsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "mat-card", 43)(2, "div", 44)(3, "span", 45)(4, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "local_shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 8)(7, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8, "Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, "Track the progress of your order in real time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12, "Find out more");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "mat-card", 50)(14, "div", 44)(15, "span", 51)(16, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17, "undo");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "div", 8)(19, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](20, "Return policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](22, "30 day money-back returns if you change your mind.");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24, "Find out more");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
  }
}
function DetailsComponent_ng_template_25_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "app-product-thumbnail", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 59)(3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DetailsComponent_ng_template_25_div_9_Template_div_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r45);
      const i_r43 = restoredCtx.index;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r44.removeCartProduct(i_r43));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "mat-divider", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("product", product_r42);
  }
}
function DetailsComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "mat-expansion-panel", 52)(2, "mat-expansion-panel-header", 53)(3, "mat-panel-title", 54)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](7, "app-price", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, DetailsComponent_ng_template_25_div_9_Template, 9, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("Order summary (", (tmp_0_0 = ctx_r14.cart == null ? null : ctx_r14.cart.products == null ? null : ctx_r14.cart.products.length) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0, " items)");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("amount", (tmp_1_0 = ctx_r14.cart == null ? null : ctx_r14.cart.total) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r14.cart == null ? null : ctx_r14.cart.products);
  }
}
function DetailsComponent_ng_template_27_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-card", 67)(1, "div", 68)(2, "div", 69)(3, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DetailsComponent_ng_template_27_mat_card_1_Template_input_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r49);
      const payMethod_r47 = restoredCtx.$implicit;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r48.payMethodSelected(payMethod_r47));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DetailsComponent_ng_template_27_mat_card_1_Template_div_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r49);
      const payMethod_r47 = restoredCtx.$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r50.payMethodSelected(payMethod_r47));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const payMethod_r47 = ctx.$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("checked", payMethod_r47.type.value === (ctx_r46.selectedPayMethod == null ? null : ctx_r46.selectedPayMethod.type == null ? null : ctx_r46.selectedPayMethod.type.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](payMethod_r47.type.name);
  }
}
function DetailsComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, DetailsComponent_ng_template_27_mat_card_1_Template, 7, 2, "mat-card", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "mat-divider", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r16.paymentMethods);
  }
}
function DetailsComponent_ng_template_29_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainer"](0);
  }
}
function DetailsComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, DetailsComponent_ng_template_29_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassProp"]("active-stage", ctx_r18.activeStage === "Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngTemplateOutlet", _r15);
  }
}
function DetailsComponent_ng_template_31_div_3_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-card", 67)(1, "div", 77)(2, "div", 69)(3, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DetailsComponent_ng_template_31_div_3_mat_card_1_Template_input_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r57);
      const deliveryMethod_r55 = restoredCtx.$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r56.delMethodSelected(deliveryMethod_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DetailsComponent_ng_template_31_div_3_mat_card_1_Template_div_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r57);
      const deliveryMethod_r55 = restoredCtx.$implicit;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r58.delMethodSelected(deliveryMethod_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "app-price", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const deliveryMethod_r55 = ctx.$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("checked", deliveryMethod_r55.name === (ctx_r54.selectedDelMethod == null ? null : ctx_r54.selectedDelMethod.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](deliveryMethod_r55.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("amount", deliveryMethod_r55.getCost((tmp_2_0 = ctx_r54.cart == null ? null : ctx_r54.cart.total) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0));
  }
}
function DetailsComponent_ng_template_31_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, DetailsComponent_ng_template_31_div_3_mat_card_1_Template, 9, 3, "mat-card", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r52.deliveryMethods);
  }
}
function DetailsComponent_ng_template_31_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 81)(1, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("Arrival estimated at ", ctx_r53.selectedDelMethod.name, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](5, 2, ctx_r53.selectedDelMethod.estimatedTimeDelivery, "dd.MM.YYYY"));
  }
}
function DetailsComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 72)(1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Delivery options");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, DetailsComponent_ng_template_31_div_3_Template, 2, 1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, DetailsComponent_ng_template_31_div_4_Template, 6, 5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](5, "mat-divider", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassProp"]("active-stage", ctx_r20.activeStage === "Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r20.deliveryMethods !== undefined)("ngIfElse", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r20.selectedDelMethod);
  }
}
function DetailsComponent_ng_template_33_div_3_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-card", 89)(1, "div", 68)(2, "div", 69)(3, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DetailsComponent_ng_template_33_div_3_mat_card_1_Template_input_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r63);
      const address_r61 = restoredCtx.$implicit;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r62.addrSelected(address_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DetailsComponent_ng_template_33_div_3_mat_card_1_Template_div_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r63);
      const address_r61 = restoredCtx.$implicit;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r64.addrSelected(address_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 91)(12, "mat-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const address_r61 = ctx.$implicit;
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("checked", address_r61.id === (ctx_r60.selectedAddr == null ? null : ctx_r60.selectedAddr.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r60.user == null ? null : ctx_r60.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r60.user == null ? null : ctx_r60.user.phoneNumber == null ? null : ctx_r60.user.phoneNumber.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](address_r61 == null ? null : address_r61.addressLine1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassProp"]("featured", address_r61.defaultAddress);
  }
}
function DetailsComponent_ng_template_33_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, DetailsComponent_ng_template_33_div_3_mat_card_1_Template, 14, 6, "mat-card", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r59.addresses);
  }
}
function DetailsComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 72)(1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Delivery address");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, DetailsComponent_ng_template_33_div_3_Template, 2, 1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 84)(5, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function DetailsComponent_ng_template_33_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r66);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r65.showAddAddressDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7, "Add new address");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "Add new");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](10, "mat-divider", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassProp"]("active-stage", ctx_r22.activeStage === "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r22.addresses !== undefined)("ngIfElse", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMap"]((ctx_r22.addresses == null ? null : ctx_r22.addresses.length) ? "btn-outline-primary" : "btn-primary");
  }
}
function DetailsComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-skeleton-loader-grid", 93)(1, "app-skeleton-loader-grid", 93);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("count", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("count", 1);
  }
}
class DetailsComponent extends _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__.AutoDestroy {
  constructor(api, authService, cartService, orderService, notifier, dialog, router) {
    super();
    this.api = api;
    this.authService = authService;
    this.cartService = cartService;
    this.orderService = orderService;
    this.notifier = notifier;
    this.dialog = dialog;
    this.router = router;
    this.nextStage = new _angular_core__WEBPACK_IMPORTED_MODULE_18__.EventEmitter();
    this.steps = ['Cart', 'Order details', 'Order summary', 'Place order'];
    this.menuItems = [{
      slug: 'address',
      title: 'Address'
    }, {
      slug: 'delivery',
      title: 'Delivery'
    }, {
      slug: 'payment',
      title: 'Payment'
    }];
    this.active = 1;
    this.activeStage = 'Address';
    this.loading = {
      'order': false
    };
    this.paymentMethods = [];
    this.products = [];
    this.total = 0;
  }
  ngOnInit() {
    this.fetchAddresses();
    this.fetchDeliveryMethods();
    this.fetchPaymentMethods();
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
    });
    this.authService.getAuthUser().subscribe(user => this.user = user);
  }
  addrSelected(addr) {
    this.selectedAddr = addr;
    this.fetchDeliveryMethods();
  }
  delMethodSelected(method) {
    this.selectedDelMethod = method;
  }
  payMethodSelected(payMethod) {
    this.selectedPayMethod = payMethod;
  }
  removeCartProduct(index) {
    const products = this.cart.products.splice(index, 1);
    this.cartService.removeProduct(products[0]).subscribe();
  }
  showAddAddressDialog() {
    const address = _core_models_address_model__WEBPACK_IMPORTED_MODULE_1__.Address.adapt({});
    const dialogRef = this.dialog.open(_account_pages_addresses_edit_edit_component__WEBPACK_IMPORTED_MODULE_2__.EditAddressComponent, {
      panelClass: 'responsive-dialog',
      data: {
        mode: 'add',
        address
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(address => {
      if (address) {
        this.handleAddAddr(address);
      }
    });
  }
  handleAddAddr(address) {
    address.defaultAddress = false;
    address.addressType = _core_models_address_model__WEBPACK_IMPORTED_MODULE_1__.AddressType.DELIVERY;
    this.addresses?.push(address);
    this.selectedAddr = address;
    this.api.post('lunaaddress', address.toDto(), _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_3__.MicroserviceType.usr).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.catchError)((err, caught) => {
      const adrIndex = this.addresses?.findIndex(addr => address === addr);
      if (adrIndex) {
        this.addresses?.splice(adrIndex, 1);
        this.selectedAddr = this.addresses?.[0];
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.throwError)(() => err);
    })).subscribe();
  }
  fetchAddresses() {
    this.api.get('lunaaddress?addressType=DELIVERY', _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_3__.MicroserviceType.usr).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(data => {
      data = data || [];
      this.addresses = data.map(_core_models_address_model__WEBPACK_IMPORTED_MODULE_1__.Address.adapt);
      this.selectedAddr = this.addresses?.find(x => x.defaultAddress);
      if (!this.selectedAddr && this.addresses?.[0]) {
        this.selectedAddr = this.addresses[0];
      }
    });
  }
  fetchPaymentMethods() {
    this.api.get('settings/payment/available', _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_3__.MicroserviceType.acc).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(data => {
      this.paymentMethods = data.map(method => new _models_payment_method_model__WEBPACK_IMPORTED_MODULE_5__.PaymentMethod(method));
      this.selectedPayMethod = this.paymentMethods[0];
    });
  }
  fetchDeliveryMethods() {
    const params = {
      countryCode: this.selectedAddr?.country,
      stateCode: this.selectedAddr?.region
    };
    this.api.get('settings/shipping/available', _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_3__.MicroserviceType.del, {
      params
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.destroy$)).subscribe(data => {
      this.deliveryMethods = data.map(method => new _models_shipping_method_model__WEBPACK_IMPORTED_MODULE_4__.ShippingMethod(method));
      this.selectedDelMethod = this.deliveryMethods[0];
    });
  }
  updateActiveStageTo(stage) {
    this.activeStage = stage;
    window.scroll({
      top: 50,
      left: 0,
      behavior: 'auto'
    });
  }
  moveToNextStage() {
    const nextStage = {
      Address: 'Delivery',
      Delivery: 'Payment'
    };
    this.updateActiveStageTo(nextStage[this.activeStage]);
  }
  placeOrder() {
    const order = {
      paymentType: {
        id: this.selectedPayMethod.id
      },
      deliveryShippingId: this.selectedDelMethod.id,
      products: this.cart.products.map(product => ({
        productId: product.id,
        randomProductId: product.randomProductId,
        quantity: product.quantity
      })),
      buyerAddress: this.selectedAddr,
      deliveryAddress: this.selectedAddr
    };
    this.loading['order'] = true;
    this.orderService.add(order).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.catchError)(error => {
      this.loading['order'] = false;
      this.notifier.showError([error.status]);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.throwError)(() => error);
    })).subscribe(orderId => {
      this.loading['order'] = false;
      this.cartService.emptyCart();
      this.router.navigate([`/checkout/thank-you/${orderId}`]);
    });
  }
  showCheckoutSummary() {
    this.nextStage.emit({
      address: this.selectedAddr,
      deliveryMethod: this.selectedDelMethod,
      paymentMethod: this.selectedPayMethod
    });
  }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) {
  return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_auth_user_service__WEBPACK_IMPORTED_MODULE_7__.AuthUserService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_cart_service__WEBPACK_IMPORTED_MODULE_8__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_order_service__WEBPACK_IMPORTED_MODULE_9__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_22__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router));
};
DetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
  type: DetailsComponent,
  selectors: [["app-details"]],
  outputs: {
    nextStage: "nextStage"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]],
  decls: 37,
  vars: 11,
  consts: [["breadcrumb", ""], [1, "d-flex", "d-lg-none", "mb-5", "bread-container", "px-2", 3, "activeMenu", "menuItems", "stageUpdated"], ["content", "", 1, "m-auto", 2, "max-width", "800px"], [1, "justify-content-center", "mt-3", "d-lg-flex", "d-none", "px-4"], [1, "w-100", 3, "steps", "active"], [1, "d-none", "d-lg-block"], [1, "fs-3xl", "fw-bold", "mt-3"], [1, "my-3"], [1, "d-flex", "flex-column"], [4, "ngTemplateOutlet"], [1, "mt-4", "mb-5", "mx-n4", "mx-sm-0", "divider-light"], ["checkoutSummaryRef", ""], ["nextBtnsRef", ""], ["delRetPolicyRef", ""], ["cartSummaryRef", ""], ["payMethodsRef", ""], ["paymentsRef", ""], ["delMethodsRef", ""], ["addressesRef", ""], ["loadingRef", ""], ["class", "mb-3 d-lg-none", 4, "ngIf"], [1, "mb-3", "d-lg-none"], [1, "fs-l"], [1, "d-flex", "justify-content-between", "mt-3"], [1, "fs-s"], [1, "fs-l", 3, "click"], [1, "mt-3", "mx-n4", "mx-sm-0", "divider-light"], [3, "amount", "currency"], [1, "mb-5"], [1, "d-block", "d-lg-none"], ["class", "fs-s mb-5 pp-wrapper", 4, "ngIf"], [1, "d-flex", "justify-content-center"], ["class", "btn btn-primary px-5 fs-l col-12 col-sm-auto", 3, "click", 4, "ngIf"], ["class", "btn btn-primary px-5 fs-l col-12 col-sm-auto", 3, "appLoading", "click", 4, "ngIf"], ["class", "d-flex mt-5 content-wrapper", 4, "ngIf"], [1, "btn", "btn-primary", "px-5", "fs-l", "col-12", "col-sm-auto", 3, "click"], [1, "divider-light", "mx-n4", "mx-sm-0", "mt-4"], [1, "fs-s", "mb-5", "pp-wrapper"], ["href", "#", 1, "fw-bold"], [1, "btn", "btn-primary", "px-5", "fs-l", "col-12", "col-sm-auto", 3, "appLoading", "click"], [1, "d-flex", "mt-5", "content-wrapper"], ["type", "checkbox", 1, "form-check-input"], [1, "fs-s", "ms-2", "label"], [1, "checkout-card", "shadow-none"], [1, "d-flex", "align-items-start"], [1, "me-3", "bordered-icon", "checkout-bordered-icon", "mt-1"], [1, "icon", "text-primary"], [1, "fs-l", "fw-semibold"], [1, "opacity-50", "mt-1"], ["href", "#", 1, "fs-s", "mt-1"], [1, "checkout-card", "shadow-none", "mt-5"], [1, "me-3", "bordered-icon", "mt-1", "checkout-bordered-icon"], [1, "shadow-none"], [1, "ps-0", "pe-2", "px-md-3", 2, "height", "70px"], [1, "d-flex", "flex-column", "align-items-start", "fw-bold", "fs-l"], [1, "mt-3"], [3, "amount"], [4, "ngFor", "ngForOf"], [3, "product"], [1, "d-flex", "justify-content-end", "text-primary", "mt-2"], [1, "d-flex", "cur-pointer", 3, "click"], ["inline", "", 1, "fs-l"], [1, "text-decoration-underline", "fs-s"], [1, "mb-3", "mt-2", "mx-n4", "mx-sm-0"], [1, "d-flex", "flex-column", "mt-3"], ["class", "checkout-card mb-2r", 4, "ngFor", "ngForOf"], [1, "mt-5", "divider-light", "mx-n4", "mx-sm-0"], [1, "checkout-card", "mb-2r"], [1, "d-flex"], [1, "d-flex", "align-items-center", "pe-4"], ["type", "radio", 1, "form-check-input", "fs-xl", "cur-pointer", 3, "checked", "click"], [1, "d-flex", "flex-column", "fs-l", "flex-grow-1", "py-3", "cur-pointer", 3, "click"], [1, "d-lg-flex", "flex-column", "checkout-stage"], [1, "d-inline-block", "fs-l", "fw-bold", "ms-0", "ms-lg-4", "mb-4", "mb-lg-3"], [4, "ngIf", "ngIfElse"], ["class", "alert alert-primary text-black-87 fs-s mb-0", 4, "ngIf"], [1, "mt-5", "mx-n4", "mx-sm-0"], [1, "d-flex", "fs-s", "fs-lg-l"], [1, "d-flex", "flex-grow-1", "py-3", "cur-pointer", 3, "click"], [1, "m-auto"], [1, "fw-bold", 3, "amount"], [1, "alert", "alert-primary", "text-black-87", "fs-s", "mb-0"], [1, "me-2"], [1, "fw-bold"], [1, "mt-3", "mb-3", "d-flex", "justify-content-center"], [1, "btn", "col-12", "col-sm-auto", "fs-3xl", 3, "click"], [1, "d-none", "d-lg-inline"], [1, "d-lg-none"], ["class", "checkout-card mb-2r shadow-md-none", 4, "ngFor", "ngForOf"], [1, "checkout-card", "mb-2r", "shadow-md-none"], [1, "d-flex", "flex-column", "fs-s", "fs-lg-l", "flex-grow-1", "cur-pointer", 3, "click"], [1, "d-none", "d-md-block"], [1, "feature-icon"], [3, "count"]],
  template: function DetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-checkout-layout")(1, "div", 0)(2, "app-checkout-breadcrumbs", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("stageUpdated", function DetailsComponent_Template_app_checkout_breadcrumbs_stageUpdated_2_listener($event) {
        return ctx.activeStage = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](5, "app-stepper", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8, "Order details");
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](9, "mat-divider", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](11, DetailsComponent_ng_container_11_Template, 1, 0, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, DetailsComponent_ng_container_12_Template, 1, 0, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](13, DetailsComponent_ng_container_13_Template, 1, 0, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](14, DetailsComponent_ng_container_14_Template, 1, 0, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, DetailsComponent_ng_container_15_Template, 1, 0, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](16, "mat-divider", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](17, DetailsComponent_ng_container_17_Template, 1, 0, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](18, DetailsComponent_ng_container_18_Template, 1, 0, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, DetailsComponent_ng_template_19_Template, 2, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, DetailsComponent_ng_template_21_Template, 12, 4, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](23, DetailsComponent_ng_template_23_Template, 25, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](25, DetailsComponent_ng_template_25_Template, 10, 3, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](27, DetailsComponent_ng_template_27_Template, 3, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](29, DetailsComponent_ng_template_29_Template, 2, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](31, DetailsComponent_ng_template_31_Template, 6, 5, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](33, DetailsComponent_ng_template_33_Template, 11, 6, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](35, DetailsComponent_ng_template_35_Template, 2, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](20);
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](22);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](24);
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](26);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](30);
      const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](32);
      const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("activeMenu", ctx.activeStage)("menuItems", ctx.menuItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("steps", ctx.steps)("active", ctx.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngTemplateOutlet", _r21);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngTemplateOutlet", _r19);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngTemplateOutlet", _r17);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngTemplateOutlet", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngTemplateOutlet", _r13);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngTemplateOutlet", _r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngTemplateOutlet", _r11);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgTemplateOutlet, _shared_components_price_price_component__WEBPACK_IMPORTED_MODULE_11__.PriceComponent, _shared_components_product_thumbnail_product_thumbnail_component__WEBPACK_IMPORTED_MODULE_12__.ProductThumbnailComponent, _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_13__.LoadingDirective, _shared_components_skeleton_loaders_skeleton_loader_grid_skeleton_loader_grid_component__WEBPACK_IMPORTED_MODULE_14__.SkeletonLoaderGridComponent, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_25__.MatLegacyCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__.MatDivider, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__.MatExpansionPanelTitle, _checkout_layout_checkout_layout_component__WEBPACK_IMPORTED_MODULE_15__.CheckoutLayoutComponent, _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_16__.StepperComponent, _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.DatePipe],
  styles: ["[_nghost-%COMP%]     .mat-expansion-indicator::after {\n  color: #1b3664;\n  padding: 4px;\n}\n[_nghost-%COMP%]     .mat-expansion-panel-body {\n  padding: 1rem;\n}\n\n.bread-container[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #f1f1f1;\n  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.15);\n  min-height: 50px;\n}\n\n.checkout-card[_ngcontent-%COMP%] {\n  border: solid 1px #54688b;\n  box-shadow: none;\n}\n@media screen and (min-width: 992px) {\n  .checkout-card[_ngcontent-%COMP%] {\n    box-shadow: 0 10px 15px 0 rgba(27, 54, 100, 0.25);\n  }\n}\n\n.mx-n4[_ngcontent-%COMP%] {\n  margin-left: -1.5rem;\n  margin-right: -1.5rem;\n}\n\n.feature-icon[_ngcontent-%COMP%] {\n  color: #eaeaea;\n}\n.feature-icon.featured[_ngcontent-%COMP%] {\n  color: #f06724;\n}\n\n.checkout-bordered-icon[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.25rem 0.1875rem;\n}\n\n.checkout-stage[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n}\n.checkout-stage[_ngcontent-%COMP%]:not(.active-stage) {\n  display: none;\n}\n\n.pp-wrapper[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.content-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-width: 24px;\n  height: 24px;\n}\n.content-wrapper[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n  margin-top: 1px;\n}\n\napp-product-thumbnail[_ngcontent-%COMP%] {\n  max-height: 145px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2hlY2tvdXQvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxpbmdzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLGNDcUdZO0VEcEdaLFlBQUE7QUFISjtBQUtFO0VBQ0UsYUFBQTtBQUhKOztBQU9BO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQUpGO0FBTUU7RUFKRjtJQUtJLGlEQUFBO0VBSEY7QUFDRjs7QUFPQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjtBQU1FO0VBQ0UsY0NvRWM7QUR4RWxCOztBQVFBO0VBQ0Usa0NBQUE7QUFMRjs7QUFRQTtFQUVFLHNCQUFBO0FBTkY7QUFRRTtFQUNFLGFBQUE7QUFOSjs7QUFVQTtFQUNFLHlCQUFBO0FBUEY7O0FBV0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQVJKO0FBV0U7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFUSjs7QUFhQTtFQUNFLGlCQUFBO0FBVkYiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOm1hcCc7XG5AaW1wb3J0ICdzcmMvc3R5bGluZ3MvYnNfdmFyaWFibGVzJztcblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgfVxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG59XG5cbi5icmVhZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xufVxuXG4uY2hlY2tvdXQtY2FyZCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICM1NDY4OGI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbWFwLmdldCgkZ3JpZC1icmVha3BvaW50cywgJ2xnJykpIHtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAwIHJnYmEoMjcsIDU0LCAxMDAsIDAuMjUpO1xuICB9XG5cbn1cblxuLm14LW40IHtcbiAgbWFyZ2luLWxlZnQ6IC0xLjVyZW07XG4gIG1hcmdpbi1yaWdodDogLTEuNXJlbTtcbn1cblxuLmZlYXR1cmUtaWNvbiB7XG4gIGNvbG9yOiAjZWFlYWVhO1xuXG4gICYuZmVhdHVyZWQge1xuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICB9XG59XG5cbi5jaGVja291dC1ib3JkZXJlZC1pY29uIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjI1cmVtIDAuMTg3NXJlbVxufVxuXG4uY2hlY2tvdXQtc3RhZ2Uge1xuXG4gIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG5cbiAgJjpub3QoLmFjdGl2ZS1zdGFnZSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnBwLXdyYXBwZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpXG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBpbnB1dCB7XG4gICAgbWluLXdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweFxuICB9XG5cbiAgc3Bhbi5sYWJlbCB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBtYXJnaW4tdG9wOiAxcHhcbiAgfVxufVxuXG5hcHAtcHJvZHVjdC10aHVtYm5haWwge1xuICBtYXgtaGVpZ2h0OiAxNDVweDtcbn1cbiIsIi8vQGltcG9ydCBcIn5ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XG4vL0BpbXBvcnQgXCJ+bm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4kYmx1ZS1wYWxldHRlOiAoXG4gIDUwOiAjZTRlN2VjLFxuICAxMDA6ICNlOWViZjAsXG4gIDIwMDogI2M2Y2NkYixcbiAgMzAwOiAjOGQ5YmIyLFxuICA0MDA6ICM1NDY4OGIsXG4gIDUwMDogIzFiMzY2NCxcbiAgNjAwOiAjMTgzMDVjLFxuICA3MDA6ICMxNDI5NTIsXG4gIDgwMDogIzEwMjI0OCxcbiAgOTAwOiAjMDgxNjM2LFxuICBBMTAwOiAjNmY5MmZmLFxuICBBMjAwOiAjM2M2Y2ZmLFxuICBBNDAwOiAjMDk0NWZmLFxuICBBNzAwOiAjMDAzYWVmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAjMDAwMDAwLFxuICAgIDEwMDogIzAwMDAwMCxcbiAgICAyMDA6ICMwMDAwMDAsXG4gICAgMzAwOiAjZmZmZmZmLFxuICAgIDQwMDogI2ZmZmZmZixcbiAgICA1MDA6ICNmZmZmZmYsXG4gICAgNjAwOiAjZmZmZmZmLFxuICAgIDcwMDogI2ZmZmZmZixcbiAgICA4MDA6ICNmZmZmZmYsXG4gICAgOTAwOiAjZmZmZmZmLFxuICAgIEExMDA6ICMwMDAwMDAsXG4gICAgQTIwMDogI2ZmZmZmZixcbiAgICBBNDAwOiAjZmZmZmZmLFxuICAgIEE3MDA6ICNmZmZmZmYsXG4gICksXG4pO1xuXG4kb3JhbmdlLXBhbGV0dGU6IChcbiAgNTA6ICNmZGVkZTUsXG4gIDEwMDogI2ZlZjBlYSxcbiAgMjAwOiAjZmJkOWM4LFxuICAzMDA6ICNmOGIzOTIsXG4gIDQwMDogI2Y0OGQ1YixcbiAgNTAwOiAjZjA2NzI0LFxuICA2MDA6ICNlZTVmMjAsXG4gIDcwMDogI2VjNTQxYixcbiAgODAwOiAjZTk0YTE2LFxuICA5MDA6ICNlNTM5MGQsXG4gIEExMDA6ICNmZmZmZmYsXG4gIEEyMDA6ICNmZmUzZGQsXG4gIEE0MDA6ICNmZmI4YWEsXG4gIEE3MDA6ICNmZmEzOTAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICNmZmZmZmYsXG4gICAgMTAwOiAjZmZmZmZmLFxuICAgIDIwMDogI2ZmZmZmZixcbiAgICAzMDA6ICNmZmZmZmYsXG4gICAgNDAwOiAjZmZmZmZmLFxuICAgIDUwMDogI2ZmZmZmZixcbiAgICA2MDA6ICNmZmZmZmYsXG4gICAgNzAwOiAjZmZmZmZmLFxuICAgIDgwMDogI2ZmZmZmZixcbiAgICA5MDA6ICNmZmZmZmYsXG4gICAgQTEwMDogI2ZmZmZmZixcbiAgICBBMjAwOiAjZmZmZmZmLFxuICAgIEE0MDA6ICNmZmZmZmYsXG4gICAgQTcwMDogI2ZmZmZmZixcbiAgKSxcbik7XG5cbiRyZWQtcGFsZXR0ZTogKFxuICA1MDogI2ZmZWJlZSxcbiAgMTAwOiAjZmZjZGQyLFxuICAyMDA6ICNlZjlhOWEsXG4gIDMwMDogI2U1NzM3MyxcbiAgNDAwOiAjZWY1MzUwLFxuICA1MDA6ICNmZjAwMDAsXG4gIDYwMDogI2U1MzkzNSxcbiAgNzAwOiAjZDMyZjJmLFxuICA4MDA6ICNjNjI4MjgsXG4gIDkwMDogI2I3MWMxYyxcbiAgQTEwMDogI2ZmOGE4MCxcbiAgQTIwMDogI2ZmNTI1MixcbiAgQTQwMDogI2ZmMTc0NCxcbiAgQTcwMDogI2Q1MDAwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogcmdiYShibGFjaywgMC44NyksXG4gICAgMTAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICAyMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDMwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgNDAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICA1MDA6IHdoaXRlLFxuICAgIDYwMDogd2hpdGUsXG4gICAgNzAwOiB3aGl0ZSxcbiAgICA4MDA6IHdoaXRlLFxuICAgIDkwMDogd2hpdGUsXG4gICAgQTEwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgQTIwMDogd2hpdGUsXG4gICAgQTQwMDogd2hpdGUsXG4gICAgQTcwMDogd2hpdGUsXG4gIClcbik7XG5cbiRwcmltYXJ5LXBhbGV0dGU6ICRibHVlLXBhbGV0dGU7XG4kYWNjZW50LXBhbGV0dGU6ICRvcmFuZ2UtcGFsZXR0ZTtcbiRzZWNvbmRhcnktcGFsZXR0ZTogJG9yYW5nZS1wYWxldHRlO1xuXG4kcHJpbWFyeS1jb2xvcjogbWFwLWdldCgkcHJpbWFyeS1wYWxldHRlLCA1MDApO1xuJHNlY29uZGFyeS1jb2xvcjogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDUwMCk7XG4kc2Vjb25kYXJ5LTMwMDogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDMwMCk7XG4kcHJpbWFyeS00MDA6IG1hcC1nZXQoJHByaW1hcnktcGFsZXR0ZSwgNDAwKTtcbiRlcnJvci1jb2xvcjogbWFwLWdldCgkcmVkLXBhbGV0dGUsIDUwMCk7XG5cbiRtYXgtd2lkdGg6IDEzNjZweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1641:
/*!***************************************************!*\
  !*** ./src/app/checkout/index/index.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexComponent": () => (/* binding */ IndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../details/details.component */ 3926);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../summary/summary.component */ 1426);




function IndexComponent_app_cart_summary_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-cart-summary", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("previousStage", function IndexComponent_app_cart_summary_1_Template_app_cart_summary_previousStage_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.moveToDetailStage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("address", ctx_r0.address)("paymentMethod", ctx_r0.paymentMethod)("deliveryMethod", ctx_r0.deliveryMethod);
  }
}
class IndexComponent {
  constructor() {
    this.step = 'detail';
  }
  moveToSummaryStage(selected) {
    this.address = selected.address;
    this.deliveryMethod = selected.deliveryMethod;
    this.paymentMethod = selected.paymentMethod;
    this.step = 'summary';
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }
  moveToDetailStage() {
    this.step = 'detail';
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) {
  return new (t || IndexComponent)();
};
IndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: IndexComponent,
  selectors: [["app-index"]],
  decls: 2,
  vars: 3,
  consts: [[3, "nextStage"], [3, "address", "paymentMethod", "deliveryMethod", "previousStage", 4, "ngIf"], [3, "address", "paymentMethod", "deliveryMethod", "previousStage"]],
  template: function IndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-details", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nextStage", function IndexComponent_Template_app_details_nextStage_0_listener($event) {
        return ctx.moveToSummaryStage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, IndexComponent_app_cart_summary_1_Template, 1, 3, "app-cart-summary", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("d-none", ctx.step !== "detail");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.step === "summary");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _details_details_component__WEBPACK_IMPORTED_MODULE_0__.DetailsComponent, _summary_summary_component__WEBPACK_IMPORTED_MODULE_1__.SummaryComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 646:
/*!*********************************************************!*\
  !*** ./src/app/checkout/models/payment-method.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentMethod": () => (/* binding */ PaymentMethod),
/* harmony export */   "PaymentMethodBankDetails": () => (/* binding */ PaymentMethodBankDetails),
/* harmony export */   "PaymentMethodCostTypeEnum": () => (/* binding */ PaymentMethodCostTypeEnum),
/* harmony export */   "PaymentMethodExtraCostType": () => (/* binding */ PaymentMethodExtraCostType),
/* harmony export */   "PaymentMethodTypeEnum": () => (/* binding */ PaymentMethodTypeEnum)
/* harmony export */ });
class PaymentMethod {
  constructor(attrs) {
    this.id = attrs.id;
    this.type = new PaymentMethodType(attrs.type);
    this.extraCostType = new PaymentMethodExtraCostType(attrs.extraCostType);
    this.value = attrs.value;
    this.priceWithVat = attrs.priceWithVat;
    this.priceWithoutVat = attrs.priceWithoutVat;
    this.vatRate = attrs.vatRate;
    this.bankTransferDetail = attrs.bankTransferDetail ? new PaymentMethodBankDetails(attrs.bankTransferDetail) : undefined;
  }
}
class PaymentMethodType {
  constructor(attrs) {
    this.id = attrs.id;
    this.name = attrs.name;
    this.value = attrs.value;
  }
}
class PaymentMethodExtraCostType {
  constructor(attrs) {
    this.id = attrs.id;
    this.type = attrs.type;
    this.name = attrs.name;
    this.description = attrs.description;
  }
}
class PaymentMethodBankDetails {
  constructor(attrs) {
    this.beneficiaryName = attrs.beneficiaryName;
    this.iban = attrs.iban;
    this.swift = attrs.swift;
    this.message = attrs.message;
    this.langKey = attrs.langKey;
  }
}
var PaymentMethodTypeEnum;
(function (PaymentMethodTypeEnum) {
  PaymentMethodTypeEnum["ONLINE"] = "ONLINE_PAYMENT";
  PaymentMethodTypeEnum["COD"] = "CASH_ON_DELIVERY";
  PaymentMethodTypeEnum["BANK_TRANSFER"] = "BANK_TRANSFER";
})(PaymentMethodTypeEnum || (PaymentMethodTypeEnum = {}));
var PaymentMethodCostTypeEnum;
(function (PaymentMethodCostTypeEnum) {
  PaymentMethodCostTypeEnum["PROCENTUAL"] = "PROCENTUAL";
  PaymentMethodCostTypeEnum["NO_EXTRA"] = "NO_EXTRA";
  PaymentMethodCostTypeEnum["FIXED"] = "FIXED";
})(PaymentMethodCostTypeEnum || (PaymentMethodCostTypeEnum = {}));

/***/ }),

/***/ 9017:
/*!**********************************************************!*\
  !*** ./src/app/checkout/models/shipping-method.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingMethod": () => (/* binding */ ShippingMethod),
/* harmony export */   "ShippingMethodCostTypeEnum": () => (/* binding */ ShippingMethodCostTypeEnum),
/* harmony export */   "ShippingMethodDurationEnum": () => (/* binding */ ShippingMethodDurationEnum),
/* harmony export */   "ShippingMethodTypeEnum": () => (/* binding */ ShippingMethodTypeEnum)
/* harmony export */ });
class ShippingMethod {
  constructor(attrs) {
    this.id = attrs.id;
    this.position = attrs.position;
    this.name = attrs.name;
    this.estimatedTimeDelivery = new Date(attrs.estimatedTimeDelivery);
    this.currency = attrs.currency;
    this.costType = attrs.costType ? {
      name: attrs.costType.name,
      type: attrs.costType.type
    } : undefined;
    this.prices = (attrs.prices ?? []).sort((a, b) => b.startValue - a.startValue).map(p => new ShippingMethodPrice(p));
  }
  getCost(amount) {
    if (this.costType?.type === ShippingMethodCostTypeEnum.FIXED_VALUE) {
      return this.prices[0].priceWithVat;
    }
    if (this.costType?.type === ShippingMethodCostTypeEnum.TOTAL_VALUE) {
      const price = this.prices.find(price => !price.endValue || amount <= price.endValue);
      if (!price) {
        return 0;
      }
      const rate = price.vatRate;
      return amount * rate / 100;
    }
    return 0;
  }
}
class ShippingMethodPrice {
  constructor(attrs) {
    this.startValue = attrs.startValue;
    this.endValue = attrs.endValue;
    this.priceWithVat = attrs.priceWithVat;
    this.priceWithoutVat = attrs.priceWithoutVat;
    this.vatRate = attrs.vatRate;
    this.currency = attrs.currency;
  }
}
var ShippingMethodTypeEnum;
(function (ShippingMethodTypeEnum) {
  ShippingMethodTypeEnum["COURIER"] = "COURIER";
  ShippingMethodTypeEnum["PICKUP_STORE"] = "PICKUP_STORE";
})(ShippingMethodTypeEnum || (ShippingMethodTypeEnum = {}));
var ShippingMethodDurationEnum;
(function (ShippingMethodDurationEnum) {
  ShippingMethodDurationEnum["HOURS"] = "HOURS";
  ShippingMethodDurationEnum["DAYS"] = "DAYS";
})(ShippingMethodDurationEnum || (ShippingMethodDurationEnum = {}));
var ShippingMethodCostTypeEnum;
(function (ShippingMethodCostTypeEnum) {
  ShippingMethodCostTypeEnum["FIXED_VALUE"] = "FIXED_VALUE";
  ShippingMethodCostTypeEnum["TOTAL_VALUE"] = "TOTAL_VALUE";
})(ShippingMethodCostTypeEnum || (ShippingMethodCostTypeEnum = {}));

/***/ }),

/***/ 6555:
/*!***************************************************************!*\
  !*** ./src/app/checkout/place-order/place-order.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceOrderComponent": () => (/* binding */ PlaceOrderComponent)
/* harmony export */ });
/* harmony import */ var _core_common_form2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/form2 */ 4842);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_utils_form_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/form-validators */ 3820);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/input/input.component */ 2371);
/* harmony import */ var _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/select/select.component */ 9092);
/* harmony import */ var _shared_components_price_price_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/price/price.component */ 9563);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _checkout_layout_checkout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../checkout-layout/checkout-layout.component */ 9013);
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stepper/stepper.component */ 542);















const _c0 = function () {
  return {
    label: "A",
    value: "A"
  };
};
const _c1 = function (a0) {
  return [a0];
};
class PlaceOrderComponent extends _core_common_form2__WEBPACK_IMPORTED_MODULE_0__.Form {
  constructor(fb, api, router) {
    super();
    this.fb = fb;
    this.api = api;
    this.router = router;
    this.steps = ['Cart', 'Order details', 'Order summary', 'Place order'];
    this.active = 3;
    this.total = 0;
    this.formFields = {
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _core_utils_form_validators__WEBPACK_IMPORTED_MODULE_1__.FormValidators.passwordStrength, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(8)]],
      repeatPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    };
    this._initFormControl(fb, {});
  }
  ngOnInit() {
    this.fetchCart();
  }
  placeOrder() {
    this.router.navigate(['checkout/thank-you/1']);
  }
  fetchCart() {
    this.api.get('cart').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(({
      data
    }) => {
      this.paymentMethod = data.payment;
      this.total = data.total;
      Object.keys(this.paymentMethod)
      // @ts-ignore
      .forEach(k => this.setFCBYName(k, null, this.paymentMethod[k]));
    });
  }
}
PlaceOrderComponent.ɵfac = function PlaceOrderComponent_Factory(t) {
  return new (t || PlaceOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
};
PlaceOrderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: PlaceOrderComponent,
  selectors: [["app-place-order"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 42,
  vars: 20,
  consts: [["content", "", 1, "m-auto", 2, "max-width", "800px"], [1, "justify-content-center", "mt-3", "d-lg-flex", "d-none", "px-4"], [1, "w-100", 3, "steps", "active"], [1, "fs-3xl", "fw-bold", "mt-3"], [1, "mt-3"], [1, "d-flex", "mt-4", "flex-column", "flex-md-row"], [1, "w-50", "pe-4"], [2, "width", "350px"], [1, "fs-l", "fw-bold", "mb-3", "label"], ["suffix", "credit_card", "label", "Type card number", 3, "control"], [1, "my-3"], [1, "d-flex"], ["label", "Month", 1, "card-month", 3, "control", "options"], ["label", "Year", 1, "card-year", "ms-1", 3, "control", "options"], [1, "d-flex", "justify-content-between"], ["label", "CVV", 1, "card-cvv", 3, "control"], ["label", "CUR", 1, "card-currency", "ms-1", 3, "control", "options"], [1, "w-50", "ps-3", "logo-section"], ["src", "assets/images/credit-card.png", "alt", "card"], [1, "mt-5"], [1, "fs-l", "fw-bold", "ms-4", "mt-3.5", "label"], [1, "checkout-card", "p-4", "mt-3"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "fw-bold"], [1, "ps-2", 3, "amount"], [1, "btn", "btn-primary", "px-5", 3, "click"]],
  template: function PlaceOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-checkout-layout")(1, "div", 0)(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "app-stepper", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div")(5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Place order");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "mat-divider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Card number");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "app-input", 9)(14, "mat-divider", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div")(16, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Expiry date");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "app-select", 12)(20, "app-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 14)(22, "div")(23, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Select security code");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "app-input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div")(27, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Select currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "app-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](31, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "mat-divider", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "Total your order");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "mat-card", 21)(36, "div", 22)(37, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "Total: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](39, "app-price", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PlaceOrderComponent_Template_button_click_40_listener() {
        return ctx.placeOrder();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "Pay");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("steps", ctx.steps)("active", ctx.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.getFC("cardNumber"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.getFC("month"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](12, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](11, _c0)));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.getFC("month"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](15, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](14, _c0)));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.getFC("cvv"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.getFC("currency"))("options", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](18, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](17, _c0)));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("amount", ctx.total);
    }
  },
  dependencies: [_shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_4__.SelectComponent, _shared_components_price_price_component__WEBPACK_IMPORTED_MODULE_5__.PriceComponent, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_12__.MatLegacyCard, _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDivider, _checkout_layout_checkout_layout_component__WEBPACK_IMPORTED_MODULE_6__.CheckoutLayoutComponent, _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__.StepperComponent],
  styles: ["[_nghost-%COMP%]     .suffix-icon {\n  font-size: 26px !important;\n}\n[_nghost-%COMP%]     app-select .mat-form-field {\n  width: 100%;\n}\n\n.card-month[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.card-year[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.card-cvv[_ngcontent-%COMP%], .card-currency[_ngcontent-%COMP%] {\n  width: 98px;\n  display: block;\n}\n\n.logo-section[_ngcontent-%COMP%] {\n  border-left: solid 1px #e2e2e2;\n  margin-top: 45px;\n}\n\n.label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.checkout-card[_ngcontent-%COMP%] {\n  border: solid 1px #54688b;\n  box-shadow: 0 10px 15px 0 rgba(27, 54, 100, 0.25);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2hlY2tvdXQvcGxhY2Utb3JkZXIvcGxhY2Utb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSwwQkFBQTtBQUZKO0FBTUk7RUFDRSxXQUFBO0FBSk47O0FBVUE7RUFDRSxZQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0FBUEY7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQVBGOztBQVVBO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0UsMEJBQUE7QUFQRjs7QUFVQTtFQUNFLHlCQUFBO0VBQ0EsaURBQUE7QUFQRiIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3QgOjpuZy1kZWVwIHtcblxuICAuc3VmZml4LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgYXBwLXNlbGVjdCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG59XG5cbi5jYXJkLW1vbnRoIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uY2FyZC15ZWFyIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uY2FyZC1jdnYsIC5jYXJkLWN1cnJlbmN5IHtcbiAgd2lkdGg6IDk4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nby1zZWN0aW9uIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjZTJlMmUyOztcbiAgbWFyZ2luLXRvcDogNDVweFxufVxuXG4ubGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLmNoZWNrb3V0LWNhcmQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjNTQ2ODhiO1xuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAwIHJnYmEoMjcsIDU0LCAxMDAsIDAuMjUpO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 542:
/*!*******************************************************!*\
  !*** ./src/app/checkout/stepper/stepper.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepperComponent": () => (/* binding */ StepperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function StepperComponent_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
  }
}
function StepperComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StepperComponent_div_1_div_4_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("flex-grow-1", i_r2 !== ctx_r0.steps.length - 1)("completed", i_r2 < ctx_r0.active)("active", i_r2 === ctx_r0.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r2 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 !== 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", step_r1.length > 4 ? step_r1.length * -2.5 + "px" : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", step_r1, "");
  }
}
class StepperComponent {
  constructor() {}
  ngOnInit() {}
}
StepperComponent.ɵfac = function StepperComponent_Factory(t) {
  return new (t || StepperComponent)();
};
StepperComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: StepperComponent,
  selectors: [["app-stepper"]],
  inputs: {
    steps: "steps",
    active: "active"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "d-flex", "justify-content-between", "stepper"], ["class", "d-flex flex-grow-1 align-items-start flex-column stepper-item", 3, "flex-grow-1", "completed", "active", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-grow-1", "align-items-start", "flex-column", "stepper-item"], [1, "d-flex", "flex-grow-1", "w-100", "align-items-center"], [1, "d-flex", "justify-content-center", "align-items-center", "text-center", "fw-bold", "rounded-circle", "stepper-number"], ["class", "flex-grow-1 dashed-line", 4, "ngIf"], [1, "fs-s", "text-primary", "text-center", "mt-2", "stepper-title"], [1, "flex-grow-1", "dashed-line"]],
  template: function StepperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StepperComponent_div_1_Template, 7, 11, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: [".stepper[_ngcontent-%COMP%]   .stepper-item[_ngcontent-%COMP%]   .stepper-number[_ngcontent-%COMP%] {\n  color: #1b3664;\n  border: 2px solid #1b3664;\n  background-color: white;\n  height: 24px;\n  width: 24px;\n  font-size: 14px;\n}\n.stepper[_ngcontent-%COMP%]   .stepper-item[_ngcontent-%COMP%]   .dashed-line[_ngcontent-%COMP%] {\n  border-top: 2px dashed #dddddd;\n}\n.stepper[_ngcontent-%COMP%]   .stepper-item[_ngcontent-%COMP%]   .stepper-title[_ngcontent-%COMP%] {\n  min-width: 24px;\n  font-weight: 500;\n  color: #1b3664;\n}\n.stepper[_ngcontent-%COMP%]   .stepper-item.completed[_ngcontent-%COMP%]   .stepper-number[_ngcontent-%COMP%] {\n  color: #f06724;\n  border: 2px solid #f06724;\n  background-color: white;\n}\n.stepper[_ngcontent-%COMP%]   .stepper-item.completed[_ngcontent-%COMP%]   .dashed-line[_ngcontent-%COMP%] {\n  border-top-color: #f06724;\n}\n.stepper[_ngcontent-%COMP%]   .stepper-item.active[_ngcontent-%COMP%]   .stepper-number[_ngcontent-%COMP%] {\n  color: white;\n  border: 0;\n  background-color: #f06724;\n  height: 40px;\n  width: 40px;\n}\n.stepper[_ngcontent-%COMP%]   .stepper-item.active[_ngcontent-%COMP%]   .stepper-title[_ngcontent-%COMP%] {\n  min-width: 40px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2hlY2tvdXQvc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxpbmdzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNFLGNDcUdVO0VEcEdWLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFITjtBQU1JO0VBQ0UsOEJBQUE7QUFKTjtBQU9JO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NzRlU7QUQzRmhCO0FBV007RUFDRSxjQ2dGVTtFRC9FVix5QkFBQTtFQUNBLHVCQUFBO0FBVFI7QUFZTTtFQUNFLHlCQzBFVTtBRHBGbEI7QUFpQk07RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQ2dFVTtFRDlEVixZQUFBO0VBQ0EsV0FBQTtBQWhCUjtBQW1CTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQWpCUiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9zdHlsaW5ncy9ic192YXJpYWJsZXMnO1xuXG4uc3RlcHBlciB7XG4gIC5zdGVwcGVyLWl0ZW0ge1xuICAgIC5zdGVwcGVyLW51bWJlciB7XG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmRhc2hlZC1saW5lIHtcbiAgICAgIGJvcmRlci10b3A6IDJweCBkYXNoZWQgI2RkZGRkZFxuICAgIH1cblxuICAgIC5zdGVwcGVyLXRpdGxlIHtcbiAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgfVxuXG5cbiAgICAmLmNvbXBsZXRlZCB7XG5cbiAgICAgIC5zdGVwcGVyLW51bWJlciB7XG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cblxuICAgICAgLmRhc2hlZC1saW5lIHtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJHNlY29uZGFyeS1jb2xvclxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuXG4gICAgICAuc3RlcHBlci1udW1iZXIge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcblxuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgfVxuXG4gICAgICAuc3RlcHBlci10aXRsZSB7XG4gICAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbn1cbiIsIi8vQGltcG9ydCBcIn5ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XG4vL0BpbXBvcnQgXCJ+bm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4kYmx1ZS1wYWxldHRlOiAoXG4gIDUwOiAjZTRlN2VjLFxuICAxMDA6ICNlOWViZjAsXG4gIDIwMDogI2M2Y2NkYixcbiAgMzAwOiAjOGQ5YmIyLFxuICA0MDA6ICM1NDY4OGIsXG4gIDUwMDogIzFiMzY2NCxcbiAgNjAwOiAjMTgzMDVjLFxuICA3MDA6ICMxNDI5NTIsXG4gIDgwMDogIzEwMjI0OCxcbiAgOTAwOiAjMDgxNjM2LFxuICBBMTAwOiAjNmY5MmZmLFxuICBBMjAwOiAjM2M2Y2ZmLFxuICBBNDAwOiAjMDk0NWZmLFxuICBBNzAwOiAjMDAzYWVmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAjMDAwMDAwLFxuICAgIDEwMDogIzAwMDAwMCxcbiAgICAyMDA6ICMwMDAwMDAsXG4gICAgMzAwOiAjZmZmZmZmLFxuICAgIDQwMDogI2ZmZmZmZixcbiAgICA1MDA6ICNmZmZmZmYsXG4gICAgNjAwOiAjZmZmZmZmLFxuICAgIDcwMDogI2ZmZmZmZixcbiAgICA4MDA6ICNmZmZmZmYsXG4gICAgOTAwOiAjZmZmZmZmLFxuICAgIEExMDA6ICMwMDAwMDAsXG4gICAgQTIwMDogI2ZmZmZmZixcbiAgICBBNDAwOiAjZmZmZmZmLFxuICAgIEE3MDA6ICNmZmZmZmYsXG4gICksXG4pO1xuXG4kb3JhbmdlLXBhbGV0dGU6IChcbiAgNTA6ICNmZGVkZTUsXG4gIDEwMDogI2ZlZjBlYSxcbiAgMjAwOiAjZmJkOWM4LFxuICAzMDA6ICNmOGIzOTIsXG4gIDQwMDogI2Y0OGQ1YixcbiAgNTAwOiAjZjA2NzI0LFxuICA2MDA6ICNlZTVmMjAsXG4gIDcwMDogI2VjNTQxYixcbiAgODAwOiAjZTk0YTE2LFxuICA5MDA6ICNlNTM5MGQsXG4gIEExMDA6ICNmZmZmZmYsXG4gIEEyMDA6ICNmZmUzZGQsXG4gIEE0MDA6ICNmZmI4YWEsXG4gIEE3MDA6ICNmZmEzOTAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICNmZmZmZmYsXG4gICAgMTAwOiAjZmZmZmZmLFxuICAgIDIwMDogI2ZmZmZmZixcbiAgICAzMDA6ICNmZmZmZmYsXG4gICAgNDAwOiAjZmZmZmZmLFxuICAgIDUwMDogI2ZmZmZmZixcbiAgICA2MDA6ICNmZmZmZmYsXG4gICAgNzAwOiAjZmZmZmZmLFxuICAgIDgwMDogI2ZmZmZmZixcbiAgICA5MDA6ICNmZmZmZmYsXG4gICAgQTEwMDogI2ZmZmZmZixcbiAgICBBMjAwOiAjZmZmZmZmLFxuICAgIEE0MDA6ICNmZmZmZmYsXG4gICAgQTcwMDogI2ZmZmZmZixcbiAgKSxcbik7XG5cbiRyZWQtcGFsZXR0ZTogKFxuICA1MDogI2ZmZWJlZSxcbiAgMTAwOiAjZmZjZGQyLFxuICAyMDA6ICNlZjlhOWEsXG4gIDMwMDogI2U1NzM3MyxcbiAgNDAwOiAjZWY1MzUwLFxuICA1MDA6ICNmZjAwMDAsXG4gIDYwMDogI2U1MzkzNSxcbiAgNzAwOiAjZDMyZjJmLFxuICA4MDA6ICNjNjI4MjgsXG4gIDkwMDogI2I3MWMxYyxcbiAgQTEwMDogI2ZmOGE4MCxcbiAgQTIwMDogI2ZmNTI1MixcbiAgQTQwMDogI2ZmMTc0NCxcbiAgQTcwMDogI2Q1MDAwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogcmdiYShibGFjaywgMC44NyksXG4gICAgMTAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICAyMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDMwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgNDAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICA1MDA6IHdoaXRlLFxuICAgIDYwMDogd2hpdGUsXG4gICAgNzAwOiB3aGl0ZSxcbiAgICA4MDA6IHdoaXRlLFxuICAgIDkwMDogd2hpdGUsXG4gICAgQTEwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgQTIwMDogd2hpdGUsXG4gICAgQTQwMDogd2hpdGUsXG4gICAgQTcwMDogd2hpdGUsXG4gIClcbik7XG5cbiRwcmltYXJ5LXBhbGV0dGU6ICRibHVlLXBhbGV0dGU7XG4kYWNjZW50LXBhbGV0dGU6ICRvcmFuZ2UtcGFsZXR0ZTtcbiRzZWNvbmRhcnktcGFsZXR0ZTogJG9yYW5nZS1wYWxldHRlO1xuXG4kcHJpbWFyeS1jb2xvcjogbWFwLWdldCgkcHJpbWFyeS1wYWxldHRlLCA1MDApO1xuJHNlY29uZGFyeS1jb2xvcjogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDUwMCk7XG4kc2Vjb25kYXJ5LTMwMDogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDMwMCk7XG4kcHJpbWFyeS00MDA6IG1hcC1nZXQoJHByaW1hcnktcGFsZXR0ZSwgNDAwKTtcbiRlcnJvci1jb2xvcjogbWFwLWdldCgkcmVkLXBhbGV0dGUsIDUwMCk7XG5cbiRtYXgtd2lkdGg6IDEzNjZweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1426:
/*!*******************************************************!*\
  !*** ./src/app/checkout/summary/summary.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryComponent": () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/auto-destroy */ 7990);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/cart.service */ 4128);
/* harmony import */ var _core_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/order.service */ 6854);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/notification.service */ 1645);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_price_price_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/price/price.component */ 9563);
/* harmony import */ var _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/directives/loading.directive */ 3570);
/* harmony import */ var _shared_components_skeleton_loaders_skeleton_loader_grid_skeleton_loader_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/skeleton-loaders/skeleton-loader-grid/skeleton-loader-grid.component */ 4546);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _checkout_layout_checkout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../checkout-layout/checkout-layout.component */ 9013);
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../stepper/stepper.component */ 542);

















function SummaryComponent_mat_card_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-card", 19)(1, "div", 20)(2, "div", 21)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div")(10, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SummaryComponent_mat_card_12_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.showCheckoutDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r0.address == null ? null : ctx_r0.address.firstName, " ", ctx_r0.address == null ? null : ctx_r0.address.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.address == null ? null : ctx_r0.address.phoneNumber == null ? null : ctx_r0.address.phoneNumber.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.address == null ? null : ctx_r0.address.fullAddress(", "));
  }
}
function SummaryComponent_mat_card_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-card", 19)(1, "div", 23)(2, "div", 21)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div")(6, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SummaryComponent_mat_card_17_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.showCheckoutDetail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.deliveryMethod == null ? null : ctx_r1.deliveryMethod.name);
  }
}
function SummaryComponent_div_19_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 32)(1, "div", 28)(2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "app-price", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "mat-divider", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", product_r11.quantity, " x ", product_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("amount", product_r11.price.priceWithVat);
  }
}
function SummaryComponent_div_19_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 35)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "app-price", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("amount", ctx_r10.cart.total + ctx_r10.deliveryMethod.getCost(ctx_r10.cart.total));
  }
}
function SummaryComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 4)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Your order");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "mat-card", 24)(4, "div", 25)(5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, SummaryComponent_div_19_div_6_Template, 6, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div")(8, "div", 28)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Delivery:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "app-price", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "mat-divider", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, SummaryComponent_div_19_div_13_Template, 4, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.cart.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("amount", ctx_r2.deliveryMethod == null ? null : ctx_r2.deliveryMethod.getCost(ctx_r2.cart.total));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.deliveryMethod);
  }
}
function SummaryComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-skeleton-loader-grid", 36);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("count", 1);
  }
}
class SummaryComponent extends _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__.AutoDestroy {
  constructor(api, cartService, orderService, notifier, router) {
    super();
    this.api = api;
    this.cartService = cartService;
    this.orderService = orderService;
    this.notifier = notifier;
    this.router = router;
    this.previousStage = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.steps = ['Cart', 'Order details', 'Order summary', 'Place order'];
    this.active = 2;
    this.products = [];
    // public address?: Address
    // public paymentMethod?: PaymentMethod
    // public deliveryMethod?: DeliveryMethod
    this.total = 0;
    this.loading = {
      'order': false
    };
    this.trxCompleted = false;
  }
  ngOnInit() {
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
    });
  }
  placeOrder() {
    const order = {
      paymentType: {
        id: this.paymentMethod.id
      },
      deliveryShippingId: this.deliveryMethod.id,
      products: this.cart.products.map(product => ({
        productId: product.id,
        randomProductId: product.randomProductId,
        quantity: product.quantity
      })),
      buyerAddress: this.address,
      deliveryAddress: this.address
    };
    this.loading['order'] = true;
    this.orderService.add(order).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.catchError)(error => {
      this.loading['order'] = false;
      this.notifier.showError([error.status]);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.throwError)(() => error);
    })).subscribe(orderId => {
      this.loading['order'] = false;
      this.cartService.emptyCart();
      this.router.navigate([`/checkout/thank-you/${orderId}`]);
    });
  }
  showCheckoutDetail() {
    this.previousStage.emit();
  }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) {
  return new (t || SummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_order_service__WEBPACK_IMPORTED_MODULE_3__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router));
};
SummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: SummaryComponent,
  selectors: [["app-cart-summary"]],
  inputs: {
    address: "address",
    paymentMethod: "paymentMethod",
    deliveryMethod: "deliveryMethod"
  },
  outputs: {
    previousStage: "previousStage"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 41,
  vars: 13,
  consts: [["content", "", 1, "m-auto", 2, "max-width", "800px"], [1, "justify-content-center", "mt-3", "d-lg-flex", "d-none", "px-4"], [1, "w-100", 3, "steps", "active"], [1, "fs-3xl", "fw-bold", "mt-3"], [1, "mt-3"], [1, "d-flex", "flex-column", "mt-3"], [1, "d-inline-block", "fs-l", "fw-bold", "ms-4", "mb-3"], ["class", "checkout-card", 4, "ngIf", "ngIfElse"], [1, "mt-5"], ["class", "mt-3", 4, "ngIf"], [1, "alert", "alert-primary", "text-black-87", "fs-s", "mt-2r"], [1, "me-2"], [1, "fw-bold"], [1, "fs-s", "text-black-50"], ["href", "#", 1, "fw-bold"], [1, "mt-2r"], [1, "d-flex", "justify-content-center", "mt-5"], [1, "btn", "btn-primary", 3, "appLoading", "click"], ["loadingRef", ""], [1, "checkout-card"], [1, "d-flex", "align-items-center"], [1, "d-flex", "flex-column", "fs-l", "flex-grow-1"], [1, "btn", "btn-primary", 3, "click"], [1, "d-flex", "align-items-center", 2, "min-height", "50px"], [1, "checkout-card", "px-4"], [1, "d-flex", "align-items-center", "fs-l"], [1, "d-flex", "flex-column", "w-100"], ["class", "", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between"], [1, "fw-bold", 3, "amount"], [1, "my-3"], ["class", "d-flex justify-content-between fw-bold", 4, "ngIf"], [1, ""], [1, "text-black-87", "overflow-hidden", 2, "max-height", "54px"], [1, "fw-bold", "text-nowrap", "ms-3", 3, "amount"], [1, "d-flex", "justify-content-between", "fw-bold"], [3, "count"]],
  template: function SummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-checkout-layout")(1, "div", 0)(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "app-stepper", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div")(5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Order Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "mat-divider", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 5)(9, "div")(10, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Delivery address");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, SummaryComponent_mat_card_12_Template, 12, 4, "mat-card", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "mat-divider", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 4)(15, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Delivery option");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, SummaryComponent_mat_card_17_Template, 8, 1, "mat-card", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "mat-divider", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, SummaryComponent_div_19_Template, 14, 3, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div")(21, "div", 10)(22, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, " By placing your order you agree to our ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Terms and Conditions");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Privacy Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](35, "mat-divider", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 16)(37, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SummaryComponent_Template_button_click_37_listener() {
        return ctx.placeOrder();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "Place order");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, SummaryComponent_ng_template_39_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("steps", ctx.steps)("active", ctx.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.address)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.deliveryMethod)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.cart);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Arrival estimated at ", ctx.deliveryMethod == null ? null : ctx.deliveryMethod.name, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](26, 10, ctx.deliveryMethod == null ? null : ctx.deliveryMethod.estimatedTimeDelivery, "dd.MM.YYYY"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appLoading", ctx.loading["order"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_price_price_component__WEBPACK_IMPORTED_MODULE_5__.PriceComponent, _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_6__.LoadingDirective, _shared_components_skeleton_loaders_skeleton_loader_grid_skeleton_loader_grid_component__WEBPACK_IMPORTED_MODULE_7__.SkeletonLoaderGridComponent, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_15__.MatLegacyCard, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _checkout_layout_checkout_layout_component__WEBPACK_IMPORTED_MODULE_8__.CheckoutLayoutComponent, _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_9__.StepperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
  styles: [".checkout-card[_ngcontent-%COMP%] {\n  border: solid 1px #54688b;\n  box-shadow: 0 10px 15px 0 rgba(27, 54, 100, 0.25);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2hlY2tvdXQvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxpREFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrb3V0LWNhcmQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjNTQ2ODhiO1xuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAwIHJnYmEoMjcsIDU0LCAxMDAsIDAuMjUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 126:
/*!***********************************************************!*\
  !*** ./src/app/checkout/thank-you/thank-you.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankYouComponent": () => (/* binding */ ThankYouComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/auto-destroy */ 7990);
/* harmony import */ var _core_models_order_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models/order.model */ 6426);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/enums/microservice-type.enum */ 7502);
/* harmony import */ var _models_payment_method_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/payment-method.model */ 646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/input/input.component */ 2371);
/* harmony import */ var _shared_components_price_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/price/price.component */ 9563);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _checkout_layout_checkout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../checkout-layout/checkout-layout.component */ 9013);















function ThankYouComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (ctx_r0.order == null ? null : ctx_r0.order.paymentType == null ? null : ctx_r0.order.paymentType.value) === ctx_r0.PaymentType.BANK_TRANSFER ? ctx_r0.bankDetails == null ? null : ctx_r0.bankDetails.message : "Your order successfully been placed.", " ");
  }
}
function ThankYouComponent_div_13_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](0);
  }
}
function ThankYouComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ThankYouComponent_div_13_div_1_ng_container_1_Template, 1, 0, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", _r4);
  }
}
function ThankYouComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ThankYouComponent_div_13_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r1.order == null ? null : ctx_r1.order.paymentType == null ? null : ctx_r1.order.paymentType.value) === ctx_r1.PaymentType.BANK_TRANSFER)("ngIfElse", _r2);
  }
}
function ThankYouComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Your order is on going at delivery address: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " If you want to track your order you can do it from the track button bellow or through your email instructions. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 31)(12, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Track order");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Congratulations ", ctx_r3.order == null ? null : ctx_r3.order.endUser == null ? null : ctx_r3.order.endUser.name, " for your order!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("We sent an email to address ", ctx_r3.order == null ? null : ctx_r3.order.endUser == null ? null : ctx_r3.order.endUser.email, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.order == null ? null : ctx_r3.order.deliveryAddress == null ? null : ctx_r3.order.deliveryAddress.fullAddress());
  }
}
function ThankYouComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "BENEFICIARY");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 34)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "IBAN");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 34)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "BIC");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 34)(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "AMOUNT");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "app-price", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 34)(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "REFERENCE");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r5.bankDetails == null ? null : ctx_r5.bankDetails.beneficiaryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r5.bankDetails == null ? null : ctx_r5.bankDetails.iban);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r5.bankDetails == null ? null : ctx_r5.bankDetails.swift);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("amount", ctx_r5.order == null ? null : ctx_r5.order.totalWithVat)("currency", ctx_r5.order == null ? null : ctx_r5.order.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r5.order == null ? null : ctx_r5.order.orderRef);
  }
}
class ThankYouComponent extends _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__.AutoDestroy {
  constructor(api, route) {
    super();
    this.api = api;
    this.route = route;
    this.PaymentType = _models_payment_method_model__WEBPACK_IMPORTED_MODULE_3__.PaymentMethodTypeEnum;
    this.emailField = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email]);
  }
  ngOnInit() {
    this.fetchOrder();
    this.fetcthBankdetail();
  }
  fetchOrder() {
    this.api.get(`order/${this.route.snapshot.params['orderId']}`, _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_2__.MicroserviceType.acc).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(order => {
      this.order = _core_models_order_model__WEBPACK_IMPORTED_MODULE_1__.Order.fromDto(order);
      this.emailField.setValue(this.order.endUser?.email);
    });
  }
  fetcthBankdetail() {
    this.api.get('settings/payment/available', _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_2__.MicroserviceType.acc).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(methods => {
      const method = methods.find(m => m.type.value === _models_payment_method_model__WEBPACK_IMPORTED_MODULE_3__.PaymentMethodTypeEnum.BANK_TRANSFER);
      this.bankDetails = method?.bankTransferDetail;
    });
  }
}
ThankYouComponent.ɵfac = function ThankYouComponent_Factory(t) {
  return new (t || ThankYouComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute));
};
ThankYouComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: ThankYouComponent,
  selectors: [["app-thank-you"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
  decls: 37,
  vars: 3,
  consts: [["content", "", 1, "d-flex", "align-items-center", "flex-column"], [2, "max-width", "1180px"], [1, "d-flex", "d-md-none", "justify-content-center", "fs-3xl", "fw-bold", "mt-5", 2, "font-size", "4.5rem"], ["inline", "", 1, "text-primary"], [1, "d-flex", "justify-content-center", "fs-l", "fs-md-3xl", "fw-bold", "mt-4", "mt-md-5"], ["class", "d-flex justify-content-center text-black-87 mt-2", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-5"], [1, "d-none", "d-md-flex", "justify-content-end", "w-50", "logo-section"], ["src", "assets/images/shopping-bag.png", "alt", "logo"], [1, "d-flex", "flex-column", "align-items-center", "align-items-md-start", "col-12", "col-md-6", "text-black-87"], ["style", "width: 410px", 4, "ngIf"], [1, "divider-light", "mt-6"], [1, "w-100", "mt-2r"], [1, "fs-l", "fw-bold", "d-flex", "flex-column", "align-items-center"], [1, "d-flex", "flex-column", "flex-md-row", "mt-2r"], [1, "fs-md-l", "text-black-87", "col-12", "col-md-6", "pe-3"], [1, "col-12", "col-md-6", "ps-0", "mt-4", "mt-md-0", "ps-md-3", "newsletter-email-section"], ["label", "Email address", 3, "control"], [1, "d-flex", "content-wrapper"], ["type", "checkbox", 1, "form-check-input"], [1, "fs-s", "ms-2", "text-black-50"], [1, "d-flex", "justify-content-center", "w-100", "mt-4.5"], [1, "btn", "btn-outline-primary", "d-flex", "justify-content-center", "align-items-center", "px-5", "col-12", "col-sm-auto", "fs-l"], ["trackOrderRef", ""], ["bankDetailRef", ""], [1, "d-flex", "justify-content-center", "text-black-87", "mt-2"], [2, "width", "410px"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], [1, "fw-bold"], [2, "margin-top", "20px"], [1, "d-flex", "justify-content-center", "w-100", "track-btn-wrapper", "mt-5"], [1, "btn", "btn-primary", "d-flex", "justify-content-center", "align-items-center", "px-5", "col-12", "col-sm-auto", "track-btn", "fs-3xl", "fs-md-l"], [1, "bank-detail-wrapper", "fs-l"], [1, "bank-row"], [1, "text-break"], [3, "amount", "currency"]],
  template: function ThankYouComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-checkout-layout")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "shopping_bag");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Thank you");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ThankYouComponent_div_8_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, ThankYouComponent_div_13_Template, 2, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "mat-divider", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "SAVE 25 LEI ON YOUR");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "NEXT ORDER");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 14)(22, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, " Subscribe to our newsletter and you will receive 25 lei cupon discount for your next order on our store. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "app-input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, " Asking for consent by clearly disclosing what the consent is being given to and how the data will be used. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 21)(31, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, " Subscribe ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, ThankYouComponent_ng_template_33_Template, 14, 3, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, ThankYouComponent_ng_template_35_Template, 26, 6, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.order);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.order);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx.emailField);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_price_price_component__WEBPACK_IMPORTED_MODULE_6__.PriceComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, _checkout_layout_checkout_layout_component__WEBPACK_IMPORTED_MODULE_7__.CheckoutLayoutComponent],
  styles: ["@media screen and (min-width: 768px) {\n  .logo-section[_ngcontent-%COMP%] {\n    padding-right: 4rem;\n  }\n  .logo-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 217px;\n    width: 217px;\n  }\n}\n@media screen and (min-width: 992px) {\n  .logo-section[_ngcontent-%COMP%] {\n    padding-right: 11rem;\n  }\n  .logo-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    width: auto;\n  }\n}\n\n.track-btn-wrapper[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n@media screen and (min-width: 768px) {\n  .track-btn-wrapper[_ngcontent-%COMP%] {\n    margin-top: 73px !important;\n  }\n}\n.track-btn-wrapper[_ngcontent-%COMP%]   .track-btn[_ngcontent-%COMP%] {\n  height: 46px;\n}\n@media screen and (min-width: 576px) {\n  .track-btn-wrapper[_ngcontent-%COMP%]   .track-btn[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n\n.content-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-width: 24px;\n  height: 24px;\n}\n\n.newsletter-email-section[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .newsletter-email-section[_ngcontent-%COMP%] {\n    max-width: 378px;\n  }\n}\n\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n\n.bank-detail-wrapper[_ngcontent-%COMP%]   .bank-row[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n  display: flex;\n}\n.bank-detail-wrapper[_ngcontent-%COMP%]   .bank-row[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  display: inline-block;\n  font-weight: bolder;\n  min-width: 130px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2hlY2tvdXQvdGhhbmsteW91L3RoYW5rLXlvdS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLRTtFQUZGO0lBSUksbUJBQUE7RUFKRjtFQU9FO0lBQ0UsYUFBQTtJQUNBLFlBQUE7RUFMSjtBQUNGO0FBUUU7RUFiRjtJQWNJLG9CQUFBO0VBTEY7RUFPRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VBTEo7QUFDRjs7QUFTQTtFQUVFLGdCQUFBO0FBUEY7QUFTRTtFQUpGO0lBS0ksMkJBQUE7RUFORjtBQUNGO0FBUUU7RUFDRSxZQUFBO0FBTko7QUFRSTtFQUhGO0lBSUksWUFBQTtFQUxKO0FBQ0Y7O0FBVUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQVBKOztBQVdBO0VBQ0UsZUFBQTtBQVJGO0FBU0U7RUFGRjtJQUdJLGdCQUFBO0VBTkY7QUFDRjs7QUFTQTtFQUNFLGdCQUFBO0FBTkY7O0FBVUU7RUFDRSxvQkFBQTtFQUNBLGFBQUE7QUFQSjtBQVNJO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBUE4iLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOm1hcCc7XG5AaW1wb3J0ICdzcmMvc3R5bGluZ3MvYnNfdmFyaWFibGVzJztcblxuLmxvZ28tc2VjdGlvbiB7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbWFwLmdldCgkZ3JpZC1icmVha3BvaW50cywgJ21kJykpIHtcblxuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG5cblxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDIxN3B4O1xuICAgICAgd2lkdGg6IDIxN3B4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC5nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgcGFkZGluZy1yaWdodDogMTFyZW07XG5cbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICB9XG59XG5cbi50cmFjay1idG4td3JhcHBlciB7XG5cbiAgbWFyZ2luLXRvcDogNTBweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIG1hcmdpbi10b3A6IDczcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC50cmFjay1idG4ge1xuICAgIGhlaWdodDogNDZweDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC5nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBpbnB1dCB7XG4gICAgbWluLXdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweFxuICB9XG59XG5cbi5uZXdzbGV0dGVyLWVtYWlsLXNlY3Rpb24ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC5nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgbWF4LXdpZHRoOiAzNzhweDtcbiAgfVxufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDRyZW07XG59XG5cbi5iYW5rLWRldGFpbC13cmFwcGVyIHtcbiAgLmJhbmstcm93IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgPiBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICBtaW4td2lkdGg6IDEzMHB4O1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6426:
/*!********************************************!*\
  !*** ./src/app/core/models/order.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Order": () => (/* binding */ Order),
/* harmony export */   "PaymentMethodTypeEnum": () => (/* binding */ PaymentMethodTypeEnum)
/* harmony export */ });
/* harmony import */ var _core_models_address_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models/address.model */ 2426);

class Order {
  constructor(order) {
    this.id = order.id;
    this.endUser = order.endUser;
    this.currency = order.currency;
    this.orderRef = order.orderRef;
    this.totalWithVat = order.totalWithVat;
    this.deliveryShippingId = order.deliveryShippingId;
    this.paymentType = order.paymentType;
    this.products = order.products;
    this.buyerAddress = order.buyerAddress;
    this.deliveryAddress = order.deliveryAddress;
  }
  static fromDto(order) {
    return new Order({
      ...order,
      buyerAddress: _core_models_address_model__WEBPACK_IMPORTED_MODULE_0__.Address.adapt(order.buyerAddress),
      deliveryAddress: _core_models_address_model__WEBPACK_IMPORTED_MODULE_0__.Address.adapt(order.deliveryAddress)
    });
  }
}
var PaymentMethodTypeEnum;
(function (PaymentMethodTypeEnum) {
  PaymentMethodTypeEnum["ONLINE"] = "ONLINE_PAYMENT";
  PaymentMethodTypeEnum["COD"] = "CASH_ON_DELIVERY";
  PaymentMethodTypeEnum["BANK_TRANSFER"] = "BANK_TRANSFER";
})(PaymentMethodTypeEnum || (PaymentMethodTypeEnum = {}));

/***/ }),

/***/ 6854:
/*!************************************************!*\
  !*** ./src/app/core/services/order.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/enums/microservice-type.enum */ 7502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/api.service */ 5384);




class OrderService {
  constructor(api) {
    this.api = api;
  }
  add(order) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
      this.api.post('accounting/order-product?sendAllStatuses=true', order, _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_0__.MicroserviceType.acc).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
        subscriber.error(error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
      })).subscribe(response => {
        console.log(response);
        this.fetchTrxStatus(response, subscriber);
      });
    });
  }
  fetchTrxStatus(trxId, subscriber) {
    this.api.get('accounting/order-product-status', _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_0__.MicroserviceType.acc, {
      headers: {
        'tx-uuid': trxId
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      subscriber.error(error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    })).subscribe(response => {
      console.log(response);
      if (response.statusType === 'TX_MAXIMAL_STATE' || response.statusType === 'TX_EXCEPTION_STATE') {
        subscriber.error(response);
        return;
      }
      if (response.statusType === 'TX_FINAL_STATE') {
        subscriber.next(response.orderId ?? 306);
        subscriber.complete();
        return;
      }
      setTimeout(() => this.fetchTrxStatus(trxId, subscriber), 1000);
    });
  }
}
OrderService.ɵfac = function OrderService_Factory(t) {
  return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
};
OrderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: OrderService,
  factory: OrderService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_checkout_checkout_module_ts.js.map