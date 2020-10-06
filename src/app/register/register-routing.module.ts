import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterView } from './views/register/register.view';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: RegisterView,
    canActivate: [AuthGuard],
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
