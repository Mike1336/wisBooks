import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    children: [
      {
        path: '',
        loadChildren: () => import('./books/books.module').then((m) => m.BooksModule),
      },
    ],
  },
  {
    path: 'authors',
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
    ],
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
