import { ResponseArea } from './ResponseArea';

export class Responder {
  cellNumber: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  responseAreas: ResponseArea[] = [];
  password: string;
  id: number;


  constructor(
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    responseAreas: any,
    email: string,
    cellNumber: string,
    id: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
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
