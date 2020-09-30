import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { IBook } from '../../interfaces/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookItemComponent implements OnInit {

  @Input() public book: IBook;

  constructor() { }

  public ngOnInit(): void {
  }

}
