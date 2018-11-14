import { Injectable } from '@angular/core';
import { Usuario } from './model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios: Usuario[] = [
    {id: 1, nome: 'Maria', email: 'maria@email.com'},
    {id: 2, nome: 'Joao', email: 'joao@email.com'},
    {id: 3, nome: 'Jose', email: 'jose@email.com'}
  ];

  constructor() { }
public getById(id: number): Usuario {
  return this.usuarios.find(a => a.id === id);
}
public create(usuario: Usuario) {
  this.usuarios.push(usuario);
}
public update(usuario: Usuario) {
  this.usuarios.forEach( u => {
    if ( u.id === usuario.id ) {
      usuario = u;
    }
  });

}
public delete (id: number) {
  this.usuarios = this.usuarios.filter( u => u.id !== id);
}
public getAll(): Usuario[] {
  return this.usuarios;
}

}
