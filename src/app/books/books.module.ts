import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books/books.component';


@NgModule({
  declarations: [
    BooksComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
  ],
})
export class BooksModule {

}
