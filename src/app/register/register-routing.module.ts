import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterView } from './views/register/register.view';


const routes: Routes = [
  {
    path: '',
    component: RegisterView,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule { }
