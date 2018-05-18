import { Http, RequestOptions } from "@angular/http";
import { Inject, Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { Responder } from "../dashboard/Responder";

@Injectable()
export class HeaderService {
    constructor(private http: Http) {

    }

    loginWithCredentials(email: string, password: string) {
        let model = { "email": email, "password": password };
        this.http.post('https://eraapi.brandoncodes.com/api/Responders/login', model).subscribe(
            (val) => {
                console.log('val', val);

            },
            response => {
                console.log('response', response);
            }
        )
    }
}