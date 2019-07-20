import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Output() toggleSideNav = new EventEmitter<boolean>();

  links: any = [
    {
      page: 'Home',
      icon: 'home',
      route: 'home',
      param: '',
      loggedDependent: false
    }
  ];

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  setRoute(route: string) {
    this.router.navigate([route]);
    this.toggleSideNav.emit(true);
  }

  handleLogout() {
    this.toggleSideNav.emit(true);
    this.auth.logout();
  }
}
