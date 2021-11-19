import { Component, OnInit } from '@angular/core';
import { cliente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { RrhhService } from '../../servicios/rrhh.service';

@Component({
  selector: 'app-modifica-usuario',
  templateUrl: './modifica-usuario.component.html',
  styleUrls: ['./modifica-usuario.component.css']
})
export class ModificaUsuarioComponent implements OnInit {

  Clientes: Observable<cliente[]>;

  constructor(private rrhh: RrhhService) { }

  ngOnInit(): void {
    this.Clientes = this.rrhh.getClientes();
  }

}
