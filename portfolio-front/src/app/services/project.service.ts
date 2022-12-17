import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{ Observable } from 'rxjs';
import { Project } from '../model/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url='http://localhost:8080/person/'

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.url +'list');
  }

  public viewProject(id:number): Observable<Project[]> {
    // dynamic data `...` IMP!!!
    return this.httpClient.get<Project[]>(this.url + `view/${id}`);
  }

  public addProject(project:Project): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', project);
  }
  
  public deleteProject(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.url +`delete/${id}`);
  }
  public updateProject(project:Project): Observable<any>{
    return this.httpClient.put<any>(this.url+'edit', project);
  }
  public updateProjectById(id:number, project:Project): Observable<any>{
    return this.httpClient.put<any>(this.url + `edit/${id}`, project);
  } 
}
