import { Injectable } from "@angular/core";
import AbstractService from "./abstract.service";
import endpoints from "../config/endpoints";
import { Emergency } from "../models/Emergency";

@Injectable()
export class EmergencyService extends AbstractService {
    private _emergency: Emergency;
    constructor() {
        super();
      }

      createEmergency(emergency: Emergency) {
        return this.$post(endpoints.createEmergency(), emergency).bind(this)
          .then((response) => {
            console.log(response);
          });
      }
    
    //   createResponseArea(responseArea: ResponseArea) {
    //     return this.$post(endpoints.createResponseArea(), responseArea).bind(this)
    //       .then((response) => {
    //         console.log(response);
    //       });
    //   }
    
      getEmergencies(respAreaId: number) {
        return this.$get(endpoints.getEmergencies(respAreaId)).bind(this);
      }

      getAllEmergencies() {
        return this.$get(endpoints.getAllEmergencies()).bind(this);
      }
}