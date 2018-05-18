import { ResponseArea } from './ResponseArea';
import { Responder } from './Responder';
import { Emergency } from './emergencies/emergency/Emergency';

export class ResponseAreaService {
    responseAreas: ResponseArea[] = [];

  constructor() {}

    public getResponseAreas(): ResponseArea[] {
        this.addMockData();
        this.addEmergencies();
        return this.responseAreas.slice();
    }

    // mock data generation
    private addEmergencies() {
        this.responseAreas.forEach((respArea: ResponseArea) => {
            respArea.addEmergency(new Emergency(respArea.lat, respArea.lon, 'Fire', respArea.name, new Date()));
            respArea.addEmergency(new Emergency(respArea.lat, respArea.lon, 'Medical', respArea.name, new Date()));
            respArea.addEmergency(new Emergency(respArea.lat, respArea.lon, 'Rescue', respArea.name, new Date()));
        });
    }

  private addMockData() {
    this.responseAreas = [];
        this.responseAreas.push( new ResponseArea( 'Liberty center', '72.5', '74.5',
          'Liberty center mall in ohio', new Responder('first1', 'last1', 'user1', 'rArea1', 'email1', 'phone1')));
        this.responseAreas.push( new ResponseArea( 'ABCD center', '71.5', '72.5',
          'ABCD in ohio', new Responder('first2', 'last2', 'user2', 'rArea2', 'email2', 'phone2')));
        this.responseAreas.push( new ResponseArea( 'XYZ center', '70.5', '70.5',
          'XYZ center mall in ohio', new Responder('first3', 'last3', 'user3', 'rArea3', 'email3', 'phone3')));
    }
}
