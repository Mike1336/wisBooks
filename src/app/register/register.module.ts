import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from './services/auth.guard';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from './../shared/shared.module';
import { FirstStepComponent } from './components/first-step/first-step.component';
import { SecondStepComponent } from './components/second-step/second-step.component';
import { ThirdStepComponent } from './components/third-step/third-step.component';
import { RegisterContainer } from './containers/register/register.container';
import { RegisterView } from './views/register/register.view';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    RegisterContainer,
    RegisterView,
    CardComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,
    // Own
    RegisterRoutingModule,
    SharedModule,
  ],
  providers: [AuthGuard],
})
export class RegisterModule { }
