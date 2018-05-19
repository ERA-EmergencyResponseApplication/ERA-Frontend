import { environment } from '../../environments/environment';

export default {
  login: () => `${environment.url}/Responders/login`,
  signup: () => `${environment.url}/Responders`,
  createResponseArea: () => `${environment.url}/ResponseAreas`,
  getResponseAreas: () => `${environment.url}/ResponseAreas`
};
