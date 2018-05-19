import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Emergency } from '../dashboard/emergencies/emergency/Emergency';
import { ResponseArea } from '../dashboard/ResponseArea';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResponseAreaService } from '../services/response-area.service';

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


  constructor(private _responseArea: ResponseAreaService) {
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
      { name: 'Fire Hazard', flag: 'Fire.png'},
      { name: 'Public Safety', flag: 'PublicSafety.png'}
    ];
  }

  SendLoc() {

      // this.emergencyDet = new Emergency(this.lat, this.lng, this.selectedEmergency, this.area, new Date());
       this.success = true;
       this.addDet = true;
       this.AlertMsg = 'Emergency Alert sent successfully!';
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
}
