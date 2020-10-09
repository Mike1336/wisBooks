import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable, ReplaySubject, BehaviorSubject, of } from 'rxjs';
import { debounceTime, takeUntil, pluck, mergeMap } from 'rxjs/operators';

import { GeodataService } from './../../services/geodata.service';
import { AddressModel } from './../../models/address.model';

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

  private _address$: BehaviorSubject<any> = new BehaviorSubject(null);
  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(
    private _geo: GeodataService,
    ) { }

  public get address$(): Observable<any> {
    return this._address$.asObservable();
  }

  public ngOnInit(): void {
    this.initForm();
    this.detectAddress();
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

  public detectAddress(): void {
    this.addressCtl.valueChanges
      .pipe(
        debounceTime(500),
        mergeMap(
          (fieldValue: string) => {
            if (fieldValue) {
              return this._geo.getAddressByQuery(fieldValue).pipe(
                pluck('results'),
              );
            }

            return of([]);
          }),
        takeUntil(this._destroy$),
      )
      .subscribe(
        (data: any) => {
          AddressModel.convertAddress(data);
          this._address$.next(data);
        });
  }

}
