import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  AlertMsg: string;
  success: boolean;

  constructor() { }

  ngOnInit() {
  }

  onRACreated(alertData: { success: boolean, alertMsg: string }) {
    this.success = alertData.success;
    this.AlertMsg = alertData.alertMsg;
  }
  onRCreated(alertData: { success: boolean, alertMsg: string }) {
    this.success = alertData.success;
    this.AlertMsg = alertData.alertMsg;
  }

}
