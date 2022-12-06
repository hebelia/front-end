import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit{
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
  
    this.form= this.formBuilder.group({

      place: ['',[Validators.required]],
      title:['',[Validators.required]],
      institution:['',[Validators.required]],
      start: ['',[Validators.required]],
      end:['',[Validators.required]],
      
    })
  }
  
  ngOnInit() {}

// methods
  

  get Title(){
    return this.form.get("title")
  }
  get Institution(){
    return this.form.get("institution")
  }
  get Start(){
    return this.form.get("start")
  }
  get End(){
    return this.form.get("end")
  }

 
  get TitleValid(){

    return this.Title?.touched && !this.Title.valid;

  }
  get InstitutionValid(){

    return this.Institution?.touched && !this.Institution.valid;

  }
  get StartValid(){

    return this.Start?.touched && !this.Start.valid;

  }
  get EndValid(){

    return this.End?.touched && !this.End.valid;

  }

  
  onSubmit(event: Event){
    // detiene la propagacion o ejecucion del submit
    event.preventDefault;
    if(this.form.valid){
      // llamar al servicio para enviar datos al server
      // logica extra
      alert("El formulario ha sido enviado con exito!")
    }else{
      this.form.markAllAsTouched();
      alert("Se produjo un error al enviar el formulario! Revise los datos ingresados.")
    }
  }
  
  
  }
  
  