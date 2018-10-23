const p = document.createElement('p');
const texto = "Bem vindo ao TypeScript";
p.textContent = texto;
document.body.appendChild(p);

// Tipos de dados
var quaquercoisa = {
    nome: "nome",
    idade:123
}
var bool:boolean = false;
let texto_string: string = 'isso é um texto';
const numero: number = 2.

var funcao = function () {
       console.log("isso é uma função");
}

funcao();

var colecao:any[] = ["item 1", "item 2"];









function hello():void {
    console.log("Hello!");
}
hello();


class Pessoa{
    id:number;
    nome:string;
}


class Cliente extends Pessoa{
    cpf:number
}

function exibirCliente(){
    let p = new Pessoa();
    p.id = 1;
    p.nome = "Nome Pessoa";
    let c = new Cliente();
    c.nome = "Nome Cliente";
    c.id = 2;
    c.cpf = 123123123;

console.log(p);
console.log(c);

}
exibirCliente();

enum TipoComida {COME_RACAO, COME_CAPIM}

interface IAnimal{
    comer(tipocomida:TipoComida);
}
class Cachorro implements IAnimal{
    comer(tipocomida:TipoComida){
        console.log("Cachorro " + TipoComida[tipocomida]);
    }
}
class Cavalo implements IAnimal{
    comer( tipocomida:TipoComida){
        console.log("Cavalo " + TipoComida[tipocomida]);
    }
}
 var cachorro:IAnimal = new Cachorro();
 cachorro.comer(TipoComida.COME_RACAO);
var cavalo: IAnimal = new Cavalo();
cavalo.comer(TipoComida.COME_CAPIM); 
