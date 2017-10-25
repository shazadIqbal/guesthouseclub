import { guesthouselist } from './../manage-guesthouse/manage-guesthouse.component';
import { mghService } from './../manage-guesthouse/manageguestHouseService';

import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-guest-house',
  templateUrl: './view-guest-house.component.html',
  styleUrls: ['./view-guest-house.component.css']
})
export class ViewGuestHouseComponent implements OnInit {
  ghdetails :any= [];
  details;
  id:number;
  constructor(
    private _mghService : mghService,
    private route : ActivatedRoute) { }

  ngOnInit() {  
     this.route.params.subscribe(params=>{
        this.id = +params['id'];
      
    });
    this._mghService.getghView().then(res => {
      this.ghdetails = res;
      //console.log(res[this.id]);
      console.log(this.ghdetails);
      console.log(this.details = this.ghdetails[this.id ]);
    });
    
  }

 
}
