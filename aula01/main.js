var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var p = document.createElement('p');
var texto = "Bem vindo ao TypeScript";
p.textContent = texto;
document.body.appendChild(p);
// Tipos de dados
var quaquercoisa = {
    nome: "nome",
    idade: 123
};
var bool = false;
var texto_string = 'isso é um texto';
var numero = 2.;
var funcao = function () {
    console.log("isso é uma função");
};
funcao();
var colecao = ["item 1", "item 2"];
function hello() {
    console.log("Hello!");
}
hello();
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    return Pessoa;
}());
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cliente;
}(Pessoa));
function exibirCliente() {
    var p = new Pessoa();
    p.id = 1;
    p.nome = "Nome Pessoa";
    var c = new Cliente();
    c.nome = "Nome Cliente";
    c.id = 2;
    c.cpf = 123123123;
    console.log(p);
    console.log(c);
}
exibirCliente();
var TipoComida;
(function (TipoComida) {
    TipoComida[TipoComida["COME_RACAO"] = 0] = "COME_RACAO";
    TipoComida[TipoComida["COME_CAPIM"] = 1] = "COME_CAPIM";
})(TipoComida || (TipoComida = {}));
var Cachorro = /** @class */ (function () {
    function Cachorro() {
    }
    Cachorro.prototype.comer = function (tipocomida) {
        console.log("Cachorro " + TipoComida[tipocomida]);
    };
    return Cachorro;
}());
var Cavalo = /** @class */ (function () {
    function Cavalo() {
    }
    Cavalo.prototype.comer = function (tipocomida) {
        console.log("Cavalo " + TipoComida[tipocomida]);
    };
    return Cavalo;
}());
var cachorro = new Cachorro();
cachorro.comer(TipoComida.COME_RACAO);
var cavalo = new Cavalo();
cavalo.comer(TipoComida.COME_CAPIM);
