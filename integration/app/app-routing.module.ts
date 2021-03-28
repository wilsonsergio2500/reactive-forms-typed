import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  <Route>{
    path: '', component: AppComponent,
    children: [
      <Route>{ path: '', loadChildren: () => import('./examples/examples.module').then(m => m.ExampleModule) },
      <Route>{ path: 'examples', loadChildren: () => import('./examples/examples.module').then(m => m.ExampleModule) }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
