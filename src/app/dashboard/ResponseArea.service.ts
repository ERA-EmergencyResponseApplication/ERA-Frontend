import { ResponseArea } from "./ResponseArea";
import { Responder } from "./Responder";
import { Emergency } from "./emergencies/Emergency";

export class ResponseAreaService {
    responseAreas: ResponseArea[] = [];

    constructor() {
    }

    public getResponseAreas(): ResponseArea[] {
        debugger;
        this.addMockData();
        this.addEmergencies();
        return this.responseAreas.slice();
    }

    //mock data generation
    private addEmergencies() {
        this.responseAreas.forEach((respArea: ResponseArea) => {
            respArea.addEmergency(new Emergency(respArea.lat, respArea.lon, "Fire",respArea.name,new Date()));
            respArea.addEmergency(new Emergency(respArea.lat,respArea.lon, "Medical", respArea.name,new Date()));
            respArea.addEmergency(new Emergency(respArea.lat,respArea.lon, "Rescue",respArea.name,new Date()));
        });
    }

    private addMockData() {
        this.responseAreas.push( new ResponseArea( "Liberty center", "72.5","74.5", 
        "Liberty center mall in ohio", new Responder("123-123-1234","first 1","last 1",[])));
        this.responseAreas.push( new ResponseArea( "ABCD center", "71.5","72.5", 
        "ABCD in ohio", new Responder("124-124-1234","first 2","last 2",[])));
        this.responseAreas.push( new ResponseArea( "XYZ center", "70.5","70.5", 
        "XYZ center mall in ohio", new Responder("125-125-1235","first 3","last 3",[])));
    }
}