import { Http,Response } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SendObjectService{
    url :string= "http://localhost:8080/post";

constructor(private _http:Http){}

sendObj(obj : any){
    console.log(JSON.stringify(obj));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url,JSON.stringify(obj),options);
    }
}