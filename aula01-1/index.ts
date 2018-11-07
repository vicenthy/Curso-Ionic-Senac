function main(){
    const hello = "Bem Vindo ao TypeScript";
    console.log(hello);

    const p = document.createElement('h1');
    p.textContent = hello;
    document.body.appendChild(p);
}

//main();
//Orientação a Objeto TypeScript
class Usuario implements Cliente{
    nome: string;
    sobreNome: string;
    cpf:string;

    constructor(nome:string, sobreNome:string, cpf?:string ){
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.cpf = cpf;
    }
    msg(){
        return `Olá ${this.nome} ${this.sobreNome}.`;
    }

    obterCpf(){
        return this.cpf;
    }
}
const usuario = new Usuario('João', 'Da Silva', '6751637516723516');
console.log(usuario.msg());
console.log(usuario.obterCpf());


class Funcionario extends Usuario{
    matricula:number;

    constructor(nome:string, sobreNome:string, matricula:number){
       super(nome, sobreNome); 
        this.matricula = matricula;
    }
    msg(){
        return `Olá ${this.nome} ${this.sobreNome}. Sua matricula é: ${this.matricula}`;
    }
}
const funcionario = new Funcionario('João 2', 'Da Silva de novo', 27333 );
console.log(funcionario.msg());
console.log('Matricula: ' + funcionario.matricula);

interface Cliente {
    cpf:string;
    nome:string;

    obterCpf();
}
