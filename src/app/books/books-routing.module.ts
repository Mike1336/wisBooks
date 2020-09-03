import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './components/books/books.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
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
