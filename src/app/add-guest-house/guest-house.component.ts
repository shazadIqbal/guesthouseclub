import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms'
import {SendObjectService} from './OBJservice';

@Component({
  selector: 'app-guest-house',
  templateUrl: './guest-house.component.html',
  styleUrls: ['./guest-house.component.css']
})
export class GuestHouseComponent implements OnInit {

  myForm:FormGroup;
  obj : any;
  constructor(private _formBuilder :FormBuilder,private _objService: SendObjectService ) {
} 

ngOnInit() {
  this.myForm=this._formBuilder.group({
  guestHouseName:[],
//  guestHousePix:[],
  noOfRooms:[],
  ownerName:[],
  ownerNumber:[],
 
  guestHouseAddress:this._formBuilder.group({
    postalcode:[],  
    street:[], 
      city:[],
      
    }),
 })          
}
onSubmit(){
  this.obj=this.myForm.value;
  console.log(this.obj);
  this._objService.sendObj(this.obj);
}

}