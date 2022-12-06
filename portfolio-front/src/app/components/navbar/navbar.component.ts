import { Component, OnInit } from '@angular/core';

import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

 export class NavbarComponent implements OnInit{


//   // crear variables por ej:


  show: boolean =false;
  socials:any;


  constructor(private data: ServiceService) { }

// data y redes variables 
ngOnInit():void {
  this.data.getService().subscribe(info =>{
    this.socials = info.socials;
  })
}



// funcion para que se muestre o se esconda
// la funcion no retorna nada por el :void
visible():void{
  this.show=!this.show;
   }

}
