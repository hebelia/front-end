import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/model/social';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SocialService } from 'src/app/services/social.service';
@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css'],
})
export class SocialsComponent implements OnInit {
  isLogged: boolean;

  socials: Social[] = [];

  constructor(private sSocial: SocialService, private auth: AuthenticationService) {}
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

  // ngOnInit(): void {
  //   this.list();
  // }

  ngOnInit(): void {
    this.list();
    // method to hide and show the login button
    if(sessionStorage.getItem('currentUser')=="null")
      { this.isLogged = false; }
    else if(sessionStorage.getItem('currentUser')==null)
      { this.isLogged = false; }
    else 
      { this.isLogged = true; }
  }

}

