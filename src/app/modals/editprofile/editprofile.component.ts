import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
})
export class EditprofileComponent implements OnInit {
  form: FormGroup;

  constructor(public formBuilder: FormBuilder, public sPerson: PersonService) {
    // this.form = this.formBuilder.group({
    //   fullname: ['', [Validators.required]],
    //   title: ['', [Validators.required]],
    //   pfp: ['', [Validators.required]],
    //   about: ['', [Validators.required]],
    //   banner: ['', [Validators.required]],
    //   license: ['', [Validators.required]],
    // });
  }
  
  // methods
  ngOnInit(): void {}

  refresh() {
    window.location.reload();
  }
  onUpdate(): void {
    this.sPerson.updatePerson(this.sPerson.editprofile).subscribe((info) => {
      this.sPerson.editprofile = info;
      alert('Se realizo la modificacion con exito');
    });
  }

  onSubmit(event: Event) {
    // detiene la propagacion o ejecucion del submit
    this.onUpdate();
    alert('El formulario ha sido enviado con exito!');
  }

  // get Title() {
  //   return this.form.get('title');
  // }
  // get Fullname() {
  //   return this.form.get('fullname');
  // }
  // get Pfp() {
  //   return this.form.get('pfp');
  // }
  // get About() {
  //   return this.form.get('about');
  // }
  // get Banner() {
  //   return this.form.get('banner');
  // }
  // get License() {
  //   return this.form.get('license');
  // }

  // get TitleValid() {
  //   return this.Title?.touched && !this.Title.valid;
  // }
  // get FullnameValid() {
  //   return this.Fullname?.touched && !this.Fullname.valid;
  // }
  // get PfpValid() {
  //   return this.Pfp?.touched && !this.Pfp.valid;
  // }
  // get AboutValid() {
  //   return this.About?.touched && !this.About.valid;
  // }
  // get BannerValid() {
  //   return this.Banner?.touched && !this.Banner.valid;
  // }
  // get LicenseValid() {
  //   return this.License?.touched && !this.License.valid;
  // }
}
