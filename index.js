"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iniciar = iniciar;
var readlineSync = require("readline-sync");
var Personagem_1 = require("./Personagem");
var inimigo_1 = require("./inimigo");
function iniciar() {
    var personagemEscolhido = escolherClasse();
    console.log("Bem vindo Jovem Viajante ".concat(personagemEscolhido.nome, " esse \u00E9 o inicio da sua aventura."));
    console.log("Siga para o norte até encontrar uma caverna, tome muito cuidado e boa sorte.");
    readlineSync.question("Aperte Enter pra continuar...");
    if (lutaGoblin(personagemEscolhido)) {
        var escolha = readlineSync.question("O que quer fazer agora?\n1. Explorar a passagem secreta.\n2. Procurar por itens.\nEscolha: ");
    }
    if (lutaBruxa(personagemEscolhido)) {
        lutaUrsoECristiano(personagemEscolhido);
    }
}
function escolherClasse() {
    var nome = readlineSync.question('Qual seu nome, Jovem Viajante? ');
    var escolha = readlineSync.question("Escolha a Classe: \n1. Guerreiro\n2. Mago\n3. Arqueiro\n4. Samurai\n5. Vampiro\nEscolha (1-5): ");
    switch (escolha) {
        case '1': return new Personagem_1.Guerreiro(nome);
        case '2': return new Personagem_1.Mago(nome);
        case '3': return new Personagem_1.Arqueiro(nome);
        case '4': return new Personagem_1.Samurai(nome);
        case '5': return new Personagem_1.Vampiro(nome);
        default:
            console.log('foi tanso e agora vai pegar um randola ai.');
            return new Personagem_1.Guerreiro(nome);
    }
}
function lutaGoblin(personagem) {
    console.log("Você entrou na caverna e encontrou um Goblin feio da p#rra!");
    var goblin = new inimigo_1.Goblin("Goblin", 1, 30, 20, 20, -20);
    while (true) {
        var acao = readlineSync.question("O que fazer?\n1. Atacar\n2. Fugir\n3. Sair do jogo\nEscolha: ");
        switch (acao) {
            case '1':
                goblin.receberDano(10);
                if (goblin.vida <= 0) {
                    console.log("Você derrotou o Goblin feio da Desgraça");
                    return true;
                }
                goblin.causarDano(personagem);
                if (personagem.vida <= 0) {
                    console.log("".concat(personagem.nome, " Morreu pro goblin feiokkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"));
                    return false;
                }
                break;
            case '2':
                console.log("Você fugiu para outra parte da caverna.");
                return true;
            case '3':
                console.log("Você saiu do jogo.");
                return false;
            default:
                console.log("Digita um número válido animal.");
        }
    }
}
function lutaBruxa(personagem) {
    console.log("Você segue pela passagem secreta e encontra uma velha desgraçada.");
    var bruxa = new inimigo_1.Bruxa("Bruxa", 1, 40, 20, 20, -20);
    while (true) {
        var escolha = readlineSync.question("O que tu quer fazer? \n1. Atacar a Bruxa.\n2. Aceitar um feiti\u00E7o.\nEscolha: ");
        switch (escolha) {
            case '1':
                bruxa.receberDano(10);
                console.log("Você atacou a bruxa velha");
                if (bruxa.vida <= 0) {
                    console.log("Mato a véia na Paulada e Encontrou Dois caminhos.");
                    return true;
                }
                bruxa.causarDano(personagem);
                if (personagem.vida <= 0) {
                    console.log("".concat(personagem.nome, " Morreu pra velha fudida!"));
                    return false;
                }
                break;
                break;
            case '2':
                console.log("A bruxa lançou um feitiço em você (é uma benção)");
                return true;
            default:
                console.log("Opção inválida jegue.");
        }
    }
}
function lutaUrsoECristiano(personagem) {
    console.log("Voce matou a bruxa e se Encontrou com o Urso de Metralhadora e o Cristiano Ronaldo de Bicleta.");
    while (true) {
        var escolha = readlineSync.question("O que vai escolher? \n1. Atacar eles.\n2. Fugir.\nEscolha: ");
        switch (escolha) {
            case '1':
                if (escolha == '1') {
                    console.log('Voce Morreu de forma Brutal (nunca brinque com um Urso de Metralhadora nem com o Cristiano Ronaldo de Bicleta!)');
                    return true;
                }
                break;
            case '2':
                if (escolha == '2') {
                    console.log("Voce Fugiu do mal e achou uma Forma de Salvar o Mundo Pacificamente! (Good Ending)");
                    return true;
                }
                break;
            default:
                console.log("Opção inválida jegue.");
        }
    }
}
iniciar();
