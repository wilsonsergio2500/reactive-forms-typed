import { Subscription } from "rxjs";
export interface IFormGroupPrivates {
    __submitted: boolean;
    __errors: any;
    __contractErrors: any;
    __subscriptions: Subscription[];
}
export declare class FormExtendedMethods {
    static onInit: () => void;
    static setErrors: (config: any) => void;
    static setFormErrors: (config: any) => void;
    static setFormControlErrors: (key: string, config: any) => void;
    static markAsSubmitted: () => void;
    static isSubmitted: () => any;
    static addFormControlValidityTracker: (from: string, to: string) => void;
    static unsubscribeValidityTackers: () => void;
}
