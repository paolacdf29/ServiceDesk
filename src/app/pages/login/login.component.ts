import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: any = {
    usuario: "",
    contrasena: ""
  }
  constructor(private router: Router,
              private sessioServ: SesionService) { }

  ngOnInit(): void {
  }

  async loger(){
    this.router.navigateByUrl('/HomeComercial');
  }

}
