"use strict";
(self["webpackChunkeshop"] = self["webpackChunkeshop"] || []).push([["main"],{

/***/ 6885:
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AccountComponent {
  constructor() {}
  ngOnInit() {}
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) {
  return new (t || AccountComponent)();
};
AccountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AccountComponent,
  selectors: [["app-account"]],
  decls: 1,
  vars: 0,
  template: function AccountComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [{
  path: 'auth',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_auth_components_dialog-login_dialog-login_component_ts"), __webpack_require__.e("src_app_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then(m => m.AuthModule)
}, {
  path: 'account',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_core_common_form2_ts-node_modules_angular_material_fesm2020_expansion_mjs"), __webpack_require__.e("default-src_app_account_pages_addresses_edit_edit_component_ts-src_app_core_guards_auth_guard-2abda9"), __webpack_require__.e("src_app_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 3879)).then(m => m.AccountModule)
}, {
  path: 'cart',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_auth_components_dialog-login_dialog-login_component_ts"), __webpack_require__.e("default-src_app_cart_cart_module_ts"), __webpack_require__.e("src_app_core_common_form2_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cart/cart.module */ 2943)).then(m => m.CartModule)
}, {
  path: 'checkout',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_core_common_form2_ts-node_modules_angular_material_fesm2020_expansion_mjs"), __webpack_require__.e("default-src_app_account_pages_addresses_edit_edit_component_ts-src_app_core_guards_auth_guard-2abda9"), __webpack_require__.e("src_app_checkout_checkout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./checkout/checkout.module */ 8400)).then(m => m.CheckoutModule)
}, {
  path: 'product/:slug/:randomProductId',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_core_common_form2_ts-node_modules_angular_material_fesm2020_expansion_mjs"), __webpack_require__.e("default-src_app_auth_components_dialog-login_dialog-login_component_ts"), __webpack_require__.e("default-src_app_product-swiper_product-swiper_module_ts"), __webpack_require__.e("default-src_app_cart_cart_module_ts"), __webpack_require__.e("default-src_app_product-category_category_category_module_ts"), __webpack_require__.e("src_app_product-category_product_product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./product-category/product/product.module */ 7163)).then(m => m.ProductModule)
}, {
  path: ':category',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_core_common_form2_ts-node_modules_angular_material_fesm2020_expansion_mjs"), __webpack_require__.e("default-src_app_auth_components_dialog-login_dialog-login_component_ts"), __webpack_require__.e("default-src_app_product-swiper_product-swiper_module_ts"), __webpack_require__.e("default-src_app_cart_cart_module_ts"), __webpack_require__.e("default-src_app_product-category_category_category_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./product-category/category/category.module */ 5290)).then(m => m.CategoryModule)
}, {
  path: '',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("default-src_app_product-swiper_product-swiper_module_ts"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 4814)).then(m => m.DashboardModule)
}
// { path: '',   redirectTo: '/category1', pathMatch: 'full' }
];

class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 3456:
/*!*****************************************!*\
  !*** ./src/app/app-translate.loader.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppTranslateLoader": () => (/* binding */ AppTranslateLoader)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/i18n/en.json */ 502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);

// @ts-ignore


class AppTranslateLoader {
  getTranslation(lang) {
    switch (lang) {
      case 'en':
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({
          ..._assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_0__
        });
      default:
        throw Error(`Unsupported language: ${lang}`);
    }
  }
}
AppTranslateLoader.ɵfac = function AppTranslateLoader_Factory(t) {
  return new (t || AppTranslateLoader)();
};
AppTranslateLoader.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AppTranslateLoader,
  factory: AppTranslateLoader.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/common/auto-destroy */ 7990);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/local-storage.service */ 4617);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);








function AppComponent_router_outlet_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
  }
}
function AppComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class AppComponent extends _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_1__.AutoDestroy {
  constructor(localStorageService, httpClient) {
    super();
    this.localStorageService = localStorageService;
    this.httpClient = httpClient;
    this.title = 'eshop';
    this.keyLoaded = false;
    this.keyLoaded = !!this.localStorageService.serviceKey;
  }
  ngOnInit() {
    this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.lunaServiceUrl}/luna-service.json`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(resp => resp.key)).subscribe(key => {
      this.keyLoaded = true;
      return this.localStorageService.serviceKey = key;
    });
  }
  onbeforeinstallprompt(e) {
    e.preventDefault();
    this.pwaInstallEvent = e;
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  hostBindings: function AppComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("beforeinstallprompt", function AppComponent_beforeinstallprompt_HostBindingHandler($event) {
        return ctx.onbeforeinstallprompt($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "w-100", "vh-100", "d-flex", "justify-content-center", "align-items-center"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AppComponent_router_outlet_0_Template, 1, 0, "router-outlet", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.keyLoaded)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/legacy-input */ 2044);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/interceptors/jwt.interceptor */ 3743);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _app_translate_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-translate.loader */ 3456);
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/account.component */ 6885);
/* harmony import */ var _core_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/interceptors/loader.interceptor */ 3519);
/* harmony import */ var _core_utils_custom_missing_translation_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/utils/custom-missing-translation-handler */ 5675);
/* harmony import */ var _core_interceptors_withCredentials_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/interceptors/withCredentials.interceptor */ 6789);
/* harmony import */ var _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/legacy-snack-bar */ 7402);
/* harmony import */ var _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/interceptors/error.interceptor */ 422);
/* harmony import */ var _core_interceptors_unAuthenticated_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/interceptors/unAuthenticated.interceptor */ 4186);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);


























class AppModule {
  constructor(iconRegistry, sanitizer) {
    iconRegistry.setDefaultFontSetClass('material-icons-outlined');
    iconRegistry.addSvgIcon('favorite_open', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/favorite.svg'));
    iconRegistry.addSvgIcon('swiper-next', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/swiper-next.svg'));
    iconRegistry.addSvgIcon('ruler', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ruler.svg'));
    iconRegistry.addSvgIcon('package_box', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/package-box.svg'));
  }
}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer));
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
    useClass: _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__.JWTInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
    useClass: _core_interceptors_withCredentials_interceptor__WEBPACK_IMPORTED_MODULE_7__.WithCredentialsInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
    useClass: _core_interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_5__.LoaderInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
    useClass: _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_8__.ErrorInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
    useClass: _core_interceptors_unAuthenticated_interceptor__WEBPACK_IMPORTED_MODULE_9__.UnAuthenticatedInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_17__.MatLegacyButtonModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_18__.MatLegacyInputModule, _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatLegacySnackBarModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule.forRoot({
    defaultLanguage: 'en',
    isolate: true,
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateLoader,
      useClass: _app_translate_loader__WEBPACK_IMPORTED_MODULE_3__.AppTranslateLoader
    },
    missingTranslationHandler: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.MissingTranslationHandler,
      useClass: _core_utils_custom_missing_translation_handler__WEBPACK_IMPORTED_MODULE_6__.CustomMissingTranslationHandler
    }
  }), _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: !_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.local,
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _account_account_component__WEBPACK_IMPORTED_MODULE_4__.AccountComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_17__.MatLegacyButtonModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_18__.MatLegacyInputModule, _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatLegacySnackBarModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 7990:
/*!*********************************************!*\
  !*** ./src/app/core/common/auto-destroy.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoDestroy": () => (/* binding */ AutoDestroy)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class AutoDestroy {
  constructor() {
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  ngOnDestroy() {
    this.destroy$.next(); // trigger the unsubscribe
    this.destroy$.complete(); // finalize & clean up the subject stream
  }
}

AutoDestroy.ɵfac = function AutoDestroy_Factory(t) {
  return new (t || AutoDestroy)();
};
AutoDestroy.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AutoDestroy,
  factory: AutoDestroy.ɵfac
});

/***/ }),

/***/ 7502:
/*!******************************************************!*\
  !*** ./src/app/core/enums/microservice-type.enum.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MicroserviceType": () => (/* binding */ MicroserviceType)
/* harmony export */ });
var MicroserviceType;
(function (MicroserviceType) {
  MicroserviceType["au"] = "auth";
  MicroserviceType["usr"] = "user";
  MicroserviceType["inv"] = "inventory";
  MicroserviceType["acc"] = "accounting";
  MicroserviceType["del"] = "delivery";
})(MicroserviceType || (MicroserviceType = {}));

/***/ }),

/***/ 422:
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _core_services_error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/error.service */ 5801);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/notification.service */ 1645);
/* harmony import */ var _core_interceptors_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/interceptors/tokens */ 1603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);






class ErrorInterceptor {
  constructor(injector) {
    this.injector = injector;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      if (error.status !== 401 && request.context.get(_core_interceptors_tokens__WEBPACK_IMPORTED_MODULE_2__.SHOW_HTTP_MSGS)) {
        const errorService = this.injector.get(_core_services_error_service__WEBPACK_IMPORTED_MODULE_0__.ErrorService);
        const notifier = this.injector.get(_core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService);
        const messages = errorService.getServerErrorMessage(error);
        notifier.showError(messages);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
  return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector));
};
ErrorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: ErrorInterceptor,
  factory: ErrorInterceptor.ɵfac
});

/***/ }),

/***/ 3743:
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JWTInterceptor": () => (/* binding */ JWTInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/local-storage.service */ 4617);


class JWTInterceptor {
  constructor(ls) {
    this.ls = ls;
  }
  intercept(request, next) {
    const token = this.ls.token;
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    request = request.clone({
      setHeaders: {
        'Accept-Language': 'en'
      }
    });
    return next.handle(request);
  }
}
JWTInterceptor.ɵfac = function JWTInterceptor_Factory(t) {
  return new (t || JWTInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService));
};
JWTInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: JWTInterceptor,
  factory: JWTInterceptor.ɵfac
});

/***/ }),

/***/ 3519:
/*!*********************************************************!*\
  !*** ./src/app/core/interceptors/loader.interceptor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderInterceptor": () => (/* binding */ LoaderInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/loading.service */ 2569);



class LoaderInterceptor {
  constructor(loader) {
    this.loader = loader;
  }
  intercept(request, next) {
    this.loader.increment();
    return next.handle(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {
      this.loader.decrement();
    }));
  }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) {
  return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService));
};
LoaderInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LoaderInterceptor,
  factory: LoaderInterceptor.ɵfac
});

/***/ }),

/***/ 1603:
/*!*********************************************!*\
  !*** ./src/app/core/interceptors/tokens.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REDIRECT_WHEN_UNAUTHENTICATED": () => (/* binding */ REDIRECT_WHEN_UNAUTHENTICATED),
/* harmony export */   "SHOW_HTTP_MSGS": () => (/* binding */ SHOW_HTTP_MSGS)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);

const SHOW_HTTP_MSGS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpContextToken(() => true);
const REDIRECT_WHEN_UNAUTHENTICATED = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpContextToken(() => true);

/***/ }),

/***/ 4186:
/*!******************************************************************!*\
  !*** ./src/app/core/interceptors/unAuthenticated.interceptor.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnAuthenticatedInterceptor": () => (/* binding */ UnAuthenticatedInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_auth_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/auth-user.service */ 6922);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





class UnAuthenticatedInterceptor {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      if (error.status === 401) {
        this.authService.logoutAuthUser();
        if (this.shouldRedirectToLogin()) {
          this.router.navigate(['/auth/login']);
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  shouldRedirectToLogin() {
    const url = this.router.routerState.snapshot.url;
    return url.startsWith('/checkout') || url.startsWith('/account');
  }
}
UnAuthenticatedInterceptor.ɵfac = function UnAuthenticatedInterceptor_Factory(t) {
  return new (t || UnAuthenticatedInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_services_auth_user_service__WEBPACK_IMPORTED_MODULE_0__.AuthUserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
UnAuthenticatedInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UnAuthenticatedInterceptor,
  factory: UnAuthenticatedInterceptor.ɵfac
});

/***/ }),

/***/ 6789:
/*!******************************************************************!*\
  !*** ./src/app/core/interceptors/withCredentials.interceptor.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithCredentialsInterceptor": () => (/* binding */ WithCredentialsInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class WithCredentialsInterceptor {
  intercept(request, next) {
    request = request.clone({
      withCredentials: true
    });
    return next.handle(request);
  }
}
WithCredentialsInterceptor.ɵfac = function WithCredentialsInterceptor_Factory(t) {
  return new (t || WithCredentialsInterceptor)();
};
WithCredentialsInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: WithCredentialsInterceptor,
  factory: WithCredentialsInterceptor.ɵfac
});

/***/ }),

/***/ 5384:
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/local-storage.service */ 4617);




class ApiService {
  constructor(http, localStorage) {
    this.http = http;
    this.localStorage = localStorage;
  }
  get(api, ms, options) {
    return this.request('get', api, ms, options);
  }
  // @todo set ms type any until all apis are implemented
  post(api, body, ms, options) {
    options = {
      ...options,
      body
    };
    return this.request('post', api, ms, options);
  }
  put(api, body, ms, options) {
    options = {
      ...options,
      body
    };
    return this.request('put', api, ms, options);
  }
  delete(api, ms, options) {
    return this.request('post', api, ms, options);
  }
  request(method, api, ms, options) {
    options = this.addServiceTokenToHeader(options);
    const url = this.buildEP(api, ms);
    return this.http.request(method, url, options);
  }
  buildEP(api, ms) {
    let url;
    if (ms) {
      url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/services/${ms}/api/${api}`;
    } else {
      url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mApiUrl}/${api}`;
    }
    return url;
  }
  addServiceTokenToHeader(options) {
    options = options || {};
    options.headers = {
      ...options.headers,
      'Luna-Service': this.localStorage.serviceKey,
      'ngsw-bypass': ""
    };
    return options;
  }
}
ApiService.ɵfac = function ApiService_Factory(t) {
  return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService));
};
ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ApiService,
  factory: ApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6922:
/*!****************************************************!*\
  !*** ./src/app/core/services/auth-user.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthUserService": () => (/* binding */ AuthUserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/enums/microservice-type.enum */ 7502);
/* harmony import */ var _core_interceptors_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/interceptors/tokens */ 1603);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/local-storage.service */ 4617);







class AuthUserService {
  constructor(api, localStorage) {
    this.api = api;
    this.localStorage = localStorage;
    this.userSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(undefined);
    this.pendingRequests = {
      'authUser': false
    };
    this.authUser = this.userSource.asObservable();
  }
  fetchAuthUser() {
    if (!this.localStorage.token) {
      this.userSource.next(null);
      return rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
    }
    this.pendingRequests['authUser'] = true;
    const options = {
      context: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpContext().set(_core_interceptors_tokens__WEBPACK_IMPORTED_MODULE_1__.SHOW_HTTP_MSGS, false).set(_core_interceptors_tokens__WEBPACK_IMPORTED_MODULE_1__.REDIRECT_WHEN_UNAUTHENTICATED, false)
    };
    return this.api.get('account', _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_0__.MicroserviceType.usr, options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.pendingRequests['authUser'] = false)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(user => this.userSource.next(user)));
  }
  getAuthUser() {
    if (this.userSource.value === undefined && !this.pendingRequests['authUser']) {
      this.fetchAuthUser().subscribe();
    }
    return this.authUser;
  }
  logoutAuthUser() {
    this.localStorage.token = null;
    this.userSource.next(null);
  }
  setAuthToken(token) {
    this.localStorage.token = token;
    return this.fetchAuthUser();
  }
}
AuthUserService.ɵfac = function AuthUserService_Factory(t) {
  return new (t || AuthUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService));
};
AuthUserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: AuthUserService,
  factory: AuthUserService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5801:
/*!************************************************!*\
  !*** ./src/app/core/services/error.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorService": () => (/* binding */ ErrorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ErrorService {
  constructor() {}
  getClientErrorMessage(error) {
    return error.message ? error.message : error.toString();
  }
  getServerErrorMessage(error) {
    let err = error.error;
    //TODO:fix this on the backend side
    if (typeof err === 'string') {
      try {
        err = JSON.parse(err);
      } catch (e) {
        console.error(e);
      }
    }
    const messages = [];
    if (err.message === 'error.validation') {
      err.fieldErrors.forEach(error => {
        messages.push(`${error.field} ${error.message}`);
      });
      if (messages.length) {
        return messages;
      }
    }
    const message = err?.detail || error.message || err?.title;
    return [message];
  }
}
ErrorService.ɵfac = function ErrorService_Factory(t) {
  return new (t || ErrorService)();
};
ErrorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ErrorService,
  factory: ErrorService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2569:
/*!**************************************************!*\
  !*** ./src/app/core/services/loading.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class LoadingService {
  constructor() {
    this.activeRequests = 0;
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.loading$ = this._loading.asObservable();
  }
  increment() {
    this.activeRequests += 1;
    this.show();
  }
  decrement() {
    this.activeRequests -= 1;
    if (this.activeRequests <= 0) {
      this.hide();
    }
  }
  show() {
    this._loading.next(true);
  }
  hide() {
    this._loading.next(false);
  }
}
LoadingService.ɵfac = function LoadingService_Factory(t) {
  return new (t || LoadingService)();
};
LoadingService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LoadingService,
  factory: LoadingService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4617:
/*!********************************************************!*\
  !*** ./src/app/core/services/local-storage.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LocalStorageService {
  constructor() {
    this._cartUuidKey = 'cartUuid';
    this._tokenKey = 'token';
    this._serviceKey = 'serviceKey';
  }
  _set(key, value) {
    if (value !== null) {
      localStorage.setItem(key, value);
    } else {
      localStorage.removeItem(key);
    }
  }
  get token() {
    return localStorage.getItem(this._tokenKey);
  }
  set token(value) {
    this._set(this._tokenKey, value);
  }
  get serviceKey() {
    return localStorage.getItem(this._serviceKey);
  }
  set serviceKey(value) {
    this._set(this._serviceKey, value);
  }
  get cartUuid() {
    return localStorage.getItem(this._cartUuidKey);
  }
  set cartUuid(value) {
    this._set(this._cartUuidKey, value);
  }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) {
  return new (t || LocalStorageService)();
};
LocalStorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: LocalStorageService,
  factory: LocalStorageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1645:
/*!*******************************************************!*\
  !*** ./src/app/core/services/notification.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _shared_components_snackbar_message_snackbar_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/snackbar-message/snackbar-message.component */ 2071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-snack-bar */ 7402);



class NotificationService {
  constructor(injector, snackBar, zone) {
    this.injector = injector;
    this.snackBar = snackBar;
    this.zone = zone;
  }
  showSuccess(messages) {
    this.openSnackbar(messages, false);
  }
  showError(messages) {
    this.openSnackbar(messages, true);
  }
  openSnackbar(messages, error) {
    let panelClasses = ['zaidra-snack-bar', 'mat-toolbar'];
    const data = {
      messages,
      error
    };
    if (error) {
      panelClasses.push('mat-warn');
    } else {
      panelClasses.push('mat-primary');
    }
    this.zone.run(() => {
      this.snackBar.openFromComponent(_shared_components_snackbar_message_snackbar_message_component__WEBPACK_IMPORTED_MODULE_0__.SnackbarMessageComponent, {
        data,
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: panelClasses
      });
    });
  }
}
NotificationService.ɵfac = function NotificationService_Factory(t) {
  return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatLegacySnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
};
NotificationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: NotificationService,
  factory: NotificationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5675:
/*!******************************************************************!*\
  !*** ./src/app/core/utils/custom-missing-translation-handler.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomMissingTranslationHandler": () => (/* binding */ CustomMissingTranslationHandler)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
// noinspection AllyPlainJsInspection

class CustomMissingTranslationHandler {
  constructor() {
    this.message = 'Translation not found';
  }
  handle(params) {
    if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
      console.error(`No Translation! Key: ${params.key}, Lang: ${params.translateService.currentLang}`);
    }
    if (params.interpolateParams) {
      return params.interpolateParams['default'] || params.key;
    }
    return this.message;
  }
}

/***/ }),

/***/ 2071:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/snackbar-message/snackbar-message.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarMessageComponent": () => (/* binding */ SnackbarMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/legacy-snack-bar */ 7402);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);






function SnackbarMessageComponent_div_0_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SnackbarMessageComponent_div_0_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnackbarMessageComponent_div_0_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.dismissSnackbar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SnackbarMessageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SnackbarMessageComponent_div_0_mat_icon_3_Template, 2, 0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SnackbarMessageComponent_div_0_button_7_Template, 3, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mb-2", i_r2 + 1 !== ctx_r0.data.messages.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 0 && ctx_r0.data.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 === 0);
  }
}
class SnackbarMessageComponent {
  constructor(snackBar, data) {
    this.snackBar = snackBar;
    this.data = data;
  }
  dismissSnackbar() {
    this.snackBar.dismiss();
  }
}
SnackbarMessageComponent.ɵfac = function SnackbarMessageComponent_Factory(t) {
  return new (t || SnackbarMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatLegacySnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MAT_SNACK_BAR_DATA));
};
SnackbarMessageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SnackbarMessageComponent,
  selectors: [["app-snackbar-message"]],
  decls: 1,
  vars: 1,
  consts: [["class", "d-flex lh-base", 3, "mb-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "lh-base"], [1, "d-flex", "flex-grow-1"], [1, "icon-wrapper"], ["class", "me-1", 4, "ngIf"], [1, "fs-s"], [1, "btn-wrapper"], ["mat-icon-button", "", "color", "warn", 3, "click", 4, "ngIf"], [1, "me-1"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["inline", "", 1, "fs-l"]],
  template: function SnackbarMessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SnackbarMessageComponent_div_0_Template, 8, 5, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.messages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__.MatLegacyButton],
  styles: [".icon-wrapper[_ngcontent-%COMP%] {\n  width: 28px;\n}\n\n.btn-wrapper[_ngcontent-%COMP%] {\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc25hY2tiYXItbWVzc2FnZS9zbmFja2Jhci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24td3JhcHBlciB7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4uYnRuLXdyYXBwZXIge1xuICB3aWR0aDogNDBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  local: true,
  production: false,
  apiUrl: 'http://192.168.0.74:8083',
  mApiUrl: 'https://simmerp.zupria.com/eshop',
  lunaServiceUrl: ''
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 502:
/*!*********************************!*\
  !*** ./src/assets/i18n/en.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"validation":{"required":"Required.","email":"Please enter a valid email.","Not found":"Record not found.","not_found":"Record not found.","wrong_answer":"Wrong answer. Please try again.","not_match":"Your password don\'t match.","invalid_password":"Invalid password.","invalid_code":"Invalid code.","number_characters":"The password must have at least 2 number character.","minlength":"The password must have min 8 length."},"fields":{"email":"Email"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map