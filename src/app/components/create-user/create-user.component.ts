import { Component, OnInit, Input, Output } from '@angular/core';
import { UsuariosService } from '../../services/usuario.service';
import { Usuario } from '../../models/Usuario';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

    registerForm: FormGroup;
    display:string;
    nombreBoton:string;
    usuario:Usuario;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private _usuarioService:UsuariosService
    ) {
        this.display = 'none';
        this.nombreBoton = 'Nuevo Usuario';
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            nombre: new FormControl('', [Validators.required]),
            email: new FormControl('',[Validators.required]),
            password:new FormControl('',[Validators.required, Validators.minLength(5)])
        });
    }

    public createUser = (userFormValue) => {
      if (this.registerForm.valid) {
        this.formUsuario(userFormValue);
        console.log(userFormValue)
        this._usuarioService.addUsuario(this.usuario);
        this.display = 'none';
        this.nombreBoton = 'Nuevo Usuario';
      }
    }

    private formUsuario = (userFormValue) => {
      let maxId =  this.maxId();
      this.usuario = {
      id: maxId + 1,
      nombre: userFormValue.nombre,
      email: userFormValue.email,
      password:  userFormValue.password,
      status:'Invitation Sent'
      }
    }

    public fnActivarBoton(){
      if (this.display == 'none') {
          this.display = 'block';
          this.nombreBoton = 'Cancelar';
      }else{
          this.display = 'none';
          this.nombreBoton = 'Nuevo Usuario';

      }
    }

    onSubmit(){}

    maxId(){
      let max = 0;
      this._usuarioService.getListaUsuariosService().forEach(item => {
        if (item.id > max) {
          max = item.id;
        }
      });
      return max;
    }
}