import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable, ReplaySubject } from 'rxjs';
import { startWith, debounceTime, takeUntil, pluck } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';

import { GeodataService } from './../../services/geodata.service';

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

  public address$: Observable<object>;

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(
    private _geo: GeodataService,
    private _cdRef: ChangeDetectorRef,
    ) { }

  public ngOnInit(): void {
    this.addressCtl = new FormControl('', [
      Validators.required,
    ]);
    this.form.setControl('address', this.addressCtl);

    this.addressCtl.valueChanges
      .pipe(
      startWith(''),
      debounceTime(500),
      takeUntil(this._destroy$),
      )
      .subscribe(
      (fieldValue) => {
        this._cdRef.markForCheck();
        if (fieldValue) {
          this.address$ = this._geo.getAddressByQuery(fieldValue)
          .pipe(
            pluck('results'),
          );
        }
      },
  );
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public get countryAndCity(): AbstractControl {
    return this.form.get('countryAndCity');
  }

  public get streetAndIndex(): AbstractControl {
    return this.form.get('streetAndIndex');
  }

}
