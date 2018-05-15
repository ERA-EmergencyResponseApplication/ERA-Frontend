import { ResponseArea } from "../ResponseArea";

export class EmergenciesService {

    public getEmergencies(respArea: ResponseArea) {
        return respArea.emergencies.slice();
    }
}