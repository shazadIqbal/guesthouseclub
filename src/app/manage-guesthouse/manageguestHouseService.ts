import { Http, Response } from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class mghService{
    private url:string = 'assets/ghlist.json';
    constructor(private _http:Http){
       
    }
    getghlist(){
        return this._http.get(this.url).map((res: Response)=> res.json());
    }
}