import { SendObjectService } from './add-guest-house/OBJservice';
import { Component } from '@angular/core';
import {mghService} from './manage-guesthouse/manageguestHouseService';
import {ImageService} from'./view-slider/IMGservice';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[mghService,ImageService,SendObjectService ]
})
export class AppComponent {
  title = 'app';
}
