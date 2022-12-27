import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit{

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private sProject:ProjectService ){ 
  
    this.form= this.formBuilder.group({

      url: ['',[Validators.required]],
      title:['',[Validators.required]],
      description:['',[Validators.required]],
      start: ['',[Validators.required]],
      end:['',[Validators.required]],
      
    })
  }
  
  ngOnInit() {}
  
  onCreate(): void {
    this.sProject.addProject(this.form.value).subscribe((info) => {
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

// methods
  
  get Url(){
    return this.form.get("url")
  }
  get Title(){
    return this.form.get("title")
  }
  get Description(){
    return this.form.get("description")
  }
  get Start(){
    return this.form.get("start")
  }
  get End(){
    return this.form.get("end")
  }

  get UrlValid(){

    return this.Url?.touched && !this.Url.valid;

  }
  get TitleValid(){

    return this.Title?.touched && !this.Title.valid;

  }
  get DescriptionValid(){

    return this.Description?.touched && !this.Description.valid;

  }
  get StartValid(){

    return this.Start?.touched && !this.Start.valid;

  }
  get EndValid(){

    return this.End?.touched && !this.End.valid;

  }
  }
  
