import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit{


  form: FormGroup;

  constructor(private formBuilder: FormBuilder){ 

    this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
   })
  }

  ngOnInit() {}

  // methods login
  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }
  // validation methods
  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return this.Mail?.touched && !this.Mail?.valid;
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



