import { HttpParams } from '@angular/common/http';

import { IFilters } from './../interfaces/filters';

export enum RansackMethod {
  In,
  Gt,
  Lt,
}

export class Ransack {

  public ransackMethod = RansackMethod;


  public static toRansack(filters: IFilters, methods: Object): HttpParams {
    let params = new HttpParams();

    for (const methodPropertyName of Object.keys(methods)) { // loop for methods:{} properties`
      if (typeof(methods[methodPropertyName]) === 'object') {// if methods: {} property have own properties
        for (const propertyOfMethodProperty of Object.keys(methods[methodPropertyName])) { // loop for methods:{} properties which have own properties
          if (typeof(filters[methodPropertyName]) === 'object') { // if filters: {} property have own properties
            if (filters[methodPropertyName][propertyOfMethodProperty]) { // if filter's property not undef
              const queryParams = Ransack.makeQuery(
                propertyOfMethodProperty,
                filters[methodPropertyName][propertyOfMethodProperty],
                methods[methodPropertyName][propertyOfMethodProperty]);

              params = params.append(queryParams['property'], queryParams['value']);
            }
          }
        }
      } else {
        const queryParams = Ransack.makeQuery(methodPropertyName,
                                              filters[methodPropertyName],
                                              methods[methodPropertyName]);
        if (queryParams['value'].length && queryParams['value'].length > 1) {
          queryParams['value'].forEach((parValue) => {
            params = params.append(queryParams['property'], parValue);
          });
        } else {
          params = params.append(queryParams['property'], queryParams['value']);
        }
      }
    }

    return params;
  }

  public static makeQuery(property: string, value: any, methodNumber: number): object {
    switch (methodNumber) {
      case RansackMethod.In:
        if (value.length && value.length > 1) {
          const values = [];
          value.forEach((val) => {
            values.push(val);
          });

          return {
            property: `q[${property}_in]`,
            value: values,
          };
        }

        return {
          property: `q[${property}_in]`,
          value,
        };


      case RansackMethod.Gt :

        return {
          property: `q[${property}]`,
          value,
        };

      case RansackMethod.Lt :

        return {
          property: `q[${property}]`,
          value,
        };
    }
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
