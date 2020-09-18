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


  public static toRansack(filters: IFilters, methods: Object): HttpParams {
    let params = new HttpParams();

    for (const methodPropertyName of Object.keys(methods)) {
      if (Array.isArray(methods[methodPropertyName])) {
        methods[methodPropertyName].forEach((propertyOfElement) => {
          if (typeof propertyOfElement === 'object' &&
                     propertyOfElement !== null) {
            if (filters[methodPropertyName][propertyOfElement['from']]) {
              const query = {};
              for (const propertyOfElProperty of Object.keys(propertyOfElement)) {
                switch (propertyOfElProperty) {
                  case 'matcher':
                    query[propertyOfElProperty] =
                    Ransack.matcherToString(propertyOfElement[propertyOfElProperty]);
                    break;

                  case 'name':
                    query[propertyOfElProperty] =
                    propertyOfElement[propertyOfElProperty];
                    break;

                  case 'postfix':
                    query[propertyOfElProperty] =
                  `_${propertyOfElement[propertyOfElProperty]}`;
                    break;

                  case 'from':
                    query['value'] =
                    filters[methodPropertyName][propertyOfElement['from']];
                    break;

                  default:
                    break;
                }
              }
              params = params.append(`q[${query['name']}${query['postfix'] ?? ''}${query['matcher']}]`, `${query['value']}`);
            }
          }
        });
      } else if (typeof methods[methodPropertyName] === 'object' &&
                      methods[methodPropertyName] !== null) {
        if (filters[methodPropertyName]) {
          const query = {};
          for (const objProperty of Object.keys(methods[methodPropertyName])) {
            switch (objProperty) {
              case 'matcher':
                query[objProperty] =
              Ransack.matcherToString(methods[methodPropertyName][objProperty]);
                break;

              case 'name':
                query[objProperty] =
              methods[methodPropertyName][objProperty];
                break;

              case 'postfix':
                query[objProperty] =
              methods[methodPropertyName][objProperty];
                break;

              default:
                break;
            }
          }
          if (Array.isArray(filters[methodPropertyName])) {
            filters[methodPropertyName].forEach((elOfPropertiesArr) => {
              params = params.append(`q[${query['name'] ?? methodPropertyName}_${query['postfix'] ?? ''}${query['matcher']}]`, `${elOfPropertiesArr}`);
            });
          } else {
            params = params.append(`q[${query['name'] ?? methodPropertyName}_${query['postfix'] ?? ''}${query['matcher']}]`, `${filters[methodPropertyName]}`);
          }
        }
      } else {
        const matcher = Ransack.matcherToString(methods[methodPropertyName]);
        params = params.append(`q[${methodPropertyName}${matcher}]`,
                               `${filters[methodPropertyName]}`);
      }
    }

    return params;
  }

  public static matcherToString(matcher: RansackMethod): string {
    switch (matcher) {
      case RansackMethod.In:
        return '_in';

      case RansackMethod.Gt:
        return '_gt';

      case RansackMethod.Lt:
        return '_lt';

      case RansackMethod.Eq:
        return '_eq';

      default:
        break;
    }
  }

}
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
