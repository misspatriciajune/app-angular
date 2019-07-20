import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  logged: boolean;
  loginSubscription: Subscription;

  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    this.loginSubscription = this.auth.loggedStatus$
      .subscribe(status => this.logged = status);
  }
  
}
