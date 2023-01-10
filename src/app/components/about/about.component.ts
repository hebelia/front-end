import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  isLogged: boolean;
  people: Person[] = [];

  constructor(private sPerson: PersonService) {}
  // methods -> services
  list(): void {
    this.sPerson.list().subscribe((info) => {
      this.people = info;
    });
  }

  // method to obtain a specific id and send the information on that id to the edit modal
  viewPerson(id: number) {
    this.sPerson.viewPerson(id).subscribe((info) => {
      this.sPerson.editprofile = info;
    });
  }

  ngOnInit(): void {
    this.list();
    // method to hide and show the login button
    if (sessionStorage.getItem('currentUser') == 'null') {
      this.isLogged = false;
    } else if (sessionStorage.getItem('currentUser') == null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }
}
