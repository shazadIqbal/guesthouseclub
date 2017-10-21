import { Http, Response } from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class mghService{
    private url:string = 'assets/ghlist.json';
    private url_view = 'assests/ghview.json';
    constructor(private _http:Http){
       
    }
    getghlist(){
        return this._http.get(this.url).map((res: Response)=> res.json());
    }
    getghView(){
        return this._http.get(this.url_view).map((res : Response)=> res.json());
    }
}