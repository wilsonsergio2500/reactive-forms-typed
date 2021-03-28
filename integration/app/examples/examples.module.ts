
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialComponentsModule } from '../material.module';
import { SharedModule } from '../shared.module';
import { ExamplesComponent } from './examples.component';
import { ExamplesRoutingModule } from './examples.routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    ExamplesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialComponentsModule,
    ExamplesRoutingModule
  ]
})
export class ExampleModule { }
