import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { reclamo } from '../interfaces/interfaces'
import { SesionService } from './sesion.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})


export class TicketsService {

  constructor(private http: HttpClient,
              private sesion: SesionService) { }

  getTickets(){
    return this.http.get<reclamo[]>(URL + '/reclamos/');
  }

  getTicketsbyClient(){
    return this.http.get<reclamo[]>(URL + '/reclamos/cliente/'+ this.sesion.cliente.id_cliente);
  }

  crearTicket(reclamo){
    const body ={
      uid:  this.sesion.cliente.id_cliente,
      detalle: reclamo
    }

    return new Promise(resolve=>{

    this.http.post(URL+'/reclamos/crear2', body)
        .subscribe(respuesta =>{
          if (respuesta['insertId']){
            resolve(true);
          }else{
            console.log(respuesta['error']);
            resolve(false);
          }
        }, error =>{
          console.log(error);
          resolve(false);
        });
      });
  }

}
