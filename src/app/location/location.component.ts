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
  selectedEmergency: string;
  LocDet: string;
  success: boolean;
  addDet: boolean;
  EmCreate: boolean;
  AlertMsg: string;
  missingArea: string;
  missingType: string;

  filteredAreas: any[];
  areas: ResponseArea[];
  area: string;
  selectedArea: ResponseArea[];
  emergencies: any[];
  emergencyDet: Emergency;

  // form
  public form: FormGroup;


  constructor(private _responseArea: ResponseAreaService) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
    this.success = false;
    this.addDet = false;
    this.EmCreate = true;

    _responseArea.getResponseAreas()
      .then(response => this.areas = response.data);

    this.emergencies = [
      { name: 'Medical', flag: 'Med.png'},
      { name: 'Fire Hazard', flag: 'Fire.png'},
      { name: 'Public Safety', flag: 'PublicSafety.png'}
    ];
  }

  SendLoc() {

      this.emergencyDet = new Emergency(this.lat, this.lng, this.selectedEmergency, this.area, new Date());
      this.success = true;
      this.addDet = true;
      this.EmCreate = false;
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

    this.form.reset();
    this.missingArea = 'Response Area required';
    this.missingType = 'Emergency Type required';
  }
}
