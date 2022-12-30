import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/model/social';
import { SocialService } from 'src/app/services/social.service';
@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css'],
})
export class SocialsComponent implements OnInit {
  show: boolean = false;

  socials: Social[] = [];

  constructor(private sSocial: SocialService) {}
  // methods -> services
  list(): void {
    this.sSocial.list().subscribe((info) => {
      this.socials = info;
    });
  }

  refresh() {
    window.location.reload();
  }

  delete(id: any): void {
    if (id) {
      this.sSocial.deleteSocial(id).subscribe((info) => {
        alert('Datos eliminados');
        this.list();
        this.refresh();
      });
    }
  }
    // method to obtain a specific id and send the information on that id to the edit modal
    viewSocial(id: number) {
      this.sSocial.viewSocial(id).subscribe(info => {
        this.sSocial.editsocial = info;
      })
    }

  ngOnInit(): void {
    this.list();
  }
  // funcion para que se muestre o se esconda
  // la funcion no retorna nada por el :void
  // visible():void{
  //   this.show=!this.show;
  //    }
}
