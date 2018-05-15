import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseArea } from './ResponseArea';
import { ResponseAreaService } from './ResponseArea.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  responseAreas: ResponseArea[] = [];
  constructor(private router: Router, private respAreaService: ResponseAreaService) { }

  ngOnInit() {
     console.log(this.responseAreas);
     this.responseAreas  = this.respAreaService.getResponseAreas();
  }

}
