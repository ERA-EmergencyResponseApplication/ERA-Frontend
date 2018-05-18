import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Responder } from '../dashboard/Responder';

@Component({
  selector: 'app-responder',
  templateUrl: './responder.component.html',
  styleUrls: ['./responder.component.css']
})
export class ResponderComponent implements OnInit {
  @Output() rCreated = new EventEmitter<{ success: boolean, alertMsg: string }>();
  missingFirstName: string;
  missingLastName: string;
  missingUserName: string;
  missingRespArea: string;
  missingEmail: string;
  missingCEmail: string;
  missingPhone: string;
  fname: string;
  lname: string;
  uname: string;
  email: string;
  cemail: string;
  phone: string;
  respArea: string;
  success: boolean;
  collapse: boolean;
  AlertMsg: string;
  responder: Responder;

  constructor() {
    this.success = false;
    this.collapse = true;
  }

  AddResponder() {
    if (this.fieldsValid()) {
      this.responder = new Responder(this.fname, this.lname, this.uname, this.respArea, this.email, this.phone);
      this.success = true;
      this.collapse = true;
      this.AlertMsg = 'Responder added successfully!';
      this.rCreated.emit({ success: this.success, alertMsg: this.AlertMsg });
      this.reset();
    }
  }

  fieldsValid() {
    let nv = 1;
    this.missingFirstName = '';
    this.missingLastName = '';
    this.missingUserName = '';
    this.missingRespArea = '';
    this.missingEmail = '';
    this.missingCEmail = '';
    this.missingPhone = '';

    if (this.fname == null) {
      nv = 0;
      this.missingFirstName = 'First name required';
    }
    if (this.lname == null) {
      nv = 0;
      this.missingLastName = 'Last name required';
    }
    if (this.uname == null) {
      nv = 0;
      this.missingUserName = 'User name required';
    }
    if (this.respArea == null) {
      nv = 0;
      this.missingRespArea = 'Response area required';
    }
    if (this.email == null) {
      nv = 0;
      this.missingEmail = 'Email required';
    }
    if (this.cemail == null) {
      nv = 0;
      this.missingCEmail = 'Confirm email required';
    }
    if (this.phone == null) {
      nv = 0;
      this.missingPhone = 'Phone required';
    }
    return nv;
  }

  reset() {
    this.fname = '';
    this.lname = '';
    this.uname = '';
    this.email = '';
    this.cemail = '';
    this.phone = '';
    this.respArea = '';
  }

  ngOnInit() {
  }

}
