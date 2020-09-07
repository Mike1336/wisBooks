import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';

import { LayoutModule } from './../layout/layout.module';
import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from './components/authors/authors.component';

@NgModule({
  declarations: [
    AuthorsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
    AuthorsRoutingModule,
    LayoutModule,
  ],
})
export class AuthorsModule { }
