import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Subscription } from 'rxjs';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginAttemptMessage: string;

  logged: boolean;
  loginSubscription: Subscription;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private auth: AuthService) { 
    this.logged = false;
  }

  ngOnInit() {
    this.loginSubscription = this.auth.loggedStatus$
      .subscribe(status => this.logged = status);
  }

  handleLogin() {
    this.auth.login(this.username, this.password);
  }
}
