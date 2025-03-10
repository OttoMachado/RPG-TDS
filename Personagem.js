"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vampiro = exports.Samurai = exports.Arqueiro = exports.Mago = exports.Guerreiro = exports.Personagem = void 0;
var Item_1 = require("./Item");
var Personagem = /** @class */ (function () {
    function Personagem(nome, nivel, vida, forca, agilidade, inteligencia, inventario) {
        if (inventario === void 0) { inventario = []; }
        this.nome = nome;
        this.nivel = nivel;
        this.vida = vida;
        this.forca = forca;
        this.agilidade = agilidade;
        this.inteligencia = inteligencia;
        this.inventario = [];
    }
    Personagem.prototype.atacar = function () {
        return "".concat(this.nome, " Atacou causando ").concat(this.forca * 2, " de dano");
    };
    Personagem.prototype.defesa = function () {
        return "".concat(this.nome, " Defendeu o Ataque Recebido");
    };
    Personagem.prototype.receberDano = function (dano) {
        if (dano <= 0) {
            console.log("".concat(this.nome, " n\u00E3o sofreu dano."));
        }
        else {
            this.vida -= dano;
            console.log("".concat(this.nome, " recebeu ").concat(dano, " de dano! Vida restante: ").concat(this.vida));
            if (this.vida <= 0) {
                console.log("".concat(this.nome, " foi derrotado!"));
                this.vida = 0;
            }
        }
    };
    Personagem.prototype.causarDano = function (alvo) {
        console.log("".concat(this.nome, " ataca ").concat(alvo.nome, " causando ").concat(this.forca, " de dano!"));
        alvo.vida -= this.forca;
        console.log("".concat(alvo.nome, " agora tem ").concat(alvo.vida, " de vida."));
        if (alvo.vida <= 0) {
            console.log("".concat(alvo.nome, " foi derrotado!"));
        }
    };
    Personagem.prototype.adicionaItem = function (item) {
        this.inventario.push(item);
        console.log("".concat(this.nome, " Adicionou ").concat(item, " ao seu Pr\u00F3prio inventario."));
    };
    return Personagem;
}());
exports.Personagem = Personagem;
var Guerreiro = /** @class */ (function (_super) {
    __extends(Guerreiro, _super);
    function Guerreiro(nome) {
        var machado = new Item_1.Item('Machado', 'Arma');
        return _super.call(this, nome, 1, 150, 40, 50, 50, [machado]) || this;
    }
    return Guerreiro;
}(Personagem));
exports.Guerreiro = Guerreiro;
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nome) {
        var luva = new Item_1.Item('Luvas Mágicas', 'Arma');
        return _super.call(this, nome, 1, 85, 25, 100, 200, [luva]) || this;
    }
    return Mago;
}(Personagem));
exports.Mago = Mago;
var Arqueiro = /** @class */ (function (_super) {
    __extends(Arqueiro, _super);
    function Arqueiro(nome) {
        var arco = new Item_1.Item('Arco', 'Arma');
        return _super.call(this, nome, 1, 80, 25, 200, 100, [arco]) || this;
    }
    return Arqueiro;
}(Personagem));
exports.Arqueiro = Arqueiro;
var Samurai = /** @class */ (function (_super) {
    __extends(Samurai, _super);
    function Samurai(nome) {
        var katana = new Item_1.Item('Katana', 'Arma');
        return _super.call(this, nome, 1, 120, 40, 150, 100, [katana]) || this;
    }
    return Samurai;
}(Personagem));
exports.Samurai = Samurai;
var Vampiro = /** @class */ (function (_super) {
    __extends(Vampiro, _super);
    function Vampiro(nome) {
        var rapieira = new Item_1.Item('Rapieira', 'Arma');
        return _super.call(this, nome, 1, 120, 45, 150, 100, [rapieira]) || this;
    }
    return Vampiro;
}(Personagem));
exports.Vampiro = Vampiro;
