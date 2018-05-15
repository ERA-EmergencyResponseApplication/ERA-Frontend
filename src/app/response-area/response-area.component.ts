import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-response-area',
  templateUrl: './response-area.component.html',
  styleUrls: ['./response-area.component.css']
})
export class ResponseAreaComponent implements OnInit {

  missingArea: string;
  missingZip: string;
  area: string;
  zip: string;
  AlertMsg: string;
  ResAreaSuccess: boolean;
  success: boolean;

  constructor() {
    this.ResAreaSuccess = false;
    this.success = false;
  }

  AddResArea() {
    if (this.fieldsValid()) {
      this.success = true;
      this.ResAreaSuccess = true;
      this.AlertMsg = 'Response Area added successfully!';
    }
  }

  fieldsValid() {
    let nv = 1;
    this.missingArea = '';
    this.missingZip = '';
    if (this.area == null) {
      nv = 0;
      this.missingArea = 'Response Area required';
    }
    if (this.zip == null) {
      nv = 0;
      this.missingZip = 'Zip code required';
    }
    return nv;
  }

  ngOnInit() {
  }

}
