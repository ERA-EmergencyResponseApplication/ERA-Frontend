import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-response-area',
  templateUrl: './response-area.component.html',
  styleUrls: ['./response-area.component.css']
})
export class ResponseAreaComponent implements OnInit {
  @Output() raCreated = new EventEmitter<{ success: boolean, alertMsg: string }>();
  missingArea: string;
  missingAddr: string;
  missingCity: string;
  missingState: string;
  missingZip: string;
  area: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  desc: string;
  AlertMsg: string;
  success: boolean;
  collapse: boolean;

  constructor() {
    this.success = false;
    this.collapse = true;
  }

  AddResArea() {
    if (this.fieldsValid()) {
      this.success = true;
      this.collapse = true;
      this.AlertMsg = 'Response Area added successfully!';
      this.raCreated.emit({ success: this.success, alertMsg: this.AlertMsg });
      this.reset();
    }
  }

  fieldsValid() {
    let nv = 1;
    this.missingArea = '';
    this.missingAddr = '';
    this.missingCity = '';
    this.missingState = '';
    this.missingZip = '';
    if (this.area == null) {
      nv = 0;
      this.missingArea = 'Response Area required';
    }
    if (this.address == null) {
      nv = 0;
      this.missingAddr = 'Address required';
    }
    if (this.city == null) {
      nv = 0;
      this.missingCity = 'City required';
    }
    if (this.state == null) {
      nv = 0;
      this.missingState = 'State required';
    }
    if (this.zip == null) {
      nv = 0;
      this.missingZip = 'Zip code required';
    }
    return nv;
  }

  reset() {
    this.area = '';
    this.address = '';
    this.city = '';
    this.state = '';
    this.zip = '';
    this.desc = '';
  }

  ngOnInit() {
  }

}
