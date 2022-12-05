import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editbanner',
  templateUrl: './editbanner.component.html',
  styleUrls: ['./editbanner.component.css']
})
export class EditbannerComponent implements OnInit{
  
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
  
    this.form= this.formBuilder.group({
  
      
    })
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
    }
  }
  
  
  }