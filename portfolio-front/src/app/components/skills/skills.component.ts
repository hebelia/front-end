import { Component, OnInit } from '@angular/core';

import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skills:any;

  constructor(private data: ServiceService) { }

ngOnInit():void {
  this.data.getService().subscribe(info =>{
    this.skills = info.skills;
  })
}

}
