import { Component, OnInit } from '@angular/core';
import { reclamo } from '../../interfaces/interfaces';

@Component({
  selector: 'app-crear-reclamo',
  templateUrl: './crear-reclamo.component.html',
  styleUrls: ['./crear-reclamo.component.css']
})
export class CrearReclamoComponent implements OnInit {

  NuevoReclamo: reclamo;

  constructor() { }

  ngOnInit(): void {
  }

  enviaReclamo(){
    console.log('Envia el reclamo');
  }
}
