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
function main() {
    var hello = "Bem Vindo ao TypeScript";
    console.log(hello);
    var p = document.createElement('h1');
    p.textContent = hello;
    document.body.appendChild(p);
}
//main();
//Orientação a Objeto TypeScript
var Usuario = /** @class */ (function () {
    function Usuario(nome, sobreNome, cpf) {
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.cpf = cpf;
    }
    Usuario.prototype.msg = function () {
        return "Ol\u00E1 " + this.nome + " " + this.sobreNome + ".";
    };
    Usuario.prototype.obterCpf = function () {
        return this.cpf;
    };
    return Usuario;
}());
var usuario = new Usuario('João', 'Da Silva', '6751637516723516');
console.log(usuario.msg());
console.log(usuario.obterCpf());
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, sobreNome, matricula) {
        var _this = _super.call(this, nome, sobreNome) || this;
        _this.matricula = matricula;
        return _this;
    }
    Funcionario.prototype.msg = function () {
        return "Ol\u00E1 " + this.nome + " " + this.sobreNome + ". Sua matricula \u00E9: " + this.matricula;
    };
    return Funcionario;
}(Usuario));
var funcionario = new Funcionario('João 2', 'Da Silva de novo', 27333);
console.log(funcionario.msg());
console.log('Matricula: ' + funcionario.matricula);
