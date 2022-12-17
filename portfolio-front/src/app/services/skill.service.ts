import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{ Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
 
  url='http://localhost:8080/person/'

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.url +'list');
  }

  public viewSkill(id:number): Observable<Skill[]> {
    // dynamic data `...` IMP!!!
    return this.httpClient.get<Skill[]>(this.url + `view/${id}`);
  }

  public addSkill(skill:Skill): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', skill);
  }
  
  public deleteSkill(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.url +`delete/${id}`);
  }
  public updateSkill(skill:Skill): Observable<any>{
    return this.httpClient.put<any>(this.url+'edit', skill);
  }
  public updateSkillById(id:number, skill:Skill): Observable<any>{
    return this.httpClient.put<any>(this.url + `edit/${id}`, skill);
  }
}
