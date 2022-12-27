import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{ Observable } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  url='http://localhost:8080/course/'

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.url +'list');
  }

  public viewCourse(id:number): Observable<Course> {
    // dynamic data `...` IMP!!!
    return this.httpClient.get<Course>(this.url + `view/${id}`);
  }

  public addCourse(course:Course): Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', course);
  }
    
  public updateCourse(course:Course): Observable<any>{
    return this.httpClient.put<any>(this.url+'edit', course);
  }

  public deleteCourse(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.url +`delete/${id}`);
  }
  public updateCourseById(id:number, course:Course){
    return this.httpClient.put<any>(this.url + `edit/${id}`, course);
  } 


}

