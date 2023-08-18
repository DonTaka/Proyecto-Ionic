import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    var user = {
      username: "",
      password: ""
    }
    this.activeRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        user = this.router.getCurrentNavigation().extras.state.user;
        console.log(user);
      }
    })
  }

  ngOnInit() {
  }

}
