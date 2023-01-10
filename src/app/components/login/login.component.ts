import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

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
