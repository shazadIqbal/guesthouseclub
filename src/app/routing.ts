import { AddSliderComponent } from './add-slider/add-slider.component';
import { ViewSliderComponent } from './view-slider/view-slider.component';
import { ViewGuestHouseComponent } from './view-guest-house/view-guest-house.component';
import { ManageGuesthouseComponent } from './manage-guesthouse/manage-guesthouse.component';
import { GuestHouseComponent } from './guest-house/guest-house.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
// import { CurrencyComponent } from "./currency/currency.component";
// import { WeatherComponent } from "./weather/weather.component";
// import { MovieComponent } from "./movie/movie.component";
const NAV_MENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'viewslider', component:ViewSliderComponent },    
    { path: 'manageguesthouse', component: ManageGuesthouseComponent },
     { path: 'addguesthouse', component: GuestHouseComponent },
     { path: 'viewghdetails/:id', component: ViewGuestHouseComponent },
     { path: 'addslider', component: AddSliderComponent },
     
];
export const CONST_ROUTING = RouterModule.forRoot(NAV_MENU_ROUTES);