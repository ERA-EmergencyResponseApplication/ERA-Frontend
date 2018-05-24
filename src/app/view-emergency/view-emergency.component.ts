import { Component, OnInit } from '@angular/core';
import { EmergencyService } from '../services/emergency.service';
import { ResponseAreaService } from '../services/response-area.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Emergency } from '../models/Emergency';
import { ResponseArea } from '../dashboard/ResponseArea';
import { UserService } from '../services/user.service';
import { Responder } from '../dashboard/Responder';
import { UserResponse } from '../models/UserResponse';

@Component({
  selector: 'app-view-emergency',
  templateUrl: './view-emergency.component.html',
  styleUrls: ['./view-emergency.component.css']
})
export class ViewEmergencyComponent implements OnInit {

  emergencyId: number;
  respAreaId: number;
  emergency: Emergency;
  responseArea: ResponseArea;
  creator: Responder;
  address: string;
  startDateTime: string;
  additionalInfo: string;
  type: string;
  name: string;
  respAreaName: string;
  currentResponderStatus: string;
  count: number;
  response: UserResponse[];
  newResponse: UserResponse;
  userResponse: string;
  resolveVisible: boolean;

  constructor(private emergencyService: EmergencyService, private route: ActivatedRoute,
    private responseAreaService: ResponseAreaService, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.emergencyId = +params['emergencyId'];
      this.getEmergency();
    });
  }

  getEmergency() {
    const emergencyPromise: Promise<any> = this.emergencyService.getEmergency(this.emergencyId);
    emergencyPromise.then((response) => {
      this.emergency = response.data;
      this.mapEmergencyAttributes(this.emergency);
      this.getResponseArea(this.emergency.responseAreaId);
      this.getResponder(this.emergency.creatorId);
      this.getEmergencyResponderCount(this.emergency.id);
    });
  }

  getResponseArea(id: number) {
    const respAreaPromise: Promise<any> = this.responseAreaService.getResponseAreaById(id);
    respAreaPromise.then((response) => {
      this.responseArea = response.data;
      this.mapResponseAreaAttributes(this.responseArea);
    });
  }

  mapEmergencyAttributes(emergeny: Emergency) {
    const datetime =  this.emergency.start_datetime;
    this.startDateTime = new Date(datetime).toDateString() + ' ' + new Date(datetime).toTimeString();
    this.type = this.emergency.type;
    this.additionalInfo = this.emergency.location_description;
    this.resolveVisible = this.emergency.creatorId === +localStorage.getItem('userId') ? true : false;
  }

  getEmergencyResponderCount(id: number) {
    const respAreaPromise: Promise<any> = this.emergencyService.getEmergencyResponderCount(id);
    respAreaPromise.then((response) => {
      this.count = +response.data.count;
    });
  }

  mapResponseAreaAttributes(respArea: ResponseArea) {
    this.address = this.responseArea.address + ', ' + this.responseArea.city.toUpperCase() + ', ' + this.responseArea.zip;
    this.respAreaName = this.responseArea.name + ' - ' + this.responseArea.description;
  }

  getResponder(id: number) {
    const responderPromise: Promise<any> = this.userService.getUser(id);
    responderPromise.then((response) => {
      this.creator = response.data;
      this.name = this.creator.firstName + ' '  + this.creator.lastName;
      const userId: number = +localStorage.getItem('userId');
      this.getResponderStatus(this.emergency.id, userId);
    });
  }

  getResponderStatus(eId: number, rId: number) {
    const responsePromise: Promise<any> = this.emergencyService.getEmergencyResponseForUser(eId, rId);
    responsePromise.then((response) => {
      this.response = response.data;
      if (this.response.length > 0) {
        this.userResponse = this.response[0].status;
      }
    });
  }

  updateStatus(status: string) {
    const userId: number = +localStorage.getItem('userId');
    if (this.userResponse) {
      this.newResponse = new UserResponse(status, this.emergency.id, userId, this.response[0].id);
      this.emergencyService.updateResponse(this.emergency.id, this.newResponse, this.newResponse.id);
      this.userResponse = status;
    } else {
      this.newResponse = new UserResponse(status, this.emergency.id, userId);
      this.emergencyService.createResponse(this.emergency.id, this.newResponse);
      this.getResponderStatus(this.emergency.id, userId);
      this.userResponse = status;
      this.count += 1;
    }
  }

}
