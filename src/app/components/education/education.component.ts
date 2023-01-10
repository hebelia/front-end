import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  education: Course[] = [];
  isLogged: boolean;

  constructor(private sCourse: CourseService) {}
  // methods -> services
  list(): void {
    this.sCourse.list().subscribe((info) => {
      this.education = info;
    });
  }

  refresh() {
    window.location.reload();
  }

  delete(id: any): void {
    if (id) {
      this.sCourse.deleteCourse(id).subscribe((info) => {
        alert('Datos eliminados');
        this.list();
        this.refresh();
      });
    }
  }
  // method to obtain a specific id and send the information on that id to the edit modal
  viewCourse(id: number) {
    this.sCourse.viewCourse(id).subscribe((info) => {
      this.sCourse.editcourse = info;
    });
  }

  ngOnInit(): void {
    this.list();
    // method to hide and show the login button
    if (sessionStorage.getItem('currentUser') == 'null') {
      this.isLogged = false;
    } else if (sessionStorage.getItem('currentUser') == null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }
}
