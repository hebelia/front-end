import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private sSkill: SkillService) {}

  list(): void {
    this.sSkill.list().subscribe((info) => {
      this.skills = info;
    });
  }
  refresh() {
    window.location.reload();
  }

  delete(id: any): void {
    if (id) {
      this.sSkill.deleteSkill(id).subscribe((info) => {
        alert('Datos eliminados');
        this.list();
        this.refresh();
      });
    }
  }

  ngOnInit(): void {
    this.list();
  }
}
