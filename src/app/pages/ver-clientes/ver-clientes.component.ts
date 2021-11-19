import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { cliente } from 'src/app/interfaces/interfaces';
import { RrhhService } from '../../servicios/rrhh.service';

@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.css']
})
export class VerClientesComponent implements OnInit {

  Clientes: Observable<cliente[]>;

  constructor(private rrhh: RrhhService) { }

  ngOnInit(): void {
    this.Clientes = this.rrhh.getClientes();
  }


}
