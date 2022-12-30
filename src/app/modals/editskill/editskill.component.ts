import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SkillService } from 'src/app/services/skill.service';

// import {SkillService }from 'src/app/services/skill.service';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css'],
})
export class EditskillComponent implements OnInit {
  form: FormGroup;

  constructor(public formBuilder: FormBuilder, public sSkill: SkillService) {

    // this.form = this.formBuilder.group({
    //   name: ['', [Validators.required]],
    //   percentage: ['', [Validators.required], Validators.max(100)],
    // });
  }

  // methods
  ngOnInit(): void {}

  refresh() {
    window.location.reload();
  }
  onUpdate(): void {
    this.sSkill.updateSkill(this.sSkill.editskill).subscribe((info) => {
      this.sSkill.editskill = info;
      alert('Se realizo la modificacion con exito');
    });
  }

  onSubmit(event: Event) {
    // detiene la propagacion o ejecucion del submit
    this.onUpdate();
    alert('El formulario ha sido enviado con exito!');
  }

  // get Name() {
  //   return this.form.get('name');
  // }
  // get Percentage() {
  //   return this.form.get('percentage');
  // }

  // get NameValid() {
  //   return this.Name?.touched && !this.Name.valid;
  // }
  // get PercentageValid() {
  //   return this.Percentage?.touched && !this.Percentage.valid;
  // }
}
