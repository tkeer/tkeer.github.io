"use strict";
(self["webpackChunkeshop"] = self["webpackChunkeshop"] || []).push([["default-src_app_account_pages_addresses_edit_edit_component_ts-src_app_core_guards_auth_guard-2abda9"],{

/***/ 3195:
/*!*****************************************************************************!*\
  !*** ./src/app/account/components/auto-complete/auto-complete.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoCompleteComponent": () => (/* binding */ AutoCompleteComponent)
/* harmony export */ });
/* harmony import */ var _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common/auto-destroy */ 7990);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 1204);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-core */ 7090);
/* harmony import */ var _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-autocomplete */ 6523);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 7578);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 8699);












function AutoCompleteComponent_mat_spinner_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 9);
  }
}
function AutoCompleteComponent_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "arrow_forward_ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AutoCompleteComponent_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r5.label, " ");
  }
}
const _c0 = function (a0) {
  return {
    default: a0
  };
};
function AutoCompleteComponent_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const error_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, "validation." + error_r6.key, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, error_r6.value)), " ");
  }
}
class AutoCompleteComponent extends _core_common_auto_destroy__WEBPACK_IMPORTED_MODULE_0__.AutoDestroy {
  constructor() {
    super(...arguments);
    this.appearance = 'fill';
    this.loading = false;
    this.initialOptions = [];
    this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl();
    this.displayFn = optionId => {
      const option = this.options.find(option => option.value === optionId);
      return option && option.label ? option.label : '';
    };
  }
  ngOnChanges(changes) {
    const optionsChange = changes['options'];
    if (optionsChange) {
      this.initialOptions = optionsChange.currentValue;
      this.searchForm.setValue(this.control.getRawValue());
    }
  }
  ngOnInit() {
    // let initialOptions = this.options;
    this.searchForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(150)).subscribe(term => {
      // @todo might need to watch for changes in option lists (data.options)
      // if (initialOptions?.length === 0) {
      //   initialOptions = this.options
      // }
      // @todo how to avoid searching for integer value?
      // term = ""+term;
      if (term && !term.trim) {
        return;
      }
      this.options = this.initialOptions?.filter(attr => {
        return attr.label.trim().toLowerCase().search(term?.trim().toLowerCase()) >= 0;
      });
    });
  }
}
AutoCompleteComponent.ɵfac = /*@__PURE__*/function () {
  let ɵAutoCompleteComponent_BaseFactory;
  return function AutoCompleteComponent_Factory(t) {
    return (ɵAutoCompleteComponent_BaseFactory || (ɵAutoCompleteComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AutoCompleteComponent)))(t || AutoCompleteComponent);
  };
}();
AutoCompleteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AutoCompleteComponent,
  selectors: [["app-auto-complete"]],
  inputs: {
    label: "label",
    placeholder: "placeholder",
    control: "control",
    appearance: "appearance",
    options: "options",
    loading: "loading"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 12,
  vars: 12,
  consts: [[1, "w-100", 3, "appearance"], ["matSuffix", ""], ["diameter", "16", "class", "d-inline-flex", 4, "ngIf"], ["color", "primary", "style", "rotate: 90deg", 4, "ngIf"], ["type", "text", "matInput", "", 3, "placeholder", "formControl", "matAutocomplete"], [3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["diameter", "16", 1, "d-inline-flex"], ["color", "primary", 2, "rotate", "90deg"], [3, "value"]],
  template: function AutoCompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AutoCompleteComponent_mat_spinner_4_Template, 1, 0, "mat-spinner", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AutoCompleteComponent_mat_icon_5_Template, 2, 0, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-autocomplete", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function AutoCompleteComponent_Template_mat_autocomplete_optionSelected_7_listener($event) {
        return ctx.control.setValue($event.option.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AutoCompleteComponent_mat_option_9_Template, 2, 2, "mat-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AutoCompleteComponent_mat_error_10_Template, 3, 6, "mat-error", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appearance", ctx.appearance);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.label);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", ctx.placeholder)("formControl", ctx.searchForm)("matAutocomplete", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx.displayFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 10, ctx.control.errors));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyError, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacyLabel, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLegacySuffix, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_8__.MatLegacyOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatLegacyAutocomplete, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatLegacyAutocompleteTrigger, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatLegacyProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_5__.KeyValuePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 319:
/*!****************************************************************!*\
  !*** ./src/app/account/pages/addresses/edit/edit.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditAddressComponent": () => (/* binding */ EditAddressComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 8446);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_models_address_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/models/address.model */ 2426);
/* harmony import */ var _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/enums/microservice-type.enum */ 7502);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/api.service */ 5384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/input/input.component */ 2371);
/* harmony import */ var _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/select/select.component */ 9092);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _components_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/auto-complete/auto-complete.component */ 3195);















function EditAddressComponent_app_input_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-input", 17);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx_r0.form.controls["companyName"]);
  }
}
function EditAddressComponent_app_input_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-input", 18);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx_r1.form.controls["vatNumber"]);
  }
}
class EditAddressComponent {
  constructor(api, dialogRef, fb, data) {
    // super()
    // this._initFormControl(fb, {})
    this.api = api;
    this.dialogRef = dialogRef;
    this.data = data;
    this.addressProfiles = [{
      label: 'Personal',
      'value': _core_models_address_model__WEBPACK_IMPORTED_MODULE_0__.ProfileType.Personal
    }, {
      label: 'Company',
      'value': _core_models_address_model__WEBPACK_IMPORTED_MODULE_0__.ProfileType.Company
    }];
    this.profileType = _core_models_address_model__WEBPACK_IMPORTED_MODULE_0__.ProfileType;
    this.countries = [];
    this.regions = [];
    this.cities = [];
    this.loading = {
      state: false,
      city: false,
      country: false
    };
    this.form = fb.group({
      profile: [data.address.profile || _core_models_address_model__WEBPACK_IMPORTED_MODULE_0__.ProfileType.Personal, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      companyName: [data.address.companyName],
      vatNumber: [data.address.vatNumber],
      addressLine1: [data.address.addressLine1, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      country: [data.address.country, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      region: [data.address.region, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      city: [data.address.city, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      zipCode: [data.address.zipCode, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    data.address.profile = data.address.profile || _core_models_address_model__WEBPACK_IMPORTED_MODULE_0__.ProfileType.Personal;
    this.form.controls['country']?.valueChanges.subscribe(value => {
      this.form.controls['region']?.reset();
      this.fetchRegions();
    });
    this.form.controls['region'].valueChanges.subscribe(value => {
      this.form.controls['city']?.reset();
      this.fetchCities();
    });
  }
  ngOnInit() {
    this.fetchCountries();
    this.fetchRegions();
    this.fetchCities();
  }
  cancel() {
    this.dialogRef.close(null);
  }
  fetchCountries() {
    this.loading['country'] = true;
    this.api.get('location/countries', _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__.MicroserviceType.usr)
    // this.api.get('countries')
    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.loading['country'] = false)).subscribe(countries => {
      this.countries = countries.map(country => ({
        label: country.name,
        value: country.id
      }));
    });
  }
  fetchRegions() {
    const countryId = this.form.controls['country']?.value;
    if (countryId) {
      this.loading['state'] = true;
      this.api.get(`location/counties/${countryId}`, _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__.MicroserviceType.usr).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.loading['state'] = false)).subscribe(regions => this.regions = regions.map(region => ({
        label: region.name,
        value: region.id
      })));
    }
  }
  fetchCities() {
    const regionId = this.form.controls['region']?.value;
    if (regionId) {
      this.loading['city'] = true;
      this.api.get(`location/cities/${regionId}`, _core_enums_microservice_type_enum__WEBPACK_IMPORTED_MODULE_1__.MicroserviceType.usr).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.loading['city'] = false)).subscribe(cities => this.cities = cities.map(city => ({
        label: city.name,
        value: city.id
      })));
    }
  }
  save() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    Object.keys(this.form?.value).forEach(k => {
      const val = this.form?.controls[k]?.value;
      this.data.address[k] = val;
    });
    this.dialogRef.close(this.data.address);
  }
}
EditAddressComponent.ɵfac = function EditAddressComponent_Factory(t) {
  return new (t || EditAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_9__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_LEGACY_DIALOG_DATA));
};
EditAddressComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: EditAddressComponent,
  selectors: [["app-edit-address"]],
  decls: 23,
  vars: 18,
  consts: [[1, "d-flex", "justify-content-between", "align-items-center", "p-3"], [1, "d-flex", "align-items-center"], [1, "title-icon", "me-2", "d-sm-none", "cur-pointer", 3, "click"], ["mat-dialog-title", "", 1, "mb-0", "card-title"], [1, "title-icon", "d-none", "d-sm-inline", 3, "click"], ["mat-dialog-content", "", 1, "px-3", "mt-4", "col-rep-1", "col-rep-md-2", "d-grid", "gap-col-3", "form-group"], ["label", "Type", 3, "control", "options"], ["label", "Company name", 3, "control", 4, "ngIf"], ["label", "VAT number", 3, "control", 4, "ngIf"], ["label", "Country", 3, "control", "options", "loading"], ["label", "State", 3, "control", "options", "loading"], ["label", "City", 3, "control", "options", "loading"], ["label", "Address", 3, "control", "hideRequiredMarker"], ["label", "Zip code", 3, "control", "hideRequiredMarker"], ["mat-dialog-actions", "", 1, "d-flex", "justify-content-center", "gap-sm-6", "gap-4", "mt-0", "mt-md-2", "mt-lg-1", "dialog-action"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], ["label", "Company name", 3, "control"], ["label", "VAT number", 3, "control"]],
  template: function EditAddressComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditAddressComponent_Template_mat_icon_click_2_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditAddressComponent_Template_mat_icon_click_6_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "app-select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, EditAddressComponent_app_input_11_Template, 1, 1, "app-input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, EditAddressComponent_app_input_12_Template, 1, 1, "app-input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "app-auto-complete", 9)(14, "app-select", 10)(15, "app-select", 11)(16, "app-input", 12)(17, "app-input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 14)(19, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditAddressComponent_Template_button_click_19_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditAddressComponent_Template_button_click_21_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.data.mode === "add" ? "Add new " : "Edit", " address");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.form.controls["profile"])("options", ctx.addressProfiles);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.form.controls["profile"] == null ? null : ctx.form.controls["profile"].value) === ctx.profileType.Company);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.form.controls["profile"] == null ? null : ctx.form.controls["profile"].value) === ctx.profileType.Company);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.form.controls["country"])("options", ctx.countries)("loading", ctx.loading["country"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.form.controls["region"])("options", ctx.regions)("loading", ctx.loading["state"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.form.controls["city"])("options", ctx.cities)("loading", ctx.loading["city"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.form.controls["addressLine1"])("hideRequiredMarker", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.form.controls["zipCode"])("hideRequiredMarker", false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _shared_components_select_select_component__WEBPACK_IMPORTED_MODULE_4__.SelectComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_9__.MatLegacyDialogTitle, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_9__.MatLegacyDialogContent, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_9__.MatLegacyDialogActions, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _components_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_5__.AutoCompleteComponent],
  styles: ["[_nghost-%COMP%]     app-select .mat-form-field {\n  width: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]    > app-input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   app-select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   app-auto-complete[_ngcontent-%COMP%] {\n  margin-bottom: 8.5px;\n}\n@media screen and (min-width: 576px) {\n  .form-group[_ngcontent-%COMP%]    > app-input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   app-select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   app-auto-complete[_ngcontent-%COMP%] {\n    margin-bottom: 4.5px;\n  }\n}\n@media screen and (min-width: 992px) {\n  .form-group[_ngcontent-%COMP%]    > app-input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   app-select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   app-auto-complete[_ngcontent-%COMP%] {\n    margin-bottom: 23.5px;\n  }\n}\n\n.dialog-action[_ngcontent-%COMP%] {\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.25);\n}\n.dialog-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 124px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9wYWdlcy9hZGRyZXNzZXMvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJO0VBQ0UsV0FBQTtBQUpOOztBQVVFO0VBRUUsb0JBQUE7QUFSSjtBQVVJO0VBSkY7SUFLSSxvQkFBQTtFQVBKO0FBQ0Y7QUFTSTtFQVJGO0lBU0kscUJBQUE7RUFOSjtBQUNGOztBQVVBO0VBQ0UsMENBQUE7QUFQRjtBQVNFO0VBQ0UsWUFBQTtBQVBKIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2FzczptYXAnO1xuQGltcG9ydCBcInNyYy9zdHlsaW5ncy9ic192YXJpYWJsZXNcIjtcblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgYXBwLXNlbGVjdCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG4uZm9ybS1ncm91cCB7XG4gID4gYXBwLWlucHV0LCBhcHAtc2VsZWN0LCBhcHAtYXV0by1jb21wbGV0ZSB7XG5cbiAgICBtYXJnaW4tYm90dG9tOiA4LjVweDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC5nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0LjVweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAuZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjMuNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uZGlhbG9nLWFjdGlvbiB7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcblxuICBidXR0b24ge1xuICAgIHdpZHRoOiAxMjRweFxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ 2426:
/*!**********************************************!*\
  !*** ./src/app/core/models/address.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Address": () => (/* binding */ Address),
/* harmony export */   "AddressType": () => (/* binding */ AddressType),
/* harmony export */   "ProfileType": () => (/* binding */ ProfileType)
/* harmony export */ });
class Address {
  fullAddress(separater = " ") {
    return [this.addressLine1, this.city, this.region].filter(x => !!x).join(separater);
  }
  toDto() {
    return {
      ...this,
      ...{
        street: this.addressLine1,
        county: this.region
      }
    };
  }
  static adapt(item) {
    const addr = new Address();
    addr.id = item?.id;
    addr.companyName = item?.companyName;
    addr.vatNumber = item?.vatNumber;
    addr.firstName = item?.firstName;
    addr.phoneNumber = item?.phoneNumber;
    addr.country = item?.country;
    addr.region = item?.region || item?.county;
    addr.city = item?.city;
    addr.addressLine1 = item?.addressLine1 || item?.street;
    addr.addressLine2 = item?.addressLine1;
    addr.zipCode = item?.zipCode;
    addr.featured = item?.featured;
    addr.defaultAddress = item?.defaultAddress;
    return addr;
  }
}
var ProfileType;
(function (ProfileType) {
  ProfileType["Personal"] = "PERSONAL";
  ProfileType["Company"] = "COMPANY";
})(ProfileType || (ProfileType = {}));
var AddressType;
(function (AddressType) {
  AddressType["DELIVERY"] = "DELIVERY";
  AddressType["BILLING"] = "BILLING";
})(AddressType || (AddressType = {}));

/***/ }),

/***/ 3820:
/*!***********************************************!*\
  !*** ./src/app/core/utils/form-validators.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidators": () => (/* binding */ FormValidators)
/* harmony export */ });
class FormValidators {
  static match1(otherField, form) {
    return control => {
      // const sourceCtrl = control.get(source)
      // const otherCtrl = control.get(otherField)
      debugger;
      const otherCtrl = form?.controls[otherField];
      if (otherCtrl?.value !== control.value) {
        control?.setErrors({
          match: true
        });
      } else {
        control?.setErrors(null);
      }
      return null;
    };
  }
  static match(source, target) {
    return control => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);
      if (sourceCtrl?.value !== targetCtrl?.value) {
        targetCtrl?.setErrors({
          not_match: true
        });
      } else {
        targetCtrl?.setErrors(null);
      }
      return null;
    };
  }
  static passwordStrength(control) {
    let value = control.value || '';
    if (!value) {
      return null;
    }
    let numberCharacters = /[0-9]+/g;
    if (numberCharacters.test(value) === false) {
      return {
        number_characters: true
      };
    }
    return null;
  }
  static whitespace(control) {
    const hasWhitespace = (control.value || '').trim().length === 0;
    const isValid = !hasWhitespace;
    return isValid ? null : {
      whitespace: true
    };
  }
}

/***/ }),

/***/ 8550:
/*!******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/autocomplete.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS": () => (/* binding */ MAT_AUTOCOMPLETE_DEFAULT_OPTIONS),
/* harmony export */   "MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_AUTOCOMPLETE_SCROLL_STRATEGY": () => (/* binding */ MAT_AUTOCOMPLETE_SCROLL_STRATEGY),
/* harmony export */   "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY": () => (/* binding */ MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER": () => (/* binding */ MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   "MAT_AUTOCOMPLETE_VALUE_ACCESSOR": () => (/* binding */ MAT_AUTOCOMPLETE_VALUE_ACCESSOR),
/* harmony export */   "MatAutocomplete": () => (/* binding */ MatAutocomplete),
/* harmony export */   "MatAutocompleteModule": () => (/* binding */ MatAutocompleteModule),
/* harmony export */   "MatAutocompleteOrigin": () => (/* binding */ MatAutocompleteOrigin),
/* harmony export */   "MatAutocompleteSelectedEvent": () => (/* binding */ MatAutocompleteSelectedEvent),
/* harmony export */   "MatAutocompleteTrigger": () => (/* binding */ MatAutocompleteTrigger),
/* harmony export */   "_MatAutocompleteBase": () => (/* binding */ _MatAutocompleteBase),
/* harmony export */   "_MatAutocompleteOriginBase": () => (/* binding */ _MatAutocompleteOriginBase),
/* harmony export */   "_MatAutocompleteTriggerBase": () => (/* binding */ _MatAutocompleteTriggerBase),
/* harmony export */   "getMatAutocompleteMissingPanelError": () => (/* binding */ getMatAutocompleteMissingPanelError)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 8971);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ 9107);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 1954);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/keycodes */ 8456);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/portal */ 7520);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 1339);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/bidi */ 2867);























/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Animation values come from
// https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu-surface/_mixins.scss
// TODO(mmalerba): Ideally find a way to import the values from MDC's code.
const _c0 = ["panel"];
function MatAutocomplete_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const formFieldId_r1 = ctx.id;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.id)("ngClass", ctx_r0._classList)("@panelAnimation", ctx_r0.isOpen ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0._getPanelAriaLabelledby(formFieldId_r1));
  }
}
const _c1 = ["*"];
const panelAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('panelAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void, hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  opacity: 0,
  transform: 'scaleY(0.8)'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)(':enter, hidden => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('0.03s linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  opacity: 1
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('0.12s cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  transform: 'scaleY(1)'
}))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)(':leave, visible => hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('0.075s linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
  opacity: 0
}))])]);

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Autocomplete IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
let _uniqueAutocompleteIdCounter = 0;
/** Event object that is emitted when an autocomplete option is selected. */
class MatAutocompleteSelectedEvent {
  constructor( /** Reference to the autocomplete panel that emitted the event. */
  source, /** Option that was selected. */
  option) {
    this.source = source;
    this.option = option;
  }
}
// Boilerplate for applying mixins to MatAutocomplete.
/** @docs-private */
const _MatAutocompleteMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisableRipple)(class {});
/** Injection token to be used to override the default options for `mat-autocomplete`. */
const MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-autocomplete-default-options', {
  providedIn: 'root',
  factory: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
  return {
    autoActiveFirstOption: false,
    autoSelectActiveOption: false,
    hideSingleSelectionIndicator: false
  };
}
/** Base class with all of the `MatAutocomplete` functionality. */
class _MatAutocompleteBase extends _MatAutocompleteMixinBase {
  /** Whether the autocomplete panel is open. */
  get isOpen() {
    return this._isOpen && this.showPanel;
  }
  /** @docs-private Sets the theme color of the panel. */
  _setColor(value) {
    this._color = value;
    this._setThemeClasses(this._classList);
  }
  /**
   * Whether the first option should be highlighted when the autocomplete panel is opened.
   * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
   */
  get autoActiveFirstOption() {
    return this._autoActiveFirstOption;
  }
  set autoActiveFirstOption(value) {
    this._autoActiveFirstOption = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /** Whether the active option should be selected as the user is navigating. */
  get autoSelectActiveOption() {
    return this._autoSelectActiveOption;
  }
  set autoSelectActiveOption(value) {
    this._autoSelectActiveOption = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /**
   * Takes classes set on the host mat-autocomplete element and applies them to the panel
   * inside the overlay container to allow for easy styling.
   */
  set classList(value) {
    if (value && value.length) {
      this._classList = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceStringArray)(value).reduce((classList, className) => {
        classList[className] = true;
        return classList;
      }, {});
    } else {
      this._classList = {};
    }
    this._setVisibilityClasses(this._classList);
    this._setThemeClasses(this._classList);
    this._elementRef.nativeElement.className = '';
  }
  constructor(_changeDetectorRef, _elementRef, _defaults, platform) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._defaults = _defaults;
    this._activeOptionChanges = rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
    /** Whether the autocomplete panel should be visible, depending on option length. */
    this.showPanel = false;
    this._isOpen = false;
    /** Function that maps an option's control value to its display value in the trigger. */
    this.displayWith = null;
    this._autoActiveFirstOption = !!this._defaults.autoActiveFirstOption;
    this._autoSelectActiveOption = !!this._defaults.autoSelectActiveOption;
    /** Event that is emitted whenever an option from the list is selected. */
    this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted when the autocomplete panel is opened. */
    this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted when the autocomplete panel is closed. */
    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits whenever an option is activated. */
    this.optionActivated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._classList = {};
    /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */
    this.id = `mat-autocomplete-${_uniqueAutocompleteIdCounter++}`;
    // TODO(crisbeto): the problem that the `inertGroups` option resolves is only present on
    // Safari using VoiceOver. We should occasionally check back to see whether the bug
    // wasn't resolved in VoiceOver, and if it has, we can remove this and the `inertGroups`
    // option altogether.
    this.inertGroups = platform?.SAFARI || false;
  }
  ngAfterContentInit() {
    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.ActiveDescendantKeyManager(this.options).withWrap();
    this._activeOptionChanges = this._keyManager.change.subscribe(index => {
      if (this.isOpen) {
        this.optionActivated.emit({
          source: this,
          option: this.options.toArray()[index] || null
        });
      }
    });
    // Set the initial visibility state.
    this._setVisibility();
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._activeOptionChanges.unsubscribe();
  }
  /**
   * Sets the panel scrollTop. This allows us to manually scroll to display options
   * above or below the fold, as they are not actually being focused when active.
   */
  _setScrollTop(scrollTop) {
    if (this.panel) {
      this.panel.nativeElement.scrollTop = scrollTop;
    }
  }
  /** Returns the panel's scrollTop. */
  _getScrollTop() {
    return this.panel ? this.panel.nativeElement.scrollTop : 0;
  }
  /** Panel should hide itself when the option list is empty. */
  _setVisibility() {
    this.showPanel = !!this.options.length;
    this._setVisibilityClasses(this._classList);
    this._changeDetectorRef.markForCheck();
  }
  /** Emits the `select` event. */
  _emitSelectEvent(option) {
    const event = new MatAutocompleteSelectedEvent(this, option);
    this.optionSelected.emit(event);
  }
  /** Gets the aria-labelledby for the autocomplete panel. */
  _getPanelAriaLabelledby(labelId) {
    if (this.ariaLabel) {
      return null;
    }
    const labelExpression = labelId ? labelId + ' ' : '';
    return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
  }
  /** Sets the autocomplete visibility classes on a classlist based on the panel is visible. */
  _setVisibilityClasses(classList) {
    classList[this._visibleClass] = this.showPanel;
    classList[this._hiddenClass] = !this.showPanel;
  }
  /** Sets the theming classes on a classlist based on the theme of the panel. */
  _setThemeClasses(classList) {
    classList['mat-primary'] = this._color === 'primary';
    classList['mat-warn'] = this._color === 'warn';
    classList['mat-accent'] = this._color === 'accent';
  }
}
_MatAutocompleteBase.ɵfac = function _MatAutocompleteBase_Factory(t) {
  return new (t || _MatAutocompleteBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform));
};
_MatAutocompleteBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatAutocompleteBase,
  viewQuery: function _MatAutocompleteBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
    }
  },
  inputs: {
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    displayWith: "displayWith",
    autoActiveFirstOption: "autoActiveFirstOption",
    autoSelectActiveOption: "autoSelectActiveOption",
    panelWidth: "panelWidth",
    classList: ["class", "classList"]
  },
  outputs: {
    optionSelected: "optionSelected",
    opened: "opened",
    closed: "closed",
    optionActivated: "optionActivated"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform
    }];
  }, {
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: true
      }]
    }],
    panel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['panel']
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    displayWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoActiveFirstOption: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoSelectActiveOption: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    optionActivated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    classList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['class']
    }]
  });
})();
class MatAutocomplete extends _MatAutocompleteBase {
  constructor() {
    super(...arguments);
    this._visibleClass = 'mat-mdc-autocomplete-visible';
    this._hiddenClass = 'mat-mdc-autocomplete-hidden';
    this._hideSingleSelectionIndicator = this._defaults.hideSingleSelectionIndicator ?? false;
  }
  /** Whether checkmark indicator for single-selection options is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    this._syncParentProperties();
  }
  /** Syncs the parent state with the individual options. */
  _syncParentProperties() {
    if (this.options) {
      for (const option of this.options) {
        option._changeDetectorRef.markForCheck();
      }
    }
  }
}
MatAutocomplete.ɵfac = /* @__PURE__ */function () {
  let ɵMatAutocomplete_BaseFactory;
  return function MatAutocomplete_Factory(t) {
    return (ɵMatAutocomplete_BaseFactory || (ɵMatAutocomplete_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAutocomplete)))(t || MatAutocomplete);
  };
}();
MatAutocomplete.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatAutocomplete,
  selectors: [["mat-autocomplete"]],
  contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MAT_OPTGROUP, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatOption, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.options = _t);
    }
  },
  hostAttrs: [1, "mat-mdc-autocomplete"],
  inputs: {
    disableRipple: "disableRipple",
    hideSingleSelectionIndicator: "hideSingleSelectionIndicator"
  },
  exportAs: ["matAutocomplete"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MAT_OPTION_PARENT_COMPONENT,
    useExisting: MatAutocomplete
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  consts: [["role", "listbox", 1, "mat-mdc-autocomplete-panel", "mdc-menu-surface", "mdc-menu-surface--open", 3, "id", "ngClass"], ["panel", ""]],
  template: function MatAutocomplete_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatAutocomplete_ng_template_0_Template, 3, 5, "ng-template");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass],
  styles: [".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}.mdc-menu-surface.mat-mdc-autocomplete-panel{width:100%;max-height:256px;position:static;visibility:hidden;transform-origin:center top;margin:0;padding:8px 0;list-style-type:none}.mdc-menu-surface.mat-mdc-autocomplete-panel:focus{outline:none}.cdk-high-contrast-active .mdc-menu-surface.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) .mdc-menu-surface.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above .mdc-menu-surface.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}.mdc-menu-surface.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}.mdc-menu-surface.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden}mat-autocomplete{display:none}"],
  encapsulation: 2,
  data: {
    animation: [panelAnimation]
  },
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocomplete, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-autocomplete',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      exportAs: 'matAutocomplete',
      inputs: ['disableRipple'],
      host: {
        'class': 'mat-mdc-autocomplete'
      },
      providers: [{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatAutocomplete
      }],
      animations: [panelAnimation],
      template: "<ng-template let-formFieldId=\"id\">\n  <div\n    class=\"mat-mdc-autocomplete-panel mdc-menu-surface mdc-menu-surface--open\"\n    role=\"listbox\"\n    [id]=\"id\"\n    [ngClass]=\"_classList\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"_getPanelAriaLabelledby(formFieldId)\"\n    [@panelAnimation]=\"isOpen ? 'visible' : 'hidden'\"\n    #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
      styles: [".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}.mdc-menu-surface.mat-mdc-autocomplete-panel{width:100%;max-height:256px;position:static;visibility:hidden;transform-origin:center top;margin:0;padding:8px 0;list-style-type:none}.mdc-menu-surface.mat-mdc-autocomplete-panel:focus{outline:none}.cdk-high-contrast-active .mdc-menu-surface.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) .mdc-menu-surface.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above .mdc-menu-surface.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}.mdc-menu-surface.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}.mdc-menu-surface.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden}mat-autocomplete{display:none}"]
    }]
  }], null, {
    optionGroups: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatOption, {
        descendants: true
      }]
    }],
    hideSingleSelectionIndicator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Base class containing all of the functionality for `MatAutocompleteOrigin`. */
class _MatAutocompleteOriginBase {
  constructor( /** Reference to the element on which the directive is applied. */
  elementRef) {
    this.elementRef = elementRef;
  }
}
_MatAutocompleteOriginBase.ɵfac = function _MatAutocompleteOriginBase_Factory(t) {
  return new (t || _MatAutocompleteOriginBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
_MatAutocompleteOriginBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatAutocompleteOriginBase
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteOriginBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, null);
})();
/**
 * Directive applied to an element to make it usable
 * as a connection point for an autocomplete panel.
 */
class MatAutocompleteOrigin extends _MatAutocompleteOriginBase {}
MatAutocompleteOrigin.ɵfac = /* @__PURE__ */function () {
  let ɵMatAutocompleteOrigin_BaseFactory;
  return function MatAutocompleteOrigin_Factory(t) {
    return (ɵMatAutocompleteOrigin_BaseFactory || (ɵMatAutocompleteOrigin_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAutocompleteOrigin)))(t || MatAutocompleteOrigin);
  };
}();
MatAutocompleteOrigin.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatAutocompleteOrigin,
  selectors: [["", "matAutocompleteOrigin", ""]],
  exportAs: ["matAutocompleteOrigin"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocompleteOrigin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matAutocompleteOrigin]',
      exportAs: 'matAutocompleteOrigin'
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provider that allows the autocomplete to register as a ControlValueAccessor.
 * @docs-private
 */
const MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatAutocompleteTrigger),
  multi: true
};
/**
 * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
 * @docs-private
 */
function getMatAutocompleteMissingPanelError() {
  return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' + 'Make sure that the id passed to the `matAutocomplete` is correct and that ' + "you're attempting to open it after the ngAfterContentInit hook.");
}
/** Injection token that determines the scroll handling while the autocomplete panel is open. */
const MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-autocomplete-scroll-strategy');
/** @docs-private */
function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.Overlay],
  useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
};
/** Base class with all of the `MatAutocompleteTrigger` functionality. */
class _MatAutocompleteTriggerBase {
  /**
   * Whether the autocomplete is disabled. When disabled, the element will
   * act as a regular input and the user won't be able to open the panel.
   */
  get autocompleteDisabled() {
    return this._autocompleteDisabled;
  }
  set autocompleteDisabled(value) {
    this._autocompleteDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  constructor(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, scrollStrategy, _dir, _formField, _document, _viewportRuler, _defaults) {
    this._element = _element;
    this._overlay = _overlay;
    this._viewContainerRef = _viewContainerRef;
    this._zone = _zone;
    this._changeDetectorRef = _changeDetectorRef;
    this._dir = _dir;
    this._formField = _formField;
    this._document = _document;
    this._viewportRuler = _viewportRuler;
    this._defaults = _defaults;
    this._componentDestroyed = false;
    this._autocompleteDisabled = false;
    /** Whether or not the label state is being overridden. */
    this._manuallyFloatingLabel = false;
    /** Subscription to viewport size changes. */
    this._viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
    /**
     * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
     * closed autocomplete from being reopened if the user switches to another browser tab and then
     * comes back.
     */
    this._canOpenOnNextFocus = true;
    /** Stream of keyboard events that can close the panel. */
    this._closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    /**
     * Event handler for when the window is blurred. Needs to be an
     * arrow function in order to preserve the context.
     */
    this._windowBlurHandler = () => {
      // If the user blurred the window while the autocomplete is focused, it means that it'll be
      // refocused when they come back. In this case we want to skip the first focus event, if the
      // pane was closed, in order to avoid reopening it unintentionally.
      this._canOpenOnNextFocus = this._document.activeElement !== this._element.nativeElement || this.panelOpen;
    };
    /** `View -> model callback called when value changes` */
    this._onChange = () => {};
    /** `View -> model callback called when autocomplete has been touched` */
    this._onTouched = () => {};
    /**
     * Position of the autocomplete panel relative to the trigger element. A position of `auto`
     * will render the panel underneath the trigger if there is enough space for it to fit in
     * the viewport, otherwise the panel will be shown above it. If the position is set to
     * `above` or `below`, the panel will always be shown above or below the trigger. no matter
     * whether it fits completely in the viewport.
     */
    this.position = 'auto';
    /**
     * `autocomplete` attribute to be set on the input element.
     * @docs-private
     */
    this.autocompleteAttribute = 'off';
    this._overlayAttached = false;
    /** Stream of changes to the selection state of the autocomplete options. */
    this.optionSelections = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.defer)(() => {
      const options = this.autocomplete ? this.autocomplete.options : null;
      if (options) {
        return options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.startWith)(options), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.merge)(...options.map(option => option.onSelectionChange))));
      }
      // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
      // Return a stream that we'll replace with the real one once everything is in place.
      return this._zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => this.optionSelections));
    });
    this._scrollStrategy = scrollStrategy;
  }
  ngAfterViewInit() {
    const window = this._getWindow();
    if (typeof window !== 'undefined') {
      this._zone.runOutsideAngular(() => window.addEventListener('blur', this._windowBlurHandler));
    }
  }
  ngOnChanges(changes) {
    if (changes['position'] && this._positionStrategy) {
      this._setStrategyPositions(this._positionStrategy);
      if (this.panelOpen) {
        this._overlayRef.updatePosition();
      }
    }
  }
  ngOnDestroy() {
    const window = this._getWindow();
    if (typeof window !== 'undefined') {
      window.removeEventListener('blur', this._windowBlurHandler);
    }
    this._viewportSubscription.unsubscribe();
    this._componentDestroyed = true;
    this._destroyPanel();
    this._closeKeyEventStream.complete();
  }
  /** Whether or not the autocomplete panel is open. */
  get panelOpen() {
    return this._overlayAttached && this.autocomplete.showPanel;
  }
  /** Opens the autocomplete suggestion panel. */
  openPanel() {
    this._attachOverlay();
    this._floatLabel();
  }
  /** Closes the autocomplete suggestion panel. */
  closePanel() {
    this._resetLabel();
    if (!this._overlayAttached) {
      return;
    }
    if (this.panelOpen) {
      // Only emit if the panel was visible.
      // The `NgZone.onStable` always emits outside of the Angular zone,
      // so all the subscriptions from `_subscribeToClosingActions()` are also outside of the Angular zone.
      // We should manually run in Angular zone to update UI after panel closing.
      this._zone.run(() => {
        this.autocomplete.closed.emit();
      });
    }
    this.autocomplete._isOpen = this._overlayAttached = false;
    this._pendingAutoselectedOption = null;
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
      this._closingActionsSubscription.unsubscribe();
    }
    // Note that in some cases this can end up being called after the component is destroyed.
    // Add a check to ensure that we don't try to run change detection on a destroyed view.
    if (!this._componentDestroyed) {
      // We need to trigger change detection manually, because
      // `fromEvent` doesn't seem to do it at the proper time.
      // This ensures that the label is reset when the
      // user clicks outside.
      this._changeDetectorRef.detectChanges();
    }
  }
  /**
   * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
   * within the viewport.
   */
  updatePosition() {
    if (this._overlayAttached) {
      this._overlayRef.updatePosition();
    }
  }
  /**
   * A stream of actions that should close the autocomplete panel, including
   * when an option is selected, on blur, and when TAB is pressed.
   */
  get panelClosingActions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.merge)(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(() => this._overlayAttached)), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(() => this._overlayAttached)) : (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)()).pipe(
    // Normalize the output so we return a consistent type.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(event => event instanceof _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatOptionSelectionChange ? event : null));
  }
  /** The currently active option, coerced to MatOption type. */
  get activeOption() {
    if (this.autocomplete && this.autocomplete._keyManager) {
      return this.autocomplete._keyManager.activeItem;
    }
    return null;
  }
  /** Stream of clicks outside of the autocomplete panel. */
  _getOutsideClickStream() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.fromEvent)(this._document, 'click'), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.fromEvent)(this._document, 'auxclick'), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.fromEvent)(this._document, 'touchend')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(event => {
      // If we're in the Shadow DOM, the event target will be the shadow root, so we have to
      // fall back to check the first element in the path of the click event.
      const clickTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__._getEventTarget)(event);
      const formField = this._formField ? this._formField._elementRef.nativeElement : null;
      const customOrigin = this.connectedTo ? this.connectedTo.elementRef.nativeElement : null;
      return this._overlayAttached && clickTarget !== this._element.nativeElement &&
      // Normally focus moves inside `mousedown` so this condition will almost always be
      // true. Its main purpose is to handle the case where the input is focused from an
      // outside click which propagates up to the `body` listener within the same sequence
      // and causes the panel to close immediately (see #3106).
      this._document.activeElement !== this._element.nativeElement && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!this._overlayRef && !this._overlayRef.overlayElement.contains(clickTarget);
    }));
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    Promise.resolve(null).then(() => this._assignOptionValue(value));
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._onChange = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this._element.nativeElement.disabled = isDisabled;
  }
  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const hasModifier = (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_20__.hasModifierKey)(event);
    // Prevent the default action on all escape key presses. This is here primarily to bring IE
    // in line with other browsers. By default, pressing escape on IE will cause it to revert
    // the input value to the one that it had on focus, however it won't dispatch any events
    // which means that the model value will be out of sync with the view.
    if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_20__.ESCAPE && !hasModifier) {
      event.preventDefault();
    }
    if (this.activeOption && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_20__.ENTER && this.panelOpen && !hasModifier) {
      this.activeOption._selectViaInteraction();
      this._resetActiveItem();
      event.preventDefault();
    } else if (this.autocomplete) {
      const prevActiveItem = this.autocomplete._keyManager.activeItem;
      const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_20__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_20__.DOWN_ARROW;
      if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_20__.TAB || isArrowKey && !hasModifier && this.panelOpen) {
        this.autocomplete._keyManager.onKeydown(event);
      } else if (isArrowKey && this._canOpen()) {
        this.openPanel();
      }
      if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
        this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
        if (this.autocomplete.autoSelectActiveOption && this.activeOption) {
          if (!this._pendingAutoselectedOption) {
            this._valueBeforeAutoSelection = this._element.nativeElement.value;
          }
          this._pendingAutoselectedOption = this.activeOption;
          this._assignOptionValue(this.activeOption.value);
        }
      }
    }
  }
  _handleInput(event) {
    let target = event.target;
    let value = target.value;
    // Based on `NumberValueAccessor` from forms.
    if (target.type === 'number') {
      value = value == '' ? null : parseFloat(value);
    }
    // If the input has a placeholder, IE will fire the `input` event on page load,
    // focus and blur, in addition to when the user actually changed the value. To
    // filter out all of the extra events, we save the value on focus and between
    // `input` events, and we check whether it changed.
    // See: https://connect.microsoft.com/IE/feedback/details/885747/
    if (this._previousValue !== value) {
      this._previousValue = value;
      this._pendingAutoselectedOption = null;
      this._onChange(value);
      if (this._canOpen() && this._document.activeElement === event.target) {
        this.openPanel();
      }
    }
  }
  _handleFocus() {
    if (!this._canOpenOnNextFocus) {
      this._canOpenOnNextFocus = true;
    } else if (this._canOpen()) {
      this._previousValue = this._element.nativeElement.value;
      this._attachOverlay();
      this._floatLabel(true);
    }
  }
  _handleClick() {
    if (this._canOpen() && !this.panelOpen) {
      this.openPanel();
    }
  }
  /**
   * In "auto" mode, the label will animate down as soon as focus is lost.
   * This causes the value to jump when selecting an option with the mouse.
   * This method manually floats the label until the panel can be closed.
   * @param shouldAnimate Whether the label should be animated when it is floated.
   */
  _floatLabel(shouldAnimate = false) {
    if (this._formField && this._formField.floatLabel === 'auto') {
      if (shouldAnimate) {
        this._formField._animateAndLockLabel();
      } else {
        this._formField.floatLabel = 'always';
      }
      this._manuallyFloatingLabel = true;
    }
  }
  /** If the label has been manually elevated, return it to its normal state. */
  _resetLabel() {
    if (this._manuallyFloatingLabel) {
      if (this._formField) {
        this._formField.floatLabel = 'auto';
      }
      this._manuallyFloatingLabel = false;
    }
  }
  /**
   * This method listens to a stream of panel closing actions and resets the
   * stream every time the option list changes.
   */
  _subscribeToClosingActions() {
    const firstStable = this._zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1));
    const optionChanges = this.autocomplete.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(() => this._positionStrategy.reapplyLastPosition()),
    // Defer emitting to the stream until the next tick, because changing
    // bindings in here will cause "changed after checked" errors.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.delay)(0));
    // When the zone is stable initially, and when the option list changes...
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.merge)(firstStable, optionChanges).pipe(
    // create a new stream of panelClosingActions, replacing any previous streams
    // that were created, and flatten it so our stream only emits closing events...
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => {
      // The `NgZone.onStable` always emits outside of the Angular zone, thus we have to re-enter
      // the Angular zone. This will lead to change detection being called outside of the Angular
      // zone and the `autocomplete.opened` will also emit outside of the Angular.
      this._zone.run(() => {
        const wasOpen = this.panelOpen;
        this._resetActiveItem();
        this.autocomplete._setVisibility();
        this._changeDetectorRef.detectChanges();
        if (this.panelOpen) {
          this._overlayRef.updatePosition();
        }
        if (wasOpen !== this.panelOpen) {
          // If the `panelOpen` state changed, we need to make sure to emit the `opened` or
          // `closed` event, because we may not have emitted it. This can happen
          // - if the users opens the panel and there are no options, but the
          //   options come in slightly later or as a result of the value changing,
          // - if the panel is closed after the user entered a string that did not match any
          //   of the available options,
          // - if a valid string is entered after an invalid one.
          if (this.panelOpen) {
            this.autocomplete.opened.emit();
          } else {
            this.autocomplete.closed.emit();
          }
        }
      });
      return this.panelClosingActions;
    }),
    // when the first closing event occurs...
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1))
    // set the value, close the panel, and complete.
    .subscribe(event => this._setValueAndClose(event));
  }
  /** Destroys the autocomplete suggestion panel. */
  _destroyPanel() {
    if (this._overlayRef) {
      this.closePanel();
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }
  _assignOptionValue(value) {
    const toDisplay = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value;
    // Simply falling back to an empty string if the display value is falsy does not work properly.
    // The display value can also be the number zero and shouldn't fall back to an empty string.
    this._updateNativeInputValue(toDisplay != null ? toDisplay : '');
  }
  _updateNativeInputValue(value) {
    // If it's used within a `MatFormField`, we should set it through the property so it can go
    // through change detection.
    if (this._formField) {
      this._formField._control.value = value;
    } else {
      this._element.nativeElement.value = value;
    }
    this._previousValue = value;
  }
  /**
   * This method closes the panel, and if a value is specified, also sets the associated
   * control to that value. It will also mark the control as dirty if this interaction
   * stemmed from the user.
   */
  _setValueAndClose(event) {
    const toSelect = event ? event.source : this._pendingAutoselectedOption;
    if (toSelect) {
      this._clearPreviousSelectedOption(toSelect);
      this._assignOptionValue(toSelect.value);
      this._onChange(toSelect.value);
      this.autocomplete._emitSelectEvent(toSelect);
      this._element.nativeElement.focus();
    }
    this.closePanel();
  }
  /**
   * Clear any previous selected option and emit a selection change event for this option
   */
  _clearPreviousSelectedOption(skip) {
    this.autocomplete.options.forEach(option => {
      if (option !== skip && option.selected) {
        option.deselect();
      }
    });
  }
  _attachOverlay() {
    if (!this.autocomplete && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMatAutocompleteMissingPanelError();
    }
    let overlayRef = this._overlayRef;
    if (!overlayRef) {
      this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__.TemplatePortal(this.autocomplete.template, this._viewContainerRef, {
        id: this._formField?.getLabelId()
      });
      overlayRef = this._overlay.create(this._getOverlayConfig());
      this._overlayRef = overlayRef;
      this._handleOverlayEvents(overlayRef);
      this._viewportSubscription = this._viewportRuler.change().subscribe(() => {
        if (this.panelOpen && overlayRef) {
          overlayRef.updateSize({
            width: this._getPanelWidth()
          });
        }
      });
    } else {
      // Update the trigger, panel width and direction, in case anything has changed.
      this._positionStrategy.setOrigin(this._getConnectedElement());
      overlayRef.updateSize({
        width: this._getPanelWidth()
      });
    }
    if (overlayRef && !overlayRef.hasAttached()) {
      overlayRef.attach(this._portal);
      this._closingActionsSubscription = this._subscribeToClosingActions();
    }
    const wasOpen = this.panelOpen;
    this.autocomplete._setVisibility();
    this.autocomplete._isOpen = this._overlayAttached = true;
    this.autocomplete._setColor(this._formField?.color);
    // We need to do an extra `panelOpen` check in here, because the
    // autocomplete won't be shown if there are no options.
    if (this.panelOpen && wasOpen !== this.panelOpen) {
      this.autocomplete.opened.emit();
    }
  }
  _getOverlayConfig() {
    return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayConfig({
      positionStrategy: this._getOverlayPosition(),
      scrollStrategy: this._scrollStrategy(),
      width: this._getPanelWidth(),
      direction: this._dir ?? undefined,
      panelClass: this._defaults?.overlayPanelClass
    });
  }
  _getOverlayPosition() {
    const strategy = this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(false).withPush(false);
    this._setStrategyPositions(strategy);
    this._positionStrategy = strategy;
    return strategy;
  }
  /** Sets the positions on a position strategy based on the directive's input state. */
  _setStrategyPositions(positionStrategy) {
    // Note that we provide horizontal fallback positions, even though by default the dropdown
    // width matches the input, because consumers can override the width. See #18854.
    const belowPositions = [{
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top'
    }];
    // The overlay edge connected to the trigger should have squared corners, while
    // the opposite end has rounded corners. We apply a CSS class to swap the
    // border-radius based on the overlay position.
    const panelClass = this._aboveClass;
    const abovePositions = [{
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom',
      panelClass
    }, {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom',
      panelClass
    }];
    let positions;
    if (this.position === 'above') {
      positions = abovePositions;
    } else if (this.position === 'below') {
      positions = belowPositions;
    } else {
      positions = [...belowPositions, ...abovePositions];
    }
    positionStrategy.withPositions(positions);
  }
  _getConnectedElement() {
    if (this.connectedTo) {
      return this.connectedTo.elementRef;
    }
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
  }
  _getPanelWidth() {
    return this.autocomplete.panelWidth || this._getHostWidth();
  }
  /** Returns the width of the input element, so the panel width can match it. */
  _getHostWidth() {
    return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
  }
  /**
   * Resets the active item to -1 so arrow events will activate the
   * correct options, or to 0 if the consumer opted into it.
   */
  _resetActiveItem() {
    const autocomplete = this.autocomplete;
    if (autocomplete.autoActiveFirstOption) {
      // Note that we go through `setFirstItemActive`, rather than `setActiveItem(0)`, because
      // the former will find the next enabled option, if the first one is disabled.
      autocomplete._keyManager.setFirstItemActive();
    } else {
      autocomplete._keyManager.setActiveItem(-1);
    }
  }
  /** Determines whether the panel can be opened. */
  _canOpen() {
    const element = this._element.nativeElement;
    return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document?.defaultView || window;
  }
  /** Scrolls to a particular option in the list. */
  _scrollToOption(index) {
    // Given that we are not actually focusing active options, we must manually adjust scroll
    // to reveal options below the fold. First, we find the offset of the option from the top
    // of the panel. If that offset is below the fold, the new scrollTop will be the offset -
    // the panel height + the option height, so the active option will be just visible at the
    // bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
    // will become the offset. If that offset is visible within the panel already, the scrollTop is
    // not adjusted.
    const autocomplete = this.autocomplete;
    const labelCount = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__._countGroupLabelsBeforeOption)(index, autocomplete.options, autocomplete.optionGroups);
    if (index === 0 && labelCount === 1) {
      // If we've got one group label before the option and we're at the top option,
      // scroll the list to the top. This is better UX than scrolling the list to the
      // top of the option, because it allows the user to read the top group's label.
      autocomplete._setScrollTop(0);
    } else if (autocomplete.panel) {
      const option = autocomplete.options.toArray()[index];
      if (option) {
        const element = option._getHostElement();
        const newScrollPosition = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__._getOptionScrollPosition)(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);
        autocomplete._setScrollTop(newScrollPosition);
      }
    }
  }
  /** Handles keyboard events coming from the overlay panel. */
  _handleOverlayEvents(overlayRef) {
    // Use the `keydownEvents` in order to take advantage of
    // the overlay event targeting provided by the CDK overlay.
    overlayRef.keydownEvents().subscribe(event => {
      // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
      // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_20__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_20__.hasModifierKey)(event) || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_20__.UP_ARROW && (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_20__.hasModifierKey)(event, 'altKey')) {
        // If the user had typed something in before we autoselected an option, and they decided
        // to cancel the selection, restore the input value to the one they had typed in.
        if (this._pendingAutoselectedOption) {
          this._updateNativeInputValue(this._valueBeforeAutoSelection ?? '');
          this._pendingAutoselectedOption = null;
        }
        this._closeKeyEventStream.next();
        this._resetActiveItem();
        // We need to stop propagation, otherwise the event will eventually
        // reach the input itself and cause the overlay to be reopened.
        event.stopPropagation();
        event.preventDefault();
      }
    });
    // Subscribe to the pointer events stream so that it doesn't get picked up by other overlays.
    // TODO(crisbeto): we should switch `_getOutsideClickStream` eventually to use this stream,
    // but the behvior isn't exactly the same and it ends up breaking some internal tests.
    overlayRef.outsidePointerEvents().subscribe();
  }
}
_MatAutocompleteTriggerBase.ɵfac = function _MatAutocompleteTriggerBase_Factory(t) {
  return new (t || _MatAutocompleteTriggerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MAT_FORM_FIELD, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, 8));
};
_MatAutocompleteTriggerBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatAutocompleteTriggerBase,
  inputs: {
    autocomplete: ["matAutocomplete", "autocomplete"],
    position: ["matAutocompletePosition", "position"],
    connectedTo: ["matAutocompleteConnectedTo", "connectedTo"],
    autocompleteAttribute: ["autocomplete", "autocompleteAttribute"],
    autocompleteDisabled: ["matAutocompleteDisabled", "autocompleteDisabled"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatAutocompleteTriggerBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormField,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MAT_FORM_FIELD]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT]
      }]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__.ViewportRuler
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    autocomplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matAutocomplete']
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matAutocompletePosition']
    }],
    connectedTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matAutocompleteConnectedTo']
    }],
    autocompleteAttribute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['autocomplete']
    }],
    autocompleteDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matAutocompleteDisabled']
    }]
  });
})();
class MatAutocompleteTrigger extends _MatAutocompleteTriggerBase {
  constructor() {
    super(...arguments);
    this._aboveClass = 'mat-mdc-autocomplete-panel-above';
  }
}
MatAutocompleteTrigger.ɵfac = /* @__PURE__ */function () {
  let ɵMatAutocompleteTrigger_BaseFactory;
  return function MatAutocompleteTrigger_Factory(t) {
    return (ɵMatAutocompleteTrigger_BaseFactory || (ɵMatAutocompleteTrigger_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAutocompleteTrigger)))(t || MatAutocompleteTrigger);
  };
}();
MatAutocompleteTrigger.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatAutocompleteTrigger,
  selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
  hostAttrs: [1, "mat-mdc-autocomplete-trigger"],
  hostVars: 7,
  hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
        return ctx._handleFocus();
      })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
        return ctx._onTouched();
      })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
        return ctx._handleInput($event);
      })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      })("click", function MatAutocompleteTrigger_click_HostBindingHandler() {
        return ctx._handleClick();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-owns", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", ctx.autocompleteDisabled ? null : "listbox");
    }
  },
  exportAs: ["matAutocompleteTrigger"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocompleteTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `input[matAutocomplete], textarea[matAutocomplete]`,
      host: {
        'class': 'mat-mdc-autocomplete-trigger',
        '[attr.autocomplete]': 'autocompleteAttribute',
        '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
        '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
        '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
        '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
        '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
        '[attr.aria-haspopup]': 'autocompleteDisabled ? null : "listbox"',
        // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
        // a little earlier. This avoids issues where IE delays the focusing of the input.
        '(focusin)': '_handleFocus()',
        '(blur)': '_onTouched()',
        '(input)': '_handleInput($event)',
        '(keydown)': '_handleKeydown($event)',
        '(click)': '_handleClick()'
      },
      exportAs: 'matAutocompleteTrigger',
      providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatAutocompleteModule {}
MatAutocompleteModule.ɵfac = function MatAutocompleteModule_Factory(t) {
  return new (t || MatAutocompleteModule)();
};
MatAutocompleteModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatAutocompleteModule
});
MatAutocompleteModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAutocompleteModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__.CdkScrollableModule, MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatOptionModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, MatAutocompleteTrigger, MatAutocompleteOrigin],
      declarations: [MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
      providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 6523:
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/legacy-autocomplete.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_LEGACY_AUTOCOMPLETE_DEFAULT_OPTIONS": () => (/* reexport safe */ _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__.MAT_AUTOCOMPLETE_DEFAULT_OPTIONS),
/* harmony export */   "MAT_LEGACY_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY": () => (/* reexport safe */ _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__.MAT_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_LEGACY_AUTOCOMPLETE_SCROLL_STRATEGY": () => (/* reexport safe */ _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__.MAT_AUTOCOMPLETE_SCROLL_STRATEGY),
/* harmony export */   "MAT_LEGACY_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY": () => (/* reexport safe */ _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__.MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MAT_LEGACY_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER": () => (/* reexport safe */ _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__.MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   "MAT_LEGACY_AUTOCOMPLETE_VALUE_ACCESSOR": () => (/* binding */ MAT_LEGACY_AUTOCOMPLETE_VALUE_ACCESSOR),
/* harmony export */   "MatLegacyAutocomplete": () => (/* binding */ MatLegacyAutocomplete),
/* harmony export */   "MatLegacyAutocompleteModule": () => (/* binding */ MatLegacyAutocompleteModule),
/* harmony export */   "MatLegacyAutocompleteOrigin": () => (/* binding */ MatLegacyAutocompleteOrigin),
/* harmony export */   "MatLegacyAutocompleteSelectedEvent": () => (/* reexport safe */ _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__.MatAutocompleteSelectedEvent),
/* harmony export */   "MatLegacyAutocompleteTrigger": () => (/* binding */ MatLegacyAutocompleteTrigger),
/* harmony export */   "getMatLegacyAutocompleteMissingPanelError": () => (/* reexport safe */ _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__.getMatAutocompleteMissingPanelError)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-core */ 7090);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated Use `MatAutocomplete` from `@angular/material/autocomplete` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
function MatLegacyAutocomplete_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const formFieldId_r1 = ctx.id;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r0.id)("ngClass", ctx_r0._classList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0._getPanelAriaLabelledby(formFieldId_r1));
  }
}
const _c0 = ["*"];
class MatLegacyAutocomplete extends _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__._MatAutocompleteBase {
  constructor() {
    super(...arguments);
    this._visibleClass = 'mat-autocomplete-visible';
    this._hiddenClass = 'mat-autocomplete-hidden';
  }
}
MatLegacyAutocomplete.ɵfac = /* @__PURE__ */function () {
  let ɵMatLegacyAutocomplete_BaseFactory;
  return function MatLegacyAutocomplete_Factory(t) {
    return (ɵMatLegacyAutocomplete_BaseFactory || (ɵMatLegacyAutocomplete_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatLegacyAutocomplete)))(t || MatLegacyAutocomplete);
  };
}();
MatLegacyAutocomplete.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MatLegacyAutocomplete,
  selectors: [["mat-autocomplete"]],
  contentQueries: function MatLegacyAutocomplete_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_2__.MAT_OPTGROUP, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_3__.MatLegacyOption, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.options = _t);
    }
  },
  hostAttrs: [1, "mat-autocomplete"],
  inputs: {
    disableRipple: "disableRipple"
  },
  exportAs: ["matAutocomplete"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_2__.MAT_OPTION_PARENT_COMPONENT,
    useExisting: MatLegacyAutocomplete
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  consts: [["role", "listbox", 1, "mat-autocomplete-panel", 3, "id", "ngClass"], ["panel", ""]],
  template: function MatLegacyAutocomplete_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MatLegacyAutocomplete_ng_template_0_Template, 3, 4, "ng-template");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
  styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatLegacyAutocomplete, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mat-autocomplete',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      exportAs: 'matAutocomplete',
      inputs: ['disableRipple'],
      host: {
        'class': 'mat-autocomplete'
      },
      providers: [{
        provide: _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_2__.MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatLegacyAutocomplete
      }],
      template: "<ng-template let-formFieldId=\"id\">\n  <div class=\"mat-autocomplete-panel\"\n       role=\"listbox\"\n       [id]=\"id\"\n       [attr.aria-label]=\"ariaLabel || null\"\n       [attr.aria-labelledby]=\"_getPanelAriaLabelledby(formFieldId)\"\n       [ngClass]=\"_classList\"\n       #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
      styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}"]
    }]
  }], null, {
    optionGroups: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [_angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_2__.MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [_angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_3__.MatLegacyOption, {
        descendants: true
      }]
    }]
  });
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provider that allows the autocomplete to register as a ControlValueAccessor.
 * @docs-private
 * @deprecated Use `MAT_AUTOCOMPLETE_VALUE_ACCESSOR` from `@angular/material/autocomplete` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const MAT_LEGACY_AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => MatLegacyAutocompleteTrigger),
  multi: true
};
/**
 * @deprecated Use `MatAutocompleteTrigger` from `@angular/material/autocomplete` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyAutocompleteTrigger extends _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__._MatAutocompleteTriggerBase {
  constructor() {
    super(...arguments);
    this._aboveClass = 'mat-autocomplete-panel-above';
  }
}
MatLegacyAutocompleteTrigger.ɵfac = /* @__PURE__ */function () {
  let ɵMatLegacyAutocompleteTrigger_BaseFactory;
  return function MatLegacyAutocompleteTrigger_Factory(t) {
    return (ɵMatLegacyAutocompleteTrigger_BaseFactory || (ɵMatLegacyAutocompleteTrigger_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatLegacyAutocompleteTrigger)))(t || MatLegacyAutocompleteTrigger);
  };
}();
MatLegacyAutocompleteTrigger.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatLegacyAutocompleteTrigger,
  selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
  hostAttrs: [1, "mat-autocomplete-trigger"],
  hostVars: 7,
  hostBindings: function MatLegacyAutocompleteTrigger_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusin", function MatLegacyAutocompleteTrigger_focusin_HostBindingHandler() {
        return ctx._handleFocus();
      })("blur", function MatLegacyAutocompleteTrigger_blur_HostBindingHandler() {
        return ctx._onTouched();
      })("input", function MatLegacyAutocompleteTrigger_input_HostBindingHandler($event) {
        return ctx._handleInput($event);
      })("keydown", function MatLegacyAutocompleteTrigger_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      })("click", function MatLegacyAutocompleteTrigger_click_HostBindingHandler() {
        return ctx._handleClick();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-owns", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete == null ? null : ctx.autocomplete.id)("aria-haspopup", ctx.autocompleteDisabled ? null : "listbox");
    }
  },
  exportAs: ["matAutocompleteTrigger"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_LEGACY_AUTOCOMPLETE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatLegacyAutocompleteTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: `input[matAutocomplete], textarea[matAutocomplete]`,
      host: {
        'class': 'mat-autocomplete-trigger',
        '[attr.autocomplete]': 'autocompleteAttribute',
        '[attr.role]': 'autocompleteDisabled ? null : "combobox"',
        '[attr.aria-autocomplete]': 'autocompleteDisabled ? null : "list"',
        '[attr.aria-activedescendant]': '(panelOpen && activeOption) ? activeOption.id : null',
        '[attr.aria-expanded]': 'autocompleteDisabled ? null : panelOpen.toString()',
        '[attr.aria-owns]': '(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id',
        '[attr.aria-haspopup]': 'autocompleteDisabled ? null : "listbox"',
        // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
        // a little earlier. This avoids issues where IE delays the focusing of the input.
        '(focusin)': '_handleFocus()',
        '(blur)': '_onTouched()',
        '(input)': '_handleInput($event)',
        '(keydown)': '_handleKeydown($event)',
        '(click)': '_handleClick()'
      },
      exportAs: 'matAutocompleteTrigger',
      providers: [MAT_LEGACY_AUTOCOMPLETE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Directive applied to an element to make it usable
 * as a connection point for an autocomplete panel.
 * @deprecated Use `MatAutocompleteOrigin` from `@angular/material/autocomplete` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyAutocompleteOrigin extends _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__._MatAutocompleteOriginBase {}
MatLegacyAutocompleteOrigin.ɵfac = /* @__PURE__ */function () {
  let ɵMatLegacyAutocompleteOrigin_BaseFactory;
  return function MatLegacyAutocompleteOrigin_Factory(t) {
    return (ɵMatLegacyAutocompleteOrigin_BaseFactory || (ɵMatLegacyAutocompleteOrigin_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatLegacyAutocompleteOrigin)))(t || MatLegacyAutocompleteOrigin);
  };
}();
MatLegacyAutocompleteOrigin.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatLegacyAutocompleteOrigin,
  selectors: [["", "matAutocompleteOrigin", ""]],
  exportAs: ["matAutocompleteOrigin"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatLegacyAutocompleteOrigin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[matAutocompleteOrigin]',
      exportAs: 'matAutocompleteOrigin'
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated Use `MatAutocompleteModule` from `@angular/material/autocomplete` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyAutocompleteModule {}
MatLegacyAutocompleteModule.ɵfac = function MatLegacyAutocompleteModule_Factory(t) {
  return new (t || MatLegacyAutocompleteModule)();
};
MatLegacyAutocompleteModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MatLegacyAutocompleteModule
});
MatLegacyAutocompleteModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__.MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_3__.MatLegacyOptionModule, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.CdkScrollableModule, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_3__.MatLegacyOptionModule, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatLegacyAutocompleteModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_3__.MatLegacyOptionModule, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      exports: [MatLegacyAutocomplete, MatLegacyAutocompleteTrigger, MatLegacyAutocompleteOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.CdkScrollableModule, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_3__.MatLegacyOptionModule, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      declarations: [MatLegacyAutocomplete, MatLegacyAutocompleteTrigger, MatLegacyAutocompleteOrigin],
      providers: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__.MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=default-src_app_account_pages_addresses_edit_edit_component_ts-src_app_core_guards_auth_guard-2abda9.js.map