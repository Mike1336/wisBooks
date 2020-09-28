import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

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
        Validators.minLength(17),
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
        Validators.minLength(19),
        Validators.required],
      ],
      cardExpiryDateCtl: ['', [
        Validators.minLength(5),
        Validators.required],
      ],
      cardCVVCtl: ['', [
        Validators.minLength(3),
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
    console.log({
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
      ...this.thirdFormGroup.value,
    });
  }

  public get firstName(): AbstractControl {
    return this.firstFormGroup.get('firstNameCtl');
  }

  public get lastName(): AbstractControl {
    return this.firstFormGroup.get('lastNameCtl');
  }

  public get email(): AbstractControl {
    return this.firstFormGroup.get('emailCtl');
  }

  public get phoneNumber(): AbstractControl {
    return this.firstFormGroup.get('phoneNumberCtl');
  }

  public get country(): AbstractControl {
    return this.secondFormGroup.get('countryCtl');
  }

  public get address(): AbstractControl {
    return this.secondFormGroup.get('addressCtl');
  }

  public get cardNumber(): AbstractControl {
    return this.thirdFormGroup.get('cardNumberCtl');
  }

  public get cardExpiryDate(): AbstractControl {
    return this.thirdFormGroup.get('cardExpiryDateCtl');
  }

  public get cardCVV(): AbstractControl {
    return this.thirdFormGroup.get('cardCVVCtl');
  }

  private _filterCountries(value: string): ICountry[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter((country) => {
      return country.name.toLowerCase().indexOf(filterValue) === 0;
    });
  }

}
