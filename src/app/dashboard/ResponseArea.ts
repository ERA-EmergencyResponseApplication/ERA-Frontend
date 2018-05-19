import { Emergency } from './emergencies/emergency/Emergency';
import { Responder } from './Responder';

export class ResponseArea {
  id: number;
  name: string;
  description: string;
  coordinates: {
    lat: any;
    lon: any;
  };
  address: string;
  city: string;
  state: string;
  zip: string;
  ownerId: string;

  constructor(name: string, description: string, coordinates: any, address: string, city: string, state: string,
    zip: string, ownerId: string, id?: number) {
    this.name = name;
    this.description = description;
    this.coordinates = this.coordinates;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.ownerId = ownerId;
    this.id = id;
  }

  // public addAdminToEmergency(responder: Responder) {
  //   this.admins.push(responder);
  // }

  // public addSubscriberToEmergency(responder: Responder) {
  //   this.subscribers.push(responder);
  // }

  // public addEmergency( emergency: Emergency ) {
  //   this.emergencies.push(emergency);
  // }
}
