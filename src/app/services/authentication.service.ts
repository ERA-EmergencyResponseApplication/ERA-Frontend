import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import endpoints from '../../app/config/endpoints';
import AbstractService from './abstract.service';
import axios from 'axios';
import { ResponseArea } from '../dashboard/ResponseArea';
import { Responder } from '../dashboard/Responder';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService extends AbstractService {
  private loginSubject = new Subject<any>();
  constructor() {
    super({});
   }

   sendMessage(message: string) {
    this.loginSubject.next({ token: message });
  }

  clearMessage() {
    this.loginSubject.next();
  }

  getMessage(): Observable<any> {
    return this.loginSubject.asObservable();
  }

  login(username: string, password: string) {
    return this.$post(endpoints.login(), { username, password }).bind(this)
      .then((response) => {
        const { id: token, userId } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        axios.defaults.headers.common['Authorization'] = token;
        return token;
      });
  }

  signup(newUser: Responder) {
    return this.$post(endpoints.signup(), newUser).bind(this)
      .then((response) => {
        return response;
      });
  }

  logout() {
    return this.$post(endpoints.signout()).bind(this)
      .then((response) => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        axios.defaults.headers.common['Authorization'] = '';
      });
  }

}
