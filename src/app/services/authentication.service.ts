import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }
  private loginUrl = 'https://eraapi.brandoncodes.com/api/Responders/login';

  login(email: string, password: string) {
    this.http.post(this.loginUrl, { email: email, password: password })
      .map((response: any) => {
        if (response) {
          localStorage.setItem('token', response.id);
        }
        return response;
      });
  }

}
