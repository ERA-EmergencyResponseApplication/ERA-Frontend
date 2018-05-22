import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Emergency } from '../../../models/Emergency';
import { ResponseArea } from '../../ResponseArea';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent implements OnInit {
  @Input() emergency: Emergency;
  @Input() responseArea: ResponseArea;
  startDate: string;
  startTime: string;
  constructor() { }

  ngOnInit() {
    const dateTime: Date = new Date(this.emergency.start_datetime);
    this.startDate = new Date(this.emergency.start_datetime).toLocaleDateString();
    this.startTime = new Date(this.emergency.start_datetime).toLocaleTimeString();
  }
}
