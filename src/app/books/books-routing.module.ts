import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './components/books/books.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'book/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {

}
