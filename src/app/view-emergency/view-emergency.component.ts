import { Component, OnInit } from '@angular/core';
import { EmergencyService } from '../services/emergency.service';
import { ResponseAreaService } from '../services/response-area.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Emergency } from '../models/Emergency';
import { ResponseArea } from '../dashboard/ResponseArea';

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
  address: string;
  startDateTime: string;
  additionalIndo: string;
  
  
  constructor(private emergencyService: EmergencyService, private route: ActivatedRoute,
    private responseAreaService: ResponseAreaService) { }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.emergencyId = +params['emergencyId'];
    });
  }

  getEmergency() {
    const emergencyPromise: Promise<any> = this.emergencyService.getEmergency(this.emergencyId);
    emergencyPromise.then((response) => {
      this.emergency = response.data;
      this.getResponseArea(this.emergency.responseAreaId);
    });
  }

  getResponseArea(id: number) {
    const respAreaPromise: Promise<any> = this.responseAreaService.getResponseAreaById(id);
    respAreaPromise.then((response) => {
      this.responseArea = response.data;
    });
  }

}
