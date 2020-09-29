import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss'],
})
export class FirstStepComponent implements OnInit {

  @Input('form')
  public firstFormGroup: FormGroup;

  constructor() { }

  public ngOnInit(): void {
    this.firstFormGroup = new FormGroup({
      firstNameCtl: new FormControl('', [
        Validators.required,
      ]),
      lastNameCtl: new FormControl('', [
        Validators.required,
      ]),
      emailCtl: new FormControl('', [
        Validators.email,
        Validators.required,
      ]),
      phoneNumberCtl: new FormControl('', [
        Validators.minLength(17),
        Validators.required,
      ]),
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
