import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  isTrue = false;

  constructor(private sProject: ProjectService) {}

  // methods -> services
  ngOnInit(): void {
    this.list();

    // if(this.tokenService.getToken())
    //   { this.isLogged = true; }
    // else
    //   { this,isLogged = false; }
    // }
  }

  list(): void {
    this.sProject.list().subscribe((info) => {
      this.projects = info;
    });
  }

  refresh() {
    window.location.reload();
  }

  delete(id: any): void {
    if (id) {
      this.sProject.deleteProject(id).subscribe((info) => {
        alert('Datos eliminados');
        this.list();
        this.refresh();
      });
    }
  }
}
