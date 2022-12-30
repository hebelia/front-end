import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocialService } from 'src/app/services/social.service';
@Component({
  selector: 'app-editsocial',
  templateUrl: './editsocial.component.html',
  styleUrls: ['./editsocial.component.css'],
})
export class EditsocialComponent implements OnInit {
  form: FormGroup;

  constructor(public formBuilder: FormBuilder, public sSocial: SocialService) {

    // this.form = this.formBuilder.group({
    //   url: ['', [Validators.required]],
    //   icon: ['', [Validators.required], Validators.max(30)],
    // });
  }
  // methods
  ngOnInit(): void {}

  refresh() {
    window.location.reload();
  }
  onUpdate(): void {
    this.sSocial.updateSocial(this.sSocial.editsocial).subscribe((info) => {
      this.sSocial.editsocial = info;
      alert('Se realizo la modificacion con exito');
    });
  }

  onSubmit(event: Event) {
    // detiene la propagacion o ejecucion del submit
    this.onUpdate();
    alert('El formulario ha sido enviado con exito!');
  }
  // get Url() {
  //   return this.form.get('url');
  // }
  // get Icon() {
  //   return this.form.get('icon');
  // }

  // get UrlValid() {
  //   return this.Url?.touched && !this.Url.valid;
  // }
  // get IconValid() {
  //   return this.Icon?.touched && !this.Icon.valid;
  // }
}
