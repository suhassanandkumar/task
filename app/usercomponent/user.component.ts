import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CountyService } from '../services/county.service';
import { User } from '../models/user';
import { County } from '../models/county';

import 'rxjs/add/operator/map';

@Component({
    selector: 'user-app',
    templateUrl: "./user.component.html"
})
export class UserComponent implements OnInit {



    users: User[];
    counties: County[];
    title = 'List Users';

    constructor(private userService: UserService, private countyservice: CountyService) { }

    ngOnInit(): void {
       // this.getAllCounties();
       this.getUsers();
    }

       getAllCounties(): void {
           this.countyservice.getCounties()
            .subscribe(
               counties => {
                   this.counties = counties;
                   console.log('this.counties=' + this.counties);
                   console.log('this.counties.length=' + this.counties.length);
                   console.log('this.counties[0].name=' + this.counties[0].name);
            }, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            })
    }

    getUsers(): void {
        this.userService.getUsers()
            .subscribe(
            users => {
                this.users = users;
                console.log('this.users=' + this.users);
                console.log('this.users.length=' + this.users.length);
                console.log('this.users[0].firstName=' + this.users[0].name);
            }, //Bind to view
            err => {
                // Log errors if any
                console.log(err);
            })
    }



}