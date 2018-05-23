import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  missingEmail: string;
  missingPassword: string;
  error: boolean;
  regSuccess: boolean;
  AlertMsg: string;
  subscription: Subscription;
  public form: FormGroup;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    this.AlertMsg = '';
    this.subscription = this.authenticationService.getMessage().subscribe(token => { this.AlertMsg = token; });
    if (this.AlertMsg) {
      this.regSuccess = true;
    } else {
      this.regSuccess = false;
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
    this.missingEmail = 'Email required';
    this.missingPassword = 'Password required';
  }

  login() {
    this.authenticationService.login(this.email, this.password)
      .then((token) => {
        this.authenticationService.sendMessage(token);
        this.error = false;
        this.router.navigate(['/dashboard']);
      })
      .catch(() => {
        this.error = true;
      });
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
}
