import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss'],
})
export class FirstStepComponent implements OnInit {

  public firstFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

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


}
