import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ResponseArea } from '../dashboard/ResponseArea';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResponseAreaService } from '../services/response-area.service';
import { Emergency } from '../models/Emergency';
import { EmergencyService } from '../services/emergency.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  lat: any;
  lng: any;
  success: boolean;
  addDet: boolean;
  AlertMsg: string;
  missingArea: string;
  missingType: string;
  areas: ResponseArea[];
  area: string;
  emergencies: any[];
  emergencyDet: Emergency;

  // form
  public form: FormGroup;
  public updateForm: FormGroup;


  constructor(private _responseArea: ResponseAreaService, private emergencyService: EmergencyService) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
    this.success = false;
    this.addDet = false;

    _responseArea.getResponseAreas()
      .then(response => this.areas = response.data);

    this.emergencies = [
      { name: 'Medical', flag: 'Med.png'},
      { name: 'Fire', flag: 'Fire.png'},
      { name: 'PublicSafety', flag: 'PublicSafety.png'}
    ];
  }

  SendLoc() {
    this.success = true;
    this.addDet = true;
    this.createEmergency();
  }

  UpdAlert() {
    this.AlertMsg = 'Emergency Alert updated successfully!';
  }

  ngOnInit() {

    this.form = new FormGroup({
      'selectedArea' : new FormControl(null, Validators.required),
      'selectedEmergency' : new FormControl(null, Validators.required)
    });

    this.updateForm = new FormGroup({
      'locationDetails' : new FormControl(null, Validators.required)
    });

    this.missingArea = 'Response Area required';
    this.missingType = 'Emergency Type required';
  }

  private createEmergency() {
    const respAreaId:number = this.form.get('selectedArea').value.id;
    const type = this.form.get('selectedEmergency').value.name;
    const userid = +localStorage.getItem('userId');
    const startDate = new Date().toISOString(); 
    let endDate =new Date(); 
    endDate.setDate(endDate.getDate() + 1);
    this.emergencyDet = new Emergency(type,{},'',startDate,endDate.toISOString(),userid,respAreaId);
    //this.emergencyService.createEmergency(this.emergencyDet);
    this.emergencyService.getEmergencies(respAreaId)
    .then( response => console.log(response));
    this.AlertMsg = 'Emergency Alert sent successfully!';
  }

  private updateEmergency() {
    const location_description = this.updateForm.get('locationDetails').value;
    //need service to update the emergency with more detaiils.
  }


}
