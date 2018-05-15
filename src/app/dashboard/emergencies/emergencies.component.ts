import { Component, OnInit, Input } from '@angular/core';
import { ResponseArea } from '../ResponseArea';
import { EmergenciesService } from './emergencies.service';
import { Emergency } from './emergency/Emergency';
@Component({
  selector: 'app-emergencies',
  templateUrl: './emergencies.component.html',
  styleUrls: ['./emergencies.component.css']
})
export class EmergenciesComponent implements OnInit {
  @Input() respArea: ResponseArea;
  emergencies: Emergency[];
  constructor(private emergenciesService: EmergenciesService) { }

  ngOnInit() {
    console.log(this.respArea);
    this.emergencies = this.emergenciesService.getEmergencies(this.respArea);
  }
}
