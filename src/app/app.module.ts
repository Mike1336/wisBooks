import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxsModule } from '@ngxs/store';

import { environment } from '../environments/environment';

import { GenresState } from './store/states/genres/genres.state';
import { AuthorsState } from './store/states/authors/authors.state';
import { BooksState } from './store/states/books/books.state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { BookModule } from './book/book.module';
import { LayoutModule } from './layout/layout.module';
import { RegisterModule } from './register/register.module';
import { AuthModule } from './auth/auth.module';
import { NotFoundModule } from './not-found/not-found.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // NGXS
    NgxsModule.forRoot([
      BooksState,
      AuthorsState,
      GenresState,
    ], {
      developmentMode: !environment.production,
    }),
    // Own
    BooksModule,
    BookModule,
    LayoutModule,
    RegisterModule,
    AuthModule,
    NotFoundModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
