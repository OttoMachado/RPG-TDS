"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iniciar = iniciar;
var readlineSync = require("readline-sync");
var inimigo_1 = require("./inimigo");
function iniciar() {
    var nome = readlineSync.question("Qual seu nome Jovem viajante?");
    console.log("Entendi seu nome viajante! ".concat(nome, " \u00E9 o nome de quem ir\u00E1 salvar a nossa vila desses monstros horr\u00EDveis"));
    console.log("Ah... \u00E9 mesmo... parece que voc\u00EA n\u00E3o sabe nada do que est\u00E1 acontecendo aqui, jovem viajante.\n         Vou me esfor\u00E7ar para lembrar de tudo o que posso, embora o esquecimento tenha tomado conta do meu c\u00E9rebro e meus olhos n\u00E3o consigam mais enxergar nada. Por\u00E9m,\n          lembro que esta era uma vila bem tranquila at\u00E9 aquele maldito Urso aparecer e abrir um portal para a entrada de v\u00E1rias criaturas horrendas.\n           Hoje, precisamos nos esconder e tentar lutar contra esses monstros. Muitos dizem que, na verdade,\n         esse urso fez um pacto sat\u00E2nico para conseguir abrir um portal direto das profundezas do inferno. Nosso conhecimento sobre essa hist\u00F3ria \u00E9 muito rasa e ofuscado.");
    console.log("".concat(nome, " eu sempre sonhei com o dia em que um jovem viajante viria de longe e salvaria a alma dessas pobre pessoas que andam t\u00E3o devastadas."));
    console.log("eu estou velho demais pra isso, por favor salve a todos que residem nesse lugar.");
    console.log("Siga em direção norte até chegar em uma caverna, tome muito cuidado e boa sorte.");
}
var continuarJogo = true;
var goblin = new inimigo_1.Goblin("Goblin feio da p#rra", 1, 30, 20, 20, -20);
while (continuarJogo) {
    var acao = readlineSync.question("Voc\u00EA entrou na caverna e encontrou um Goblin feio da p#rra, O que voc\u00EA vai fazer agora?\n            \n            \n1 Op\u00E7\u00E3o 1: Atacar o Goblin feio da p#rra.\n\n            \n2 Op\u00E7\u00E3o 2: Mudar a rota seguindo pro lado Oposto do Goblin feio da p#rra.\n\n            \n3 Op\u00E7\u00E3o 3: Sair desse Jogo Ruim.\n\n            ");
    switch (acao) {
        case '1':
            goblin.receberDano(10);
            break;
        case '2':
            console.log("Voce decidiu fugir desse bicho feio do kct e saiu correndo pra outro lado da caverna");
            break;
        case '3':
            console.log("Voce saiu do Jogo de tanto medo da cara desse Goblin.");
            continuarJogo = false;
            break;
        default:
            console.log("Tá na Disney? Digita certo os números seu Animal.");
    }
}
iniciar();
