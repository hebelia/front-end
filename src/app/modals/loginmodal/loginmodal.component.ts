import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrls: ['./loginmodal.component.css'],
})
export class LoginmodalComponent implements OnInit {
  form: FormGroup;
  person: Person = new Person('', '', '', '', '', '', '', '');

  constructor(
    private route: Router,
    private auth: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]],
    });
  }

  ngOnInit(): void {}

  // methods login
  get Email() {
    return this.form.get('email');
  }
  get Password() {
    return this.form.get('password');
  }
  // validation methods
  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  get EmailValid() {
    return this.Email?.touched && !this.Email?.valid;
  }

  onSubmit(event: Event) {
    // stops the propagation or execution of the submit
    event.preventDefault;
    if (this.form.valid) {
      // call service to send data to server
      this.auth.login(JSON.stringify(this.form.value)).subscribe(
        (info) => {
          console.log('Info:' + JSON.stringify(info));
          this.router.navigate(['']);
          alert(
            'Si los datos ingresados fueron correctos usted podra editar el portfolio como desee.'
          );
        },
        (error) => {
          alert('Se produjo un error al iniciar sesion');
        }
      );
    } else {
      this.form.markAllAsTouched();
      alert(
        'Se produjo un error al enviar el formulario! Revise los datos ingresados.'
      );
    }
  }
}
