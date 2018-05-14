import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  lat: any;
  lng: any;

  filteredAreas: any[];
  areas: string[] = ['Cincinnati','West Chester','Dayton','Fairfield','Cliffton'];
  area: string;
  emergencies: any[];
  types: SelectItem[];

  constructor() {
    if(navigator){
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }

    this.types = [
      {label: 'Paypal', value: 'PayPal', icon: 'fa fa-fw fa-cc-paypal'},
      {label: 'Visa', value: 'Visa', icon: 'fa fa-fw fa-cc-visa'},
      {label: 'MasterCard', value: 'MasterCard', icon: 'fa fa-fw fa-cc-mastercard'}
  ];

    this.emergencies = [
      {name: 'Medical', flag: 'Med.png'},
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

  ngOnInit() {
  }

}
