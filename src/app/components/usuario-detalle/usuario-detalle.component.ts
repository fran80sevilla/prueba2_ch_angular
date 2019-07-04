import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css'],
  providers:[UsuariosService]
})
export class UsuarioDetalleComponent implements OnInit {

	public usuarioDetalle:Usuario[] = [];
	public myid = 0;
	

  	constructor(private _usuariosService:UsuariosService, private _activatedRoute: ActivatedRoute) {

  		this._activatedRoute.params.subscribe(parameters => {
      	// parametros nos devuelve el fragmento de URL que le dimos en app.routes
      	console.log('URL ' + parameters['id']);

      	// asigna objeto a mostrar
      	this.usuarioDetalle = this._usuariosService.getUsuario(parameters['id']);
      	//console.log('se acabo ' + this._usuariosService.getUsuario(parameters['id']));
      	console.log('usuario detalle es ' + this.usuarioDetalle[0].nombre);

      	//let id = parametros['id'];
      	//this._usuariosService.getUsuario(id)
    	})

  	}

	ngOnInit() {
		
	}

}
