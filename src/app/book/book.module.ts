import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './components/book/book.component';


@NgModule({
  declarations: [
    BookComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatGridListModule,
  ],
})
export class BookModule { }
