import { FormGroup } from '@angular/forms';

export class MyValidator {

  public static priceValidation(
    priceGroup: FormGroup,
  ): { [key: string]: boolean } {
    const minPrice = priceGroup.get('price_gt');
    const maxPrice = priceGroup.get('price_lt');
    if (
      minPrice.value > 0 &&
      maxPrice.value > 0 &&
      minPrice.value > maxPrice.value
    ) {
      minPrice.setErrors({ priceError: true });
    } else {
      if (!minPrice.getError('min')) {
        minPrice.setErrors(null);
      }

      return null;
    }
  }

  public static releaseValidation(
    releaseFroup: FormGroup,
  ): { [key: string]: boolean } {
    const releaseFrom = releaseFroup.get('release_date_gt');
    const releaseTo = releaseFroup.get('release_date_lt');
    if (
      releaseFrom.value > 0 &&
      releaseTo.value > 0 &&
      releaseFrom.value > releaseTo.value
    ) {
      releaseFrom.setErrors({
        releaseError: true,
      });
    } else {
      if (!releaseFrom.getError('matDatepickerParse')) {
        releaseFrom.setErrors(null);
      }

      return null;
    }
  }
  public static emptyFormValidation(
    filtersForm: FormGroup,
  ): { [key: string]: boolean } {
    for (const controlsProperty of Object.keys(filtersForm.controls)) {
      for (const propertyOfControlsProperty of
            Object.keys(filtersForm.controls[controlsProperty].value)) {
        if (filtersForm.controls[controlsProperty].value[propertyOfControlsProperty]) {
          return null;
        }
      }
    }
    return { emptyForm: true };
  }

}
