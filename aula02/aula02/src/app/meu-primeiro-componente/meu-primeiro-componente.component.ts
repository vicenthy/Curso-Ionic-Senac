import { Component, OnInit } from '@angular/core';


interface Tarefa {
  titulo: string;
  feito: boolean;
}


@Component({
  selector: 'app-meu-primeiro-componente',
  templateUrl: './meu-primeiro-componente.component.html',
  styleUrls: ['./meu-primeiro-componente.component.css']
})
export class MeuPrimeiroComponenteComponent implements OnInit {

  constructor() { }
  tarefas: Tarefa[] = [];
  tarefa: Tarefa = {titulo: '', feito: false };



  ngOnInit() {
  }

}
