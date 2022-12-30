import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  url = 'http://localhost:8080/course/';
  

  editcourse: Course = {
    id: null,
    title: '',
    institution: '',
    start: '',
    end: '',
  };

  constructor(private httpClient: HttpClient) {}

  public list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.url + 'list');
  }

  public viewCourse(id: number) {
    // dynamic data `...` IMP!!!
    return this.httpClient.get<Course>(this.url + `view/${id}`);
  }

  public addCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(this.url + 'create', course);
  }

  // previous method

  public updateCourse(course:Course):Observable<any>{
    return this.httpClient.put<any>(this.url+'edit', course);
  }

  public deleteCourse(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
  public updateCourseById(id: number, course: Course) {
    return this.httpClient.put<any>(this.url + `edit/${id}`, course);
  }
}
