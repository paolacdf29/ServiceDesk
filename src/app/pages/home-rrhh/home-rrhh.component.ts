import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-home-rrhh',
  templateUrl: './home-rrhh.component.html',
  styleUrls: ['./home-rrhh.component.css']
})
export class HomeRrhhComponent implements OnInit {

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
