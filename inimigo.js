"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Urso = exports.Bruxa = exports.Orc = exports.Goblin = void 0;
var Item_1 = require("./Item");
var Goblin = /** @class */ (function () {
    function Goblin(nome, nivel, vida, forca, agilidade, inteligencia) {
        this.nome = nome;
        this.nivel = nivel;
        this.vida = vida;
        this.forca = forca;
        this.agilidade = agilidade;
        this.inteligencia = inteligencia;
    }
    Goblin.prototype.receberDano = function (dano) {
        if (dano <= 0) {
            console.log("".concat(this.nome, " n\u00E3o sofreu dano."));
        }
        else {
            this.vida -= dano;
            console.log("".concat(this.nome, " recebeu ").concat(dano, " de dano! Vida restante: ").concat(this.vida));
            if (this.vida <= 0) {
                console.log("".concat(this.nome, " foi derrotado!"));
                this.vida = 0;
                this.droparItem();
            }
        }
    };
    Goblin.prototype.causarDano = function (alvo) {
        console.log("".concat(this.nome, " ataca ").concat(alvo.nome, " causando ").concat(this.forca, " de dano!"));
        alvo.vida -= this.forca;
        console.log("".concat(alvo.nome, " agora tem ").concat(alvo.vida, " de vida."));
        if (alvo.vida <= 0) {
            console.log("".concat(alvo.nome, " foi derrotado!"));
        }
    };
    Goblin.prototype.droparItem = function () {
        console.log("".concat(this.nome, " dropou um item"));
        return new Item_1.Item("Espada enferrujada", "");
    };
    return Goblin;
}());
exports.Goblin = Goblin;
var Orc = /** @class */ (function () {
    function Orc(nome, nivel, vida, forca, agilidade, inteligencia) {
        this.nome = nome;
        this.nivel = nivel;
        this.vida = vida;
        this.forca = forca;
        this.agilidade = agilidade;
        this.inteligencia = inteligencia;
    }
    Orc.prototype.receberDano = function (dano) {
        if (dano <= 0) {
            console.log("".concat(this.nome, " n\u00E3o sofreu dano."));
        }
        else {
            this.vida -= dano;
            console.log("".concat(this.nome, " recebeu ").concat(dano, " de dano! Vida restante: ").concat(this.vida));
            if (this.vida <= 0) {
                console.log("".concat(this.nome, " foi derrotado!"));
                this.vida = 0;
                this.droparItem();
            }
        }
    };
    Orc.prototype.causarDano = function (alvo) {
        console.log("".concat(this.nome, " ataca ").concat(alvo.nome, " causando ").concat(this.forca, " de dano."));
        alvo.vida -= this.forca;
        console.log("".concat(alvo.nome, " agora tem ").concat(alvo.vida, " de vida."));
        if (alvo.vida <= 0) {
            console.log("".concat(alvo.nome, " foi derrotado!"));
        }
    };
    Orc.prototype.droparItem = function () {
        console.log("".concat(this.nome, " dropou um item"));
        return new Item_1.Item("Espada enferrujada", "");
    };
    return Orc;
}());
exports.Orc = Orc;
var Bruxa = /** @class */ (function () {
    function Bruxa(nome, nivel, vida, forca, agilidade, inteligencia) {
        this.nome = nome;
        this.nivel = nivel;
        this.vida = vida;
        this.forca = forca;
        this.agilidade = agilidade;
        this.inteligencia = inteligencia;
    }
    Bruxa.prototype.receberDano = function (dano) {
        if (dano <= 0) {
            console.log("".concat(this.nome, " n\u00E3o sofreu dano."));
        }
        else {
            this.vida -= dano;
            console.log("".concat(this.nome, " recebeu ").concat(dano, " de dano! Vida restante: ").concat(this.vida));
            if (this.vida <= 0) {
                console.log("".concat(this.nome, " foi derrotado!"));
                this.vida = 0;
                this.droparItem();
            }
        }
    };
    Bruxa.prototype.causarDano = function (alvo) {
        console.log("".concat(this.nome, " ataca ").concat(alvo.nome, " causando ").concat(this.forca, " de dano!"));
        alvo.vida -= this.forca;
        console.log("".concat(alvo.nome, " agora tem ").concat(alvo.vida, " de vida."));
        if (alvo.vida <= 0) {
            console.log("".concat(alvo.nome, " foi derrotado!"));
        }
    };
    Bruxa.prototype.droparItem = function () {
        console.log("".concat(this.nome, " dropou um item"));
        return new Item_1.Item("Espada enferrujada", "");
    };
    return Bruxa;
}());
exports.Bruxa = Bruxa;
var Urso = /** @class */ (function () {
    function Urso(nome, nivel, vida, forca, agilidade, inteligencia) {
        this.nome = nome;
        this.nivel = nivel;
        this.vida = vida;
        this.forca = forca;
        this.agilidade = agilidade;
        this.inteligencia = inteligencia;
    }
    Urso.prototype.receberDano = function (dano) {
        if (dano <= 0) {
            console.log("".concat(this.nome, " n\u00E3o sofreu dano."));
        }
        else {
            this.vida -= dano;
            console.log("".concat(this.nome, " recebeu ").concat(dano, " de dano! Vida restante: ").concat(this.vida));
            if (this.vida <= 0) {
                console.log("".concat(this.nome, " foi derrotado!"));
                this.vida = 0;
                this.droparItem();
            }
        }
    };
    Urso.prototype.causarDano = function (alvo) {
        console.log("".concat(this.nome, " ataca ").concat(alvo.nome, " causando ").concat(this.forca, " de dano!"));
        alvo.vida -= this.forca;
        console.log("".concat(alvo.nome, " agora tem ").concat(alvo.vida, " de vida."));
        if (alvo.vida <= 0) {
            console.log("".concat(alvo.nome, " foi derrotado!"));
        }
    };
    Urso.prototype.droparItem = function () {
        console.log("".concat(this.nome, " dropou um item"));
        return new Item_1.Item("Espada enferrujada", "");
    };
    return Urso;
}());
exports.Urso = Urso;
