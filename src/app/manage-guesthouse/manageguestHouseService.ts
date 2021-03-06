import { Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class mghService{

    
    private url:string = 'http://localhost:8080/guesthouse/getAll';
    private url_view = 'assets/ghview.json';
    constructor(private _http:Http){
       
        }
    getghlist(){
        return this._http.get(this.url).map((res : Response)=> res.json() );
    }
    getghView(){
        return this._http.get(this.url_view).map((res : Response)=> res.json()).toPromise();
    }
}