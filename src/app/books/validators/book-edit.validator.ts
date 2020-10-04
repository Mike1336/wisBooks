import { AbstractControl, ValidatorFn } from '@angular/forms';

import { IBook } from './../interfaces/book';

export class BookEditValidator {

  public static formChangesChecking(book: IBook, bookFromForm: IBook): ValidatorFn {
    return (): {[key: string]: any} | null => {
      if (JSON.stringify(book) === JSON.stringify(bookFromForm)) {
        return null;
      } else {
        return { notEqual: true };
      }
    };
  }

}
