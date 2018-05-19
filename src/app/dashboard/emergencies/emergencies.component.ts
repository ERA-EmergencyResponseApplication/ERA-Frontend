import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ResponseArea } from '../ResponseArea';
import { Emergency } from '../../models/Emergency';
import { EmergencyService } from '../../services/emergency.service';
@Component({
  selector: 'app-emergencies',
  templateUrl: './emergencies.component.html',
  styleUrls: ['./emergencies.component.css']
})
export class EmergenciesComponent implements OnInit,AfterViewInit {
  @Input() respArea: ResponseArea;
  emergencies: Emergency[] = [];
  constructor(private emergencyService: EmergencyService) { 
    
  }

  ngOnInit() {
    if(this.respArea) {
      console.log(this.respArea);
      this.emergencies = this.emergencyService.getAllEmergencies(this.respArea.id);
      console.log("Emergencies: " +this.emergencies);
    }
  }

  ngAfterViewInit() {
    this.emergencies = this.emergencies.filter(
      (emergency: Emergency) => {
        console.log(emergency);
        emergency.responseAreaId === this.respArea.id;
      }
    );
  }
}
