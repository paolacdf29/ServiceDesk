import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketsComponent } from './pages/tickets/tickets.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CrearReclamoComponent } from './pages/crear-reclamo/crear-reclamo.component';
import { HomeComercialComponent } from './pages/home-comercial/home-comercial.component';
import { RegistroClienteComponent } from './pages/registro-cliente/registro-cliente.component';
import { ModificaClienteComponent } from './pages/modifica-cliente/modifica-cliente.component';
import { VerClientesComponent } from './pages/ver-clientes/ver-clientes.component';





const routes: Routes = [
  
  {path: 'tickets', component: TicketsComponent},
  {path: 'login', component: LoginComponent},
  {path:'clientes',component: ClientesComponent},  
  {path: 'CrearReclamo', component: CrearReclamoComponent},
  {path: 'HomeComercial', component: HomeComercialComponent},
  {path: 'RegistroCliente', component: RegistroClienteComponent},
  {path: 'ModificaCliente', component: ModificaClienteComponent},
  {path: 'VerClientes', component: VerClientesComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
