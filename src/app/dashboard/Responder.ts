import { ResponseArea } from './ResponseArea';

export class Responder {
  cellNumber: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  responseAreas: ResponseArea[] = [];
  password: string;
  id: number;


  constructor(
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    responseAreas: any,
    email: string,
    cellNumber: string,
    id: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.cellNumber = cellNumber;
    this.responseAreas = responseAreas;
    this.password = password;
    this.id = id;
  }

  public addResponseArea(responseArea: ResponseArea) {
    this.responseAreas.push(responseArea);
  }
}
