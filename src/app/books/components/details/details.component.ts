import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BooksService } from './../../services/books.service';
import { IBook } from './../../interfaces/book';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public bookId: number;
  public book: IBook;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    ) { }

  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bookId = params.id;
      console.log(this.bookId);
    });
    this.booksService.getBookById(this.bookId)
      .subscribe((data) => {
        this.book = data;
        console.log(this.book);
      });
  }
}
