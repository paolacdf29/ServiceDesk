import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../../servicios/sesion.service';
import { Observable } from 'rxjs';
import { reclamo } from 'src/app/interfaces/interfaces';
import { TicketsService } from '../../servicios/tickets.service';

@Component({
  selector: 'app-home-tecnico',
  templateUrl: './home-tecnico.component.html',
  styleUrls: ['./home-tecnico.component.css']
})
export class HomeTecnicoComponent implements OnInit {

  Reclamos: Observable<reclamo[]>;

  constructor(private router: Router,
              private sesionServ: SesionService,
              private ticketsServ: TicketsService) { }

  ngOnInit(): void {
    this.Reclamos = this.ticketsServ.getTickets();
  }

  async logout(){
    if (await this.sesionServ.logout){
      this.router.navigateByUrl('/');
    }
  }

}
