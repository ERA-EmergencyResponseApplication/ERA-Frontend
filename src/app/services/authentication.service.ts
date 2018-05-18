import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }
  private loginUrl = `${environment.url}/Responders/login`;

  login(email: string, password: string) {
    return this.http.post(this.loginUrl, { email: email, password: password }, httpOptions)
      .map((response: any) => {
        if (response) {
          localStorage.setItem('token', response.id);
        }
        return response;
      });
  }

}
