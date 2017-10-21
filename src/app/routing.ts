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
   { path: 'manageguesthouse', component: ManageGuesthouseComponent },
     { path: 'addguesthouse', component: GuestHouseComponent },
     { path: 'viewghdetails/:id', component: ViewGuestHouseComponent },
     
];
export const CONST_ROUTING = RouterModule.forRoot(NAV_MENU_ROUTES);