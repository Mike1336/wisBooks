import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
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
    // Own
    AuthorsRoutingModule,
    LayoutModule,
    SharedModule,
  ],
})
export class AuthorsModule { }
