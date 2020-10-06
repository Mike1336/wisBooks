import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { AuthContainer } from './containers/auth/auth.container';
import { AuthGuard } from './services/auth.guard';


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
  providers: [
    AuthGuard,
  ],
})
export class AuthModule { }
