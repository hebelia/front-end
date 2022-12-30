import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EducationComponent } from 'src/app/components/education/education.component';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css'],
})
export class EditcourseComponent implements OnInit {
  form: FormGroup;
  // editcourse: Course=null;

  constructor(public formBuilder: FormBuilder, public sCourse: CourseService) {
    // this.form= this.formBuilder.group({
    //   id:[''],
    //   title:['',[Validators.required]],
    //   institution:['',[Validators.required]],
    //   start: ['',[Validators.required]],
    //   end:['',[Validators.required]],
    // })
  }

  // methods
  ngOnInit(): void {
    // this.sCourse.viewCourse(this.form.id).
  }

  refresh() {
    window.location.reload();
  }
  onUpdate(): void {
    this.sCourse.updateCourse(this.sCourse.editcourse).subscribe((info) => {
      this.sCourse.editcourse = info;
      alert('Se realizo la modificacion con exito');
    });
  }

  

  onSubmit(event: Event) {
    // detiene la propagacion o ejecucion del submit
    this.onUpdate();
    alert('El formulario ha sido enviado con exito!');
  }

  // get Title() {
  //   return this.form.get('title');
  // }
  // get Institution() {
  //   return this.form.get('institution');
  // }
  // get Start() {
  //   return this.form.get('start');
  // }
  // get End() {
  //   return this.form.get('end');
  // }

  // get TitleValid() {
  //   return this.Title?.touched && !this.Title.valid;
  // }
  // get InstitutionValid() {
  //   return this.Institution?.touched && !this.Institution.valid;
  // }
  // get StartValid() {
  //   return this.Start?.touched && !this.Start.valid;
  // }
  // get EndValid() {
  //   return this.End?.touched && !this.End.valid;
  // }
}
