import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-editjob',
  templateUrl: './editjob.component.html',
  styleUrls: ['./editjob.component.css']
})
export class EditjobComponent implements OnInit{
  
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