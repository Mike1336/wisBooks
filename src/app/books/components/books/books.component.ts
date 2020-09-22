import { Component, Input, OnInit } from '@angular/core';

import { IBook } from '../../interfaces/book';

@Component({
  selector: 'books-component',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {

  @Input()
  public books: IBook[];

  constructor() {

  }

  public ngOnInit(): void {
  }

}
