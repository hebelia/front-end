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

  ngOnInit(): void {
    this.list();
  }
}
