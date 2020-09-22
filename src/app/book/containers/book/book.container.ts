import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IBook } from './../../../books/interfaces/book';
import { BooksService } from './../../../books/services/books.service';

@Component({
  selector: 'book-container',
  templateUrl: './book.container.html',
  styleUrls: ['./book.container.scss'],
})
export class BookContainer implements OnInit {

  public book$: Observable<IBook>;

  @Input()
  public queryId: number;
  @Output()
  public nfContent: EventEmitter<Error> = new EventEmitter();

  constructor(private booksService: BooksService) { }

  public ngOnInit(): void {
    this.book$ = this.booksService.getBookById(this.queryId).pipe(
      catchError((err) => {
        this.nfContent.emit(err);
        throw new Error(`error in source. Details: ${err}`);
      }),
    );
  }

}
