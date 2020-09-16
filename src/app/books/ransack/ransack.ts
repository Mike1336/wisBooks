import { HttpParams } from '@angular/common/http';

import { IFilters } from './../interfaces/filters';

export enum RansackMethod {
  In,
  Gt,
  Lt,
  Eq,
}

export class Ransack {

  public ransackMethod = RansackMethod;


  public static toRansack(filters: IFilters, methods: Object) {
    let rsObject: Object;

    for (const key of Object.keys(methods)) { // loop for methods:{} properties`
      for (const property of Object.keys(filters[key])) {
        if (filters[key][property] !== '') { // if filter property not empty
          // rsObject[key] = filters[key]
          console.log(methods[key]+'>>>'+property+'>>>'+filters[key]+'>>>'+filters[key][property])
          if (typeof(methods[key] === 'object')) {
            for (const methodsProperty of Object.keys(methods[key])) {
              console.log(property)
              console.log(methods[key][methodsProperty]+'>>>'+property+'>>>'+filters[key]+'>>>'+filters[key][property])
            }
          }
        }
      }
    }
  }
  // public static makeQuery(property: string, value: any, methodNumber: number): HttpParams {
  //   if (property === 'minPrice' || property === 'maxPrice') {
  //     property = 'price';
  //   } else if (property === 'releaseFrom' || property === 'releaseTo') {
  //     property = 'release_date';
  //   }
  //   console.log(property, value, methodNumber);

  //   let parameters = new HttpParams();

  //   switch (methodNumber) {
  //     case RansackMethod.In:
  //       parameters = parameters.append(`q[${property}_name_in]`, `${value}`);
  //       console.log(parameters);
  //       break;
  //     case RansackMethod.Gt:
  //       parameters = parameters.append(`q[${property}_gteq]`, `${value}`);
  //       console.log(parameters);
  //       break;
  //     case RansackMethod.Lt:
  //       parameters = parameters.append(`q[${property}_lteq]`, `${value}`);
  //       console.log(parameters);
  //       break;

  //     default:
  //       break;
  //   }
  //   console.log(parameters);

  //   return parameters;
  // }

}


//   public static toRansack(filters: IFilters): HttpParams {


//   if (filters.prices) {
//     if (filters.prices.minPrice) {
//       params = params.append(Ransack.priceGt, `${filters.prices.minPrice}`);
//     }
//     if (filters.prices.maxPrice) {
//       params = params.append(Ransack.priceLt, `${filters.prices.maxPrice}`);
//     }
//   }
//   if (filters.releases) {
//     if (filters.releases.releaseFrom) {
//       params = params.append(Ransack.releaseGt, `${filters.releases.releaseFrom}`);
//     }
//     if (filters.releases.releaseTo) {
//       params = params.append(Ransack.releaseLt, `${filters.releases.releaseTo}`);
//     }
//   }

//   return params;
// }

// }
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
