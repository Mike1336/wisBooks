import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    data: { page: 'books' },
    loadChildren: () => import('./books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'authors',
    data: { page: 'authors' },
    loadChildren: () => import('./authors/authors.module').then((m) => m.AuthorsModule),
  },
  {
    path: 'book',
    data: { page: 'bookPage' },
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
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
