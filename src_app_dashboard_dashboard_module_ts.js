"use strict";
(self["webpackChunkeshop"] = self["webpackChunkeshop"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 4697:
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/categories-swiper/categories-swiper.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesSwiperComponent": () => (/* binding */ CategoriesSwiperComponent)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_skeleton_loaders_skeleton_loader_grid_skeleton_loader_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/skeleton-loaders/skeleton-loader-grid/skeleton-loader-grid.component */ 4546);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/angular */ 9737);
/* harmony import */ var _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../swiper/swiper.component */ 1154);
/* harmony import */ var _shared_pipes_resource_url_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/resource-url.pipe */ 6531);









const _c0 = ["swiper"];
function CategoriesSwiperComponent_div_9_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
const _c1 = function (a0) {
  return {
    $implicit: a0
  };
};
function CategoriesSwiperComponent_div_9_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CategoriesSwiperComponent_div_9_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 14);
  }
  if (rf & 2) {
    const category_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, category_r7));
  }
}
function CategoriesSwiperComponent_div_9_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CategoriesSwiperComponent_div_9_4_ng_template_0_Template, 1, 4, "ng-template", 13);
  }
}
function CategoriesSwiperComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "swiper", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CategoriesSwiperComponent_div_9_4_Template, 1, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("spaceBetween", 30)("navigation", ctx_r0.navOpt)("slidesPerView", "auto")("freeMode", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
  }
}
function CategoriesSwiperComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "resourceUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", category_r11.friendlyUrl + "/" + category_r11.randomCategoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, category_r11.imageUrl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", category_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", category_r11.name, " ");
  }
}
function CategoriesSwiperComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-skeleton-loader-grid", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("wrap", false)("count", 4);
  }
}
const _c2 = ["*"];
swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation]);
class CategoriesSwiperComponent {
  constructor() {
    this.navOpt = {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev'
    };
  }
  ngOnInit() {}
}
CategoriesSwiperComponent.ɵfac = function CategoriesSwiperComponent_Factory(t) {
  return new (t || CategoriesSwiperComponent)();
};
CategoriesSwiperComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CategoriesSwiperComponent,
  selectors: [["app-categories-swiper"]],
  viewQuery: function CategoriesSwiperComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.swiper = _t.first);
    }
  },
  inputs: {
    categories: "categories",
    icon: "icon",
    title: "title"
  },
  ngContentSelectors: _c2,
  decls: 14,
  vars: 4,
  consts: [[1, "d-flex", "align-items-center"], [1, "icon-small", "me-2"], [1, "icon"], [1, "fs-l"], ["class", "d-flex align-items-center py-2", 4, "ngIf", "ngIfElse"], ["categoryRef", ""], ["loading", ""], [1, "d-flex", "align-items-center", "py-2"], ["svgIcon", "swiper-next", "color", "primary", 1, "swiper-nav-icon", "horizontal-rotate", "swiper-prev"], [3, "spaceBetween", "navigation", "slidesPerView", "freeMode"], ["swiper", ""], [4, "ngFor", "ngForOf"], ["color", "primary", "svgIcon", "swiper-next", 1, "swiper-nav-icon", "swiper-next"], ["swiperSlide", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "category-pill", "cur-pointer", 3, "routerLink"], ["height", "212px", "width", "212px", 3, "src", "alt"], [1, "d-flex", "justify-content-center", "align-items-center", "text-primary", "fs-s", "py-3", 2, "background-color", "#f4f4f4"], [1, "d-block", "mt-3", 3, "wrap", "count"]],
  template: function CategoriesSwiperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-swiper")(1, "div", 0)(2, "span", 1)(3, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CategoriesSwiperComponent_div_9_Template, 6, 5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CategoriesSwiperComponent_ng_template_10_Template, 5, 6, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, CategoriesSwiperComponent_ng_template_12_Template, 1, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.icon);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.categories)("ngIfElse", _r3);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _shared_components_skeleton_loaders_skeleton_loader_grid_skeleton_loader_grid_component__WEBPACK_IMPORTED_MODULE_1__.SkeletonLoaderGridComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, swiper_angular__WEBPACK_IMPORTED_MODULE_8__.SwiperComponent, swiper_angular__WEBPACK_IMPORTED_MODULE_8__.SwiperSlideDirective, _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_2__.SwiperComponent, _shared_pipes_resource_url_pipe__WEBPACK_IMPORTED_MODULE_3__.ResourceUrlPipe],
  styles: ["[_nghost-%COMP%]     .swiper-slide {\n  width: 215px;\n}\n.icon-small[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid #e2e2e2;\n  border-radius: 5px;\n  \n  height: 18px;\n  width: 18px;\n  \n}\n.icon-small[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  transform: scale(0.5);\n  font-size: 18px;\n  height: 16px;\n  width: 18px;\n}\n\n.category-pill[_ngcontent-%COMP%] {\n  border: solid 1px #e2e2e2;\n  border-radius: 5px;\n  min-width: 215px;\n  text-transform: uppercase;\n}\n.category-pill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 212px;\n  width: 212px;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2NhdGVnb3JpZXMtc3dpcGVyL2NhdGVnb3JpZXMtc3dpcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtFO0VBQ0UsWUFBQTtBQUpKO0FBWUE7RUFDRSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFWRjtBQVlFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFWSjs7QUFjQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBWEY7QUFhRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFYSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XG4gIC8vLm1haW4td3JhcHBlciB7XG4gIC8vICBtYXgtd2lkdGg6IDIzMHB4ICFpbXBvcnRhbnQ7XG4gIC8vfVxuICAvL1xuICAuc3dpcGVyLXNsaWRlIHtcbiAgICB3aWR0aDogMjE1cHg7XG4gIH1cblxuICAuc3dpcGVyIHtcbiAgICAvL2hlaWdodDogMjY1cHg7XG4gIH1cbn1cblxuLmljb24tc21hbGwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAvKiBmb250LXNpemU6IDhweDsgKi9cbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgLyogcGFkZGluZy10b3A6IDFweDsgKi9cblxuICAuaWNvbiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gIH1cbn1cblxuLmNhdGVnb3J5LXBpbGwge1xuICBib3JkZXI6IHNvbGlkIDFweCAjZTJlMmUyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi13aWR0aDogMjE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDIxMnB4O1xuICAgIHdpZHRoOiAyMTJweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/index.component */ 4981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _index_index_component__WEBPACK_IMPORTED_MODULE_0__.IndexComponent
}];
class DashboardRoutingModule {}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) {
  return new (t || DashboardRoutingModule)();
};
DashboardRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: DashboardRoutingModule
});
DashboardRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 425);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index/index.component */ 4981);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swiper/swiper.component */ 1154);
/* harmony import */ var _product_promo_banner_product_promo_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-promo-banner/product-promo-banner.component */ 3162);
/* harmony import */ var _categories_swiper_categories_swiper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-swiper/categories-swiper.component */ 4697);
/* harmony import */ var _hero_banners_swiper_hero_banners_swiper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hero-banners-swiper/hero-banners-swiper.component */ 967);
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-item/menu-item.component */ 7648);
/* harmony import */ var src_app_product_swiper_product_swiper_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/product-swiper/product-swiper.module */ 1843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);











class DashboardModule {}
DashboardModule.ɵfac = function DashboardModule_Factory(t) {
  return new (t || DashboardModule)();
};
DashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: DashboardModule
});
DashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
  // SwiperModule,
  src_app_product_swiper_product_swiper_module__WEBPACK_IMPORTED_MODULE_8__.ProductSwiperModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_1__.IndexComponent, _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_3__.SwiperComponent, _product_promo_banner_product_promo_banner_component__WEBPACK_IMPORTED_MODULE_4__.ProductPromoBannerComponent, _categories_swiper_categories_swiper_component__WEBPACK_IMPORTED_MODULE_5__.CategoriesSwiperComponent, _hero_banners_swiper_hero_banners_swiper_component__WEBPACK_IMPORTED_MODULE_6__.HeroBannersSwiperComponent, _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_7__.MenuItemComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
    // SwiperModule,
    src_app_product_swiper_product_swiper_module__WEBPACK_IMPORTED_MODULE_8__.ProductSwiperModule]
  });
})();

/***/ }),

/***/ 967:
/*!********************************************************************************!*\
  !*** ./src/app/dashboard/hero-banners-swiper/hero-banners-swiper.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroBannersSwiperComponent": () => (/* binding */ HeroBannersSwiperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ 9737);
/* harmony import */ var _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../swiper/swiper.component */ 1154);




function HeroBannersSwiperComponent_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7)(4, "div", 8)(5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " View more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const banner_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background-image: url(", banner_r2.heroBg, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", banner_r2.heroImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](banner_r2.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](banner_r2.subheading);
  }
}
function HeroBannersSwiperComponent_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HeroBannersSwiperComponent_3_ng_template_0_Template, 11, 6, "ng-template", 3);
  }
}
class HeroBannersSwiperComponent {
  constructor() {}
  ngOnInit() {}
}
HeroBannersSwiperComponent.ɵfac = function HeroBannersSwiperComponent_Factory(t) {
  return new (t || HeroBannersSwiperComponent)();
};
HeroBannersSwiperComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HeroBannersSwiperComponent,
  selectors: [["app-hero-banners-swiper"]],
  inputs: {
    heroBanners: "heroBanners"
  },
  decls: 4,
  vars: 5,
  consts: [[3, "spaceBetween", "slidesPerView", "freeMode", "pagination"], ["swiper", ""], [4, "ngFor", "ngForOf"], ["swiperSlide", ""], [1, "banner", "d-flex", "justify-content-between"], [1, "flex-grow-1", "hero-img"], [3, "src"], [1, "flex-grow-1", "d-flex", "flex-column", 2, "text-transform", "uppercase"], [1, "flex-grow-1", "d-flex", "flex-column", "justify-content-center", "align-items-center"], [1, "text-white", "banner-heading", "w-100"], [1, "text-secondary", "banner-subheading", "w-100"], [1, "align-self-center", "border", "border-1", "border-white", "text-white", "bg-transparent", "fs-xs", "py-2", "banner-action"]],
  template: function HeroBannersSwiperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-swiper")(1, "swiper", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeroBannersSwiperComponent_3_Template, 1, 0, null, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("spaceBetween", 30)("slidesPerView", "auto")("freeMode", true)("pagination", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.heroBanners);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, swiper_angular__WEBPACK_IMPORTED_MODULE_3__.SwiperComponent, swiper_angular__WEBPACK_IMPORTED_MODULE_3__.SwiperSlideDirective, _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_0__.SwiperComponent],
  styles: ["[_nghost-%COMP%]     .swiper {\n  height: 100%;\n}\n[_nghost-%COMP%]     .swiper-pagination-bullets.swiper-pagination-horizontal {\n  bottom: 0;\n}\n@media screen and (min-width: 576px) {\n  [_nghost-%COMP%]     .swiper-pagination-bullets.swiper-pagination-horizontal {\n    bottom: 10px;\n  }\n}\n[_nghost-%COMP%]     .swiper .swiper-pagination-bullet {\n  opacity: 1;\n}\n[_nghost-%COMP%]     .swiper .swiper-slide img {\n  height: auto;\n  width: inherit;\n}\n\n.banner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  padding: 1.5rem 0.25rem;\n}\n.banner[_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%] {\n  width: 156px;\n}\n.banner[_ngcontent-%COMP%]   .banner-heading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.banner[_ngcontent-%COMP%]   .banner-subheading[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.banner[_ngcontent-%COMP%]   .banner-action[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  width: 100px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n@media screen and (min-width: 480px) {\n  .banner[_ngcontent-%COMP%] {\n    padding: 3rem 1rem;\n    height: 262px;\n  }\n  .banner[_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%] {\n    width: 232px;\n  }\n  .banner[_ngcontent-%COMP%]   .banner-action[_ngcontent-%COMP%] {\n    width: 140px;\n  }\n}\n@media screen and (min-width: 768px) {\n  .banner[_ngcontent-%COMP%] {\n    height: 298px;\n  }\n  .banner[_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%] {\n    width: 282px;\n  }\n  .banner[_ngcontent-%COMP%]   .banner-heading[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .banner[_ngcontent-%COMP%]   .banner-subheading[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n@media screen and (min-width: 992px) {\n  .banner[_ngcontent-%COMP%] {\n    height: 368px;\n  }\n  .banner[_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%] {\n    width: 382px;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .banner[_ngcontent-%COMP%] {\n    height: 438px;\n  }\n  .banner[_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%] {\n    width: 482px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2hlcm8tYmFubmVycy1zd2lwZXIvaGVyby1iYW5uZXJzLXN3aXBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLFlBQUE7QUFISjtBQU1FO0VBQ0UsU0FBQTtBQUpKO0FBTUk7RUFIRjtJQUlJLFlBQUE7RUFISjtBQUNGO0FBTUU7RUFDRSxVQUFBO0FBSko7QUFNRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBSko7O0FBU0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBTkY7QUFRRTtFQUNFLFlBQUE7QUFOSjtBQVNFO0VBQ0UsZUFBQTtBQVBKO0FBVUU7RUFDRSxrQkFBQTtBQVJKO0FBV0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFUSjtBQVlFO0VBeEJGO0lBeUJJLGtCQUFBO0lBQ0EsYUFBQTtFQVRGO0VBV0U7SUFDRSxZQUFBO0VBVEo7RUFZRTtJQUNFLFlBQUE7RUFWSjtBQUNGO0FBYUU7RUFyQ0Y7SUFzQ0ksYUFBQTtFQVZGO0VBV0U7SUFDRSxZQUFBO0VBVEo7RUFXRTtJQUNFLGlCQUFBO0VBVEo7RUFXRTtJQUNFLGtCQUFBO0VBVEo7QUFDRjtBQVlFO0VBbERGO0lBbURJLGFBQUE7RUFURjtFQVdFO0lBQ0UsWUFBQTtFQVRKO0FBQ0Y7QUFZRTtFQTFERjtJQTJESSxhQUFBO0VBVEY7RUFXRTtJQUNFLFlBQUE7RUFUSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2FzczptYXAnO1xuQGltcG9ydCBcInNyYy9zdHlsaW5ncy9ic192YXJpYWJsZXNcIjtcblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgLnN3aXBlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24taG9yaXpvbnRhbCB7XG4gICAgYm90dG9tOiAwO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbWFwLmdldCgkZ3JpZC1icmVha3BvaW50cywgJ3NtJykpIHtcbiAgICAgIGJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cblxuICAuc3dpcGVyIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLnN3aXBlciAuc3dpcGVyLXNsaWRlIGltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cblxuLmJhbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBwYWRkaW5nOiAxLjVyZW0gMC4yNXJlbTtcblxuICAuaGVyby1pbWcge1xuICAgIHdpZHRoOiAxNTZweDtcbiAgfVxuXG4gIC5iYW5uZXItaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgLmJhbm5lci1zdWJoZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cblxuICAuYmFubmVyLWFjdGlvbiB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICBwYWRkaW5nOiAzcmVtIDFyZW07XG4gICAgaGVpZ2h0OiAyNjJweDtcblxuICAgIC5oZXJvLWltZyB7XG4gICAgICB3aWR0aDogMjMycHg7XG4gICAgfVxuXG4gICAgLmJhbm5lci1hY3Rpb24ge1xuICAgICAgd2lkdGg6IDE0MHB4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC5nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgaGVpZ2h0OiAyOThweDtcbiAgICAuaGVyby1pbWcge1xuICAgICAgd2lkdGg6IDI4MnB4O1xuICAgIH1cbiAgICAuYmFubmVyLWhlYWRpbmcge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuICAgIC5iYW5uZXItc3ViaGVhZGluZyB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbWFwLmdldCgkZ3JpZC1icmVha3BvaW50cywgJ2xnJykpIHtcbiAgICBoZWlnaHQ6IDM2OHB4O1xuXG4gICAgLmhlcm8taW1nIHtcbiAgICAgIHdpZHRoOiAzODJweDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIGhlaWdodDogNDM4cHg7XG5cbiAgICAuaGVyby1pbWcge1xuICAgICAgd2lkdGg6IDQ4MnB4O1xuICAgIH1cbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4981:
/*!****************************************************!*\
  !*** ./src/app/dashboard/index/index.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexComponent": () => (/* binding */ IndexComponent)
/* harmony export */ });
/* harmony import */ var _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/auto-destroy */ 7990);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/enums/microservice-type.enum */ 7502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/main-layout/main-layout.component */ 583);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _product_swiper_components_product_swiper_product_swiper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../product-swiper/components/product-swiper/product-swiper.component */ 4238);
/* harmony import */ var _product_promo_banner_product_promo_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-promo-banner/product-promo-banner.component */ 3162);
/* harmony import */ var _categories_swiper_categories_swiper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../categories-swiper/categories-swiper.component */ 4697);
/* harmony import */ var _hero_banners_swiper_hero_banners_swiper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hero-banners-swiper/hero-banners-swiper.component */ 967);












function IndexComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IndexComponent_div_11_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const filter_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.fetchProducts(filter_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filter_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("active", filter_r1 === ctx_r0.activeFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", filter_r1, " ");
  }
}
class IndexComponent extends _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__.AutoDestroy {
  constructor(api) {
    super();
    this.api = api;
    this.productFilters = ['New', 'Seasonal', 'Favorite', 'Last order', 'History'];
    this.activeFilter = this.productFilters[0];
  }
  ngOnInit() {
    this.fetchSaleProducts();
    this.fetchProducts();
    this.fetchPopularCategories();
    this.fetchHeroBanners();
  }
  fetchProducts(filter) {
    this.activeFilter = filter || this.productFilters[0];
    this.api.get(`product/sale/${filter}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(({
      data
    }) => {
      this.saleProducts = data.products;
    });
  }
  fetchSaleProducts() {
    this.api.get('product/sale/a').subscribe(({
      data
    }) => {
      this.saleProducts = data.products;
    });
  }
  fetchPopularCategories() {
    this.api.get('filter/popularCategories', _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__.MicroserviceType.inv).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(categories => {
      this.categories = categories.concat(categories).concat(categories).concat(categories).concat(categories).concat(categories).concat(categories).concat(categories).concat(categories).concat(categories).concat(categories).concat(categories).concat(categories).concat(categories);
    });
  }
  fetchHeroBanners() {
    this.api.get('hero-banners').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(({
      data
    }) => {
      this.heroBanners = data;
    });
  }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) {
  return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService));
};
IndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: IndexComponent,
  selectors: [["app-index"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
  decls: 18,
  vars: 5,
  consts: [["content", ""], [1, "mt-5"], [3, "heroBanners"], [1, "mt-3"], [1, "mt-3.5"], ["title", "Popular categories", "icon", "sell", 3, "categories"], ["title", "Products", "icon", "sell", 3, "products"], [1, "d-flex", "justify-content-between", "mt-3", "product-pills"], [3, "active", "click", 4, "ngFor", "ngForOf"], ["title", "Sale items", "icon", "sell", 3, "products"], [1, "d-none", "d-md-block", "mt-4"], [3, "click"]],
  template: function IndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-main-layout")(1, "div", 0)(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-hero-banners-swiper", 2)(4, "mat-divider", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-categories-swiper", 5)(7, "mat-divider", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 4)(9, "app-product-swiper", 6)(10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, IndexComponent_div_11_Template, 2, 3, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "mat-divider", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "app-product-swiper", 9)(15, "mat-divider", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "app-product-promo-banner");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("heroBanners", ctx.heroBanners);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("categories", ctx.categories);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("products", ctx.saleProducts);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.productFilters);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("products", ctx.saleProducts);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__.MainLayoutComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _product_swiper_components_product_swiper_product_swiper_component__WEBPACK_IMPORTED_MODULE_4__.ProductSwiperComponent, _product_promo_banner_product_promo_banner_component__WEBPACK_IMPORTED_MODULE_5__.ProductPromoBannerComponent, _categories_swiper_categories_swiper_component__WEBPACK_IMPORTED_MODULE_6__.CategoriesSwiperComponent, _hero_banners_swiper_hero_banners_swiper_component__WEBPACK_IMPORTED_MODULE_7__.HeroBannersSwiperComponent],
  styles: [".product-pills[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  color: #707070;\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  margin-right: 0.07rem;\n  font-size: 0.75rem;\n}\n.product-pills[_ngcontent-%COMP%]    > div.active[_ngcontent-%COMP%] {\n  background-color: #1b3664;\n  color: white;\n  font-weight: bold;\n}\n@media screen and (min-width: 576px) {\n  .product-pills[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxpbmdzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFLSTtFQUNFLHlCQ3lGVTtFRHhGVixZQUFBO0VBQ0EsaUJBQUE7QUFITjtBQU1JO0VBbEJGO0lBbUJJLG1CQUFBO0VBSEo7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3Nhc3M6bWFwJztcbkBpbXBvcnQgJ3NyYy9zdHlsaW5ncy9ic192YXJpYWJsZXMnO1xuXG4ucHJvZHVjdC1waWxscyB7XG4gID4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjA3cmVtO1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTsvLyAxMnB4O1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vQGltcG9ydCBcIn5ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XG4vL0BpbXBvcnQgXCJ+bm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4kYmx1ZS1wYWxldHRlOiAoXG4gIDUwOiAjZTRlN2VjLFxuICAxMDA6ICNlOWViZjAsXG4gIDIwMDogI2M2Y2NkYixcbiAgMzAwOiAjOGQ5YmIyLFxuICA0MDA6ICM1NDY4OGIsXG4gIDUwMDogIzFiMzY2NCxcbiAgNjAwOiAjMTgzMDVjLFxuICA3MDA6ICMxNDI5NTIsXG4gIDgwMDogIzEwMjI0OCxcbiAgOTAwOiAjMDgxNjM2LFxuICBBMTAwOiAjNmY5MmZmLFxuICBBMjAwOiAjM2M2Y2ZmLFxuICBBNDAwOiAjMDk0NWZmLFxuICBBNzAwOiAjMDAzYWVmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAjMDAwMDAwLFxuICAgIDEwMDogIzAwMDAwMCxcbiAgICAyMDA6ICMwMDAwMDAsXG4gICAgMzAwOiAjZmZmZmZmLFxuICAgIDQwMDogI2ZmZmZmZixcbiAgICA1MDA6ICNmZmZmZmYsXG4gICAgNjAwOiAjZmZmZmZmLFxuICAgIDcwMDogI2ZmZmZmZixcbiAgICA4MDA6ICNmZmZmZmYsXG4gICAgOTAwOiAjZmZmZmZmLFxuICAgIEExMDA6ICMwMDAwMDAsXG4gICAgQTIwMDogI2ZmZmZmZixcbiAgICBBNDAwOiAjZmZmZmZmLFxuICAgIEE3MDA6ICNmZmZmZmYsXG4gICksXG4pO1xuXG4kb3JhbmdlLXBhbGV0dGU6IChcbiAgNTA6ICNmZGVkZTUsXG4gIDEwMDogI2ZlZjBlYSxcbiAgMjAwOiAjZmJkOWM4LFxuICAzMDA6ICNmOGIzOTIsXG4gIDQwMDogI2Y0OGQ1YixcbiAgNTAwOiAjZjA2NzI0LFxuICA2MDA6ICNlZTVmMjAsXG4gIDcwMDogI2VjNTQxYixcbiAgODAwOiAjZTk0YTE2LFxuICA5MDA6ICNlNTM5MGQsXG4gIEExMDA6ICNmZmZmZmYsXG4gIEEyMDA6ICNmZmUzZGQsXG4gIEE0MDA6ICNmZmI4YWEsXG4gIEE3MDA6ICNmZmEzOTAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICNmZmZmZmYsXG4gICAgMTAwOiAjZmZmZmZmLFxuICAgIDIwMDogI2ZmZmZmZixcbiAgICAzMDA6ICNmZmZmZmYsXG4gICAgNDAwOiAjZmZmZmZmLFxuICAgIDUwMDogI2ZmZmZmZixcbiAgICA2MDA6ICNmZmZmZmYsXG4gICAgNzAwOiAjZmZmZmZmLFxuICAgIDgwMDogI2ZmZmZmZixcbiAgICA5MDA6ICNmZmZmZmYsXG4gICAgQTEwMDogI2ZmZmZmZixcbiAgICBBMjAwOiAjZmZmZmZmLFxuICAgIEE0MDA6ICNmZmZmZmYsXG4gICAgQTcwMDogI2ZmZmZmZixcbiAgKSxcbik7XG5cbiRyZWQtcGFsZXR0ZTogKFxuICA1MDogI2ZmZWJlZSxcbiAgMTAwOiAjZmZjZGQyLFxuICAyMDA6ICNlZjlhOWEsXG4gIDMwMDogI2U1NzM3MyxcbiAgNDAwOiAjZWY1MzUwLFxuICA1MDA6ICNmZjAwMDAsXG4gIDYwMDogI2U1MzkzNSxcbiAgNzAwOiAjZDMyZjJmLFxuICA4MDA6ICNjNjI4MjgsXG4gIDkwMDogI2I3MWMxYyxcbiAgQTEwMDogI2ZmOGE4MCxcbiAgQTIwMDogI2ZmNTI1MixcbiAgQTQwMDogI2ZmMTc0NCxcbiAgQTcwMDogI2Q1MDAwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogcmdiYShibGFjaywgMC44NyksXG4gICAgMTAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICAyMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDMwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgNDAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICA1MDA6IHdoaXRlLFxuICAgIDYwMDogd2hpdGUsXG4gICAgNzAwOiB3aGl0ZSxcbiAgICA4MDA6IHdoaXRlLFxuICAgIDkwMDogd2hpdGUsXG4gICAgQTEwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgQTIwMDogd2hpdGUsXG4gICAgQTQwMDogd2hpdGUsXG4gICAgQTcwMDogd2hpdGUsXG4gIClcbik7XG5cbiRwcmltYXJ5LXBhbGV0dGU6ICRibHVlLXBhbGV0dGU7XG4kYWNjZW50LXBhbGV0dGU6ICRvcmFuZ2UtcGFsZXR0ZTtcbiRzZWNvbmRhcnktcGFsZXR0ZTogJG9yYW5nZS1wYWxldHRlO1xuXG4kcHJpbWFyeS1jb2xvcjogbWFwLWdldCgkcHJpbWFyeS1wYWxldHRlLCA1MDApO1xuJHNlY29uZGFyeS1jb2xvcjogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDUwMCk7XG4kc2Vjb25kYXJ5LTMwMDogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDMwMCk7XG4kcHJpbWFyeS00MDA6IG1hcC1nZXQoJHByaW1hcnktcGFsZXR0ZSwgNDAwKTtcbiRlcnJvci1jb2xvcjogbWFwLWdldCgkcmVkLXBhbGV0dGUsIDUwMCk7XG5cbiRtYXgtd2lkdGg6IDEzNjZweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7648:
/*!************************************************************!*\
  !*** ./src/app/dashboard/menu-item/menu-item.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItemComponent": () => (/* binding */ MenuItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-menu */ 1051);




const _c0 = ["childMenu"];
function MenuItemComponent_span_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "button", 4)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-menu-item", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5.childMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", child_r2.children);
  }
}
function MenuItemComponent_span_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "button", 8)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r2.name);
  }
}
function MenuItemComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuItemComponent_span_2_span_1_Template, 8, 3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuItemComponent_span_2_span_2_Template, 4, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r2.children && child_r2.children.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !child_r2.children || child_r2.children.length === 0);
  }
}
class MenuItemComponent {
  constructor() {}
  ngOnInit() {}
}
MenuItemComponent.ɵfac = function MenuItemComponent_Factory(t) {
  return new (t || MenuItemComponent)();
};
MenuItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MenuItemComponent,
  selectors: [["app-menu-item"]],
  viewQuery: function MenuItemComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.childMenu = _t.first);
    }
  },
  inputs: {
    items: "items"
  },
  decls: 3,
  vars: 1,
  consts: [[1, "no-default-sub-icons"], ["childMenu", "matMenu"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["color", "primary", 1, "ms-2"], [3, "items"], ["menu", ""], ["mat-menu-item", ""]],
  template: function MenuItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-menu", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuItemComponent_span_2_Template, 3, 2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_3__.MatLegacyMenu, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_3__.MatLegacyMenuItem, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_3__.MatLegacyMenuTrigger, MenuItemComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3162:
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard/product-promo-banner/product-promo-banner.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPromoBannerComponent": () => (/* binding */ ProductPromoBannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/auto-destroy */ 7990);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_price_price_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/price/price.component */ 9563);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _shared_pipes_resource_url_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/resource-url.pipe */ 6531);









function ProductPromoBannerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div")(2, "span", 1)(3, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "bookmark_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Promo banner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "resourceUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6)(11, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "In stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "25% OFF");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 12)(20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div")(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "See details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "app-price", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 17)(34, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductPromoBannerComponent_div_0_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1._addToCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "span", 20)(40, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 7, ctx_r0.product.images[0].url), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Guarantee: ", ctx_r0.product.guarantee, " days");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Delivery: ", (ctx_r0.product.delivery == null ? null : ctx_r0.product.delivery.price) || "Free", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Returns: ", ctx_r0.product.returnPolicy, " days");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("amount", ctx_r0.product.price.priceWithVat);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.product.favorite ? "favorite" : "favorite_outline");
  }
}
/**
 * @todo replace product banner with this one
 */
class ProductPromoBannerComponent extends _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__.AutoDestroy {
  constructor(api) {
    super();
    this.api = api;
    this.addToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  ngOnInit() {
    this.getProduct();
  }
  _addToCart() {
    this.addToCart.emit();
  }
  getProduct() {
    this.api.get(`product/promo-product/${this.categoryId || 1}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(({
      data
    }) => {
      this.product = data;
    });
  }
}
ProductPromoBannerComponent.ɵfac = function ProductPromoBannerComponent_Factory(t) {
  return new (t || ProductPromoBannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
};
ProductPromoBannerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ProductPromoBannerComponent,
  selectors: [["app-product-promo-banner"]],
  inputs: {
    categoryId: "categoryId"
  },
  outputs: {
    addToCart: "addToCart"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "icon-small", "me-2"], ["inline", "", 1, "icon"], [1, "fs-l"], [1, "d-flex", "banner", "mt-3"], ["width", "160px", 1, "h-inh", 3, "src"], [1, "py-3", "ps-3", "ps-lg-5", "flex-grow-1"], [1, "fs-s", "fw-bold"], [1, "d-flex", "align-items-center", "fs-2xs"], [1, "d-flex", "flex-column", "flex-lg-row"], [1, "btn", "btn-outline-danger", "bg-white", "fw-bold", "text-nowrap", "fs-inh"], [1, "btn", "bg-danger", "text-white", "fw-bold", "ms-0", "mt-1", "mt-lg-0", "ms-lg-3", "text-nowrap", "fs-inh"], [1, "d-flex", "flex-column", "ms-3"], [1, "mx-1"], ["href", "#"], [1, "fw-bold", "align-self-baseline", "ms-3", "ms-lg-6", "fs-3xl"], [3, "amount"], [1, "d-flex", "align-items-center", "me-3"], [1, "btn", "btn-primary", "d-flex", "justify-content-center", "align-items-center", "text-nowrap", 3, "click"], [1, "me-3"], [1, "fav-icon-wrapper", "cur-pointer", "d-flex", "ms-3"], ["color", "accent"]],
  template: function ProductPromoBannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ProductPromoBannerComponent_div_0_Template, 42, 9, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_price_price_component__WEBPACK_IMPORTED_MODULE_2__.PriceComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _shared_pipes_resource_url_pipe__WEBPACK_IMPORTED_MODULE_3__.ResourceUrlPipe],
  styles: [".icon-small[_ngcontent-%COMP%] {\n  border: 1px solid #e2e2e2;\n  border-radius: 5px;\n  font-size: 11px;\n  height: 16px;\n  width: 17px;\n  padding-top: 1px;\n}\n.icon-small[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  rotate: -90deg;\n}\n\n.banner[_ngcontent-%COMP%] {\n  height: 116px;\n  border-radius: 5px;\n  box-shadow: 8px 8px 13px 0 rgba(0, 0, 0, 0.13);\n  background-color: #e9ebf0;\n}\n.banner[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL3Byb2R1Y3QtcHJvbW8tYmFubmVyL3Byb2R1Y3QtcHJvbW8tYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUdFO0VBQ0UsaUJBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXNtYWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE3cHg7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG5cbiAgLmljb24ge1xuICAgIHJvdGF0ZTogLTkwZGVnO1xuICB9XG59XG5cbi5iYW5uZXIge1xuICBoZWlnaHQ6IDExNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDhweCA4cHggMTNweCAwIHJnYmEoMCwgMCwgMCwgMC4xMyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWViZjA7XG4gIC8vaGVpZ2h0OiAxMThweFxuXG4gID4gaW1nIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1154:
/*!******************************************************!*\
  !*** ./src/app/dashboard/swiper/swiper.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwiperComponent": () => (/* binding */ SwiperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["*"];
// SwiperCore.use([FreeMode, Navigation, Thumbs, Pagination])
class SwiperComponent {
  constructor() {}
  ngOnInit() {}
}
SwiperComponent.ɵfac = function SwiperComponent_Factory(t) {
  return new (t || SwiperComponent)();
};
SwiperComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SwiperComponent,
  selectors: [["app-swiper"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function SwiperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map