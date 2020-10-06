import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { NotDigitsDirective } from './directives/not-digits.directive';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { CardNumberMaskDirective } from './directives/card-number-mask.directive';
import { CardDateMaskDirective } from './directives/card-date.directive';
import { NotLettersDirective } from './directives/not-letters.directive';
import { DateMaskDirective } from './directives/date-mask.directive';
import { CommaPipe } from './pipes/comma.pipe';

@NgModule({
  declarations: [
    CommaPipe,
    DateMaskDirective,
    NotLettersDirective,
    CardDateMaskDirective,
    CardNumberMaskDirective,
    PhoneMaskDirective,
    NotDigitsDirective,
  ],
  imports: [
    CommonModule,
    // Material
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatExpansionModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatGridListModule,
    MatSortModule,
  ],
  exports: [
    // Material
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatExpansionModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatGridListModule,
    MatSortModule,
    // Own
    CommaPipe,
    DateMaskDirective,
    NotLettersDirective,
    CardDateMaskDirective,
    CardNumberMaskDirective,
    PhoneMaskDirective,
    NotDigitsDirective,
  ],
})
export class SharedModule { }
