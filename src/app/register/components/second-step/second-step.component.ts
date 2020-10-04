import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  public countries$: Observable<object>;

  public form: FormGroup;

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private _formBuilder: FormBuilder, private countryService: CountryService) { }

  public ngOnInit(): void {
    this.form = this._formBuilder.group({
      countryCtl: ['', Validators.required],
      addressCtl: ['', Validators.required],
    });

    this.form.get('countryCtl').valueChanges
      .pipe(
      startWith(''),
      debounceTime(500),
      takeUntil(this._destroy$),
    )
      .subscribe(
      (fieldValue) => {
        fieldValue
          ? this.countries$ = this.countryService.getCountryByName(fieldValue)
          : this.countries$ = this.countryService.getAllCountries();
      },
  );
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public get country(): AbstractControl {
    return this.form.get('countryCtl');
  }

  public get address(): AbstractControl {
    return this.form.get('addressCtl');
  }

}
