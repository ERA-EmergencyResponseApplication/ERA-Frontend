import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

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

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
    this.isLogin = true;
  }

  signup() {
    this.isLogin = false;
  }

  login() {
    this.authService.login(this.email, this.password)
      .subscribe((response: any) => {
        if(response) {
          this.display = false;
        }
      });
  }
}
