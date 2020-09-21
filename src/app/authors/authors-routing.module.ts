import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsContainer } from './containers/authors/authors.container';

const routes: Routes = [
  {
    path: '',
    component: AuthorsContainer,
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
