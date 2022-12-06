import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrls: ['./loginmodal.component.css']
})
export class LoginmodalComponent implements OnInit{
  loginForm: FormGroup;
  registerForm: FormGroup;


  constructor(private formBuilder: FormBuilder){ 

    this.loginForm= this.registerForm= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
      name:['',[Validators.required, Validators.maxLength(30)]]
   })
  }

  ngOnInit() {}

  // login
  get LogPassword(){
    return this.loginForm.get("password");
  }
 
  get LogMail(){
   return this.loginForm.get("email");
  }
  get LogPasswordValid(){
    return this.RegPassword?.touched && !this.RegPassword?.valid;
  }

  get LogMailValid() {
    return false
  }

  // register
  get RegPassword(){
    return this.registerForm.get("password");
  }
 
  get RegMail(){
   return this.registerForm.get("email");
  }
  get RegName(){
    return this.registerForm.get("name");
  }

  get RegPasswordValid(){
    return this.RegPassword?.touched && !this.RegPassword?.valid;
  }

  get RegMailValid() {
    return false
  }
  
  get RegNameValid(){
    return this.RegName?.touched && !this.RegName?.valid;
  }

onSubmit(event: Event){
  // detiene la propagacion o ejecucion del submit
  event.preventDefault;
  if(this.loginForm.valid){
    // llamar al servicio para enviar datos al server
    // logica extra
    alert("El formulario ha sido enviado con exito!")
  }else{
    this.loginForm.markAllAsTouched();
    alert("Se produjo un error al enviar el formulario! Revise los datos ingresados.")
  }
}


}
