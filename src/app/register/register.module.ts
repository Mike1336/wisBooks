import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterView } from './views/register/register.view';
import { RegisterContainer } from './containers/register/register.container';
import { RegisterComponent } from './components/register/register.component';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { NotDigitsDirective } from './directives/not-digits.directive';
import { CardNumberMaskDirective } from './directives/card-number-mask.directive';
import { CardDateMaskDirective } from './directives/card-date.directive';


@NgModule({
  declarations: [
    RegisterComponent,
    RegisterContainer,
    RegisterView,
    PhoneMaskDirective,
    NotDigitsDirective,
    CardNumberMaskDirective,
    CardDateMaskDirective,
  ],
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,
    // Material
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    // Own
    RegisterRoutingModule,
  ]
})
export class RegisterModule { }
