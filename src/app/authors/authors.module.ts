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
import { AuthorsContainer } from './containers/authors/authors.container';
import { AuthorsView } from './views/authors/authors.view';

@NgModule({
  declarations: [
    AuthorsComponent,
    AuthorsContainer,
    AuthorsView,
  ],
  imports: [
    // Angular
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Material
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
    // Own
    AuthorsRoutingModule,
    LayoutModule,
  ],
})
export class AuthorsModule { }
