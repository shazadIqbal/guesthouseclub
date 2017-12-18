import { AddSliderComponent } from './add-slider/add-slider.component';
import { Http,JsonpModule } from '@angular/http';
import { CONST_ROUTING } from './routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuestHouseComponent } from './add-guest-house/guest-house.component';
import { ManageGuesthouseComponent } from './manage-guesthouse/manage-guesthouse.component';
import {HttpModule} from '@angular/http';
import { ViewGuestHouseComponent } from './view-guest-house/view-guest-house.component';
import { ViewSliderComponent } from './view-slider/view-slider.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    DashboardComponent,
    GuestHouseComponent,
    ManageGuesthouseComponent,
    ViewGuestHouseComponent,
    ViewSliderComponent,AddSliderComponent
  ],
  imports: [
    BrowserModule,DataTablesModule,HttpModule,ReactiveFormsModule,CONST_ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
