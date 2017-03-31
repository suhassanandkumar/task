"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_service_1 = require("../services/user.service");
var county_service_1 = require("../services/county.service");
require("rxjs/add/operator/map");
var UserComponent = (function () {
    function UserComponent(userService, countyservice) {
        this.userService = userService;
        this.countyservice = countyservice;
        this.title = 'List Users';
    }
    UserComponent.prototype.ngOnInit = function () {
        // this.getAllCounties();
        this.getUsers();
    };
    UserComponent.prototype.getAllCounties = function () {
        var _this = this;
        this.countyservice.getCounties()
            .subscribe(function (counties) {
            _this.counties = counties;
            console.log('this.counties=' + _this.counties);
            console.log('this.counties.length=' + _this.counties.length);
            console.log('this.counties[0].name=' + _this.counties[0].name);
        }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            console.log('this.users=' + _this.users);
            console.log('this.users.length=' + _this.users.length);
            console.log('this.users[0].firstName=' + _this.users[0].name);
        }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user-app',
        templateUrl: "./user.component.html"
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, county_service_1.CountyService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map