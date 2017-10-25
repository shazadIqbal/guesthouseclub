import { ImageService } from './IMGservice';
import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-view-slider',
  templateUrl: './view-slider.component.html',
  styleUrls: ['./view-slider.component.css']
})
export class ViewSliderComponent implements OnInit {
  images = [];
  imagesFromServer=[];
  constructor(private _imgService: ImageService) { }

  ngOnInit() {  
    this.images=this._imgService.getImages(); // from hardcoded
    
    this._imgService.getImagesFromHTTP()
    .subscribe(respImages=>this.imagesFromServer=respImages);
  }

}
