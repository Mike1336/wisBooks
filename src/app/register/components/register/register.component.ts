import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent implements OnInit {

  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;

  constructor() {
  }

  public ngOnInit(): void {
  }


  public registre(): void {
    // console.log({
    //   ...this.firstFormGroup.value,
    //   ...this.secondFormGroup.value,
    //   ...this.thirdFormGroup.value,
    // });
  }

}
