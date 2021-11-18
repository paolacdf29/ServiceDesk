import { Component, OnInit } from '@angular/core';
import { cliente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modifica-cliente',
  templateUrl: './modifica-cliente.component.html',
  styleUrls: ['./modifica-cliente.component.css']
})
export class ModificaClienteComponent implements OnInit {

  Clientes: Observable<cliente[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
