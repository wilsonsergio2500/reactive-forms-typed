import { ElementRef, OnInit, OnDestroy } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FormControlOnErrorItemDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<FormControlOnErrorItemDirective, "[formControlOnErrorItem]", never, { "errors": "errors"; "showOnFormTouched": "showOnFormTouched"; "formControlItem": "formControlOnErrorItem"; }, {}, never>;
}

//# sourceMappingURL=form-control-onerror.directive.d.ts.map