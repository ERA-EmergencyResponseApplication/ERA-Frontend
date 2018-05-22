import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Responder } from '../dashboard/Responder';
import { SelectItem } from 'primeng/api';
import { ResponseArea } from '../dashboard/ResponseArea';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResponseAreaService } from '../services/response-area.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
  missingFirstName: string;
  missingLastName: string;
  missingUserName: string;
  missingPassword: string;
  missingResponseAreas: string;
  missingEmail: string;
  missingPhone: string;
  user: any;
  rAreas: ResponseArea[];
  areas: any[];
  responseAreas: ResponseArea[];
  pageMode: string;
  public form: FormGroup;

  constructor(
    private _responseArea: ResponseAreaService,
    private _user: UserService,
    private _router: Router  ) {
    this.fname = '';
    this.lname = '';
    this.uname = '';
    this.email = '';
    this.cemail = '';
    this.phone = '';
    this.responseAreas = [];
    this.success = false;
    this.collapse = true;
    this.rAreas = [];
    this.areas = [];
    this.user = {};

    _responseArea.getResponseAreas()
      .then(response => {
        this.rAreas = response.data;
        for (let i = 0; i < this.rAreas.length; i++) {
          this.areas.push({ 'label': this.rAreas[i].name, 'value': this.rAreas[i].id });
        }
      });

    let userId: number = Number(localStorage.getItem('userId'));
    if(userId && userId > 0) {
      this.pageMode = 'update';
      _user.getUser(userId).then(
        (response) => {
          this.user = response.data;
        }
      );
    } else {
      this.pageMode = 'register'
    }
  }

  AddUser() {
    console.log('user', this.user);
    console.log('responseAreas', this.responseAreas);
    this.success = true;
    this.collapse = true;
    if(this.pageMode === 'update') {
      const u = new Responder(this.user.firstName, this.user.lastName, this.user.username, this.user.password, this.user.responseAreas,
        this.user.email, this.user.cellNumber, this.user.id);
      this._user.updateUser(u);
      
      // for(let responseAreaId of this.responseAreas) {
      //   this.
      // }

      this.AlertMsg = 'User updated successfully!';
    } else {
      const u = new Responder(this.user.firstName, this.user.lastName, this.user.username, this.user.password, this.user.responseAreas,
      this.user.email, this.user.cellNumber, 0);
      this._user.createUser(u);
      this.AlertMsg = 'User added successfully!';
    }
    this._router.navigate(['/']);
  }

  reset() {
    this.fname = '';
    this.lname = '';
    this.uname = '';
    this.email = '';
    this.cemail = '';
    this.phone = '';
    this.responseAreas = [];
    this.missingFirstName = '';
    this.missingLastName = '';
    this.missingResponseAreas = '';
    this.missingEmail = '';
    this.missingPhone = '';
    this.success = false;
  }

  ngOnInit() {
    this.form = new FormGroup({
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'responseareas': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'cellnumber': new FormControl(null, Validators.required),
    });
    this.missingFirstName = 'First name required';
    this.missingLastName = 'Last name required';
    this.missingUserName = 'User name required';
    this.missingPassword = 'Password required';
    this.missingResponseAreas = 'Response Area required';
    this.missingEmail = 'Email required';
    this.missingPhone = 'Phone required';
  }

}
