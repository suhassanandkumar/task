import { Injectable } from '@angular/core';
import { County } from '../models/county';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Observable";


@Injectable()
export class CountyService {
    countiesList: County[];
    //apiUrl: string = "api/customers";

    constructor(private _http: Http) { }
    getCounties(): Observable<County[]> {
        console.log('getCounties called');

        let counties = this._http.get('../assets/county.json')
            .map(mapCounty).catch(handleError);
        return counties;
    }
}

function mapCounty(response: Response): County[] {
    var jsonContent = JSON.parse(response.text());
    return jsonContent["counties"];
}

function handleError(error: any) {
    let errorMsg = error.message || "Error here";
    return Observable.throw(errorMsg);
}
