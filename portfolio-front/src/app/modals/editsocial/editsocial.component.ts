import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-editsocial',
  templateUrl: './editsocial.component.html',
  styleUrls: ['./editsocial.component.css']
})
export class EditsocialComponent implements OnInit{
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
  
    this.form= this.formBuilder.group({

      url: ['',[Validators.required]],
      icon:['',[Validators.required],Validators.max(30)],
    
      
    })
  }
  
  ngOnInit() {}

// methods
  
  get Url(){
    return this.form.get("url")
  }
  get Icon(){
    return this.form.get("icon")
  }

  get UrlValid(){

    return this.Url?.touched && !this.Url.valid;

  }
  get IconValid(){

    return this.Icon?.touched && !this.Icon.valid;

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
  