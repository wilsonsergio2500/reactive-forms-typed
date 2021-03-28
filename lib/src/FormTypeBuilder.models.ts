import {
    AbstractControl as NgAbstractControl,
    FormControl as NgFormControl,
    FormGroup as NgFormGroup,
    FormArray as NgFormArray,
} from "@angular/forms";
import { Observable } from "rxjs";
import { IFormGroupPrivates } from "./FormTypeBuilder.extensions";

interface AbstractControl<T = any> extends NgAbstractControl {
    readonly valueChanges: Observable<T>;
    readonly value: T;
    setValue(value: T, options?: Object): void;
    get<K extends keyof T>(path: K): AbstractControl<T[K]>;
    get<S>(path: (string | number)[]): AbstractControl<S>;
    get(path: (string | number)[]): AbstractControl<any>;
}

interface FormControl<T = any, TParent = any> extends NgFormControl {
    readonly parent: FormGroup<TParent> | FormArray<TParent>;
    readonly valueChanges: Observable<T>;
    readonly value: T;
    setValue(value: T, options?: Object): void;
    get<K extends keyof T>(path: K): AbstractControl<T[K]>;
    get<S>(path: (string | number)[]): AbstractControl<S>;
    get(path: (string | number)[]): AbstractControl<any>;
}

interface FormGroup<T = any> extends NgFormGroup, IFormGroupPrivates  {
    readonly controls:{ [P in keyof T]: AbstractControl<T[P]> }; 
    readonly valueChanges: Observable<T>;
    readonly value: T;
    get<K extends keyof T>(path: K): AbstractControl<T[K]>;
    get<S>(path: (string | number)[]): AbstractControl<S>;
    get(path: (string | number)[]): AbstractControl<any>;
    registerControl<K extends keyof T>(name: keyof K, control: AbstractControl<T[K]>): AbstractControl<T[K]>;
    addControl<K extends keyof T>(name: keyof K, control: AbstractControl<T[K]>): void;
    setValue(value: T, options?: Object): void;
    patchValue(value: T, options?: Object): void;
    getRawValue(): T;
    setErrors(config: any);
    setFormErrors(config: { [p in keyof T]: any });
    setFormControlErrors(string: keyof T, config: { [key: string]: any });
    markAsSubmitted(): void;
    onInit(): void;
    isSubmitted(): boolean;
    addFormControlValidityTracker(fromControl : keyof T, toControl: keyof T);
}

interface FormArray<T = any> extends NgFormArray {
    readonly valueChanges: Observable<T[]>;
    readonly value: T[];
    push(control: AbstractControl<T>): void;
    insert(index: number, control: AbstractControl<T>): void;
    setValue(value: T[], options?: Object): void;
    patchValue(value: T[], options?: Object): void;
    getRawValue(): T[];
    at(index: number): AbstractControl<T>;
}

interface FormControlForValidation<T = any, TParent = any> extends NgFormControl{
    readonly parent: FormGroup<TParent>
    readonly valueChanges: Observable<T>;
    readonly value: T;
    setValue(value: T, options?: Object): void;
    get<K extends keyof T>(path: K): AbstractControl<T[K]>;
    get<S>(path: (string | number)[]): AbstractControl<S>;
    get(path: (string | number)[]): AbstractControl<any>;

}

export { AbstractControl as NgTypeAbstractControl };
export { FormControl as NgTypeFormControl };
export { FormControlForValidation as NgTypeFormControlValidator}
export { FormGroup as NgTypeFormGroup };
export { FormArray as NgTypeFormArray };