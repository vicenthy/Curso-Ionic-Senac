import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../model/usuario';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
  preserveWhitespaces: true
})
export class UsuarioListComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private router: Router,
    private usuarioService: UsuarioService ) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.getAll();
  }
  novo() {
    this.router.navigate(['novo']);
  }
  excluir(usuario: Usuario) {
    this.usuarioService.delete(usuario.id);
    this.usuarios = this.usuarioService.getAll();
  }
  editar(usuario: Usuario) {
    this.router.navigate([`edit/${usuario.id}`]);
  }

}
