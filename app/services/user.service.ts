import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Observable";


@Injectable()
export class UserService {
    usersList: User[];
    apiUrl: string = "api/customers";

    constructor(private _http: Http) { }

   getUsers(): Observable<User[]> {
       console.log('getUsers called');
      
       let users = this._http.get('../assets/users.json')

           .map(mapUser).catch(handleError);
       return users;
    }


}

function mapUser(response: Response): User[] {
    var jsonContent = JSON.parse(response.text());
    return jsonContent["users"];
}

function handleError(error:any){
    let errorMsg = error.message || "Error zhere";
    return Observable.throw(errorMsg);
}
