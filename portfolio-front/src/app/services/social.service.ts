import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{ Observable } from 'rxjs';
import { Social } from '../model/social';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
 
  url='http://localhost:8080/person/'

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Social[]> {
    return this.httpClient.get<Social[]>(this.url +'list');
  }

  public viewSocial(id:number): Observable<Social[]> {
    // dynamic data `...` IMP!!!
    return this.httpClient.get<Social[]>(this.url + `view/${id}`);
  }

  public addSocial(social:Social): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', social);
  }
  
  public deleteSocial(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.url +`delete/${id}`);
  }
  public updateSocial(social:Social): Observable<any>{
    return this.httpClient.put<any>(this.url+'edit', social);
  }
  public updateSocialById(id:number, social:Social): Observable<any>{
    return this.httpClient.put<any>(this.url + `edit/${id}`, social);
  }
}
