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
    let ransackObj;

    for (const key of Object.keys(methods)) {
      if (typeof(methods[key]) === 'object') {
        for (const methodName of Object.keys(methods[key])) {
          for (const property of Object.keys(filters[key])) {
            if (filters[key][property]._i) {
              ransackObj[methodName] = filters[key][property]._i;
              // params = Ransack.makeQuery(methodName,
              //                            filters[key][property]._i,
              //                            methods[key][methodName]);
            } else {
              ransackObj[methodName] = filters[key][property];
              // params = Ransack.makeQuery(methodName,
              //                            filters[key][property],
              //                            methods[key][methodName]);
            }
          }
        }
      } else {
        if (typeof(filters[key] === 'object')) {
          for (const filterValue of filters[key]) {
            ransackObj[key] = filters[key][filterValue];

          //   params = Ransack.makeQuery(key, filterValue, methods[key]);
          // }
          }
        }
      }

      console.log(ransackObj);

    // return params;
    }
  }
  public static makeQuery(property: string, value: any, methodNumber: number): HttpParams {
    if (property === 'minPrice' || property === 'maxPrice') {
      property = 'price';
    } else if (property === 'releaseFrom' || property === 'releaseTo') {
      property = 'release_date';
    }
    console.log(property, value, methodNumber);

    let parameters = new HttpParams();

    switch (methodNumber) {
      case RansackMethod.In:
        parameters = parameters.append(`q[${property}_name_in]`, `${value}`);
        console.log(parameters);
        break;
      case RansackMethod.Gt:
        parameters = parameters.append(`q[${property}_gteq]`, `${value}`);
        console.log(parameters);
        break;
      case RansackMethod.Lt:
        parameters = parameters.append(`q[${property}_lteq]`, `${value}`);
        console.log(parameters);
        break;

      default:
        break;
    }
    console.log(parameters);

    return parameters;
  }

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
