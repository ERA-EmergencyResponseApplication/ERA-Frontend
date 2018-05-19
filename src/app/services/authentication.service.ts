import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import endpoints from '../../app/config/endpoints';
import AbstractService from './abstract.service';
import axios from 'axios';
import { ResponseArea } from '../dashboard/ResponseArea';

@Injectable()
export class AuthenticationService extends AbstractService {
  constructor() {
    super({});
   }

  login(email: string, password: string) {
    return this.$post(endpoints.login(), { email, password }).bind(this)
      .then((response) => {
        const { id: token, userId } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        axios.defaults.headers.common['Authorization'] = token;
        return response;
      });
  }

  createResponseArea() {
    const userId = localStorage.getItem('userId');
    const data = new ResponseArea('Liberty center 2', 'Liberty center mall in ohio', { lat: '72.5', lng: '74.5' },
    'Address1', 'City1', 'State1', 'Zip1', userId);
    return this.$post(endpoints.createResponseArea(), data).bind(this)
      .then((response) => {
        console.log(response);
      });
  }

}
