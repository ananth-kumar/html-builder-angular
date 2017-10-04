import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../pages/login/login.component';
import { BuilderComponent } from '../pages/builder/builder.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'build', component: BuilderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true
    })],
  exports: [RouterModule]
})
export class AppRoute { }
