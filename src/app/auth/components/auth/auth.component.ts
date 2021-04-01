import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit, Output, ChangeDetectionStrategy, EventEmitter, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { IUser } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-component',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {

  public hidePas = true;

  @Input()
  public loadingStatus$: Observable<boolean>;

  @Input()
  public formError: string;

  public loginForm: FormGroup;

  @Output()
  public submitForm: EventEmitter<IUser> = new EventEmitter();

  constructor(private _auth: AuthService) { }

  public signin() {
    this._auth.signInWithGoogle().then((res) => { console.log(res) });
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.loginForm = new FormGroup({
      emailCtl: new FormControl('', [
        Validators.email,
        Validators.required,
      ]),
      passwordCtl: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  public submit(): void {
    const user: IUser = {
      email: this.email.value,
      password: this.password.value,
    };

    this.submitForm.emit(user);
  }

  public get email(): AbstractControl {
    return this.loginForm.get('emailCtl');
  }

  public get password(): AbstractControl {
    return this.loginForm.get('passwordCtl');
  }


}
