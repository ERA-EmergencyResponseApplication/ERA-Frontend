export class Emergency {
    id:number;
    type: string;
    coordinates: {
        lat: any;
        lon: any;
    };
    location_description: string;
    start_datetime: string;
    end_datetime: string;
    creatorId: number;
    responseAreaId: number;

    constructor(type: string, coordinates: any, location: string, 
        startDate: string, endDate: string, creatorId: number, respAreaId: number, id?:number) {
        this.type = type;
        this.location_description = location;
        this.start_datetime = startDate;
        this.end_datetime = endDate;
        this.creatorId = creatorId;
        this.responseAreaId = respAreaId;
        this.id = id;
    }
}
