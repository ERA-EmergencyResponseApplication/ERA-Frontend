import { ResponseArea } from '../app/dashboard/ResponseArea';
import { Responder } from '../app/dashboard/Responder';
import { Emergency } from '../app/dashboard/emergencies/emergency/Emergency';
import { asyncData } from './async-observable-helpers';

export class EmergenciesServiceSpy {
  responseArea = new ResponseArea('Liberty center', '72.5', '74.5', 'Liberty center mall in ohio', 'Address1', 'City1', 'State1', 'Zip1',
  new Responder('First', 'Last', 'username', 'Cincinnati', 'abc@xyz.com', '111-111-1112'), 1);

  emergency = new Emergency('72.5', '74.5', 'Medical', 'West Chester', new Date('2017-10-10'));
  emergencies: Emergency[] = [this.emergency];

  getEmergencies = jasmine.createSpy('getEmergencies').and.callFake(
    () => asyncData(Object.assign({}, this.emergencies))
  );
}
