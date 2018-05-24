export class UserResponse {
    status: string;
    id: number;
    emergencyId: number;
    responderId: number;

    constructor(status: string, eId: number, rId: number, id?: number) {
        this.status = status;
        this.emergencyId = eId;
        this.responderId = rId;
        this.id = id;
    }
}
