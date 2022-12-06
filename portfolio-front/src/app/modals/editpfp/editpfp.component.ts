import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editpfp',
  templateUrl: './editpfp.component.html',
  styleUrls: ['./editpfp.component.css']
})
export class EditpfpComponent implements OnInit{
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
  
    this.form= this.formBuilder.group({
      about: ['',[Validators.required]],      
    })
  }
  get About(){
    return this.form.get("about")
  }
  get AboutValid(){

    return this.About?.touched && !this.About.valid;

  }
  
  
  ngOnInit() {}
  
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