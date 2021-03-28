import { Injectable } from "@angular/core";
import {
    FormBuilder as NgFormBuilder,
    ValidatorFn,
    AsyncValidatorFn,
    AbstractControlOptions,
} from "@angular/forms";
import { NgTypeAbstractControl, NgTypeFormControl, NgTypeFormGroup, NgTypeFormArray } from "./FormTypeBuilder.models";
import { FormExtendedMethods } from "./FormTypeBuilder.extensions";


@Injectable()
export class FormTypeBuilder {

    private ngFormBuilder: NgFormBuilder;
    static create() {
        return new FormTypeBuilder();
    }

    constructor() {
        this.ngFormBuilder = new NgFormBuilder();
    }
    
    group<T>(controlsConfig: { [P in keyof T] : any }, options?: AbstractControlOptions | null): NgTypeFormGroup<T> {
        const formGroup = this.ngFormBuilder.group(controlsConfig, options) as NgTypeFormGroup<T>;
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

    control<T>(value: T, validator?: ValidatorFn | ValidatorFn[] | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): NgTypeFormControl<T>;
    control(formState: Object, validator?: ValidatorFn | ValidatorFn[] | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {
        return this.ngFormBuilder.control(formState, validator, asyncValidator);
    }

    array<T>(controls: NgTypeAbstractControl<T>[], validator?: ValidatorFn | null, asyncValidator?: AsyncValidatorFn | null): NgTypeFormArray<T>;
    array<S>(controlsConfig: any[], validator?: ValidatorFn | null, asyncValidator?: AsyncValidatorFn | null): NgTypeFormArray<S>;
    array(controlsConfig: any[], validator?: ValidatorFn | null, asyncValidator?: AsyncValidatorFn | null) {
        return this.ngFormBuilder.array(controlsConfig, validator, asyncValidator);
    }
}