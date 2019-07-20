import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideNav = new EventEmitter<boolean>();

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  toggleNav() {
    this.toggleSideNav.emit(true);
  }

  handleLogout() {
    this.auth.logout();
  }
}
