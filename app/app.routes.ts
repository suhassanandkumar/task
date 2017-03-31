import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from "./usercomponent/user.component";
import { CountyComponent } from "./countycomponent/county.component";
import { AppComponent } from "./app.component";



const routes: Routes = [
    { path: '', component: AppComponent },
   // { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: '/users', component: UserComponent },
    { path: '/counties', component: CountyComponent },
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);