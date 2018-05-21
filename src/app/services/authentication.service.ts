import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import endpoints from '../../app/config/endpoints';
import AbstractService from './abstract.service';
import axios from 'axios';
import { ResponseArea } from '../dashboard/ResponseArea';
import { Responder } from '../dashboard/Responder';

@Injectable()
export class AuthenticationService extends AbstractService {
  constructor() {
    super({});
   }

  login(username: string, password: string) {
    return this.$post(endpoints.login(), { username, password }).bind(this)
      .then((response) => {
        const { id: token, userId } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        axios.defaults.headers.common['Authorization'] = token;
        return response;
      });
  }

  signup(newUser: Responder) {
    return this.$post(endpoints.signup(), newUser).bind(this)
      .then((response) => {
        return response;
      });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }

}
