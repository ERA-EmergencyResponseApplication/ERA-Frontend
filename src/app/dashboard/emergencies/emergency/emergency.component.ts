import { Component, OnInit, Input } from '@angular/core';
import { Emergency } from '../../../models/Emergency';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent implements OnInit {
  @Input() emergency: Emergency;
  constructor() { }

  ngOnInit() {
  }
}