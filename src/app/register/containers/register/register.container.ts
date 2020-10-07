import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'register-container',
  templateUrl: './register.container.html',
  styleUrls: ['./register.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterContainer implements OnInit {

  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;

  constructor() { }

  public ngOnInit(): void {
    this.firstFormGroup = new FormGroup({});
    this.secondFormGroup = new FormGroup({});
    this.thirdFormGroup = new FormGroup({});
  }
  public registre(): void {
    console.log({
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
      ...this.thirdFormGroup.value,
    });
  }

}
