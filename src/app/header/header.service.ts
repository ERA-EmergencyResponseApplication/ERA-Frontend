import { Http, RequestOptions } from "@angular/http";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class HeaderService {
    constructor(private http: Http) {

    }

    loginWithCredentials(email: string, password: string) {
        let model = { "email": email, "password": password };
        let headers: Headers = new Headers({ 'Content-Type': 'application/json' });
        let options: RequestOptions = new RequestOptions({ headers: headers });
        let promise = new Promise((resolve, reject) => {
            let apiUrl = 'https://eraapi.brandoncodes.com/api/Responders/login';
            this.http.post(apiUrl, options)
                .toPromise()
                .then(res => {
                    console.log(res);
                    resolve();
                });
        });

        return promise;
    }
}