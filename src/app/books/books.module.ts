import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { CommaModule } from '../libs/comma/comma.module';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './components/books/books.component';
import { LayoutModule } from './../layout/layout.module';
import { FiltersComponent } from './components/filters/filters.component';
import { BooksContainer } from './containers/books/books.container';
import { FiltersContainer } from './containers/filters/filters.container';
import { BooksView } from './views/books/books.view';
import { NotLettersDirective } from './directives/not-letters.directive';
import { DateMaskDirective } from './directives/date-mask.directive';
import { ConfirmingDeleteModalComponent } from './components/confirming-delete-modal/confirming-delete-modal.component';
import { BookEditModalComponent } from './components/book-edit-modal/book-edit-modal.component';


@NgModule({
  declarations: [
    BooksComponent,
    FiltersComponent,
    BooksContainer,
    FiltersContainer,
    BooksView,
    NotLettersDirective,
    DateMaskDirective,
    ConfirmingDeleteModalComponent,
    BookEditModalComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Material
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
    MatMomentDateModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    // Own
    LayoutModule,
    CommaModule,
    BooksRoutingModule,
  ],
})
export class BooksModule {

}
