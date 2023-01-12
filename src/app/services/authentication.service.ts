import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  url = 'https://backend-zgct.onrender.com/person/auth/login';
  currentUserSubject: BehaviorSubject<any>;
  sessionStorage: any;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }

  login(credentials:any):Observable<any>{
    console.log(credentials);
    var httpOptions = {
      headers: new HttpHeaders
      ({'Content-Type': 'application/json'}),
    }
    return this
    .http
    .post<any>(this.url, credentials, httpOptions)
    .pipe(map(info=>{
      sessionStorage
      .setItem('currentUser', JSON.stringify(info));
      this.currentUserSubject.next(info);
      console.log("authentication service running..." + JSON.stringify(info));
      return info;
    }));
  
  }
  get authUser(){
    return this.currentUserSubject.value;
  }
// edit
  public logout():void{
    window.sessionStorage.clear();
  }
}


