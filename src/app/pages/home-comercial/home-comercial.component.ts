import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-home-comercial',
  templateUrl: './home-comercial.component.html',
  styleUrls: ['./home-comercial.component.css']
})
export class HomeComercialComponent implements OnInit {

  constructor(private router: Router,
              private sesionServ: SesionService) { }

  ngOnInit(): void {
  }

  async logout(){
    if (await this.sesionServ.logout){
      this.router.navigateByUrl('/');
    }
  }
}
