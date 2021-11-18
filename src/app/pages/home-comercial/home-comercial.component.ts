import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-comercial',
  templateUrl: './home-comercial.component.html',
  styleUrls: ['./home-comercial.component.css']
})
export class HomeComercialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    console.log('Log out');
  }
}
