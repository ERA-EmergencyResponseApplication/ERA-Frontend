import { Component, OnInit, Input } from '@angular/core';
import { ResponseArea } from '../ResponseArea';
import { Emergency } from '../../models/Emergency';
import { EmergencyService } from '../../services/emergency.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emergency-events',
  templateUrl: './emergency-events.component.html',
  styleUrls: ['./emergency-events.component.css']
})
export class EmergencyEventsComponent implements OnInit {

  @Input() respArea: ResponseArea;
  emergencies: Emergency[] = [];
  constructor(private emergencyService: EmergencyService, private router: Router) {}

  ngOnInit() {
    if (this.respArea) {
      this.emergencies = this.emergencyService.getAllEmergencies(this.respArea.id);
    }
  }

  goToEmergency(emergency: Emergency) {
    this.router.navigate(['events', emergency.id]);
  }

}
