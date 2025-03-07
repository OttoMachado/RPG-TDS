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
exports.Personagem = void 0;
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
        return _super.call(this, nome, 1, 150, 40, 50, 50['Espada e escudo']) || this;
    }
    return Guerreiro;
}(Personagem));
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nome) {
        return _super.call(this, nome, 1, 85, 25, 100, 200['Luvas Magicas']) || this;
    }
    return Mago;
}(Personagem));
var Arqueiro = /** @class */ (function (_super) {
    __extends(Arqueiro, _super);
    function Arqueiro(nome) {
        return _super.call(this, nome, 1, 80, 25, 200, 100['Arco']) || this;
    }
    return Arqueiro;
}(Personagem));
var Samurai = /** @class */ (function (_super) {
    __extends(Samurai, _super);
    function Samurai(nome) {
        return _super.call(this, nome, 1, 120, 40, 150, 100['Katana']) || this;
    }
    return Samurai;
}(Personagem));
var Vampiro = /** @class */ (function (_super) {
    __extends(Vampiro, _super);
    function Vampiro(nome) {
        return _super.call(this, nome, 1, 120, 45, 150, 100['Rapieira']) || this;
    }
    return Vampiro;
}(Personagem));
