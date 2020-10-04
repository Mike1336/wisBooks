import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthContainer } from './containers/auth/auth.container';

const routes: Routes = [
  {
    path: '',
    component: AuthContainer,
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
export class AuthRoutingModule { }
