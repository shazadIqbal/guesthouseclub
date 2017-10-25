import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map' ;

@Injectable()
export class ImageService  {

constructor(private _http:Http){}

getImages(){
  return[
      {id:"1",title:"nature",url:"https://images.pexels.com/photos/34950/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb",orderid:"1"},
      {id:"2",title:"train",url:"https://static.pexels.com/photos/596148/pexels-photo-596148.jpeg",orderid:"2"},
      {id:"3",title:"new Train",url:"https://coinjournal.net/wp-content/uploads/2016/07/Rootstock-Sidechains-696x464.png",orderid:"3"}
  ]
}
getImagesFromHTTP(){
      return this._http.get('assets/images.json').map((res:Response)=>res.json()); 
    }
}