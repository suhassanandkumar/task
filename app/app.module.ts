import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";


import { AppComponent } from './app.component';
import { UserComponent } from './usercomponent/user.component';
import { CountyComponent } from "./countycomponent/county.component";
import { UserService } from './services/user.service';
import { CountyService } from './services/county.service';
import { routing } from "./app.routes";

@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    providers: [UserService, CountyService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    declarations: [AppComponent, UserComponent, CountyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
