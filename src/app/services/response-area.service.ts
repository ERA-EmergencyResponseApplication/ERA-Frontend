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
    return this.$post(endpoints.createResponseArea(), responseArea).bind(this)
      .then((response) => {
        console.log(response);
      });
  }

  getResponseAreas() {
    return this.$get(endpoints.getResponseAreas()).bind(this);
  }

  getResponseAreasForUser(userId: number): ResponseArea[] {
    const respArr: ResponseArea[] = [];
    this.$get(endpoints.getResponseAreasOfSubscriber(userId)).bind(this).
    then((response) => {
      if (response.data) {
        response.data.forEach((element: ResponseArea) => {
          respArr.push(element);
        });
      }
    });
    return respArr;
  }


  addSubscriberToResponseArea(responderId: number, responseAreaId: number) {
    return this.$put(endpoints.addSubscriberToResponseArea(responseAreaId, responderId)).bind(this);
  }

  getResponseAreaById(respAreaId: number) {
    return this.$get(endpoints.getResponseArea(respAreaId)).bind(this);
  }

}
