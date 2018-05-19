import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { ResponseArea } from '../dashboard/ResponseArea';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ResponseAreaService {
  constructor(private http: HttpClient) { }
  private loginUrl = `${environment.url}/Responders/login`;

  create(responseArea: ResponseArea) {
    return this.http.post(this.loginUrl, { responseArea }, httpOptions)
      .map((response: any) => {
        if (response) {
          console.log("Resp Area Success");
        }
        return response;
      });
  }

}
