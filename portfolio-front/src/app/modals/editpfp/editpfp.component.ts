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

      name:['',[Validators.required]],
      title:['',[Validators.required]],
      pfp: ['',[Validators.required]],

      
    })
  }
  
  ngOnInit() {}

// methods
  

  get Title(){
    return this.form.get("title")
  }
  get Name(){
    return this.form.get("name")
  }
  get Pfp(){
    return this.form.get("pfp")
  }

 
  get TitleValid(){

    return this.Title?.touched && !this.Title.valid;

  }
  get NameValid(){

    return this.Name?.touched && !this.Name.valid;

  }
  get PfpValid(){

    return this.Pfp?.touched && !this.Pfp.valid;

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
  