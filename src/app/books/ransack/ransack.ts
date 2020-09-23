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

  public static toRansack(filters: IFilters, schema: Object): HttpParams {
    let params = new HttpParams();

    Object.keys(schema).forEach((schemaPropertyName) => {
      if (Array.isArray(schema[schemaPropertyName])) {
        schema[schemaPropertyName].forEach((propertyOfElement) => {
          if (typeof propertyOfElement === 'object' && propertyOfElement !== null) {
            if (filters[schemaPropertyName][propertyOfElement['from']]) {
              const query = Ransack.checkObject(
                              propertyOfElement,
                              Object.keys(propertyOfElement),
                              filters[schemaPropertyName][propertyOfElement['from']],
                            );

              const queryString = `q[${query['name']
                                    }${query['postfix'] ?? ''
                                    }${query['matcher']}]`;

              params = params.append(queryString, `${query['value']}`);
            }
          }
        });
      } else if (typeof schema[schemaPropertyName] === 'object'
                  && schema[schemaPropertyName] !== null) {
        if (filters[schemaPropertyName]) {
          const query = Ransack.checkObject(
                          schema[schemaPropertyName],
                          Object.keys(schema[schemaPropertyName]),
                        );

          let queryString = '';

          if (Array.isArray(filters[schemaPropertyName])) {
            filters[schemaPropertyName].forEach((elOfPropertiesArr) => {
              queryString = `q[${query['name'] ?? schemaPropertyName
                              }${query['postfix'] ?? ''
                              }${query['matcher']}]`;
              params = params.append(queryString, `${elOfPropertiesArr}`);
            });
          } else {
            queryString = `q[${query['name'] ?? schemaPropertyName
                              }${query['postfix'] ?? ''
                              }${query['matcher']}]`;
            params = params.append(queryString, `${filters[schemaPropertyName]}`);
          }
        }
      } else {
        const matcher = Ransack.matcherToString(schema[schemaPropertyName]);
        params = params.append(`q[${schemaPropertyName}${matcher}]`,
                               `${filters[schemaPropertyName]}`,
                 );
      }
    });

    return params;
  }

  public static matcherToString(matcher: RansackMethod): string {
    switch (matcher) {
      case RansackMethod.In: {
        return '_in';
      }
      case RansackMethod.Gt: {
        return '_gt';
      }
      case RansackMethod.Lt: {
        return '_lt';
      }

      case RansackMethod.Eq: {
        return '_eq';
      }
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
      queryObject['matcher'] = Ransack.matcherToString(instrObject['matcher']);
    }

    if (instrObject.hasOwnProperty('from')) {
      queryObject['value'] = propValueFromFilters;
    }

    return queryObject;
  }

}
