import { FormGroup } from '@angular/forms';

export class RegisterValidator {

  public static passwordsMatch(form: FormGroup): { [key: string]: boolean } {
    const first = form.get('firstPas');
    const second = form.get('secondPas');

    if (first.value === second.value) {
      second.setErrors(null);
    } else {
      second.setErrors({ pasError: true });
    }

    return null;
  }

  public static cardDateValidation(form: FormGroup): { [key: string]: boolean } {
    const monthField = form.get('cardMonth');
    const yearField = form.get('cardYear');

    const month = new Date().getMonth();
    const year = +(new Date().getFullYear().toString().slice(2, 4));

    if (monthField.value && yearField.value) {
      if (yearField.value < year) {
        yearField.setErrors({ invalid: true });
      } else {
        yearField.setErrors(null);
      }
      if (monthField.value < month && yearField.value === year) {
        monthField.setErrors({ invalid: true });
      } else {
        monthField.setErrors(null);
      }
    }

    return null;
  }

}
