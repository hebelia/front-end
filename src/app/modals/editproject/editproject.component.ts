import { Component, OnInit } from '@angular/core';

import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css'],
})
export class EditprojectComponent implements OnInit {
  constructor(public sProject: ProjectService) {}
  // methods
  ngOnInit(): void {}

  refresh() {
    window.location.reload();
  }
  onUpdate(): void {
    this.sProject.updateProject(this.sProject.editproject).subscribe((info) => {
      this.sProject.editproject = info;
      alert('Se realizo la modificacion con exito');
    });
  }

  onSubmit(event: Event) {
    this.onUpdate();
    alert('El formulario ha sido enviado con exito!');
  }
}
