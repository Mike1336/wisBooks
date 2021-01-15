import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { fromRoot } from './store';
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
    // NGRX
    EffectsModule.forRoot([fromRoot.RootEffects]),
    StoreModule.forRoot({
      rootState: fromRoot.rootReducer,
    }),
    StoreDevtoolsModule.instrument({}),
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
