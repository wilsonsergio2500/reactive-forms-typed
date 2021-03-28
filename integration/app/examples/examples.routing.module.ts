
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './examples.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  <Route>{
    path: '', component: ExamplesComponent,
    children: [
      <Route>{ path: '', component: LoginComponent },
      <Route>{ path: 'login', component: LoginComponent },
      <Route>{ path: 'register', component: RegisterComponent}
    ]
  }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ExamplesRoutingModule{}
