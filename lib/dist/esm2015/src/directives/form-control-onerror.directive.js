import { Directive, Inject, Input, ElementRef, HostBinding } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
export class FormControlOnErrorItemDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLW9uZXJyb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvZm9ybS1jb250cm9sLW9uZXJyb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQVUsV0FBVyxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUN2SCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQTRCLFFBQVEsRUFBTSxNQUFNLE1BQU0sQ0FBQztBQUM5RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLckMsTUFBTSxPQUFPLCtCQUErQjtJQVUxQyxZQUN3QyxnQkFBb0MsRUFDbEUsT0FBZ0M7UUFERixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO1FBQ2xFLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBVGpDLFdBQU0sR0FBUSxJQUFJLENBQUM7UUFDbkIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBSTVDLFdBQU0sR0FBWSxJQUFJLENBQUM7UUFRZixZQUFPLEdBQVE7WUFDckIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLDBCQUEwQjtZQUNyQyxTQUFTLEVBQUUsNEJBQTRCO1lBQ3ZDLG1CQUFtQixFQUFFLHVCQUF1QjtZQUM1QyxnQkFBZ0IsRUFBRSxtQkFBbUI7WUFDckMsb0JBQW9CLEVBQUUsbUJBQW1CO1lBQ3pDLGVBQWUsRUFBRSx1QkFBdUI7WUFDeEMsU0FBUyxFQUFFLG1DQUFtQztZQUM5QyxnQkFBZ0IsRUFBRSx1QkFBdUI7WUFDekMsb0JBQW9CLEVBQUUscUJBQXFCO1lBQzNDLEtBQUssRUFBRSx1QkFBdUI7U0FDL0IsQ0FBQztJQWRGLENBQUM7SUFnQkQsUUFBUTtRQUNOLE1BQU0sTUFBTSxHQUFR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QUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7O1lBekZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2FBQ3JDOzs7WUFOUSxrQkFBa0IsdUJBa0JwQixNQUFNLFNBQUMsa0JBQWtCO1lBbkJHLFVBQVU7Ozs4QkFVMUMsS0FBSyxTQUFDLHdCQUF3QjtxQkFDOUIsS0FBSztnQ0FDTCxLQUFLO3FCQUdMLFdBQVcsU0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3QsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQsIEhvc3RCaW5kaW5nLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIE9ic2VydmFibGUsIGludGVydmFsLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tmb3JtQ29udHJvbE9uRXJyb3JJdGVtXScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbE9uRXJyb3JJdGVtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoJ2Zvcm1Db250cm9sT25FcnJvckl0ZW0nKSBmb3JtQ29udHJvbEl0ZW06IHN0cmluZztcclxuICBASW5wdXQoKSBlcnJvcnM6IGFueSA9IG51bGw7XHJcbiAgQElucHV0KCkgc2hvd09uRm9ybVRvdWNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICB0cmFja2VyOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIEBIb3N0QmluZGluZygnaGlkZGVuJylcclxuICBoaWRkZW46IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgQEluamVjdChGb3JtR3JvdXBEaXJlY3RpdmUpIHByaXZhdGUgZm9ybUdyb3VwU2VydmljZTogRm9ybUdyb3VwRGlyZWN0aXZlLCBcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD5cclxuICAgICkge1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZXJyb3JzOiBhbnkgPSB7XHJcbiAgICByZXF1aXJlZDogXCJSZXF1aXJlZFwiLFxyXG4gICAgbWlubGVuZ3RoOiBcIk1pbmltdW0gbGVuZ3RoIG5vdCB2YWxpZFwiLFxyXG4gICAgbWF4bGVuZ3RoOiBcIkV4Y2VlZHMgdGhlIG1heGltdW0gbGVuZ3RoXCIsXHJcbiAgICBpc1ZhbGlkRW1haWxBZGRyZXNzOiBcIkludmFsaWQgZW1haWwgYWRkcmVzc1wiLFxyXG4gICAgaXNWYWxpZFNlbGVjdGlvbjogXCJJbnZhbGlkIHNlbGVjdGlvblwiLFxyXG4gICAgaXNTdHJpbmdWYWxpZEJ5UmVnRXg6IFwiSW52YWxpZCBjaGFyYWN0ZXJcIixcclxuICAgIGlzU3RyaW5nSW5SYW5nZTogXCJJbnZhbGlkIHN0cmluZyBsZW5ndGhcIixcclxuICAgIGlzSW5SYW5nZTogXCJOdW1iZXIgaXMgb3V0c2lkZSBzcGVjaWZpZWQgcmFuZ2VcIixcclxuICAgIGlzR3JlYXRlclRoYW5NaW46IFwiRXhjZWVkcyBhbGxvd2VkIHZhbHVlXCIsXHJcbiAgICBkb0NvbnRyb2xWYWx1ZXNNYXRjaDogXCJWYWx1ZXMgZG8gbm90IG1hdGNoXCIsXHJcbiAgICBlbWFpbDogXCJJbnZhbGlkIGVtYWlsIGFkZHJlc3NcIlxyXG4gIH07XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgZmdyb3VwOiBhbnkgPSB0aGlzLmZvcm1Hcm91cFNlcnZpY2UuZm9ybTtcclxuXHJcbiAgICBpZiAoISF0aGlzLmVycm9ycykge1xyXG4gICAgICB0aGlzLl9lcnJvcnMgPSB7IC4uLnRoaXMuX2Vycm9ycywgLi4udGhpcy5lcnJvcnMgfTtcclxuICAgIH1cclxuICAgIGlmICghIWZncm91cC5fX2Vycm9ycykge1xyXG4gICAgICB0aGlzLl9lcnJvcnMgPSB7IC4uLnRoaXMuX2Vycm9ycywgLi4uZmdyb3VwLl9fZXJyb3JzIH07XHJcbiAgICB9XHJcbiAgICBpZiAoISFmZ3JvdXAuX19jb250cmFjdEVycm9ycyAmJiAhIWZncm91cC5fX2NvbnRyYWN0RXJyb3JzW3RoaXMuZm9ybUNvbnRyb2xJdGVtXSkge1xyXG4gICAgICB0aGlzLl9lcnJvcnMgPSB7IC4uLnRoaXMuX2Vycm9ycywgLi4uZmdyb3VwLl9fY29udHJhY3RFcnJvcnNbdGhpcy5mb3JtQ29udHJvbEl0ZW1dIH07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VUcmFja2VyKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUcmFja2VyKCkge1xyXG5cclxuICAgIGNvbnN0IG9uSGFwcGVuID0gKHg6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5oaWRkZW4gPSAheDtcclxuICAgICAgY29uc3QgbXNnID0gdGhpcy5oaWRkZW4gPyAnJyA6IHRoaXMuZXJyb3JNZXNzYWdlO1xyXG4gICAgICBpZiAoISFtc2cpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lclRleHQgPSBtc2c7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRyYWNrZXIgPSAgaW50ZXJ2YWwoMjUwKS5waXBlKG1hcChldiA9PiB0aGlzLmVycm9yTWVzc2FnZSAmJiB0aGlzLkNvbnRyb2xUb3VjaGVkKSkuc3Vic2NyaWJlKG9uSGFwcGVuKTtcclxuICB9XHJcbiAgZ2V0IGVycm9yTWVzc2FnZSgpIHtcclxuXHJcbiAgICBjb25zdCBmb3JtQ29udHJvbCA9IHRoaXMuZm9ybUdyb3VwU2VydmljZS5mb3JtLmdldCh0aGlzLmZvcm1Db250cm9sSXRlbSk7XHJcbiAgICBpZiAoISFmb3JtQ29udHJvbCAmJiAhIWZvcm1Db250cm9sLmVycm9ycykge1xyXG4gICAgICBjb25zdCBmZ3JvdXA6IGFueSA9IHRoaXMuZm9ybUdyb3VwU2VydmljZS5mb3JtO1xyXG5cclxuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGZvcm1Db250cm9sLmVycm9ycyk7XHJcbiAgICAgIHJldHVybiAodGhpcy5fZXJyb3JzW2tleXNbMF1dIHx8IG51bGwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgQ29udHJvbFRvdWNoZWQoKSB7XHJcbiAgICBjb25zdCBmb3JtQ29udHJvbCA9IHRoaXMuZm9ybUdyb3VwU2VydmljZS5mb3JtLmdldCh0aGlzLmZvcm1Db250cm9sSXRlbSk7XHJcbiAgICBpZiAodGhpcy5zaG93T25Gb3JtVG91Y2hlZCkge1xyXG4gICAgICBpZiAoZm9ybUNvbnRyb2wpIHtcclxuICAgICAgICByZXR1cm4gZm9ybUNvbnRyb2wucGFyZW50LnRvdWNoZWQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChmb3JtQ29udHJvbCkge1xyXG4gICAgICAgIHJldHVybiBmb3JtQ29udHJvbC50b3VjaGVkIHx8IHRoaXMuZm9ybUdyb3VwU2VydmljZS5zdWJtaXR0ZWQgfHwgKCEhKGZvcm1Db250cm9sLnBhcmVudCBhcyBhbnkpLl9fc3VibWl0dGVkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMudHJhY2tlci51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufSJdfQ==