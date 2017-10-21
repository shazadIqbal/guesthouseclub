import { Component } from '@angular/core';
import {mghService} from './manage-guesthouse/manageguestHouseService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[mghService]
})
export class AppComponent {
  title = 'app';
}
