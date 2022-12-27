import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class ServiceService {
  // http = alias 

  constructor(private http:HttpClient) { }

  getService():Observable<any> {

    return this.http.get('./assets/db/db.json');

  }


}
