import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ngModel
//import {FormsModule} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import {LoginComponent} from  './components/login/login.component';
import {ListaUsuariosComponent} from  './components/lista-usuarios/lista-usuarios.component';
import { UsuarioDetalleComponent } from './components/usuario-detalle/usuario-detalle.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
// pipe
import { BusquedaPipe } from './components/pipes/busqueda.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaUsuariosComponent,
    UsuarioDetalleComponent,
    CreateUserComponent,
    NavbarComponent,
    BusquedaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
