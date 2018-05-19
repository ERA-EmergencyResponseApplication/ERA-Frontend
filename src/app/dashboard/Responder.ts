import { ResponseArea } from './ResponseArea';

export class Responder {
  cellNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  responseArea: string;
  responseAreas: ResponseArea[] = [];
  password: string;


  constructor(firstName: string, lastName: string, respArea: string, email: string, phone: string, password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.cellNumber = phone;
    this.responseArea = respArea;
    this.password = password;
  }

  public addResponseArea(responseArea: ResponseArea) {
    this.responseAreas.push(responseArea);
  }
}
