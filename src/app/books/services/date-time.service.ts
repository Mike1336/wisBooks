import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  public getFormat(): string {
    return 'YYYY-MM-DD'; // add you own logic here
  }

  public getLocale(): string {
    return 'en-us'; // add you own logic here
  }
}
