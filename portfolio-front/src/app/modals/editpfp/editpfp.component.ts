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
