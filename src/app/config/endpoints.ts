import { environment } from '../../environments/environment';
import { ResponseArea } from '../dashboard/ResponseArea';

export default {
  login: () => `${environment.url}/Responders/login`,
  signup: () => `${environment.url}/Responders`,
  signout: () => `${environment.url}/Responders/logout`,
  createResponseArea: () => `${environment.url}/ResponseAreas`,
  getResponseAreas: () => `${environment.url}/ResponseAreas`,
  getEmergencies: (respAreaId: number) => `${environment.url}/ResponseAreas/${respAreaId}/emergencies`,
  createEmergency: () => `${environment.url}/Emergencies`,
  getResponseAreasOfSubscriber : (responderId: number) => `${environment.url}/Responders/${responderId}/subscriptions`,
  getEmergenciesArea: (respAreaId: number) => `${environment.url}/ResponseAreas/${respAreaId}/emergencies`,
  addSubscriberToResponseArea: (responseAreaId: ResponseArea, responderId: number) => `${environment.url}/ResponseAreas/
    ${responseAreaId}/subscribers/rel/${responderId}`,
  createUser: () => `${environment.url}/Responders`,
  getUser: (responderId)  => `${environment.url}/Responders/${responderId}`,
  updateUser: (responderId) => `${environment.url}/Responders/${responderId}`,
  getEmergency: (emergencyId: number) => `${environment.url}/Emergencies/` + emergencyId,
  getResponseArea: (respAreaId: number) => `${environment.url}/ResponseAreas/` + respAreaId,
  getRespondersCount: (emergencyId: number) => `${environment.url}/Emergencies/${emergencyId}/emergencyResponses/count`,
  getEmergencyResponseByUser: (emergencyId, responderId) => `${environment.url}/Emergencies/` +
  `${emergencyId}/emergencyResponses?filter={"where":{"responderId":` + `${responderId}}}`,
  createEmergencyResponse: (emergencyId) => `${environment.url}/Emergencies/${emergencyId}/emergencyResponses`,
  updateEmergencyResponse: (emergencyId, rId) => `${environment.url}/Emergencies/${emergencyId}/emergencyResponses/${rId}`
};
