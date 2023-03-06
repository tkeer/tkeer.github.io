"use strict";
(self["webpackChunkeshop"] = self["webpackChunkeshop"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ 980);
/* harmony import */ var _pages_login_index_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/index/login.component */ 2847);
/* harmony import */ var _pages_forgot_email_index_forgot_email_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/forgot-email/index/forgot-email.component */ 6918);
/* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ 5805);
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ 454);
/* harmony import */ var _pages_questions_index_questions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/questions/index/questions.component */ 6608);
/* harmony import */ var _core_guards_anonymous_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/guards/anonymous.guard */ 7909);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/guards/auth.guard */ 7574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);











const routes = [{
  path: '',
  component: _auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent,
  children: [{
    path: 'login',
    component: _pages_login_index_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
    canActivate: [_core_guards_anonymous_guard__WEBPACK_IMPORTED_MODULE_6__.AnonymousGuard]
  }, {
    path: 'questions',
    component: _pages_questions_index_questions_component__WEBPACK_IMPORTED_MODULE_5__.QuestionsComponent,
    canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard]
  }, {
    path: 'forgot/email',
    component: _pages_forgot_email_index_forgot_email_component__WEBPACK_IMPORTED_MODULE_2__.ForgotEmailComponent,
    canActivate: [_core_guards_anonymous_guard__WEBPACK_IMPORTED_MODULE_6__.AnonymousGuard]
  }, {
    path: 'forgot/password',
    component: _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordComponent,
    canActivate: [_core_guards_anonymous_guard__WEBPACK_IMPORTED_MODULE_6__.AnonymousGuard]
  }, {
    path: 'reset/password/:token',
    component: _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__.ResetPasswordComponent,
    canActivate: [_core_guards_anonymous_guard__WEBPACK_IMPORTED_MODULE_6__.AnonymousGuard]
  }]
}];
class AuthRoutingModule {}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
  return new (t || AuthRoutingModule)();
};
AuthRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AuthRoutingModule
});
AuthRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 980:
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/toolbar/toolbar.component */ 7368);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);





class AuthComponent {}
AuthComponent.ɵfac = function AuthComponent_Factory(t) {
  return new (t || AuthComponent)();
};
AuthComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AuthComponent,
  selectors: [["app-auth"]],
  decls: 11,
  vars: 5,
  consts: [[3, "sidenav", "mobileOnly"], ["mode", "over", "position", "end", 3, "fixedInViewport", "fixedTopGap", "fixedBottomGap"], ["sidenav", ""], [1, "d-flex", "w-100", "justify-content-end", "p-3", "pb-5"], [3, "click"], [1, "pb-5", "px-4"]],
  template: function AuthComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav-container")(2, "mat-sidenav", 1, 2)(4, "div")(5, "div", 3)(6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AuthComponent_Template_mat_icon_click_6_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.close());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-sidenav-content")(9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sidenav", _r0)("mobileOnly", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fixedInViewport", true)("fixedTopGap", 0)("fixedBottomGap", 0);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
  styles: [".top-toolbar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 1.5rem;\n  border-bottom: 0.0625rem solid #f0f0f0;\n}\n.top-toolbar-wrap[_ngcontent-%COMP%]   .top-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  background-color: #ffffff;\n  padding: 0;\n}\n.top-toolbar-wrap[_ngcontent-%COMP%]   .top-toolbar[_ngcontent-%COMP%]   .top-toolbar-menu[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.top-toolbar-wrap[_ngcontent-%COMP%]   .top-toolbar[_ngcontent-%COMP%]   .top-toolbar-logo[_ngcontent-%COMP%] {\n  flex: 4;\n  justify-content: center;\n}\n.top-toolbar-wrap[_ngcontent-%COMP%]   .top-toolbar[_ngcontent-%COMP%]   .top-toolbar-icons[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 2;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBQ0Y7QUFFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQUFKO0FBRUk7RUFDRSxPQUFBO0FBQU47QUFFSTtFQUNFLE9BQUE7RUFDQSx1QkFBQTtBQUFOO0FBRUk7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBQU4iLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLXRvb2xiYXItd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgI2YwZjBmMDtcblxuXG4gIC50b3AtdG9vbGJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgLnRvcC10b29sYmFyLW1lbnUge1xuICAgICAgZmxleDogMjtcbiAgICB9XG4gICAgLnRvcC10b29sYmFyLWxvZ28ge1xuICAgICAgZmxleDogNDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAudG9wLXRvb2xiYXItaWNvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXg6IDI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 431);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.component */ 980);
/* harmony import */ var _pages_login_index_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/index/login.component */ 2847);
/* harmony import */ var _pages_login_password_login_password_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/password-login/password-login.component */ 8611);
/* harmony import */ var _pages_login_code_login_code_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/code-login/code-login.component */ 7367);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-otp-input */ 2981);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _pages_forgot_email_index_forgot_email_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/forgot-email/index/forgot-email.component */ 6918);
/* harmony import */ var _core_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/../shared/components/alert/alert.component */ 8332);
/* harmony import */ var _components_base_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/base/base.component */ 8357);
/* harmony import */ var _pages_forgot_email_questions_questions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/forgot-email/questions/questions.component */ 4192);
/* harmony import */ var _pages_forgot_email_new_email_new_email_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/forgot-email/new-email/new-email.component */ 7506);
/* harmony import */ var _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/forgot-password/forgot-password.component */ 5805);
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ 454);
/* harmony import */ var _pages_questions_index_questions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/questions/index/questions.component */ 6608);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _pages_questions_question_question_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/questions/question/question.component */ 3848);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _components_dialog_login_dialog_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dialog-login/dialog-login.component */ 6476);
/* harmony import */ var _components_account_locked_account_locked_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/account-locked/account-locked.component */ 1518);
/* harmony import */ var _components_otp_input_otp_input_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/otp-input/otp-input.component */ 9574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2560);























class AuthModule {}
AuthModule.ɵfac = function AuthModule_Factory(t) {
  return new (t || AuthModule)();
};
AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
  type: AuthModule
});
AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, ng_otp_input__WEBPACK_IMPORTED_MODULE_20__.NgOtpInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_1__.AuthComponent, _pages_login_index_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _pages_login_password_login_password_login_component__WEBPACK_IMPORTED_MODULE_3__.PasswordLoginComponent, _pages_login_code_login_code_login_component__WEBPACK_IMPORTED_MODULE_4__.CodeLoginComponent, _pages_forgot_email_index_forgot_email_component__WEBPACK_IMPORTED_MODULE_5__.ForgotEmailComponent, _pages_forgot_email_new_email_new_email_component__WEBPACK_IMPORTED_MODULE_9__.NewEmailComponent, _core_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__.AlertComponent, _components_base_base_component__WEBPACK_IMPORTED_MODULE_7__.BaseComponent, _pages_forgot_email_questions_questions_component__WEBPACK_IMPORTED_MODULE_8__.QuestionsComponent, _pages_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_10__.ForgotPasswordComponent, _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__.ResetPasswordComponent, _pages_questions_index_questions_component__WEBPACK_IMPORTED_MODULE_12__.QuestionsComponent, _pages_questions_question_question_component__WEBPACK_IMPORTED_MODULE_13__.QuestionComponent, _components_dialog_login_dialog_login_component__WEBPACK_IMPORTED_MODULE_15__.DialogLoginComponent, _components_account_locked_account_locked_component__WEBPACK_IMPORTED_MODULE_16__.AccountLockedComponent, _components_otp_input_otp_input_component__WEBPACK_IMPORTED_MODULE_17__.OtpInputComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, ng_otp_input__WEBPACK_IMPORTED_MODULE_20__.NgOtpInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslateModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__.SharedModule]
  });
})();

/***/ }),

/***/ 1518:
/*!****************************************************************************!*\
  !*** ./src/app/auth/components/account-locked/account-locked.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountLockedComponent": () => (/* binding */ AccountLockedComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_dios_dios_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/dios/dios.component */ 5367);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 1528);






class AccountLockedComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  close() {
    this.dialogRef.close();
  }
}
AccountLockedComponent.ɵfac = function AccountLockedComponent_Factory(t) {
  return new (t || AccountLockedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_LEGACY_DIALOG_DATA));
};
AccountLockedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AccountLockedComponent,
  selectors: [["app-account-locked"]],
  decls: 27,
  vars: 2,
  consts: [[1, "d-flex", "header", "justify-content-between", "p-3", "p-sm-3"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-grow-1"], [1, "d-inline-block", "text-nowrap"], [1, "title-icon", "me-1", "cur-pointer", 3, "click"], ["mat-dialog-content", "", 1, "px-3", "pb-4"], [1, "d-flex", "my-5"], [1, "d-flex", "align-items-center", "alert", "alert-primary", "flex-grow-1"], [1, "pe-3"], [1, "d-inline-flex", "text-danger"], [1, "d-flex", "flex-column"], [1, "text-decoration-underline"], [1, "d-none"], [1, "fs-s"], [1, "d-flex", "justify-content-center"], ["tabindex", "-1", 1, "btn", "btn-primary", "mt-2r", "px-0", "px-sm-5", "col-12", "col-sm-auto", "fs-3xl", 3, "click"]],
  template: function AccountLockedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-auth-dios", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Auth");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountLockedComponent_Template_mat_icon_click_4_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "span", 7)(11, "mat-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "error_filled");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9)(14, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "For security reasons, your account is locked for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11)(22, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "If you lost access to the account, you can create a new one.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountLockedComponent_Template_button_click_25_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Create account");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.data.mins, " minutes");
    }
  },
  dependencies: [_shared_components_dios_dios_component__WEBPACK_IMPORTED_MODULE_0__.DiosComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MatLegacyDialogContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider],
  styles: [".header[_ngcontent-%COMP%]   .star-icon-wrapper[_ngcontent-%COMP%] {\n  border: solid 1px #e2e2e2;\n  border-radius: 5px;\n}\n.header[_ngcontent-%COMP%]   .cancel-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9jb21wb25lbnRzL2FjY291bnQtbG9ja2VkL2FjY291bnQtbG9ja2VkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0FBRkoiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcblxuICAuc3Rhci1pY29uLXdyYXBwZXIge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNlMmUyZTI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG4gIH1cblxuICAuY2FuY2VsLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTRweFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8357:
/*!********************************************************!*\
  !*** ./src/app/auth/components/base/base.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = [[["", "title", ""]], "*", [["", "bottom", ""]]];
const _c1 = ["[title]", "*", "[bottom]"];
class BaseComponent {}
BaseComponent.ɵfac = function BaseComponent_Factory(t) {
  return new (t || BaseComponent)();
};
BaseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BaseComponent,
  selectors: [["app-base"]],
  ngContentSelectors: _c1,
  decls: 12,
  vars: 0,
  consts: [[1, "d-flex", "justify-content-center", "fw-bold", "welcome-title", "my-md-5"], [1, "container-xl", "content-container"], [1, "d-flex", "flex-column", "flex-md-row", "justify-content-end", "justify-content-xl-between", "justify-content-md-around"], [1, "d-flex", "justify-content-center", "align-self-md-baseline", "mx-md-5", "pt-4", "pt-xl-0flex-column"], [1, "d-flex", "justify-content-center"], ["src", "assets/images/send_mail.png", 1, "d-md-none", "img-fluid"], ["src", "assets/images/send_mail_md.png", 1, "d-none", "d-md-flex", "d-xl-none", "img-fluid"], ["src", "assets/images/send_mail_large.png", 1, "d-none", "d-xl-flex", "img-fluid"], [1, "d-flex", "flex-column", "section-fields"]],
  template: function BaseComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5)(7, "img", 6)(8, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](11, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [".welcome-title[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  max-width: 1140px;\n}\n\n[_nghost-%COMP%]     button.btn-auth {\n  height: 55px;\n  padding: 0 6rem;\n  font-size: 1.5rem;\n  border-radius: 0.25rem;\n}\n\n@media screen and (min-width: 768px) {\n  .btn.btn-auth[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 768px) {\n  .section-fields[_ngcontent-%COMP%] {\n    max-width: 380px;\n    min-width: 340px;\n  }\n  .section-fields[_ngcontent-%COMP%]     .btn.btn-auth {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 1200px) {\n  .welcome-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .section-fields[_ngcontent-%COMP%] {\n    max-width: 380px;\n    min-width: 340px;\n  }\n  .section-fields[_ngcontent-%COMP%]     .btn.btn-auth {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .welcome-title[_ngcontent-%COMP%] {\n    font-size: 2.25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9jb21wb25lbnRzL2Jhc2UvYmFzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGtCQUFBO0FBRkY7O0FBU0E7RUFDRSxpQkFBQTtBQU5GOztBQVNBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBTkY7O0FBU0E7RUFFRTtJQUNFLFdBQUE7RUFQRjtBQUNGO0FBWUE7RUFFRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFYRjtFQWFFO0lBQ0UsV0FBQTtFQVhKO0FBQ0Y7QUFlQTtFQUVFO0lBQ0UsaUJBQUE7RUFkRjtFQWlCQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFmRjtFQWlCRTtJQUNFLFdBQUE7RUFmSjtBQUNGO0FBbUJBO0VBRUU7SUFDRSxrQkFBQTtFQWxCRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2FzczptYXAnO1xuQGltcG9ydCAnc3JjL3N0eWxpbmdzL2JzX3ZhcmlhYmxlcyc7XG5cbi53ZWxjb21lLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4vLy5jb250ZW50IHtcbi8vICBwYWRkaW5nOiAwIDEuNXJlbSAycmVtO1xuLy99XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTE0MHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgYnV0dG9uLmJ0bi1hdXRoIHtcbiAgaGVpZ2h0OiA1NXB4O1xuICBwYWRkaW5nOiAwIDZyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAnbWQnKSkge1xuXG4gIC5idG4uYnRuLWF1dGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAnbWQnKSkge1xuXG4gIC5zZWN0aW9uLWZpZWxkcyB7XG4gICAgbWF4LXdpZHRoOiAzODBweDtcbiAgICBtaW4td2lkdGg6IDM0MHB4O1xuXG4gICAgOjpuZy1kZWVwIC5idG4uYnRuLWF1dGgge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC5nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdtZCcpKSBhbmQgKG1heC13aWR0aDogbWFwLmdldCgkZ3JpZC1icmVha3BvaW50cywgJ3hsJykpIHtcblxuICAud2VsY29tZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICAuc2VjdGlvbi1maWVsZHMge1xuICAgIG1heC13aWR0aDogMzgwcHg7XG4gICAgbWluLXdpZHRoOiAzNDBweDtcblxuICAgIDo6bmctZGVlcCAuYnRuLmJ0bi1hdXRoIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAneGwnKSkge1xuXG4gIC53ZWxjb21lLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIuMjVyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9574:
/*!******************************************************************!*\
  !*** ./src/app/auth/components/otp-input/otp-input.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpInputComponent": () => (/* binding */ OtpInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/enums/microservice-type.enum */ 7502);
/* harmony import */ var _account_locked_account_locked_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account-locked/account-locked.component */ 1518);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-otp-input */ 2981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);











function OtpInputComponent_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Code missing?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OtpInputComponent_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Oh snap! try again or");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OtpInputComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OtpInputComponent_div_1_span_1_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, OtpInputComponent_div_1_span_2_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OtpInputComponent_div_1_Template_a_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.resend($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Resend (", ctx_r0.retryIn, "s)");
  }
}
function OtpInputComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "*Account is locked for 2 minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a4) {
  return {
    length: 6,
    isPasswordInput: true,
    disableAutoFocus: true,
    containerClass: "d-flex flex-nowrap",
    inputClass: a4
  };
};
class OtpInputComponent {
  constructor(dialog, api) {
    this.dialog = dialog;
    this.api = api;
    this.inputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.secretKeyAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.retryLimit = 120;
    this.invalid = false;
    this.retryIn = 0;
    this.accountLocked = false;
  }
  onOtpChange($event) {
    this.inputChange.emit($event);
  }
  showAccountLockedPopup() {
    this.dialog.open(_account_locked_account_locked_component__WEBPACK_IMPORTED_MODULE_1__.AccountLockedComponent, {
      width: '428px',
      data: {
        mins: 2,
        message: 'Wrong requests too many times.'
      }
    });
  }
  sendCode() {
    if (!this.email) {
      return;
    }
    if (!this.otpEndpoint) {
      console.error('Endpoint is not set.');
      return;
    }
    if (this.accountLocked) {
      this.showAccountLockedPopup();
    }
    const handleError = ({
      error
    }) => {
      error = JSON.parse(error);
      if (error.detail?.startsWith('Email is restricted for about')) {
        this.handleAccountLocked();
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error(error.detail));
    };
    this.updateSecretKey('');
    this.ngOtpInput.setValue('');
    const data = {
      email: this.email,
      hostName: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.lunaServiceUrl
    };
    if (this.secretKey) {
      data['secretKey'] = this.secretKey;
    }
    this.api.post(this.otpEndpoint, data, _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_0__.MicroserviceType.au, {
      responseType: 'text'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(handleError)).subscribe(key => {
      this.updateSecretKey(key);
      this.startRetryInterval();
    });
  }
  updateSecretKey(key) {
    this.optSecretKey = key;
    this.secretKeyAdded.emit(this.optSecretKey);
  }
  resend(event) {
    event.preventDefault();
    if (this.retryIn > 0) {
      return;
    }
    this.sendCode();
  }
  startRetryInterval() {
    clearInterval(this.retryIntervalId);
    this.retryIn = this.retryLimit;
    this.retryIntervalId = setInterval(() => {
      this.retryIn -= 1;
      if (this.retryIn <= 0) {
        clearInterval(this.retryIntervalId);
      }
    }, 1000);
  }
  startAccountLockedInterval() {
    setTimeout(() => {
      this.accountLocked = false;
    }, 1000 * 60 * 2);
  }
  handleAccountLocked() {
    this.showAccountLockedPopup();
    this.accountLocked = true;
    this.startAccountLockedInterval();
    this.ngOtpInput.otpForm.disable();
  }
}
OtpInputComponent.ɵfac = function OtpInputComponent_Factory(t) {
  return new (t || OtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_7__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
};
OtpInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: OtpInputComponent,
  selectors: [["app-otp-input"]],
  viewQuery: function OtpInputComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](ng_otp_input__WEBPACK_IMPORTED_MODULE_8__.NgOtpInputComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.ngOtpInput = _t.first);
    }
  },
  inputs: {
    email: "email",
    secretKey: "secretKey",
    otpEndpoint: "otpEndpoint"
  },
  outputs: {
    inputChange: "inputChange",
    secretKeyAdded: "secretKeyAdded"
  },
  decls: 3,
  vars: 5,
  consts: [["disabled", "", 1, "otp-input-container", 3, "config", "onInputChange"], ["class", "text-end resend-wrapper", 4, "ngIf"], [4, "ngIf"], [1, "text-end", "resend-wrapper"], ["class", "text-primary-400 me-2", 4, "ngIf"], ["href", "#", 3, "click"], [1, "text-primary-400", "me-2"], [1, "text-danger"]],
  template: function OtpInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ng-otp-input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onInputChange", function OtpInputComponent_Template_ng_otp_input_onInputChange_0_listener($event) {
        return ctx.onOtpChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OtpInputComponent_div_1_Template, 5, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, OtpInputComponent_div_2_Template, 3, 0, "div", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, ctx.invalid ? "invalid" : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.accountLocked);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.accountLocked);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ng_otp_input__WEBPACK_IMPORTED_MODULE_8__.NgOtpInputComponent],
  styles: ["[_nghost-%COMP%]     .otp-input {\n  font-size: 3.5rem !important;\n  border: none !important;\n  background-color: rgba(0, 0, 0, 0.04);\n  margin-right: 0.0625rem !important;\n  height: 3.5rem !important;\n  width: 16.66666667% !important;\n  color: #1b3664 !important;\n}\n[_nghost-%COMP%]     .otp-input:focus {\n  outline: none;\n}\n[_nghost-%COMP%]     .otp-input.invalid {\n  background-color: rgba(255, 0, 0, 0.04) !important;\n  color: #f06724 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9jb21wb25lbnRzL290cC1pbnB1dC9vdHAtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQUZKO0FBSUk7RUFDRSxhQUFBO0FBRk47QUFLSTtFQUNFLGtEQUFBO0VBQ0EseUJBQUE7QUFITiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9zdHlsaW5ncy9ic192YXJpYWJsZXMnO1xuXG46aG9zdCA6Om5nLWRlZXAge1xuICAub3RwLWlucHV0IHtcbiAgICBmb250LXNpemU6IDMuNXJlbSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjA2MjVyZW0gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDMuNXJlbSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxNi42NjY2NjY2NyUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICAmLmludmFsaWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMDQpICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6918:
/*!*************************************************************************!*\
  !*** ./src/app/auth/pages/forgot-email/index/forgot-email.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotEmailComponent": () => (/* binding */ ForgotEmailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/enums/microservice-type.enum */ 7502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/input/input.component */ 2371);
/* harmony import */ var _new_email_new_email_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../new-email/new-email.component */ 7506);
/* harmony import */ var _core_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/../shared/components/alert/alert.component */ 8332);
/* harmony import */ var _components_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/base/base.component */ 8357);
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../questions/questions.component */ 4192);











function ForgotEmailComponent_div_6_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ForgotEmailComponent_div_6_div_1_div_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.getQuestions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ForgotEmailComponent_div_6_div_1_app_login_questions_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-login-questions", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submitted", function ForgotEmailComponent_div_6_div_1_app_login_questions_8_Template_app_login_questions_submitted_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.submit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("email", ctx_r5.emailField.value);
  }
}
function ForgotEmailComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 5)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Current email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div")(5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ForgotEmailComponent_div_6_div_1_div_7_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ForgotEmailComponent_div_6_div_1_app_login_questions_8_Template, 1, 1, "app-login-questions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx_r2.emailField);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.emailAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.emailAdded);
  }
}
function ForgotEmailComponent_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-new-email", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("email", ctx_r3.emailField.value)("questionSecretKey", ctx_r3.secretKey);
  }
}
function ForgotEmailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ForgotEmailComponent_div_6_div_1_Template, 9, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ForgotEmailComponent_div_6_div_2_Template, 2, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.questionVerified);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.questionVerified);
  }
}
function ForgotEmailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15)(1, "app-alert", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Your email address has been changed successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 17)(4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
class ForgotEmailComponent {
  constructor(api, route) {
    this.api = api;
    this.route = route;
    this.emailField = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]);
    this.questionVerified = false;
    this.emailReset = false;
    this.emailAdded = false;
  }
  ngOnInit() {
    const key = this.route.snapshot.queryParams['key'];
    if (key) {
      this.changeEmailWithKey(key);
    }
  }
  getQuestions() {
    this.emailField.markAsTouched();
    if (this.emailField.valid) {
      this.emailAdded = true;
    }
  }
  submit(key) {
    this.questionVerified = true;
    this.secretKey = key;
  }
  changeEmailWithKey(key) {
    this.api.get('reset-email/set-new-email', _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_0__.MicroserviceType.au, {
      params: {
        key
      }
    }).subscribe(() => {
      this.emailReset = true;
    });
  }
}
ForgotEmailComponent.ɵfac = function ForgotEmailComponent_Factory(t) {
  return new (t || ForgotEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute));
};
ForgotEmailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ForgotEmailComponent,
  selectors: [["app-forgot-email"]],
  decls: 8,
  vars: 2,
  consts: [["title", ""], [1, "d-none", "d-md-block"], [1, "d-md-none", "d-sm-block"], [4, "ngIf"], ["class", "pt-5 pt-md-0", 4, "ngIf"], [1, "pt-5", "pt-md-0", "d-md-none"], [1, "title"], [1, "d-flex", "mt-3.5"], ["type", "email", "placeholder", "admin@zaidra.com", "name", "email", "label", "Email address", 1, "w-100", 3, "control"], ["class", "d-flex justify-content-center mt-4.5", 4, "ngIf"], [3, "email", "submitted", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-4.5"], [1, "btn", "btn-primary", "btn-auth", 3, "click"], [3, "email", "submitted"], [3, "email", "questionSecretKey"], [1, "pt-5", "pt-md-0"], ["type", "success", 1, "d-block", "mb-5"], [1, "d-flex", "justify-content-center", "btn-wrapper"], ["routerLink", "/auth/login", 1, "btn", "btn-primary", "btn-auth"]],
  template: function ForgotEmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-base")(1, "span", 0)(2, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Current email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Welcome!");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ForgotEmailComponent_div_6_Template, 3, 2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ForgotEmailComponent_div_7_Template, 6, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.emailReset);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.emailReset);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_2__.InputComponent, _new_email_new_email_component__WEBPACK_IMPORTED_MODULE_3__.NewEmailComponent, _core_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__.AlertComponent, _components_base_base_component__WEBPACK_IMPORTED_MODULE_5__.BaseComponent, _questions_questions_component__WEBPACK_IMPORTED_MODULE_6__.QuestionsComponent],
  styles: [".title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]     .mat-divider.mat-divider-horizontal {\n  margin: 1.5rem -1rem 2.375rem;\n}\n@media screen and (min-width: 768px) {\n  [_nghost-%COMP%]     .mat-divider.mat-divider-horizontal {\n    margin: 1.9rem 0 2.4375rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9wYWdlcy9mb3Jnb3QtZW1haWwvaW5kZXgvZm9yZ290LWVtYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQUZGOztBQU1FO0VBQ0UsNkJBQUE7QUFISjtBQUtJO0VBSEY7SUFJSSwwQkFBQTtFQUZKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOm1hcCc7XG5AaW1wb3J0IFwic3JjL3N0eWxpbmdzL2JzX3ZhcmlhYmxlc1wiO1xuXG4udGl0bGUge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICAubWF0LWRpdmlkZXIubWF0LWRpdmlkZXItaG9yaXpvbnRhbCB7XG4gICAgbWFyZ2luOiAxLjVyZW0gLTFyZW0gMi4zNzVyZW07XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgICAgbWFyZ2luOiAxLjlyZW0gMCAyLjQzNzVyZW07XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7506:
/*!**************************************************************************!*\
  !*** ./src/app/auth/pages/forgot-email/new-email/new-email.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewEmailComponent": () => (/* binding */ NewEmailComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _core_common_form2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/form2 */ 4842);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/enums/microservice-type.enum */ 7502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/input/input.component */ 2371);
/* harmony import */ var _shared_components_dios_dios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/dios/dios.component */ 5367);
/* harmony import */ var _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/directives/loading.directive */ 3570);
/* harmony import */ var _core_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/../shared/components/alert/alert.component */ 8332);
/* harmony import */ var _components_otp_input_otp_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/otp-input/otp-input.component */ 9574);














const _c0 = ["otpInput"];
function NewEmailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3)(1, "app-auth-dios");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function NewEmailComponent_div_1_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NewEmailComponent_div_1_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.sendOtpCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Send OTP code");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appLoading", ctx_r4.loading);
  }
}
function NewEmailComponent_div_1_button_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function NewEmailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 4)(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Set the new email");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " The history and all the details will be imported from the lost one. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div")(7, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("submit", function NewEmailComponent_div_1_Template_form_submit_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.resetEmail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "app-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div")(11, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " We've sent you a code on email, so please fill in the field bellow. (Optional: You have a link in the email as alternate confirmation) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div")(14, "app-otp-input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("secretKeyAdded", function NewEmailComponent_div_1_Template_app_otp_input_secretKeyAdded_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.setSecretKey($event));
    })("inputChange", function NewEmailComponent_div_1_Template_app_otp_input_inputChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.onOtpChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, NewEmailComponent_div_1_button_17_Template, 2, 1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, NewEmailComponent_div_1_button_18_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("control", ctx_r1.getFC("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("d-none", !ctx_r1.otpSent);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("secretKey", ctx_r1.questionSecretKey)("email", ctx_r1.getFC("email").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.otpSent);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.otpSent);
  }
}
function NewEmailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18)(1, "app-alert", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Your email address has been changed successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 20)(4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
class NewEmailComponent extends _core_common_form2__WEBPACK_IMPORTED_MODULE_0__.Form {
  constructor(api, fb, router) {
    super();
    this.api = api;
    this.fb = fb;
    this.router = router;
    this.emailReset = false;
    this.invalid = false;
    this.otpSent = false;
    this.loading = false;
    this.code = '';
    this.formFields = {
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email]]
    };
    this._initFormControl(fb, this.formFields);
  }
  resetEmail() {
    const data = {
      code: this.code,
      secretKey: this.secretKey
    };
    this.api.post('reset-email/check-otp-code', data, _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__.MicroserviceType.au).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)(() => new Error('Something bad happened; please try again later.'));
    })).subscribe(() => {
      this.emailReset = true;
    });
  }
  onOtpChange($event) {
    this.code = $event;
  }
  setSecretKey(key) {
    this.secretKey = key;
    this.otpSent = !!key;
  }
  sendOtpCode() {
    if (!this.getFC('email').invalid) {
      this.otpInput.sendCode();
    }
  }
}
NewEmailComponent.ɵfac = function NewEmailComponent_Factory(t) {
  return new (t || NewEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
};
NewEmailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: NewEmailComponent,
  selectors: [["app-new-email"]],
  viewQuery: function NewEmailComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.otpInput = _t.first);
    }
  },
  inputs: {
    email: "email",
    questionSecretKey: "questionSecretKey"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
  decls: 3,
  vars: 3,
  consts: [["class", "pt-5 pt-md-0 d-none d-md-block", 4, "ngIf"], [4, "ngIf"], ["class", "pt-5 pt-md-0 alert-message", 4, "ngIf"], [1, "pt-5", "pt-md-0", "d-none", "d-md-block"], [1, "pt-5", "pt-md-0"], [1, "title"], [1, "mt-4.5", "descr"], [3, "submit"], [1, "d-flex", "mt-3.5"], ["label", "Your email address", "placeholder", "tkr@zaidra.com", 1, "w-100", 3, "control"], [1, "mt-3", "mail-message"], ["otpEndpoint", "reset-email/send-otp-code", 3, "secretKey", "email", "secretKeyAdded", "inputChange"], ["otpInput", ""], [1, "d-flex", "justify-content-center", "mt-4.5"], ["type", "button", "class", "btn btn-primary btn-auth", 3, "appLoading", "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary btn-auth", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "btn-auth", 3, "appLoading", "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-auth"], [1, "pt-5", "pt-md-0", "alert-message"], ["type", "success"], [1, "d-flex", "justify-content-center", "btn-wrapper"], ["type", "submit", "routerLink", "/auth/login", 1, "btn", "btn-primary", "btn-auth"]],
  template: function NewEmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, NewEmailComponent_div_0_Template, 3, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, NewEmailComponent_div_1_Template, 19, 7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, NewEmailComponent_div_2_Template, 6, 0, "div", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.emailReset);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.emailReset);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.emailReset);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _shared_components_dios_dios_component__WEBPACK_IMPORTED_MODULE_4__.DiosComponent, _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_5__.LoadingDirective, _core_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__.AlertComponent, _components_otp_input_otp_input_component__WEBPACK_IMPORTED_MODULE_7__.OtpInputComponent],
  styles: [".title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n\n.descr[_ngcontent-%COMP%] {\n  margin-bottom: 1.875rem;\n  font-size: 0.875rem;\n}\n\n.alert-message[_ngcontent-%COMP%] {\n  padding-top: 6.6875rem !important;\n}\n\n.btn-wrapper[_ngcontent-%COMP%] {\n  margin-top: 8.625rem;\n}\n\n@media screen and (min-width: 768px) {\n  .alert-message[_ngcontent-%COMP%] {\n    padding-top: 4.625rem !important;\n  }\n  .btn-wrapper[_ngcontent-%COMP%] {\n    margin-top: 4rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9wYWdlcy9mb3Jnb3QtZW1haWwvbmV3LWVtYWlsL25ldy1lbWFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGlDQUFBO0FBRkY7O0FBS0E7RUFDRSxvQkFBQTtBQUZGOztBQUtBO0VBQ0U7SUFDRSxnQ0FBQTtFQUZGO0VBS0E7SUFDRSxnQkFBQTtFQUhGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOm1hcCc7XG5AaW1wb3J0IFwic3JjL3N0eWxpbmdzL2JzX3ZhcmlhYmxlc1wiO1xuXG4udGl0bGUge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZGVzY3Ige1xuICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbVxufVxuXG4uYWxlcnQtbWVzc2FnZSB7XG4gIHBhZGRpbmctdG9wOiA2LjY4NzVyZW0gIWltcG9ydGFudDtcbn1cblxuLmJ0bi13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogOC42MjVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC5nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gIC5hbGVydC1tZXNzYWdlIHtcbiAgICBwYWRkaW5nLXRvcDogNC42MjVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idG4td3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4192:
/*!**************************************************************************!*\
  !*** ./src/app/auth/pages/forgot-email/questions/questions.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsComponent": () => (/* binding */ QuestionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_common_form2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/form2 */ 4842);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/enums/microservice-type.enum */ 7502);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/input/input.component */ 2371);
/* harmony import */ var _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/directives/loading.directive */ 3570);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 1528);












const _c0 = function () {
  return ["required"];
};
function QuestionsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 6)(2, "div", 7)(3, "mat-form-field", 8)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "app-input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const question_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Question #", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](question_r1.questionText);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("label", "Answer #", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx_r0.getFC(question_r1.questionId, null, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c0)));
  }
}
class QuestionsComponent extends _core_common_form2__WEBPACK_IMPORTED_MODULE_0__.Form {
  constructor(fb, api) {
    super();
    this.api = api;
    this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.questions = [];
    this.loading = false;
    this._initFormControl(fb, {});
  }
  ngOnInit() {
    this.getQuestions();
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    this.questions.forEach((q, i) => {
      this.questions[i].answer = this.getFC(q.questionId).value;
    });
    const errorHandler = ({
      error
    }) => {
      error = JSON.parse(error);
      const errors = error.violations || error.fieldErrors || [];
      errors.forEach(x => {
        const index = parseInt(x.field.charAt(36));
        this.getFC(this.questions[index].questionId).setErrors({
          'wrong_answer': 'wrong_answer'
        });
      });
      throw error;
    };
    const body = {
      email: this.email,
      answers: this.questions
    };
    this.loading = true;
    this.api.post('reset-email/check-answers', body, _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__.MicroserviceType.au, {
      responseType: 'text'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(errorHandler)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.loading = false)).subscribe(key => {
      this.submitted.emit(key);
    });
  }
  getQuestions() {
    this.loading = true;
    this.api.get('reset-email', _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__.MicroserviceType.au, {
      params: {
        email: this.email
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.loading = false)).subscribe(data => {
      this.questions = data.answers;
    });
  }
}
QuestionsComponent.ɵfac = function QuestionsComponent_Factory(t) {
  return new (t || QuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService));
};
QuestionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: QuestionsComponent,
  selectors: [["app-login-questions"]],
  inputs: {
    email: "email"
  },
  outputs: {
    submitted: "submitted"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 10,
  vars: 3,
  consts: [[1, "title"], [3, "formGroup", "submit"], [1, "d-flex", "flex-column", "security-questions", "mt-3.5"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-primary", "btn-auth", 3, "appLoading"], [1, "question-wrapper"], [1, "question"], ["appearance", "fill", 1, "w-100"], ["disabled", "", "cdkTextareaAutosize", "", "matInput", ""], [1, "answer", "w-100"], [1, "w-100", 3, "label", "control"]],
  template: function QuestionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Security questions");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function QuestionsComponent_Template_form_submit_4_listener() {
        return ctx.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, QuestionsComponent_div_6_Template, 10, 5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Continue");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.questions);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("appLoading", ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_4__.LoadingDirective, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLegacyLabel, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective],
  styles: ["[_nghost-%COMP%]   .security-questions[_ngcontent-%COMP%]     .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.0392156863);\n}\n[_nghost-%COMP%]   .security-questions[_ngcontent-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-flex {\n  background-color: rgba(255, 0, 0, 0.04);\n}\n[_nghost-%COMP%]   .security-questions[_ngcontent-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-input-element {\n  color: #ff0000;\n}\n[_nghost-%COMP%]   .security-questions[_ngcontent-%COMP%]     .question .mat-form-field-label {\n  color: #1b3664;\n  font-family: Roboto, serif;\n  font-size: 1.125rem;\n}\n[_nghost-%COMP%]   .security-questions[_ngcontent-%COMP%]     .mat-input-element {\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.question-wrapper[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%] {\n  padding-top: 0.53125rem;\n  padding-bottom: 1.78rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9wYWdlcy9mb3Jnb3QtZW1haWwvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsaW5ncy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSw2Q0FBQTtBQUZKO0FBTUk7RUFDRSx1Q0FBQTtBQUpOO0FBUUk7RUFDRSxjQ2dHUTtBRHRHZDtBQVdJO0VBQ0UsY0NzRlU7RURyRlYsMEJBQUE7RUFDQSxtQkFBQTtBQVROO0FBYUU7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FBWEo7O0FBaUJFO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtBQWRKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zdHlsaW5ncy92YXJpYWJsZXNcIjtcblxuOmhvc3QgLnNlY3VyaXR5LXF1ZXN0aW9ucyA6Om5nLWRlZXAge1xuICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDBhO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjA0KTtcbiAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDBhO1xuICAgIH1cblxuICAgIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgICBjb2xvcjogJGVycm9yLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5xdWVzdGlvbiB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNlcmlmO1xuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICB9XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcblxuICB9XG59XG5cbi5xdWVzdGlvbi13cmFwcGVyIHtcbiAgLmFuc3dlciB7XG4gICAgcGFkZGluZy10b3A6IDAuNTMxMjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEuNzhyZW07XG4gIH1cbn1cbiIsIi8vQGltcG9ydCBcIn5ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XG4vL0BpbXBvcnQgXCJ+bm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4kYmx1ZS1wYWxldHRlOiAoXG4gIDUwOiAjZTRlN2VjLFxuICAxMDA6ICNlOWViZjAsXG4gIDIwMDogI2M2Y2NkYixcbiAgMzAwOiAjOGQ5YmIyLFxuICA0MDA6ICM1NDY4OGIsXG4gIDUwMDogIzFiMzY2NCxcbiAgNjAwOiAjMTgzMDVjLFxuICA3MDA6ICMxNDI5NTIsXG4gIDgwMDogIzEwMjI0OCxcbiAgOTAwOiAjMDgxNjM2LFxuICBBMTAwOiAjNmY5MmZmLFxuICBBMjAwOiAjM2M2Y2ZmLFxuICBBNDAwOiAjMDk0NWZmLFxuICBBNzAwOiAjMDAzYWVmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAjMDAwMDAwLFxuICAgIDEwMDogIzAwMDAwMCxcbiAgICAyMDA6ICMwMDAwMDAsXG4gICAgMzAwOiAjZmZmZmZmLFxuICAgIDQwMDogI2ZmZmZmZixcbiAgICA1MDA6ICNmZmZmZmYsXG4gICAgNjAwOiAjZmZmZmZmLFxuICAgIDcwMDogI2ZmZmZmZixcbiAgICA4MDA6ICNmZmZmZmYsXG4gICAgOTAwOiAjZmZmZmZmLFxuICAgIEExMDA6ICMwMDAwMDAsXG4gICAgQTIwMDogI2ZmZmZmZixcbiAgICBBNDAwOiAjZmZmZmZmLFxuICAgIEE3MDA6ICNmZmZmZmYsXG4gICksXG4pO1xuXG4kb3JhbmdlLXBhbGV0dGU6IChcbiAgNTA6ICNmZGVkZTUsXG4gIDEwMDogI2ZlZjBlYSxcbiAgMjAwOiAjZmJkOWM4LFxuICAzMDA6ICNmOGIzOTIsXG4gIDQwMDogI2Y0OGQ1YixcbiAgNTAwOiAjZjA2NzI0LFxuICA2MDA6ICNlZTVmMjAsXG4gIDcwMDogI2VjNTQxYixcbiAgODAwOiAjZTk0YTE2LFxuICA5MDA6ICNlNTM5MGQsXG4gIEExMDA6ICNmZmZmZmYsXG4gIEEyMDA6ICNmZmUzZGQsXG4gIEE0MDA6ICNmZmI4YWEsXG4gIEE3MDA6ICNmZmEzOTAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICNmZmZmZmYsXG4gICAgMTAwOiAjZmZmZmZmLFxuICAgIDIwMDogI2ZmZmZmZixcbiAgICAzMDA6ICNmZmZmZmYsXG4gICAgNDAwOiAjZmZmZmZmLFxuICAgIDUwMDogI2ZmZmZmZixcbiAgICA2MDA6ICNmZmZmZmYsXG4gICAgNzAwOiAjZmZmZmZmLFxuICAgIDgwMDogI2ZmZmZmZixcbiAgICA5MDA6ICNmZmZmZmYsXG4gICAgQTEwMDogI2ZmZmZmZixcbiAgICBBMjAwOiAjZmZmZmZmLFxuICAgIEE0MDA6ICNmZmZmZmYsXG4gICAgQTcwMDogI2ZmZmZmZixcbiAgKSxcbik7XG5cbiRyZWQtcGFsZXR0ZTogKFxuICA1MDogI2ZmZWJlZSxcbiAgMTAwOiAjZmZjZGQyLFxuICAyMDA6ICNlZjlhOWEsXG4gIDMwMDogI2U1NzM3MyxcbiAgNDAwOiAjZWY1MzUwLFxuICA1MDA6ICNmZjAwMDAsXG4gIDYwMDogI2U1MzkzNSxcbiAgNzAwOiAjZDMyZjJmLFxuICA4MDA6ICNjNjI4MjgsXG4gIDkwMDogI2I3MWMxYyxcbiAgQTEwMDogI2ZmOGE4MCxcbiAgQTIwMDogI2ZmNTI1MixcbiAgQTQwMDogI2ZmMTc0NCxcbiAgQTcwMDogI2Q1MDAwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogcmdiYShibGFjaywgMC44NyksXG4gICAgMTAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICAyMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDMwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgNDAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICA1MDA6IHdoaXRlLFxuICAgIDYwMDogd2hpdGUsXG4gICAgNzAwOiB3aGl0ZSxcbiAgICA4MDA6IHdoaXRlLFxuICAgIDkwMDogd2hpdGUsXG4gICAgQTEwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgQTIwMDogd2hpdGUsXG4gICAgQTQwMDogd2hpdGUsXG4gICAgQTcwMDogd2hpdGUsXG4gIClcbik7XG5cbiRwcmltYXJ5LXBhbGV0dGU6ICRibHVlLXBhbGV0dGU7XG4kYWNjZW50LXBhbGV0dGU6ICRvcmFuZ2UtcGFsZXR0ZTtcbiRzZWNvbmRhcnktcGFsZXR0ZTogJG9yYW5nZS1wYWxldHRlO1xuXG4kcHJpbWFyeS1jb2xvcjogbWFwLWdldCgkcHJpbWFyeS1wYWxldHRlLCA1MDApO1xuJHNlY29uZGFyeS1jb2xvcjogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDUwMCk7XG4kc2Vjb25kYXJ5LTMwMDogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDMwMCk7XG4kcHJpbWFyeS00MDA6IG1hcC1nZXQoJHByaW1hcnktcGFsZXR0ZSwgNDAwKTtcbiRlcnJvci1jb2xvcjogbWFwLWdldCgkcmVkLXBhbGV0dGUsIDUwMCk7XG5cbiRtYXgtd2lkdGg6IDEzNjZweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5805:
/*!*************************************************************************!*\
  !*** ./src/app/auth/pages/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _core_common_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/form */ 1201);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/input/input.component */ 2371);
/* harmony import */ var _shared_components_dios_dios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/dios/dios.component */ 5367);
/* harmony import */ var _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/loading.directive */ 3570);
/* harmony import */ var _core_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/../shared/components/alert/alert.component */ 8332);
/* harmony import */ var _components_base_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/base/base.component */ 8357);













function ForgotPasswordComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 5)(2, "app-alert", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Please check your email to access the reset password link.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 7)(5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function ForgotPasswordComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Type your email address to reset the password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 12)(5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ForgotPasswordComponent_ng_template_9_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Reset password");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx_r2.form.controls["email"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appLoading", ctx_r2.loading);
  }
}
class ForgotPasswordComponent extends _core_common_form__WEBPACK_IMPORTED_MODULE_0__.Form {
  constructor(api, fb) {
    super();
    this.api = api;
    this.sent = false;
    this.loading = false;
    this.formFields = {
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]]
    };
    this._initFormControl(fb, this.formFields);
  }
  reset() {
    if (this.form.valid) {
      this.loading = true;
      this.api.post('user/forgot-password', {
        email: this.form.controls['email'].value
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => this.loading = false)).subscribe(() => {
        this.sent = true;
      });
    }
  }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
  return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder));
};
ForgotPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ForgotPasswordComponent,
  selectors: [["app-forgot-password"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 11,
  vars: 3,
  consts: [["title", ""], [3, "formGroup"], [1, "pt-5", "pt-md-0"], [4, "ngIf", "ngIfElse"], ["resetPassword", ""], [1, "alert-wrapper"], ["type", "success"], [1, "d-flex", "justify-content-center", "btn-wrapper-login"], ["routerLink", "/auth/login", 1, "btn", "btn-primary", "btn-auth"], [1, "mt-4", "mt-md-3", "mb-0"], [1, "d-flex", "field-wrapper"], ["type", "email", "name", "email", "label", "Email address", 1, "w-100", 3, "control"], [1, "d-flex", "justify-content-center", "btn-wrapper", "reset-btn-wrapper"], [1, "btn", "btn-primary", "btn-auth", 3, "appLoading", "click"]],
  template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-base")(1, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Welcome!");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div")(4, "form", 1)(5, "div", 2)(6, "app-auth-dios");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Auth");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ForgotPasswordComponent_div_8_Template, 7, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ForgotPasswordComponent_ng_template_9_Template, 7, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sent)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_2__.InputComponent, _shared_components_dios_dios_component__WEBPACK_IMPORTED_MODULE_3__.DiosComponent, _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_4__.LoadingDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _core_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _components_base_base_component__WEBPACK_IMPORTED_MODULE_6__.BaseComponent],
  styles: [".alert-wrapper[_ngcontent-%COMP%] {\n  margin-top: 6.625rem;\n  margin-bottom: 3.125rem;\n}\n\n.btn-wrapper[_ngcontent-%COMP%] {\n  margin-top: 6.4rem;\n}\n\n.field-wrapper[_ngcontent-%COMP%] {\n  margin-top: 3.0625rem;\n}\n\n.reset-btn-wrapper[_ngcontent-%COMP%]   .btn-auth[_ngcontent-%COMP%] {\n  padding: 0;\n  min-width: 296px;\n}\n\n@media screen and (min-width: 768px) {\n  .field-wrapper[_ngcontent-%COMP%] {\n    margin-top: 3.6875rem;\n  }\n  .btn-wrapper[_ngcontent-%COMP%], .btn-wrapper-login[_ngcontent-%COMP%] {\n    margin-top: 1.84rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFO0lBQ0UscUJBQUE7RUFGRjtFQUtBO0lBQ0UsbUJBQUE7RUFIRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2FzczptYXAnO1xuQGltcG9ydCBcInNyYy9zdHlsaW5ncy9ic192YXJpYWJsZXNcIjtcblxuLmFsZXJ0LXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiA2LjYyNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMy4xMjVyZW07XG59XG5cbi5idG4td3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDYuNDByZW07XG59XG5cbi5maWVsZC13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMy4wNjI1cmVtO1xufVxuXG4ucmVzZXQtYnRuLXdyYXBwZXIgLmJ0bi1hdXRoIHtcbiAgcGFkZGluZzogMDtcbiAgbWluLXdpZHRoOiAyOTZweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbWFwLmdldCgkZ3JpZC1icmVha3BvaW50cywgJ21kJykpIHtcbiAgLmZpZWxkLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDMuNjg3NXJlbTtcbiAgfVxuXG4gIC5idG4td3JhcHBlciwgLmJ0bi13cmFwcGVyLWxvZ2luIHtcbiAgICBtYXJnaW4tdG9wOiAxLjg0cmVtO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7367:
/*!*********************************************************************!*\
  !*** ./src/app/auth/pages/login/code-login/code-login.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeLoginComponent": () => (/* binding */ CodeLoginComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/enums/microservice-type.enum */ 7502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _core_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/auth-user.service */ 6922);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directives/loading.directive */ 3570);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _components_otp_input_otp_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/otp-input/otp-input.component */ 9574);











const _c0 = ["otpInput"];
function CodeLoginComponent_ng_template_13_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "span", 12)(2, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "error_filled");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 14)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "For security reasons, your account is locked for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "2 minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function CodeLoginComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CodeLoginComponent_ng_template_13_div_0_Template, 10, 0, "div", 10);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.accountLocked);
  }
}
class CodeLoginComponent {
  constructor(api, authService, router) {
    this.api = api;
    this.authService = authService;
    this.router = router;
    this.code = '';
    this.trusted = true;
    this.invalid = false;
    this.loading = false;
    // this.startRetryInterval()
  }

  ngAfterViewInit() {
    this.otpInput.sendCode();
  }
  login() {
    if (!this.code || this.code.length < 6) {
      return;
    }
    this.loading = true;
    const data = {
      secretKey: this.secretKey,
      code: this.code
    };
    this.api.post('check-otp-code', data, _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_0__.MicroserviceType.au).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(({
      error: {
        message
      }
    }) => {
      this.invalid = true;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => new Error(message));
    })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.loading = false)).subscribe(data => {
      // @todo
      this.authService.setAuthToken(data.id_token);
      const navigateTo =  false ? 0 : '/';
      this.router.navigate([navigateTo]);
    });
  }
  onOtpChange($event) {
    this.code = $event;
  }
  setSecretKey(key) {
    this.secretKey = key;
    // this.otpSent = !!key
  }
}

CodeLoginComponent.ɵfac = function CodeLoginComponent_Factory(t) {
  return new (t || CodeLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_auth_user_service__WEBPACK_IMPORTED_MODULE_2__.AuthUserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};
CodeLoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CodeLoginComponent,
  selectors: [["app-code-login"]],
  viewQuery: function CodeLoginComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.otpInput = _t.first);
    }
  },
  inputs: {
    email: "email"
  },
  decls: 15,
  vars: 4,
  consts: [[1, "mt-3", "mail-message"], [3, "submit"], ["otpEndpoint", "send-otp-code", 3, "secretKey", "email", "inputChange", "secretKeyAdded"], ["otpInput", ""], [1, "form-check", "form-check-inline", "trusted-device"], ["type", "checkbox", "id", "trusted-device", "name", "trusted", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "trusted-device", 1, "form-check-label"], [1, "d-flex", "justify-content-center", "mt-4.5"], ["type", "submit", 1, "btn", "btn-primary", "btn-auth", 3, "appLoading"], ["accountLockedRef", ""], ["class", "d-flex align-items-center alert alert-primary flex-grow-1 mt-5", 4, "ngIf"], [1, "d-flex", "align-items-center", "alert", "alert-primary", "flex-grow-1", "mt-5"], [1, "pe-3"], [1, "d-inline-flex", "text-danger"], [1, "d-flex", "flex-column"], [1, "text-decoration-underline"]],
  template: function CodeLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " We've sent you a code on email, so please fill in the field bellow. (Optional: You have a link in the email as alternate login)\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function CodeLoginComponent_Template_form_submit_2_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div")(4, "app-otp-input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputChange", function CodeLoginComponent_Template_app_otp_input_inputChange_4_listener($event) {
        return ctx.onOtpChange($event);
      })("secretKeyAdded", function CodeLoginComponent_Template_app_otp_input_secretKeyAdded_4_listener($event) {
        return ctx.setSecretKey($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CodeLoginComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.trusted = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "This is a trusted device. Don't ask me for the next 30 days.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7)(11, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CodeLoginComponent_ng_template_13_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("secretKey", ctx.secretKey)("email", ctx.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.trusted);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("appLoading", ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_3__.LoadingDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _components_otp_input_otp_input_component__WEBPACK_IMPORTED_MODULE_4__.OtpInputComponent],
  styles: ["[_nghost-%COMP%]     .mat-form-field {\n  max-width: 1024px;\n  margin-left: 0.0625rem;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex {\n  padding: 0 0.75rem;\n}\n[_nghost-%COMP%]     .mat-form-field-underline {\n  display: none;\n}\n[_nghost-%COMP%]     .mat-form-field-flex {\n  height: 54px;\n}\n[_nghost-%COMP%]     .mat-form-field-infix input {\n  text-align: center;\n  font-size: 4em;\n  height: 32px;\n  color: #1b3664;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]     .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n[_nghost-%COMP%]     .resend-wrapper {\n  margin-top: 2.625rem;\n}\n\n.trusted-device[_ngcontent-%COMP%] {\n  margin-top: 8.75rem;\n}\n@media screen and (min-width: 768px) {\n  .trusted-device[_ngcontent-%COMP%] {\n    margin-top: 7.5rem;\n  }\n}\n@media screen and (min-width: 992px) {\n  .trusted-device[_ngcontent-%COMP%] {\n    margin-top: 4.375rem;\n  }\n}\n\n.btn-auth[_ngcontent-%COMP%] {\n  min-width: 296px;\n}\n\n.mail-message[_ngcontent-%COMP%] {\n  margin-bottom: 2.3125rem;\n}\n\n.resend-wrapper[_ngcontent-%COMP%] {\n  margin-top: 2.625rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9wYWdlcy9sb2dpbi9jb2RlLWxvZ2luL2NvZGUtbG9naW4uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGluZ3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1FO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtBQUxKO0FBUUU7RUFDRSxrQkFBQTtBQU5KO0FBU0U7RUFDRSxhQUFBO0FBUEo7QUFVRTtFQUNFLFlBQUE7QUFSSjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNDK0VZO0VEOUVaLHNCQUFBO0FBVEo7QUFjRTtFQUNFLGlCQUFBO0FBWko7QUFtQkU7RUFDRSxvQkFBQTtBQWpCSjs7QUF5QkE7RUFDRSxtQkFBQTtBQXRCRjtBQXdCRTtFQUhGO0lBSUksa0JBQUE7RUFyQkY7QUFDRjtBQXVCRTtFQVBGO0lBUUksb0JBQUE7RUFwQkY7QUFDRjs7QUF1QkE7RUFDRSxnQkFBQTtBQXBCRjs7QUF1QkE7RUFDRSx3QkFBQTtBQXBCRjs7QUF1QkE7RUFDRSxvQkFBQTtBQXBCRiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3Nhc3M6bWFwJztcbkBpbXBvcnQgXCJzcmMvc3R5bGluZ3MvYnNfdmFyaWFibGVzXCI7XG5cblxuOmhvc3QgOjpuZy1kZWVwIHtcblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjA2MjVyZW07XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICBwYWRkaW5nOiAwIDAuNzVyZW07XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgIGhlaWdodDogNTRweDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1pbmZpeCBpbnB1dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAvLy13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IC4yZW07XG4gICAgLy9sZXR0ZXItc3BhY2luZzogMC4yZW07XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cblxuICAub3RwLXdyYXBwZXIge1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTsgcGFkZGluZzogMTZweFxuICB9XG5cbiAgLnJlc2VuZC13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiAyLjYyNXJlbVxuICB9XG59XG5cbi8vLnByaW1hcnktNDAwIHtcbi8vICBjb2xvcjogJHByaW1hcnktNDAwO1xuLy99XG5cbi50cnVzdGVkLWRldmljZSB7XG4gIG1hcmdpbi10b3A6IDguNzVyZW07XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbWFwLmdldCgkZ3JpZC1icmVha3BvaW50cywgJ21kJykpIHtcbiAgICBtYXJnaW4tdG9wOiA3LjVyZW07XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgIG1hcmdpbi10b3A6IDQuMzc1cmVtO1xuICB9XG59XG5cbi5idG4tYXV0aCB7XG4gIG1pbi13aWR0aDogMjk2cHg7XG59XG5cbi5tYWlsLW1lc3NhZ2Uge1xuICBtYXJnaW4tYm90dG9tOiAyLjMxMjVyZW1cbn1cblxuLnJlc2VuZC13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMi42MjVyZW1cbn1cbiIsIi8vQGltcG9ydCBcIn5ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XG4vL0BpbXBvcnQgXCJ+bm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4kYmx1ZS1wYWxldHRlOiAoXG4gIDUwOiAjZTRlN2VjLFxuICAxMDA6ICNlOWViZjAsXG4gIDIwMDogI2M2Y2NkYixcbiAgMzAwOiAjOGQ5YmIyLFxuICA0MDA6ICM1NDY4OGIsXG4gIDUwMDogIzFiMzY2NCxcbiAgNjAwOiAjMTgzMDVjLFxuICA3MDA6ICMxNDI5NTIsXG4gIDgwMDogIzEwMjI0OCxcbiAgOTAwOiAjMDgxNjM2LFxuICBBMTAwOiAjNmY5MmZmLFxuICBBMjAwOiAjM2M2Y2ZmLFxuICBBNDAwOiAjMDk0NWZmLFxuICBBNzAwOiAjMDAzYWVmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAjMDAwMDAwLFxuICAgIDEwMDogIzAwMDAwMCxcbiAgICAyMDA6ICMwMDAwMDAsXG4gICAgMzAwOiAjZmZmZmZmLFxuICAgIDQwMDogI2ZmZmZmZixcbiAgICA1MDA6ICNmZmZmZmYsXG4gICAgNjAwOiAjZmZmZmZmLFxuICAgIDcwMDogI2ZmZmZmZixcbiAgICA4MDA6ICNmZmZmZmYsXG4gICAgOTAwOiAjZmZmZmZmLFxuICAgIEExMDA6ICMwMDAwMDAsXG4gICAgQTIwMDogI2ZmZmZmZixcbiAgICBBNDAwOiAjZmZmZmZmLFxuICAgIEE3MDA6ICNmZmZmZmYsXG4gICksXG4pO1xuXG4kb3JhbmdlLXBhbGV0dGU6IChcbiAgNTA6ICNmZGVkZTUsXG4gIDEwMDogI2ZlZjBlYSxcbiAgMjAwOiAjZmJkOWM4LFxuICAzMDA6ICNmOGIzOTIsXG4gIDQwMDogI2Y0OGQ1YixcbiAgNTAwOiAjZjA2NzI0LFxuICA2MDA6ICNlZTVmMjAsXG4gIDcwMDogI2VjNTQxYixcbiAgODAwOiAjZTk0YTE2LFxuICA5MDA6ICNlNTM5MGQsXG4gIEExMDA6ICNmZmZmZmYsXG4gIEEyMDA6ICNmZmUzZGQsXG4gIEE0MDA6ICNmZmI4YWEsXG4gIEE3MDA6ICNmZmEzOTAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICNmZmZmZmYsXG4gICAgMTAwOiAjZmZmZmZmLFxuICAgIDIwMDogI2ZmZmZmZixcbiAgICAzMDA6ICNmZmZmZmYsXG4gICAgNDAwOiAjZmZmZmZmLFxuICAgIDUwMDogI2ZmZmZmZixcbiAgICA2MDA6ICNmZmZmZmYsXG4gICAgNzAwOiAjZmZmZmZmLFxuICAgIDgwMDogI2ZmZmZmZixcbiAgICA5MDA6ICNmZmZmZmYsXG4gICAgQTEwMDogI2ZmZmZmZixcbiAgICBBMjAwOiAjZmZmZmZmLFxuICAgIEE0MDA6ICNmZmZmZmYsXG4gICAgQTcwMDogI2ZmZmZmZixcbiAgKSxcbik7XG5cbiRyZWQtcGFsZXR0ZTogKFxuICA1MDogI2ZmZWJlZSxcbiAgMTAwOiAjZmZjZGQyLFxuICAyMDA6ICNlZjlhOWEsXG4gIDMwMDogI2U1NzM3MyxcbiAgNDAwOiAjZWY1MzUwLFxuICA1MDA6ICNmZjAwMDAsXG4gIDYwMDogI2U1MzkzNSxcbiAgNzAwOiAjZDMyZjJmLFxuICA4MDA6ICNjNjI4MjgsXG4gIDkwMDogI2I3MWMxYyxcbiAgQTEwMDogI2ZmOGE4MCxcbiAgQTIwMDogI2ZmNTI1MixcbiAgQTQwMDogI2ZmMTc0NCxcbiAgQTcwMDogI2Q1MDAwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogcmdiYShibGFjaywgMC44NyksXG4gICAgMTAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICAyMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDMwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgNDAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICA1MDA6IHdoaXRlLFxuICAgIDYwMDogd2hpdGUsXG4gICAgNzAwOiB3aGl0ZSxcbiAgICA4MDA6IHdoaXRlLFxuICAgIDkwMDogd2hpdGUsXG4gICAgQTEwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgQTIwMDogd2hpdGUsXG4gICAgQTQwMDogd2hpdGUsXG4gICAgQTcwMDogd2hpdGUsXG4gIClcbik7XG5cbiRwcmltYXJ5LXBhbGV0dGU6ICRibHVlLXBhbGV0dGU7XG4kYWNjZW50LXBhbGV0dGU6ICRvcmFuZ2UtcGFsZXR0ZTtcbiRzZWNvbmRhcnktcGFsZXR0ZTogJG9yYW5nZS1wYWxldHRlO1xuXG4kcHJpbWFyeS1jb2xvcjogbWFwLWdldCgkcHJpbWFyeS1wYWxldHRlLCA1MDApO1xuJHNlY29uZGFyeS1jb2xvcjogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDUwMCk7XG4kc2Vjb25kYXJ5LTMwMDogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDMwMCk7XG4kcHJpbWFyeS00MDA6IG1hcC1nZXQoJHByaW1hcnktcGFsZXR0ZSwgNDAwKTtcbiRlcnJvci1jb2xvcjogbWFwLWdldCgkcmVkLXBhbGV0dGUsIDUwMCk7XG5cbiRtYXgtd2lkdGg6IDEzNjZweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2847:
/*!***********************************************************!*\
  !*** ./src/app/auth/pages/login/index/login.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _core_common_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/form */ 1201);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/enums/microservice-type.enum */ 7502);
/* harmony import */ var _core_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/types */ 7805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _core_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/auth-user.service */ 6922);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/input/input.component */ 2371);
/* harmony import */ var _shared_components_dios_dios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/dios/dios.component */ 5367);
/* harmony import */ var _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/directives/loading.directive */ 3570);
/* harmony import */ var _password_login_password_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../password-login/password-login.component */ 8611);
/* harmony import */ var _code_login_code_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../code-login/code-login.component */ 7367);
/* harmony import */ var _components_base_base_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/base/base.component */ 8357);

















function LoginComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "app-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 7)(4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Lost access to email?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 9)(7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("control", ctx_r0.form.controls["email"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("appLoading", ctx_r0.loading);
  }
}
function LoginComponent_div_9_app_password_login_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-password-login", 13);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("email", ctx_r2.email);
  }
}
function LoginComponent_div_9_app_code_login_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-code-login", 13);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("email", ctx_r3.email);
  }
}
function LoginComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, LoginComponent_div_9_app_password_login_1_Template, 1, 1, "app-password-login", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, LoginComponent_div_9_app_code_login_2_Template, 1, 1, "app-code-login", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.type === "PASSWORD");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.type === "CODE");
  }
}
class LoginComponent extends _core_common_form__WEBPACK_IMPORTED_MODULE_0__.Form {
  constructor(fb, api, authService, route, router) {
    super();
    this.api = api;
    this.authService = authService;
    this.route = route;
    this.router = router;
    this.step = 1;
    this.type = _core_types__WEBPACK_IMPORTED_MODULE_2__.LoginType.Code;
    this.loading = false;
    this.formFields = {
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]
    };
    this._initFormControl(fb, this.formFields);
  }
  ngOnInit() {
    const key = this.route.snapshot.queryParams['key'];
    if (key) {
      this.loginWithKey(key);
    }
  }
  nextStep() {
    if (this.form.invalid) {
      return;
    }
    this.email = this.form.controls['email'].value;
    const handleError = ({
      message
    }) => {
      setTimeout(() => this.setError('email', 'not_found', message));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.throwError)(() => new Error('Something bad happened; please try again later.'));
    };
    this.loading = true;
    const options = {
      params: {
        email: this.email
      },
      responseType: 'text'
    };
    this.api.get('user-info/auth-mode', _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__.MicroserviceType.usr, options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.catchError)(handleError)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.finalize)(() => this.loading = false)).subscribe(data => {
      this.type = data;
      this.step = 2;
    });
  }
  loginWithKey(key) {
    this.api.get('login', _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__.MicroserviceType.au, {
      params: {
        key
      }
    }).subscribe(data => {
      this.authService.setAuthToken(data.id_token).subscribe();
      this.router.navigate(['/']);
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_auth_user_service__WEBPACK_IMPORTED_MODULE_4__.AuthUserService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
  decls: 10,
  vars: 3,
  consts: [["title", ""], [3, "formGroup", "submit"], [1, "pt-5", "pt-md-0"], [4, "ngIf"], ["class", "form-wrapper", 4, "ngIf"], [1, "d-flex", "mt-5"], ["type", "email", "placeholder", "admin@zaidra.com", "label", "Email address", 1, "w-100", 3, "control"], [1, "lost-email"], ["routerLink", "/auth/forgot/email"], [1, "d-flex", "justify-content-center", "mt-4.5"], ["type", "submit", 1, "btn", "btn-primary", "btn-auth", 3, "appLoading"], [1, "form-wrapper"], [3, "email", 4, "ngIf"], [3, "email"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-base")(1, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Welcome!");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div")(4, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_4_listener() {
        return ctx.nextStep();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 2)(6, "app-auth-dios");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Auth");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 9, 2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 3, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.step === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.step === 2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _shared_components_dios_dios_component__WEBPACK_IMPORTED_MODULE_6__.DiosComponent, _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_7__.LoadingDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _password_login_password_login_component__WEBPACK_IMPORTED_MODULE_8__.PasswordLoginComponent, _code_login_code_login_component__WEBPACK_IMPORTED_MODULE_9__.CodeLoginComponent, _components_base_base_component__WEBPACK_IMPORTED_MODULE_10__.BaseComponent],
  styles: ["@media screen and (min-width: 768px) {\n  .form-wrapper[_ngcontent-%COMP%] {\n    max-width: 450px;\n  }\n}\n.lost-email[_ngcontent-%COMP%] {\n  margin-top: 2.2rem;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9wYWdlcy9sb2dpbi9pbmRleC9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFO0lBQ0UsZ0JBQUE7RUFGRjtBQUNGO0FBS0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBSEYiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOm1hcCc7XG5AaW1wb3J0IFwic3JjL3N0eWxpbmdzL2JzX3ZhcmlhYmxlc1wiO1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAuZm9ybS13cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICB9XG59XG5cbi5sb3N0LWVtYWlsIHtcbiAgbWFyZ2luLXRvcDogMi4ycmVtO1xuICB0ZXh0LWFsaWduOiByaWdodFxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8611:
/*!*****************************************************************************!*\
  !*** ./src/app/auth/pages/login/password-login/password-login.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordLoginComponent": () => (/* binding */ PasswordLoginComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _core_common_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/form */ 1201);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _popperjs_core_lib_popper_lite_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @popperjs/core/lib/popper-lite.js */ 3176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/local-storage.service */ 4617);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/auth-user.service */ 6922);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/input/input.component */ 2371);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-card */ 7315);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);













class PasswordLoginComponent extends _core_common_form__WEBPACK_IMPORTED_MODULE_0__.Form {
  constructor(api, localStorage, router, authService, fb) {
    super();
    this.api = api;
    this.localStorage = localStorage;
    this.router = router;
    this.authService = authService;
    this.loading = false;
    this.formFields = {
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    };
    this._initFormControl(fb, this.formFields);
  }
  login() {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    const password = this.form.controls['password'].value;
    const data = {
      email: this.email,
      password
    };
    this.api.post('login', data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(({
      error: {
        message
      }
    }) => {
      this.setError('password', 'invalid_password', true);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(() => new Error(message));
    })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.loading = false)).subscribe(data => {
      this.authService.setAuthToken(data.id_token).subscribe();
      // @todo
      const navigateTo =  false ? 0 : '/account';
      this.router.navigate([navigateTo]);
    });
  }
  togglePopover(event) {
    event.stopPropagation();
    const reference = document.querySelector('#reference');
    const tooltip = document.querySelector('#tooltip');
    if (!this.popover) {
      this.popover = (0,_popperjs_core_lib_popper_lite_js__WEBPACK_IMPORTED_MODULE_9__.createPopper)(reference, tooltip, {
        placement: 'bottom'
      });
      document.addEventListener('click', this.hidePopover);
    }
    if (tooltip.hasAttribute('data-show')) {
      tooltip.removeAttribute('data-show');
      return;
    }
    const parent = tooltip.parentElement;
    tooltip.style.width = `${parent.offsetWidth}px`;
    tooltip.setAttribute('data-show', '');
    // We need to tell Popper to update the tooltip position
    // after we show the tooltip, otherwise it will be incorrect
    this.popover.update();
  }
  hidePopover() {
    const tooltip = document.querySelector('#tooltip');
    tooltip.removeAttribute('data-show');
  }
  ngOnDestroy() {
    document.removeEventListener('click', this.hidePopover);
  }
}
PasswordLoginComponent.ɵfac = function PasswordLoginComponent_Factory(t) {
  return new (t || PasswordLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_auth_user_service__WEBPACK_IMPORTED_MODULE_3__.AuthUserService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
};
PasswordLoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: PasswordLoginComponent,
  selectors: [["app-password-login"]],
  inputs: {
    email: "email"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 23,
  vars: 2,
  consts: [[3, "formGroup"], [1, "mt-3", "mb-0"], [1, "d-inline-flex", "align-middle", 3, "click"], [1, "info-icon"], ["id", "reference"], ["id", "tooltip", 1, "info-popup"], [1, "web-link"], [1, "d-flex", "pw-input-wrapper"], ["label", "Password", "type", "password", 1, "w-100", 3, "control"], [1, "forgot-pw", "text-end"], ["routerLink", "/auth/forgot/password"], [1, "d-flex", "justify-content-center", "login-btn-wrapper", "mt-4.5"], [1, "btn", "btn-primary", "btn-auth", 3, "click"]],
  template: function PasswordLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " We have detected that you use password as method of login. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PasswordLoginComponent_Template_span_click_3_listener($event) {
        return ctx.togglePopover($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "info");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div")(7, "div", 4)(8, "mat-card", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " The Za\u00EDdra network uses a unique and easy authentication system on all the sites in the network. This site is part of the Za\u00EDdra network, like the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "jucarii.ro");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, " site where you already have an account set up with a password. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, " Therefore, you can use the same email address and password for authentication, your data being safe on all sites within the network. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "app-input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 9)(18, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Forgot password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 11)(21, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function PasswordLoginComponent_Template_button_click_21_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("control", ctx.form.controls["password"]);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_12__.MatLegacyCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective],
  styles: [".info-icon[_ngcontent-%COMP%] {\n  color: #54688b;\n  cursor: pointer;\n}\n\n.info-popup[_ngcontent-%COMP%] {\n  box-shadow: 0 0.625rem 1rem 0 rgba(27, 54, 100, 0.25);\n  background-color: #f3f3f3;\n  color: #54688b;\n  font-size: 0.875rem;\n  z-index: 1;\n  width: available;\n}\n.info-popup[_ngcontent-%COMP%]   .web-link[_ngcontent-%COMP%] {\n  color: #1b3664;\n  text-decoration: underline;\n}\n\n.forgot-pw[_ngcontent-%COMP%] {\n  margin-top: 1.437rem;\n}\n\n.pw-input-wrapper[_ngcontent-%COMP%] {\n  margin-top: 2.75rem;\n}\n\n.login-btn-wrapper[_ngcontent-%COMP%] {\n  margin-top: 2.937rem;\n}\n\n#tooltip[_ngcontent-%COMP%] {\n  \n  display: none;\n}\n\n#tooltip[data-show][_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9wYWdlcy9sb2dpbi9wYXNzd29yZC1sb2dpbi9wYXNzd29yZC1sb2dpbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsaW5ncy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQzBHWTtFRHpHWixlQUFBO0FBREY7O0FBSUE7RUFDRSxxREFBQTtFQUNBLHlCQUFBO0VBQ0EsY0NtR1k7RURsR1osbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUdFO0VBQ0UsY0MwRlk7RUR6RlosMEJBQUE7QUFESjs7QUFLQTtFQUNFLG9CQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtBQUZGOztBQUtBO0VBQ0Usb0JBQUE7QUFGRjs7QUFLQTtFQUNFLFFBQUE7RUFDQSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3N0eWxpbmdzL3ZhcmlhYmxlc1wiO1xuXG4uaW5mby1pY29uIHtcbiAgY29sb3I6ICRwcmltYXJ5LTQwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5mby1wb3B1cCB7XG4gIGJveC1zaGFkb3c6IDAgMC42MjVyZW0gMXJlbSAwIHJnYmEoMjcsIDU0LCAxMDAsIDAuMjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICBjb2xvcjogJHByaW1hcnktNDAwO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogYXZhaWxhYmxlO1xuXG4gIC53ZWItbGluayB7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG5cbi5mb3Jnb3QtcHcge1xuICBtYXJnaW4tdG9wOiAxLjQzN3JlbVxufVxuXG4ucHctaW5wdXQtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDIuNzVyZW07XG59XG5cbi5sb2dpbi1idG4td3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDIuOTM3cmVtO1xufVxuXG4jdG9vbHRpcCB7XG4gIC8qIC4uLiAqL1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jdG9vbHRpcFtkYXRhLXNob3ddIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iLCIvL0BpbXBvcnQgXCJ+bm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9uc1wiO1xuLy9AaW1wb3J0IFwifm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcblxuJGJsdWUtcGFsZXR0ZTogKFxuICA1MDogI2U0ZTdlYyxcbiAgMTAwOiAjZTllYmYwLFxuICAyMDA6ICNjNmNjZGIsXG4gIDMwMDogIzhkOWJiMixcbiAgNDAwOiAjNTQ2ODhiLFxuICA1MDA6ICMxYjM2NjQsXG4gIDYwMDogIzE4MzA1YyxcbiAgNzAwOiAjMTQyOTUyLFxuICA4MDA6ICMxMDIyNDgsXG4gIDkwMDogIzA4MTYzNixcbiAgQTEwMDogIzZmOTJmZixcbiAgQTIwMDogIzNjNmNmZixcbiAgQTQwMDogIzA5NDVmZixcbiAgQTcwMDogIzAwM2FlZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogIzAwMDAwMCxcbiAgICAxMDA6ICMwMDAwMDAsXG4gICAgMjAwOiAjMDAwMDAwLFxuICAgIDMwMDogI2ZmZmZmZixcbiAgICA0MDA6ICNmZmZmZmYsXG4gICAgNTAwOiAjZmZmZmZmLFxuICAgIDYwMDogI2ZmZmZmZixcbiAgICA3MDA6ICNmZmZmZmYsXG4gICAgODAwOiAjZmZmZmZmLFxuICAgIDkwMDogI2ZmZmZmZixcbiAgICBBMTAwOiAjMDAwMDAwLFxuICAgIEEyMDA6ICNmZmZmZmYsXG4gICAgQTQwMDogI2ZmZmZmZixcbiAgICBBNzAwOiAjZmZmZmZmLFxuICApLFxuKTtcblxuJG9yYW5nZS1wYWxldHRlOiAoXG4gIDUwOiAjZmRlZGU1LFxuICAxMDA6ICNmZWYwZWEsXG4gIDIwMDogI2ZiZDljOCxcbiAgMzAwOiAjZjhiMzkyLFxuICA0MDA6ICNmNDhkNWIsXG4gIDUwMDogI2YwNjcyNCxcbiAgNjAwOiAjZWU1ZjIwLFxuICA3MDA6ICNlYzU0MWIsXG4gIDgwMDogI2U5NGExNixcbiAgOTAwOiAjZTUzOTBkLFxuICBBMTAwOiAjZmZmZmZmLFxuICBBMjAwOiAjZmZlM2RkLFxuICBBNDAwOiAjZmZiOGFhLFxuICBBNzAwOiAjZmZhMzkwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAjZmZmZmZmLFxuICAgIDEwMDogI2ZmZmZmZixcbiAgICAyMDA6ICNmZmZmZmYsXG4gICAgMzAwOiAjZmZmZmZmLFxuICAgIDQwMDogI2ZmZmZmZixcbiAgICA1MDA6ICNmZmZmZmYsXG4gICAgNjAwOiAjZmZmZmZmLFxuICAgIDcwMDogI2ZmZmZmZixcbiAgICA4MDA6ICNmZmZmZmYsXG4gICAgOTAwOiAjZmZmZmZmLFxuICAgIEExMDA6ICNmZmZmZmYsXG4gICAgQTIwMDogI2ZmZmZmZixcbiAgICBBNDAwOiAjZmZmZmZmLFxuICAgIEE3MDA6ICNmZmZmZmYsXG4gICksXG4pO1xuXG4kcmVkLXBhbGV0dGU6IChcbiAgNTA6ICNmZmViZWUsXG4gIDEwMDogI2ZmY2RkMixcbiAgMjAwOiAjZWY5YTlhLFxuICAzMDA6ICNlNTczNzMsXG4gIDQwMDogI2VmNTM1MCxcbiAgNTAwOiAjZmYwMDAwLFxuICA2MDA6ICNlNTM5MzUsXG4gIDcwMDogI2QzMmYyZixcbiAgODAwOiAjYzYyODI4LFxuICA5MDA6ICNiNzFjMWMsXG4gIEExMDA6ICNmZjhhODAsXG4gIEEyMDA6ICNmZjUyNTIsXG4gIEE0MDA6ICNmZjE3NDQsXG4gIEE3MDA6ICNkNTAwMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDEwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgMjAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICAzMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDQwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgNTAwOiB3aGl0ZSxcbiAgICA2MDA6IHdoaXRlLFxuICAgIDcwMDogd2hpdGUsXG4gICAgODAwOiB3aGl0ZSxcbiAgICA5MDA6IHdoaXRlLFxuICAgIEExMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIEEyMDA6IHdoaXRlLFxuICAgIEE0MDA6IHdoaXRlLFxuICAgIEE3MDA6IHdoaXRlLFxuICApXG4pO1xuXG4kcHJpbWFyeS1wYWxldHRlOiAkYmx1ZS1wYWxldHRlO1xuJGFjY2VudC1wYWxldHRlOiAkb3JhbmdlLXBhbGV0dGU7XG4kc2Vjb25kYXJ5LXBhbGV0dGU6ICRvcmFuZ2UtcGFsZXR0ZTtcblxuJHByaW1hcnktY29sb3I6IG1hcC1nZXQoJHByaW1hcnktcGFsZXR0ZSwgNTAwKTtcbiRzZWNvbmRhcnktY29sb3I6IG1hcC1nZXQoJHNlY29uZGFyeS1wYWxldHRlLCA1MDApO1xuJHNlY29uZGFyeS0zMDA6IG1hcC1nZXQoJHNlY29uZGFyeS1wYWxldHRlLCAzMDApO1xuJHByaW1hcnktNDAwOiBtYXAtZ2V0KCRwcmltYXJ5LXBhbGV0dGUsIDQwMCk7XG4kZXJyb3ItY29sb3I6IG1hcC1nZXQoJHJlZC1wYWxldHRlLCA1MDApO1xuXG4kbWF4LXdpZHRoOiAxMzY2cHg7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6608:
/*!*******************************************************************!*\
  !*** ./src/app/auth/pages/questions/index/questions.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsComponent": () => (/* binding */ QuestionsComponent)
/* harmony export */ });
/* harmony import */ var _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/enums/microservice-type.enum */ 7502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_dios_dios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/dios/dios.component */ 5367);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/base/base.component */ 8357);
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../question/question.component */ 3848);









function QuestionsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 19)(2, "app-question", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selected", function QuestionsComponent_div_14_Template_app_question_selected_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const question_r5 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.selectQuestion(question_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const question_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", "Question #" + (i_r6 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", question_r5.questionText)("checked", question_r5.selected);
  }
}
function QuestionsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 19)(2, "app-question", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selected", function QuestionsComponent_div_23_Template_app_question_selected_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const question_r9 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.selectQuestion(question_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const question_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", "Question #" + (i_r10 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", question_r9.questionText)("checked", question_r9.selected);
  }
}
function QuestionsComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 21)(2, "app-question", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selected", function QuestionsComponent_div_27_Template_app_question_selected_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const question_r13 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.selectQuestion(question_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const question_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("question-wrapper d-flex ", i_r14 % 2 === 0 ? "justify-content-center pe-5" : "ps-5 justify-content-lg-end", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", "Question #" + (i_r14 + 3 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", question_r13.questionText)("checked", question_r13.selected);
  }
}
function QuestionsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 22);
  }
}
function QuestionsComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 21)(2, "app-question", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selected", function QuestionsComponent_div_35_Template_app_question_selected_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const question_r17 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.selectQuestion(question_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const question_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("question-wrapper d-flex ", i_r18 % 2 === 0 ? "justify-content-end pe-5" : "ps-5 justify-content-start", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", "Question #" + (i_r18 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", question_r17.questionText)("checked", question_r17.selected);
  }
}
class QuestionsComponent {
  constructor(api, router) {
    this.api = api;
    this.router = router;
    this.questions = [];
    this.selected = [];
  }
  ngOnInit() {
    this.api.get('security-questions', _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_0__.MicroserviceType.au).subscribe(data => {
      this.questions = data;
      // this.selected = Array.from(Array(data.length), () => false)
      this.selected = this.questions.map(q => q.selected);
    });
  }
  evenQuestions() {
    return this.questions.slice(3).filter((_, i) => !(i % 2));
  }
  oddQuestions() {
    return this.questions.slice(3).filter((_, i) => i % 2);
  }
  evenIndex(i) {
    return 2 * (i + 1) + 1;
  }
  oddIndex(i) {
    return 2 * (i + 1) + 2;
  }
  selectQuestion(question) {
    question.selected = !question.selected;
    // this.selected[i] = this.selected[i] !== false ? false : i
    // $event.currentTarget.checked = !$event.currentTarget.checked
    // debugger
  }

  save() {
    const selected = this.questions.filter(q => q.selected).map(q => q.questionId);
    if (selected.length < 3) {
      this.error = 'Please select at least 3 questions';
      return;
    }
    // const selected = this.selected.filter(i => i !== false)
    this.api.post('security-questions', {
      questions: selected
    }, _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_0__.MicroserviceType.au).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
QuestionsComponent.ɵfac = function QuestionsComponent_Factory(t) {
  return new (t || QuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
QuestionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: QuestionsComponent,
  selectors: [["app-questions"]],
  decls: 39,
  vars: 5,
  consts: [["title", ""], [1, "pt-5", "pt-md-0"], [1, "mb-0", "descr"], [1, "d-md-none", "d-sm-block"], [1, "security-questions"], [1, "question-heading"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "btn-wrapper"], [1, "btn", "btn-primary", "btn-auth", 3, "click"], [1, "d-xl-block", "d-md-none", "d-none"], ["bottom", ""], [1, "security-questions", "d-flex", "align-items-center", "flex-column", "d-none", "d-xl-flex"], [1, "d-flex", "flex-wrap"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "question-wrapper d-flex 'justify-content-center pe-5'", 4, "ngIf"], [1, "security-questions", "tablet", "d-flex", "align-items-center", "flex-column", "d-sm-none", "d-xl-none", "d-md-flex"], [1, "divider"], [1, "question-heading", "text-center"], [1, "d-flex", "justify-content-center", "btn-wrapper", "d-sm-none", "d-md-flex"], [1, "question"], [3, "title", "text", "checked", "selected"], [1, "question", "w-100"], [1, "question-wrapper", "d-flex", "'justify-content-center", "pe-5'"]],
  template: function QuestionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-base")(1, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Welcome!");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div")(4, "div", 1)(5, "app-auth-dios");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Security questions");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Your account is missing the security questions. The questions are another layer of protection in case the access to email will be lost. Please select three questions from the list bellow. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 4)(12, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Select security questions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, QuestionsComponent_div_14_Template, 3, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 7)(16, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuestionsComponent_Template_button_click_16_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 4)(21, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Select security questions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, QuestionsComponent_div_23_Template, 3, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 10)(25, "div", 11)(26, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, QuestionsComponent_div_27_Template, 3, 6, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, QuestionsComponent_div_28_Template, 1, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 15)(30, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, " Select security questions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, QuestionsComponent_div_35_Template, 3, 6, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 18)(37, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuestionsComponent_Template_button_click_37_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.questions);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.questions.slice(0, 3));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.questions.slice(3));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.questions.length % 2 === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.questions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_dios_dios_component__WEBPACK_IMPORTED_MODULE_2__.DiosComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _components_base_base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent, _question_question_component__WEBPACK_IMPORTED_MODULE_4__.QuestionComponent],
  styles: ["[_nghost-%COMP%]     .mat-divider.mat-divider-horizontal {\n  margin: 2.875rem -1rem 2.375rem;\n}\n\n[_nghost-%COMP%]   .security-questions[_ngcontent-%COMP%]     .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.0392156863);\n}\n[_nghost-%COMP%]   .security-questions[_ngcontent-%COMP%]     .mat-form-field-flex .mat-form-field-suffix {\n  align-self: center;\n}\n[_nghost-%COMP%]   .security-questions[_ngcontent-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-form-field-flex {\n  background-color: rgba(255, 0, 0, 0.04);\n}\n[_nghost-%COMP%]   .security-questions[_ngcontent-%COMP%]     .mat-form-field.mat-form-field-invalid .mat-input-element {\n  color: #ff0000;\n}\n[_nghost-%COMP%]   .security-questions[_ngcontent-%COMP%]     .question .mat-form-field-label {\n  color: #1b3664;\n  font-family: Roboto, serif;\n  font-size: 1.125rem;\n}\n[_nghost-%COMP%]   .security-questions[_ngcontent-%COMP%]     .mat-input-element {\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.tablet[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 80%;\n}\n.tablet[_ngcontent-%COMP%]   .question-heading[_ngcontent-%COMP%] {\n  margin-bottom: 52px;\n}\n\n.question-heading[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  padding-bottom: 24.5px;\n}\n\n.question[_ngcontent-%COMP%] {\n  padding-bottom: 8.5px;\n}\n\n.btn-wrapper[_ngcontent-%COMP%] {\n  padding-top: 33px;\n}\n\n.descr[_ngcontent-%COMP%] {\n  margin-top: 1.625rem;\n}\n\n.question-wrapper[_ngcontent-%COMP%] {\n  flex: 50%;\n  width: 100%;\n}\n.question-wrapper[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%] {\n  max-width: 380px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9wYWdlcy9xdWVzdGlvbnMvaW5kZXgvcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxpbmdzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLCtCQUFBO0FBRko7O0FBT0U7RUFDRSw2Q0FBQTtBQUpKO0FBTUk7RUFDRSxrQkFBQTtBQUpOO0FBU0k7RUFDRSx1Q0FBQTtBQVBOO0FBV0k7RUFDRSxjQ3NGUTtBRC9GZDtBQWNJO0VBQ0UsY0M0RVU7RUQzRVYsMEJBQUE7RUFDQSxtQkFBQTtBQVpOO0FBZ0JFO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBQWRKOztBQW1CRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBaEJKO0FBa0JFO0VBQ0UsbUJBQUE7QUFoQko7O0FBb0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFqQkY7O0FBb0JBO0VBQ0UscUJBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsaUJBQUE7QUFqQkY7O0FBb0JBO0VBQ0Usb0JBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7QUFqQkY7QUFtQkU7RUFDRSxnQkFBQTtBQWpCSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGluZ3MvdmFyaWFibGVzXCI7XG5cbjpob3N0IDo6bmctZGVlcCB7XG4gIC5tYXQtZGl2aWRlci5tYXQtZGl2aWRlci1ob3Jpem9udGFsIHtcbiAgICBtYXJnaW46IDIuODc1cmVtIC0xcmVtIDIuMzc1cmVtO1xuICB9XG59XG5cbjpob3N0IC5zZWN1cml0eS1xdWVzdGlvbnMgOjpuZy1kZWVwIHtcbiAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwYTtcblxuICAgIC5tYXQtZm9ybS1maWVsZC1zdWZmaXgge1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4wNCk7XG4gICAgICAvL2JhY2tncm91bmQtY29sb3I6ICNmZjAwMDAwYTtcbiAgICB9XG5cbiAgICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgICAgY29sb3I6ICRlcnJvci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAucXVlc3Rpb24ge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgfVxuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIH1cbn1cblxuLnRhYmxldCB7XG4gIC5kaXZpZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgfVxuICAucXVlc3Rpb24taGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTJweDtcbiAgfVxufVxuXG4ucXVlc3Rpb24taGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDI0LjVweDtcbn1cblxuLnF1ZXN0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDguNXB4O1xufVxuXG4uYnRuLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogMzNweDtcbn1cblxuLmRlc2NyIHtcbiAgbWFyZ2luLXRvcDogMS42MjVyZW1cbn1cblxuLnF1ZXN0aW9uLXdyYXBwZXIge1xuICBmbGV4OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5xdWVzdGlvbiB7XG4gICAgbWF4LXdpZHRoOiAzODBweDtcbiAgfVxufVxuXG4iLCIvL0BpbXBvcnQgXCJ+bm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9uc1wiO1xuLy9AaW1wb3J0IFwifm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcblxuJGJsdWUtcGFsZXR0ZTogKFxuICA1MDogI2U0ZTdlYyxcbiAgMTAwOiAjZTllYmYwLFxuICAyMDA6ICNjNmNjZGIsXG4gIDMwMDogIzhkOWJiMixcbiAgNDAwOiAjNTQ2ODhiLFxuICA1MDA6ICMxYjM2NjQsXG4gIDYwMDogIzE4MzA1YyxcbiAgNzAwOiAjMTQyOTUyLFxuICA4MDA6ICMxMDIyNDgsXG4gIDkwMDogIzA4MTYzNixcbiAgQTEwMDogIzZmOTJmZixcbiAgQTIwMDogIzNjNmNmZixcbiAgQTQwMDogIzA5NDVmZixcbiAgQTcwMDogIzAwM2FlZixcbiAgY29udHJhc3Q6IChcbiAgICA1MDogIzAwMDAwMCxcbiAgICAxMDA6ICMwMDAwMDAsXG4gICAgMjAwOiAjMDAwMDAwLFxuICAgIDMwMDogI2ZmZmZmZixcbiAgICA0MDA6ICNmZmZmZmYsXG4gICAgNTAwOiAjZmZmZmZmLFxuICAgIDYwMDogI2ZmZmZmZixcbiAgICA3MDA6ICNmZmZmZmYsXG4gICAgODAwOiAjZmZmZmZmLFxuICAgIDkwMDogI2ZmZmZmZixcbiAgICBBMTAwOiAjMDAwMDAwLFxuICAgIEEyMDA6ICNmZmZmZmYsXG4gICAgQTQwMDogI2ZmZmZmZixcbiAgICBBNzAwOiAjZmZmZmZmLFxuICApLFxuKTtcblxuJG9yYW5nZS1wYWxldHRlOiAoXG4gIDUwOiAjZmRlZGU1LFxuICAxMDA6ICNmZWYwZWEsXG4gIDIwMDogI2ZiZDljOCxcbiAgMzAwOiAjZjhiMzkyLFxuICA0MDA6ICNmNDhkNWIsXG4gIDUwMDogI2YwNjcyNCxcbiAgNjAwOiAjZWU1ZjIwLFxuICA3MDA6ICNlYzU0MWIsXG4gIDgwMDogI2U5NGExNixcbiAgOTAwOiAjZTUzOTBkLFxuICBBMTAwOiAjZmZmZmZmLFxuICBBMjAwOiAjZmZlM2RkLFxuICBBNDAwOiAjZmZiOGFhLFxuICBBNzAwOiAjZmZhMzkwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAjZmZmZmZmLFxuICAgIDEwMDogI2ZmZmZmZixcbiAgICAyMDA6ICNmZmZmZmYsXG4gICAgMzAwOiAjZmZmZmZmLFxuICAgIDQwMDogI2ZmZmZmZixcbiAgICA1MDA6ICNmZmZmZmYsXG4gICAgNjAwOiAjZmZmZmZmLFxuICAgIDcwMDogI2ZmZmZmZixcbiAgICA4MDA6ICNmZmZmZmYsXG4gICAgOTAwOiAjZmZmZmZmLFxuICAgIEExMDA6ICNmZmZmZmYsXG4gICAgQTIwMDogI2ZmZmZmZixcbiAgICBBNDAwOiAjZmZmZmZmLFxuICAgIEE3MDA6ICNmZmZmZmYsXG4gICksXG4pO1xuXG4kcmVkLXBhbGV0dGU6IChcbiAgNTA6ICNmZmViZWUsXG4gIDEwMDogI2ZmY2RkMixcbiAgMjAwOiAjZWY5YTlhLFxuICAzMDA6ICNlNTczNzMsXG4gIDQwMDogI2VmNTM1MCxcbiAgNTAwOiAjZmYwMDAwLFxuICA2MDA6ICNlNTM5MzUsXG4gIDcwMDogI2QzMmYyZixcbiAgODAwOiAjYzYyODI4LFxuICA5MDA6ICNiNzFjMWMsXG4gIEExMDA6ICNmZjhhODAsXG4gIEEyMDA6ICNmZjUyNTIsXG4gIEE0MDA6ICNmZjE3NDQsXG4gIEE3MDA6ICNkNTAwMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDEwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgMjAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICAzMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDQwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgNTAwOiB3aGl0ZSxcbiAgICA2MDA6IHdoaXRlLFxuICAgIDcwMDogd2hpdGUsXG4gICAgODAwOiB3aGl0ZSxcbiAgICA5MDA6IHdoaXRlLFxuICAgIEExMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIEEyMDA6IHdoaXRlLFxuICAgIEE0MDA6IHdoaXRlLFxuICAgIEE3MDA6IHdoaXRlLFxuICApXG4pO1xuXG4kcHJpbWFyeS1wYWxldHRlOiAkYmx1ZS1wYWxldHRlO1xuJGFjY2VudC1wYWxldHRlOiAkb3JhbmdlLXBhbGV0dGU7XG4kc2Vjb25kYXJ5LXBhbGV0dGU6ICRvcmFuZ2UtcGFsZXR0ZTtcblxuJHByaW1hcnktY29sb3I6IG1hcC1nZXQoJHByaW1hcnktcGFsZXR0ZSwgNTAwKTtcbiRzZWNvbmRhcnktY29sb3I6IG1hcC1nZXQoJHNlY29uZGFyeS1wYWxldHRlLCA1MDApO1xuJHNlY29uZGFyeS0zMDA6IG1hcC1nZXQoJHNlY29uZGFyeS1wYWxldHRlLCAzMDApO1xuJHByaW1hcnktNDAwOiBtYXAtZ2V0KCRwcmltYXJ5LXBhbGV0dGUsIDQwMCk7XG4kZXJyb3ItY29sb3I6IG1hcC1nZXQoJHJlZC1wYWxldHRlLCA1MDApO1xuXG4kbWF4LXdpZHRoOiAxMzY2cHg7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3848:
/*!*********************************************************************!*\
  !*** ./src/app/auth/pages/questions/question/question.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionComponent": () => (/* binding */ QuestionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);



class QuestionComponent {
  constructor() {
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  click() {
    this.selected.emit();
  }
}
QuestionComponent.ɵfac = function QuestionComponent_Factory(t) {
  return new (t || QuestionComponent)();
};
QuestionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: QuestionComponent,
  selectors: [["app-question"]],
  inputs: {
    title: "title",
    text: "text",
    number: "number",
    checked: "checked"
  },
  outputs: {
    selected: "selected"
  },
  decls: 6,
  vars: 3,
  consts: [["appearance", "fill", 1, "w-100"], ["disabled", "", "cdkTextareaAutosize", "", "matInput", ""], ["type", "radio", "mat-icon-button", "", "matSuffix", "", 1, "form-check-input", 3, "checked", "click"]],
  template: function QuestionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_Template_input_click_5_listener() {
        return ctx.click();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked !== false);
    }
  },
  dependencies: [_angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_1__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_1__.MatLegacyLabel, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_1__.MatLegacySuffix],
  encapsulation: 2
});

/***/ }),

/***/ 454:
/*!***********************************************************************!*\
  !*** ./src/app/auth/pages/reset-password/reset-password.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _core_common_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/form */ 1201);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/input/input.component */ 2371);
/* harmony import */ var _shared_components_dios_dios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/dios/dios.component */ 5367);
/* harmony import */ var _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/loading.directive */ 3570);
/* harmony import */ var _core_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/../shared/components/alert/alert.component */ 8332);
/* harmony import */ var _components_base_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/base/base.component */ 8357);













function ResetPasswordComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 5)(2, "app-alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Your password has been changed successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 6)(5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function ResetPasswordComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Reset your password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 13)(7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ResetPasswordComponent_ng_template_9_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Set a new password");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx_r2.form.controls["password"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", ctx_r2.form.controls["newPassword"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appLoading", ctx_r2.loading);
  }
}
class ResetPasswordComponent extends _core_common_form__WEBPACK_IMPORTED_MODULE_0__.Form {
  constructor(api, route, fb) {
    super();
    this.api = api;
    this.route = route;
    this.done = false;
    this.loading = false;
    this.formFields = {
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
    };
    this._initFormControl(fb, this.formFields);
  }
  reset() {
    if (!this.form.valid) {
      return;
    }
    const password = this.form.controls['password'].value;
    const newPassword = this.form.controls['newPassword'].value;
    if (password != newPassword) {
      this.setError('newPassword', 'not_match', true);
      return;
    }
    this.loading = true;
    const data = {
      password,
      newPassword,
      token: this.route.snapshot.paramMap.get('token')
    };
    this.api.post('user/reset-password', data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => this.loading = false)).subscribe(() => {
      this.done = true;
    });
  }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
  return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder));
};
ResetPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ResetPasswordComponent,
  selectors: [["app-forgot-password"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 11,
  vars: 3,
  consts: [["title", ""], [3, "formGroup"], [1, "pt-5", "pt-md-0"], [4, "ngIf", "ngIfElse"], ["passwordTmpl", ""], [1, "alert-wrapper"], [1, "d-flex", "justify-content-center"], ["routerLink", "/auth/login", 1, "btn", "btn-primary", "btn-auth"], [1, "mt-3", "mb-0"], [1, "d-flex", "mt-md-5", "mt-6"], ["label", "Type your new password", "type", "password", 1, "w-100", 3, "control"], [1, "d-flex", "retype-pw"], ["label", "Retype your new password", "type", "password", 1, "w-100", 3, "control"], [1, "d-flex", "justify-content-center", "reset-pw-wrapper"], [1, "btn", "btn-primary", "btn-auth", 3, "appLoading", "click"]],
  template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-base")(1, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Welcome!");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div")(4, "form", 1)(5, "div", 2)(6, "app-auth-dios");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Auth");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ResetPasswordComponent_div_8_Template, 7, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ResetPasswordComponent_ng_template_9_Template, 9, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.done)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_2__.InputComponent, _shared_components_dios_dios_component__WEBPACK_IMPORTED_MODULE_3__.DiosComponent, _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_4__.LoadingDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _core_shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _components_base_base_component__WEBPACK_IMPORTED_MODULE_6__.BaseComponent],
  styles: [".retype-pw[_ngcontent-%COMP%] {\n  margin-top: 1.375rem;\n}\n@media screen and (min-width: 768px) {\n  .retype-pw[_ngcontent-%COMP%] {\n    margin-top: 0.469rem;\n  }\n}\n\n.alert-wrapper[_ngcontent-%COMP%] {\n  padding-top: 6.63rem;\n  padding-bottom: 6.25rem;\n}\n@media screen and (min-width: 768px) {\n  .alert-wrapper[_ngcontent-%COMP%] {\n    padding-bottom: 2.125rem;\n  }\n}\n\n.reset-pw-wrapper[_ngcontent-%COMP%] {\n  margin-top: 5.844rem;\n}\n.reset-pw-wrapper[_ngcontent-%COMP%]   .btn-auth[_ngcontent-%COMP%] {\n  padding: 0;\n  min-width: 296px;\n}\n@media screen and (min-width: 768px) {\n  .reset-pw-wrapper[_ngcontent-%COMP%] {\n    margin-top: 4.219rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9wYWdlcy9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG9CQUFBO0FBRkY7QUFJRTtFQUhGO0lBSUksb0JBQUE7RUFERjtBQUNGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtBQURGO0FBR0U7RUFKRjtJQUtJLHdCQUFBO0VBQUY7QUFDRjs7QUFJQTtFQUNFLG9CQUFBO0FBREY7QUFHRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUU7RUFSRjtJQVNJLG9CQUFBO0VBREY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3Nhc3M6bWFwJztcbkBpbXBvcnQgXCJzcmMvc3R5bGluZ3MvYnNfdmFyaWFibGVzXCI7XG5cbi5yZXR5cGUtcHcge1xuICBtYXJnaW4tdG9wOiAxLjM3NXJlbTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIG1hcmdpbi10b3A6IDAuNDY5cmVtO1xuICB9XG59XG5cbi5hbGVydC13cmFwcGVyIHtcbiAgcGFkZGluZy10b3A6IDYuNjNyZW07XG4gIHBhZGRpbmctYm90dG9tOiA2LjI1cmVtO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC5nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuMTI1cmVtO1xuICB9XG5cbn1cblxuLnJlc2V0LXB3LXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiA1Ljg0NHJlbTtcblxuICAuYnRuLWF1dGgge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWluLXdpZHRoOiAyOTZweDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC5nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgbWFyZ2luLXRvcDogNC4yMTlyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1201:
/*!*************************************!*\
  !*** ./src/app/core/common/form.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class Form {
  getError(field, error) {
    return this.form.controls[field]?.errors?.[error];
  }
  setError(field, error, message = true) {
    this.form.controls[field].setErrors({
      [error]: message
    });
  }
  _initFormControl(fb, formFields) {
    this.form = fb.group(formFields);
  }
  addController(name, val = '', ops = null) {
    if (!this.form.contains(name)) {
      this.form.addControl(name, new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(val, ops));
    }
  }
}
Form.ɵfac = function Form_Factory(t) {
  return new (t || Form)();
};
Form.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: Form
});

/***/ }),

/***/ 4842:
/*!**************************************!*\
  !*** ./src/app/core/common/form2.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/auto-destroy */ 7990);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




const _c0 = ["saveBtn"];
const _c1 = ["cancelBtn"];
class Form extends _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__.AutoDestroy {
  getError(field, error) {
    return this.form.controls[field]?.errors?.[error];
  }
  setError(field, error, message = true) {
    this.form.controls[field].setErrors({
      [error]: message
    });
  }
  getFC(name, i = null, validations = null) {
    name = this.getFCName(name, i, null, validations);
    return this.form.controls[name];
  }
  getFCValue(name, i = null) {
    if (i !== null) {
      name = `${name}-${i}`;
    }
    return this.form.controls[name]?.value;
  }
  _initFormControl(fb, formFields, validators = null) {
    let options = {};
    if (validators) {
      options = {
        validators
      };
      // options['validators'] = validators
    }

    this.form = fb.group(formFields, options);
    // this.form = new FormGroup<any>(formFields, options)
  }

  addController(name, val = null, ops = null) {
    if (!this.form.contains(name)) {
      this.form.addControl(name, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(val, ops));
    }
    if (val !== null) {
      this.form.controls[name].setValue(val);
    }
  }
  setFCBYName(name, i, val = '', validations = null) {
    return this.getFCName(name, i, val, validations);
  }
  /**
   * disable form buttons
   */
  handleSubmit() {
    const saveBtn = this.saveButton.nativeElement;
    const cancelBtn = this.cancelButton?.nativeElement;
    if (cancelBtn) {
      cancelBtn.disabled = true;
    }
    saveBtn.disabled = true;
    saveBtn.dataset['innerHtml'] = saveBtn.innerHTML;
    this.saveButton.nativeElement.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
      saveBtn.innerHTML = saveBtn.dataset['innerHtml'];
      saveBtn.disabled = false;
      if (cancelBtn) {
        cancelBtn.disabled = false;
      }
    });
  }
  getFCName(name, i, val = '', validations) {
    if (i !== null) {
      name = `${name}-${i}`;
    }
    const validators = [];
    validations?.forEach(v => validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators[v]));
    this.addController(name, val, validators);
    return name;
  }
}
Form.ɵfac = /*@__PURE__*/function () {
  let ɵForm_BaseFactory;
  return function Form_Factory(t) {
    return (ɵForm_BaseFactory || (ɵForm_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](Form)))(t || Form);
  };
}();
Form.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: Form,
  viewQuery: function Form_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.saveButton = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cancelButton = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
});

/***/ }),

/***/ 7909:
/*!************************************************!*\
  !*** ./src/app/core/guards/anonymous.guard.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnonymousGuard": () => (/* binding */ AnonymousGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/local-storage.service */ 4617);



class AnonymousGuard {
  constructor(router, localStorage) {
    this.router = router;
    this.localStorage = localStorage;
  }
  canActivate() {
    const isAuthenticated = !!this.localStorage.token;
    if (isAuthenticated) {
      return this.router.navigate(['/']);
    }
    return true;
  }
}
AnonymousGuard.ɵfac = function AnonymousGuard_Factory(t) {
  return new (t || AnonymousGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService));
};
AnonymousGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AnonymousGuard,
  factory: AnonymousGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7574:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/local-storage.service */ 4617);



class AuthGuard {
  constructor(router, ls) {
    this.router = router;
    this.ls = ls;
  }
  canActivate() {
    const isAuthenticated = !!this.ls.token;
    if (isAuthenticated) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8332:
/*!************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["*"];
class AlertComponent {
  constructor() {
    this.type = 'success';
  }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) {
  return new (t || AlertComponent)();
};
AlertComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AlertComponent,
  selectors: [["app-alert"]],
  inputs: {
    type: "type"
  },
  ngContentSelectors: _c0,
  decls: 4,
  vars: 1,
  consts: [["role", "alert", 1, "alert", "alert-primary", "d-flex", "align-items-center"], ["alt", "service-icon", 1, "rounded-circle", 3, "src"], [1, "text-center", "flex-grow-1", "content"]],
  template: function AlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/icons/", ctx.type, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    }
  },
  styles: [".content[_ngcontent-%COMP%] {\n  padding-right: 2rem;\n  padding-left: 0.81rem;\n}\n@media screen and (max-width: 576px) {\n  .content[_ngcontent-%COMP%] {\n    padding-right: 0.81rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxtQkFBQTtFQU9BLHFCQUFBO0FBUkY7QUFHRTtFQUhGO0lBSUksc0JBQUE7RUFBRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2FzczptYXAnO1xuQGltcG9ydCAnc3JjL3N0eWxpbmdzL2JzX3ZhcmlhYmxlcyc7XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuODFyZW07XG4gIH1cblxuXG4gIHBhZGRpbmctbGVmdDogMC44MXJlbVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1994:
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/createPopper.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "popperGenerator": () => (/* binding */ popperGenerator)
/* harmony export */ });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ 7633);
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ 2096);
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ 2500);
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ 9999);
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ 1958);
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/orderModifiers.js */ 2637);
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/debounce.js */ 5269);
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/validateModifiers.js */ 8504);
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/uniqueBy.js */ 6945);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ 4041);
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/mergeByName.js */ 2506);
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/detectOverflow.js */ 4866);
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ 9617);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums.js */ 8843);














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions,
    _generatorOptions$def = _generatorOptions.defaultModifiers,
    defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
    _generatorOptions$def2 = _generatorOptions.defaultOptions,
    defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: (0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(reference) ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(reference) : reference.contextElement ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(reference.contextElement) : [],
          popper: (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = (0,_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = (0,_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__["default"])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          (0,_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__["default"])(modifiers);
          if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_7__.auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }
          var _getComputedStyle = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"])(popper),
            marginTop = _getComputedStyle.marginTop,
            marginRight = _getComputedStyle.marginRight,
            marginBottom = _getComputedStyle.marginBottom,
            marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer

          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements,
          reference = _state$elements.reference,
          popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        } // Store the reference and popper rects to be read by modifiers

        state.rects = {
          reference: (0,_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__["default"])(reference, (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__["default"])(popper), state.options.strategy === 'fixed'),
          popper: (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__["default"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index],
            fn = _state$orderedModifie.fn,
            _state$orderedModifie2 = _state$orderedModifie.options,
            _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
            name = _state$orderedModifie.name;
          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
          _ref3$options = _ref3.options,
          options = _ref3$options === void 0 ? {} : _ref3$options,
          effect = _ref3.effect;
        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });
          var noopFn = function noopFn() {};
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ 8154:
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contains)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ 9617);

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      } // $FlowFixMe[prop-missing]: need a better way to handle this...

      next = next.parentNode || next.host;
    } while (next);
  } // Give up, the result is false

  return false;
}

/***/ }),

/***/ 1801:
/*!****************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBoundingClientRect)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ 9617);
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math.js */ 1332);
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ 5961);
/* harmony import */ var _isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLayoutViewport.js */ 9847);




function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {
    scaleX = element.offsetWidth > 0 ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_1__.round)(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_1__.round)(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element) : window,
    visualViewport = _ref.visualViewport;
  var addVisualOffsets = !(0,_isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__["default"])() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

/***/ }),

/***/ 6563:
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getClippingRect)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ 8843);
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getViewportRect.js */ 631);
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentRect.js */ 7541);
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listScrollParents.js */ 2500);
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getOffsetParent.js */ 9999);
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDocumentElement.js */ 3612);
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getComputedStyle.js */ 1958);
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instanceOf.js */ 9617);
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ 1801);
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getParentNode.js */ 4377);
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contains.js */ 8154);
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getNodeName.js */ 6498);
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ 4444);
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math.js */ 1332);














function getInnerBoundingClientRect(element, strategy) {
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_1__.viewport ? (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element, strategy)) : (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`

function getClippingParents(element) {
  var clippingParents = (0,_listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element).position) >= 0;
  var clipperElement = canEscapeClipping && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(element) ? (0,_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__["default"])(element) : element;
  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414

  return clippingParents.filter(function (clippingParent) {
    return (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) && (0,_contains_js__WEBPACK_IMPORTED_MODULE_11__["default"])(clippingParent, clipperElement) && (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_12__["default"])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents

function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.top, accRect.top);
    accRect.right = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.right, accRect.right);
    accRect.bottom = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.bottom, accRect.bottom);
    accRect.left = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ 7633:
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCompositeRect)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBoundingClientRect.js */ 1801);
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getNodeScroll.js */ 1705);
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNodeName.js */ 6498);
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ 9617);
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ 7598);
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ 3612);
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isScrollParent.js */ 2228);
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math.js */ 1332);








function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(rect.width) / element.offsetWidth || 1;
  var scaleY = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent);
  var offsetParentIsScaled = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);
  var documentElement = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent);
  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) !== 'body' ||
    // https://github.com/popperjs/popper-core/issues/1078
    (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_5__["default"])(documentElement)) {
      scroll = (0,_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_6__["default"])(offsetParent);
    }
    if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent)) {
      offsets = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_7__["default"])(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ 1958:
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getComputedStyle)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ 5961);

function getComputedStyle(element) {
  return (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}

/***/ }),

/***/ 3612:
/*!*************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentElement)
/* harmony export */ });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ 9617);

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? element.ownerDocument :
  // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),

/***/ 7541:
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDocumentRect)
/* harmony export */ });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ 3612);
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getComputedStyle.js */ 1958);
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ 7598);
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindowScroll.js */ 3983);
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math.js */ 1332);




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var winScroll = (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var y = -winScroll.scrollTop;
  if ((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(body || html).direction === 'rtl') {
    x += (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),

/***/ 9578:
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHTMLElementScroll)
/* harmony export */ });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ 2096:
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLayoutRect)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ 1801);
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

/***/ }),

/***/ 6498:
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeName)
/* harmony export */ });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ 1705:
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNodeScroll)
/* harmony export */ });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ 3983);
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ 5961);
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ 9617);
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ 9578);




function getNodeScroll(node) {
  if (node === (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node) || !(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node)) {
    return (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node);
  } else {
    return (0,_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}

/***/ }),

/***/ 9999:
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOffsetParent)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getWindow.js */ 5961);
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNodeName.js */ 6498);
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ 1958);
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ 9617);
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isTableElement.js */ 7399);
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ 4377);
/* harmony import */ var _utils_userAgent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/userAgent.js */ 9698);







function getTrueOffsetParent(element) {
  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) ||
  // https://github.com/popperjs/popper-core/issues/837
  (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element).position === 'fixed') {
    return null;
  }
  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block

function getContainingBlock(element) {
  var isFirefox = /firefox/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  var isIE = /Trident/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  if (isIE && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
    if (elementCss.position === 'fixed') {
      return null;
    }
  }
  var currentNode = (0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(currentNode)) {
    currentNode = currentNode.host;
  }
  while ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(currentNode)) < 0) {
    var css = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.

function getOffsetParent(element) {
  var window = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && (0,_isTableElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(offsetParent) && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) === 'html' || (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) === 'body' && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent).position === 'static')) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),

/***/ 4377:
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getParentNode)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ 6498);
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ 3612);
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ 9617);



function getParentNode(element) {
  if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot ||
    // step into the shadow DOM of the parent of a slotted node
    element.parentNode || (
    // DOM Element detected
    (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isShadowRoot)(element) ? element.host : null) ||
    // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element) // fallback
  );
}

/***/ }),

/***/ 9836:
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getScrollParent)
/* harmony export */ });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ 4377);
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ 2228);
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ 6498);
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ 9617);




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }
  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node) && (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) {
    return node;
  }
  return getScrollParent((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node));
}

/***/ }),

/***/ 631:
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getViewportRect)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ 5961);
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ 3612);
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ 7598);
/* harmony import */ var _isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLayoutViewport.js */ 9847);




function getViewportRect(element, strategy) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = (0,_isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width: width,
    height: height,
    x: x + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element),
    y: y
  };
}

/***/ }),

/***/ 5961:
/*!****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindow)
/* harmony export */ });
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

/***/ }),

/***/ 3983:
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScroll)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ 5961);

function getWindowScroll(node) {
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ 7598:
/*!**************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWindowScrollBarX)
/* harmony export */ });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ 1801);
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ 3612);
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ 3983);



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}

/***/ }),

/***/ 9617:
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "isHTMLElement": () => (/* binding */ isHTMLElement),
/* harmony export */   "isShadowRoot": () => (/* binding */ isShadowRoot)
/* harmony export */ });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ 5961);

function isElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}


/***/ }),

/***/ 9847:
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLayoutViewport)
/* harmony export */ });
/* harmony import */ var _utils_userAgent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/userAgent.js */ 9698);

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
}

/***/ }),

/***/ 2228:
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isScrollParent)
/* harmony export */ });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ 1958);

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
    overflow = _getComputedStyle.overflow,
    overflowX = _getComputedStyle.overflowX,
    overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ 7399:
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTableElement)
/* harmony export */ });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ 6498);

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}

/***/ }),

/***/ 2500:
/*!************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listScrollParents)
/* harmony export */ });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ 9836);
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ 4377);
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ 5961);
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ 2228);




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = (0,_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList :
  // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__["default"])(target)));
}

/***/ }),

/***/ 8843:
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/enums.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "afterMain": () => (/* binding */ afterMain),
/* harmony export */   "afterRead": () => (/* binding */ afterRead),
/* harmony export */   "afterWrite": () => (/* binding */ afterWrite),
/* harmony export */   "auto": () => (/* binding */ auto),
/* harmony export */   "basePlacements": () => (/* binding */ basePlacements),
/* harmony export */   "beforeMain": () => (/* binding */ beforeMain),
/* harmony export */   "beforeRead": () => (/* binding */ beforeRead),
/* harmony export */   "beforeWrite": () => (/* binding */ beforeWrite),
/* harmony export */   "bottom": () => (/* binding */ bottom),
/* harmony export */   "clippingParents": () => (/* binding */ clippingParents),
/* harmony export */   "end": () => (/* binding */ end),
/* harmony export */   "left": () => (/* binding */ left),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "modifierPhases": () => (/* binding */ modifierPhases),
/* harmony export */   "placements": () => (/* binding */ placements),
/* harmony export */   "popper": () => (/* binding */ popper),
/* harmony export */   "read": () => (/* binding */ read),
/* harmony export */   "reference": () => (/* binding */ reference),
/* harmony export */   "right": () => (/* binding */ right),
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "top": () => (/* binding */ top),
/* harmony export */   "variationPlacements": () => (/* binding */ variationPlacements),
/* harmony export */   "viewport": () => (/* binding */ viewport),
/* harmony export */   "write": () => (/* binding */ write)
/* harmony export */ });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ 1822:
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ 6498);
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ 9617);

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]

    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];
      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),

/***/ 4812:
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mapToStyles": () => (/* binding */ mapToStyles)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ 8843);
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ 9999);
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ 5961);
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ 3612);
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ 1958);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ 4041);
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getVariation.js */ 356);
/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math.js */ 1332);







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
    y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(x * dpr) / dpr || 0,
    y: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper = _ref2.popper,
    popperRect = _ref2.popperRect,
    placement = _ref2.placement,
    variation = _ref2.variation,
    offsets = _ref2.offsets,
    position = _ref2.position,
    gpuAcceleration = _ref2.gpuAcceleration,
    adaptive = _ref2.adaptive,
    roundOffsets = _ref2.roundOffsets,
    isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
    x = _offsets$x === void 0 ? 0 : _offsets$x,
    _offsets$y = offsets.y,
    y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.left;
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;
  var win = window;
  if (adaptive) {
    var offsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';
    if (offsetParent === (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper)) {
      offsetParent = (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(popper);
      if ((0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    offsetParent = offsetParent;
    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left || placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.right) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_1__.end) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height :
      // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top || placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_1__.end) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width :
      // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state,
    options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
    gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
    _options$adaptive = options.adaptive,
    adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
    _options$roundOffsets = options.roundOffsets,
    roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.elements.popper).transitionProperty || '';
    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }
  var commonStyles = {
    placement: (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.placement),
    variation: (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ 6072:
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ 5961);
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state,
    instance = _ref.instance,
    options = _ref.options;
  var _options$scroll = options.scroll,
    scroll = _options$scroll === void 0 ? true : _options$scroll,
    _options$resize = options.resize,
    resize = _options$resize === void 0 ? true : _options$resize;
  var window = (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }
  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }
  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }
    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ 4346:
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ 5114);

function popperOffsets(_ref) {
  var state = _ref.state,
    name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = (0,_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ 3176:
/*!********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper-lite.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopper": () => (/* binding */ createPopper),
/* harmony export */   "defaultModifiers": () => (/* binding */ defaultModifiers),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "popperGenerator": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator)
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPopper.js */ 1994);
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPopper.js */ 4866);
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ 6072);
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ 4346);
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ 4812);
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ 1822);





var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ 5114:
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeOffsets)
/* harmony export */ });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ 4041);
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ 356);
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ 2168);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ 8843);




function computeOffsets(_ref) {
  var reference = _ref.reference,
    element = _ref.element,
    placement = _ref.placement;
  var basePlacement = placement ? (0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }
  var mainAxis = basePlacement ? (0,_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';
    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;
      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

/***/ }),

/***/ 5269:
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ debounce)
/* harmony export */ });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }
    return pending;
  };
}

/***/ }),

/***/ 4866:
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ detectOverflow)
/* harmony export */ });
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ 6563);
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ 3612);
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ 1801);
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./computeOffsets.js */ 5114);
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rectToClientRect.js */ 4444);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ 8843);
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ 9617);
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergePaddingObject.js */ 4971);
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandToHashMap.js */ 9644);








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    _options$placement = _options.placement,
    placement = _options$placement === void 0 ? state.placement : _options$placement,
    _options$strategy = _options.strategy,
    strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
    _options$boundary = _options.boundary,
    boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents : _options$boundary,
    _options$rootBoundary = _options.rootBoundary,
    rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport : _options$rootBoundary,
    _options$elementConte = _options.elementContext,
    elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper : _options$elementConte,
    _options$altBoundary = _options.altBoundary,
    altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
    _options$padding = _options.padding,
    padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = (0,_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(typeof padding !== 'number' ? padding : (0,_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference : _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = (0,_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(element) ? element : element.contextElement || (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = (0,_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.reference);
  var popperOffsets = (0,_computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = (0,_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }
  return overflowOffsets;
}

/***/ }),

/***/ 9644:
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ expandToHashMap)
/* harmony export */ });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ 6022:
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/format.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),

/***/ 4041:
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBasePlacement)
/* harmony export */ });

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ 9885:
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFreshSideObject)
/* harmony export */ });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ 2168:
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMainAxisFromPlacement)
/* harmony export */ });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ 356:
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getVariation)
/* harmony export */ });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ 1332:
/*!*******************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/math.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "round": () => (/* binding */ round)
/* harmony export */ });
var max = Math.max;
var min = Math.min;
var round = Math.round;

/***/ }),

/***/ 2506:
/*!**************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeByName)
/* harmony export */ });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ 4971:
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergePaddingObject)
/* harmony export */ });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ 9885);

function mergePaddingObject(paddingObject) {
  return Object.assign({}, (0,_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(), paddingObject);
}

/***/ }),

/***/ 2637:
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ orderModifiers)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ 8843);
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ 4444:
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rectToClientRect)
/* harmony export */ });
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ 6945:
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/uniqueBy.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uniqueBy)
/* harmony export */ });
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),

/***/ 9698:
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/userAgent.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUAString)
/* harmony export */ });
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }
  return navigator.userAgent;
}

/***/ }),

/***/ 8504:
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/validateModifiers.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateModifiers)
/* harmony export */ });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ 6022);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ 8843);


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }
          break;
        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }
          break;
        case 'phase':
          if (_enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.indexOf(modifier.phase) < 0) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }
          break;
        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }
          break;
        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }
          break;
        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }
          break;
        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }
          break;
        case 'options':
        case 'data':
          break;
        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }
      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),

/***/ 2981:
/*!************************************************************!*\
  !*** ./node_modules/ng-otp-input/fesm2015/ng-otp-input.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgOtpInputComponent": () => (/* binding */ NgOtpInputComponent),
/* harmony export */   "NgOtpInputConfig": () => (/* binding */ Config),
/* harmony export */   "NgOtpInputModule": () => (/* binding */ NgOtpInputModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);






function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function NgOtpInputComponent_div_0_input_1_Template_input_paste_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.handlePaste($event));
    })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const i_r3 = restoredCtx.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onKeyUp($event, i_r3));
    })("input", function NgOtpInputComponent_div_0_input_1_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onInput($event));
    })("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const i_r3 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onKeyDown($event, i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r1.config.inputClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "otp_", i_r3, "_", ctx_r1.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r2]);
  }
}
function NgOtpInputComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 2, 10, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("ng-otp-input-wrapper wrapper ", ctx_r0.config.containerClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r0.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.config.containerStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r0.otpForm == null ? null : ctx_r0.otpForm.controls));
  }
}
class KeyboardUtil {
  static ifBackspaceOrDelete(event) {
    return this.ifKey(event, 'Backspace;Delete;Del');
  }
  static ifRightArrow(event) {
    return this.ifKey(event, 'ArrowRight;Right');
  }
  static ifLeftArrow(event) {
    return this.ifKey(event, 'ArrowLeft;Left');
  }
  static ifSpacebar(event) {
    return this.ifKey(event, 'Spacebar; '); //don't remove the space after ; as this will check for space key
  }

  static ifKey(event, keys) {
    let keysToCheck = keys.split(';');
    return keysToCheck.some(k => k === event.key);
  }
}
class KeysPipe {
  transform(value) {
    return Object.keys(value);
  }
}
/** @nocollapse */
KeysPipe.ɵfac = function KeysPipe_Factory(t) {
  return new (t || KeysPipe)();
};
/** @nocollapse */
KeysPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "keys",
  type: KeysPipe,
  pure: true
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'keys'
    }]
  }], null, null);
})();
class NgOtpInputComponent {
  constructor(keysPipe) {
    this.keysPipe = keysPipe;
    this.config = {
      length: 4
    };
    // tslint:disable-next-line: no-output-on-prefix
    this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.inputControls = new Array(this.config.length);
    this.componentKey = Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
  }
  get inputType() {
    var _a, _b;
    return ((_a = this.config) === null || _a === void 0 ? void 0 : _a.isPasswordInput) ? 'password' : ((_b = this.config) === null || _b === void 0 ? void 0 : _b.allowNumbersOnly) ? 'tel' : 'text';
  }
  ngOnInit() {
    this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
    for (let index = 0; index < this.config.length; index++) {
      this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl());
    }
    this.otpForm.valueChanges.subscribe(v => {
      this.keysPipe.transform(this.otpForm.controls).forEach(k => {
        var val = this.otpForm.controls[k].value;
        if (val && val.length > 1) {
          if (val.length >= this.config.length) {
            this.setValue(val);
          } else {
            this.rebuildValue();
          }
        }
      });
    });
  }
  ngAfterViewInit() {
    if (!this.config.disableAutoFocus) {
      const containerItem = document.getElementById(`c_${this.componentKey}`);
      if (containerItem) {
        const ele = containerItem.getElementsByClassName('otp-input')[0];
        if (ele && ele.focus) {
          ele.focus();
        }
      }
    }
  }
  getControlName(idx) {
    return `ctrl_${idx}`;
  }
  onKeyDown($event, inputIdx) {
    if (KeyboardUtil.ifSpacebar($event)) {
      $event.preventDefault();
      return false;
    }
  }
  onInput($event) {
    let newVal = this.currentVal ? `${this.currentVal}${$event.target.value}` : $event.target.value;
    if (this.config.allowNumbersOnly && !this.validateNumber(newVal)) {
      $event.target.value = '';
      $event.stopPropagation();
      $event.preventDefault();
      return;
    }
  }
  onKeyUp($event, inputIdx) {
    const nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
    const prevInputId = this.appendKey(`otp_${inputIdx - 1}`);
    if (KeyboardUtil.ifRightArrow($event)) {
      $event.preventDefault();
      this.setSelected(nextInputId);
      return;
    }
    if (KeyboardUtil.ifLeftArrow($event)) {
      $event.preventDefault();
      this.setSelected(prevInputId);
      return;
    }
    if (KeyboardUtil.ifBackspaceOrDelete($event) && !$event.target.value) {
      this.setSelected(prevInputId);
      this.rebuildValue();
      return;
    }
    if (!$event.target.value) {
      return;
    }
    if (this.ifValidKeyCode($event)) {
      this.setSelected(nextInputId);
    }
    this.rebuildValue();
  }
  validateNumber(val) {
    return val && /^\d*\.?\d*$/.test(val);
  }
  appendKey(id) {
    return `${id}_${this.componentKey}`;
  }
  setSelected(eleId) {
    this.focusTo(eleId);
    const ele = document.getElementById(eleId);
    if (ele && ele.setSelectionRange) {
      setTimeout(() => {
        ele.setSelectionRange(0, 1);
      }, 0);
    }
  }
  ifValidKeyCode(event) {
    const inp = event.key;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile || /[a-zA-Z0-9-_]/.test(inp) || this.config.allowKeyCodes && this.config.allowKeyCodes.includes(event.keyCode);
  }
  focusTo(eleId) {
    const ele = document.getElementById(eleId);
    if (ele) {
      ele.focus();
    }
  }
  // method to set component value
  setValue(value) {
    if (this.config.allowNumbersOnly && isNaN(value)) {
      return;
    }
    this.otpForm.reset();
    if (!value) {
      this.rebuildValue();
      return;
    }
    value = value.toString().replace(/\s/g, ''); // remove whitespace
    Array.from(value).forEach((c, idx) => {
      if (this.otpForm.get(this.getControlName(idx))) {
        this.otpForm.get(this.getControlName(idx)).setValue(c);
      }
    });
    if (!this.config.disableAutoFocus) {
      const containerItem = document.getElementById(`c_${this.componentKey}`);
      var indexOfElementToFocus = value.length < this.config.length ? value.length : this.config.length - 1;
      let ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];
      if (ele && ele.focus) {
        ele.focus();
      }
    }
    this.rebuildValue();
  }
  rebuildValue() {
    var _a;
    let val = '';
    this.keysPipe.transform(this.otpForm.controls).forEach(k => {
      if (this.otpForm.controls[k].value) {
        let ctrlVal = this.otpForm.controls[k].value;
        let isLengthExceed = ctrlVal.length > 1;
        let isCaseTransformEnabled = !this.config.allowNumbersOnly && this.config.letterCase && (this.config.letterCase.toLocaleLowerCase() == 'upper' || this.config.letterCase.toLocaleLowerCase() == 'lower');
        ctrlVal = ctrlVal[0];
        let transformedVal = isCaseTransformEnabled ? this.config.letterCase.toLocaleLowerCase() == 'upper' ? ctrlVal.toUpperCase() : ctrlVal.toLowerCase() : ctrlVal;
        if (isCaseTransformEnabled && transformedVal == ctrlVal) {
          isCaseTransformEnabled = false;
        } else {
          ctrlVal = transformedVal;
        }
        val += ctrlVal;
        if (isLengthExceed || isCaseTransformEnabled) {
          this.otpForm.controls[k].setValue(ctrlVal);
        }
      }
    });
    if ((_a = this.formCtrl) === null || _a === void 0 ? void 0 : _a.setValue) {
      this.formCtrl.setValue(val);
    }
    this.onInputChange.emit(val);
    this.currentVal = val;
  }
  handlePaste(e) {
    // Get pasted data via clipboard API
    let clipboardData = e.clipboardData || window['clipboardData'];
    if (clipboardData) {
      var pastedData = clipboardData.getData('Text');
    }
    // Stop data actually being pasted into div
    e.stopPropagation();
    e.preventDefault();
    if (!pastedData || this.config.allowNumbersOnly && !this.validateNumber(pastedData)) {
      return;
    }
    this.setValue(pastedData);
  }
}
/** @nocollapse */
NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(t) {
  return new (t || NgOtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeysPipe));
};
/** @nocollapse */
NgOtpInputComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgOtpInputComponent,
  selectors: [["ng-otp-input"]],
  inputs: {
    config: "config",
    formCtrl: "formCtrl"
  },
  outputs: {
    onInputChange: "onInputChange"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "ngStyle", "class", "formControl", "id", "paste", "keyup", "input", "keydown", 4, "ngFor", "ngForOf"], ["autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "ngStyle", "formControl", "id", "paste", "keyup", "input", "keydown"], ["inp", ""]],
  template: function NgOtpInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 8, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, KeysPipe],
  styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      // tslint:disable-next-line: component-selector
      selector: 'ng-otp-input',
      templateUrl: './ng-otp-input.component.html',
      styleUrls: ['./ng-otp-input.component.scss']
    }]
  }], function () {
    return [{
      type: KeysPipe
    }];
  }, {
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onInputChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    formCtrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgOtpInputModule {}
/** @nocollapse */
NgOtpInputModule.ɵfac = function NgOtpInputModule_Factory(t) {
  return new (t || NgOtpInputModule)();
};
/** @nocollapse */
NgOtpInputModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgOtpInputModule
});
/** @nocollapse */
NgOtpInputModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [KeysPipe],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule],
      declarations: [NgOtpInputComponent, KeysPipe],
      exports: [NgOtpInputComponent],
      providers: [KeysPipe]
    }]
  }], null, null);
})();
class Config {}

/*
 * Public API Surface of ng-otp-input
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map