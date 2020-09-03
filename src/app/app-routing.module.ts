import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    children: [
      {
        path: 'page',
        loadChildren: () => import('./books/books.module').then((m) => m.BooksModule),
      },
      {
        path: '**',
        redirectTo: 'page/1',
      },
    ],
  },
  {
    path: 'authors',
    children: [
      {
        path: 'page',
        loadChildren: () => import('./authors/authors.module').then((m) => m.AuthorsModule),
      },
      {
        path: '**',
        redirectTo: 'page/1',
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
    redirectTo: 'books/page/1',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
