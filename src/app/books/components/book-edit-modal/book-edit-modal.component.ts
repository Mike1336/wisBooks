import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IBook } from '../../interfaces/book';

import { BookEditValidator } from './../../validators/book-edit.validator';
import { IGenre } from './../../interfaces/genre';
import { IAuthor } from './../../interfaces/author';

export interface IImportingBookData {
  book: IBook;
  authors: IAuthor[];
  genres: IGenre[];
}

@Component({
  selector: 'book-edit-modal-component',
  templateUrl: './book-edit-modal.component.html',
  styleUrls: ['./book-edit-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BookEditModalComponent implements OnInit {

  public bookEditForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IImportingBookData) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    const bookAuthor = this.data.authors.find((author: IAuthor) => {
      return author.id === this.data.book.author_id;
    });
    const bookGenres = this.data.book.genres.map((genre) => genre.name);

    this.bookEditForm = new FormGroup({
      titleCtl: new FormControl(this.data.book.title, [
        Validators.
        Validators.required,
      ]),
      genresCtl: new FormControl(bookGenres, [
        Validators.required,
      ]),
      authorCtl: new FormControl(bookAuthor.id, [
        Validators.required,
      ]),
      priceCtl: new FormControl(this.data.book.price, [
        Validators.required,
      ]),
      descriptionCtl: new FormControl(this.data.book.description, [
        Validators.required,
      ]),
      releaseDateCtl: new FormControl(this.data.book.release_date, [
        Validators.required,
      ]),
      writingDateCtl: new FormControl(this.data.book.writing_date, [
        Validators.required,
      ]),
    }, [
      // BookEditValidator.formChangesChecking(
      //   this.data.book,
      //   {
      //     id: this.data.book.id,
      //     description: this.description.value,
      //     author_id: this.author.value,
      //     title: this.title.value,
      //     price: this.price.value,
      //     genres: this.convertGenresToObj(this.genres.value),
      //     previews: [],
      //     image: null,
      //     writing_date: this.writingDate.value,
      //     release_date: this.releaseDate.value,
      //   },
      //   ),
    ]);
  }

  public onConfirm(): IBook {
    return {
      id: this.data.book.id,
      description: this.description.value,
      author_id: this.author.value,
      title: this.title.value,
      price: this.price.value,
      genres: this.convertGenresToObj(this.genres.value),
      previews: [],
      image: null,
      writing_date: this.writingDate.value,
      release_date: this.releaseDate.value,
    };
  }

  public convertGenresToObj(genresArray: string[]): IGenre[] {
    const selectedGenres = [];
    genresArray.forEach((genreFromBook) => {
      selectedGenres.push(
      this.data.genres.find((genreFromAllList) => {
        return genreFromBook === genreFromAllList.name;
      }),
      );
    });

    return selectedGenres;
  }

  public get title(): AbstractControl {
    return this.bookEditForm.get('titleCtl');
  }

  public get genres(): AbstractControl {
    return this.bookEditForm.get('genresCtl');
  }

  public get author(): AbstractControl {
    return this.bookEditForm.get('authorCtl');
  }

  public get price(): AbstractControl {
    return this.bookEditForm.get('priceCtl');
  }

  public get description(): AbstractControl {
    return this.bookEditForm.get('descriptionCtl');
  }

  public get releaseDate(): AbstractControl {
    return this.bookEditForm.get('releaseDateCtl');
  }

  public get writingDate(): AbstractControl {
    return this.bookEditForm.get('writingDateCtl');
  }

}
