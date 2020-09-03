import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommaPipe } from './books/pipes/comma.pipe';
import { BooksModule } from './books/books.module';
import { BookModule } from './book/book.module';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
    CommaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BooksModule,
    BookModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
