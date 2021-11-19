import { Component, OnInit } from '@angular/core';
import { RrhhService } from '../../servicios/rrhh.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  msj: string = '';
  NuevoCliente: any = {
    id_sucursal: 19,
    cuit: null,
    razon_soc: '',
    contacto: '',
    telefono: null,
    email: '',
    usuario: '',
    contrasena: '' 
  };

  constructor(private rrhh: RrhhService,
              private router: Router) { }

  ngOnInit(): void {
  }

  async registrarCliente(){
    if (await this.rrhh.crearUsuario(this.NuevoCliente)){
      this.router.navigateByUrl('/VerClientes');
    }else{
      this.msj = 'No se pudo crear al ususario'
    };
  }

}
