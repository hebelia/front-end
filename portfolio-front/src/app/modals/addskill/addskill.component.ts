import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import {SkillService }from 'src/app/services/skill.service';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {

// form: FormGroup;
// skill: '';
// percentaje: 0;

// constructor(private formBuilder: FormBuilder, private sSkill: SkillService){
//   skill: ['',[Validators.required]],
//   percentaje:['',[Validators.required, Validators.min(0), Validators.max(100)]]
// }
form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
  
    this.form= this.formBuilder.group({

      name: ['',[Validators.required]],
      percentage:['',[Validators.required]],
    
      
    })
  }
  
  ngOnInit() {}

// methods
  
  get Name(){
    return this.form.get("name")
  }
  get Percentage(){
    return this.form.get("percentage")
  }

  get NameValid(){

    return this.Name?.touched && !this.Name.valid;

  }
  get PercentageValid(){

    return this.Percentage?.touched && !this.Percentage.valid;

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
  
