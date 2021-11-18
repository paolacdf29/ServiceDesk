import { Component, OnInit } from '@angular/core';
import { cliente } from '../../interfaces/interfaces';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  NuevoCliente: cliente;

  constructor() { }

  ngOnInit(): void {
  }

  registrarCliente(){
    console.log(this.NuevoCliente.razon_soc);
  }

}
