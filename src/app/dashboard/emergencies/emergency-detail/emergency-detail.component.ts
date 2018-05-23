import { Component, OnInit, Input } from '@angular/core';
import { Emergency } from '../../../models/Emergency';
import { ResponseArea } from '../../ResponseArea';
import { EmergencyService } from '../../../services/emergency.service';
import { ResponseAreaService } from '../../../services/response-area.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-emergency-detail',
  templateUrl: './emergency-detail.component.html',
  styleUrls: ['./emergency-detail.component.css']
})
export class EmergencyDetailComponent implements OnInit {

  emergency: Emergency;
  responseArea: ResponseArea;
  startDate: string;
  startTime: string;
  locationDesc: string;
  address: string;
  cityZip: string;
  name: string;
  type: string;
  emergencyId: number;
  respAreaId: number;

  constructor(private emergencyService: EmergencyService, private route: ActivatedRoute,
  private respAreaService: ResponseAreaService, private router: Router) { }

  ngOnInit() {
    this.route.params.
    subscribe( (params: Params) => {
      this.emergencyId = params['emergencyId'];
      this.respAreaId = params['respAreaId'];
      this.getResponses();
    });
  }

  getResponses() {
    const emergencyPromise: Promise<any> = this.emergencyService.getEmergency(this.emergencyId);
    emergencyPromise.then((response) => {
      this.emergency = response.data;
      this.getAttributes(this.emergency);
    });
    const respAreaPromise: Promise<any> = this.respAreaService.getResponseAreaById(this.respAreaId);
    respAreaPromise.then((response) => {
      this.responseArea = response.data;
      this.mapAttributes(this.responseArea);
    });
  }

  getAttributes(responseData: Emergency) {
    this.type = responseData.type.toUpperCase();
    this.startDate = responseData.start_datetime;
    this.locationDesc = responseData.location_description;
  }

  mapAttributes(responseData: ResponseArea) {
    this.address = responseData.address;
    this.name = responseData.name;
    this.cityZip = responseData.city + ' ' + responseData.zip;
  }

  goToEmergency() {
    this.router.navigate(['events',this.emergency.id]);
  }
}
