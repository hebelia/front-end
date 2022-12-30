import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css'],
})
export class EditprojectComponent implements OnInit {
  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public sProject: ProjectService
  ) {
    // this.form= this.formBuilder.group({
    //   url: ['',[Validators.required]],
    //   title:['',[Validators.required]],
    //   description:['',[Validators.required]],
    //   start: ['',[Validators.required]],
    //   end:['',[Validators.required]],
    // })
  }
  // methods
  ngOnInit(): void {}

  refresh() {
    window.location.reload();
  }
  onUpdate(): void {
    this.sProject.updateProject(this.sProject.editproject).subscribe((info) => {
      this.sProject.editproject = info;
      alert('Se realizo la modificacion con exito');
    });
  }

  onSubmit(event: Event) {
    // detiene la propagacion o ejecucion del submit
    this.onUpdate();
    alert('El formulario ha sido enviado con exito!');
  }

  // get Url() {
  //   return this.form.get('url');
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

  // get UrlValid() {
  //   return this.Url?.touched && !this.Url.valid;
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
