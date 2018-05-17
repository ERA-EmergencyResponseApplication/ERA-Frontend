import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AlertService]
})
export class HomeComponent implements OnInit {

  AlertMsg: string;
  success: boolean;

  constructor(private alertService: AlertService) { }

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
