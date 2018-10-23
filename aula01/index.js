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
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());
var Endereco = /** @class */ (function () {
    function Endereco() {
    }
    return Endereco;
}());
var Cliente2 = /** @class */ (function (_super) {
    __extends(Cliente2, _super);
    function Cliente2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cliente2;
}(Usuario));
function exibirCliente2() {
    var cliente = new Cliente2();
    cliente.cpf = 12312312;
    cliente.nome = "Nome Cliente";
    cliente.endereco = { rua: "Rua teste", numero: 56 };
    console.log(cliente);
}
exibirCliente2();
