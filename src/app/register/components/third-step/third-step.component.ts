import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss'],
})
export class ThirdStepComponent implements OnInit {

  public thirdFormGroup: FormGroup;

  @Output()
  public clickRegister = new EventEmitter();

  constructor(private _formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.thirdFormGroup = this._formBuilder.group({
      cardNumberCtl: ['', [
        Validators.minLength(19),
        Validators.required],
      ],
      cardMonthCtl: ['', [
        Validators.minLength(2),
        Validators.max(12),
        Validators.required],
      ],
      cardYearCtl: ['', [
        Validators.minLength(2),
        Validators.required],
      ],
      cardCVVCtl: ['', [
        Validators.minLength(3),
        Validators.required],
      ],
    });
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


}
