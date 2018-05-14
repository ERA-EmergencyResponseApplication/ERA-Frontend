import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Emergency } from '../dashboard/emergencies/Emergency';

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

  filteredAreas: any[];
  areas: string[] = ['Cincinnati','West Chester','Dayton','Fairfield','Cliffton'];
  area: string;
  emergencies: any[];
  emergencyDet: Emergency;

  constructor() {
    if(navigator){
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
    this.success = false;
    this.addDet = false;
    this.EmCreate = true;
    this.emergencies = [
      { name: 'Medical', flag: 'Med.png'},
      { name: 'Fire Hazard', flag: 'Fire.png'},
      { name: 'Public Safety', flag: 'PublicSafety.png'}
    ];
  }

  filterAreas(event) {
    this.filteredAreas = [];
    for(let i = 0; i < this.areas.length; i++) {
      let area = this.areas[i];
      if(area.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
          this.filteredAreas.push(area);
      }
    }
  }

  SendLoc() {
    this.emergencyDet = new Emergency(this.lat, this.lng, this.selectedEmergency, this.LocDet, new Date());
    this.success = true;
    this.addDet = true;
    this.EmCreate = false;
    this.AlertMsg = "Emergency Alert sent successfully!";
  }

  UpdAlert() {
    this.AlertMsg = "Emergency Alert updated successfully!";
  }

  ngOnInit() {
  }

}
