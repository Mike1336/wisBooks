import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CommaModule } from '../libs/comma/comma.module';

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
    // Material
    MatTableModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    // Own
    BookRoutingModule,
    CommaModule,
  ],
})
export class BookModule { }
