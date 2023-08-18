import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {

  }

  public user = {
    username: "",
    password: ""
  }

  enviarPerfil() {
    let navigationExtras: NavigationExtras = {
      state: { user: this.user }
    }
    console.log(this.user);
    this.router.navigate(['/perfil-usuario'], navigationExtras);
  }

  ngOnInit() {
  }

}
