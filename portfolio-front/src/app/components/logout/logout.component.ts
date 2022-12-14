import{Component, OnInit} from '@angular/core';

import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  show: boolean =false;

  ngOnInit():void {
    // completar
  }
    // funcion para que se muestre o se esconda
  // la funcion no retorna nada por el :void
  visible():void{
    this.show=!this.show;
     }
  
}
