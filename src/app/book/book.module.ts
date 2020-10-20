import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './components/book/book.component';
import { BookContainer } from './containers/book/book.container';
import { BookView } from './views/book/book.view';
import {MomentDateAdapter,MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {MAT_DATE_LOCALE,DateAdapter,MAT_DATE_FORMATS} from '@angular/material/core';

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
export class BookModule { }
