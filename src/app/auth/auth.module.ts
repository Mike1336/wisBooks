import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
    // Material
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    // Own
    AuthRoutingModule,
  ],
})
export class AuthModule { }
