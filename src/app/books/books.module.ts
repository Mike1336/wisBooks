import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

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

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY-MM',
    dateA11yLabel: 'YYYY-MM-DD',
    monthYearA11yLabel: 'YYYY-MM-DD',
  },
};
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
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class BooksModule {

}
