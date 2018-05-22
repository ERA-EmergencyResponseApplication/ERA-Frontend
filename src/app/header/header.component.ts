import { Component, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy  {
  token: any;
  subscription: Subscription;
  constructor(
    private router: Router,
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    this.subscription = this.authenticationService.getMessage().subscribe(token => { this.token = token; });
  }

  email: string;
  password: string;
  display: boolean;
  profileInfoClass = 'profile-info';

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
        this.authenticationService.clearMessage();
        this.router.navigate(['/login']);
      });
  }

  @HostListener('document:click', ['$event']) clickedOutside($event) {
    this.display = false;
    this.profileInfoClass = 'profile-info';
  }
}
