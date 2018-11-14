import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../model/usuario';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario: Usuario;

  constructor(private service: UsuarioService,
              private router: Router,
              private routerParam: ActivatedRoute ) { }

  ngOnInit() {
    const id = this.routerParam.snapshot.paramMap.get('id');
    const temp: Usuario = this.service.getAll()
    .find( u => u.id === parseInt(id, 10) );
    if (temp) {
      this.usuario = temp;
    } else {
      this.usuario = new Usuario();
    }

  }

  salva() {
    if (this.usuario.id) {
      this.service.update(this.usuario);
    } else {
    this.usuario.id = this.service.getAll().length + 1;
    this.service.create(this.usuario);
    }
    this.router.navigate(['']);
  }

}
