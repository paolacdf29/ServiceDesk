import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { LoginComponent } from './pages/login/login.component';
<<<<<<< HEAD
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './pages/clientes/clientes.component';
=======
import { CrearReclamoComponent } from './pages/crear-reclamo/crear-reclamo.component';
import { RegistroClienteComponent } from './pages/registro-cliente/registro-cliente.component';
import { HomeComercialComponent } from './pages/home-comercial/home-comercial.component';
import { ModificaClienteComponent } from './pages/modifica-cliente/modifica-cliente.component';
import { VerClientesComponent } from './pages/ver-clientes/ver-clientes.component';
>>>>>>> 442a28a... Comercial

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TicketsComponent,
    LoginComponent,
<<<<<<< HEAD
    HomeComponent,
    ClientesComponent
=======
    CrearReclamoComponent,
    RegistroClienteComponent,
    HomeComercialComponent,
    ModificaClienteComponent,
    VerClientesComponent
>>>>>>> 442a28a... Comercial
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
