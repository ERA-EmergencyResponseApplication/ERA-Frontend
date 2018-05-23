import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { Responder } from '../dashboard/Responder';
import AbstractService from './abstract.service';
import endpoints from '../../app/config/endpoints';
import { ResponseArea } from '../dashboard/ResponseArea';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class UserService extends AbstractService {
  public message = new Subject<string>();
  constructor() {
    super();
  }

  setMessage(value: string) {
    this.message.next(value);
  }

  createUser(user: Responder) {
    return this.$post(endpoints.createUser(), user).bind(this)
      .then((response) => {
        console.log(response);
        const endpointList = user.responseAreas.map(area =>
          this.$put(endpoints.addSubscriberToResponseArea(area, response.data.id)).bind(this));
        return this.$all(endpointList);
      });
  }

  getUser (responderId: number) {
    return this.$get(endpoints.getUser(responderId)).bind(this);
  }

  updateUser (user: Responder) {
    return this.$put(endpoints.updateUser(user.id), user).bind(this)
      .then((response) => {
        console.log(response);
      });
  }

}
