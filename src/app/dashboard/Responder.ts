import { ResponseArea } from './ResponseArea';

export class Responder {
    cellNumber: string;
    firstName: string;
    lastName: string;
    responseAreas: ResponseArea[] = [];

    constructor(phone: string, firstName: string, lastName: string, respArea: ResponseArea[]) {
        this.cellNumber = phone;
        this.firstName = firstName;
        this.lastName = lastName;
        this.responseAreas = respArea;
    }

    public addResponseArea(responseArea: ResponseArea) {
        this.responseAreas.push(responseArea);
    }
}
