import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './components/books/books.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    BooksComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  bootstrap: [],
})
export class BooksModule {

}
