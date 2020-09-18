import { HttpParams } from '@angular/common/http';

import { IFilters } from './../interfaces/filters';
import { IRsInstructions } from './../interfaces/ransack';

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
      if (
        Array.isArray(methods[methodPropertyName])
        ) {
        methods[methodPropertyName].forEach((propertyOfElement) => {
          if (typeof propertyOfElement === 'object' &&
                     propertyOfElement !== null
            ) {
            if (filters[methodPropertyName][propertyOfElement['from']]
) {
              const query =
              Ransack.checkObject(propertyOfElement,
                                  Object.keys(propertyOfElement),
                                  filters[methodPropertyName][propertyOfElement['from']]);
              const queryString = `q[${query['name']
                                    }${query['postfix'] ?? ''
                                    }${query['matcher']}]`;

              params = params.append(queryString, `${query['value']}`);
            }
          }
        });
      } else if (typeof methods[methodPropertyName] === 'object' &&
                        methods[methodPropertyName] !== null
        ) {
        if (filters[methodPropertyName]) {
          const query =
          Ransack.checkObject(methods[methodPropertyName],
                              Object.keys(methods[methodPropertyName]));
          let queryString = '';

          if (Array.isArray(filters[methodPropertyName])) {
            filters[methodPropertyName].forEach((elOfPropertiesArr) => {
              queryString = `q[${query['name'] ?? methodPropertyName
                              }${query['postfix'] ?? ''
                              }${query['matcher']}]`;

              params = params.append(queryString, `${elOfPropertiesArr}`);
            });
          } else {
            queryString = `q[${query['name'] ?? methodPropertyName
                            }${query['postfix'] ?? ''
                            }${query['matcher']}]`;

            params = params.append(queryString, `${filters[methodPropertyName]}`);
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
  public static checkObject(instrObject: IRsInstructions,
                            propArray: string[],
                            propValueFromFilters?: any,
    ): object {
    const queryObject = {};
    const simpleProps = propArray.filter((el) => el !== 'matcher' || 'from');

    simpleProps.forEach((property) => {
      if (instrObject.hasOwnProperty(property)) {
        property === 'postfix' ?
        queryObject[property] = `_${instrObject[property]}` :
        queryObject[property] = instrObject[property];
      }
    });

    if (instrObject.hasOwnProperty('matcher')) {
      queryObject['matcher'] =
      Ransack.matcherToString(instrObject['matcher']);
    }

    if (instrObject.hasOwnProperty('from')) {
      queryObject['value'] = propValueFromFilters;
    }

    return queryObject;
  }

}
