import { ResponseArea } from '../app/dashboard/ResponseArea';
import { Responder } from '../app/dashboard/Responder';
import { asyncData } from './async-observable-helpers';
import { Emergency } from '../app/models/Emergency';

export class EmergenciesServiceSpy {
  responseArea = new ResponseArea('Liberty center', 'Liberty center mall in ohio', null, 'Address1', 'City1', 'State1', 'Zip1', '1');

  emergency = new Emergency('72.5', '74.5', 'Medical', 'West Chester', new Date('2017-10-10'));
  emergencies: Emergency[] = [this.emergency];

  getEmergencies = jasmine.createSpy('getEmergencies').and.callFake(
    () => asyncData(Object.assign({}, this.emergencies))
  );
}
