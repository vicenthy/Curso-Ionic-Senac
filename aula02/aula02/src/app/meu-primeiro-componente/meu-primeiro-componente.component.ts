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
  tarefas: Tarefa[] = [
    {titulo: 'TAREFA 01', feito: false},
    {titulo: 'TAREFA 02', feito: false}

  ];
  tarefa: Tarefa = {titulo: '', feito: false };
  show = true;

  constructor() {

  }


  /*
    remover item de um array
    var indice = arr.findIndex(obj => obj.valor == numeroARemover);
    arr.splice(indice, 1);
    arr = arr.filter(obj => obj.valor != numeroARemover);

    */



  ngOnInit() {

  }

  selecionar(tarefa: Tarefa) {
    this.tarefa = tarefa;
  }

  verificarFinalizacao() {
   return this.tarefas.every( a => a.feito) && this.tarefas.length > 0 && this.show;
  }

  remover(tarefa: Tarefa) {
    console.log(this.tarefas);

    if ( confirm('Confirmar exclusao!') ) {
      const index = this.tarefas.findIndex(a => a === tarefa);
      this.tarefas.splice(index , 1);

    }

  }
  add() {
    if ( this.tarefas.filter( a => a === this.tarefa).length === 0 ) {
    this.tarefas.push(this.tarefa);
    this.tarefa = {titulo: '', feito: false};
    } else {
      this.tarefa = {titulo: '', feito: false };
    }
  }

  marcar(tarefa: Tarefa) {
    if (tarefa.feito) {
      tarefa.feito = false;
    } else {
      tarefa.feito = true;
    }

  }


}
