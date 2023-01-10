import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

 export class NavbarComponent implements OnInit{

  isLogged: boolean;

  constructor(
    private auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    // method to hide and show the login button
    if(sessionStorage.getItem('currentUser')=="null")
      { this.isLogged = false; }
    else if(sessionStorage.getItem('currentUser')==null)
      { this.isLogged = false; }
    else 
      { this.isLogged = true; }
  }

}

