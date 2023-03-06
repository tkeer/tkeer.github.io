"use strict";
(self["webpackChunkeshop"] = self["webpackChunkeshop"] || []).push([["src_app_account_account_module_ts"],{

/***/ 4742:
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountRoutingModule": () => (/* binding */ AccountRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/guards/auth.guard */ 7574);
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.component */ 6885);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 9569);
/* harmony import */ var _pages_security_index_security_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/security/index/security.component */ 8988);
/* harmony import */ var _pages_security_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/security/set-password/set-password.component */ 5627);
/* harmony import */ var _pages_addresses_index_addresses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/addresses/index/addresses.component */ 7450);
/* harmony import */ var _pages_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/payment-methods/payment-methods.component */ 9819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










const routes = [{
  path: '',
  component: _account_component__WEBPACK_IMPORTED_MODULE_1__.AccountComponent,
  data: {
    label: 'My Account'
  },
  children: [{
    path: '',
    component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
    canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      label: ''
    }
  }, {
    path: 'addresses',
    redirectTo: 'addresses/',
    pathMatch: 'full'
  }, {
    path: 'addresses/:id',
    component: _pages_addresses_index_addresses_component__WEBPACK_IMPORTED_MODULE_5__.AddressesComponent,
    canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      label: 'My Addresses'
    }
  }, {
    path: 'payment-methods',
    redirectTo: 'payment-methods/',
    pathMatch: 'full'
  }, {
    path: 'payment-methods/:id',
    component: _pages_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_6__.PaymentMethodsComponent,
    canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      label: 'Payment methods'
    }
  }, {
    path: 'security',
    component: _pages_security_index_security_component__WEBPACK_IMPORTED_MODULE_3__.SecurityComponent,
    canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    data: {
      label: 'Login & security'
    },
    children: [{
      path: 'set-password',
      component: _pages_security_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_4__.SetPasswordComponent,
      data: {
        label: 'Password security'
      }
    }]
  }]
}];
class AccountRoutingModule {}
AccountRoutingModule.ɵfac = function AccountRoutingModule_Factory(t) {
  return new (t || AccountRoutingModule)();
};
AccountRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AccountRoutingModule
});
AccountRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AccountRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 8520:
/*!*****************************************************!*\
  !*** ./src/app/account/account-translate.loader.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountTranslateLoader": () => (/* binding */ AccountTranslateLoader)
/* harmony export */ });
/* harmony import */ var src_app_core_enums_language_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/enums/language.enum */ 783);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var src_assets_i18n_shared_en_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/i18n/shared/en.json */ 402);
/* harmony import */ var src_assets_i18n_shared_ro_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/i18n/shared/ro.json */ 3537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





class AccountTranslateLoader {
  getTranslation(lang) {
    switch (lang) {
      case src_app_core_enums_language_enum__WEBPACK_IMPORTED_MODULE_0__.Language.En:
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
          ...src_assets_i18n_shared_en_json__WEBPACK_IMPORTED_MODULE_1__
        });
      case src_app_core_enums_language_enum__WEBPACK_IMPORTED_MODULE_0__.Language.Ro:
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
          ...src_assets_i18n_shared_ro_json__WEBPACK_IMPORTED_MODULE_2__
        });
      default:
        throw Error(`Unsupported language: ${lang}`);
    }
  }
}
AccountTranslateLoader.ɵfac = function AccountTranslateLoader_Factory(t) {
  return new (t || AccountTranslateLoader)();
};
AccountTranslateLoader.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AccountTranslateLoader,
  factory: AccountTranslateLoader.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3879:
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountModule": () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 9569);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-routing.module */ 4742);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _pages_security_index_security_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/security/index/security.component */ 8988);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _pages_security_logins_logins_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/security/logins/logins.component */ 6593);
/* harmony import */ var _pages_security_questions_questions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/security/questions/questions.component */ 4469);
/* harmony import */ var _pages_security_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/security/set-password/set-password.component */ 5627);
/* harmony import */ var _pages_security_set_password_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/security/set-password/popup.component */ 9008);
/* harmony import */ var _pages_addresses_index_addresses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/addresses/index/addresses.component */ 7450);
/* harmony import */ var _pages_addresses_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/addresses/edit/edit.component */ 319);
/* harmony import */ var _pages_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/payment-methods/payment-methods.component */ 9819);
/* harmony import */ var _pages_payment_methods_add_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/payment-methods/add/add.component */ 6420);
/* harmony import */ var _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/account-layout/account-layout.component */ 6769);
/* harmony import */ var _components_tree_tree_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tree/tree.component */ 8686);
/* harmony import */ var _components_route_breadcrumbs_route_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/route-breadcrumbs/route-breadcrumbs.component */ 1156);
/* harmony import */ var _components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/breadcrumbs/breadcrumbs.component */ 2484);
/* harmony import */ var _components_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/auto-complete/auto-complete.component */ 3195);
/* harmony import */ var _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/legacy-autocomplete */ 6523);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 7578);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _core_enums_language_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @core/enums/language.enum */ 783);
/* harmony import */ var _core_utils_custom_missing_translation_handler__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @core/utils/custom-missing-translation-handler */ 5675);
/* harmony import */ var _account_translate_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./account-translate.loader */ 8520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);




























class AccountModule {}
AccountModule.ɵfac = function AccountModule_Factory(t) {
  return new (t || AccountModule)();
};
AccountModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
  type: AccountModule
});
AccountModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_1__.AccountRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLegacyFormFieldModule, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatLegacyAutocompleteModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatLegacyProgressSpinnerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule.forChild({
    defaultLanguage: _core_enums_language_enum__WEBPACK_IMPORTED_MODULE_17__.Language.En,
    isolate: true,
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateLoader,
      useClass: _account_translate_loader__WEBPACK_IMPORTED_MODULE_19__.AccountTranslateLoader
    },
    missingTranslationHandler: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.MissingTranslationHandler,
      useClass: _core_utils_custom_missing_translation_handler__WEBPACK_IMPORTED_MODULE_18__.CustomMissingTranslationHandler
    }
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AccountModule, {
    declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _pages_security_index_security_component__WEBPACK_IMPORTED_MODULE_3__.SecurityComponent, _pages_security_logins_logins_component__WEBPACK_IMPORTED_MODULE_4__.LoginsComponent, _pages_security_questions_questions_component__WEBPACK_IMPORTED_MODULE_5__.QuestionsComponent, _pages_security_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_6__.SetPasswordComponent, _pages_security_set_password_popup_component__WEBPACK_IMPORTED_MODULE_7__.PopupComponent, _pages_addresses_index_addresses_component__WEBPACK_IMPORTED_MODULE_8__.AddressesComponent, _pages_addresses_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__.EditAddressComponent, _pages_payment_methods_payment_methods_component__WEBPACK_IMPORTED_MODULE_10__.PaymentMethodsComponent, _pages_payment_methods_add_add_component__WEBPACK_IMPORTED_MODULE_11__.AddPaymentComponent, _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_12__.AccountLayoutComponent, _components_tree_tree_component__WEBPACK_IMPORTED_MODULE_13__.TreeComponent, _components_route_breadcrumbs_route_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_14__.RouteBreadcrumbsComponent, _components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_15__.BreadcrumbsComponent, _components_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_16__.AutoCompleteComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_1__.AccountRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__.MatExpansionModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLegacyFormFieldModule, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatLegacyAutocompleteModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatLegacyProgressSpinnerModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule],
    exports: [_pages_addresses_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__.EditAddressComponent]
  });
})();

/***/ }),

/***/ 6769:
/*!*******************************************************************************!*\
  !*** ./src/app/account/components/account-layout/account-layout.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountLayoutComponent": () => (/* binding */ AccountLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_auth_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/auth-user.service */ 6922);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/main-layout/main-layout.component */ 583);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tree/tree.component */ 8686);
/* harmony import */ var _route_breadcrumbs_route_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../route-breadcrumbs/route-breadcrumbs.component */ 1156);







const _c0 = [[["", "content", ""]]];
const _c1 = ["[content]"];
class AccountLayoutComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.menus = [{
      name: 'Favourite list',
      children: [{
        name: 'Favourite list'
      }]
    }, {
      name: 'Order history',
      children: [{
        name: 'Order history'
      }]
    }, {
      name: 'Account details',
      url: 'account',
      children: [{
        name: 'My addresses',
        url: '/account/addresses'
      }, {
        name: 'Payment method',
        url: '/account/payment-methods'
      }, {
        name: 'Login & security',
        url: '/account/security'
      }]
    }];
  }
  logout() {
    this.authService.logoutAuthUser();
    this.router.navigate(['/']);
  }
}
AccountLayoutComponent.ɵfac = function AccountLayoutComponent_Factory(t) {
  return new (t || AccountLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_user_service__WEBPACK_IMPORTED_MODULE_0__.AuthUserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
AccountLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AccountLayoutComponent,
  selectors: [["app-account-layout"]],
  ngContentSelectors: _c1,
  decls: 19,
  vars: 3,
  consts: [[3, "showDesktopSideNav", "showTopbarLinks"], ["top-header-section", ""], ["content", "", 1, "ms-0", "ms-md-3"], ["sidenav", "", 1, "p-3", "d-flex", "justify-content-between", "flex-column", "flex-grow-1", "h-100"], [1, "d-flex", "justify-content-between", "pb-3", "page-title"], [1, "d-flex", "justify-content-between"], [1, "w-100", 3, "tree"], [1, "d-flex", "justify-content-between", "py-3", "cur-pointer", 3, "click"]],
  template: function AccountLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-main-layout", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-route-breadcrumbs");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "div")(7, "div", 4)(8, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "My account");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "person");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "app-tree", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountLayoutComponent_Template_div_click_14_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("showDesktopSideNav", true)("showTopbarLinks", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tree", ctx.menus);
    }
  },
  dependencies: [_shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__.MainLayoutComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _tree_tree_component__WEBPACK_IMPORTED_MODULE_2__.TreeComponent, _route_breadcrumbs_route_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.RouteBreadcrumbsComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2484:
/*!*************************************************************************!*\
  !*** ./src/app/account/components/breadcrumbs/breadcrumbs.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbsComponent": () => (/* binding */ BreadcrumbsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



function BreadcrumbsComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", menu_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r1.label);
  }
}
class BreadcrumbsComponent {}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) {
  return new (t || BreadcrumbsComponent)();
};
BreadcrumbsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BreadcrumbsComponent,
  selectors: [["app-breadcrumbs"]],
  inputs: {
    menuItems: "menuItems"
  },
  decls: 5,
  vars: 1,
  consts: [[1, "d-flex", "justify-content-center", "d-none", "d-lg-flex"], [1, "w-100", "app-breadcrumbs"], [1, "d-flex", "w-100", "px-4"], [1, "breadcrumb", "w-100", "py-3"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], [3, "routerLink"]],
  template: function BreadcrumbsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "ol", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BreadcrumbsComponent_li_4_Template, 3, 2, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: [".app-breadcrumbs[_ngcontent-%COMP%] {\n  max-width: 1366px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxpbmdzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQzZHVTtBRDlHWiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGluZ3MvdmFyaWFibGVzXCI7XG5cbi5hcHAtYnJlYWRjcnVtYnMge1xuICBtYXgtd2lkdGg6ICRtYXgtd2lkdGg7XG5cbiAgLmJyZWFkY3J1bWIge1xuICAgIC8vYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMilcbiAgfVxufVxuIiwiLy9AaW1wb3J0IFwifm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcbi8vQGltcG9ydCBcIn5ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XG5cbiRibHVlLXBhbGV0dGU6IChcbiAgNTA6ICNlNGU3ZWMsXG4gIDEwMDogI2U5ZWJmMCxcbiAgMjAwOiAjYzZjY2RiLFxuICAzMDA6ICM4ZDliYjIsXG4gIDQwMDogIzU0Njg4YixcbiAgNTAwOiAjMWIzNjY0LFxuICA2MDA6ICMxODMwNWMsXG4gIDcwMDogIzE0Mjk1MixcbiAgODAwOiAjMTAyMjQ4LFxuICA5MDA6ICMwODE2MzYsXG4gIEExMDA6ICM2ZjkyZmYsXG4gIEEyMDA6ICMzYzZjZmYsXG4gIEE0MDA6ICMwOTQ1ZmYsXG4gIEE3MDA6ICMwMDNhZWYsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICMwMDAwMDAsXG4gICAgMTAwOiAjMDAwMDAwLFxuICAgIDIwMDogIzAwMDAwMCxcbiAgICAzMDA6ICNmZmZmZmYsXG4gICAgNDAwOiAjZmZmZmZmLFxuICAgIDUwMDogI2ZmZmZmZixcbiAgICA2MDA6ICNmZmZmZmYsXG4gICAgNzAwOiAjZmZmZmZmLFxuICAgIDgwMDogI2ZmZmZmZixcbiAgICA5MDA6ICNmZmZmZmYsXG4gICAgQTEwMDogIzAwMDAwMCxcbiAgICBBMjAwOiAjZmZmZmZmLFxuICAgIEE0MDA6ICNmZmZmZmYsXG4gICAgQTcwMDogI2ZmZmZmZixcbiAgKSxcbik7XG5cbiRvcmFuZ2UtcGFsZXR0ZTogKFxuICA1MDogI2ZkZWRlNSxcbiAgMTAwOiAjZmVmMGVhLFxuICAyMDA6ICNmYmQ5YzgsXG4gIDMwMDogI2Y4YjM5MixcbiAgNDAwOiAjZjQ4ZDViLFxuICA1MDA6ICNmMDY3MjQsXG4gIDYwMDogI2VlNWYyMCxcbiAgNzAwOiAjZWM1NDFiLFxuICA4MDA6ICNlOTRhMTYsXG4gIDkwMDogI2U1MzkwZCxcbiAgQTEwMDogI2ZmZmZmZixcbiAgQTIwMDogI2ZmZTNkZCxcbiAgQTQwMDogI2ZmYjhhYSxcbiAgQTcwMDogI2ZmYTM5MCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogI2ZmZmZmZixcbiAgICAxMDA6ICNmZmZmZmYsXG4gICAgMjAwOiAjZmZmZmZmLFxuICAgIDMwMDogI2ZmZmZmZixcbiAgICA0MDA6ICNmZmZmZmYsXG4gICAgNTAwOiAjZmZmZmZmLFxuICAgIDYwMDogI2ZmZmZmZixcbiAgICA3MDA6ICNmZmZmZmYsXG4gICAgODAwOiAjZmZmZmZmLFxuICAgIDkwMDogI2ZmZmZmZixcbiAgICBBMTAwOiAjZmZmZmZmLFxuICAgIEEyMDA6ICNmZmZmZmYsXG4gICAgQTQwMDogI2ZmZmZmZixcbiAgICBBNzAwOiAjZmZmZmZmLFxuICApLFxuKTtcblxuJHJlZC1wYWxldHRlOiAoXG4gIDUwOiAjZmZlYmVlLFxuICAxMDA6ICNmZmNkZDIsXG4gIDIwMDogI2VmOWE5YSxcbiAgMzAwOiAjZTU3MzczLFxuICA0MDA6ICNlZjUzNTAsXG4gIDUwMDogI2ZmMDAwMCxcbiAgNjAwOiAjZTUzOTM1LFxuICA3MDA6ICNkMzJmMmYsXG4gIDgwMDogI2M2MjgyOCxcbiAgOTAwOiAjYjcxYzFjLFxuICBBMTAwOiAjZmY4YTgwLFxuICBBMjAwOiAjZmY1MjUyLFxuICBBNDAwOiAjZmYxNzQ0LFxuICBBNzAwOiAjZDUwMDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICAxMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDIwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgMzAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICA0MDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDUwMDogd2hpdGUsXG4gICAgNjAwOiB3aGl0ZSxcbiAgICA3MDA6IHdoaXRlLFxuICAgIDgwMDogd2hpdGUsXG4gICAgOTAwOiB3aGl0ZSxcbiAgICBBMTAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICBBMjAwOiB3aGl0ZSxcbiAgICBBNDAwOiB3aGl0ZSxcbiAgICBBNzAwOiB3aGl0ZSxcbiAgKVxuKTtcblxuJHByaW1hcnktcGFsZXR0ZTogJGJsdWUtcGFsZXR0ZTtcbiRhY2NlbnQtcGFsZXR0ZTogJG9yYW5nZS1wYWxldHRlO1xuJHNlY29uZGFyeS1wYWxldHRlOiAkb3JhbmdlLXBhbGV0dGU7XG5cbiRwcmltYXJ5LWNvbG9yOiBtYXAtZ2V0KCRwcmltYXJ5LXBhbGV0dGUsIDUwMCk7XG4kc2Vjb25kYXJ5LWNvbG9yOiBtYXAtZ2V0KCRzZWNvbmRhcnktcGFsZXR0ZSwgNTAwKTtcbiRzZWNvbmRhcnktMzAwOiBtYXAtZ2V0KCRzZWNvbmRhcnktcGFsZXR0ZSwgMzAwKTtcbiRwcmltYXJ5LTQwMDogbWFwLWdldCgkcHJpbWFyeS1wYWxldHRlLCA0MDApO1xuJGVycm9yLWNvbG9yOiBtYXAtZ2V0KCRyZWQtcGFsZXR0ZSwgNTAwKTtcblxuJG1heC13aWR0aDogMTM2NnB4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1156:
/*!*************************************************************************************!*\
  !*** ./src/app/account/components/route-breadcrumbs/route-breadcrumbs.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteBreadcrumbsComponent": () => (/* binding */ RouteBreadcrumbsComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../breadcrumbs/breadcrumbs.component */ 2484);






class RouteBreadcrumbsComponent {
  constructor(breakpointObserver, router, route) {
    this.breakpointObserver = breakpointObserver;
    this.router = router;
    this.route = route;
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)).subscribe(() => {
      this.menuItems = this.createBreadcrumbs(this.route.root);
    });
  }
  createBreadcrumbs(route, url = '', breadcrumbs = []) {
    const children = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      const routeURL = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }
      const label = child.snapshot.data['label'];
      if (label) {
        breadcrumbs.push({
          label,
          url
        });
      }
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
RouteBreadcrumbsComponent.ɵfac = function RouteBreadcrumbsComponent_Factory(t) {
  return new (t || RouteBreadcrumbsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
};
RouteBreadcrumbsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: RouteBreadcrumbsComponent,
  selectors: [["app-route-breadcrumbs"]],
  decls: 1,
  vars: 1,
  consts: [[3, "menuItems"]],
  template: function RouteBreadcrumbsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumbs", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("menuItems", ctx.menuItems);
    }
  },
  dependencies: [_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8686:
/*!***********************************************************!*\
  !*** ./src/app/account/components/tree/tree.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeComponent": () => (/* binding */ TreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ 5183);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ 3453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);







function TreeComponent_mat_tree_node_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree-node", 3)(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", node_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r2.name);
  }
}
function TreeComponent_mat_nested_tree_node_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nested-tree-node")(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6)(4, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](7, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-0", ctx_r1.treeControl.isExpanded(node_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("app-tree-invisible", !ctx_r1.treeControl.isExpanded(node_r3))("b-btm", ctx_r1.treeControl.isExpanded(node_r3));
  }
}
class TreeComponent {
  // treeControl = new NestedTreeControl<any>(
  //   node => node.level,
  //   node => node.expandable,
  // )
  // treeFlattener = new MatTreeFlattener(
  //   this._transformer,
  //   node => node.level,
  //   node => node.expandable,
  //   node => node.children,
  // )
  // dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener)
  constructor() {
    this.tree = [];
    // private _transformer = (node: any, level: number) => {
    //   return {
    //     expandable: !!node.children && node.children.length > 0,
    //     name: node.name,
    //     level: level,
    //   }
    // }
    this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.NestedTreeControl(node => node.children);
    this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__.MatTreeNestedDataSource();
    // hasChild = (_: number, node: any) => node.expandable
    this.hasChild = (_, node) => !!node.children && node.children.length > 0;
  }
  ngOnInit() {
    this.dataSource.data = this.tree;
  }
}
TreeComponent.ɵfac = function TreeComponent_Factory(t) {
  return new (t || TreeComponent)();
};
TreeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TreeComponent,
  selectors: [["app-tree"]],
  inputs: {
    tree: "tree"
  },
  decls: 3,
  vars: 3,
  consts: [[1, "app-tree", 2, "background", "inherit", 3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", "class", "py-3", 4, "matTreeNodeDef"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", "", 1, "py-3"], [1, "text-decoration-none", 3, "routerLink"], ["matTreeNodeToggle", "", 1, "mat-tree-node", "justify-content-between", "py-3", "cur-pointer"], ["mat-icon-button", "", 1, "d-flex", "justify-content-end"], [1, "mat-icon-rtl-mirror"], ["role", "group"], ["matTreeNodeOutlet", ""]],
  template: function TreeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tree", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeComponent_mat_tree_node_1_Template, 3, 2, "mat-tree-node", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeComponent_mat_nested_tree_node_2_Template, 8, 8, "mat-nested-tree-node", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__.MatLegacyButton, _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__.MatNestedTreeNode, _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__.MatTreeNodeDef, _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__.MatTreeNodeToggle, _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__.MatTree, _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__.MatTreeNode, _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__.MatTreeNodeOutlet],
  styles: ["[_nghost-%COMP%]     .mat-tree > .mat-tree-node {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n[_nghost-%COMP%]     .mat-tree > .mat-nested-tree-node > .mat-tree-node {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n[_nghost-%COMP%]     .mat-tree .mat-nested-tree-node .mat-tree-node {\n  height: 60px;\n}\n[_nghost-%COMP%]     .app-tree div[role=group] > .mat-tree-node {\n  padding-left: 0 !important;\n}\n[_nghost-%COMP%]     .app-tree div[role=group] .mat-tree-node:first-child {\n  padding-top: 2rem !important;\n}\n\n.app-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.b-btm[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n\n.app-tree[_ngcontent-%COMP%]   .mat-nested-tree-node[_ngcontent-%COMP%]   div[role=group][_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n\n\n.app-tree[_ngcontent-%COMP%]   div[role=group][_ngcontent-%COMP%]    > .mat-tree-node[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9jb21wb25lbnRzL3RyZWUvdHJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLDRDQUFBO0FBRE47QUFJSTtFQUNFLDRDQUFBO0FBRk47QUFLSTtFQUNFLFlBQUE7QUFITjtBQVNJO0VBQ0UsMEJBQUE7QUFQTjtBQVVJO0VBQ0UsNEJBQUE7QUFSTjs7QUFhQTtFQUNFLGFBQUE7QUFWRjs7QUFhQTtFQUNFLDRDQUFBO0FBVkY7O0FBYUE7O0VBQUE7QUFHQTtFQUNFLGtCQUFBO0FBVkY7O0FBYUE7Ozs7RUFBQTtBQUtBO0VBQ0Usa0JBQUE7QUFWRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XG4gIC5tYXQtdHJlZSB7XG4gICAgPiAubWF0LXRyZWUtbm9kZSB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICA+IC5tYXQtbmVzdGVkLXRyZWUtbm9kZSA+IC5tYXQtdHJlZS1ub2RlIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSAubWF0LXRyZWUtbm9kZSB7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgfVxuICB9XG5cblxuICAuYXBwLXRyZWUgZGl2W3JvbGU9Z3JvdXBdIHtcbiAgICA+IC5tYXQtdHJlZS1ub2RlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tYXQtdHJlZS1ub2RlOmZpcnN0LWNoaWxkIHtcbiAgICAgIHBhZGRpbmctdG9wOiAycmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5hcHAtdHJlZS1pbnZpc2libGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYi1idG0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKVxufVxuXG4vKlxuICogVGhpcyBwYWRkaW5nIHNldHMgYWxpZ25tZW50IG9mIHRoZSBuZXN0ZWQgbm9kZXMuXG4gKi9cbi5hcHAtdHJlZSAubWF0LW5lc3RlZC10cmVlLW5vZGUgZGl2W3JvbGU9Z3JvdXBdIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuXG4vKlxuICogUGFkZGluZyBmb3IgbGVhZiBub2Rlcy5cbiAqIExlYWYgbm9kZXMgbmVlZCB0byBoYXZlIHBhZGRpbmcgc28gYXMgdG8gYWxpZ24gd2l0aCBvdGhlciBub24tbGVhZiBub2Rlc1xuICogdW5kZXIgdGhlIHNhbWUgcGFyZW50LlxuICovXG4uYXBwLXRyZWUgZGl2W3JvbGU9Z3JvdXBdID4gLm1hdC10cmVlLW5vZGUge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7450:
/*!**********************************************************************!*\
  !*** ./src/app/account/pages/addresses/index/addresses.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressesComponent": () => (/* binding */ AddressesComponent)
/* harmony export */ });
/* harmony import */ var _core_models_address_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models/address.model */ 2426);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var src_app_shared_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/confirm/confirm.component */ 8392);
/* harmony import */ var _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common/auto-destroy */ 7990);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit/edit.component */ 319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_skeleton_loaders_skeleton_loader_grid_skeleton_loader_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/skeleton-loaders/skeleton-loader-grid/skeleton-loader-grid.component */ 4546);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/account-layout/account-layout.component */ 6769);















function AddressesComponent_div_2_mat_card_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
  }
}
const _c0 = function (a0, a1) {
  return {
    $implicit: a0,
    i: a1
  };
};
function AddressesComponent_div_2_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddressesComponent_div_2_mat_card_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const address_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](2, _c0, address_r7, i_r8));
  }
}
function AddressesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AddressesComponent_div_2_mat_card_1_Template, 2, 5, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.addresses);
  }
}
function AddressesComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No address added ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AddressesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddressesComponent_ng_template_7_Template_mat_icon_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const i_r11 = restoredCtx.i;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.markAsFeatured(i_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 16)(11, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddressesComponent_ng_template_7_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const i_r11 = restoredCtx.i;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.delete(i_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const address_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](address_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("featured", address_r10.featured);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](address_r10.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](address_r10.fullAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", "/account/addresses/" + address_r10.id);
  }
}
function AddressesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-skeleton-loader-grid");
  }
}
class AddressesComponent extends _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_2__.AutoDestroy {
  constructor(api, dialog, router, route) {
    super();
    this.api = api;
    this.dialog = dialog;
    this.router = router;
    this.route = route;
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd)).subscribe(() => {
      this.addressId = this.route.snapshot.params['id'];
      if (!this.addressId) {
        return;
      }
      if (this.addressId === 'add') {
        this.showAddDialog();
        return;
      }
      if (this.addresses) {
        this.showEditDialog(parseInt(this.addressId));
      }
    });
  }
  ngOnInit() {
    this.api.get('user/addresses').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(({
      data
    }) => {
      this.addresses = data;
      if (this.addressId && this.addressId != 'add') {
        this.showEditDialog(parseInt(this.addressId));
      }
    });
  }
  delete(index) {
    const dialogRef = this.dialog.open(src_app_shared_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmComponent, {
      width: '350px',
      data: {
        label: 'address'
      }
    });
    dialogRef.beforeClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(canDelete => {
      this.handleDeleteAddr(canDelete, index);
    });
  }
  markAsFeatured(index) {
    const address = this.addresses[index];
    this.api.post(`user/addresses/mark-featured/${address.id}`, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => {
      address.featured = true;
      const oldFeatured = this.addresses.find(x => x.featured);
      if (oldFeatured) {
        oldFeatured.featured = false;
      }
    });
  }
  showEditDialog(id) {
    const index = this.addresses.findIndex(x => x.id === id);
    const address = this.addresses[index];
    const dialogRef = this.dialog.open(_edit_edit_component__WEBPACK_IMPORTED_MODULE_3__.EditAddressComponent, {
      panelClass: 'responsive-dialog',
      data: {
        mode: 'edit',
        address
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(address => {
      this.handleEditAddr(address, index);
    });
  }
  showAddDialog() {
    const address = _core_models_address_model__WEBPACK_IMPORTED_MODULE_0__.Address.adapt({});
    const dialogRef = this.dialog.open(_edit_edit_component__WEBPACK_IMPORTED_MODULE_3__.EditAddressComponent, {
      panelClass: 'responsive-dialog',
      data: {
        mode: 'add',
        address
      }
    });
    dialogRef.afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(address => {
      this.handleAddAddr(address);
    });
  }
  handleEditAddr(address, index) {
    if (!address) {
      this.router.navigate(['/account/addresses/']);
    }
    this.api.put(`user/addresses/update/${address.id}`, {
      address
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => {
      this.addresses[index] = address;
      this.router.navigate(['/account/addresses/']);
    });
  }
  handleAddAddr(address) {
    if (!address) {
      this.router.navigate(['/account/addresses/']);
    }
    this.api.post('user/addresses/save', {
      address
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(({
      data
    }) => {
      this.addresses.push(data);
      this.router.navigate(['/account/addresses/']);
    });
  }
  handleDeleteAddr(canDelete, index) {
    if (!canDelete) {
      return;
    }
    const address = this.addresses[index];
    this.api.delete(`user/addresses/delete/${address.id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => {
      this.addresses.splice(index, 1);
    });
  }
}
AddressesComponent.ɵfac = function AddressesComponent_Factory(t) {
  return new (t || AddressesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_11__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
};
AddressesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AddressesComponent,
  selectors: [["app-addresses"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 11,
  vars: 3,
  consts: [["content", ""], ["class", "d-grid gap-3 addresses-wrapper", 4, "ngIf", "ngIfElse"], ["class", "d-flex justify-content-center mt-5", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-6", "mb-5"], ["routerLink", "/account/addresses/add", 1, "btn", "btn-primary"], ["addressRef", ""], ["loading", ""], [1, "d-grid", "gap-3", "addresses-wrapper"], ["class", "address-card col-md-4 d-flex flex-column w-100", 4, "ngFor", "ngForOf"], [1, "address-card", "col-md-4", "d-flex", "flex-column", "w-100"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "d-flex", "justify-content-center", "mt-5"], [1, "d-flex", "flex-column"], [1, "d-flex", "justify-content-between"], [1, "feature-icon", 3, "click"], [1, "mt-2"], [1, "d-flex", "justify-content-between", "mt-5"], [1, "btn", "btn-primary", 2, "width", "90px", 3, "routerLink"], [1, "btn", "btn-outline-primary", 2, "width", "90px", 3, "click"]],
  template: function AddressesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-account-layout")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AddressesComponent_div_2_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AddressesComponent_div_3_Template, 2, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Add new addresses");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, AddressesComponent_ng_template_7_Template, 15, 6, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, AddressesComponent_ng_template_9_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.addresses !== undefined)("ngIfElse", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.addresses && !ctx.addresses.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _shared_components_skeleton_loaders_skeleton_loader_grid_skeleton_loader_grid_component__WEBPACK_IMPORTED_MODULE_5__.SkeletonLoaderGridComponent, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_13__.MatLegacyCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_6__.AccountLayoutComponent],
  styles: [".address-card[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 15px 0 rgba(27, 54, 100, 0.25);\n  border: solid 1px #54688b;\n}\n\n.feature-icon[_ngcontent-%COMP%] {\n  color: #eaeaea;\n}\n.feature-icon.featured[_ngcontent-%COMP%] {\n  color: #f06724;\n}\n\n.addresses-wrapper[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n\n@media screen and (max-width: 768px) {\n  .addresses-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media screen and (max-width: 576px) {\n  .addresses-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9wYWdlcy9hZGRyZXNzZXMvaW5kZXgvYWRkcmVzc2VzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxpbmdzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGlEQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjtBQUlFO0VBQ0UsY0MrRmM7QURqR2xCOztBQU1BO0VBQ0UscUNBQUE7QUFIRjs7QUFNQTtFQUNFO0lBQ0UscUNBQUE7RUFIRjtBQUNGO0FBTUE7RUFDRTtJQUNFLHFDQUFBO0VBSkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3Nhc3M6bWFwJztcbkBpbXBvcnQgXCJzcmMvc3R5bGluZ3MvYnNfdmFyaWFibGVzXCI7XG5cbi5hZGRyZXNzLWNhcmQge1xuICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAwIHJnYmEoMjcsIDU0LCAxMDAsIDAuMjUpO1xuICBib3JkZXI6IHNvbGlkIDFweCAkcHJpbWFyeS00MDA7XG59XG5cbi5mZWF0dXJlLWljb24ge1xuICBjb2xvcjogI2VhZWFlYTtcblxuICAmLmZlYXR1cmVkIHtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgfVxufVxuXG4uYWRkcmVzc2VzLXdyYXBwZXIge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAuYWRkcmVzc2VzLXdyYXBwZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogbWFwLmdldCgkZ3JpZC1icmVha3BvaW50cywgJ3NtJykpIHtcbiAgLmFkZHJlc3Nlcy13cmFwcGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICB9XG59XG5cbiIsIi8vQGltcG9ydCBcIn5ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XG4vL0BpbXBvcnQgXCJ+bm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4kYmx1ZS1wYWxldHRlOiAoXG4gIDUwOiAjZTRlN2VjLFxuICAxMDA6ICNlOWViZjAsXG4gIDIwMDogI2M2Y2NkYixcbiAgMzAwOiAjOGQ5YmIyLFxuICA0MDA6ICM1NDY4OGIsXG4gIDUwMDogIzFiMzY2NCxcbiAgNjAwOiAjMTgzMDVjLFxuICA3MDA6ICMxNDI5NTIsXG4gIDgwMDogIzEwMjI0OCxcbiAgOTAwOiAjMDgxNjM2LFxuICBBMTAwOiAjNmY5MmZmLFxuICBBMjAwOiAjM2M2Y2ZmLFxuICBBNDAwOiAjMDk0NWZmLFxuICBBNzAwOiAjMDAzYWVmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAjMDAwMDAwLFxuICAgIDEwMDogIzAwMDAwMCxcbiAgICAyMDA6ICMwMDAwMDAsXG4gICAgMzAwOiAjZmZmZmZmLFxuICAgIDQwMDogI2ZmZmZmZixcbiAgICA1MDA6ICNmZmZmZmYsXG4gICAgNjAwOiAjZmZmZmZmLFxuICAgIDcwMDogI2ZmZmZmZixcbiAgICA4MDA6ICNmZmZmZmYsXG4gICAgOTAwOiAjZmZmZmZmLFxuICAgIEExMDA6ICMwMDAwMDAsXG4gICAgQTIwMDogI2ZmZmZmZixcbiAgICBBNDAwOiAjZmZmZmZmLFxuICAgIEE3MDA6ICNmZmZmZmYsXG4gICksXG4pO1xuXG4kb3JhbmdlLXBhbGV0dGU6IChcbiAgNTA6ICNmZGVkZTUsXG4gIDEwMDogI2ZlZjBlYSxcbiAgMjAwOiAjZmJkOWM4LFxuICAzMDA6ICNmOGIzOTIsXG4gIDQwMDogI2Y0OGQ1YixcbiAgNTAwOiAjZjA2NzI0LFxuICA2MDA6ICNlZTVmMjAsXG4gIDcwMDogI2VjNTQxYixcbiAgODAwOiAjZTk0YTE2LFxuICA5MDA6ICNlNTM5MGQsXG4gIEExMDA6ICNmZmZmZmYsXG4gIEEyMDA6ICNmZmUzZGQsXG4gIEE0MDA6ICNmZmI4YWEsXG4gIEE3MDA6ICNmZmEzOTAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICNmZmZmZmYsXG4gICAgMTAwOiAjZmZmZmZmLFxuICAgIDIwMDogI2ZmZmZmZixcbiAgICAzMDA6ICNmZmZmZmYsXG4gICAgNDAwOiAjZmZmZmZmLFxuICAgIDUwMDogI2ZmZmZmZixcbiAgICA2MDA6ICNmZmZmZmYsXG4gICAgNzAwOiAjZmZmZmZmLFxuICAgIDgwMDogI2ZmZmZmZixcbiAgICA5MDA6ICNmZmZmZmYsXG4gICAgQTEwMDogI2ZmZmZmZixcbiAgICBBMjAwOiAjZmZmZmZmLFxuICAgIEE0MDA6ICNmZmZmZmYsXG4gICAgQTcwMDogI2ZmZmZmZixcbiAgKSxcbik7XG5cbiRyZWQtcGFsZXR0ZTogKFxuICA1MDogI2ZmZWJlZSxcbiAgMTAwOiAjZmZjZGQyLFxuICAyMDA6ICNlZjlhOWEsXG4gIDMwMDogI2U1NzM3MyxcbiAgNDAwOiAjZWY1MzUwLFxuICA1MDA6ICNmZjAwMDAsXG4gIDYwMDogI2U1MzkzNSxcbiAgNzAwOiAjZDMyZjJmLFxuICA4MDA6ICNjNjI4MjgsXG4gIDkwMDogI2I3MWMxYyxcbiAgQTEwMDogI2ZmOGE4MCxcbiAgQTIwMDogI2ZmNTI1MixcbiAgQTQwMDogI2ZmMTc0NCxcbiAgQTcwMDogI2Q1MDAwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogcmdiYShibGFjaywgMC44NyksXG4gICAgMTAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICAyMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDMwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgNDAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICA1MDA6IHdoaXRlLFxuICAgIDYwMDogd2hpdGUsXG4gICAgNzAwOiB3aGl0ZSxcbiAgICA4MDA6IHdoaXRlLFxuICAgIDkwMDogd2hpdGUsXG4gICAgQTEwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgQTIwMDogd2hpdGUsXG4gICAgQTQwMDogd2hpdGUsXG4gICAgQTcwMDogd2hpdGUsXG4gIClcbik7XG5cbiRwcmltYXJ5LXBhbGV0dGU6ICRibHVlLXBhbGV0dGU7XG4kYWNjZW50LXBhbGV0dGU6ICRvcmFuZ2UtcGFsZXR0ZTtcbiRzZWNvbmRhcnktcGFsZXR0ZTogJG9yYW5nZS1wYWxldHRlO1xuXG4kcHJpbWFyeS1jb2xvcjogbWFwLWdldCgkcHJpbWFyeS1wYWxldHRlLCA1MDApO1xuJHNlY29uZGFyeS1jb2xvcjogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDUwMCk7XG4kc2Vjb25kYXJ5LTMwMDogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDMwMCk7XG4kcHJpbWFyeS00MDA6IG1hcC1nZXQoJHByaW1hcnktcGFsZXR0ZSwgNDAwKTtcbiRlcnJvci1jb2xvcjogbWFwLWdldCgkcmVkLXBhbGV0dGUsIDUwMCk7XG5cbiRtYXgtd2lkdGg6IDEzNjZweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9569:
/*!******************************************************!*\
  !*** ./src/app/account/pages/home/home.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _core_common_form2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/form2 */ 4842);
/* harmony import */ var _core_services_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/date.service */ 135);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/auth-user.service */ 6922);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/input/input.component */ 2371);
/* harmony import */ var _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/select/select.component */ 9092);
/* harmony import */ var _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/directives/loading.directive */ 3570);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-button */ 9159);
/* harmony import */ var _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/account-layout/account-layout.component */ 6769);
















function HomeComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 29)(2, "span", 30)(3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 33)(8, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Email: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span", 34)(13, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Rank: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "span", 35)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.user == null ? null : ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.user == null ? null : ctx_r0.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", (ctx_r0.user == null ? null : ctx_r0.user.rank) || "--", " ");
  }
}
function HomeComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeComponent_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.editProfile = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Edit profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function HomeComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function HomeComponent_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r14.saveProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appLoading", ctx_r2.loading);
  }
}
function HomeComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " No address added ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " No payment method added ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function HomeComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41)(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-input", 43)(3, "app-select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "app-select", 48)(8, "app-select", 49)(9, "app-select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx_r6.getFC("name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx_r6.getFC("salutation"))("options", ctx_r6.salutations);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx_r6.getFC("phoneNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx_r6.getFC("dobDay"))("options", ctx_r6.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx_r6.getFC("dobMonth"))("options", ctx_r6.months);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx_r6.getFC("dobYear"))("options", ctx_r6.years);
  }
}
function HomeComponent_ng_template_49_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function HomeComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14)(1, "div", 51)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HomeComponent_ng_template_49_mat_icon_4_Template, 2, 0, "mat-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r8.address.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.address.featured);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r8.address.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", ctx_r8.address.fullAddress, ", ", ctx_r8.address.city, ", ", ctx_r8.address.state, "");
  }
}
function HomeComponent_ng_template_51_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function HomeComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14)(1, "div", 51)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, HomeComponent_ng_template_51_mat_icon_4_Template, 2, 0, "mat-icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "CVV ***");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("**** **** **** ", ctx_r10.method.lastFour, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.method.featured);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r10.method.month, "/", ctx_r10.method.year, "");
  }
}
class HomeComponent extends _core_common_form2__WEBPACK_IMPORTED_MODULE_0__.Form {
  constructor(authService, api, fb) {
    super();
    this.authService = authService;
    this.api = api;
    this.editProfile = false;
    this.months = _core_services_date_service__WEBPACK_IMPORTED_MODULE_1__.DateUtil.months().map(i => ({
      label: i,
      value: i
    }));
    this.years = _core_services_date_service__WEBPACK_IMPORTED_MODULE_1__.DateUtil.dobYears().map(i => ({
      label: i,
      value: i
    }));
    this.days = _core_services_date_service__WEBPACK_IMPORTED_MODULE_1__.DateUtil.days().map(i => ({
      label: i,
      value: i
    }));
    this.salutations = ['Mr', 'Mrs'].map(i => ({
      label: i,
      value: i
    }));
    this.loading = false;
    this._initFormControl(fb, {});
  }
  ngOnInit() {
    this.authService.authUser.subscribe(user => {
      this.user = user;
      this.initProfileForm(user);
    });
    this.api.get('user/addresses/featured').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(({
      data
    }) => {
      this.totalAddresses = data.count;
      this.address = data.featured;
    });
    this.api.get('user/payment-methods/featured').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(({
      data
    }) => {
      this.totalMethods = data.count;
      this.method = data.featured;
    });
    this.api.get('user/recent-logins/count').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(({
      data
    }) => {
      this.numLogins = data.count;
    });
  }
  saveProfile() {
    const dDay = this.form.controls['dobDay'].value || '-';
    const dMonth = this.form.controls['dobMonth'].value || '-';
    const dYear = this.form.controls['dobYear'].value || '-';
    const data = {
      'name': this.form.controls['name'].value,
      'salutation': this.form.controls['salutation'].value,
      'phoneNumber': this.form.controls['phoneNumber'].value,
      'dob': `${dYear}-${dMonth}-${dDay}`
    };
    this.loading = true;
    this.api.post('user/save-profile', data).pipe(this.handleSubmit()).subscribe(() => {
      this.editProfile = false;
      this.loading = false;
    });
  }
  initProfileForm(user) {
    if (!user) {
      return;
    }
    let date;
    if (user.dob) {
      date = new Date(user.dob);
    }
    this.setFCBYName('name', null, user.name);
    this.setFCBYName('salutation', null, user.salutation);
    this.setFCBYName('phoneNumber', null, user.phoneNumber);
    const day = date ? date.getDate().toString().padStart(2, '0') : null;
    const month = date ? (date.getMonth() + 1).toString().padStart(2, '0') : null;
    const year = date ? date.getFullYear() : null;
    this.setFCBYName('dobDay', null, day);
    this.setFCBYName('dobMonth', null, month);
    this.setFCBYName('dobYear', null, year);
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__.AuthUserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
  decls: 53,
  vars: 13,
  consts: [["content", "", 1, "mb-5"], [1, "d-flex", "justify-content-between", "mt-5", "d-lg-none"], [1, "card-title"], ["mat-icon-button", ""], [1, "container-fluid", "p-0", "d-flex", "flex-wrap"], [1, "me-3", "col-12", "d-flex", "align-items-center", "flex-column", "profile-card"], [1, "d-flex", "flex-column", "flex-md-row", "align-self-md-start", "align-items-center", "align-items-md-start", "w-100"], [1, "avatar-section", "ms-0", "ms-md-4"], [1, "img-fluid", 3, "src"], [4, "ngIf", "ngIfElse"], ["class", "btn btn-primary mt-2.25r", 3, "click", 4, "ngIf"], ["class", "btn btn-primary mt-2.25r", 3, "appLoading", "click", 4, "ngIf"], [1, "d-flex", "flex-wrap", "w-100", "justify-content-between", "gap-3"], [1, "account-card", "me-0", "d-flex", "flex-column", "justify-content-between"], [1, "d-flex", "flex-column"], [1, "heading"], ["class", "mt-5", 4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-center", "mt-2.25r"], ["routerLink", "/account/addresses", 1, "btn", "btn-primary"], [1, "account-card", "me-sm-0", "d-flex", "flex-column", "justify-content-between"], ["routerLink", "/account/payment-methods", 1, "btn", "btn-primary"], [1, "account-card", "d-flex", "flex-column", "justify-content-between"], [1, "mt-1.162r"], [1, "fw-bold"], [1, "mt-2"], ["routerLink", "security", 1, "btn", "btn-primary"], ["editProfileForm", ""], ["addrCard", ""], ["methodCard", ""], [1, "d-flex", "flex-column", "align-items-center", "align-items-md-start", "info-section"], [1, "username"], [1, "label", "d-none", "d-md-inline"], [1, "text"], [1, "email"], [1, "rank"], [1, "text", "d-inline-flex"], ["color", "accent", 1, "d-flex", "align-items-center", "ms-1", 2, "font-size", "13px"], [1, "btn", "btn-primary", "mt-2.25r", 3, "click"], [1, "btn", "btn-primary", "mt-2.25r", 3, "appLoading", "click"], ["saveBtn", ""], [1, "mt-5"], [1, "d-flex", "flex-column", "ps-0", "ps-md-4", "pt-4", "pt-md-0", "flex-grow-1", "profile-edit-wrapper", "w-100"], [1, "d-flex", "flex-wrap", "gap-3", "flex-column", "flex-md-row", "profile-row"], ["label", "Last name", 1, "flex-grow-1", "flex-basis-0", 3, "control"], ["label", "Social title", 1, "flex-grow-1", "flex-basis-0", "card-month", "full-width", 3, "control", "options"], [1, "d-flex", "flex-column", "flex-md-row", "flex-wrap", "gap-3", "mt-3", "profile-row"], ["label", "Phone number", 1, "flex-grow-1", "flex-basis-0", 3, "control"], [1, "d-flex", "gap-3", "gap-md-1", "flex-grow-1", "flex-wrap", "flex-basis-0", "dob-wrapper", "justify-content-between"], ["label", "Birth Day", 1, "dob-day", 3, "control", "options"], ["label", "Month", 1, "dob-month", 3, "control", "options"], ["label", "Year", 1, "dob-year", 3, "control", "options"], [1, "d-flex", "justify-content-between", "mt-1.162r"], ["color", "accent", 4, "ngIf"], ["color", "accent"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-account-layout")(1, "div", 0)(2, "div", 1)(3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "My account");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 3)(6, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "person");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 4)(9, "mat-card", 5)(10, "div", 6)(11, "div", 7)(12, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 20, 3, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, HomeComponent_button_15_Template, 2, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, HomeComponent_button_16_Template, 3, 1, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 12)(18, "mat-card", 13)(19, "div", 14)(20, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, HomeComponent_div_22_Template, 2, 0, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 17)(24, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Manage addresses");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "mat-card", 19)(27, "div", 14)(28, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, HomeComponent_div_30_Template, 2, 0, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 17)(32, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Manage payments");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "mat-card", 21)(35, "div", 14)(36, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, " Login & security ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "Security questions - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 17)(45, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Manage login & security");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, HomeComponent_ng_template_47_Template, 10, 10, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, HomeComponent_ng_template_49_Template, 9, 6, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, HomeComponent_ng_template_51_Template, 9, 4, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](48);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](50);
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", ctx.user == null ? null : ctx.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.editProfile)("ngIfElse", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.editProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.editProfile);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" My addresses ", ctx.totalAddresses > 1 ? "(" + ctx.totalAddresses + " more)" : "", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.address)("ngIfElse", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Payment methods ", ctx.totalAddresses > 1 ? "(" + ctx.totalAddresses + " more)" : "", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.method)("ngIfElse", _r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx.user == null ? null : ctx.user.missingQuestions) ? "In active" : "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Preview logins (", ctx.numLogins, " recent logins)");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_5__.SelectComponent, _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_6__.LoadingDirective, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_13__.MatLegacyCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_15__.MatLegacyButton, _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_7__.AccountLayoutComponent],
  styles: ["[_nghost-%COMP%]     app-select .mat-form-field {\n  width: 100%;\n}\n\n.profile-edit-wrapper[_ngcontent-%COMP%]   .profile-row[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  width: 100%;\n}\n.profile-edit-wrapper[_ngcontent-%COMP%]   .profile-row[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2) {\n  width: 100%;\n}\n.profile-edit-wrapper[_ngcontent-%COMP%]   .profile-row[_ngcontent-%COMP%]   .dob-wrapper[_ngcontent-%COMP%]   app-select[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media screen and (max-width: 576px) {\n  .profile-edit-wrapper[_ngcontent-%COMP%]   .profile-row[_ngcontent-%COMP%]   .dob-wrapper[_ngcontent-%COMP%]   app-select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 1289px) {\n  .profile-edit-wrapper[_ngcontent-%COMP%]   .profile-row[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n    width: 42%;\n  }\n  .profile-edit-wrapper[_ngcontent-%COMP%]   .profile-row[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2) {\n    width: 55%;\n  }\n  .profile-edit-wrapper[_ngcontent-%COMP%]   .profile-row[_ngcontent-%COMP%]   .dob-wrapper[_ngcontent-%COMP%]   .dob-day[_ngcontent-%COMP%] {\n    width: 136px;\n  }\n  .profile-edit-wrapper[_ngcontent-%COMP%]   .profile-row[_ngcontent-%COMP%]   .dob-wrapper[_ngcontent-%COMP%]   .dob-month[_ngcontent-%COMP%] {\n    width: 116px;\n  }\n  .profile-edit-wrapper[_ngcontent-%COMP%]   .profile-row[_ngcontent-%COMP%]   .dob-wrapper[_ngcontent-%COMP%]   .dob-year[_ngcontent-%COMP%] {\n    width: 103px;\n  }\n}\n\n.profile-card[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  margin-top: 45px;\n}\n.profile-card[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.profile-card[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.profile-card[_ngcontent-%COMP%], .account-card[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 15px 0 rgba(27, 54, 100, 0.25);\n  border: solid 1px #54688b;\n}\n\n.avatar-section[_ngcontent-%COMP%] {\n  width: 170px;\n  min-width: 130px;\n}\n.avatar-section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 50%;\n  width: 100%;\n}\n\n@media screen and (min-width: 768px) {\n  .profile-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 90px;\n  }\n  .profile-card[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%] {\n    margin-left: 37px;\n  }\n  .profile-card[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .profile-card[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n    margin-top: 25px;\n  }\n  .profile-card[_ngcontent-%COMP%]   .info-section[_ngcontent-%COMP%]   .rank[_ngcontent-%COMP%] {\n    margin-top: 25px;\n  }\n}\n.heading[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  color: #1b3664;\n  font-size: 18px;\n}\n\n.mt-2\\.25r[_ngcontent-%COMP%] {\n  margin-top: 2.25rem;\n}\n\n.mt-1\\.162r[_ngcontent-%COMP%] {\n  margin-top: 1.162rem;\n}\n\n.account-card[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n  min-height: 200px;\n  margin-top: 30px;\n}\n@media screen and (max-width: 768px) {\n  .card-wrapper[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media screen and (min-width: 992px) {\n  .card-wrapper[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.card-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n@keyframes _ngcontent-%COMP%_spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spinner[_ngcontent-%COMP%]:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n  border-top-color: #000000;\n  animation: _ngcontent-%COMP%_spinner 0.8s linear infinite;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGluZ3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJO0VBQ0UsV0FBQTtBQUpOOztBQVlJO0VBQ0UsV0FBQTtBQVROO0FBWUk7RUFDRSxXQUFBO0FBVk47QUFjTTtFQUNFLFVBQUE7QUFaUjtBQWdCSTtFQUVJO0lBQ0UsV0FBQTtFQWZSO0FBQ0Y7QUFxQk07RUFDQTtJQUNFLFVBQUE7RUFuQk47RUFzQkk7SUFDRSxVQUFBO0VBcEJOO0VBd0JNO0lBQ0UsWUFBQTtFQXRCUjtFQXdCTTtJQUNFLFlBQUE7RUF0QlI7RUF3Qk07SUFDRSxZQUFBO0VBdEJSO0FBQ0Y7O0FBeUNJO0VBQ0UsZ0JBQUE7QUF0Q047QUF3Q0k7RUFDRSxnQkFBQTtBQXRDTjtBQXdDSTtFQUNFLGdCQUFBO0FBdENOOztBQTJDQTtFQUNFLGlEQUFBO0VBQ0EseUJBQUE7QUF4Q0Y7O0FBMkNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBeENGO0FBMENFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQXhDSjs7QUE2Q0E7RUFHSTtJQUNFLGVBQUE7RUE1Q0o7RUErQ0U7SUFDRSxpQkFBQTtFQTdDSjtFQStDSTtJQUNFLGFBQUE7RUE3Q047RUErQ0k7SUFDRSxnQkFBQTtFQTdDTjtFQStDSTtJQUNFLGdCQUFBO0VBN0NOO0FBQ0Y7QUFrREE7RUFDRSxnQkFBQTtFQUNBLGNDdkJjO0VEd0JkLGVBQUE7QUFoREY7O0FBbURBO0VBQ0UsbUJBQUE7QUFoREY7O0FBa0RBO0VBQ0Usb0JBQUE7QUEvQ0Y7O0FBa0RBO0VBRUUsT0FBQTtFQUdBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWxERjtBQTBEQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHFDQUFBO0VBeERGO0FBQ0Y7QUEyREE7RUFDRTtJQUNFLGFBQUE7SUFDQSxxQ0FBQTtFQXpERjtBQUNGO0FBNkRBO0VBQ0UsYUFBQTtBQTNERjs7QUFnRUE7RUFDRTtJQUFJLHlCQUFBO0VBNURKO0FBQ0Y7QUE4REE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7QUE1REYiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOm1hcCc7XG5AaW1wb3J0IFwic3JjL3N0eWxpbmdzL2JzX3ZhcmlhYmxlc1wiO1xuXG46aG9zdCA6Om5nLWRlZXAge1xuICBhcHAtc2VsZWN0IHtcbiAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cbi5wcm9maWxlLWVkaXQtd3JhcHBlciB7XG4gIC5wcm9maWxlLXJvdyB7XG5cbiAgICA+IDpmaXJzdC1jaGlsZCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICA+IDpudGgtY2hpbGQoMikge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmRvYi13cmFwcGVyIHtcbiAgICAgIGFwcC1zZWxlY3Qge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IG1hcC5nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgICAuZG9iLXdyYXBwZXIge1xuICAgICAgICBhcHAtc2VsZWN0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODlweCkge1xuICAgICAgPiA6Zmlyc3QtY2hpbGQge1xuICAgICAgICB3aWR0aDogNDIlO1xuICAgICAgfVxuXG4gICAgICA+IDpudGgtY2hpbGQoMikge1xuICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgfVxuXG4gICAgICAuZG9iLXdyYXBwZXIge1xuICAgICAgICAuZG9iLWRheSB7XG4gICAgICAgICAgd2lkdGg6IDEzNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5kb2ItbW9udGgge1xuICAgICAgICAgIHdpZHRoOiAxMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuZG9iLXllYXIge1xuICAgICAgICAgIHdpZHRoOiAxMDNweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLmRvYi13cmFwcGVyIHtcbiAgLy93aWR0aDogMTAwJTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjg5cHgpIHtcbiAgICAvL3dpZHRoOiA1NSU7XG4gIH1cblxufVxuXG4ucHJvZmlsZS1jYXJkIHtcbiAgLmluZm8tc2VjdGlvbiB7XG4gICAgLnVzZXJuYW1lIHtcbiAgICAgIG1hcmdpbi10b3A6IDQ1cHg7XG4gICAgfVxuICAgIC5lbWFpbCB7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIH1cbiAgICAucmFuayB7XG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIH1cbiAgfVxufVxuXG4ucHJvZmlsZS1jYXJkLCAuYWNjb3VudC1jYXJkIHtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggMCByZ2JhKDI3LCA1NCwgMTAwLCAwLjI1KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggJHByaW1hcnktNDAwO1xufVxuXG4uYXZhdGFyLXNlY3Rpb24ge1xuICB3aWR0aDogMTcwcHg7XG4gIG1pbi13aWR0aDogMTMwcHg7XG5cbiAgPiBkaXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAucHJvZmlsZS1jYXJkIHtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgfVxuXG4gICAgLmluZm8tc2VjdGlvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogMzdweDtcblxuICAgICAgLnVzZXJuYW1lIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cbiAgICAgIC5lbWFpbCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICB9XG4gICAgICAucmFuayB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICBmb250LXNpemU6IDE4cHhcbn1cblxuLm10LTJcXC4yNXIge1xuICBtYXJnaW4tdG9wOiAyLjI1cmVtO1xufVxuLm10LTFcXC4xNjJyIHtcbiAgbWFyZ2luLXRvcDogMS4xNjJyZW07XG59XG5cbi5hY2NvdW50LWNhcmQge1xuXG4gIGZsZXg6IDE7XG5cbiAgLy93aWR0aDogMjUwcHg7XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gIC8vIG1hcC5nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdsZycpXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gICAgLy93aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAuY2FyZC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbWFwLmdldCgkZ3JpZC1icmVha3BvaW50cywgJ2xnJykpIHtcbiAgLmNhcmQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICB9XG59XG5cblxuLmNhcmQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIC8vZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbn1cblxuXG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xuICB0byB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9XG59XG5cbi5zcGlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDAwMDtcbiAgYW5pbWF0aW9uOiBzcGlubmVyIC44cyBsaW5lYXIgaW5maW5pdGU7XG59XG4iLCIvL0BpbXBvcnQgXCJ+bm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9uc1wiO1xuLy9AaW1wb3J0IFwifm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcblxuJGJsdWUtcGFsZXR0ZTogKFxuICA1MDogI2U0ZTdlYyxcbiAgMTAwOiAjZTllYmYwLFxuICAyMDA6ICNjNmNjZGIsXG4gIDMwMDogIzhkOWJiMixcbiAgNDAwOiAjNTQ2ODhiLFxuICA1MDA6ICMxYjM2NjQsXG4gIDYwMDogIzE4MzA1YyxcbiAgNzAwOiAjMTQyOTUyLFxuICA4MDA6ICMxMDIyNDgsXG4gIDkwMDogIzA4MTYzNixcbiAgQTEwMDogIzZmOTJmZixcbiAgQTIwMDogIzNjNmNmZixcbiAgQTQwMDogIzA5NDVmZixcbiAgQTcwMDogIzAwM2FlZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogIzAwMDAwMCxcbiAgICAxMDA6ICMwMDAwMDAsXG4gICAgMjAwOiAjMDAwMDAwLFxuICAgIDMwMDogI2ZmZmZmZixcbiAgICA0MDA6ICNmZmZmZmYsXG4gICAgNTAwOiAjZmZmZmZmLFxuICAgIDYwMDogI2ZmZmZmZixcbiAgICA3MDA6ICNmZmZmZmYsXG4gICAgODAwOiAjZmZmZmZmLFxuICAgIDkwMDogI2ZmZmZmZixcbiAgICBBMTAwOiAjMDAwMDAwLFxuICAgIEEyMDA6ICNmZmZmZmYsXG4gICAgQTQwMDogI2ZmZmZmZixcbiAgICBBNzAwOiAjZmZmZmZmLFxuICApLFxuKTtcblxuJG9yYW5nZS1wYWxldHRlOiAoXG4gIDUwOiAjZmRlZGU1LFxuICAxMDA6ICNmZWYwZWEsXG4gIDIwMDogI2ZiZDljOCxcbiAgMzAwOiAjZjhiMzkyLFxuICA0MDA6ICNmNDhkNWIsXG4gIDUwMDogI2YwNjcyNCxcbiAgNjAwOiAjZWU1ZjIwLFxuICA3MDA6ICNlYzU0MWIsXG4gIDgwMDogI2U5NGExNixcbiAgOTAwOiAjZTUzOTBkLFxuICBBMTAwOiAjZmZmZmZmLFxuICBBMjAwOiAjZmZlM2RkLFxuICBBNDAwOiAjZmZiOGFhLFxuICBBNzAwOiAjZmZhMzkwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAjZmZmZmZmLFxuICAgIDEwMDogI2ZmZmZmZixcbiAgICAyMDA6ICNmZmZmZmYsXG4gICAgMzAwOiAjZmZmZmZmLFxuICAgIDQwMDogI2ZmZmZmZixcbiAgICA1MDA6ICNmZmZmZmYsXG4gICAgNjAwOiAjZmZmZmZmLFxuICAgIDcwMDogI2ZmZmZmZixcbiAgICA4MDA6ICNmZmZmZmYsXG4gICAgOTAwOiAjZmZmZmZmLFxuICAgIEExMDA6ICNmZmZmZmYsXG4gICAgQTIwMDogI2ZmZmZmZixcbiAgICBBNDAwOiAjZmZmZmZmLFxuICAgIEE3MDA6ICNmZmZmZmYsXG4gICksXG4pO1xuXG4kcmVkLXBhbGV0dGU6IChcbiAgNTA6ICNmZmViZWUsXG4gIDEwMDogI2ZmY2RkMixcbiAgMjAwOiAjZWY5YTlhLFxuICAzMDA6ICNlNTczNzMsXG4gIDQwMDogI2VmNTM1MCxcbiAgNTAwOiAjZmYwMDAwLFxuICA2MDA6ICNlNTM5MzUsXG4gIDcwMDogI2QzMmYyZixcbiAgODAwOiAjYzYyODI4LFxuICA5MDA6ICNiNzFjMWMsXG4gIEExMDA6ICNmZjhhODAsXG4gIEEyMDA6ICNmZjUyNTIsXG4gIEE0MDA6ICNmZjE3NDQsXG4gIEE3MDA6ICNkNTAwMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDEwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgMjAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICAzMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDQwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgNTAwOiB3aGl0ZSxcbiAgICA2MDA6IHdoaXRlLFxuICAgIDcwMDogd2hpdGUsXG4gICAgODAwOiB3aGl0ZSxcbiAgICA5MDA6IHdoaXRlLFxuICAgIEExMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIEEyMDA6IHdoaXRlLFxuICAgIEE0MDA6IHdoaXRlLFxuICAgIEE3MDA6IHdoaXRlLFxuICApXG4pO1xuXG4kcHJpbWFyeS1wYWxldHRlOiAkYmx1ZS1wYWxldHRlO1xuJGFjY2VudC1wYWxldHRlOiAkb3JhbmdlLXBhbGV0dGU7XG4kc2Vjb25kYXJ5LXBhbGV0dGU6ICRvcmFuZ2UtcGFsZXR0ZTtcblxuJHByaW1hcnktY29sb3I6IG1hcC1nZXQoJHByaW1hcnktcGFsZXR0ZSwgNTAwKTtcbiRzZWNvbmRhcnktY29sb3I6IG1hcC1nZXQoJHNlY29uZGFyeS1wYWxldHRlLCA1MDApO1xuJHNlY29uZGFyeS0zMDA6IG1hcC1nZXQoJHNlY29uZGFyeS1wYWxldHRlLCAzMDApO1xuJHByaW1hcnktNDAwOiBtYXAtZ2V0KCRwcmltYXJ5LXBhbGV0dGUsIDQwMCk7XG4kZXJyb3ItY29sb3I6IG1hcC1nZXQoJHJlZC1wYWxldHRlLCA1MDApO1xuXG4kbWF4LXdpZHRoOiAxMzY2cHg7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6420:
/*!********************************************************************!*\
  !*** ./src/app/account/pages/payment-methods/add/add.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPaymentComponent": () => (/* binding */ AddPaymentComponent)
/* harmony export */ });
/* harmony import */ var _core_common_form2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/form2 */ 4842);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/input/input.component */ 2371);
/* harmony import */ var _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/select/select.component */ 9092);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _core_models_paymentMethod_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/models/paymentMethod.model */ 6867);










class AddPaymentComponent extends _core_common_form2__WEBPACK_IMPORTED_MODULE_0__.Form {
  constructor(dialogRef, fb, method) {
    super();
    this.dialogRef = dialogRef;
    this.method = method;
    this.months = Array.from({
      length: 12
    }, (x, i) => ({
      label: i + 1,
      value: i + 1
    }));
    this.currYear = parseInt(new Date().getFullYear().toString().slice(2));
    this.years = Array.from({
      length: 5
    }, (x, i) => ({
      label: this.currYear + i,
      value: this.currYear + i
    }));
    this._initFormControl(fb, {});
    Object.keys(method).forEach(k => this.setFCBYName(k, null, method[k]));
  }
  cancel() {
    this.dialogRef.close(null);
  }
  save() {
    Object.keys(this.method).forEach(k => {
      const val = this.form.controls[k].value;
      this.method[k] = val;
    });
    this.dialogRef.close(this.method);
  }
}
AddPaymentComponent.ɵfac = function AddPaymentComponent_Factory(t) {
  return new (t || AddPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_5__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_LEGACY_DIALOG_DATA));
};
AddPaymentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AddPaymentComponent,
  selectors: [["app-add"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 21,
  vars: 7,
  consts: [[1, "d-flex", "justify-content-between", "align-items-center", "p-3"], [1, "d-flex", "align-items-center"], [1, "title-icon", "me-1", "d-sm-none", "cur-pointer", 3, "click"], ["mat-dialog-title", "", 1, "mb-0", "card-title"], [1, "title-icon", "d-none", "d-sm-inline", "cur-pointer", 3, "click"], ["mat-dialog-content", "", 1, "px-3", "mt-3", "col-rep-1", "d-grid"], ["label", "Name on the card", 3, "control"], ["label", "Card number", 3, "control"], [1, "d-flex", "justify-content-between", "flex-wrap", "flex-sm-row"], ["label", "Month", 1, "card-month", 3, "control", "options"], ["label", "Year", 1, "card-year", 3, "control", "options"], ["label", "CVV", 1, "card-cvv", 3, "control"], ["mat-dialog-actions", "", 1, "d-flex", "justify-content-center", "gap-sm-6", "gap-4", "mt-3", "shadow-actions"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-primary", 3, "click"]],
  template: function AddPaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddPaymentComponent_Template_mat_icon_click_2_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Add new card");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddPaymentComponent_Template_mat_icon_click_6_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-input", 6)(11, "app-input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "app-select", 9)(14, "app-select", 10)(15, "app-input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12)(17, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddPaymentComponent_Template_button_click_17_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddPaymentComponent_Template_button_click_19_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.form.controls["name"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.form.controls["cardNumber"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.form.controls["month"])("options", ctx.months);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.form.controls["year"])("options", ctx.years);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx.form.controls["cvv"]);
    }
  },
  dependencies: [_shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_1__.InputComponent, _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_2__.SelectComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_5__.MatLegacyDialogTitle, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_5__.MatLegacyDialogContent, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_5__.MatLegacyDialogActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider],
  styles: ["[_nghost-%COMP%]     app-select .mat-form-field {\n  width: 100%;\n}\n\n.card-month[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.card-year[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.card-cvv[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n@media screen and (max-width: 463px) {\n  .card-month[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .card-year[_ngcontent-%COMP%] {\n    width: 48%;\n  }\n  .card-cvv[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9wYWdlcy9wYXltZW50LW1ldGhvZHMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNFLFdBQUE7QUFKTjs7QUFVQTtFQUNFLFlBQUE7QUFQRjs7QUFVQTtFQUNFLFlBQUE7QUFQRjs7QUFVQTtFQUNFLFdBQUE7QUFQRjs7QUFVQTtFQUVFO0lBQ0UsVUFBQTtFQVJGO0VBV0E7SUFDRSxVQUFBO0VBVEY7RUFZQTtJQUNFLFdBQUE7RUFWRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2FzczptYXAnO1xuQGltcG9ydCBcInNyYy9zdHlsaW5ncy9ic192YXJpYWJsZXNcIjtcblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgYXBwLXNlbGVjdCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG59XG5cbi5jYXJkLW1vbnRoIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uY2FyZC15ZWFyIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uY2FyZC1jdnYge1xuICB3aWR0aDogODBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYzcHgpIHtcblxuICAuY2FyZC1tb250aCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC5jYXJkLXllYXIge1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cblxuICAuY2FyZC1jdnYge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9819:
/*!****************************************************************************!*\
  !*** ./src/app/account/pages/payment-methods/payment-methods.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentMethodsComponent": () => (/* binding */ PaymentMethodsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/auto-destroy */ 7990);
/* harmony import */ var _core_models_paymentMethod_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/models/paymentMethod.model */ 6867);
/* harmony import */ var src_app_shared_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/confirm/confirm.component */ 8392);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ 6420);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_skeleton_loaders_skeleton_loader_grid_skeleton_loader_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/skeleton-loaders/skeleton-loader-grid/skeleton-loader-grid.component */ 4546);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/account-layout/account-layout.component */ 6769);















function PaymentMethodsComponent_div_2_mat_card_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
  }
}
const _c0 = function (a0, a1) {
  return {
    $implicit: a0,
    i: a1
  };
};
function PaymentMethodsComponent_div_2_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentMethodsComponent_div_2_mat_card_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const method_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](2, _c0, method_r7, i_r8));
  }
}
function PaymentMethodsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, PaymentMethodsComponent_div_2_mat_card_1_Template, 2, 5, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.methods);
  }
}
function PaymentMethodsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No payment method added ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function PaymentMethodsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-skeleton-loader-grid");
  }
}
function PaymentMethodsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentMethodsComponent_ng_template_9_Template_mat_icon_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const i_r11 = restoredCtx.i;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.markAsFeatured(i_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 11)(11, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentMethodsComponent_ng_template_9_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const i_r11 = restoredCtx.i;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.delete(i_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const method_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("**** **** **** ", method_r10.lastFour, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("featured", method_r10.featured);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", method_r10.month, "/", method_r10.year, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("CVV ", method_r10.cvv, "");
  }
}
class PaymentMethodsComponent extends _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__.AutoDestroy {
  constructor(api, dialog, router, route) {
    super();
    this.api = api;
    this.dialog = dialog;
    this.router = router;
    this.route = route;
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd)).subscribe(() => {
      const mode = this.route.snapshot.params['id'];
      if (mode === 'add') {
        this.showAddDialog();
      }
    });
  }
  ngOnInit() {
    this.api.get('user/payment-methods').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(({
      data
    }) => {
      this.methods = data;
    });
  }
  showAddDialog() {
    const method = _core_models_paymentMethod_model__WEBPACK_IMPORTED_MODULE_1__.PaymentMethod.adapt({});
    const dialogRef = this.dialog.open(_add_add_component__WEBPACK_IMPORTED_MODULE_3__.AddPaymentComponent, {
      width: '380px',
      data: method
    });
    dialogRef.afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(method => {
      this.handleAddAddr(method);
    });
  }
  handleAddAddr(method) {
    if (!method) {
      this.router.navigate(['/account/payment-methods/']);
      return;
    }
    this.api.post('user/payment-methods/save', {
      method
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(({
      data
    }) => {
      this.methods.push(data);
      this.router.navigate(['/account/payment-methods/']);
    });
  }
  markAsFeatured(index) {
    const address = this.methods[index];
    this.api.post(`user/payment-methods/mark-featured/${address.id}`, {}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => {
      address.featured = true;
      const oldFeatured = this.methods.find(x => x.featured);
      if (oldFeatured) {
        oldFeatured.featured = false;
      }
    });
  }
  delete(index) {
    const dialogRef = this.dialog.open(src_app_shared_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmComponent, {
      width: '350px',
      data: {
        label: 'payment method'
      }
    });
    dialogRef.beforeClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(canDelete => {
      this.handleDeleteAddr(canDelete, index);
    });
  }
  handleDeleteAddr(canDelete, index) {
    if (!canDelete) {
      return;
    }
    const address = this.methods[index];
    this.api.delete(`user/payment-methods/delete/${address.id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => {
      this.methods.splice(index, 1);
    });
  }
}
PaymentMethodsComponent.ɵfac = function PaymentMethodsComponent_Factory(t) {
  return new (t || PaymentMethodsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_11__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
};
PaymentMethodsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: PaymentMethodsComponent,
  selectors: [["app-payment-methods"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 11,
  vars: 3,
  consts: [["content", ""], ["class", "d-grid gap-3 col-rep-1 col-rep-md-2 col-rep-lg-3", 4, "ngIf", "ngIfElse"], ["class", "d-flex justify-content-center mt-5", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-6", "mb-5"], ["routerLink", "/account/payment-methods/add", 1, "btn", "btn-primary"], ["loading", ""], ["methodRef", ""], [1, "d-grid", "gap-3", "col-rep-1", "col-rep-md-2", "col-rep-lg-3"], ["class", "address-card col-md-4 d-flex flex-column w-100", 4, "ngFor", "ngForOf"], [1, "address-card", "col-md-4", "d-flex", "flex-column", "w-100"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "d-flex", "justify-content-center", "mt-5"], [1, "d-flex", "flex-column"], [1, "d-flex", "justify-content-between"], [1, "feature-icon", "cur-pointer", 3, "click"], [1, "mt-2"], [1, "btn", "btn-primary", 2, "width", "90px", 3, "click"]],
  template: function PaymentMethodsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-account-layout")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, PaymentMethodsComponent_div_2_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, PaymentMethodsComponent_div_3_Template, 2, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Add new card");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, PaymentMethodsComponent_ng_template_7_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, PaymentMethodsComponent_ng_template_9_Template, 13, 6, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.methods !== undefined)("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.methods && !ctx.methods.length);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _shared_components_skeleton_loaders_skeleton_loader_grid_skeleton_loader_grid_component__WEBPACK_IMPORTED_MODULE_5__.SkeletonLoaderGridComponent, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_13__.MatLegacyCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_6__.AccountLayoutComponent],
  styles: [".address-card[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 15px 0 rgba(27, 54, 100, 0.25);\n  border: solid 1px #54688b;\n}\n\n.feature-icon[_ngcontent-%COMP%] {\n  color: #eaeaea;\n}\n.feature-icon.featured[_ngcontent-%COMP%] {\n  color: #f06724;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9wYWdlcy9wYXltZW50LW1ldGhvZHMvcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxpbmdzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGlEQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjtBQUlFO0VBQ0UsY0MrRmM7QURqR2xCIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2FzczptYXAnO1xuQGltcG9ydCBcInNyYy9zdHlsaW5ncy9ic192YXJpYWJsZXNcIjtcblxuLmFkZHJlc3MtY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IDAgcmdiYSgyNywgNTQsIDEwMCwgMC4yNSk7XG4gIGJvcmRlcjogc29saWQgMXB4ICRwcmltYXJ5LTQwMDtcbn1cblxuLmZlYXR1cmUtaWNvbiB7XG4gIGNvbG9yOiAjZWFlYWVhO1xuXG4gICYuZmVhdHVyZWQge1xuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICB9XG59XG4iLCIvL0BpbXBvcnQgXCJ+bm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9uc1wiO1xuLy9AaW1wb3J0IFwifm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcblxuJGJsdWUtcGFsZXR0ZTogKFxuICA1MDogI2U0ZTdlYyxcbiAgMTAwOiAjZTllYmYwLFxuICAyMDA6ICNjNmNjZGIsXG4gIDMwMDogIzhkOWJiMixcbiAgNDAwOiAjNTQ2ODhiLFxuICA1MDA6ICMxYjM2NjQsXG4gIDYwMDogIzE4MzA1YyxcbiAgNzAwOiAjMTQyOTUyLFxuICA4MDA6ICMxMDIyNDgsXG4gIDkwMDogIzA4MTYzNixcbiAgQTEwMDogIzZmOTJmZixcbiAgQTIwMDogIzNjNmNmZixcbiAgQTQwMDogIzA5NDVmZixcbiAgQTcwMDogIzAwM2FlZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogIzAwMDAwMCxcbiAgICAxMDA6ICMwMDAwMDAsXG4gICAgMjAwOiAjMDAwMDAwLFxuICAgIDMwMDogI2ZmZmZmZixcbiAgICA0MDA6ICNmZmZmZmYsXG4gICAgNTAwOiAjZmZmZmZmLFxuICAgIDYwMDogI2ZmZmZmZixcbiAgICA3MDA6ICNmZmZmZmYsXG4gICAgODAwOiAjZmZmZmZmLFxuICAgIDkwMDogI2ZmZmZmZixcbiAgICBBMTAwOiAjMDAwMDAwLFxuICAgIEEyMDA6ICNmZmZmZmYsXG4gICAgQTQwMDogI2ZmZmZmZixcbiAgICBBNzAwOiAjZmZmZmZmLFxuICApLFxuKTtcblxuJG9yYW5nZS1wYWxldHRlOiAoXG4gIDUwOiAjZmRlZGU1LFxuICAxMDA6ICNmZWYwZWEsXG4gIDIwMDogI2ZiZDljOCxcbiAgMzAwOiAjZjhiMzkyLFxuICA0MDA6ICNmNDhkNWIsXG4gIDUwMDogI2YwNjcyNCxcbiAgNjAwOiAjZWU1ZjIwLFxuICA3MDA6ICNlYzU0MWIsXG4gIDgwMDogI2U5NGExNixcbiAgOTAwOiAjZTUzOTBkLFxuICBBMTAwOiAjZmZmZmZmLFxuICBBMjAwOiAjZmZlM2RkLFxuICBBNDAwOiAjZmZiOGFhLFxuICBBNzAwOiAjZmZhMzkwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAjZmZmZmZmLFxuICAgIDEwMDogI2ZmZmZmZixcbiAgICAyMDA6ICNmZmZmZmYsXG4gICAgMzAwOiAjZmZmZmZmLFxuICAgIDQwMDogI2ZmZmZmZixcbiAgICA1MDA6ICNmZmZmZmYsXG4gICAgNjAwOiAjZmZmZmZmLFxuICAgIDcwMDogI2ZmZmZmZixcbiAgICA4MDA6ICNmZmZmZmYsXG4gICAgOTAwOiAjZmZmZmZmLFxuICAgIEExMDA6ICNmZmZmZmYsXG4gICAgQTIwMDogI2ZmZmZmZixcbiAgICBBNDAwOiAjZmZmZmZmLFxuICAgIEE3MDA6ICNmZmZmZmYsXG4gICksXG4pO1xuXG4kcmVkLXBhbGV0dGU6IChcbiAgNTA6ICNmZmViZWUsXG4gIDEwMDogI2ZmY2RkMixcbiAgMjAwOiAjZWY5YTlhLFxuICAzMDA6ICNlNTczNzMsXG4gIDQwMDogI2VmNTM1MCxcbiAgNTAwOiAjZmYwMDAwLFxuICA2MDA6ICNlNTM5MzUsXG4gIDcwMDogI2QzMmYyZixcbiAgODAwOiAjYzYyODI4LFxuICA5MDA6ICNiNzFjMWMsXG4gIEExMDA6ICNmZjhhODAsXG4gIEEyMDA6ICNmZjUyNTIsXG4gIEE0MDA6ICNmZjE3NDQsXG4gIEE3MDA6ICNkNTAwMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDEwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgMjAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICAzMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDQwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgNTAwOiB3aGl0ZSxcbiAgICA2MDA6IHdoaXRlLFxuICAgIDcwMDogd2hpdGUsXG4gICAgODAwOiB3aGl0ZSxcbiAgICA5MDA6IHdoaXRlLFxuICAgIEExMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIEEyMDA6IHdoaXRlLFxuICAgIEE0MDA6IHdoaXRlLFxuICAgIEE3MDA6IHdoaXRlLFxuICApXG4pO1xuXG4kcHJpbWFyeS1wYWxldHRlOiAkYmx1ZS1wYWxldHRlO1xuJGFjY2VudC1wYWxldHRlOiAkb3JhbmdlLXBhbGV0dGU7XG4kc2Vjb25kYXJ5LXBhbGV0dGU6ICRvcmFuZ2UtcGFsZXR0ZTtcblxuJHByaW1hcnktY29sb3I6IG1hcC1nZXQoJHByaW1hcnktcGFsZXR0ZSwgNTAwKTtcbiRzZWNvbmRhcnktY29sb3I6IG1hcC1nZXQoJHNlY29uZGFyeS1wYWxldHRlLCA1MDApO1xuJHNlY29uZGFyeS0zMDA6IG1hcC1nZXQoJHNlY29uZGFyeS1wYWxldHRlLCAzMDApO1xuJHByaW1hcnktNDAwOiBtYXAtZ2V0KCRwcmltYXJ5LXBhbGV0dGUsIDQwMCk7XG4kZXJyb3ItY29sb3I6IG1hcC1nZXQoJHJlZC1wYWxldHRlLCA1MDApO1xuXG4kbWF4LXdpZHRoOiAxMzY2cHg7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8988:
/*!********************************************************************!*\
  !*** ./src/app/account/pages/security/index/security.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityComponent": () => (/* binding */ SecurityComponent)
/* harmony export */ });
/* harmony import */ var _core_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/types */ 7805);
/* harmony import */ var _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/enums/microservice-type.enum */ 7502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_dios_dios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/dios/dios.component */ 5367);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _logins_logins_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logins/logins.component */ 6593);
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../questions/questions.component */ 4469);
/* harmony import */ var _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/account-layout/account-layout.component */ 6769);












const _c0 = ["input"];
class SecurityComponent {
  constructor(api, dialog, router) {
    this.api = api;
    this.dialog = dialog;
    this.router = router;
    this.authLogin = true;
    this.pwLogin = false;
    this.loading = true;
  }
  ngOnInit() {
    this.api.get('user-info/auth-mode', _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__.MicroserviceType.usr, {
      responseType: 'text'
    }).subscribe(loginType => {
      this.authLogin = loginType === _core_types__WEBPACK_IMPORTED_MODULE_0__.LoginType.Code;
      this.pwLogin = loginType === _core_types__WEBPACK_IMPORTED_MODULE_0__.LoginType.Password;
      this.loading = false;
    });
  }
  activeAuthLogin() {
    if (this.authLogin) {
      return;
    }
    this.api.post('user/login-type/set-code', {}).subscribe(() => {
      this.authLogin = true;
      this.pwLogin = false;
    });
  }
  activePwLogin() {
    if (this.pwLogin) {
      return;
    }
    this.input.nativeElement.checked = false;
    this.router.navigate(['account/security/set-password']);
  }
  start($event) {
    if ($event.changed) {
      this.pwLogin = $event.changed;
      this.input.nativeElement.checked = $event.changed;
      this.authLogin = false;
    } else {}
  }
}
SecurityComponent.ɵfac = function SecurityComponent_Factory(t) {
  return new (t || SecurityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_8__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};
SecurityComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SecurityComponent,
  selectors: [["app-security"]],
  viewQuery: function SecurityComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    }
  },
  decls: 34,
  vars: 8,
  consts: [["content", ""], [1, "d-flex", "justify-content-between", "row", "mx-0"], [1, "col-12", "col-sm-6"], [1, "d-flex", "flex-column"], [1, "d-flex", "justify-content-between"], ["type", "checkbox", 1, "form-check-input", 3, "disabled", "checked", "change"], [1, "hint"], [1, "d-flex"], [1, "btn", "btn-primary", "mt-3", "py-1", 3, "disabled"], [1, "col-12", "col-sm-6", "mt-3", "mt-sm-0"], ["input", ""], [1, "btn", "btn-primary", "mt-3", "py-1", "status-btn", 3, "disabled"], [1, "mt-5", "px-2"], [1, "mt-3", "p-4", "pb-0"], [1, "ps-3", "mt-5"], [1, "p-4"], [3, "deactivate"]],
  template: function SecurityComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-account-layout")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "mat-card", 3)(5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-auth-dios");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SecurityComponent_Template_input_change_7_listener() {
        return ctx.activeAuthLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Auth");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 7)(11, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 9)(14, "mat-card", 3)(15, "div", 4)(16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "input", 5, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SecurityComponent_Template_input_change_18_listener() {
        return ctx.activePwLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Protection");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 7)(23, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "app-security-questions");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "app-logins");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "router-outlet", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("deactivate", function SecurityComponent_Template_router_outlet_deactivate_33_listener($event) {
        return ctx.start($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.authLogin)("checked", ctx.authLogin);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.authLogin);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.authLogin ? "In use" : "In active", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.pwLogin)("checked", ctx.pwLogin);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.pwLogin);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.pwLogin ? "In use" : "In active", " ");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _shared_components_dios_dios_component__WEBPACK_IMPORTED_MODULE_3__.DiosComponent, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_10__.MatLegacyCard, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _logins_logins_component__WEBPACK_IMPORTED_MODULE_4__.LoginsComponent, _questions_questions_component__WEBPACK_IMPORTED_MODULE_5__.QuestionsComponent, _components_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_6__.AccountLayoutComponent],
  styles: ["[_nghost-%COMP%]     .mat-card {\n  border: solid 1px #54688b;\n  padding: 20px 26px 20px 28px;\n  box-shadow: 0 10px 15px 0 rgba(27, 54, 100, 0.25);\n}\n\n.hint[_ngcontent-%COMP%] {\n  color: #e2e2e2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9wYWdlcy9zZWN1cml0eS9pbmRleC9zZWN1cml0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpREFBQTtBQUZKOztBQU1BO0VBQ0UsY0FBQTtBQUhGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zdHlsaW5ncy9ic192YXJpYWJsZXNcIjtcblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgLm1hdC1jYXJkIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkcHJpbWFyeS00MDA7XG4gICAgcGFkZGluZzogMjBweCAyNnB4IDIwcHggMjhweDtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAwIHJnYmEoMjcsIDU0LCAxMDAsIDAuMjUpXG4gIH1cbn1cblxuLmhpbnQge1xuICBjb2xvcjogI2UyZTJlMlxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6593:
/*!*******************************************************************!*\
  !*** ./src/app/account/pages/security/logins/logins.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginsComponent": () => (/* binding */ LoginsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 1528);





function LoginsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-divider", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const login_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](login_r2.domain);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](login_r2.createdAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](login_r2.userAgent);
  }
}
function LoginsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginsComponent_div_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.loadLogins());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" View ", ctx_r1.moreLogins > 10 ? 10 : ctx_r1.moreLogins, " more");
  }
}
class LoginsComponent {
  constructor(api) {
    this.api = api;
    this.recentLogins = [];
    this.loadLogins$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.page = 0;
  }
  ngOnInit() {
    this.logins$ = this.loadLogins$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(page => {
      return this.api.get(`user/recent-logins?page=${page}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(({
        data: {
          logins,
          more
        }
      }) => {
        this.recentLogins.push(...logins);
        this.moreLogins = more;
        return this.recentLogins;
      }));
    }));
    setTimeout(() => this.loadLogins());
  }
  loadLogins() {
    this.loadLogins$.next(++this.page);
  }
}
LoginsComponent.ɵfac = function LoginsComponent_Factory(t) {
  return new (t || LoginsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
LoginsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginsComponent,
  selectors: [["app-logins"]],
  decls: 5,
  vars: 4,
  consts: [[1, "card-title"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-center", 4, "ngIf"], [1, "mb-3", 2, "max-width", "745px"], [1, "d-flex", "justify-content-center"], [1, "btn", "btn-outline-primary", 3, "click"]],
  template: function LoginsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Recent logins");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginsComponent_div_2_Template, 8, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LoginsComponent_div_4_Template, 3, 1, "div", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.logins$));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.moreLogins > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4469:
/*!*************************************************************************!*\
  !*** ./src/app/account/pages/security/questions/questions.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsComponent": () => (/* binding */ QuestionsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var _core_common_form2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/form2 */ 4842);
/* harmony import */ var _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/enums/microservice-type.enum */ 7502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/input/input.component */ 2371);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-select */ 6002);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-core */ 7090);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ 7591);













function QuestionsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "mat-form-field", 10)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "arrow_forward_ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-select", 12)(7, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const question_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("pe-md-3", !(i_r2 % 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Question#", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", question_r1.questionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", question_r1.questionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", question_r1.questionText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("label", "Answer #", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r0.getFC(question_r1.questionId));
  }
}
class QuestionsComponent extends _core_common_form2__WEBPACK_IMPORTED_MODULE_0__.Form {
  constructor(fb, api) {
    super();
    this.api = api;
    this.panelOpenState = true;
    this.answeredCount = 0;
    this.questionsCompleted = true;
    this._initFormControl(fb, {});
  }
  ngOnInit() {
    this.questions$ = this.api.get('security-questions/answers', _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__.MicroserviceType.au).pipe(
    // map(({ data }) => data),
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(questions => {
      questions.forEach(question => {
        this.setFCBYName(question.questionId, null, question.answer, ['required']);
        this.questionsCompleted = this.questionsCompleted && !!question.answer;
        this.answeredCount += question.answer ? 1 : 0;
      });
    }));
  }
  saveAnswers() {
    debugger;
    const answers = [];
    this.questionsCompleted = false;
    this.answeredCount = 0;
    for (let [key, value] of Object.entries(this.form.controls)) {
      this.answeredCount += value.value ? 1 : 0;
      answers.push({
        'questionId': key,
        'answer': value.value
      });
    }
    this.questionsCompleted = this.answeredCount === answers.length;
    this.api.put('security-questions/answers', {
      answers
    }, _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__.MicroserviceType.au).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe();
  }
}
QuestionsComponent.ɵfac = function QuestionsComponent_Factory(t) {
  return new (t || QuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService));
};
QuestionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: QuestionsComponent,
  selectors: [["app-security-questions"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 16,
  vars: 6,
  consts: [[1, "mb-3", "card-title"], [1, "shadow-none", 3, "opened", "closed"], [1, "mb-4", 2, "height", "50px", 3, "ngClass"], [1, "d-flex", "justify-content-center"], [1, "ms-1"], [1, "d-flex", "flex-wrap"], ["class", "col-12 col-md-6 mb-2r", 3, "pe-md-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "mt-3"], [1, "btn", "btn-primary", "px-4", 3, "click"], [1, "col-12", "col-md-6", "mb-2r"], ["appearance", "fill", 1, "w-100", "mb-2r"], ["matSuffix", "", 2, "rotate", "90deg"], ["disabled", "", 3, "value"], [3, "value"], [1, "w-100", 3, "label", "control"]],
  template: function QuestionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Security questions");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div")(3, "mat-expansion-panel", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("opened", function QuestionsComponent_Template_mat_expansion_panel_opened_3_listener() {
        return ctx.panelOpenState = true;
      })("closed", function QuestionsComponent_Template_mat_expansion_panel_closed_3_listener() {
        return ctx.panelOpenState = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-expansion-panel-header", 2)(5, "mat-panel-title", 3)(6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, QuestionsComponent_div_11_Template, 10, 8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 7)(14, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuestionsComponent_Template_button_click_14_listener() {
        return ctx.saveAnswers();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.questionsCompleted ? "success" : "warning");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Security questions (", ctx.answeredCount, " of 3) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.questionsCompleted ? "check_circle" : "info");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 4, ctx.questions$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLegacyLabel, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLegacySuffix, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_11__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_12__.MatLegacyOption, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionPanelTitle, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: ["[_nghost-%COMP%]     .mat-select-arrow {\n  opacity: 0;\n}\n[_nghost-%COMP%]     .mat-form-field.mat-focused .mat-form-field-underline {\n  display: none;\n}\n[_nghost-%COMP%]     .mat-expansion-panel-body {\n  padding: 0;\n}\n[_nghost-%COMP%]     .mat-expansion-panel-header.success {\n  background-color: #42c657 !important;\n}\n[_nghost-%COMP%]     .mat-expansion-panel-header.success .mat-expansion-panel-header-title {\n  color: #1b3664;\n}\n[_nghost-%COMP%]     .mat-expansion-panel-header.warning {\n  background-color: #f8b392 !important;\n}\n[_nghost-%COMP%]     .mat-expansion-panel-header.warning .mat-expansion-panel-header-title {\n  color: #f06724;\n}\n[_nghost-%COMP%]     .mat-form-field-label {\n  color: #1b3664;\n}\n[_nghost-%COMP%]     .mat-select-value {\n  color: rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9wYWdlcy9zZWN1cml0eS9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxpbmdzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUFvQixVQUFBO0FBRHRCO0FBR0U7RUFDRSxhQUFBO0FBREo7QUFJRTtFQUNFLFVBQUE7QUFGSjtBQU1JO0VBQ0Usb0NBQUE7QUFKTjtBQU1NO0VBQ0UsY0N3RlE7QUQ1RmhCO0FBT0k7RUFDRSxvQ0FBQTtBQUxOO0FBT007RUFDRSxjQ2tGVTtBRHZGbEI7QUFZRTtFQUNFLGNDeUVZO0FEbkZoQjtBQWFFO0VBQ0UseUJBQUE7QUFYSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGluZ3MvdmFyaWFibGVzXCI7XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gIC5tYXQtc2VsZWN0LWFycm93IHsgb3BhY2l0eTogMDsgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgJi5zdWNjZXNzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MmM2NTcgIWltcG9ydGFudDtcblxuICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgICAmLndhcm5pbmcge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS0zMDAgIWltcG9ydGFudDtcblxuICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIH1cbn1cblxuIiwiLy9AaW1wb3J0IFwifm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcbi8vQGltcG9ydCBcIn5ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XG5cbiRibHVlLXBhbGV0dGU6IChcbiAgNTA6ICNlNGU3ZWMsXG4gIDEwMDogI2U5ZWJmMCxcbiAgMjAwOiAjYzZjY2RiLFxuICAzMDA6ICM4ZDliYjIsXG4gIDQwMDogIzU0Njg4YixcbiAgNTAwOiAjMWIzNjY0LFxuICA2MDA6ICMxODMwNWMsXG4gIDcwMDogIzE0Mjk1MixcbiAgODAwOiAjMTAyMjQ4LFxuICA5MDA6ICMwODE2MzYsXG4gIEExMDA6ICM2ZjkyZmYsXG4gIEEyMDA6ICMzYzZjZmYsXG4gIEE0MDA6ICMwOTQ1ZmYsXG4gIEE3MDA6ICMwMDNhZWYsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICMwMDAwMDAsXG4gICAgMTAwOiAjMDAwMDAwLFxuICAgIDIwMDogIzAwMDAwMCxcbiAgICAzMDA6ICNmZmZmZmYsXG4gICAgNDAwOiAjZmZmZmZmLFxuICAgIDUwMDogI2ZmZmZmZixcbiAgICA2MDA6ICNmZmZmZmYsXG4gICAgNzAwOiAjZmZmZmZmLFxuICAgIDgwMDogI2ZmZmZmZixcbiAgICA5MDA6ICNmZmZmZmYsXG4gICAgQTEwMDogIzAwMDAwMCxcbiAgICBBMjAwOiAjZmZmZmZmLFxuICAgIEE0MDA6ICNmZmZmZmYsXG4gICAgQTcwMDogI2ZmZmZmZixcbiAgKSxcbik7XG5cbiRvcmFuZ2UtcGFsZXR0ZTogKFxuICA1MDogI2ZkZWRlNSxcbiAgMTAwOiAjZmVmMGVhLFxuICAyMDA6ICNmYmQ5YzgsXG4gIDMwMDogI2Y4YjM5MixcbiAgNDAwOiAjZjQ4ZDViLFxuICA1MDA6ICNmMDY3MjQsXG4gIDYwMDogI2VlNWYyMCxcbiAgNzAwOiAjZWM1NDFiLFxuICA4MDA6ICNlOTRhMTYsXG4gIDkwMDogI2U1MzkwZCxcbiAgQTEwMDogI2ZmZmZmZixcbiAgQTIwMDogI2ZmZTNkZCxcbiAgQTQwMDogI2ZmYjhhYSxcbiAgQTcwMDogI2ZmYTM5MCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogI2ZmZmZmZixcbiAgICAxMDA6ICNmZmZmZmYsXG4gICAgMjAwOiAjZmZmZmZmLFxuICAgIDMwMDogI2ZmZmZmZixcbiAgICA0MDA6ICNmZmZmZmYsXG4gICAgNTAwOiAjZmZmZmZmLFxuICAgIDYwMDogI2ZmZmZmZixcbiAgICA3MDA6ICNmZmZmZmYsXG4gICAgODAwOiAjZmZmZmZmLFxuICAgIDkwMDogI2ZmZmZmZixcbiAgICBBMTAwOiAjZmZmZmZmLFxuICAgIEEyMDA6ICNmZmZmZmYsXG4gICAgQTQwMDogI2ZmZmZmZixcbiAgICBBNzAwOiAjZmZmZmZmLFxuICApLFxuKTtcblxuJHJlZC1wYWxldHRlOiAoXG4gIDUwOiAjZmZlYmVlLFxuICAxMDA6ICNmZmNkZDIsXG4gIDIwMDogI2VmOWE5YSxcbiAgMzAwOiAjZTU3MzczLFxuICA0MDA6ICNlZjUzNTAsXG4gIDUwMDogI2ZmMDAwMCxcbiAgNjAwOiAjZTUzOTM1LFxuICA3MDA6ICNkMzJmMmYsXG4gIDgwMDogI2M2MjgyOCxcbiAgOTAwOiAjYjcxYzFjLFxuICBBMTAwOiAjZmY4YTgwLFxuICBBMjAwOiAjZmY1MjUyLFxuICBBNDAwOiAjZmYxNzQ0LFxuICBBNzAwOiAjZDUwMDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICAxMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDIwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgMzAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICA0MDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDUwMDogd2hpdGUsXG4gICAgNjAwOiB3aGl0ZSxcbiAgICA3MDA6IHdoaXRlLFxuICAgIDgwMDogd2hpdGUsXG4gICAgOTAwOiB3aGl0ZSxcbiAgICBBMTAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICBBMjAwOiB3aGl0ZSxcbiAgICBBNDAwOiB3aGl0ZSxcbiAgICBBNzAwOiB3aGl0ZSxcbiAgKVxuKTtcblxuJHByaW1hcnktcGFsZXR0ZTogJGJsdWUtcGFsZXR0ZTtcbiRhY2NlbnQtcGFsZXR0ZTogJG9yYW5nZS1wYWxldHRlO1xuJHNlY29uZGFyeS1wYWxldHRlOiAkb3JhbmdlLXBhbGV0dGU7XG5cbiRwcmltYXJ5LWNvbG9yOiBtYXAtZ2V0KCRwcmltYXJ5LXBhbGV0dGUsIDUwMCk7XG4kc2Vjb25kYXJ5LWNvbG9yOiBtYXAtZ2V0KCRzZWNvbmRhcnktcGFsZXR0ZSwgNTAwKTtcbiRzZWNvbmRhcnktMzAwOiBtYXAtZ2V0KCRzZWNvbmRhcnktcGFsZXR0ZSwgMzAwKTtcbiRwcmltYXJ5LTQwMDogbWFwLWdldCgkcHJpbWFyeS1wYWxldHRlLCA0MDApO1xuJGVycm9yLWNvbG9yOiBtYXAtZ2V0KCRyZWQtcGFsZXR0ZSwgNTAwKTtcblxuJG1heC13aWR0aDogMTM2NnB4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9008:
/*!************************************************************************!*\
  !*** ./src/app/account/pages/security/set-password/popup.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupComponent": () => (/* binding */ PopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_utils_form_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/form-validators */ 3820);
/* harmony import */ var _core_common_form2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/common/form2 */ 4842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _core_services_password_meter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/password-meter.service */ 2587);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/input/input.component */ 2371);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-progress-bar */ 5042);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 1528);











class PopupComponent extends _core_common_form2__WEBPACK_IMPORTED_MODULE_1__.Form {
  constructor(dialogRef, fb, pwMeter) {
    super();
    this.dialogRef = dialogRef;
    this.pwMeter = pwMeter;
    this.pwStrength = 0;
    this.formFields = {
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _core_utils_form_validators__WEBPACK_IMPORTED_MODULE_0__.FormValidators.passwordStrength, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)]],
      repeatPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    };
    this.validators = [_core_utils_form_validators__WEBPACK_IMPORTED_MODULE_0__.FormValidators.match('password', 'repeatPassword')];
    this._initFormControl(fb, this.formFields, this.validators);
    this.form.get('password')?.valueChanges.subscribe(x => {
      this.pwStrength = this.pwMeter.checkPassword(x);
    });
  }
  save() {
    this.form.markAsTouched();
    if (this.form.valid) {
      this.dialogRef.close(this.form.controls['password'].value);
    }
  }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) {
  return new (t || PopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_6__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_password_meter_service__WEBPACK_IMPORTED_MODULE_2__.PasswordMeterService));
};
PopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PopupComponent,
  selectors: [["app-popup"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 22,
  vars: 9,
  consts: [[1, "d-flex", "justify-content-between", "align-items-end", "p-3"], ["mat-dialog-title", "", 1, "mb-0"], [1, "title-icon", 3, "mat-dialog-close"], ["mat-dialog-content", "", 1, "px-3"], [1, "descr"], [1, "note"], ["type", "password", "label", "Type password", 3, "control"], [1, "mb-4", "mt-5"], ["mode", "determinate", 3, "value"], [1, "ms-2", "v-message"], ["type", "password", "label", "Repeat password", 1, "mt-5", 3, "control"], ["mat-dialog-actions", "", 1, "d-flex", "justify-content-around", "mt-3"], [1, "btn", "btn-outline-primary", 3, "mat-dialog-close"], [1, "btn", "btn-primary", 3, "click"]],
  template: function PopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Setting up password login");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3)(7, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " You opt in for a classic password login. Please fill in below the password you want to use for your login in your Zaidra ecosystem. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " *Note: If you didn't complete the security question, please finish that steps also. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "app-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "mat-progress-bar", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "At least 8 characters and 2 numbers");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "app-input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 11)(18, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PopupComponent_Template_button_click_20_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.form.controls["password"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("strength-80", ctx.pwStrength >= 80 && ctx.pwStrength < 100)("strength-100", ctx.pwStrength >= 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.pwStrength);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.form.controls["repeatPassword"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-dialog-close", false);
    }
  },
  dependencies: [_shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_6__.MatLegacyDialogClose, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_6__.MatLegacyDialogTitle, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_6__.MatLegacyDialogContent, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_6__.MatLegacyDialogActions, _angular_material_legacy_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatLegacyProgressBar, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider],
  styles: ["[_nghost-%COMP%]     .mat-dialog-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n[_nghost-%COMP%]     .mat-dialog-content {\n  margin-top: 1rem;\n}\n[_nghost-%COMP%]     .mat-dialog-actions {\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.25);\n}\n[_nghost-%COMP%]     .mat-dialog-actions button {\n  width: 90px;\n}\n[_nghost-%COMP%]     .mat-progress-bar-fill::after {\n  background-image: linear-gradient(to right, #1b3664, #54688b, #c2c9d5);\n}\n[_nghost-%COMP%]     .mat-progress-bar {\n  height: 8px;\n  border-radius: 4px;\n}\n[_nghost-%COMP%]     .mat-progress-bar.strength-80 .mat-progress-bar-fill::after {\n  background-image: linear-gradient(to right, #1b3664, #54688b 80%, #c2c9d5);\n}\n[_nghost-%COMP%]     .mat-progress-bar.strength-100 .mat-progress-bar-fill::after {\n  background-image: linear-gradient(to right, #1b3664, #54688b 100%, #c2c9d5);\n}\n\n.title-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.descr[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #707070;\n}\n\n.v-message[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #707070;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9wYWdlcy9zZWN1cml0eS9zZXQtcGFzc3dvcmQvcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQUtFO0VBQ0UsZ0JBQUE7QUFISjtBQU1FO0VBQ0UsMENBQUE7QUFKSjtBQU1JO0VBQ0UsV0FBQTtBQUpOO0FBUUU7RUFDRSxzRUFBQTtBQU5KO0FBU0U7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7QUFSSjtBQVdNO0VBQ0UsMEVBQUE7QUFUUjtBQWNNO0VBQ0UsMkVBQUE7QUFaUjs7QUFrQkE7RUFDRSxlQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZUFBQTtBQWZGOztBQWlCQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBZEY7O0FBZ0JBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFiRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGluZ3MvdmFyaWFibGVzXCI7XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gIC5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG5cbiAgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiA5MHB4XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHByaW1hcnktY29sb3IsICRwcmltYXJ5LTQwMCwgI2MyYzlkNSk7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhciB7XG5cbiAgICBoZWlnaHQ6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAmLnN0cmVuZ3RoLTgwIHtcbiAgICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkcHJpbWFyeS1jb2xvciwgJHByaW1hcnktNDAwIDgwJSwgI2MyYzlkNSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5zdHJlbmd0aC0xMDAge1xuICAgICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRwcmltYXJ5LWNvbG9yLCAkcHJpbWFyeS00MDAgMTAwJSwgI2MyYzlkNSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50aXRsZS1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZGVzY3Ige1xuICBmb250LXNpemU6IDE0cHhcbn1cbi5ub3RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzcwNzA3MFxufVxuLnYtbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM3MDcwNzBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5627:
/*!*******************************************************************************!*\
  !*** ./src/app/account/pages/security/set-password/set-password.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetPasswordComponent": () => (/* binding */ SetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.component */ 9008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





class SetPasswordComponent {
  constructor(dialog, api, router) {
    this.dialog = dialog;
    this.api = api;
    this.router = router;
    this.changed = false;
    this.showPopup();
  }
  showPopup() {
    const dialogRef = this.dialog.open(_popup_component__WEBPACK_IMPORTED_MODULE_0__.PopupComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.beforeClosed().subscribe(password => {
      if (!password) {
        this.changed = false;
        this.router.navigate(['account/security']);
        return;
      }
      this.api.post('user/login-type/set-pw', {
        password
      }).subscribe(() => {
        this.changed = true;
        this.router.navigate(['account/security']);
      });
    });
  }
}
SetPasswordComponent.ɵfac = function SetPasswordComponent_Factory(t) {
  return new (t || SetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_3__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
SetPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SetPasswordComponent,
  selectors: [["app-set-password"]],
  decls: 0,
  vars: 0,
  template: function SetPasswordComponent_Template(rf, ctx) {},
  encapsulation: 2
});

/***/ }),

/***/ 783:
/*!*********************************************!*\
  !*** ./src/app/core/enums/language.enum.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Language": () => (/* binding */ Language)
/* harmony export */ });
var Language;
(function (Language) {
  Language["En"] = "en";
  Language["Ro"] = "ro";
})(Language || (Language = {}));

/***/ }),

/***/ 6867:
/*!****************************************************!*\
  !*** ./src/app/core/models/paymentMethod.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentMethod": () => (/* binding */ PaymentMethod)
/* harmony export */ });
class PaymentMethod {
  static adapt(item) {
    const addr = new PaymentMethod();
    addr.id = item.id;
    addr.name = item.name;
    addr.month = item.month;
    addr.year = item.year;
    addr.cvv = item.cvv;
    addr.cardNumber = item.cardNumber;
    addr.lastFour = item.lastFour;
    addr.featured = item.featured;
    return addr;
  }
}

/***/ }),

/***/ 135:
/*!***********************************************!*\
  !*** ./src/app/core/services/date.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateUtil": () => (/* binding */ DateUtil)
/* harmony export */ });
class DateUtil {
  static days() {
    return Array.from({
      length: 31
    }, (x, i) => {
      return String(i + 1).padStart(2, '0');
    });
  }
  static months() {
    return Array.from({
      length: 12
    }, (x, i) => {
      return String(i + 1).padStart(2, '0');
    });
  }
  static years(length, digits = 2, startFrom = null) {
    startFrom = startFrom || this.currYear(digits);
    return Array.from({
      length
    }, (x, i) => startFrom - i);
  }
  static dobYears() {
    return this.years(40, 4, this.currYear(4) - 20);
  }
  static currYear(digits = 2) {
    digits = 4 - digits;
    return parseInt(new Date().getFullYear().toString().slice(digits));
  }
}

/***/ }),

/***/ 2587:
/*!*********************************************************!*\
  !*** ./src/app/core/services/password-meter.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordMeterService": () => (/* binding */ PasswordMeterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PasswordMeterService {
  checkPassword(strPassword) {
    const m_strUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const m_strLowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const m_strNumber = '0123456789';
    const m_strCharacters = '!@#$%^&*?_~';
    const countContain = function (strPassword, strCheck) {
      // Declare variables
      var nCount = 0;
      for (let i = 0; i < strPassword.length; i++) {
        if (strCheck.indexOf(strPassword.charAt(i)) > -1) {
          nCount++;
        }
      }
      return nCount;
    };
    // Reset combination count
    var nScore = 0;
    // Password length
    // -- Less than 4 characters
    if (strPassword.length < 5) {
      nScore += 5;
    }
    // -- 5 to 7 characters
    else if (strPassword.length > 4 && strPassword.length <= 7) {
      nScore += 10;
    }
    // -- 8 or more
    else if (strPassword.length > 7) {
      nScore += 25;
    }
    // Letters
    var nUpperCount = countContain(strPassword, m_strUpperCase);
    var nLowerCount = countContain(strPassword, m_strLowerCase);
    var nLowerUpperCount = nUpperCount + nLowerCount;
    // -- Letters are all lower case
    if (nUpperCount == 0 && nLowerCount != 0) {
      nScore += 10;
    } else if (nUpperCount != 0 && nLowerCount != 0) {
      // -- Letters are upper case and lower case
      nScore += 20;
    }
    // Numbers
    var nNumberCount = countContain(strPassword, m_strNumber);
    // -- 1 number
    if (nNumberCount == 1) {
      nScore += 10;
    } else if (nNumberCount >= 2) {
      nScore += 20;
    }
    // Characters
    var nCharacterCount = countContain(strPassword, m_strCharacters);
    // // -- 1 character
    if (nCharacterCount == 1) {
      nScore += 10;
    }
    // -- More than 1 character
    if (nCharacterCount > 1) {
      nScore += 25;
    }
    // Bonus
    // -- Letters and numbers
    if (nNumberCount != 0 && nLowerUpperCount != 0) {
      nScore += 2;
    }
    // -- Letters, numbers, and characters
    if (nNumberCount != 0 && nLowerUpperCount != 0 && nCharacterCount != 0) {
      nScore += 3;
    }
    // -- Mixed case letters, numbers, and characters
    if (nNumberCount != 0 && nUpperCount != 0 && nLowerCount != 0 && nCharacterCount != 0) {
      nScore += 5;
    }
    return nScore;
  }
}
PasswordMeterService.ɵfac = function PasswordMeterService_Factory(t) {
  return new (t || PasswordMeterService)();
};
PasswordMeterService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: PasswordMeterService,
  factory: PasswordMeterService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7805:
/*!*************************************!*\
  !*** ./src/app/core/types/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginType": () => (/* binding */ LoginType)
/* harmony export */ });
var LoginType;
(function (LoginType) {
  LoginType["Code"] = "CODE";
  LoginType["Password"] = "PASSWORD";
})(LoginType || (LoginType = {}));

/***/ }),

/***/ 402:
/*!****************************************!*\
  !*** ./src/assets/i18n/shared/en.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"categories":"Categories","brands":"Brand","priceRanges":"Price","rating":"Rating"}');

/***/ }),

/***/ 3537:
/*!****************************************!*\
  !*** ./src/assets/i18n/shared/ro.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = {};

/***/ })

}]);
//# sourceMappingURL=src_app_account_account_module_ts.js.map