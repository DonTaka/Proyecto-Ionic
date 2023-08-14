import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  user  ={
    usuario:"",
    password:""
  }
   public campo ="";
  mostrarInfo(){
    console.log(this.user);
    if (this.user.usuario!="" && this.user.password!=""){
      this.campo="Usuario Existente";
    }else{
      this.campo="Usuario no Existe";
    }
  }
  public alertButtons = ['OK'];
}
