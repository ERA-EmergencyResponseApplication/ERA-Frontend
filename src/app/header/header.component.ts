import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { Responder } from '../dashboard/Responder';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  display: boolean = false;
  isLogin: boolean = true;
  email: string = '';
  password: string = '';
  responder: Responder;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
    this.isLogin = true;
  }

  signup() {
    this.authenticationService.signup(this.responder)
      .subscribe((response: any) => {
        if(response) {
          this.display = false;
        }
      })
  }

  login() {
    this.authenticationService.login(this.email, this.password)
      .subscribe(
        data => console.log('success'),
        error => console.log('Failed')
      );
  }
}
