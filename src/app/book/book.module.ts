import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './components/book/book.component';
import { BookContainer } from './containers/book/book.container';
import { BookView } from './views/book/book.view';


@NgModule({
  declarations: [
    BookComponent,
    BookContainer,
    BookView,
  ],
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Own
    BookRoutingModule,
    SharedModule,
  ],
})
export class BookModule { }
