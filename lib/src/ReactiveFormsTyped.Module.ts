
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormTypeBuilder } from "./FormTypeBuilder.service";
import { FormControlOnErrorItemDirective } from "./directives/form-control-onerror.directive";


@NgModule({
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
})
export class ReactiveFormsTyped { }
