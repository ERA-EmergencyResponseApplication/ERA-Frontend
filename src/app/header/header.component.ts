import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  email: string;
  password: string;
  display: boolean;
  profileInfoClass = 'profile-info';

  ngOnInit() {
  }

  showDialog($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.display = !this.display;
    this.profileInfoClass = this.display ? 'profile-info open' : 'profile-info';
  }

  login() {
    this.authenticationService.login(this.email, this.password);
  }

  logout($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.display = false;
    this.profileInfoClass = 'profile-info';
    this.authenticationService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }

  @HostListener('document:click', ['$event']) clickedOutside($event) {
    this.display = false;
    this.profileInfoClass = 'profile-info';
  }
}
