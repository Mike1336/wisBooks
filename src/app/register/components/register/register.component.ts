import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface ICountry {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent implements OnInit {

  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;

  public countries: ICountry[] = [
    {
      name: 'United States',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
      population: '331M',
    },
    {
      name: 'Great Britain',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg',
      population: '67.88M',
    },
  ];

  public filteredCountries$: Observable<ICountry[]>;

  constructor(private _formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstNameCtl: ['', Validators.required],
      lastNameCtl: ['', Validators.required],
      emailCtl: ['', [
        Validators.email,
        Validators.required,
      ],
      ],
      phoneNumberCtl: ['', [
        Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/),
        Validators.required,
      ],
      ],
    });
    this.secondFormGroup = this._formBuilder.group({
      countryCtl: ['', Validators.required],
      addressCtl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      cardNumberCtl: ['', [
        Validators.pattern(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/),
        Validators.required],
      ],
      cardExpiryDateCtl: ['', [
        Validators.pattern(/^\d{2}\/\d{2}$/),
        Validators.required],
      ],
      cardCVVCtl: ['', [
        Validators.pattern(/^\d{3}$/),
        Validators.required],
      ],
    });

    this.filteredCountries$ = this.secondFormGroup.get('countryCtl').valueChanges
    .pipe(
      startWith(''),
      map((country) => {
        if (country) {
          return this._filterCountries(country);
        } else {
          return this.countries.slice();
        }
      }),
    );
  }

  public registre(): void {
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    console.log(this.thirdFormGroup.value);
  }

  private _filterCountries(value: string): ICountry[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter((country) => {
      return country.name.toLowerCase().indexOf(filterValue) === 0;
    });
  }

}
