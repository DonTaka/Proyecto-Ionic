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

  user = {
    username: "",
    password: ""
  }


  enviarPerfil() {
    //Se crea el navigationExtras para enviar el paquete de informacion
    //A la siguiente pagina que lo deba recibir
    //Para ello empaquetamos nuestra informacion en la variable state
    //que esta incluida en el navigationExtras
    const navigationExtras: NavigationExtras = {
      state: { user: this.user }
    }
    //Enrutamos y enviamos a nuestro nuevo destino
    this.router.navigate(['/perfil-usuario'], navigationExtras);
  }

  ngOnInit() {
  }

}
