import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: any = {
    usuario: "",
    contrasena: ""
  }

  constructor(private  router: Router ) { 


  }

  ngOnInit(): void {
  }
  loger(){
    this.router.navigateByUrl("/clientes");
  }
}
