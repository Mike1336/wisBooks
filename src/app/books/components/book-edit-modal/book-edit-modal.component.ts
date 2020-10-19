import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { IBook } from '../../interfaces/book';

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

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: IImportingBookData,
    public dialogRef: MatDialogRef<IBook>,
    ) { }

  public get titleCtl(): AbstractControl {
    return this.bookEditForm.get('title');
  }

  public get genresCtl(): AbstractControl {
    return this.bookEditForm.get('genres');
  }

  public get authorCtl(): AbstractControl {
    return this.bookEditForm.get('author');
  }

  public get priceCtl(): AbstractControl {
    return this.bookEditForm.get('price');
  }

  public get descriptionCtl(): AbstractControl {
    return this.bookEditForm.get('description');
  }

  public get releaseDateCtl(): AbstractControl {
    return this.bookEditForm.get('releaseDate');
  }

  public get writingDateCtl(): AbstractControl {
    return this.bookEditForm.get('writingDate');
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    const bookAuthor = this.data.authors.find((author: IAuthor) => {
      return author.id === this.data.book.author_id;
    });
    const bookGenres = this.data.book.genres.map((genre) => genre.name);

    this.bookEditForm = new FormGroup({
      title: new FormControl(this.data.book.title, [
        Validators.required,
      ]),
      genres: new FormControl(bookGenres, [
        Validators.required,
      ]),
      author: new FormControl(bookAuthor.id, [
        Validators.required,
      ]),
      price: new FormControl(this.data.book.price, [
        Validators.required,
      ]),
      description: new FormControl(this.data.book.description, [
        Validators.required,
      ]),
      releaseDate: new FormControl(this.data.book.release_date, [
        Validators.required,
      ]),
      writingDate: new FormControl(this.data.book.writing_date, [
        Validators.required,
      ]),
    });
  }

  public onConfirm(): void {
    const newBook = {
      id: this.data.book.id,
      description: this.descriptionCtl.value,
      author_id: this.authorCtl.value,
      title: this.titleCtl.value,
      price: this.priceCtl.value,
      genres: this.convertGenresToObj(this.genresCtl.value),
      previews: [],
      image: null,
      writing_date: this.writingDateCtl.value,
      release_date: this.releaseDateCtl.value,
    };
    this.dialogRef.close(newBook);
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


}
