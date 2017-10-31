import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class UserService {

  private url: string = "http://localhost:8080/";

  constructor(private http: Http) { }

  getUsers(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getUser(id){
    return this.http.get(this.getUserUrl(id))
      .map(res => res.json());
  }

  verifyUser(user){
      let headers = new Headers();
      headers.append("Authorization", "Basic " + btoa(user.userName + ":" + user.password)); 
      headers.append("Content-Type", "application/x-www-form-urlencoded");

     return this.http.get(this.url+"login",{ headers: headers })
      .map(res => res.json());
  }

  registerUser(user){
    return this.http.post(this.url+user.type.toLowerCase(), JSON.stringify(user),options)
      .map(res => res.json());
  }



  updateUser(user){
    return this.http.put(this.getUserUrl(user.id), JSON.stringify(user),options)
      .map(res => res.json());
  }

  deleteUser(id){
    return this.http.delete(this.getUserUrl(id))
      .map(res => res.json());
  }

  private getUserUrl(id){
    return this.url + "/" + id;
  }
}
