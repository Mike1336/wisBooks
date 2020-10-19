import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { IBook } from '../../interfaces/book';
import { IGenre } from '../../interfaces/genre';

import { IAuthor } from './../../../authors/interfaces/author';

export interface IGenresAndAuthors {
  authors: IAuthor[];
  genres: IGenre[];
}

@Component({
  selector: 'book-create-modal',
  templateUrl: './book-create-modal.component.html',
  styleUrls: ['./book-create-modal.component.scss'],
})
export class BookCreateModalComponent implements OnInit {

  public bookCreateForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: IGenresAndAuthors,
    public dialogRef: MatDialogRef<IBook>,
    ) { }

  public get titleCtl(): AbstractControl {
    return this.bookCreateForm.get('title');
  }

  public get genresCtl(): AbstractControl {
    return this.bookCreateForm.get('genres');
  }

  public get authorCtl(): AbstractControl {
    return this.bookCreateForm.get('author');
  }

  public get priceCtl(): AbstractControl {
    return this.bookCreateForm.get('price');
  }

  public get descriptionCtl(): AbstractControl {
    return this.bookCreateForm.get('description');
  }

  public get releaseDateCtl(): AbstractControl {
    return this.bookCreateForm.get('releaseDate');
  }

  public get writingDateCtl(): AbstractControl {
    return this.bookCreateForm.get('writingDate');
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.bookCreateForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
      ]),
      genres: new FormControl([], [
        Validators.required,
      ]),
      author: new FormControl('', [
        Validators.required,
      ]),
      price: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
      releaseDate: new FormControl('', [
        Validators.required,
      ]),
      writingDate: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  public onConfirm(): void {
    const newBook = {
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
    const selectedGenres: IGenre[] = [];
    genresArray.forEach((genreFromBook) => {
      const selectedGenre = this.data.genres
      .find((genreFromAllList) => {
        return genreFromBook === genreFromAllList.name;
      });

      selectedGenres.push(selectedGenre);
    });

    return selectedGenres;
  }

}
