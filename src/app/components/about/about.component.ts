import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit{

people: Person[]=[];
// idPerson:any;
// isTrue= false;

constructor (private sPerson: PersonService){

}
// methods -> services
list():void{
  this.sPerson.list().subscribe(info => {this.people=info});
}

// idEdit(id:any){
//   this.isTrue = true;
//   this.idPerson= id;

// }

// viewPerson(id:number):void{
// }

ngOnInit(): void {
  this.list();
}
}
