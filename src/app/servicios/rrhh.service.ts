import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { cliente } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class RrhhService {

  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get<cliente[]>(URL + '/clientes');
  }

  crearUsuario(nuevoCliente){

    return new Promise(resolve=>{

    this.http.post(URL+'/clientes/registro', nuevoCliente)
        .subscribe(respuesta =>{
          if (respuesta['ok']){
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
