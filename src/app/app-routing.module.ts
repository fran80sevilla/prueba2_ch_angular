import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from  './components/login/login.component';
import {ListaUsuariosComponent} from  './components/lista-usuarios/lista-usuarios.component';
import {UsuarioDetalleComponent} from  './components/usuario-detalle/usuario-detalle.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent},
	{ path: 'lista', component: ListaUsuariosComponent},
	{ path: 'usuario-detalle/:id', component: UsuarioDetalleComponent},
	{ path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
