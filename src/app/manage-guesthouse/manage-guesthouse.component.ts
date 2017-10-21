import { mghService } from './manageguestHouseService';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-manage-guesthouse',
  templateUrl: './manage-guesthouse.component.html',
  styleUrls: ['./manage-guesthouse.component.css']
})
export class ManageGuesthouseComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  ghlist:guesthouselist[] ;
  //dtTrigger: Subject<any> = new Subject();
  constructor(
    private router:Router,
    private _mghservice : mghService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
      
    };
   
    this._mghservice.getghlist().subscribe(resData => this.ghlist = resData);
  }

  event(e : guesthouselist):void{
    console.log("clicked "+e.id + " "+ e.name);
    this.router.navigate(['/viewghdetails',e.id]);
  }

}
export class guesthouselist{
  id:number;
  name:String;

}