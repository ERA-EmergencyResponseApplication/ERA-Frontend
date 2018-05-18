import { ResponseArea } from '../app/dashboard/ResponseArea';
import { Responder } from '../app/dashboard/Responder';
import { asyncData } from './async-observable-helpers';

export class ResponseAreaServiceSpy {
  responseArea = new ResponseArea('Liberty center', '72.5', '74.5', 'Liberty center mall in ohio',
  new Responder('123-123-1234', 'first 1', 'last 1', []));

  responseAreas: ResponseArea[] = [this.responseArea];

  getResponseAreas = jasmine.createSpy('getResponseAreas').and.callFake(
    () => asyncData(Object.assign({}, this.responseAreas))
  );
}
