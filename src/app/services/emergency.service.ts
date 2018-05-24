import { Injectable } from '@angular/core';
import AbstractService from './abstract.service';
import endpoints from '../config/endpoints';
import { Emergency } from '../models/Emergency';
import { UserResponse } from '../models/UserResponse';

@Injectable()
export class EmergencyService extends AbstractService {
    private _emergency: Emergency;
    constructor() {
        super();
      }

    createEmergency(emergency: Emergency) {
      return this.$post(endpoints.createEmergency(), emergency).bind(this);
    }

    getEmergencies(respAreaId: number) {
      return this.$get(endpoints.getEmergencies(respAreaId)).bind(this);
    }

    getAllEmergencies(respAreaId: number): Emergency[] {
      const emergencies: Emergency[] = [];
      this.$get(endpoints.getEmergenciesArea(respAreaId)).bind(this)
      .then((response) => {
        if (response.data) {
            response.data.forEach((element: Emergency) => {
            emergencies.push(element);
          });
        }
      });
      return emergencies;
    }

    getEmergency(emergencyId: number) {
      return this.$get(endpoints.getEmergency(emergencyId)).bind(this);
    }

    updateEmergency(emergencyId: number, emergency: Emergency) {
      return this.$put(endpoints.getEmergency(emergencyId), emergency).bind(this);
    }

    getEmergencyResponderCount(id: number) {
      return this.$get(endpoints.getRespondersCount(id)).bind(this);
    }

    getEmergencyResponseForUser(eId: number, rId: number) {
      return this.$get(endpoints.getEmergencyResponseByUser(eId, rId)).bind(this);
    }

    createResponse(eId: number, userResponse: UserResponse) {
      return this.$post(endpoints.createEmergencyResponse(eId), userResponse).bind(this);
    }

    updateResponse(eId: number, userResponse: UserResponse, rId: number) {
      return this.$put(endpoints.updateEmergencyResponse(eId, rId), userResponse).bind(this);
    }
}
