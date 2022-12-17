import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{ Observable } from 'rxjs';
import { Job } from '../model/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  url='http://localhost:8080/person/'

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(this.url +'list');
  }

  public viewJob(id:number): Observable<Job[]> {
    // dynamic data `...` IMP!!!
    return this.httpClient.get<Job[]>(this.url + `view/${id}`);
  }

  public addJob(job:Job): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', job);
  }
  
  public deleteJob(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.url +`delete/${id}`);
  }
  public updateJob(job:Job): Observable<any>{
    return this.httpClient.put<any>(this.url+'edit', job);
  }
  public updateJobById(id:number, job:Job): Observable<any>{
    return this.httpClient.put<any>(this.url + `edit/${id}`, job);
  } 
}
