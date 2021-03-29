import { Directive, Inject, ElementRef, Input, HostBinding, Injectable, NgModule } from '@angular/core';
import { FormGroupDirective, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interval } from 'rxjs';
import { map, delay, tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

class FormControlOnErrorItemDirective {
    constructor(formGroupService, element) {
        this.formGroupService = formGroupService;
        this.element = element;
        this.errors = null;
        this.showOnFormTouched = false;
        this.hidden = true;
        this._errors = {
            required: "Required",
            minlength: "Minimum length not valid",
            maxlength: "Exceeds the maximum length",
            isValidEmailAddress: "Invalid email address",
            isValidSelection: "Invalid selection",
            isStringValidByRegEx: "Invalid character",
            isStringInRange: "Invalid string length",
            isInRange: "Number is outside specified range",
            isGreaterThanMin: "Exceeds allowed value",
            doControlValuesMatch: "Values do not match",
            email: "Invalid email address"
        };
    }
    ngOnInit() {
        const fgroup = this.formGroupService.form;
        if (!!this.errors) {
            this._errors = Object.assign(Object.assign({}, this._errors), this.errors);
        }
        if (!!fgroup.__errors) {
            this._errors = Object.assign(Object.assign({}, this._errors), fgroup.__errors);
        }
        if (!!fgroup.__contractErrors && !!fgroup.__contractErrors[this.formControlItem]) {
            this._errors = Object.assign(Object.assign({}, this._errors), fgroup.__contractErrors[this.formControlItem]);
        }
        this.changeTracker();
    }
    changeTracker() {
        const onHappen = (x) => {
            this.hidden = !x;
            const msg = this.hidden ? '' : this.errorMessage;
            if (!!msg) {
                this.element.nativeElement.innerText = msg;
            }
        };
        this.tracker = interval(250).pipe(map(ev => this.errorMessage && this.ControlTouched)).subscribe(onHappen);
    }
    get errorMessage() {
        const formControl = this.formGroupService.form.get(this.formControlItem);
        if (!!formControl && !!formControl.errors) {
            const fgroup = this.formGroupService.form;
            const keys = Object.keys(formControl.errors);
            return (this._errors[keys[0]] || null);
        }
        return null;
    }
    get ControlTouched() {
        const formControl = this.formGroupService.form.get(this.formControlItem);
        if (this.showOnFormTouched) {
            if (formControl) {
                return formControl.parent.touched;
            }
        }
        else {
            if (formControl) {
                return formControl.touched || this.formGroupService.submitted || (!!formControl.parent.__submitted);
            }
        }
        return true;
    }
    ngOnDestroy() {
        this.tracker.unsubscribe();
    }
}
FormControlOnErrorItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[formControlOnErrorItem]',
            },] }
];
FormControlOnErrorItemDirective.ctorParameters = () => [
    { type: FormGroupDirective, decorators: [{ type: Inject, args: [FormGroupDirective,] }] },
    { type: ElementRef }
];
FormControlOnErrorItemDirective.propDecorators = {
    formControlItem: [{ type: Input, args: ['formControlOnErrorItem',] }],
    errors: [{ type: Input }],
    showOnFormTouched: [{ type: Input }],
    hidden: [{ type: HostBinding, args: ['hidden',] }]
};

// @dynamic
class FormExtendedMethods {
}
FormExtendedMethods.onInit = function () {
    this.__submitted = false;
    this.__subscriptions = [];
};
FormExtendedMethods.setErrors = function (config) {
    this.__errors = Object.assign({}, config);
};
FormExtendedMethods.setFormErrors = function (config) {
    this.__contractErrors = Object.assign({}, config);
};
FormExtendedMethods.setFormControlErrors = function (key, config) {
    if (!!this.__contractErrors) {
        this.__contractErrors = Object.assign({}, this.__contractErrors);
        this.__contractErrors[key] = config;
    }
    else {
        this.__contractErrors = {};
        this.__contractErrors[key] = config;
    }
};
FormExtendedMethods.markAsSubmitted = function () {
    this.__submitted = true;
};
FormExtendedMethods.isSubmitted = function () {
    return this.__submitted;
};
FormExtendedMethods.addFormControlValidityTracker = function (from, to) {
    const form = this;
    const sub$ = form.controls[from].valueChanges.pipe(delay(1), tap(_ => form.controls[to].updateValueAndValidity()));
    this.__subscriptions = [...this.__subscriptions, sub$.subscribe()];
};
FormExtendedMethods.unsubscribeValidityTackers = function () {
    if (this.__subscriptions) {
        this.__subscriptions.forEach(sub => sub.unsubscribe());
    }
};

class FormTypeBuilder {
    constructor() {
        this.ngFormBuilder = new FormBuilder();
    }
    static create() {
        return new FormTypeBuilder();
    }
    group(controlsConfig, options) {
        const formGroup = this.ngFormBuilder.group(controlsConfig, options);
        formGroup.onInit = FormExtendedMethods.onInit.bind(formGroup);
        formGroup.setFormErrors = FormExtendedMethods.setFormErrors.bind(formGroup);
        formGroup.setFormErrors = FormExtendedMethods.setFormErrors.bind(formGroup);
        formGroup.setFormControlErrors = FormExtendedMethods.setFormControlErrors.bind(formGroup);
        formGroup.markAsSubmitted = FormExtendedMethods.markAsSubmitted.bind(formGroup);
        formGroup.isSubmitted = FormExtendedMethods.isSubmitted.bind(formGroup);
        formGroup.addFormControlValidityTracker = FormExtendedMethods.addFormControlValidityTracker.bind(formGroup);
        formGroup.onInit();
        return formGroup;
    }
    control(formState, validator, asyncValidator) {
        return this.ngFormBuilder.control(formState, validator, asyncValidator);
    }
    array(controlsConfig, validator, asyncValidator) {
        return this.ngFormBuilder.array(controlsConfig, validator, asyncValidator);
    }
}
FormTypeBuilder.decorators = [
    { type: Injectable }
];
FormTypeBuilder.ctorParameters = () => [];

class ReactiveFormsTypedModule {
}
ReactiveFormsTypedModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    FormControlOnErrorItemDirective
                ],
                exports: [
                    FormControlOnErrorItemDirective
                ],
                providers: [FormTypeBuilder],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { FormControlOnErrorItemDirective, FormTypeBuilder, ReactiveFormsTypedModule };
//# sourceMappingURL=reactive-forms-typed.js.map
