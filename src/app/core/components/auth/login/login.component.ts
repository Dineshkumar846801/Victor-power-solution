import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginInfo } from 'src/app/models/UserLoginInfo';

@Component({
  templateUrl: './login.component.html',
  selector: 'app-login',
})
export class LoginComponent {
  constructor(private router: Router) {}
  get user(): UserLoginInfo {
    return {
      isRemember: false,
      userId: '',
      userPassword: '',
    };
  }

  form = new FormGroup({
    userId: new FormControl(this.user.userId, [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern('[a-zA-Z1-200]*'),
    ]),
    userPassword: new FormControl(this.user.userPassword, [
      Validators.required,
      Validators.minLength(8),
    ]),
    isRemember: new FormControl(this.user.isRemember),
  });

  get userId(): any {
    return this.form.get('userId');
  }

  userLoginInfo: UserLoginInfo = this.user;

  onSubmit() {
    this.router.navigateByUrl('/admin');
  }
}
