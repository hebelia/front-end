import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {

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

  logOut(){
    sessionStorage.setItem('currentUser',"null");
    this.isLogged = false;
    alert("Sesion finalizada");
    window.location.reload();
    return this.isLogged;
  }

}
