import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../servicios/tickets.service';
import { Observable } from 'rxjs';
import { reclamo } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent implements OnInit {

  Reclamos: Observable<reclamo[]>;

  constructor(public tickets: TicketsService) { }
  //constructor() { }


  ngOnInit(): void {
    this.Reclamos = this.tickets.getTickets();
  }

}
