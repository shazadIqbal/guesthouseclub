import { guesthouselist } from './../manage-guesthouse/manage-guesthouse.component';
import { mghService } from './../manage-guesthouse/manageguestHouseService';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-guest-house',
  templateUrl: './view-guest-house.component.html',
  styleUrls: ['./view-guest-house.component.css']
})
export class ViewGuestHouseComponent implements OnInit {
  ghdetails : guesthouselist[];
  id:number;
  constructor(
    private _mghService : mghService,
    private route : ActivatedRoute) { }

  ngOnInit() {  
     this.route.params.subscribe(params=>{
        this.id = +params['id'];
    });
    this._mghService.getghlist().subscribe(res => this.ghdetails = res);
    
  }
  

}
