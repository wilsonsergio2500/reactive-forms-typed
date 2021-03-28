import { Subscription } from "rxjs";
import { delay, tap } from "rxjs/operators";
import { NgTypeFormGroup } from "./FormTypeBuilder.models";

export interface IFormGroupPrivates{
    __submitted : boolean;
    __errors: any;
    __contractErrors: any;
    __subscriptions: Subscription[]
}
// @dynamic
export class FormExtendedMethods {

    public static onInit = function () {
        this.__submitted = false;
        this.__subscriptions = [];
    }

    public static setErrors = function (config: any) {
        this.__errors = { ...config };
    }

    public static setFormErrors = function (config: any) {
        this.__contractErrors = { ...config };
    };

    public static setFormControlErrors = function (key: string, config: any) {
        if (!!this.__contractErrors) {
            this.__contractErrors = { ...this.__contractErrors };
            this.__contractErrors[key] = config;
        } else {
            this.__contractErrors = {};
            this.__contractErrors[key] = config;
        }
    }

    public static markAsSubmitted = function () {
        this.__submitted = true;
    }

    public static isSubmitted = function () {
        return this.__submitted
    }

    public static addFormControlValidityTracker = function(from: string, to: string){
      const form = this as NgTypeFormGroup<any>;
        const sub$ = form.controls[from].valueChanges.pipe(
            delay(1),
            tap(_ => form.controls[to].updateValueAndValidity())
        )
        this.__subscriptions = [...this.__subscriptions, sub$.subscribe()];
    }

    public static unsubscribeValidityTackers = function(){
        if(this.__subscriptions){
            (this.__subscriptions as Subscription[]).forEach(sub => sub.unsubscribe());
        }
    }

}
