import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Injectable()
export class UsuariosService{

  public usuario:Usuario[] = [];
  public user:Usuario;


    private usuarios_array:Usuario[] = [
        {
          id: 2,
          nombre: "fran",
          email: 'ran@algo.es',
          password: "1234",
          status: "Invitation Sent",
        },
         {
          id: 3,
          nombre: "Pepe",
          email: 'epe@algo.es',
          password: "12345",
          status: "Invitation Sent"
        },        
        {
          id: 4,
          nombre: "Pepa",
          email: 'epa@algo.es',
          password: "12345",
          status: 'Active'
        },        
        {
          id: 5,
          nombre: "manolo",
          email: 'mmanolo@algo.es',
          password: "12345",
          status: "Invitation Sent"
        },        
        {
          id: 7,
          nombre: "rAFAEL",
          email: 'dafael@algo.es',
          password: "12345",
          status: "Invitation Sent"
        },        
        {
          id: 8,
          nombre: "Fernando",
          email: 'dernando@algo.es',
          password: "12345",
          status: 'Active'
        },        
        {
          id: 9,
          nombre: "Rosa",
          email: 'rrosa@algo.es',
          password: "12345",
          status: "Invitation Sent"
        },        
        {
          id: 10,
          nombre: "Antonio",
          email: 'darntonio@algo.es',
          password: "12345",
          status: 'Active'
          
        },        
        {
          id: 11,
          nombre: "Lorenzo",
          email: 'sadlorenzo@algo.es',
          password: "12345",
          status: "Invitation Sent"
          
        },        
        {
          id: 12,
          nombre: "laura",
          email: 'llra@algo.es',
          password: "12345",
          status: "Invitation Sent"
          
        },        
        {
          id: 13,
          nombre: "paula",
          email: 'ipaula@algo.es',
          password: "12345",
          status: "Invitation Sent"
        },
      ];

    /**
     * @returns array de objetos de la lista de usuarios
    */  
    public getListaUsuariosService():Usuario[]{
        //this.addUsuario(this.user);
        return this.usuarios_array;
    }

    /**
     * Finalmente debemos capturar el elemento a partir del id de la URL
     * 
     * @param id del elemento
     */
    public getUsuario(id){
          
        for(let user of this.usuarios_array){

          if (user.id == id) {

            this.usuario.push(user);
        }
      }

       return this.usuario;
    }
  
    public addUsuario(user:Usuario){
       this.user = user;
       this.usuarios_array.push(this.user);
       return this.usuarios_array;
    }

}