"use strict";
(self["webpackChunkeshop"] = self["webpackChunkeshop"] || []).push([["src_app_product-category_product_product_module_ts"],{

/***/ 3017:
/*!*****************************************************************************!*\
  !*** ./src/app/product-category/product/add-review/add-review.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddReviewComponent": () => (/* binding */ AddReviewComponent)
/* harmony export */ });
/* harmony import */ var _core_common_form2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/form2 */ 4842);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/input/input.component */ 2371);
/* harmony import */ var _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/rating/rating.component */ 9453);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 1528);















function AddReviewComponent_mat_label_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]("Your review");
  }
}
class AddReviewComponent extends _core_common_form2__WEBPACK_IMPORTED_MODULE_0__.Form {
  constructor(fb, breakpointObserver, dialogRef, api, data) {
    super();
    this.fb = fb;
    this.breakpointObserver = breakpointObserver;
    this.dialogRef = dialogRef;
    this.api = api;
    this.data = data;
    this.isMobile = true;
    this.rating = 0;
    this.formFields = {
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      message: ['', []],
      rating: [1]
    };
    this._initFormControl(fb, this.formFields);
  }
  ngOnInit() {
    this.breakpointObserver.observe(['(min-width: 576px)']).subscribe(state => this.isMobile = !state.matches);
  }
  cancel() {
    this.dialogRef.close(null);
  }
  save() {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return;
    }
    const data = {};
    Object.entries(this.form.controls).forEach(([key, fc], i) => {
      data[key] = fc.value;
    });
    this.api.post(`product/review/${this.data.slug}`, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(() => {
      this.dialogRef.close(data);
    });
  }
}
AddReviewComponent.ɵfac = function AddReviewComponent_Factory(t) {
  return new (t || AddReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_8__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_LEGACY_DIALOG_DATA));
};
AddReviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AddReviewComponent,
  selectors: [["app-add-review"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 44,
  vars: 17,
  consts: [[1, "d-flex", "header", "justify-content-between", "p-3"], [1, "d-flex", "align-items-center", "d-none", "d-sm-flex"], [1, "d-flex", "bg-white", "px-1", "me-2", "star-icon-wrapper"], ["color", "primary", "inline", ""], [1, "mb-0"], [1, "d-flex", "align-items-center", "d-sm-none"], [1, "title-icon", "me-1", "cur-pointer", 3, "click"], [1, "mb-0", "fw-bold"], [1, "d-flex", "align-items-center", "text-primary", "d-none", "d-sm-flex", "cancel-icon", 3, "click"], ["inline", ""], ["mat-dialog-content", "", 1, "px-3", "mt-3", 3, "formGroup"], [1, "mb-2"], [1, "label", "fw-bold", "mb-1", "d-none", "d-sm-block", "text-uppercase"], [3, "appearance", "control", "label"], [1, "mb-4"], [1, "label", "fw-bold", "mb-1", "text-uppercase"], ["rating", "1", 3, "ratable", "total", "rate"], [1, "w-100", 3, "appearance"], [4, "ngIf"], ["cdkTextareaAutosize", "", "matInput", "", 1, "text-area", 3, "cols", "formControlName"], ["mat-dialog-actions", "", 1, "actions", "d-flex", "justify-content-center", "gap-sm-6", "gap-4", "mt-3"], [1, "btn", "btn-outline-primary", "btn-cancel", 3, "click"], [1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "click"], [1, "d-none", "d-sm-block", "me-3"]],
  template: function AddReviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "star_outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Rating & Reviews");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "mat-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddReviewComponent_Template_mat_icon_click_8_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Add a review");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddReviewComponent_Template_div_click_12_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "chevron_left");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "form", 10)(19, "div", 11)(20, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "app-input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 11)(24, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Email Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "app-input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 14)(28, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Rating");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "app-rating", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("rate", function AddReviewComponent_Template_app_rating_rate_30_listener($event) {
        return ctx.setFCBYName("rating", null, $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div")(32, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Your review");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-form-field", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, AddReviewComponent_mat_label_35_Template, 2, 1, "mat-label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "textarea", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 20)(38, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddReviewComponent_Template_button_click_38_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddReviewComponent_Template_button_click_40_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "mat-icon", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "star_outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, " Add review ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("large", !ctx.isMobile);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appearance", ctx.isMobile ? "fill" : "outline")("control", ctx.form.controls["name"])("label", ctx.isMobile ? "Name" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("large", !ctx.isMobile);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appearance", ctx.isMobile ? "fill" : "outline")("control", ctx.form.controls["email"])("label", ctx.isMobile ? "Email Address" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ratable", true)("total", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appearance", ctx.isMobile ? "fill" : "outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isMobile);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cols", 20)("formControlName", "message");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_2__.InputComponent, _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_3__.RatingComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLegacyLabel, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_8__.MatLegacyDialogContent, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_8__.MatLegacyDialogActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: ["[_nghost-%COMP%]     .large .mat-form-field-infix {\n  padding: 0.3rem 0 0.8rem 0;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #e2e2e2;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.header[_ngcontent-%COMP%]   .star-icon-wrapper[_ngcontent-%COMP%] {\n  border: solid 1px #e2e2e2;\n  border-radius: 5px;\n}\n.header[_ngcontent-%COMP%]   .cancel-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n@media screen and (min-width: 576px) {\n  .header[_ngcontent-%COMP%] {\n    background-color: #f2f2f2;\n  }\n}\n\n.text-area[_ngcontent-%COMP%] {\n  min-height: 70px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.25);\n}\n@media screen and (min-width: 576px) {\n  .actions[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n}\n.actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {\n  width: 90px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdC1jYXRlZ29yeS9wcm9kdWN0L2FkZC1yZXZpZXcvYWRkLXJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLDBCQUFBO0FBSEo7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0FBSkY7QUFNRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFKSjtBQU9FO0VBQ0UsZUFBQTtBQUxKO0FBUUU7RUFaRjtJQWFJLHlCQUFBO0VBTEY7QUFDRjs7QUFRQTtFQUNFLGdCQUFBO0FBTEY7O0FBUUE7RUFFRSwwQ0FBQTtBQU5GO0FBUUU7RUFKRjtJQUtJLGdCQUFBO0VBTEY7QUFDRjtBQU9FO0VBQ0UsV0FBQTtBQUxKIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2FzczptYXAnO1xuQGltcG9ydCBcInNyYy9zdHlsaW5ncy9ic192YXJpYWJsZXNcIjtcblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgLmxhcmdlIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogMC4zcmVtIDAgMC44cmVtIDA7XG4gIH1cbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuXG4gIC5zdGFyLWljb24td3JhcHBlciB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2UyZTJlMjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcbiAgfVxuXG4gIC5jYW5jZWwtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjJcbiAgfVxufVxuXG4udGV4dC1hcmVhIHtcbiAgbWluLWhlaWdodDogNzBweFxufVxuXG4uYWN0aW9ucyB7XG5cbiAgYm94LXNoYWRvdzogMCAwIDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC5nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIC5idG4tY2FuY2VsIHtcbiAgICB3aWR0aDogOTBweDtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4922:
/*!*****************************************************************************!*\
  !*** ./src/app/product-category/product/img-swiper/img-swiper.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgSwiperComponent": () => (/* binding */ ImgSwiperComponent)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/angular */ 9737);
/* harmony import */ var _shared_pipes_resource_url_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pipes/resource-url.pipe */ 6531);







const _c0 = ["swiper"];
function ImgSwiperComponent_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "resourceUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const img_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx_r5.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, img_r4.url), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ImgSwiperComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ImgSwiperComponent_1_ng_template_0_Template, 3, 4, "ng-template", 4);
  }
}
function ImgSwiperComponent_div_2_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "resourceUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const img_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx_r10.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, img_r9.url), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ImgSwiperComponent_div_2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ImgSwiperComponent_div_2_4_ng_template_0_Template, 3, 4, "ng-template", 4);
  }
}
function ImgSwiperComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "swiper", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("swiper", function ImgSwiperComponent_div_2_Template_swiper_swiper_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.thumbsSwiper = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ImgSwiperComponent_div_2_4_Template, 1, 0, null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("spaceBetween", 10)("slidesPerView", 5)("freeMode", true)("navigation", ctx_r1.navOpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.product.images);
  }
}
function ImgSwiperComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div")(3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Best Seller");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Top Seller");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div")(10, "span", 18)(11, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r3.product.favorite ? "accent" : "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.product.favorite ? "favorite" : "favorite_outline");
  }
}
const _c1 = function (a0) {
  return {
    swiper: a0
  };
};
swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Thumbs, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination]);
class ImgSwiperComponent {
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    this.navOpt = {
      nextEl: '.swiper-product-img-next',
      prevEl: '.swiper-product-img-prev'
    };
  }
  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 767px)']).subscribe(state => this.isMobile = state.matches);
  }
  slideNext() {
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper.swiperRef.slidePrev(100);
  }
}
ImgSwiperComponent.ɵfac = function ImgSwiperComponent_Factory(t) {
  return new (t || ImgSwiperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.BreakpointObserver));
};
ImgSwiperComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ImgSwiperComponent,
  selectors: [["app-img-swiper"]],
  viewQuery: function ImgSwiperComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.swiper = _t.first);
    }
  },
  inputs: {
    product: "product"
  },
  decls: 5,
  vars: 8,
  consts: [[1, "main-swiper", 3, "spaceBetween", "navigation", "pagination", "thumbs"], [4, "ngFor", "ngForOf"], ["class", "d-flex align-items-center py-2 thumbnail-wrapper", 4, "ngIf"], ["pills", ""], ["swiperSlide", ""], [1, "d-block", "product-swiper-img", 3, "src", "alt"], [1, "d-flex", "align-items-center", "py-2", "thumbnail-wrapper"], ["color", "primary", "svgIcon", "swiper-next", 1, "swiper-nav-icon", "horizontal-rotate", "swiper-product-img-prev"], [1, "thumbnail-swiper", 3, "spaceBetween", "slidesPerView", "freeMode", "navigation", "swiper"], ["swiper", ""], ["color", "primary", "svgIcon", "swiper-next", 1, "swiper-nav-icon", "swiper-product-img-next"], [2, "height", "77px", "width", "100%"], [3, "src", "alt"], [1, "position-absolute", "px-2", "py-1", "w-100", "img-pills"], [1, "d-flex", "justify-content-between"], [1, "badge", "bg-danger", "me-1"], [1, "badge", "border", "border-danger", "text-danger", "bg-white", "me-1"], [1, "badge", "bg-primary"], [1, "fav-icon-wrapper", "cur-pointer"], [3, "color"]],
  template: function ImgSwiperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "swiper", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ImgSwiperComponent_1_Template, 1, 0, null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ImgSwiperComponent_div_2_Template, 6, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ImgSwiperComponent_ng_template_3_Template, 13, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("spaceBetween", 10)("navigation", ctx.isMobile)("pagination", ctx.isMobile)("thumbs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, ctx.isMobile ? null : ctx.thumbsSwiper));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.product.images);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobile && ctx.product.images.length > 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, swiper_angular__WEBPACK_IMPORTED_MODULE_6__.SwiperComponent, swiper_angular__WEBPACK_IMPORTED_MODULE_6__.SwiperSlideDirective, _shared_pipes_resource_url_pipe__WEBPACK_IMPORTED_MODULE_1__.ResourceUrlPipe],
  styles: [".product-swiper-img[_ngcontent-%COMP%] {\n  width: 450px !important;\n  height: 300px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdC1jYXRlZ29yeS9wcm9kdWN0L2ltZy1zd2lwZXIvaW1nLXN3aXBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LXN3aXBlci1pbWcge1xuICB3aWR0aDogNDUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1754:
/*!*******************************************************************!*\
  !*** ./src/app/product-category/product/index/index.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexComponent": () => (/* binding */ IndexComponent)
/* harmony export */ });
/* harmony import */ var _core_models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models/product.model */ 670);
/* harmony import */ var _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/common/auto-destroy */ 7990);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _common_cart_bottom_sheet_cart_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/cart-bottom-sheet/cart-bottom-sheet.component */ 219);
/* harmony import */ var _common_cart_dialog_cart_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/cart-dialog/cart-dialog.component */ 1366);
/* harmony import */ var _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/enums/microservice-type.enum */ 7502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/notification.service */ 1645);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_skeleton_loaders_skeleton_loader_grid_skeleton_loader_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/skeleton-loaders/skeleton-loader-grid/skeleton-loader-grid.component */ 4546);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _common_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/common-layout/common-layout.component */ 2014);
/* harmony import */ var _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/legacy-tabs */ 2821);
/* harmony import */ var _product_swiper_components_product_swiper_product_swiper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../product-swiper/components/product-swiper/product-swiper.component */ 4238);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product/product.component */ 2002);
/* harmony import */ var _promo_banner_promo_banner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../promo-banner/promo-banner.component */ 5169);
/* harmony import */ var _product_descr_product_descr_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../product-descr/product-descr.component */ 8489);
/* harmony import */ var _product_attrs_product_attrs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../product-attrs/product-attrs.component */ 7148);
/* harmony import */ var _product_reviews_product_reviews_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../product-reviews/product-reviews.component */ 7580);
























function IndexComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div")(1, "app-product", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("addedToCart", function IndexComponent_div_2_Template_app_product_addedToCart_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r5.addToCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "mat-divider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("product", ctx_r0.product);
  }
}
function IndexComponent_div_7_app_product_descr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-product-descr", 20);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("product", ctx_r7.product);
  }
}
const _c0 = function () {
  return [];
};
function IndexComponent_div_7_app_product_attrs_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-product-attrs", 21);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("attrs", (tmp_0_0 = ctx_r8.product.specs) !== null && tmp_0_0 !== undefined ? tmp_0_0 : _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](1, _c0));
  }
}
function IndexComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 13)(1, "mat-tab-group")(2, "mat-tab", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, IndexComponent_div_7_app_product_descr_3_Template, 1, 1, "app-product-descr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "mat-tab", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, IndexComponent_div_7_app_product_attrs_5_Template, 1, 2, "app-product-attrs", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "mat-tab", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "app-product-reviews", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "mat-divider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r1.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("slug", ctx_r1.route.snapshot.params["slug"]);
  }
}
function IndexComponent_div_8_app_product_descr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-product-descr", 20);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("product", ctx_r9.product);
  }
}
function IndexComponent_div_8_app_product_attrs_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-product-attrs", 21);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("attrs", (tmp_0_0 = ctx_r10.product.specs) !== null && tmp_0_0 !== undefined ? tmp_0_0 : _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](1, _c0));
  }
}
function IndexComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 22)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, IndexComponent_div_8_app_product_descr_2_Template, 1, 1, "app-product-descr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "mat-divider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, IndexComponent_div_8_app_product_attrs_5_Template, 1, 2, "app-product-attrs", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "mat-divider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "app-product-reviews", 19)(9, "mat-divider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("slug", ctx_r2.route.snapshot.params["slug"]);
  }
}
function IndexComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "app-skeleton-loader-grid", 24)(2, "app-skeleton-loader-grid", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("count", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("count", 1);
  }
}
// import { CartPopupComponent } from '../../common/cart-popup/cart-popup.component'
class IndexComponent extends _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_1__.AutoDestroy {
  constructor(api, route, breakpointObserver, dialog, bottomSheet, notifier) {
    super();
    this.api = api;
    this.route = route;
    this.breakpointObserver = breakpointObserver;
    this.dialog = dialog;
    this.bottomSheet = bottomSheet;
    this.notifier = notifier;
    this.loading = false;
    this.isMobile = true;
    this.isSmMobile = true;
  }
  ngOnInit() {
    const breakpoints = ['(min-width: 768px)', '(min-width: 576px)'];
    this.breakpointObserver.observe(breakpoints).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$)).subscribe(state => {
      this.isMobile = !state.breakpoints[breakpoints[0]];
      this.isSmMobile = !state.breakpoints[breakpoints[1]];
    });
    this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$)).subscribe(() => {
      this.fetchProduct();
      this.fetchSimilarProducts();
      this.fetchRecommendedProducts();
      this.fetchSaleProducts();
    });
    // this.openCartPopup()
  }

  addToCart(quantity = 0) {
    this.openCartPopup();
  }
  openCartPopup() {
    if (this.isSmMobile) {
      this.bottomSheet.open(_common_cart_bottom_sheet_cart_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_2__.CartBottomSheetComponent);
    } else {
      this.dialog.open(_common_cart_dialog_cart_dialog_component__WEBPACK_IMPORTED_MODULE_3__.CartDialogComponent, {
        width: '768px'
      });
    }
  }
  fetchProduct() {
    this.api.get(`article?strId=${this.route.snapshot.params['randomProductId']}`, _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_4__.MicroserviceType.inv)
    // this.api.get(`product/${this.route.snapshot.params['randomProductId']}`)
    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$)).subscribe(data => {
      this.product = _core_models_product_model__WEBPACK_IMPORTED_MODULE_0__.Product.fromDto(data);
      // this.createBreadcrumbs(this.product)
    });
  }

  createBreadcrumbs(product) {
    const menuItems = [{
      slug: `${product.seo?.metaUrl}/${product.randomProductId}`,
      title: product.name
    }];
    let category = product.primaryCategory;
    while (category) {
      menuItems.push({
        slug: `${category.friendlyUrl}/${category.randomCategoryId}`,
        title: category.name
      });
      category = category.parent;
    }
    this.menuItems = menuItems.reverse();
  }
  fetchSimilarProducts() {
    this.api.get('product/similar/q').subscribe(({
      data
    }) => {
      this.similarProducts = data.products;
    });
  }
  fetchRecommendedProducts() {
    this.api.get('product/recommended/a').subscribe(({
      data
    }) => {
      this.recommendedProducts = data.products;
    });
  }
  fetchSaleProducts() {
    this.api.get('product/sale/q').subscribe(({
      data
    }) => {
      this.saleProducts = data.products;
    });
  }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) {
  return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_18__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_19__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_20__.MatBottomSheet), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService));
};
IndexComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: IndexComponent,
  selectors: [["app-product-index"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
  decls: 16,
  vars: 9,
  consts: [[3, "menuItems"], ["content", ""], [4, "ngIf", "ngIfElse"], [1, "d-none", "d-md-block"], [3, "categoryId", "addToCart"], ["icon", "sell", "title", "Similar sponsored items", 3, "products", "addToCart"], ["class", "my-3 d-none d-md-block", 4, "ngIf"], ["class", "d-md-none my-3", 4, "ngIf"], ["icon", "sell", "title", "Recommended items", 3, "products", "addToCart"], [1, "my-3"], ["icon", "sell", "title", "Sales items", 3, "products", "addToCart"], ["loading", ""], [3, "product", "addedToCart"], [1, "my-3", "d-none", "d-md-block"], ["label", "Product description"], [3, "product", 4, "ngIf"], ["label", "Characteristics"], [3, "attrs", 4, "ngIf"], ["label", "Reviews"], [3, "slug"], [3, "product"], [3, "attrs"], [1, "d-md-none", "my-3"], [1, "d-flex", "flex-column", "flex-md-row"], ["height1", "200px", "height2", "0", "height3", "80px", "width3", "80px", 1, "col-md-8", 3, "count"], ["height1", "10px", 1, "col-md-4", "col-12", 3, "count"]],
  template: function IndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-common-layout", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, IndexComponent_div_2_Template, 3, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 3)(4, "app-promo-banner", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("addToCart", function IndexComponent_Template_app_promo_banner_addToCart_4_listener() {
        return ctx.addToCart(ctx.product.slug);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div")(6, "app-product-swiper", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("addToCart", function IndexComponent_Template_app_product_swiper_addToCart_6_listener() {
        return ctx.addToCart(ctx.product.slug);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, IndexComponent_div_7_Template, 9, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, IndexComponent_div_8_Template, 10, 3, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div")(10, "app-product-swiper", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("addToCart", function IndexComponent_Template_app_product_swiper_addToCart_10_listener() {
        return ctx.addToCart(ctx.product.slug);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "mat-divider", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div")(13, "app-product-swiper", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("addToCart", function IndexComponent_Template_app_product_swiper_addToCart_13_listener() {
        return ctx.addToCart(ctx.product.slug);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, IndexComponent_ng_template_14_Template, 3, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("menuItems", ctx.menuItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.product)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("categoryId", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("products", ctx.similarProducts);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.isMobile);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isMobile);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("products", ctx.recommendedProducts);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("products", ctx.saleProducts);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _shared_components_skeleton_loaders_skeleton_loader_grid_skeleton_loader_grid_component__WEBPACK_IMPORTED_MODULE_7__.SkeletonLoaderGridComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDivider, _common_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_8__.CommonLayoutComponent, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_23__.MatLegacyTabGroup, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_23__.MatLegacyTab, _product_swiper_components_product_swiper_product_swiper_component__WEBPACK_IMPORTED_MODULE_9__.ProductSwiperComponent, _product_product_component__WEBPACK_IMPORTED_MODULE_10__.ProductComponent, _promo_banner_promo_banner_component__WEBPACK_IMPORTED_MODULE_11__.PromoBannerComponent, _product_descr_product_descr_component__WEBPACK_IMPORTED_MODULE_12__.ProductDescrComponent, _product_attrs_product_attrs_component__WEBPACK_IMPORTED_MODULE_13__.ProductAttrsComponent, _product_reviews_product_reviews_component__WEBPACK_IMPORTED_MODULE_14__.ProductReviewsComponent],
  styles: ["[_nghost-%COMP%]     .mat-tab-header {\n  border-bottom: 0;\n}\n[_nghost-%COMP%]     .mat-tab-header .mat-tab-label-container {\n  border: transparent;\n  border-top-left-radius: 11px;\n  border-top-right-radius: 11px;\n}\n[_nghost-%COMP%]     .mat-tab-header .mat-tab-label-container .mat-tab-labels {\n  justify-content: space-between;\n}\n[_nghost-%COMP%]     .mat-tab-header .mat-tab-label-container .mat-tab-labels .mat-tab-label {\n  justify-content: start;\n  opacity: 1;\n  flex: 1;\n  background: #f2f2f2;\n  color: #707070;\n  height: 30px;\n}\n[_nghost-%COMP%]     .mat-tab-header .mat-tab-label-container .mat-tab-labels .mat-tab-label.mat-tab-label-active {\n  background-color: #1b3664;\n  color: white;\n}\n\n.description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdC1jYXRlZ29yeS9wcm9kdWN0L2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3N0eWxpbmdzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUVFLGdCQUFBO0FBSko7QUFNSTtFQUVFLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQUxOO0FBT007RUFFRSw4QkFBQTtBQU5SO0FBUVE7RUFFRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQVBWO0FBVVU7RUFDRSx5QkM2RUk7RUQ1RUosWUFBQTtBQVJaOztBQW9CRTtFQUNFLGNBQUE7QUFqQkoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3N0eWxpbmdzL2JzX3ZhcmlhYmxlc1wiO1xuXG46aG9zdCA6Om5nLWRlZXAge1xuXG4gIC5tYXQtdGFiLWhlYWRlciB7XG5cbiAgICBib3JkZXItYm90dG9tOiAwO1xuXG4gICAgLm1hdC10YWItbGFiZWwtY29udGFpbmVyIHtcblxuICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDExcHg7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTFweDtcblxuICAgICAgLm1hdC10YWItbGFiZWxzIHtcblxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgLm1hdC10YWItbGFiZWwge1xuXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG5cblxuICAgICAgICAgICYubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbiIsIi8vQGltcG9ydCBcIn5ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XG4vL0BpbXBvcnQgXCJ+bm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4kYmx1ZS1wYWxldHRlOiAoXG4gIDUwOiAjZTRlN2VjLFxuICAxMDA6ICNlOWViZjAsXG4gIDIwMDogI2M2Y2NkYixcbiAgMzAwOiAjOGQ5YmIyLFxuICA0MDA6ICM1NDY4OGIsXG4gIDUwMDogIzFiMzY2NCxcbiAgNjAwOiAjMTgzMDVjLFxuICA3MDA6ICMxNDI5NTIsXG4gIDgwMDogIzEwMjI0OCxcbiAgOTAwOiAjMDgxNjM2LFxuICBBMTAwOiAjNmY5MmZmLFxuICBBMjAwOiAjM2M2Y2ZmLFxuICBBNDAwOiAjMDk0NWZmLFxuICBBNzAwOiAjMDAzYWVmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAjMDAwMDAwLFxuICAgIDEwMDogIzAwMDAwMCxcbiAgICAyMDA6ICMwMDAwMDAsXG4gICAgMzAwOiAjZmZmZmZmLFxuICAgIDQwMDogI2ZmZmZmZixcbiAgICA1MDA6ICNmZmZmZmYsXG4gICAgNjAwOiAjZmZmZmZmLFxuICAgIDcwMDogI2ZmZmZmZixcbiAgICA4MDA6ICNmZmZmZmYsXG4gICAgOTAwOiAjZmZmZmZmLFxuICAgIEExMDA6ICMwMDAwMDAsXG4gICAgQTIwMDogI2ZmZmZmZixcbiAgICBBNDAwOiAjZmZmZmZmLFxuICAgIEE3MDA6ICNmZmZmZmYsXG4gICksXG4pO1xuXG4kb3JhbmdlLXBhbGV0dGU6IChcbiAgNTA6ICNmZGVkZTUsXG4gIDEwMDogI2ZlZjBlYSxcbiAgMjAwOiAjZmJkOWM4LFxuICAzMDA6ICNmOGIzOTIsXG4gIDQwMDogI2Y0OGQ1YixcbiAgNTAwOiAjZjA2NzI0LFxuICA2MDA6ICNlZTVmMjAsXG4gIDcwMDogI2VjNTQxYixcbiAgODAwOiAjZTk0YTE2LFxuICA5MDA6ICNlNTM5MGQsXG4gIEExMDA6ICNmZmZmZmYsXG4gIEEyMDA6ICNmZmUzZGQsXG4gIEE0MDA6ICNmZmI4YWEsXG4gIEE3MDA6ICNmZmEzOTAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICNmZmZmZmYsXG4gICAgMTAwOiAjZmZmZmZmLFxuICAgIDIwMDogI2ZmZmZmZixcbiAgICAzMDA6ICNmZmZmZmYsXG4gICAgNDAwOiAjZmZmZmZmLFxuICAgIDUwMDogI2ZmZmZmZixcbiAgICA2MDA6ICNmZmZmZmYsXG4gICAgNzAwOiAjZmZmZmZmLFxuICAgIDgwMDogI2ZmZmZmZixcbiAgICA5MDA6ICNmZmZmZmYsXG4gICAgQTEwMDogI2ZmZmZmZixcbiAgICBBMjAwOiAjZmZmZmZmLFxuICAgIEE0MDA6ICNmZmZmZmYsXG4gICAgQTcwMDogI2ZmZmZmZixcbiAgKSxcbik7XG5cbiRyZWQtcGFsZXR0ZTogKFxuICA1MDogI2ZmZWJlZSxcbiAgMTAwOiAjZmZjZGQyLFxuICAyMDA6ICNlZjlhOWEsXG4gIDMwMDogI2U1NzM3MyxcbiAgNDAwOiAjZWY1MzUwLFxuICA1MDA6ICNmZjAwMDAsXG4gIDYwMDogI2U1MzkzNSxcbiAgNzAwOiAjZDMyZjJmLFxuICA4MDA6ICNjNjI4MjgsXG4gIDkwMDogI2I3MWMxYyxcbiAgQTEwMDogI2ZmOGE4MCxcbiAgQTIwMDogI2ZmNTI1MixcbiAgQTQwMDogI2ZmMTc0NCxcbiAgQTcwMDogI2Q1MDAwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogcmdiYShibGFjaywgMC44NyksXG4gICAgMTAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICAyMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDMwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgNDAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICA1MDA6IHdoaXRlLFxuICAgIDYwMDogd2hpdGUsXG4gICAgNzAwOiB3aGl0ZSxcbiAgICA4MDA6IHdoaXRlLFxuICAgIDkwMDogd2hpdGUsXG4gICAgQTEwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgQTIwMDogd2hpdGUsXG4gICAgQTQwMDogd2hpdGUsXG4gICAgQTcwMDogd2hpdGUsXG4gIClcbik7XG5cbiRwcmltYXJ5LXBhbGV0dGU6ICRibHVlLXBhbGV0dGU7XG4kYWNjZW50LXBhbGV0dGU6ICRvcmFuZ2UtcGFsZXR0ZTtcbiRzZWNvbmRhcnktcGFsZXR0ZTogJG9yYW5nZS1wYWxldHRlO1xuXG4kcHJpbWFyeS1jb2xvcjogbWFwLWdldCgkcHJpbWFyeS1wYWxldHRlLCA1MDApO1xuJHNlY29uZGFyeS1jb2xvcjogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDUwMCk7XG4kc2Vjb25kYXJ5LTMwMDogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDMwMCk7XG4kcHJpbWFyeS00MDA6IG1hcC1nZXQoJHByaW1hcnktcGFsZXR0ZSwgNDAwKTtcbiRlcnJvci1jb2xvcjogbWFwLWdldCgkcmVkLXBhbGV0dGUsIDUwMCk7XG5cbiRtYXgtd2lkdGg6IDEzNjZweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7148:
/*!***********************************************************************************!*\
  !*** ./src/app/product-category/product/product-attrs/product-attrs.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductAttrsComponent": () => (/* binding */ ProductAttrsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);



function ProductAttrsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const attr_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", attr_r2.label, ":\u00A0");
  }
}
function ProductAttrsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const attr_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](attr_r4.value);
  }
}
class ProductAttrsComponent {
  constructor() {}
  ngOnInit() {}
}
ProductAttrsComponent.ɵfac = function ProductAttrsComponent_Factory(t) {
  return new (t || ProductAttrsComponent)();
};
ProductAttrsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProductAttrsComponent,
  selectors: [["app-product-attrs"]],
  inputs: {
    attrs: "attrs"
  },
  decls: 11,
  vars: 2,
  consts: [[1, "my-3"], [1, "mb-2"], [1, "bordered-icon", "me-1", "p-1"], ["color", "primary", "svgIcon", "ruler", 1, "icon", "h-auto", "d-inline-flex", "fs-s"], [1, "fs-l"], [1, "fs-s", "d-flex"], [1, "chars", "label-column"], ["class", "py-2 ps-2", 4, "ngFor", "ngForOf"], [1, "chars", "value-column", "flex-grow-1"], [1, "py-2", "ps-2"], [1, "fw-bold", "d-inline-block", "label"], [1, "ms-2"]],
  template: function ProductAttrsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Characteristics");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductAttrsComponent_div_8_Template, 3, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductAttrsComponent_div_10_Template, 3, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attrs);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attrs);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
  styles: [".label-column[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 16px;\n}\n.label-column[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 16px;\n}\n\n.value-column[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  border-top-right-radius: 16px;\n}\n.value-column[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 16px;\n}\n\n.chars[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fafafa;\n}\n.chars[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdC1jYXRlZ29yeS9wcm9kdWN0L3Byb2R1Y3QtYXR0cnMvcHJvZHVjdC1hdHRycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDRCQUFBO0FBQUo7QUFFRTtFQUNFLCtCQUFBO0FBQUo7O0FBS0U7RUFDRSw2QkFBQTtBQUZKO0FBSUU7RUFDRSxnQ0FBQTtBQUZKOztBQU9JO0VBQ0UseUJBQUE7QUFKTjtBQU9JO0VBQ0UseUJBQUE7QUFMTiIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1jb2x1bW4ge1xuICA+IDpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZweDtcbiAgfVxuICA+IDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNnB4O1xuICB9XG59XG5cbi52YWx1ZS1jb2x1bW4ge1xuICA+IDpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE2cHg7XG4gIH1cbiAgPiA6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE2cHg7XG4gIH1cbn1cblxuICAuY2hhcnMge1xuICAgID4gOm50aC1jaGlsZChldmVuKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIH1cblxuICAgID4gOm50aC1jaGlsZChvZGQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgfVxuICB9XG5cbiAgLmxhYmVsIHtcbiAgICAvL21pbi13aWR0aDogNjVweFxuICB9XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8489:
/*!***********************************************************************************!*\
  !*** ./src/app/product-category/product/product-descr/product-descr.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDescrComponent": () => (/* binding */ ProductDescrComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _shared_pipes_safeHtml_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/pipes/safeHtml/safeHtml.pipe */ 4505);





function ProductDescrComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-divider", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div")(3, "div", 1)(4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "HISTORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-divider", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div")(10, "div", 1)(11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "VIDEO SECTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "mat-divider", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div")(17, "div", 1)(18, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "DOWNLOAD DOCUMENTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 3, ctx_r0.product.history), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 5, ctx_r0.product.vidDescr), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 7, ctx_r0.product.docDescr), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
  }
}
function ProductDescrComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Read more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ProductDescrComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Read less ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "keyboard_arrow_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class ProductDescrComponent {
  constructor() {
    this.showAllDescr = false;
  }
  ngOnInit() {}
}
ProductDescrComponent.ɵfac = function ProductDescrComponent_Factory(t) {
  return new (t || ProductDescrComponent)();
};
ProductDescrComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProductDescrComponent,
  selectors: [["app-product-descr"]],
  inputs: {
    product: "product"
  },
  decls: 13,
  vars: 4,
  consts: [[1, "my-3", "description"], [1, "mb-2"], [1, "bordered-icon", "me-1"], ["color", "primary", 1, "icon"], [1, "section-title", "text-black"], [1, "section-descr", "with-cols", 3, "innerHTML"], [4, "ngIf"], [1, "text-primary", "mt-3", "cur-pointer", 3, "click"], ["class", "d-flex justify-content-center align-items-center", 4, "ngIf"], [1, "my-3"], [1, "fw-bold", "section-title"], [1, "my-2"], [1, "section-descr", 3, "innerHTML"], [1, "mt-4", "mb-3"], [1, "d-flex", "justify-content-center", "align-items-center"]],
  template: function ProductDescrComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1)(3, "span", 2)(4, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "subject");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Product description");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProductDescrComponent_div_9_Template, 22, 9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductDescrComponent_Template_div_click_10_listener() {
        return ctx.showAllDescr = !ctx.showAllDescr;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProductDescrComponent_div_11_Template, 4, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProductDescrComponent_div_12_Template, 4, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.product.description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showAllDescr);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showAllDescr);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showAllDescr);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider, _shared_pipes_safeHtml_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_0__.SafeHtmlPipe],
  styles: [".section-descr[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.with-cols[_ngcontent-%COMP%] {\n  column-count: 1;\n}\n@media screen and (min-width: 768px) {\n  .with-cols[_ngcontent-%COMP%] {\n    column-count: 2;\n  }\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #707070;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdC1jYXRlZ29yeS9wcm9kdWN0L3Byb2R1Y3QtZGVzY3IvcHJvZHVjdC1kZXNjci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7QUFGRjtBQUlFO0VBSEY7SUFJSSxlQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOm1hcCc7XG5AaW1wb3J0IFwic3JjL3N0eWxpbmdzL2JzX3ZhcmlhYmxlc1wiO1xuXG4uc2VjdGlvbi1kZXNjciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLndpdGgtY29scyB7XG4gIGNvbHVtbi1jb3VudDogMTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIGNvbHVtbi1jb3VudDogMjtcbiAgfVxufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM3MDcwNzBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7580:
/*!***************************************************************************************!*\
  !*** ./src/app/product-category/product/product-reviews/product-reviews.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductReviewsComponent": () => (/* binding */ ProductReviewsComponent)
/* harmony export */ });
/* harmony import */ var _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/auto-destroy */ 7990);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-review/add-review.component */ 3017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/pagination/pagination.component */ 3556);
/* harmony import */ var _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/rating/rating.component */ 9453);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);










function ProductReviewsComponent_div_20_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 22);
  }
  if (rf & 2) {
    const review_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", review_r2.customer.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function ProductReviewsComponent_div_20_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProductReviewsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProductReviewsComponent_div_20_img_2_Template, 1, 1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ProductReviewsComponent_div_20_mat_icon_3_Template, 2, 0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 18)(5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "app-rating", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const review_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", review_r2.customer.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !review_r2.customer.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Customer #", review_r2.customer.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](review_r2.reviewedAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](review_r2.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rating", review_r2.rating)("total", 5);
  }
}
function ProductReviewsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "app-pagination", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("goto", function ProductReviewsComponent_div_21_Template_app_pagination_goto_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.gotoPage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("perPage", ctx_r1.perPage)("currPage", ctx_r1.page)("total", ctx_r1.total);
  }
}
class ProductReviewsComponent extends _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__.AutoDestroy {
  constructor(api, dialog) {
    super();
    this.api = api;
    this.dialog = dialog;
    this.total = 0;
    this.perPage = 3;
    this.page = 1;
    this.rating = 0.0;
    this.reviews = [];
  }
  ngOnInit() {
    this.fetchReviews();
  }
  fetchReviews() {
    this.api.get('product/reviews/q', null, {
      page: this.page
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(({
      data
    }) => {
      this.reviews = data.reviews;
      this.total = data.total;
      this.rating = data.rating;
    });
  }
  gotoPage(currPage) {
    this.page = currPage;
    this.fetchReviews();
  }
  showAddReview() {
    const dialogRef = this.dialog.open(_add_review_add_review_component__WEBPACK_IMPORTED_MODULE_1__.AddReviewComponent, {
      width: '788px',
      data: {
        id: this.slug
      }
    });
    dialogRef.beforeClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(review => {
      if (review) {
        this.fetchReviews();
      }
    });
  }
}
ProductReviewsComponent.ɵfac = function ProductReviewsComponent_Factory(t) {
  return new (t || ProductReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_7__.MatLegacyDialog));
};
ProductReviewsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ProductReviewsComponent,
  selectors: [["app-product-reviews"]],
  inputs: {
    slug: "slug"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 22,
  vars: 6,
  consts: [[1, "my-3"], [1, "mb-2"], [1, "bordered-icon", "me-1"], ["color", "primary", 1, "icon", "h-auto", "d-inline-flex"], [1, "fs-l"], [1, "d-flex", "flex-column", "align-items-center", "mt-3"], [1, "border-bottom", "border-1"], [1, "rating-star"], [3, "fontSize", "inline", "rating"], [1, "d-flex", "justify-content-around", "align-items-center", "p-1", "btn", "btn-outline-primary", "btn-add-review", 3, "click"], [1, "mt-4"], [1, "reviews"], ["class", "w-100 d-flex p-3", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "w-100", "d-flex", "p-3"], [1, "rounded-circle", "avatar", "d-flex", "justify-content-center", "align-items-center", "bg-black", "d-none", "d-md-flex"], ["class", "img-fluid", 3, "src", 4, "ngIf"], ["class", "text-white", 4, "ngIf"], [1, "ms-3", "d-flex", "flex-column", "message"], [1, "fw-bold", "text-primary", "fs-l"], [1, "mt-2"], [3, "rating", "total"], [1, "img-fluid", 3, "src"], [1, "text-white"], [3, "perPage", "currPage", "total", "goto"]],
  template: function ProductReviewsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2)(3, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "star_outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Rating & Reviews");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div")(11, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "app-rating", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div")(14, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductReviewsComponent_Template_button_click_14_listener() {
        return ctx.showAddReview();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "star_outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Add a review ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 10)(19, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ProductReviewsComponent_div_20_Template, 12, 7, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ProductReviewsComponent_div_21_Template, 2, 3, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("This Item has ", ctx.total, " reviews");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fontSize", 32)("inline", true)("rating", ctx.rating);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.reviews);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.total > ctx.perPage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_3__.PaginationComponent, _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_4__.RatingComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon],
  styles: [".rating-star[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.reviews[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #f2f2f2;\n}\n\n.bordered-icon[_ngcontent-%COMP%] {\n  padding: 0.0625rem;\n}\n\n.btn-add-review[_ngcontent-%COMP%] {\n  width: 220px;\n  font-size: 24px;\n}\n@media screen and (min-width: 576px) {\n  .btn-add-review[_ngcontent-%COMP%] {\n    background-color: #1b3664;\n    color: white;\n  }\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  min-width: 60px;\n}\n\n.message[_ngcontent-%COMP%] {\n  color: #707070;\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdC1jYXRlZ29yeS9wcm9kdWN0L3Byb2R1Y3QtcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGluZ3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUUsZUFBQTtBQUhGO0FBWUU7RUFDRSx5QkFBQTtBQVZKOztBQWNBO0VBQ0Usa0JBQUE7QUFYRjs7QUFjQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBWEY7QUFhRTtFQUpGO0lBS0kseUJDOEVZO0lEN0VaLFlBQUE7RUFWRjtBQUNGOztBQWFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBVkY7O0FBYUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFWRiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3Nhc3M6bWFwJztcbkBpbXBvcnQgXCJzcmMvc3R5bGluZ3MvYnNfdmFyaWFibGVzXCI7XG5cbi5yYXRpbmctc3RhciB7XG5cbiAgZm9udC1zaXplOiAzMnB4O1xuXG4gIC5pY29uIHtcblxuICB9XG5cbn1cblxuLnJldmlld3Mge1xuICA+IDpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgfVxufVxuXG4uYm9yZGVyZWQtaWNvbiB7XG4gIHBhZGRpbmc6IDAuMDYyNXJlbTtcbn1cblxuLmJ0bi1hZGQtcmV2aWV3IHtcbiAgd2lkdGg6IDIyMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbWFwLmdldCgkZ3JpZC1icmVha3BvaW50cywgJ3NtJykpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1pbi13aWR0aDogNjBweFxufVxuXG4ubWVzc2FnZSB7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDAuNzVyZW1cbn1cbiIsIi8vQGltcG9ydCBcIn5ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XG4vL0BpbXBvcnQgXCJ+bm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4kYmx1ZS1wYWxldHRlOiAoXG4gIDUwOiAjZTRlN2VjLFxuICAxMDA6ICNlOWViZjAsXG4gIDIwMDogI2M2Y2NkYixcbiAgMzAwOiAjOGQ5YmIyLFxuICA0MDA6ICM1NDY4OGIsXG4gIDUwMDogIzFiMzY2NCxcbiAgNjAwOiAjMTgzMDVjLFxuICA3MDA6ICMxNDI5NTIsXG4gIDgwMDogIzEwMjI0OCxcbiAgOTAwOiAjMDgxNjM2LFxuICBBMTAwOiAjNmY5MmZmLFxuICBBMjAwOiAjM2M2Y2ZmLFxuICBBNDAwOiAjMDk0NWZmLFxuICBBNzAwOiAjMDAzYWVmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAjMDAwMDAwLFxuICAgIDEwMDogIzAwMDAwMCxcbiAgICAyMDA6ICMwMDAwMDAsXG4gICAgMzAwOiAjZmZmZmZmLFxuICAgIDQwMDogI2ZmZmZmZixcbiAgICA1MDA6ICNmZmZmZmYsXG4gICAgNjAwOiAjZmZmZmZmLFxuICAgIDcwMDogI2ZmZmZmZixcbiAgICA4MDA6ICNmZmZmZmYsXG4gICAgOTAwOiAjZmZmZmZmLFxuICAgIEExMDA6ICMwMDAwMDAsXG4gICAgQTIwMDogI2ZmZmZmZixcbiAgICBBNDAwOiAjZmZmZmZmLFxuICAgIEE3MDA6ICNmZmZmZmYsXG4gICksXG4pO1xuXG4kb3JhbmdlLXBhbGV0dGU6IChcbiAgNTA6ICNmZGVkZTUsXG4gIDEwMDogI2ZlZjBlYSxcbiAgMjAwOiAjZmJkOWM4LFxuICAzMDA6ICNmOGIzOTIsXG4gIDQwMDogI2Y0OGQ1YixcbiAgNTAwOiAjZjA2NzI0LFxuICA2MDA6ICNlZTVmMjAsXG4gIDcwMDogI2VjNTQxYixcbiAgODAwOiAjZTk0YTE2LFxuICA5MDA6ICNlNTM5MGQsXG4gIEExMDA6ICNmZmZmZmYsXG4gIEEyMDA6ICNmZmUzZGQsXG4gIEE0MDA6ICNmZmI4YWEsXG4gIEE3MDA6ICNmZmEzOTAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICNmZmZmZmYsXG4gICAgMTAwOiAjZmZmZmZmLFxuICAgIDIwMDogI2ZmZmZmZixcbiAgICAzMDA6ICNmZmZmZmYsXG4gICAgNDAwOiAjZmZmZmZmLFxuICAgIDUwMDogI2ZmZmZmZixcbiAgICA2MDA6ICNmZmZmZmYsXG4gICAgNzAwOiAjZmZmZmZmLFxuICAgIDgwMDogI2ZmZmZmZixcbiAgICA5MDA6ICNmZmZmZmYsXG4gICAgQTEwMDogI2ZmZmZmZixcbiAgICBBMjAwOiAjZmZmZmZmLFxuICAgIEE0MDA6ICNmZmZmZmYsXG4gICAgQTcwMDogI2ZmZmZmZixcbiAgKSxcbik7XG5cbiRyZWQtcGFsZXR0ZTogKFxuICA1MDogI2ZmZWJlZSxcbiAgMTAwOiAjZmZjZGQyLFxuICAyMDA6ICNlZjlhOWEsXG4gIDMwMDogI2U1NzM3MyxcbiAgNDAwOiAjZWY1MzUwLFxuICA1MDA6ICNmZjAwMDAsXG4gIDYwMDogI2U1MzkzNSxcbiAgNzAwOiAjZDMyZjJmLFxuICA4MDA6ICNjNjI4MjgsXG4gIDkwMDogI2I3MWMxYyxcbiAgQTEwMDogI2ZmOGE4MCxcbiAgQTIwMDogI2ZmNTI1MixcbiAgQTQwMDogI2ZmMTc0NCxcbiAgQTcwMDogI2Q1MDAwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogcmdiYShibGFjaywgMC44NyksXG4gICAgMTAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICAyMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDMwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgNDAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICA1MDA6IHdoaXRlLFxuICAgIDYwMDogd2hpdGUsXG4gICAgNzAwOiB3aGl0ZSxcbiAgICA4MDA6IHdoaXRlLFxuICAgIDkwMDogd2hpdGUsXG4gICAgQTEwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgQTIwMDogd2hpdGUsXG4gICAgQTQwMDogd2hpdGUsXG4gICAgQTcwMDogd2hpdGUsXG4gIClcbik7XG5cbiRwcmltYXJ5LXBhbGV0dGU6ICRibHVlLXBhbGV0dGU7XG4kYWNjZW50LXBhbGV0dGU6ICRvcmFuZ2UtcGFsZXR0ZTtcbiRzZWNvbmRhcnktcGFsZXR0ZTogJG9yYW5nZS1wYWxldHRlO1xuXG4kcHJpbWFyeS1jb2xvcjogbWFwLWdldCgkcHJpbWFyeS1wYWxldHRlLCA1MDApO1xuJHNlY29uZGFyeS1jb2xvcjogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDUwMCk7XG4kc2Vjb25kYXJ5LTMwMDogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDMwMCk7XG4kcHJpbWFyeS00MDA6IG1hcC1nZXQoJHByaW1hcnktcGFsZXR0ZSwgNDAwKTtcbiRlcnJvci1jb2xvcjogbWFwLWdldCgkcmVkLXBhbGV0dGUsIDUwMCk7XG5cbiRtYXgtd2lkdGg6IDEzNjZweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3593:
/*!********************************************************************!*\
  !*** ./src/app/product-category/product/product-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductRoutingModule": () => (/* binding */ ProductRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/index.component */ 1754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _index_index_component__WEBPACK_IMPORTED_MODULE_0__.IndexComponent
}];
class ProductRoutingModule {}
ProductRoutingModule.ɵfac = function ProductRoutingModule_Factory(t) {
  return new (t || ProductRoutingModule)();
};
ProductRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ProductRoutingModule
});
ProductRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7163:
/*!************************************************************!*\
  !*** ./src/app/product-category/product/product.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductModule": () => (/* binding */ ProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-routing.module */ 3593);
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index/index.component */ 1754);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/product.component */ 2002);
/* harmony import */ var _img_swiper_img_swiper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img-swiper/img-swiper.component */ 4922);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! swiper/angular */ 9737);
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/common.module */ 415);
/* harmony import */ var _category_category_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../category/category.module */ 5290);
/* harmony import */ var _promo_banner_promo_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./promo-banner/promo-banner.component */ 5169);
/* harmony import */ var _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-tabs */ 2821);
/* harmony import */ var _product_descr_product_descr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-descr/product-descr.component */ 8489);
/* harmony import */ var _product_attrs_product_attrs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-attrs/product-attrs.component */ 7148);
/* harmony import */ var _product_reviews_product_reviews_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-reviews/product-reviews.component */ 7580);
/* harmony import */ var _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-review/add-review.component */ 3017);
/* harmony import */ var src_app_product_swiper_product_swiper_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/product-swiper/product-swiper.module */ 1843);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);


















class ProductModule {}
ProductModule.ɵfac = function ProductModule_Factory(t) {
  return new (t || ProductModule)();
};
ProductModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
  type: ProductModule
});
ProductModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, swiper_angular__WEBPACK_IMPORTED_MODULE_15__.SwiperModule, _common_common_module__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _category_category_module__WEBPACK_IMPORTED_MODULE_6__.CategoryModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_16__.MatLegacyTabsModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_17__.MatBottomSheetModule, src_app_product_swiper_product_swiper_module__WEBPACK_IMPORTED_MODULE_12__.ProductSwiperModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ProductModule, {
    declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_1__.IndexComponent, _product_product_component__WEBPACK_IMPORTED_MODULE_3__.ProductComponent, _img_swiper_img_swiper_component__WEBPACK_IMPORTED_MODULE_4__.ImgSwiperComponent, _promo_banner_promo_banner_component__WEBPACK_IMPORTED_MODULE_7__.PromoBannerComponent, _product_descr_product_descr_component__WEBPACK_IMPORTED_MODULE_8__.ProductDescrComponent, _product_attrs_product_attrs_component__WEBPACK_IMPORTED_MODULE_9__.ProductAttrsComponent, _product_reviews_product_reviews_component__WEBPACK_IMPORTED_MODULE_10__.ProductReviewsComponent, _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_11__.AddReviewComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, swiper_angular__WEBPACK_IMPORTED_MODULE_15__.SwiperModule, _common_common_module__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _category_category_module__WEBPACK_IMPORTED_MODULE_6__.CategoryModule, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_16__.MatLegacyTabsModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_17__.MatBottomSheetModule, src_app_product_swiper_product_swiper_module__WEBPACK_IMPORTED_MODULE_12__.ProductSwiperModule]
  });
})();

/***/ }),

/***/ 2002:
/*!***********************************************************************!*\
  !*** ./src/app/product-category/product/product/product.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductComponent": () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_models_product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models/product.model */ 670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/cart.service */ 4128);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_price_price_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/price/price.component */ 9563);
/* harmony import */ var _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/loading.directive */ 3570);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-select */ 6002);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-core */ 7090);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _img_swiper_img_swiper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img-swiper/img-swiper.component */ 4922);
















function ProductComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function ProductComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function ProductComponent_ng_container_23_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function ProductComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProductComponent_ng_container_23_ng_container_1_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r9);
  }
}
function ProductComponent_ng_container_24_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function ProductComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProductComponent_ng_container_24_ng_container_1_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r11);
  }
}
function ProductComponent_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function ProductComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 58)(1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-price", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("lineThrough", true)("amount", ctx_r5.product.price.priceWithVat)("currency", ctx_r5.product.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ((ctx_r5.product.price.priceWithVat - ctx_r5.product.priceDiscount.discountedValue) / ctx_r5.product.price.priceWithVat * 100).toFixed(2), "% REDUCERE");
  }
}
function ProductComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 62)(1, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Monthly fees");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-price", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("amount", ctx_r6.product.monthlyPrice);
  }
}
function ProductComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 66)(1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Arrival date: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 1, ctx_r7.product.stockType == null ? null : ctx_r7.product.stockType.startDatePreorder, "dd.MM.yyyy"), "");
  }
}
function ProductComponent_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function ProductComponent_ng_template_122_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 70)(1, "div")(2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductComponent_ng_template_122_div_6_Template_div_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const size_r22 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.gotoVariation(size_r22, "Size"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const size_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("unavailable", ctx_r21.isVariationNotAvailable(size_r22, "Size"))("selected", (ctx_r21.product == null ? null : ctx_r21.product.variationAttributes == null ? null : ctx_r21.product.variationAttributes.Size == null ? null : ctx_r21.product.variationAttributes.Size.variationValues == null ? null : ctx_r21.product.variationAttributes.Size.variationValues[0] == null ? null : ctx_r21.product.variationAttributes.Size.variationValues[0].attributeValue == null ? null : ctx_r21.product.variationAttributes.Size.variationValues[0].attributeValue.id) === size_r22.attributeValue.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](size_r22.attributeValue.name);
  }
}
function ProductComponent_ng_template_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 67)(1, "span", 19)(2, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "open_in_full");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Size:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ProductComponent_ng_template_122_div_6_Template, 5, 5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "mat-divider", 13);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r10.product.parent == null ? null : ctx_r10.product.parent.variationAttributes == null ? null : ctx_r10.product.parent.variationAttributes.Size == null ? null : ctx_r10.product.parent.variationAttributes.Size.variationValues);
  }
}
function ProductComponent_ng_template_124_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductComponent_ng_template_124_div_6_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const color_r26 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r27.gotoVariation(color_r26, "Color"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const color_r26 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", color_r26.attributeValue.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", (ctx_r25.product == null ? null : ctx_r25.product.variationAttributes == null ? null : ctx_r25.product.variationAttributes.Color == null ? null : ctx_r25.product.variationAttributes.Color.variationValues == null ? null : ctx_r25.product.variationAttributes.Color.variationValues[0] == null ? null : ctx_r25.product.variationAttributes.Color.variationValues[0].attributeValue == null ? null : ctx_r25.product.variationAttributes.Color.variationValues[0].attributeValue.id) === color_r26.attributeValue.id);
  }
}
function ProductComponent_ng_template_124_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 73)(1, "span", 19)(2, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "palette");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Color:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ProductComponent_ng_template_124_div_6_Template, 2, 4, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "mat-divider", 13);
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r12.product.parent == null ? null : ctx_r12.product.parent.variationAttributes == null ? null : ctx_r12.product.parent.variationAttributes.Color == null ? null : ctx_r12.product.parent.variationAttributes.Color.variationValues);
  }
}
function ProductComponent_ng_template_126_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const qty_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", qty_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](qty_r30);
  }
}
function ProductComponent_ng_template_126_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 77)(1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "library_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Quantity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 79)(6, "mat-form-field", 80)(7, "mat-icon", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "arrow_forward_ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function ProductComponent_ng_template_126_Template_mat_select_valueChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r31.quantity = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ProductComponent_ng_template_126_mat_option_10_Template, 2, 2, "mat-option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r14.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r14.availableQtys);
  }
}
function ProductComponent_ng_template_128_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r34 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", ctx_r33.product.rating && ctx_r33.product.rating.productRating >= a_r34);
  }
}
const _c0 = function () {
  return [1, 2, 3, 4, 5];
};
function ProductComponent_ng_template_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 85)(1, "span", 42)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "star_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 1)(5, "div", 86)(6, "span", 21)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Rating and reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ProductComponent_ng_template_128_mat_icon_10_Template, 2, 2, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 89)(12, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Add review");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r16.product.reviewsCount, " reviews");
  }
}
function ProductComponent_ng_template_130_app_price_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-price", 97);
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("amount", ctx_r35.product.priceDiscount.discountedValue)("currency", ctx_r35.product.currency);
  }
}
function ProductComponent_ng_template_130_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" -", ((ctx_r36.product.price.priceWithVat - ctx_r36.product.priceDiscount.discountedValue) / ctx_r36.product.price.priceWithVat * 100).toFixed(2), "% ");
  }
}
function ProductComponent_ng_template_130_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span")(1, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r37.product.stockType == null ? null : ctx_r37.product.stockType.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Arrival date: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 2, ctx_r37.product.stockType == null ? null : ctx_r37.product.stockType.startDatePreorder, "dd.MM.yyyy"), " ");
  }
}
function ProductComponent_ng_template_130_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Availability: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r38.product.stockType == null ? null : ctx_r38.product.stockType.name);
  }
}
function ProductComponent_ng_template_130_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r40 = ctx.$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", ctx_r39.product.rating && ctx_r39.product.rating.productRating >= a_r40);
  }
}
function ProductComponent_ng_template_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 91)(1, "div", 92)(2, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-price", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ProductComponent_ng_template_130_app_price_5_Template, 1, 2, "app-price", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ProductComponent_ng_template_130_span_6_Template, 2, 1, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ProductComponent_ng_template_130_span_8_Template, 6, 5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ProductComponent_ng_template_130_span_9_Template, 4, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 39)(11, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ProductComponent_ng_template_130_mat_icon_12_Template, 2, 2, "mat-icon", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("lineThrough", !!ctx_r18.product.priceDiscount)("amount", ctx_r18.product.price.priceWithVat)("currency", ctx_r18.product.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.product.priceDiscount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.product.priceDiscount);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r18.product.stockType == null ? null : ctx_r18.product.stockType.type) === ctx_r18.StockTypeEnum.PREORDER);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r18.product.stockType == null ? null : ctx_r18.product.stockType.type) !== ctx_r18.StockTypeEnum.PREORDER);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c0));
  }
}
class ProductComponent {
  constructor(router, api, cart) {
    this.router = router;
    this.api = api;
    this.cart = cart;
    this.addedToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.quantity = 1;
    this.availableQtys = Array.from({
      length: 10
    }, (_, i) => i + 1);
    this.loading = {
      addToCart: false
    };
    this.StockTypeEnum = _core_models_product_model__WEBPACK_IMPORTED_MODULE_0__.StockTypeEnum;
  }
  ngOnInit() {
    this.availableQtys = Array.from({
      length: this.product.stock ?? 10
    }, (_, i) => i + 1);
  }
  addToCart() {
    this.loading['addToCart'] = true;
    this.cart.addToCart(this.product, this.quantity).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.loading['addToCart'] = false)).subscribe(() => this.addedToCart.emit());
  }
  gotoVariation(attr, attrName) {
    const variation = this.findVariation(attr, attrName);
    if (variation) {
      this.router.navigate([`/product/${variation.seo?.metaUrl}/${variation.randomProductId}`]);
    }
  }
  findVariation(attr, attrName) {
    const variationNamesMap = {
      Size: 'Color',
      Color: 'Size'
    };
    if (!this.product.variationAttributes) {
      return null;
    }
    const otherSelectedVariationAttrName = variationNamesMap[attrName];
    const otherSelectedVariationAttrId = this.product.variationAttributes[otherSelectedVariationAttrName]?.variationValues[0].attributeValue.id;
    return this.product.parent?.variations?.find(variation => {
      console.log(variation?.variationAttributes?.[attrName]);
      // check if pass attribute matches
      if (attr.attributeValue.id !== variation.variationAttributes?.[attrName].variationValues[0].attributeValue.id) {
        return false;
      }
      // passed attr matches
      // now check if other matches
      if (otherSelectedVariationAttrId) {
        if (variation.variationAttributes[otherSelectedVariationAttrName].variationValues[0].attributeValue.id !== otherSelectedVariationAttrId) {
          return false;
        }
      }
      // both attrs, size and color matches
      return true;
    });
  }
  isVariationNotAvailable(attr, attrName) {
    return !this.findVariation(attr, attrName);
  }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) {
  return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService));
};
ProductComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ProductComponent,
  selectors: [["app-product"]],
  inputs: {
    product: "product"
  },
  outputs: {
    addedToCart: "addedToCart"
  },
  decls: 132,
  vars: 21,
  consts: [[1, "product", "d-flex", "justify-content-between", "flex-wrap"], [1, "d-flex", "flex-column", "w-100"], [1, "mt-lg-2", "d-none", "d-md-block", "overflow-hidden", "product-name"], [1, "title"], [1, "d-flex", "mt-md-3", "flex-column", "flex-md-row"], [1, "product-images-section", "me-4"], [3, "product"], [1, "mt-2", "d-block", "d-md-none"], [1, "product-descr", "d-flex", "justify-content-between", "flex-grow-1"], [1, "product-sizes-section", "d-flex", "flex-column", "pe-3"], [1, "mt-3", "mt-md-0"], [1, "text-primary"], [4, "ngTemplateOutlet"], [1, "my-3"], [1, "qty-mbl-section"], [4, "ngIf"], [1, "technology"], [1, "d-flex", "flex-column"], [1, "d-flex", "align-items-center"], [1, "icon-small", "me-1"], ["color", "primary"], [1, "section-heading"], [1, "d-flex", "flex-wrap", "descr"], [1, "d-flex", "justify-content-end"], ["href", "#"], [1, "product-attrs", "d-flex", "flex-column"], [1, "d-flex", "flex-column", "availability-price"], ["class", "d-flex justify-content-between align-items-center", 4, "ngIf"], [1, "fw-bold", "price"], [3, "amount", "currency"], ["class", "d-flex flex-column monthly-fee", 4, "ngIf"], [1, "my-2"], [1, "availability", "d-flex", "flex-column", "mb-3"], [1, "d-flex", "align-items-baseline"], [1, "d-inline-block", "stock-icon", "me-1u"], ["inline", "", "svgIcon", "package_box"], [1, "me-2"], [1, "text-decoration-underline", "fs-s"], ["class", "section-text mt-2", 4, "ngIf"], [1, "mt-3"], [1, "mt-2u"], [1, "d-flex", "align-items-start"], [1, "icon-small", "me-1", "mt-1"], [1, "d-flex", "justify-content-between", "mt-2", "section-text"], [1, "sub-text"], [1, "d-flex", "justify-content-between", "flex-wrap", "align-items-center", "mt-5", "gap-1"], [1, "btn", "btn-primary", "d-flex", "justify-content-center", "align-items-center", "add-cart", 3, "click"], [1, "me-3"], [3, "appLoading"], [1, "btn", "d-flex", "justify-content-center", "d-md-none", "favorite"], [1, "fav-icon-wrapper", "cur-pointer", "d-none", "d-md-flex"], ["color", "accent"], [1, "d-flex", "mt-3", "flex-wrap"], ["sizeAttr", ""], ["colorAttr", ""], ["quantityRef", ""], ["reviews", ""], ["availabilityPriceMobile", ""], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "fw-bold", "discount"], [3, "lineThrough", "amount", "currency"], [1, "badge", "text-white", "bg-danger", "fw-bold"], [1, "d-flex", "flex-column", "monthly-fee"], [1, "fw-bold", "title"], [1, "fw-bold", "value"], [3, "amount"], [1, "section-text", "mt-2"], [1, "d-flex", "mt-1", "align-items-center", "overflow-scroll", "hide-scrollbar"], [1, "section-heading", "me-4"], ["class", "d-flex flex-wrap", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-wrap"], [1, "cur-pointer", "rectangle", "m-1", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [1, "px-1"], [1, "d-flex", "align-items-center", "overflow-scroll", "hide-scrollbar"], [1, "section-heading", "color-heading"], [4, "ngFor", "ngForOf"], [1, "cur-pointer", "rectangle", "m-1", 3, "click"], [1, "icon-small", "me-1", "qty-icon"], [1, "me-4", "section-heading"], [1, "d-inline"], ["color", "primary", "appearance", "outline", 1, "pb-0", "filter-select", "qty-field"], ["matSuffix", "", "color", "primar", 2, "rotate", "90deg"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "d-flex", "reviews"], [1, "d-flex", "justify-content-between"], [1, "rating-star"], ["inline", "", "class", "icon", 3, "selected", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "mt-2"], ["inline", "", 1, "icon"], [1, "d-none", "flex-column", "availability-price-mobile"], [1, "mt-3", "price-mobile"], [1, "fw-bold", "me-2"], [1, "me-2", 3, "lineThrough", "amount", "currency"], ["class", "text-danger fw-bold me-2", 3, "amount", "currency", 4, "ngIf"], ["class", "badge text-white bg-danger fw-bold", 4, "ngIf"], [1, "text-danger", "fw-bold", "me-2", 3, "amount", "currency"], [1, "text-decoration-underline", "me-2"]],
  template: function ProductComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-img-swiper", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7)(10, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Product ID: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ProductComponent_ng_container_18_Template, 1, 0, "ng-container", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "mat-divider", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ProductComponent_ng_container_21_Template, 1, 0, "ng-container", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "mat-divider", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, ProductComponent_ng_container_23_Template, 2, 1, "ng-container", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, ProductComponent_ng_container_24_Template, 2, 1, "ng-container", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 16)(26, "div", 17)(27, "div", 18)(28, "span", 19)(29, "mat-icon", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "emoji_objects");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Technology: Lorem ipsum ++");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 22)(34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 23)(37, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Read more");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "mat-divider", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, ProductComponent_ng_container_40_Template, 1, 0, "ng-container", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 25)(42, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, ProductComponent_div_43_Template, 5, 4, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "app-price", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, ProductComponent_div_46_Template, 5, 1, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "mat-divider", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 32)(49, "div", 33)(50, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "mat-icon", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 1)(53, "span", 21)(54, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Stock status:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, ProductComponent_div_58_Template, 4, 4, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "mat-divider", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, ProductComponent_ng_container_61_Template, 1, 0, "ng-container", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "mat-divider", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 41)(64, "span", 42)(65, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "local_shipping");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 1)(68, "span", 21)(69, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "Delivery:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Standard delivery");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 43)(74, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "24 hours until 6 PM");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "Read more");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "mat-divider", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 41)(80, "span", 42)(81, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "replay");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](83, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 1)(85, "span", 21)(86, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Return Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 43)(89, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "Return in 15 days");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "Read more");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](93, "mat-divider", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 41)(95, "span", 42)(96, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "verified");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](98, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "div", 1)(100, "span", 21)(101, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102, "Warranty terms");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "div", 43)(104, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "24 mo. warranty included");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "Read more");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "div", 45)(109, "button", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_109_listener() {
        return ctx.addToCart();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "mat-icon", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, "shopping_cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "span", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, "Add to cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "button", 49)(115, "mat-icon", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](116);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117, " Favorite ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "span", 50)(119, "mat-icon", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](121, "div", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](122, ProductComponent_ng_template_122_Template, 8, 1, "ng-template", null, 53, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](124, ProductComponent_ng_template_124_Template, 8, 1, "ng-template", null, 54, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](126, ProductComponent_ng_template_126_Template, 11, 2, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](128, ProductComponent_ng_template_128_Template, 16, 3, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](130, ProductComponent_ng_template_130_Template, 13, 9, "ng-template", null, 57, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](127);
      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](129);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](131);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.product.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("product", ctx.product);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.product.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("#", ctx.product.id, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.product.parent == null ? null : ctx.product.parent.variationAttributes == null ? null : ctx.product.parent.variationAttributes.Size);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.product.parent == null ? null : ctx.product.parent.variationAttributes == null ? null : ctx.product.parent.variationAttributes.Color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.product.priceDiscount);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("amount", ctx.product.priceDiscount ? ctx.product.priceDiscount == null ? null : ctx.product.priceDiscount.discountedValue : ctx.product.price.priceWithVat)("currency", ctx.product.currency);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.product.monthlyPrice);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.product.stockType == null ? null : ctx.product.stockType.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.product.stockType == null ? null : ctx.product.stockType.type) === ctx.StockTypeEnum.PREORDER);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("appLoading", ctx.loading["addToCart"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.product.favorite ? "btn-outline-danger" : "btn-outline-primary");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.product.favorite ? "favorite" : "favorite_outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.product.favorite ? "favorite" : "favorite_outline");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, _shared_components_price_price_component__WEBPACK_IMPORTED_MODULE_3__.PriceComponent, _shared_directives_loading_directive__WEBPACK_IMPORTED_MODULE_4__.LoadingDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLegacySuffix, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_12__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_13__.MatLegacyOption, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, _img_swiper_img_swiper_component__WEBPACK_IMPORTED_MODULE_5__.ImgSwiperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: ["[_nghost-%COMP%]     .mat-select-arrow-wrapper {\n  display: none;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline-start, [_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline-end {\n  border: 1px solid #1b3664;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline-end {\n  border-left-style: none;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline-start {\n  border-right-style: none;\n}\n[_nghost-%COMP%]     .filter-select .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n[_nghost-%COMP%]     .filter-select .mat-form-field-wrapper .mat-form-field-infix {\n  padding: 0.3rem 0;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.icon-small[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 21px;\n  width: 21px;\n  padding: 2px;\n  font-size: 8px;\n  border: 1px solid #e2e2e2;\n  border-radius: 5px;\n}\n.icon-small[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  font-size: 16px;\n}\n\n.stock-icon[_ngcontent-%COMP%] {\n  height: 21px;\n  width: 21px;\n  padding: 2px;\n  font-size: 8px;\n  border: 1px solid #e2e2e2;\n  border-radius: 5px;\n}\n.stock-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  color: #e2e2e2;\n}\n.icon.selected[_ngcontent-%COMP%] {\n  color: #f06724;\n}\n\n.fav-icon-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #54688b;\n  border-radius: 4px;\n}\n\n.me-1px[_ngcontent-%COMP%] {\n  margin-right: 1px;\n}\n\n.product[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  font-size: 12px;\n  border: 1px solid #707070;\n  border-radius: 10px;\n}\n.product[_ngcontent-%COMP%]   .rectangle.unavailable[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background: linear-gradient(to top left, #e2e2e2 calc(50% - 1px), #707070, #e2e2e2 calc(50% + 1px));\n}\n.product[_ngcontent-%COMP%]   .rectangle.selected[_ngcontent-%COMP%] {\n  border: 1px solid #f06724;\n}\n.product[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.product[_ngcontent-%COMP%]   .section-heading.color-heading[_ngcontent-%COMP%] {\n  margin-right: 0.75rem;\n}\n.product[_ngcontent-%COMP%]   .section-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.product[_ngcontent-%COMP%]   .section-text[_ngcontent-%COMP%]   .sub-text[_ngcontent-%COMP%] {\n  color: #707070;\n}\n.product[_ngcontent-%COMP%]   .product-images-section[_ngcontent-%COMP%] {\n  max-height: 430px;\n  width: 480px;\n}\n.product[_ngcontent-%COMP%]   .product-sizes-section[_ngcontent-%COMP%] {\n  width: 400px;\n}\n.product[_ngcontent-%COMP%]   .product-sizes-section[_ngcontent-%COMP%]   .qty-mbl-section[_ngcontent-%COMP%] {\n  display: none;\n}\n.product[_ngcontent-%COMP%]   .qty-field[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 30px;\n}\n.product[_ngcontent-%COMP%]   .price-mobile[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.product[_ngcontent-%COMP%]   .product-attrs[_ngcontent-%COMP%] {\n  margin-top: -3rem;\n  width: 300px;\n}\n.product[_ngcontent-%COMP%]   .product-attrs[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #707070;\n}\n.product[_ngcontent-%COMP%]   .product-attrs[_ngcontent-%COMP%]   .discount-percent[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.product[_ngcontent-%COMP%]   .product-attrs[_ngcontent-%COMP%]   .monthly-fee[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.product[_ngcontent-%COMP%]   .product-attrs[_ngcontent-%COMP%]   .monthly-fee[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.product[_ngcontent-%COMP%]   .product-attrs[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 36px;\n}\n.product[_ngcontent-%COMP%]   .add-cart[_ngcontent-%COMP%] {\n  font-size: 22px;\n  height: 40px;\n  min-width: 160px;\n}\n.product[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%] {\n  width: 42%;\n  min-width: 125px;\n}\n.product[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%]:active, .product[_ngcontent-%COMP%]   .favorite[_ngcontent-%COMP%]:focus {\n  background: white;\n  color: var(--bs-btn-color);\n}\n.product[_ngcontent-%COMP%]   .rating-star[_ngcontent-%COMP%] {\n  font-size: 40px;\n  line-height: 32px;\n}\n.product[_ngcontent-%COMP%]   .product-descr[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%]   .descr[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #707070;\n  size: 14px;\n}\n@media screen and (max-width: 1280px) {\n  .product[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n    width: 26px;\n    height: 26px;\n    font-size: 8px;\n  }\n  .product[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .product[_ngcontent-%COMP%]   .section-text[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .product[_ngcontent-%COMP%]   .product-attrs[_ngcontent-%COMP%]   .monthly-fee[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .product[_ngcontent-%COMP%]   .product-attrs[_ngcontent-%COMP%]   .monthly-fee[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .product[_ngcontent-%COMP%]   .product-attrs[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .product[_ngcontent-%COMP%]   .add-cart[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .product[_ngcontent-%COMP%]   .rating-star[_ngcontent-%COMP%] {\n    font-size: 32px;\n    line-height: 28px;\n  }\n}\n@media screen and (min-width: 1161px) and (max-width: 1280px) {\n  .product[_ngcontent-%COMP%]   .product-images-section[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n  .product[_ngcontent-%COMP%]   .product-sizes-section[_ngcontent-%COMP%] {\n    width: 370px;\n  }\n  .product[_ngcontent-%COMP%]   .product-attrs[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n}\n@media screen and (min-width: 1061px) and (max-width: 1160px) {\n  .product[_ngcontent-%COMP%]   .product-images-section[_ngcontent-%COMP%] {\n    width: 370px;\n  }\n  .product[_ngcontent-%COMP%]   .product-sizes-section[_ngcontent-%COMP%] {\n    width: 340px;\n  }\n  .product[_ngcontent-%COMP%]   .product-attrs[_ngcontent-%COMP%] {\n    width: 270px;\n  }\n}\n@media screen and (max-width: 1060px) {\n  .product[_ngcontent-%COMP%]   .product-descr[_ngcontent-%COMP%]   .product-sizes-section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .product[_ngcontent-%COMP%]   .product-descr[_ngcontent-%COMP%]   .product-sizes-section[_ngcontent-%COMP%]   .availability-price-mobile[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .product[_ngcontent-%COMP%]   .product-descr[_ngcontent-%COMP%]   .product-sizes-section[_ngcontent-%COMP%]   .reviews[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .product[_ngcontent-%COMP%]   .product-descr[_ngcontent-%COMP%]   .product-sizes-section[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .product[_ngcontent-%COMP%]   .product-descr[_ngcontent-%COMP%]   .product-sizes-section[_ngcontent-%COMP%]   .qty-mbl-section[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .product[_ngcontent-%COMP%]   .product-descr[_ngcontent-%COMP%]   .product-attrs[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-right: 1rem;\n    margin-top: 0;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1061px) {\n  .product[_ngcontent-%COMP%]   .product-images-section[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .product[_ngcontent-%COMP%]   .product-descr[_ngcontent-%COMP%] {\n    width: 50%;\n    flex-direction: column;\n  }\n  .product[_ngcontent-%COMP%]   .product-descr[_ngcontent-%COMP%]   .availability-price[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media screen and (max-width: 768px) {\n  .product[_ngcontent-%COMP%]   .product-images-section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .product[_ngcontent-%COMP%]   .add-cart[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n  .product[_ngcontent-%COMP%]   .product-descr[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n  }\n  .product[_ngcontent-%COMP%]   .product-descr[_ngcontent-%COMP%]   .availability-price[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .product[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .product[_ngcontent-%COMP%]   .section-text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media screen and (min-width: 1061px) {\n  .product-name[_ngcontent-%COMP%] {\n    width: calc(100% - 285px);\n    white-space: nowrap;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdC1jYXRlZ29yeS9wcm9kdWN0L3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zdHlsaW5ncy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0U7RUFDRSxhQUFBO0FBSko7QUFPRTtFQUNFLHlCQUFBO0FBTEo7QUFRRTtFQUNFLHVCQUFBO0FBTko7QUFTRTtFQUNFLHdCQUFBO0FBUEo7QUFhSTtFQUNFLGlCQUFBO0FBWE47QUFhTTtFQUNFLGlCQUFBO0FBWFI7O0FBb0JBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQWpCRjs7QUFvQkE7RUFFRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBbEJGO0FBb0JFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBbEJKOztBQXVCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBcEJGO0FBc0JFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFwQko7O0FBd0JBO0VBQ0UsY0FBQTtBQXJCRjtBQXVCRTtFQUNFLGNDNkJjO0FEbERsQjs7QUF5QkE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBdEJGOztBQTZCQTtFQUNFLGlCQUFBO0FBMUJGOztBQStCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUE1Qko7QUE4Qkk7RUFDRSxtQkFBQTtFQUNBLG1HQUFBO0FBNUJOO0FBK0JJO0VBQ0UseUJBQUE7QUE3Qk47QUFpQ0U7RUFDRSxlQUFBO0FBL0JKO0FBaUNJO0VBQ0UscUJBQUE7QUEvQk47QUFtQ0U7RUFDRSxlQUFBO0FBakNKO0FBbUNJO0VBQ0UsY0FBQTtBQWpDTjtBQXFDRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQW5DSjtBQXNDRTtFQUNFLFlBQUE7QUFwQ0o7QUFzQ0k7RUFDRSxhQUFBO0FBcENOO0FBNENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUExQ0o7QUE2Q0U7RUFDRSxlQUFBO0FBM0NKO0FBOENFO0VBQ0UsaUJBQUE7RUFFQSxZQUFBO0FBN0NKO0FBK0NJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUE3Q047QUErQ0k7RUFDRSxlQUFBO0FBN0NOO0FBZ0RNO0VBQ0UsZUFBQTtBQTlDUjtBQWlETTtFQUNFLGVBQUE7QUEvQ1I7QUFrREk7RUFDRSxlQUFBO0FBaEROO0FBb0RFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQWxESjtBQXFERTtFQUNFLFVBQUE7RUFBWSxnQkFBQTtBQWxEaEI7QUFvREk7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0FBbEROO0FBc0RFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBcERKO0FBeURNO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUF2RFI7QUE0REU7RUFDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQTFESjtFQTZERTtJQUNFLGVBQUE7RUEzREo7RUE4REU7SUFDRSxlQUFBO0VBNURKO0VBa0VNO0lBQ0UsZUFBQTtFQWhFUjtFQW1FTTtJQUNFLGVBQUE7RUFqRVI7RUFvRUk7SUFDRSxlQUFBO0VBbEVOO0VBc0VFO0lBQ0UsZUFBQTtFQXBFSjtFQXVFRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQXJFSjtBQUNGO0FBeUVFO0VBRUU7SUFDRSxZQUFBO0VBeEVKO0VBMkVFO0lBQ0UsWUFBQTtFQXpFSjtFQTRFRTtJQUNFLFlBQUE7RUExRUo7QUFDRjtBQThFRTtFQUVFO0lBQ0UsWUFBQTtFQTdFSjtFQWdGRTtJQUNFLFlBQUE7RUE5RUo7RUFpRkU7SUFDRSxZQUFBO0VBL0VKO0FBQ0Y7QUFrRkU7RUFHSTtJQUVFLFdBQUE7RUFuRk47RUFxRk07SUFDRSx3QkFBQTtFQW5GUjtFQXNGTTtJQUNFLHdCQUFBO0VBcEZSO0VBdUZNO0lBQ0Usd0JBQUE7RUFyRlI7RUF3Rk07SUFDRSxjQUFBO0VBdEZSO0VBMEZJO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtFQXhGTjtBQUNGO0FBNEZFO0VBRUU7SUFDRSxVQUFBO0VBM0ZKO0VBOEZFO0lBQ0UsVUFBQTtJQUNBLHNCQUFBO0VBNUZKO0VBOEZJO0lBQ0Usd0JBQUE7RUE1Rk47QUFDRjtBQWdHRTtFQUNFO0lBQ0UsV0FBQTtFQTlGSjtFQWlHRTtJQUNFLFVBQUE7RUEvRko7RUFrR0U7SUFDRSxXQUFBO0lBQ0Esc0JBQUE7RUFoR0o7RUFrR0k7SUFDRSx3QkFBQTtFQWhHTjtFQW9HRTtJQUNFLGVBQUE7RUFsR0o7RUFxR0U7SUFDRSxlQUFBO0VBbkdKO0FBQ0Y7O0FBeUdBO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLG1CQUFBO0VBdEdGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOm1hcCc7XG5AaW1wb3J0IFwic3JjL3N0eWxpbmdzL2JzX3ZhcmlhYmxlc1wiO1xuXG46aG9zdCA6Om5nLWRlZXAge1xuXG4gIC5tYXQtc2VsZWN0LWFycm93LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXN0YXJ0LCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCB7XG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXN0YXJ0IHtcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4gIH1cblxuICAuZmlsdGVyLXNlbGVjdCB7XG5cblxuICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuXG4gICAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMDtcbiAgICAgIH1cbiAgICB9XG5cblxuICB9XG5cbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaWNvbi1zbWFsbCB7XG5cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDIxcHg7XG4gIHdpZHRoOiAyMXB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgbWF0LWljb24ge1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxufVxuXG4uc3RvY2staWNvbiB7XG4gIGhlaWdodDogMjFweDtcbiAgd2lkdGg6IDIxcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICBtYXQtaWNvbiB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICB9XG59XG5cbi5pY29uIHtcbiAgY29sb3I6ICNlMmUyZTI7XG5cbiAgJi5zZWxlY3RlZCB7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gIH1cbn1cblxuLmZhdi1pY29uLXdyYXBwZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTQ2ODhiO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC8vICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8vICBwYWRkaW5nOiAzcHggM3B4IDA7XG4gIC8vICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLy8gIGhlaWdodDogMnJlbTtcbn1cblxuLm1lLTFweCB7XG4gIG1hcmdpbi1yaWdodDogMXB4XG59XG5cbi5wcm9kdWN0IHtcblxuICAucmVjdGFuZ2xlIHtcbiAgICB3aWR0aDogMzRweDtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgICYudW5hdmFpbGFibGUge1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgI2UyZTJlMiBjYWxjKDUwJSAtIDFweCksICM3MDcwNzAgLCAjZTJlMmUyIGNhbGMoNTAlICsgMXB4KSApO1xuICAgIH1cblxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAuc2VjdGlvbi1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG5cbiAgICAmLmNvbG9yLWhlYWRpbmcge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5zZWN0aW9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIC5zdWItdGV4dCB7XG4gICAgICBjb2xvcjogIzcwNzA3MFxuICAgIH1cbiAgfVxuXG4gIC5wcm9kdWN0LWltYWdlcy1zZWN0aW9uIHtcbiAgICBtYXgtaGVpZ2h0OiA0MzBweDtcbiAgICB3aWR0aDogNDgwcHg7XG4gIH1cblxuICAucHJvZHVjdC1zaXplcy1zZWN0aW9uIHtcbiAgICB3aWR0aDogNDAwcHg7XG5cbiAgICAucXR5LW1ibC1zZWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLnF0eS1pY29uIHtcbiAgICAvL2hlaWdodDogOXB4OyB3aWR0aDogOHB4O1xuICB9XG5cbiAgLnF0eS1maWVsZCB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiAzMHB4XG4gIH1cblxuICAucHJpY2UtbW9iaWxlIHtcbiAgICBmb250LXNpemU6IDE0cHhcbiAgfVxuXG4gIC5wcm9kdWN0LWF0dHJzIHtcbiAgICBtYXJnaW4tdG9wOiAtM3JlbTtcblxuICAgIHdpZHRoOiAzMDBweDtcblxuICAgIC5kaXNjb3VudCB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICB9XG4gICAgLmRpc2NvdW50LXBlcmNlbnQge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICAubW9udGhseS1mZWUge1xuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAudmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5wcmljZSB7XG4gICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgfVxuICB9XG5cbiAgLmFkZC1jYXJ0IHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1pbi13aWR0aDogMTYwcHg7XG4gIH1cblxuICAuZmF2b3JpdGUge1xuICAgIHdpZHRoOiA0MiU7IG1pbi13aWR0aDogMTI1cHg7XG5cbiAgICAmOmFjdGl2ZSwgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiB2YXIoLS1icy1idG4tY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIC5yYXRpbmctc3RhciB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4XG4gIH1cblxuICAucHJvZHVjdC1kZXNjciB7XG4gICAgLnRlY2hub2xvZ3kge1xuICAgICAgLmRlc2NyIHAge1xuICAgICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgICAgc2l6ZTogMTRweFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAgIC5yZWN0YW5nbGUge1xuICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICBmb250LXNpemU6IDhweDtcbiAgICB9XG5cbiAgICAuc2VjdGlvbi1oZWFkaW5nIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuc2VjdGlvbi10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1hdHRycyB7XG5cbiAgICAgIC5tb250aGx5LWZlZSB7XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5wcmljZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWRkLWNhcnQge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC5yYXRpbmctc3RhciB7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICBsaW5lLWhlaWdodDogMjhweFxuICAgIH1cblxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE2MXB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG5cbiAgICAucHJvZHVjdC1pbWFnZXMtc2VjdGlvbiB7XG4gICAgICB3aWR0aDogNDAwcHg7XG4gICAgfVxuXG4gICAgLnByb2R1Y3Qtc2l6ZXMtc2VjdGlvbiB7XG4gICAgICB3aWR0aDogMzcwcHg7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtYXR0cnMge1xuICAgICAgd2lkdGg6IDI2MHB4O1xuICAgIH1cblxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA2MXB4KSBhbmQgKG1heC13aWR0aDogMTE2MHB4KSB7XG5cbiAgICAucHJvZHVjdC1pbWFnZXMtc2VjdGlvbiB7XG4gICAgICB3aWR0aDogMzcwcHg7XG4gICAgfVxuXG4gICAgLnByb2R1Y3Qtc2l6ZXMtc2VjdGlvbiB7XG4gICAgICB3aWR0aDogMzQwcHg7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtYXR0cnMge1xuICAgICAgd2lkdGg6IDI3MHB4O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjBweCkge1xuXG4gICAgLnByb2R1Y3QtZGVzY3Ige1xuICAgICAgLnByb2R1Y3Qtc2l6ZXMtc2VjdGlvbiB7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLmF2YWlsYWJpbGl0eS1wcmljZS1tb2JpbGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXZpZXdzIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAudGVjaG5vbG9neSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLnF0eS1tYmwtc2VjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnByb2R1Y3QtYXR0cnMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwNjFweCkge1xuXG4gICAgLnByb2R1Y3QtaW1hZ2VzLXNlY3Rpb24ge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1kZXNjciB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgLmF2YWlsYWJpbGl0eS1wcmljZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5wcm9kdWN0LWltYWdlcy1zZWN0aW9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5hZGQtY2FydCB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWRlc2NyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgLmF2YWlsYWJpbGl0eS1wcmljZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VjdGlvbi1oZWFkaW5nIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG5cbiAgICAuc2VjdGlvbi10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNjFweCkge1xuICAucHJvZHVjdC1uYW1lIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjg1cHgpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbn1cbiIsIi8vQGltcG9ydCBcIn5ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XG4vL0BpbXBvcnQgXCJ+bm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xuXG4kYmx1ZS1wYWxldHRlOiAoXG4gIDUwOiAjZTRlN2VjLFxuICAxMDA6ICNlOWViZjAsXG4gIDIwMDogI2M2Y2NkYixcbiAgMzAwOiAjOGQ5YmIyLFxuICA0MDA6ICM1NDY4OGIsXG4gIDUwMDogIzFiMzY2NCxcbiAgNjAwOiAjMTgzMDVjLFxuICA3MDA6ICMxNDI5NTIsXG4gIDgwMDogIzEwMjI0OCxcbiAgOTAwOiAjMDgxNjM2LFxuICBBMTAwOiAjNmY5MmZmLFxuICBBMjAwOiAjM2M2Y2ZmLFxuICBBNDAwOiAjMDk0NWZmLFxuICBBNzAwOiAjMDAzYWVmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAjMDAwMDAwLFxuICAgIDEwMDogIzAwMDAwMCxcbiAgICAyMDA6ICMwMDAwMDAsXG4gICAgMzAwOiAjZmZmZmZmLFxuICAgIDQwMDogI2ZmZmZmZixcbiAgICA1MDA6ICNmZmZmZmYsXG4gICAgNjAwOiAjZmZmZmZmLFxuICAgIDcwMDogI2ZmZmZmZixcbiAgICA4MDA6ICNmZmZmZmYsXG4gICAgOTAwOiAjZmZmZmZmLFxuICAgIEExMDA6ICMwMDAwMDAsXG4gICAgQTIwMDogI2ZmZmZmZixcbiAgICBBNDAwOiAjZmZmZmZmLFxuICAgIEE3MDA6ICNmZmZmZmYsXG4gICksXG4pO1xuXG4kb3JhbmdlLXBhbGV0dGU6IChcbiAgNTA6ICNmZGVkZTUsXG4gIDEwMDogI2ZlZjBlYSxcbiAgMjAwOiAjZmJkOWM4LFxuICAzMDA6ICNmOGIzOTIsXG4gIDQwMDogI2Y0OGQ1YixcbiAgNTAwOiAjZjA2NzI0LFxuICA2MDA6ICNlZTVmMjAsXG4gIDcwMDogI2VjNTQxYixcbiAgODAwOiAjZTk0YTE2LFxuICA5MDA6ICNlNTM5MGQsXG4gIEExMDA6ICNmZmZmZmYsXG4gIEEyMDA6ICNmZmUzZGQsXG4gIEE0MDA6ICNmZmI4YWEsXG4gIEE3MDA6ICNmZmEzOTAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICNmZmZmZmYsXG4gICAgMTAwOiAjZmZmZmZmLFxuICAgIDIwMDogI2ZmZmZmZixcbiAgICAzMDA6ICNmZmZmZmYsXG4gICAgNDAwOiAjZmZmZmZmLFxuICAgIDUwMDogI2ZmZmZmZixcbiAgICA2MDA6ICNmZmZmZmYsXG4gICAgNzAwOiAjZmZmZmZmLFxuICAgIDgwMDogI2ZmZmZmZixcbiAgICA5MDA6ICNmZmZmZmYsXG4gICAgQTEwMDogI2ZmZmZmZixcbiAgICBBMjAwOiAjZmZmZmZmLFxuICAgIEE0MDA6ICNmZmZmZmYsXG4gICAgQTcwMDogI2ZmZmZmZixcbiAgKSxcbik7XG5cbiRyZWQtcGFsZXR0ZTogKFxuICA1MDogI2ZmZWJlZSxcbiAgMTAwOiAjZmZjZGQyLFxuICAyMDA6ICNlZjlhOWEsXG4gIDMwMDogI2U1NzM3MyxcbiAgNDAwOiAjZWY1MzUwLFxuICA1MDA6ICNmZjAwMDAsXG4gIDYwMDogI2U1MzkzNSxcbiAgNzAwOiAjZDMyZjJmLFxuICA4MDA6ICNjNjI4MjgsXG4gIDkwMDogI2I3MWMxYyxcbiAgQTEwMDogI2ZmOGE4MCxcbiAgQTIwMDogI2ZmNTI1MixcbiAgQTQwMDogI2ZmMTc0NCxcbiAgQTcwMDogI2Q1MDAwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogcmdiYShibGFjaywgMC44NyksXG4gICAgMTAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICAyMDA6IHJnYmEoYmxhY2ssIDAuODcpLFxuICAgIDMwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgNDAwOiByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgICA1MDA6IHdoaXRlLFxuICAgIDYwMDogd2hpdGUsXG4gICAgNzAwOiB3aGl0ZSxcbiAgICA4MDA6IHdoaXRlLFxuICAgIDkwMDogd2hpdGUsXG4gICAgQTEwMDogcmdiYShibGFjaywgMC44NyksXG4gICAgQTIwMDogd2hpdGUsXG4gICAgQTQwMDogd2hpdGUsXG4gICAgQTcwMDogd2hpdGUsXG4gIClcbik7XG5cbiRwcmltYXJ5LXBhbGV0dGU6ICRibHVlLXBhbGV0dGU7XG4kYWNjZW50LXBhbGV0dGU6ICRvcmFuZ2UtcGFsZXR0ZTtcbiRzZWNvbmRhcnktcGFsZXR0ZTogJG9yYW5nZS1wYWxldHRlO1xuXG4kcHJpbWFyeS1jb2xvcjogbWFwLWdldCgkcHJpbWFyeS1wYWxldHRlLCA1MDApO1xuJHNlY29uZGFyeS1jb2xvcjogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDUwMCk7XG4kc2Vjb25kYXJ5LTMwMDogbWFwLWdldCgkc2Vjb25kYXJ5LXBhbGV0dGUsIDMwMCk7XG4kcHJpbWFyeS00MDA6IG1hcC1nZXQoJHByaW1hcnktcGFsZXR0ZSwgNDAwKTtcbiRlcnJvci1jb2xvcjogbWFwLWdldCgkcmVkLXBhbGV0dGUsIDUwMCk7XG5cbiRtYXgtd2lkdGg6IDEzNjZweDtcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5169:
/*!*********************************************************************************!*\
  !*** ./src/app/product-category/product/promo-banner/promo-banner.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromoBannerComponent": () => (/* binding */ PromoBannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/auto-destroy */ 7990);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_price_price_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/price/price.component */ 9563);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _shared_pipes_resource_url_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/resource-url.pipe */ 6531);










function PromoBannerComponent_div_0_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PromoBannerComponent_div_0_Template_button_click_34_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "mat-divider", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
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
class PromoBannerComponent extends _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__.AutoDestroy {
  constructor(api) {
    super();
    this.api = api;
    this.addToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.api.get('product/promo-product/2').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(({
      data
    }) => {
      this.product = data;
    });
  }
  _addToCart() {
    this.addToCart.emit();
  }
}
PromoBannerComponent.ɵfac = function PromoBannerComponent_Factory(t) {
  return new (t || PromoBannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
};
PromoBannerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PromoBannerComponent,
  selectors: [["app-promo-banner"]],
  inputs: {
    categoryId: "categoryId"
  },
  outputs: {
    addToCart: "addToCart"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "icon-small", "me-2"], ["inline", "", 1, "icon"], [1, "fs-l"], [1, "d-flex", "banner", "mt-3"], ["width", "160px", 1, "h-inh", 3, "src"], [1, "py-3", "ps-3", "ps-lg-5", "flex-grow-1"], [1, "fs-s", "fw-bold"], [1, "d-flex", "align-items-center", "fs-2xs"], [1, "d-flex", "flex-column", "flex-lg-row"], [1, "btn", "btn-outline-danger", "bg-white", "fw-bold", "text-nowrap", "fs-inh"], [1, "btn", "bg-danger", "text-white", "fw-bold", "ms-0", "mt-1", "mt-lg-0", "ms-lg-3", "text-nowrap", "fs-inh"], [1, "d-flex", "flex-column", "ms-3"], [1, "mx-1"], ["href", "#"], [1, "fw-bold", "align-self-baseline", "ms-3", "ms-lg-6", "fs-3xl"], [3, "amount"], [1, "d-flex", "align-items-center", "me-3"], [1, "btn", "btn-primary", "d-flex", "justify-content-center", "align-items-center", "text-nowrap", 3, "click"], [1, "me-3"], [1, "fav-icon-wrapper", "cur-pointer", "d-flex", "ms-3"], ["color", "accent"], [1, "my-4"]],
  template: function PromoBannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, PromoBannerComponent_div_0_Template, 43, 9, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_price_price_component__WEBPACK_IMPORTED_MODULE_2__.PriceComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _shared_pipes_resource_url_pipe__WEBPACK_IMPORTED_MODULE_3__.ResourceUrlPipe],
  styles: [".icon-small[_ngcontent-%COMP%] {\n  border: 1px solid #e2e2e2;\n  border-radius: 5px;\n  font-size: 11px;\n  height: 16px;\n  width: 17px;\n  padding-top: 1px;\n}\n.icon-small[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  rotate: -90deg;\n}\n\n.banner[_ngcontent-%COMP%] {\n  height: 116px;\n  border-radius: 5px;\n  box-shadow: 8px 8px 13px 0 rgba(0, 0, 0, 0.13);\n  background-color: #e9ebf0;\n}\n.banner[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdC1jYXRlZ29yeS9wcm9kdWN0L3Byb21vLWJhbm5lci9wcm9tby1iYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSx5QkFBQTtBQUFGO0FBR0U7RUFDRSxpQkFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tc21hbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTdweDtcbiAgcGFkZGluZy10b3A6IDFweDtcblxuICAuaWNvbiB7XG4gICAgcm90YXRlOiAtOTBkZWc7XG4gIH1cbn1cblxuLmJhbm5lciB7XG4gIGhlaWdodDogMTE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogOHB4IDhweCAxM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWJmMDtcbiAgLy9oZWlnaHQ6IDExOHB4XG5cbiAgPiBpbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_product-category_product_product_module_ts.js.map