import{Component, OnInit} from '@angular/core';

import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{

  experience:any;

  constructor(private data: ServiceService) { }


ngOnInit():void {
  this.data.getService().subscribe(info =>{
    this.experience = info.experience;
  })
}

}
