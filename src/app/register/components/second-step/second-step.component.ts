import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable, ReplaySubject } from 'rxjs';
import { startWith, debounceTime, takeUntil } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondStepComponent implements OnInit, OnDestroy {

  @Input()
  public form: FormGroup;

  public countryCityCrl: AbstractControl;
  public streetIndexCtl: AbstractControl;

  public countries$: Observable<object>;

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private _countryService: CountryService) { }

  public ngOnInit(): void {
    this.countryCityCrl = new FormControl('', [
      Validators.required,
    ]);
    this.streetIndexCtl = new FormControl('', [
      Validators.required,
    ]);

    this.form.setControl('countryAndCity', this.countryCityCrl);
    this.form.setControl('streetAndIndex', this.streetIndexCtl);

    this.countryAndCity.valueChanges
      .pipe(
      startWith(''),
      debounceTime(500),
      takeUntil(this._destroy$),
      )
      .subscribe(
      (fieldValue) => {
        fieldValue
          ? this.countries$ = this._countryService.getCountryByName(fieldValue)
          : this.countries$ = this._countryService.getAllCountries();
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
