import { ResponseArea } from './ResponseArea';

export class Responder {
  cellNumber: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  responseArea: string;
  responseAreas: ResponseArea[] = [];
  password: string;


  constructor(firstName: string, lastName: string, userName: string, respArea: string, email: string, phone: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.cellNumber = phone;
    this.responseArea = respArea;
  }

  public addResponseArea(responseArea: ResponseArea) {
    this.responseAreas.push(responseArea);
  }
}
