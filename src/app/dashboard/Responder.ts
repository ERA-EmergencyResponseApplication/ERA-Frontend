import { ResponseArea } from './ResponseArea';

export class Responder {
  cellNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  // responseAreas: any[];
  responseAreas: ResponseArea[] = [];
  password: string;


  constructor(firstName: string, lastName: string, password: string, responseAreas: any, email: string, cellNumber: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.cellNumber = cellNumber;
    this.responseAreas = responseAreas;
    this.password = password;
  }

  public addResponseArea(responseArea: ResponseArea) {
    this.responseAreas.push(responseArea);
  }
}
