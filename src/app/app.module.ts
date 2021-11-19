import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CrearReclamoComponent } from './pages/crear-reclamo/crear-reclamo.component';
import { RegistroClienteComponent } from './pages/registro-cliente/registro-cliente.component';
import { HomeComercialComponent } from './pages/home-comercial/home-comercial.component';
import { ModificaClienteComponent } from './pages/modifica-cliente/modifica-cliente.component';
import { VerClientesComponent } from './pages/ver-clientes/ver-clientes.component';
import { HomeClientesComponent } from './pages/home-clientes/home-clientes.component';
import { RecuPassComponent } from './pages/recu-pass/recu-pass.component';
import { HomeRrhhComponent } from './pages/home-rrhh/home-rrhh.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario.component';
import { ModificaUsuarioComponent } from './pages/modifica-usuario/modifica-usuario.component';
import { VerUsuarioComponent } from './pages/ver-usuario/ver-usuario.component';
import { HomeTecnicoComponent } from './pages/home-tecnico/home-tecnico.component';
import { ResolucionComponent } from './pages/resolucion/resolucion.component';

import { TicketsService } from './servicios/tickets.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TicketsComponent,
    LoginComponent,
    HomeComponent,
    ClientesComponent,
    CrearReclamoComponent,
    RegistroClienteComponent,
    HomeComercialComponent,
    ModificaClienteComponent,
    VerClientesComponent,
    HomeClientesComponent,
    RecuPassComponent,
    HomeRrhhComponent,
    RegistroUsuarioComponent,
    ModificaUsuarioComponent,
    VerUsuarioComponent,
    HomeTecnicoComponent,
    ResolucionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
