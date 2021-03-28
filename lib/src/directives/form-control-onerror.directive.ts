import { Directive, Inject, Input, ElementRef, OnInit, HostBinding, AfterContentInit, OnDestroy } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { Subscription, Observable, interval, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[formControlOnErrorItem]',
})
export class FormControlOnErrorItemDirective implements OnInit, OnDestroy {

  @Input('formControlOnErrorItem') formControlItem: string;
  @Input() errors: any = null;
  @Input() showOnFormTouched: boolean = false;
  tracker: Subscription;

  @HostBinding('hidden')
  hidden: boolean = true;

  constructor(
      @Inject(FormGroupDirective) private formGroupService: FormGroupDirective, 
    private element: ElementRef<HTMLElement>
    ) {
  }

  private _errors: any = {
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

  ngOnInit(): void {
    const fgroup: any = this.formGroupService.form;

    if (!!this.errors) {
      this._errors = { ...this._errors, ...this.errors };
    }
    if (!!fgroup.__errors) {
      this._errors = { ...this._errors, ...fgroup.__errors };
    }
    if (!!fgroup.__contractErrors && !!fgroup.__contractErrors[this.formControlItem]) {
      this._errors = { ...this._errors, ...fgroup.__contractErrors[this.formControlItem] };
    }

    this.changeTracker();
  }

  changeTracker() {

    const onHappen = (x: boolean) => {
      this.hidden = !x;
      const msg = this.hidden ? '' : this.errorMessage;
      if (!!msg) {
        this.element.nativeElement.innerText = msg;
      }
    }

    this.tracker =  interval(250).pipe(map(ev => this.errorMessage && this.ControlTouched)).subscribe(onHappen);
  }
  get errorMessage() {

    const formControl = this.formGroupService.form.get(this.formControlItem);
    if (!!formControl && !!formControl.errors) {
      const fgroup: any = this.formGroupService.form;

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
    } else {
      if (formControl) {
        return formControl.touched || this.formGroupService.submitted || (!!(formControl.parent as any).__submitted);
      }
    }
    return true;
  }

  ngOnDestroy() {
    this.tracker.unsubscribe();
  }
}