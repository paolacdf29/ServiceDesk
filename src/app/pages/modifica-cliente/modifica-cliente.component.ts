import { Component, OnInit } from '@angular/core';
import { cliente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { RrhhService } from '../../servicios/rrhh.service';

@Component({
  selector: 'app-modifica-cliente',
  templateUrl: './modifica-cliente.component.html',
  styleUrls: ['./modifica-cliente.component.css']
})
export class ModificaClienteComponent implements OnInit {

  Clientes: Observable<cliente[]>;

  constructor(private rrhh: RrhhService) { }

  ngOnInit(): void {
    this.Clientes = this.rrhh.getClientes();
  }

}
