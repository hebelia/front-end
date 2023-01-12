import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Person } from '../model/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  url = 'https://backend-zgct.onrender.com/person/';

  editprofile: Person = {
    id: null,
    fullname: '',
    title: '',
    pfp: '',
    about: '',
    banner: '',
    license: '',
    email: '',
    password: '',
  };
  constructor(private httpClient: HttpClient) {}

  public list(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.url + 'list');
  }

  public viewPerson(id: number) {
    // dynamic data `...` IMP!!!
    return this.httpClient.get<Person>(this.url + `view/${id}`);
  }

  public addPerson(person: Person): Observable<any> {
    return this.httpClient.post<any>(this.url + 'create', person);
  }

  public deletePerson(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
  public updatePerson(person: Person): Observable<any> {
    return this.httpClient.put<any>(this.url + 'edit', person);
  }
  public updatePersonById(id: number, person: Person): Observable<any> {
    return this.httpClient.put<any>(this.url + `edit/${id}`, person);
  }
  // authorization method
  // public login()
}
