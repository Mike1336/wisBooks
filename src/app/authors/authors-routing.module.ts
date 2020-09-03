import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './components/authors/authors.component';

const routes: Routes = [
  {
    path: ':number',
    component: AuthorsComponent,
  },
  {
    path: '**',
    redirectTo: '1',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorsRoutingModule {

}
