import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-slider',
  templateUrl: './add-slider.component.html',
  styleUrls: ['./add-slider.component.css']
})
export class AddSliderComponent implements OnInit {
  src:any;
  constructor() { }

  ngOnInit() {}

  Change(event):void{
    if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.onload = (event:any) => {
      this.src = event.target.result;
    }

    reader.readAsDataURL(event.target.files[0]);
  
  }
  document.getElementById('image').style.visibility="hidden";  
}
  
  showImg():void{
    document.getElementById('image').style.visibility="visible";
  }
}
