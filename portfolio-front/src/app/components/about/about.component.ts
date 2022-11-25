import { Component, OnInit } from '@angular/core';

import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit{

  about:string='';
  
  constructor(private data:ServiceService){}

  ngOnInit():void{
      this.data.getService().subscribe( info =>{
        this.about =info.about;
      })
  }

}
