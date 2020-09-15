import { HttpParams } from '@angular/common/http';

import { IFilters } from './../interfaces/filters';
export class Ransack {

  public static genresIn = 'q[genres_name_in]';
  public static priceGt = 'q[price_gteq]';
  public static priceLt = 'q[price_lteq]';
  public static releaseGt = 'q[release_date_gteq]';
  public static releaseLt = 'q[release_date_lteq]';

  public static toRansack(filters: IFilters): HttpParams {
    let params = new HttpParams();

    if (filters.genres && filters.genres.length > 0) {
      filters.genres.forEach((genre) => {
        params = params.append(Ransack.genresIn, `${genre}`);
      });
    }
    if (filters.prices) {
      if (filters.prices.minPrice) {
        params = params.append(Ransack.priceGt, `${filters.prices.minPrice}`);
      }
      if (filters.prices.maxPrice) {
        params = params.append(Ransack.priceLt, `${filters.prices.maxPrice}`);
      }
    }
    if (filters.releases) {
      if (filters.releases.releaseFrom) {
        params = params.append(Ransack.releaseGt, `${filters.releases.releaseFrom}`);
      }
      if (filters.releases.releaseTo) {
        params = params.append(Ransack.releaseLt, `${filters.releases.releaseTo}`);
      }
    }

    return params;
  }

}
// filters = {
//   cock: 1,
//   genres: [1,2,3],
//   releaseDate: '10-10-2010',
// };

// toRansack(filters, {
//   genres: Ransack.In,
//   releaseDate: Ransack.Gt,
// })


// => {
//   cock: 1,
//   genres_in: [1,2,3],
//   releaseDate_gt: '10-10-2010',
// }
