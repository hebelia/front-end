import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css'],
})
export class AddcourseComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sCourse: CourseService
  ) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      institution: ['', [Validators.required]],
      start: ['', [Validators.required]],
      end: ['', [Validators.required]],
    });
  }
  // methods
  ngOnInit(): void {}

  onCreate(): void {
    this.sCourse.addCourse(this.form.value).subscribe((info) => {
      alert('Datos añadidos');
      window.location.reload();
    });
  }
  refresh() {
    window.location.reload();
  }

  clear(): void {
    this.form.reset();
  }

  onSubmit(event: Event) {
    // detiene la propagacion o ejecucion del submit
    event.preventDefault;
    if (this.form.valid) {
      // llamar al servicio para enviar datos al server
      // logica extra
      this.onCreate();
      alert('El formulario ha sido enviado con exito!');
    } else {
      this.form.markAllAsTouched();
      alert(
        'Se produjo un error al enviar el formulario! Revise los datos ingresados.'
      );
    }
  }

  get Title() {
    return this.form.get('title');
  }
  get Institution() {
    return this.form.get('institution');
  }
  get Start() {
    return this.form.get('start');
  }
  get End() {
    return this.form.get('end');
  }

  get TitleValid() {
    return this.Title?.touched && !this.Title.valid;
  }
  get InstitutionValid() {
    return this.Institution?.touched && !this.Institution.valid;
  }
  get StartValid() {
    return this.Start?.touched && !this.Start.valid;
  }
  get EndValid() {
    return this.End?.touched && !this.End.valid;
  }
}
