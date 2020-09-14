import { FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';

export class MyValidator {

  public static priceValidation(priceGroup: FormGroup): {[key: string]: boolean} {
    const minPrice = priceGroup.get('minPrice');
    const maxPrice = priceGroup.get('maxPrice');
    if ((minPrice.value > 0 && maxPrice.value > 0) &&
            minPrice.value > maxPrice.value
        ) {
      minPrice.setErrors(
              { minPriceError : true },
        );
    } else {
      minPrice.setErrors(
            null,
      );

      return null;
    }
  }

  public static releaseValidation(releaseFroup: FormGroup): {[key: string]: boolean} {
    const releaseFrom = releaseFroup.get('releaseFrom');
    const releaseTo = releaseFroup.get('releaseTo');
    if ((releaseFrom.value && releaseTo.value) &&
            releaseFrom.value > releaseTo.value
        ) {
      releaseFrom.setErrors({
        fromToReleaseError: true,
      });

      return { fromToReleaseError: true, };
    } else {
      releaseFrom.setErrors(
          null,
        );

      return null;
    }
  }

}
