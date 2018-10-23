class Usuario{
    id:number;
    nome:string;
    cpf:number;
}
class Endereco{
    rua:string;
    numero:number;
}
class Cliente2 extends Usuario{
    endereco:Endereco;
}

function exibirCliente2(){
let cliente:Cliente2 = new Cliente2();
cliente.cpf = 12312312;
cliente.nome = "Nome Cliente";
cliente.endereco = {rua: "Rua teste", numero: 56}
console.log(cliente);
}
 exibirCliente2();


