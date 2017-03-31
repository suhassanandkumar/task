import { Component, OnInit } from '@angular/core';
import { Config } from './config';
import { UserService } from './services/user.service';
import { User } from './models/user';
import 'rxjs/add/operator/map';



@Component({
    selector: 'my-app',
    templateUrl:"./app.component.html"
})
export class AppComponent {

 name = Config.API_END_POINT + "/values/5"

 users: User[];
 title = 'List Users';

 constructor() { }

 

 



}
