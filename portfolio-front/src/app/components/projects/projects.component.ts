import { Component, OnInit } from '@angular/core';

import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  
  projects:any;

  constructor(private data: ServiceService) { }


ngOnInit():void {
  this.data.getService().subscribe(info =>{
    this.projects = info.projects;
  })
}

}
