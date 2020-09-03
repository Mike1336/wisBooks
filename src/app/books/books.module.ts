import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { CommaModule } from '../libs/comma/comma.module';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './components/books/books.component';


@NgModule({
  declarations: [
    BooksComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    CommaModule,
  ],
  bootstrap: [],
})
export class BooksModule {

}
