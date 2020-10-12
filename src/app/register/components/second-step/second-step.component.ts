import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable, ReplaySubject, BehaviorSubject, of } from 'rxjs';
import { debounceTime, takeUntil, pluck, mergeMap, map } from 'rxjs/operators';

import { GeodataService } from './../../services/geodata.service';
import { Address } from './../../models/address.model';

@Component({
  selector: 'second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondStepComponent implements OnInit, OnDestroy {

  @Input()
  public form: FormGroup;

  public addressCtl: AbstractControl;

  private readonly _address$ = new BehaviorSubject<Address[]>(null);
  private _destroy$ = new ReplaySubject<number>(1);

  constructor(
    private _geo: GeodataService,
    ) { }

  public get address$(): Observable<any> {
    return this._address$.asObservable();
  }

  public ngOnInit(): void {
    this.initForm();
    this.addressCtlListener();
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public initForm(): void {
    this.addressCtl = new FormControl('', [
      Validators.required,
    ]);
    this.form.setControl('address', this.addressCtl);
  }

  public addressCtlListener(): void {
    this.addressCtl.valueChanges
      .pipe(
        debounceTime(500),
        mergeMap(
          (fieldValue: string) => {
            if (fieldValue) {
              return this.getAddressByQuery(fieldValue);
            }

            return of([]);
          }),
        takeUntil(this._destroy$),
      )
      .subscribe(
        (addresses: Address[]) => {
          console.log(addresses)
          this._address$.next(addresses);
        });
  }

  public getAddressByQuery(query: string): Observable<Address[]> {
    return this._geo.getAddressByQuery(query).pipe(
      pluck('results'),
      map((data: object[]) => {
        return data.map((item: object) => {
          return Address.fromJSON(item);
        });
      }),
    );
  }

  public displayAddress(address: Address): string {
    console.log(address.toJSON())
    return address.formattedAddress;
  }

}
