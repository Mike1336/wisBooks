import { SharedModule } from './../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { AuthContainer } from './containers/auth/auth.container';


@NgModule({
  declarations: [
    AuthComponent,
    AuthContainer,
  ],
  imports: [
    // Anfular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Own
    AuthRoutingModule,
    SharedModule,
  ],
})
export class AuthModule { }
