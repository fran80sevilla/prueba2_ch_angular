import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Location } from '@angular/common';
import { Usuario } from '../../models/Usuario';
import { Router } from "@angular/router";

import { UsuariosService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
  providers:[UsuariosService]
})

export class ListaUsuariosComponent	implements OnInit{

	public array_usuarios = [];
	public array_detalle_user = [];
	public palabra:string;

	constructor(private _router:Router, private _usuariosService:UsuariosService){
	}

	ngOnInit(){
		console.log('componente de listado');
		// lista order by nombre
		this.array_usuarios = this._usuariosService.getListaUsuariosService().sort((a,b) => a.nombre.localeCompare(b.nombre));
	}

	funcionAsigna(id){
		return id;
	}

}