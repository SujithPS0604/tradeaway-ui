import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers , withCredentials: true });

@Injectable()
export class SellerService {

  private url: string = "http://localhost:8080/";

  constructor(private http: Http) { }
 

  addItem(id,item){
    return this.http.post(this.url+"inventory", JSON.stringify(item),options)
      .map(res => res.json());
  }

  getItems(){
    return this.http.get(this.url+"item",options)
            .map(res => res.json());

  }

   
}
