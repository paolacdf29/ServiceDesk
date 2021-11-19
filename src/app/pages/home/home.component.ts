import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: any = {
    usuario: "",
    contrasena: ""
  }

  msj: string = '';

  constructor(private router: Router,
              private sesionServ: SesionService) { }

  ngOnInit(): void {
  }

  async loger(){
    await this.sesionServ.loginCliente(this.usuario.usuario, this.usuario.contrasena);
    if (this.sesionServ.Logeado) {
      this.router.navigateByUrl("/HomeClientes");
    }else{
      this.msj = 'Usuario y/o contraseña invalido';
    }
  }
}
