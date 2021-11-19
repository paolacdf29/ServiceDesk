import { Component, OnInit } from '@angular/core';
import { reclamo } from '../../interfaces/interfaces';
import { TicketsService } from '../../servicios/tickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-reclamo',
  templateUrl: './crear-reclamo.component.html',
  styleUrls: ['./crear-reclamo.component.css']
})
export class CrearReclamoComponent implements OnInit {

  NuevoReclamo: string = '';

  constructor(private ticketServ: TicketsService,
              private router: Router) { }

  ngOnInit(): void {
  }

  async enviaReclamo(){
    if (await this.ticketServ.crearTicket(this.NuevoReclamo)){
      this.router.navigateByUrl('/tickets');
    }
  }
}
