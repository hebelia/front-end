import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit{

  people: Person[]=[];

constructor (private sPerson: PersonService){

}
// methods -> services
list():void{
  this.sPerson.list().subscribe(info => {this.people=info});
}

// viewPerson(id:number):void{
// }

ngOnInit(): void {
  this.list();
}
//   fullname:string='';
//   title:string='';
//   pfp:any;
//   about:any;
//   banner:any;
//   license:string="";
//   constructor(private data:ServiceService){}

//   ngOnInit():void{
//       this.data.getService().subscribe( info =>{
//         this.fullname =info.fullname;
//         this.title =info.title;
//         this.pfp =info.pfp;
//         this.about =info.about;
//         this.banner =info.banner;
//         this.license =info.license;
//       })
//   }
// }


}
