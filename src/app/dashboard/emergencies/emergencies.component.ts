import { Component, OnInit, Input } from '@angular/core';
import { ResponseArea } from '../ResponseArea';
import { Emergency } from '../../models/Emergency';
import { EmergencyService } from '../../services/emergency.service';
@Component({
  selector: 'app-emergencies',
  templateUrl: './emergencies.component.html',
  styleUrls: ['./emergencies.component.css']
})
export class EmergenciesComponent implements OnInit {
  @Input() respArea: ResponseArea;
  emergencies: Emergency[];
  constructor(private emergencyService: EmergencyService) { }

  ngOnInit() {
    console.log(this.respArea);
    
    this.emergencies = this.emergencyService.getAllEmergencies()
      .filter((emergency:Emergency) => {
        emergency.responseAreaId === this.respArea.id;
      });

  }
}
