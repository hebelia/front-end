import { Component, OnInit } from '@angular/core';

import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css'],
})
export class EditskillComponent implements OnInit {
  constructor(public sSkill: SkillService) {}

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
    this.onUpdate();
    alert('El formulario ha sido enviado con exito!');
  }
}
