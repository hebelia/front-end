import { Component, OnInit } from '@angular/core';

import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit{

  fullname:string='';
  title:string='';
  pfp:any;
  about:any;
  banner:any;
  license:string="";



  
  constructor(private data:ServiceService){}

  ngOnInit():void{
      this.data.getService().subscribe( info =>{
        this.fullname =info.fullname;
        this.title =info.title;
        this.pfp =info.pfp;
        this.about =info.about;
        this.banner =info.banner;
        this.license =info.license;
      })
  }
}
