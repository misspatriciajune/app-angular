import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
    constructor(private auth: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        let url: string = state.url;
        return this.isLoggedIn(url);
    }

    isLoggedIn(url: string): boolean {
        if(this.auth.isLoggedIn()){
          return true;
        }
    
        this.router.navigate(['/login']);
        return false;
      }
}
