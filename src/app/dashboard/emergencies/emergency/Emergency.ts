export class Emergency {
    lat: any;
    lon: any;
    type: string;
    location: string;
    startDate: Date;

    constructor(lat: any, lon: any, type: string, location: string, startDate: Date) {
        this.lat = lat;
        this.lon = lon;
        this.type = type;
        this.location = location;
        this.startDate = startDate;
    }
}
