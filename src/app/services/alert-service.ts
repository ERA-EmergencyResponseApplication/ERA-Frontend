import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable()
export class AlertService {

  success = false;
  AlertMsg: string;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  msg(alert: string) {
    this.success = true;
    //this.change.emit(this.success);
    this.AlertMsg = alert;
  }

}
