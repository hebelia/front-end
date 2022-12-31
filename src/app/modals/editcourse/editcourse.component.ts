import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css'],
})
export class EditcourseComponent implements OnInit {
  constructor(public sCourse: CourseService) {}

  // methods
  ngOnInit(): void {}

  refresh() {
    window.location.reload();
  }
  // editcourse was initialized in the service, the same thing happens in every other component (job, profile, project, etc.)
  onUpdate(): void {
    this.sCourse.updateCourse(this.sCourse.editcourse).subscribe((info) => {
      this.sCourse.editcourse = info;
      alert('Se realizo la modificacion con exito');
    });
  }

  onSubmit(event: Event) {
    this.onUpdate();
    alert('El formulario ha sido enviado con exito!');
  }
}
