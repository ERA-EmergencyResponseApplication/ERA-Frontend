import { environment } from '../../environments/environment';

export default {
  login: () => `${environment.url}/Responders/login`,
  createResponseArea: () => `${environment.url}/ResponseAreas`
};
