"use strict";
(self["webpackChunkeshop"] = self["webpackChunkeshop"] || []).push([["src_app_core_common_form2_ts"],{

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

/***/ })

}]);
//# sourceMappingURL=src_app_core_common_form2_ts.js.map