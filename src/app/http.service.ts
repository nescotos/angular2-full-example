import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, Response} from "@angular/http";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";


@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  public getRequest(){
    return new Observable(observable => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      this.http.get('http://192.168.0.11:3030/dog', {headers : headers}).map(res => res.json())
      .subscribe(res => {
        if(res.code == "404" || res.code == "500"){
          console.error('Brutal error');
        }else{
          observable.next(res);
        }
      });
    });
  }

  public postRequest(name:string, breed:string){
    return new Observable(observable => {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      this.http.post('http://192.168.0.11:3030/dog',JSON.stringify({name: name, breed: breed}) ,{headers : headers}).map(res => res.json())
      .subscribe(res => {
        if(res.code == "404" || res.code == "500"){
          console.error('Brutal error');
        }else{
          observable.next(res);
        }
      });
    });
  }

}
