import { Injectable } from '@angular/core';
import { cliente } from '../interfaces/interfaces';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})

export class SesionService {

  Logeado: boolean = false;
  cliente: cliente;
  usuario: any;

  constructor(private http: HttpClient) { }

  async loginCliente(unombre, pass){

    const body ={
      usuario: unombre,
      contrasena: pass
    }

    return new Promise(resolve=>{

    this.http.post(URL+'/clientes/login', body)
        .subscribe(respuesta =>{
          if (respuesta['ok']){
            this.cliente = respuesta['user'][0];
            this.Logeado = true;
            resolve(true);
          }else{
            resolve(false);
          }

        }, error =>{
          console.log(error);
          resolve(false);
        });
      });
  }

  async logout(){
    return new Promise(resolve=>{

      this.http.get(URL+'/clientes/logout')
          .subscribe(respuesta =>{

            if (respuesta['ok']){
              resolve(true);
              this.Logeado = false;
              this.cliente = null;
              this.usuario = null;
            } else{
              resolve(false);
            }

          }, error =>{
            console.log(error);
            resolve(false);
          })
    })
  }
}
