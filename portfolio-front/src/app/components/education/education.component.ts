import{Component, OnInit} from '@angular/core';

import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{


  education:any;


  constructor(private data: ServiceService) { }


ngOnInit():void {
  this.data.getService().subscribe(info =>{
    this.education = info.education;
  })
}
}
