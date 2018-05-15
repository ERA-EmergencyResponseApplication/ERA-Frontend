import { Emergency } from "./emergencies/Emergency";
import { Responder } from "./Responder";

export class ResponseArea {
    name: string;
    lat: any;
    lon: any;
    description: string;
    emergencies: Emergency[] = [];
    ownedBy: Responder;
    admins: Responder[] = [];
    subscribers: Responder[] = [];

    constructor(name: string, lat: any, lon: any, description: string, owner: Responder) {
        this.name = name;
        this.lat = lat;
        this.lon = lon;
        this.description = description;
        this.ownedBy = owner;
    }

    public addAdminToEmergency(responder: Responder) {
        this.admins.push(responder);
    }

    public addSubscriberToEmergency(responder: Responder) {
        this.subscribers.push(responder);
    }

    public addEmergency( emergency : Emergency ) {
        this.emergencies.push(emergency);
    }
}