import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { ResponseArea } from '../dashboard/ResponseArea';
import AbstractService from './abstract.service';
import endpoints from '../../app/config/endpoints';

@Injectable()
export class ResponseAreaService extends AbstractService {
  constructor() {
    super();
  }

  createResponseArea(responseArea: ResponseArea) {
    //const userId = localStorage.getItem('userId');
    //const data = new ResponseArea('Liberty center 2', 'Liberty center mall in ohio', { lat: '72.5', lng: '74.5' },
    //  'Address1', 'City1', 'State1', 'Zip1', userId);
    return this.$post(endpoints.createResponseArea(), responseArea).bind(this)
      .then((response) => {
        console.log(response);
      });
  }

  getResponseAreas() {
    return this.$get(endpoints.getResponseAreas()).bind(this);
  }

}
