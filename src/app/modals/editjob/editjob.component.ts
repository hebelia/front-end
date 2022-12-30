import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-editjob',
  templateUrl: './editjob.component.html',
  styleUrls: ['./editjob.component.css'],
})
export class EditjobComponent implements OnInit {
  form: FormGroup;

  constructor(public formBuilder: FormBuilder, public sJob: JobService) {
    // this.form = this.formBuilder.group({
    //   place: ['', [Validators.required]],
    //   title: ['', [Validators.required]],
    //   description: ['', [Validators.required]],
    //   start: ['', [Validators.required]],
    //   end: ['', [Validators.required]],
    // });
  }

  ngOnInit(): void {}

  refresh() {
    window.location.reload();
  }
  onUpdate(): void {
    this.sJob.updateJob(this.sJob.editjob).subscribe((info) => {
      this.sJob.editjob = info;
      alert('Se realizo la modificacion con exito');
    });
  }

  onSubmit(event: Event) {
    // detiene la propagacion o ejecucion del submit
    this.onUpdate();
    alert('El formulario ha sido enviado con exito!');
  }

  // get Place() {
  //   return this.form.get('place');
  // }
  // get Title() {
  //   return this.form.get('title');
  // }
  // get Description() {
  //   return this.form.get('description');
  // }
  // get Start() {
  //   return this.form.get('start');
  // }
  // get End() {
  //   return this.form.get('end');
  // }

  // get PlaceValid() {
  //   return this.Place?.touched && !this.Place.valid;
  // }
  // get TitleValid() {
  //   return this.Title?.touched && !this.Title.valid;
  // }
  // get DescriptionValid() {
  //   return this.Description?.touched && !this.Description.valid;
  // }
  // get StartValid() {
  //   return this.Start?.touched && !this.Start.valid;
  // }
  // get EndValid() {
  //   return this.End?.touched && !this.End.valid;
  // }
}
