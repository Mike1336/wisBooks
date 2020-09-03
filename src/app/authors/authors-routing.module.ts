import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './components/authors/authors.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorsComponent,
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
export class AuthorsRoutingModule {

}
