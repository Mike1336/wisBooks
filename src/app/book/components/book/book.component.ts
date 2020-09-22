import { Component, Input, OnInit } from '@angular/core';

import { IBook } from './../../../books/interfaces/book';

@Component({
  selector: 'book-component',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {

  @Input()
  public book: IBook;

  constructor() { }

  public ngOnInit(): void {
  }

}
