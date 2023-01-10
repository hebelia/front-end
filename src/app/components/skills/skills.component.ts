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
    // method to obtain a specific id and send the information on that id to the edit modal
    viewSkill(id: number) {
      this.sSkill.viewSkill(id).subscribe(info => {
        this.sSkill.editskill = info;
      })
    }
    isLogged: boolean;
    ngOnInit(): void {
      this.list();
      // method to hide and show the login button
      if (sessionStorage.getItem('currentUser') == 'null') {
        this.isLogged = false;
      } else if (sessionStorage.getItem('currentUser') == null) {
        this.isLogged = false;
      } else {
        this.isLogged = true;
      }
    }
}
