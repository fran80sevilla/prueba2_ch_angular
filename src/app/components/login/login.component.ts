import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
//import { Location } from '@angular/common';
import { Usuario } from '../../models/Usuario';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
 // providers:[UsuariosService]
})

export class LoginComponent	implements OnInit{

	public usuario: Usuario;
	public nombreUsuario:string;
	public passUsuario:string;
	public error:string;

	constructor(private _router:Router){
		this.nombreUsuario = "";
		this.passUsuario = "";
		// nuestro administrador
		this.usuario = new Usuario(1,'admin', 'admin@admin.es', 'cohosting', 'Active');
	}

	ngOnInit(){
		console.log('componente de login');
	}

	onSubmit(){

		if (this.nombreUsuario == 'admin@admin.es' && this.passUsuario == 'cohosting') {
			this._router.navigate(['/lista']);
		}else{
			this.error = "Usuario o contraseña incorrecta";
		}
		
		this.error = "";
		console.log(this.usuario);
	}
}