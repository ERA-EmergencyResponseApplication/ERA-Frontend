import { environment } from '../../environments/environment';

export default {
  login: () => `${environment.url}/Responders/login`,
  createResponseArea: () => `${environment.url}/ResponseAreas`,
  getResponseAreas: () => `${environment.url}/ResponseAreas`,
  getEmergencies: (respAreaId: number) => `${environment.url}/ResponseAreas/${respAreaId}/emergencies`,
  createEmergency: () => `${environment.url}/Emergencies`,
  getResponseAreasOfSubscriber : (responderId: number) => `${environment.url}/Responders/${responderId}/subscriptions`,
  getEmergenciesArea: (respAreaId: number) => `${environment.url}/ResponseAreas/${respAreaId}/emergencies`,
  addSubscriberToResponseArea: (responseAreaId: number, responderId: number) => `${environment.url}/ResponseAreas/
    ${responseAreaId}/subscribers/rel/${responderId}`,
 createUser: () => `${environment.url}/Responders`
};
