import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookView } from './views/book/book.view';


const routes: Routes = [
  {
    path: '',
    component: BookView,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {

}
