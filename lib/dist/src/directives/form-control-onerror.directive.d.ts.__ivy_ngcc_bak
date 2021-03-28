import { ElementRef, OnInit, OnDestroy } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Subscription } from 'rxjs';
export declare class FormControlOnErrorItemDirective implements OnInit, OnDestroy {
    private formGroupService;
    private element;
    formControlItem: string;
    errors: any;
    showOnFormTouched: boolean;
    tracker: Subscription;
    hidden: boolean;
    constructor(formGroupService: FormGroupDirective, element: ElementRef<HTMLElement>);
    private _errors;
    ngOnInit(): void;
    changeTracker(): void;
    get errorMessage(): any;
    get ControlTouched(): boolean;
    ngOnDestroy(): void;
}
