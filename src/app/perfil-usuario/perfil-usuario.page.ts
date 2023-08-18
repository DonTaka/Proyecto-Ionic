import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  public user = {
    username: "",
    password: ""
  }
  //Instanciamos los objetos a utilizar (Router y ActivatedRoute)
  constructor(private router: Router, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    //Primero verificamos el estado de las variables a utilizar
    //Generamos una variable state que reciba el state actual de la navegacion
    //getCurrentNavigation()? lleva ? ya que consulta y indica posibilidad de ser nulo
    //Tomamos el state y comprobamos su contenido 
    //Si el contenido existe reemplazamos nuestro user actual y mostramos en consola

    this.activeRoute.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.user.username = state['user'].username;
        this.user.password = state['user'].password;
        console.log(this.user);
      }
    })
  }

}
