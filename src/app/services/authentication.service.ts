import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Responder } from '../dashboard/Responder';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }
  private loginUrl = `${environment.url}/Responders/login`;
  private signupUrl = `${environment.url}/Responders`;

  login(email: string, password: string) {
    return this.http.post(this.loginUrl, { email: email, password: password }, httpOptions)
      .map((response: any) => {
        if (response) {
          localStorage.setItem('token', response.id);
        }
        return response;
      });
  }

  signup(responder: Responder) {
    return this.http.post(this.signupUrl, responder, httpOptions)
      .map((response: any) => {
        if(response){
          return response;
        }
        return {};
      });
  }
}
