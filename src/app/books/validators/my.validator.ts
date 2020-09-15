import { FormGroup } from '@angular/forms';

export class MyValidator {

  public static priceValidation(priceGroup: FormGroup): {[key: string]: boolean} {
    const minPrice = priceGroup.get('minPrice');
    const maxPrice = priceGroup.get('maxPrice');
    if ((minPrice.value > 0 && maxPrice.value > 0) &&
            minPrice.value > maxPrice.value
        ) {
      minPrice.setErrors(
              { priceError : true },
        );
    } else {
      if (!minPrice.getError('min')) {
        minPrice.setErrors(
          null,
        );
      }

      return null;
    }
  }

  public static releaseValidation(releaseFroup: FormGroup): {[key: string]: boolean} {
    const releaseFrom = releaseFroup.get('releaseFrom');
    const releaseTo = releaseFroup.get('releaseTo');
    if ((releaseFrom.value > 0 && releaseTo.value > 0) &&
            releaseFrom.value > releaseTo.value
        ) {
      releaseFrom.setErrors({
        releaseError: true,
      });
    } else {
      if (!releaseFrom.getError('matDatepickerParse')) {
        releaseFrom.setErrors(
          null,
        );
      }

      return null;
    }
  }

}
