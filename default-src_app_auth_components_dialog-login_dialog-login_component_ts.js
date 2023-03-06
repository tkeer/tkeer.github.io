"use strict";
(self["webpackChunkeshop"] = self["webpackChunkeshop"] || []).push([["default-src_app_auth_components_dialog-login_dialog-login_component_ts"],{

/***/ 6476:
/*!************************************************************************!*\
  !*** ./src/app/auth/components/dialog-login/dialog-login.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogLoginComponent": () => (/* binding */ DialogLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/types */ 7805);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _core_common_form2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/common/form2 */ 4842);
/* harmony import */ var _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/enums/microservice-type.enum */ 7502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/local-storage.service */ 4617);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_services_auth_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/auth-user.service */ 6922);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/input/input.component */ 2371);
/* harmony import */ var _shared_components_dios_dios_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/dios/dios.component */ 5367);
/* harmony import */ var _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/loading.directive */ 3570);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 1528);


















function DialogLoginComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " We've sent you a code on the email, please fill in the field below. (Optional: You have a link in the email as alternate login.) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DialogLoginComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " We have detected that you use password as method of login. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DialogLoginComponent_app_input_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-input", 28);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx_r2.getFC("password"))("label", ctx_r2.loginType === "CODE" ? "Verification code" : "Password");
  }
}
function DialogLoginComponent_div_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Code missing?");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DialogLoginComponent_div_31_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Oh snap! try again or");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DialogLoginComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DialogLoginComponent_div_31_span_1_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, DialogLoginComponent_div_31_span_2_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DialogLoginComponent_div_31_Template_a_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.resend($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r3.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Resend (", ctx_r3.retryIn, "s)");
  }
}
function DialogLoginComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 29)(1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DialogLoginComponent_div_32_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.goto("/auth/forgot/password"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Forgot password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function DialogLoginComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 35)(1, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function DialogLoginComponent_div_33_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r16.trusted = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "This is a trusted device. Don't ask me for the next 30 days.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r5.trusted);
  }
}
function DialogLoginComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DialogLoginComponent_button_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.fetchLoginType());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("appLoading", ctx_r6.loading);
  }
}
function DialogLoginComponent_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DialogLoginComponent_button_36_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r20.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("appLoading", ctx_r7.loading);
  }
}
function DialogLoginComponent_mat_divider_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-divider", 40);
  }
}
function DialogLoginComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Lost access to email?");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 41)(4, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DialogLoginComponent_div_38_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r22.goto("/auth/forgot/email"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Reboot");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
class DialogLoginComponent extends _core_common_form2__WEBPACK_IMPORTED_MODULE_1__.Form {
  constructor(api, localStorage, router, authService, fb, dialogRef) {
    super();
    this.api = api;
    this.localStorage = localStorage;
    this.router = router;
    this.authService = authService;
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.trusted = true;
    this.invalid = false;
    this.retryIn = 120;
    this.tried = false;
    this.formFields = {
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]
    };
    this.loading = false;
    this.secretKey = '';
    this._initFormControl(fb, this.formFields);
  }
  resend(event) {
    event.preventDefault();
    if (this.retryIn > 0) {
      return;
    }
    this.api.post('login/resend-code', {
      email: this.getFC('email').value
    }).subscribe(() => {
      this.startRetryInterval();
    });
  }
  fetchLoginType() {
    if (this.getFC('email').value.invalid) {
      return;
    }
    const handleError = ({
      message
    }) => {
      setTimeout(() => this.setError('email', 'not_found', message));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)(() => new Error('Something bad happened; please try again later.'));
    };
    this.loading = true;
    const options = {
      params: {
        email: this.getFC('email').value
      },
      responseType: 'text'
    };
    this.api.get('user-info/auth-mode', _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_2__.MicroserviceType.usr, options).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.catchError)(handleError), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.finalize)(() => this.loading = false)).subscribe(data => {
      this.loginType = data;
      this.tried = true;
      this.getFC('email').markAsTouched();
      this.getFC('email').disable();
      this.startRetryInterval();
      if (this.loginType === _core_types__WEBPACK_IMPORTED_MODULE_0__.LoginType.Code) {
        this.sendCode();
      }
    });
  }
  sendCode() {
    this.loading = true;
    this.api.post('send-otp-code', {
      email: this.getFCValue('email')
    }, _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_2__.MicroserviceType.au, {
      responseType: 'text'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.finalize)(() => this.loading = false)).subscribe(key => {
      this.secretKey = key;
      this.startRetryInterval();
    });
  }
  codeLogin() {
    this.loading = true;
    const data = {
      secretKey: this.secretKey,
      code: this.getFCValue('password')
    };
    this.api.post('check-otp-code', data, _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_2__.MicroserviceType.au).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.catchError)(({
      error: {
        message
      }
    }) => {
      this.invalid = true;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)(() => new Error(message));
    })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.finalize)(() => this.loading = false)).subscribe(data => {
      this.authService.setAuthToken(data.id_token).subscribe(() => {
        this.dialogRef.close(null);
      });
    });
  }
  login() {
    if (this.loginType === _core_types__WEBPACK_IMPORTED_MODULE_0__.LoginType.Code) {
      return this.codeLogin();
    }
    const data = {
      email: this.getFC('email').value,
      trusted: this.trusted
    };
    data['password'] = this.getFC('password').value;
    this.api.post('login', data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.catchError)(({
      error: {
        message
      }
    }) => {
      const msg = this.loginType === 'CODE' ? 'invalid_code' : 'invalid_password';
      this.setError('password', msg, true);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)(() => new Error(message));
    })).subscribe(data => {
      this.authService.setAuthToken(data.id_token).subscribe();
      this.dialogRef.close(null);
    });
  }
  close() {
    this.dialogRef.close(null);
  }
  goto(route) {
    this.close();
    this.router.navigate([route]);
  }
  startRetryInterval() {
    clearInterval(this.retryIntervalId);
    this.retryIn = 35;
    this.retryIntervalId = setInterval(() => {
      this.retryIn -= 1;
      if (this.retryIn <= 0) {
        clearInterval(this.retryIntervalId);
      }
    }, 1000);
  }
  back() {
    if (this.loginType) {
      this.loginType = undefined;
      this.getFC('email').enable();
    } else {
      this.close();
    }
  }
}
DialogLoginComponent.ɵfac = function DialogLoginComponent_Factory(t) {
  return new (t || DialogLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_auth_user_service__WEBPACK_IMPORTED_MODULE_5__.AuthUserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_16__.MatLegacyDialogRef));
};
DialogLoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: DialogLoginComponent,
  selectors: [["app-dialog-login"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
  decls: 39,
  vars: 11,
  consts: [[1, "d-flex", "header", "justify-content-between", "p-3", "p-sm-3"], [1, "d-flex", "align-items-center", "d-none", "d-sm-flex"], [1, "d-flex", "bg-white", "px-1", "me-2", "star-icon-wrapper", "fs-lg"], ["color", "primary", "inline", ""], [1, "mb-0"], [1, "d-flex", "align-items-center", "d-sm-none"], [1, "title-icon", "me-1", "cur-pointer"], [1, "d-inline-flex", "flex-wrap"], [1, "mb-0", "fw-bold", "text-nowrap", "me-2"], [1, "d-inline-block", "text-nowrap"], [1, "d-flex", "align-items-center", "text-primary", "d-none", "d-sm-flex", "cancel-icon"], ["inline", ""], [1, "text-decoration-underline", "cur-pointer", 3, "click"], ["mat-dialog-content", "", 1, "px-3", "pb-4"], [1, "mt-4"], [1, "d-flex", "d-sm-none", "justify-content-center", "img-wrapper"], ["src", "assets/images/send_mail.png"], ["label", "Email address", 1, "d-block", "mt-3", 3, "control"], ["class", "fs-md-s", 4, "ngIf"], ["class", "d-block mt-4", "type", "password", 3, "control", "label", 4, "ngIf"], ["class", "text-end", 4, "ngIf"], ["class", "form-check form-check-inline trusted-wrapper", 4, "ngIf"], [1, "mt-4.5", "d-flex", "justify-content-center"], ["class", "btn btn-primary px-5 py-2 mb-4 mb-md-2 col-12 col-sm-auto fs-l", 3, "appLoading", "click", 4, "ngIf"], ["class", "btn btn-primary px-5 py-2 col-12 col-sm-auto fs-l", 3, "appLoading", "click", 4, "ngIf"], ["class", "divider-light mt-5", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], [1, "fs-md-s"], ["type", "password", 1, "d-block", "mt-4", 3, "control", "label"], [1, "text-end"], ["class", "text-black-50 me-2", 4, "ngIf"], ["class", "primary-400 me-2", 4, "ngIf"], ["href", "#", 3, "click"], [1, "text-black-50", "me-2"], [1, "primary-400", "me-2"], [1, "form-check", "form-check-inline", "trusted-wrapper"], ["type", "checkbox", "id", "trusted-device", "name", "trusted", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "trusted-device", 1, "form-check-label", "fs-s"], [1, "btn", "btn-primary", "px-5", "py-2", "mb-4", "mb-md-2", "col-12", "col-sm-auto", "fs-l", 3, "appLoading", "click"], [1, "btn", "btn-primary", "px-5", "py-2", "col-12", "col-sm-auto", "fs-l", 3, "appLoading", "click"], [1, "divider-light", "mt-5"], [1, "mt-2", "d-flex", "justify-content-center"], [1, "btn", "btn-outline-primary", "px-4", "py-2", "col-12", "col-sm-auto", "fs-l", 3, "click"]],
  template: function DialogLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "login");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 5)(8, "mat-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 7)(11, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Sign in with");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "app-auth-dios", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Auth");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 10)(16, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "arrow_back_ios");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DialogLoginComponent_Template_span_click_18_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 13)(21, "div", 14)(22, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "app-auth-dios");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Auth");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "app-input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, DialogLoginComponent_div_28_Template, 2, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, DialogLoginComponent_div_29_Template, 2, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, DialogLoginComponent_app_input_30_Template, 1, 2, "app-input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, DialogLoginComponent_div_31_Template, 5, 3, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, DialogLoginComponent_div_32_Template, 3, 0, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, DialogLoginComponent_div_33_Template, 4, 1, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, DialogLoginComponent_button_35_Template, 2, 1, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, DialogLoginComponent_button_36_Template, 2, 1, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, DialogLoginComponent_mat_divider_37_Template, 1, 0, "mat-divider", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, DialogLoginComponent_div_38_Template, 6, 0, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.getFC("email"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loginType === "CODE");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loginType === "PASSWORD");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loginType);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loginType === "CODE");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loginType === "PASSWORD");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loginType === "CODE");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loginType);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loginType);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.tried);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.tried);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent, _shared_components_dios_dios_component__WEBPACK_IMPORTED_MODULE_7__.DiosComponent, _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_8__.LoadingDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_16__.MatLegacyDialogContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDivider],
  styles: ["[_nghost-%COMP%]     .mat-input-element[type=password].ng-touched {\n  font-size: 2rem;\n  height: 19px;\n  letter-spacing: 16px;\n}\n\n.header[_ngcontent-%COMP%]   .star-icon-wrapper[_ngcontent-%COMP%] {\n  border: solid 1px #e2e2e2;\n  border-radius: 5px;\n}\n.header[_ngcontent-%COMP%]   .cancel-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media screen and (min-width: 576px) {\n  .header[_ngcontent-%COMP%] {\n    background-color: #f2f2f2;\n  }\n}\n\n.trusted-wrapper[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n}\n\n.img-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9jb21wb25lbnRzL2RpYWxvZy1sb2dpbi9kaWFsb2ctbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBSEo7O0FBU0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBTko7QUFTRTtFQUNFLGVBQUE7QUFQSjtBQVVFO0VBWEY7SUFZSSx5QkFBQTtFQVBGO0FBQ0Y7O0FBVUE7RUFDRSxnQkFBQTtBQVBGOztBQVNBO0VBQ0UscUJBQUE7QUFORiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3Nhc3M6bWFwJztcbkBpbXBvcnQgJ3NyYy9zdHlsaW5ncy9ic192YXJpYWJsZXMnO1xuXG46aG9zdCA6Om5nLWRlZXAge1xuICAubWF0LWlucHV0LWVsZW1lbnRbdHlwZT1wYXNzd29yZF0ubmctdG91Y2hlZCB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGhlaWdodDogMTlweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMTZweDtcbiAgfVxufVxuXG4uaGVhZGVyIHtcblxuICAuc3Rhci1pY29uLXdyYXBwZXIge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNlMmUyZTI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4XG4gIH1cblxuICAuY2FuY2VsLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTRweFxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbWFwLmdldCgkZ3JpZC1icmVha3BvaW50cywgJ3NtJykpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyXG4gIH1cbn1cblxuLnRydXN0ZWQtd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDVyZW07XG59XG4uaW1nLXdyYXBwZXIge1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ })

}]);
//# sourceMappingURL=default-src_app_auth_components_dialog-login_dialog-login_component_ts.js.map