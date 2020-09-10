import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { CommaModule } from '../libs/comma/comma.module';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './components/books/books.component';
import { LayoutModule } from './../layout/layout.module';
import { BookItemComponent } from './components/book-item/book-item.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { BooksContentComponent } from './components/books-content/books-content.component';


@NgModule({
  declarations: [
    BooksComponent,
    BookItemComponent,
    FiltersComponent,
    SearchFieldComponent,
    BooksContentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    LayoutModule,
    CommaModule,
  ],
  bootstrap: [],
})
export class BooksModule {

}
