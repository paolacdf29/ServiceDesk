import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { reclamo } from '../interfaces/interfaces'

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http: HttpClient) { }

  getTickets(){
    return this.http.get<reclamo[]>(URL + '/reclamos');
  }

}
