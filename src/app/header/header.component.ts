import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  display = false;

  constructor(private router: Router, private http: HttpClient) { }
  private loginUrl = `${environment.url}/Responders/login`;
  email: string;
  password: string;

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }

  login() {
    console.log('login');
    this.http.post(this.loginUrl, { email: this.email, password: this.password })
      .subscribe((response: any) => {
        if (response.id !== null) {
          this.display = false;
        }
      });
  }
}
