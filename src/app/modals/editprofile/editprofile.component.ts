import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
})
export class EditprofileComponent implements OnInit {
  constructor(public sPerson: PersonService) {}

  // methods
  ngOnInit(): void {}

  refresh() {
    window.location.reload();
  }
  onUpdate(): void {
    this.sPerson.updatePerson(this.sPerson.editprofile).subscribe((info) => {
      this.sPerson.editprofile = info;
      alert('Se realizo la modificacion con exito');
    });
  }

  onSubmit(event: Event) {
    this.onUpdate();
    alert('El formulario ha sido enviado con exito!');
  }
}
