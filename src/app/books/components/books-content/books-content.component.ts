import { Component, OnInit, Input } from '@angular/core';

import { IBook } from '../../interfaces/book';

@Component({
  selector: 'app-books-content',
  templateUrl: './books-content.component.html',
  styleUrls: ['./books-content.component.scss'],
})
export class BooksContentComponent implements OnInit {

  @Input() public books: IBook[];

  constructor() { }

  public ngOnInit(): void {
  }

}
