import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loggedStatusSource = new BehaviorSubject<boolean>(false);
  loggedStatus$ = this._loggedStatusSource.asObservable();
  // url = '';

  constructor(private router: Router, private _http: HttpClient) { 
    if(this.isLoggedIn()) {
      this.router.navigate(['home']);
      this._loggedStatusSource.next(true);
    }
  }

  login(username: string, password: string) {
    // this._http.post(`${this.url}/api/login`, {username: username, password: password}).subscribe(
    //   (response: any) => {
    //     localStorage.setItem('access-token', response.token );
    //     this.router.navigate(['home']);
    //     this._loggedStatusSource.next(true);
    //   },
    //   ( error ) => {
    //     console.log('Error ' + error);
    //   }
    // )

    if(username == 'test@test.com'  && password == "test") {
      localStorage.setItem('access-token', 'testToken');
      this.router.navigate(['home']);
      this._loggedStatusSource.next(true);
    }
  }

  isLoggedIn() {
    return localStorage.getItem('access-token');
  }

  logout() { 
    this._loggedStatusSource.next(false);
    localStorage.removeItem('access-token');
    this.router.navigate(['']);
  }

}
