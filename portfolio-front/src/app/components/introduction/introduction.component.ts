import { Component, OnInit } from '@angular/core';

import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit{

  name:string='';
  title:string='';
  pfp:any;
  
  constructor(private data:ServiceService){}

  ngOnInit():void{
      this.data.getService().subscribe( info =>{
        this.name =info.name;
        this.title =info.title;
        this.pfp =info.pfp;
      })
  }
}
