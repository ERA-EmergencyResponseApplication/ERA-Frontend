import { ResponseArea } from './ResponseArea';
import { Responder } from './Responder';

export class ResponseAreaService {
    responseArea: ResponseArea[] = [];

    constructor() {

        this.responseArea.push( new ResponseArea( 'Liberty center', '72.5', '74.5',
        'Liberty center mall in ohio', new Responder('123-123-1234', 'first 1', 'last 1', [])));
    }
}
