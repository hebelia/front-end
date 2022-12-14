import{Component, OnInit} from '@angular/core';

import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
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
