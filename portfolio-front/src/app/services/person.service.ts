import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{ Observable } from 'rxjs';

import { Person } from '../model/person';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url='http://localhost:8080/person/'

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.url +'list');
  }

  public viewPerson(id:number): Observable<Person[]> {
    // dynamic data `...` IMP!!!
    return this.httpClient.get<Person[]>(this.url + `view/${id}`);
  }

  public addPerson(person:Person): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', person);
  }
  
  public deletePerson(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.url +`delete/${id}`);
  }
  public updatePerson(person:Person): Observable<any>{
    return this.httpClient.put<any>(this.url+'edit', person);
  }
  public updatePersonById(id:number, person:Person): Observable<any>{
    return this.httpClient.put<any>(this.url + `edit/${id}`, person);
  }
}
