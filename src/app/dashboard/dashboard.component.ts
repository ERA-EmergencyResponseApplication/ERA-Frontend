import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseArea } from './ResponseArea';
import { ResponseAreaService } from '../services/response-area.service';
import { EmergencyService } from '../services/emergency.service';
import { Emergency } from '../models/Emergency';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  responseAreas: ResponseArea[] = [];
  emergencies: Emergency[];
  constructor(private router: Router, 
    private respAreaService: ResponseAreaService) { }

  ngOnInit() {
     const userId:number = +localStorage.getItem('userId');
     this.responseAreas = this.respAreaService.getResponseAreasForUser(userId);
  }

}
