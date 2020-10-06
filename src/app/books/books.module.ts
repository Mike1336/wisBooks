import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from './../shared/shared.module';
import { LayoutModule } from './../layout/layout.module';
import { ConfirmingDeleteModalComponent } from './components/confirming-delete-modal/confirming-delete-modal.component';
import { BookEditModalComponent } from './components/book-edit-modal/book-edit-modal.component';
import { BooksComponent } from './components/books/books.component';
import { BooksContainer } from './containers/books/books.container';
import { BooksView } from './views/books/books.view';
import { FiltersComponent } from './components/filters/filters.component';
import { FiltersContainer } from './containers/filters/filters.container';

@NgModule({
  declarations: [
    ConfirmingDeleteModalComponent,
    BookEditModalComponent,
    BooksComponent,
    BooksContainer,
    BooksView,
    FiltersComponent,
    FiltersContainer,
  ],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Own
    LayoutModule,
    BooksRoutingModule,
    SharedModule,
  ],
})
export class BooksModule {

}
