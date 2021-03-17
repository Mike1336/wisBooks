import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksView } from './views/books/books.view';

const routes: Routes = [
  {
    path: ':page',
    component: BooksView,
  },
  {
    path: '',
    pathMatch:'full',
    redirectTo: '1',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {

}
