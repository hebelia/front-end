import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit{

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
  
    this.form= this.formBuilder.group({

      fullname:['',[Validators.required]],
      title:['',[Validators.required]],
      pfp: ['',[Validators.required]],
      about:['',[Validators.required]],
      banner:['',[Validators.required]],
      license:['',[Validators.required]],

      
    })
  }
  
  ngOnInit() {}

// methods
  

  get Title(){
    return this.form.get("title")
  }
  get Fullname(){
    return this.form.get("fullname")
  }
  get Pfp(){
    return this.form.get("pfp")
  }
  get About(){
    return this.form.get("about")
  }
  get Banner(){
    return this.form.get("banner")
  }  
  get License(){
    return this.form.get("license")
  }

 
  get TitleValid(){

    return this.Title?.touched && !this.Title.valid;

  }
  get FullnameValid(){

    return this.Fullname?.touched && !this.Fullname.valid;

  }
  get PfpValid(){

    return this.Pfp?.touched && !this.Pfp.valid;

  }
  get AboutValid(){

    return this.About?.touched && !this.About.valid;

  }
  get BannerValid(){

    return this.Banner?.touched && !this.Banner.valid;

  }
  get LicenseValid(){

    return this.License?.touched && !this.License.valid;

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
  
