import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ResponseArea } from '../dashboard/ResponseArea';
import { ResponseAreaService } from '../services/response-area.service';

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

  constructor(
    private responseAreaService: ResponseAreaService  ) {
    this.area = '';
    this.address = '';
    this.city = '';
    this.state = '';
    this.zip = '';
    this.desc = '';
    this.success = false;
    this.collapse = true;
  }

  AddResArea() {
    if (this.fieldsValid()) {
      this.success = true;
      this.collapse = true;
      const userid = localStorage.getItem('userId');
      const respArea = new ResponseArea(this.area, this.desc, {}, this.address, this.city, this.state, this.zip, userid);
      this.responseAreaService.createResponseArea(respArea);
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
    if (this.area === '') {
      nv = 0;
      this.missingArea = 'Response Area required';
    }
    if (this.address === '') {
      nv = 0;
      this.missingAddr = 'Address required';
    }
    if (this.city === '') {
      nv = 0;
      this.missingCity = 'City required';
    }
    if (this.state === '') {
      nv = 0;
      this.missingState = 'State required';
    }
    if (this.zip === '') {
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
    this.missingArea = '';
    this.missingAddr = '';
    this.missingCity = '';
    this.missingState = '';
    this.missingZip = '';
  }

  ngOnInit() {
  }

}
