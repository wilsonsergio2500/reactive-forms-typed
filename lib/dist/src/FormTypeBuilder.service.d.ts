import { ValidatorFn, AsyncValidatorFn, AbstractControlOptions } from "@angular/forms";
import { NgTypeAbstractControl, NgTypeFormControl, NgTypeFormGroup, NgTypeFormArray } from "./FormTypeBuilder.models";
export declare class FormTypeBuilder {
    private ngFormBuilder;
    static create(): FormTypeBuilder;
    constructor();
    group<T>(controlsConfig: {
        [P in keyof T]: any;
    }, options?: AbstractControlOptions | null): NgTypeFormGroup<T>;
    control<T>(value: T, validator?: ValidatorFn | ValidatorFn[] | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): NgTypeFormControl<T>;
    array<T>(controls: NgTypeAbstractControl<T>[], validator?: ValidatorFn | null, asyncValidator?: AsyncValidatorFn | null): NgTypeFormArray<T>;
    array<S>(controlsConfig: any[], validator?: ValidatorFn | null, asyncValidator?: AsyncValidatorFn | null): NgTypeFormArray<S>;
}
