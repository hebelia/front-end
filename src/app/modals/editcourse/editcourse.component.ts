import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{ ActivatedRoute, Router} from '@angular/router';
import { EducationComponent } from 'src/app/components/education/education.component';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit{
  form: FormGroup;
  cou: Course=null;
  
  constructor(private formBuilder: FormBuilder,
              private sCourse: CourseService,
              private activatedRoute: ActivatedRoute,
              private router: Router)
  { 
    this.form= this.formBuilder.group({
      id:[''],
      title:['',[Validators.required]],
      institution:['',[Validators.required]],
      start: ['',[Validators.required]],
      end:['',[Validators.required]],
      
    })
  }
  // methods
  ngOnInit():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sCourse.viewCourse(id).subscribe

      // ((info) => this.cou ,
      //   err => { alert("Se produjo un error");
      //            this.router.navigate(['']);} 

      // )
    (
      info => {
      this.cou = info;
    },
      err => {
      // alert("Se produjo un error");
      this.router.navigate(['']);
    })
  }

  onUpdate():void {
    this.sCourse.updateCourse(this.form.value).subscribe( info =>{
      alert("Se realizo la modificacion con exito");
      this.router.navigate(['']);
    })
  }

  onSubmit(event: Event){
    // detiene la propagacion o ejecucion del submit
    event.preventDefault;
    if(this.form.valid){
      // llamar al servicio para enviar datos al server
      // logica extra
      this.onUpdate();
      alert("El formulario ha sido enviado con exito!")
    }else{
      this.form.markAllAsTouched();
      alert("Se produjo un error al enviar el formulario! Revise los datos ingresados.")
    }
  }
   

  get Title(){
    return this.form.get("title")
  }
  get Institution(){
    return this.form.get("institution")
  }
  get Start(){
    return this.form.get("start")
  }
  get End(){
    return this.form.get("end")
  }

 
  get TitleValid(){

    return this.Title?.touched && !this.Title.valid;

  }
  get InstitutionValid(){

    return this.Institution?.touched && !this.Institution.valid;

  }
  get StartValid(){

    return this.Start?.touched && !this.Start.valid;

  }
  get EndValid(){

    return this.End?.touched && !this.End.valid;

  }
  
  
  }
  
  