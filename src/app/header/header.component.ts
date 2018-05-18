import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

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

  constructor(private router: Router, private headerService: HeaderService) { }

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
    this.headerService.loginWithCredentials(this.email, this.password);
    this.display = false;
  }
}
