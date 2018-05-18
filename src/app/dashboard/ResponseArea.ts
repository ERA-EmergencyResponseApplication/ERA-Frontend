import { Emergency } from './emergencies/emergency/Emergency';
import { Responder } from './Responder';

export class ResponseArea {
    name: string;
    lat: any;
    lon: any;
    description: string;
    id: number;
    emergencies: Emergency[] = [];
    ownedBy: Responder;
    admins: Responder[] = [];
    subscribers: Responder[] = [];

    constructor(name: string, lat: any, lon: any, description: string, owner: Responder, id: number) {
        this.name = name;
        this.lat = lat;
        this.lon = lon;
        this.description = description;
        this.ownedBy = owner;
        this.id = id;
    }

    public addAdminToEmergency(responder: Responder) {
        this.admins.push(responder);
    }

    public addSubscriberToEmergency(responder: Responder) {
        this.subscribers.push(responder);
    }

    public addEmergency( emergency: Emergency ) {
        this.emergencies.push(emergency);
    }
}
