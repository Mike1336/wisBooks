import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '1',
      },
      {
        path: ':page',
        loadChildren: () => import('./books/books.module').then((m) => m.BooksModule),
      },
    ],
  },
  {
    path: 'authors',
    pathMatch: 'full',
    children: [
      {
        path: '',
        loadChildren: () => import('./authors/authors.module').then((m) => m.AuthorsModule),
      },
    ],
  },
  {
    path: 'book',
    children: [
      {
        path: ':id',
        loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
      },
      {
        path: '**',
        redirectTo: '/404',
      },

    ],
  },
  {
    path: 'register',
    children: [
      {
        path: '',
        loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule),
      },
    ],
  },
  {
    path: 'login',
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/404',
  },
  {
    path: '404',
    loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
