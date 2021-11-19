import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-home-clientes',
  templateUrl: './home-clientes.component.html',
  styleUrls: ['./home-clientes.component.css']
})
export class HomeClientesComponent implements OnInit {

  constructor(private route: Router,
              private sesionServ: SesionService) { }

  ngOnInit(): void {
  }

  async logout(){
    if (await this.sesionServ.logout){
      this.route.navigateByUrl('/');
    }
  }
}
