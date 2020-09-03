import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'books/page/:number',
    children: [
      {
        path: '',
        loadChildren: () => import('./books/books.module').then((m) => m.BooksModule),
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
