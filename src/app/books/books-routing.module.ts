import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksContainer } from './containers/books/books.container';

const routes: Routes = [
  {
    path: '',
    component: BooksContainer,
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
export class BooksRoutingModule {

}
