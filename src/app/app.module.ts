import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommaModule } from './libs/comma/comma.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { BookModule } from './book/book.module';
import { LayoutModule } from './layout/layout.module';
import { RegisterModule } from './register/register.module';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Own
    BooksModule,
    BookModule,
    LayoutModule,
    RegisterModule,
    CommaModule,
    NotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
