import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AlertService } from '../services/alert-service';

@Component({
  selector: 'app-responder',
  templateUrl: './responder.component.html',
  styleUrls: ['./responder.component.css'],
  providers: [AlertService]
})
export class ResponderComponent implements OnInit {
  @Output() rCreated = new EventEmitter<{ success: boolean, alertMsg: string }>();
  missingFirstName: string;
  missingLastName: string;
  missingUserName: string;
  missingEmail: string;
  missingCEmail: string;
  missingPhone: string;
  fname: string;
  lname: string;
  uname: string;
  email: string;
  cemail: string;
  phone: string;
  ResAreaSuccess: boolean;
  success: boolean;
  AlertMsg: string;

  constructor(private alertService: AlertService) {
    this.ResAreaSuccess = false;
    this.success = false;
  }

  AddResponder() {
    if (this.fieldsValid()) {
      this.success = true;
      this.ResAreaSuccess = true;
      this.AlertMsg = 'Responder added successfully!';
      this.rCreated.emit({ success: this.success, alertMsg: this.AlertMsg });
    }
    this.alertService.msg(this.AlertMsg);
  }

  fieldsValid() {
    let nv = 1;
    this.missingFirstName = '';
    this.missingLastName = '';
    this.missingUserName = '';
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

  ngOnInit() {
  }

}
