import { FormGroup } from '@angular/forms';

export class FiltersValidator {

  public static priceValidation(form: FormGroup): { [key: string]: boolean } {
    const minPrice = form.get('minPrice');
    const maxPrice = form.get('maxPrice');

    if (minPrice.value && maxPrice.value) {
      +(minPrice.value) > +(maxPrice.value)
       ? minPrice.setErrors({ priceError: true })
       : minPrice.setErrors(null);
    }

    return null;
  }

  public static releaseValidation(form: FormGroup): { [key: string]: boolean } {
    const releaseFrom = form.get('releaseFrom');
    const releaseTo = form.get('releaseTo');

    if (releaseFrom.value && releaseTo.value) {
      if (releaseFrom.value > releaseTo.value) {
        releaseFrom.setErrors({ releaseError: true });
      } else {
        if (!releaseFrom.getError('matDatepickerParse')) {
          releaseFrom.setErrors(null);
        }
      }
    }

    return null;
  }

  public static emptyFormValidation(form: FormGroup): { [key: string]: boolean } {
    Object.keys(form.controls).forEach((controlName) => {
      if (!form.controls[controlName].value) {
        return { emptyForm: true };
      }
    });

    return null;
  }

}
