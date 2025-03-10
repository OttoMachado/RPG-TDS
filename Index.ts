import * as readlineSync from 'readline-sync';
import { Arqueiro, Guerreiro, Mago, Personagem, Samurai, Vampiro } from './Personagem';
import { Bruxa, Goblin } from './inimigo';

export function iniciar(): void {
    const personagemEscolhido = escolherClasse();
    console.log(`Bem vindo Jovem Viajante ${personagemEscolhido.nome} esse é o inicio da sua aventura.`);
    console.log("Siga para o norte até encontrar uma caverna, tome muito cuidado e boa sorte.");
    readlineSync.question("Aperte Enter pra continuar...");
    
    if (lutaGoblin(personagemEscolhido)) {
        const escolha = readlineSync.question(
            `O que quer fazer agora?\n1. Explorar a passagem secreta.\n2. Procurar por itens.\nEscolha: `
        );
    
        if (escolha === '1') {
            lutaBruxa(personagemEscolhido);
        } else {
            console.log("Você não encontrou nada kkkkkkkkkkkkkkkkkkkkk.");
        }
    }
}

function escolherClasse(): Personagem {
    const nome = readlineSync.question('Qual seu nome, Jovem Viajante? ');
    const escolha = readlineSync.question(
        `Escolha a Classe: \n1. Guerreiro\n2. Mago\n3. Arqueiro\n4. Samurai\n5. Vampiro\nEscolha (1-5): `
    );

    switch (escolha) {
        case '1': return new Guerreiro(nome);
        case '2': return new Mago(nome);
        case '3': return new Arqueiro(nome);
        case '4': return new Samurai(nome);
        case '5': return new Vampiro(nome);
        default:
            console.log('foi tanso e agora vai pegar um randola ai.');
            return new Guerreiro(nome);
    }
}

function lutaGoblin(personagem: Personagem): boolean {
    console.log("Você entrou na caverna e encontrou um Goblin feio da p#rra!");
    const goblin = new Goblin("Goblin", 1, 30, 20, 20, -20);

    while (true) {
        const acao = readlineSync.question(
            `O que fazer?\n1. Atacar\n2. Fugir\n3. Sair do jogo\nEscolha: `
        );

        switch (acao) {
            case '1':
                goblin.receberDano(10);
                if (goblin.vida <= 0) {
                    console.log("Você derrotou o Goblin feio da Desgraça");
                    return true;
                }
                break;
            case '2':
                console.log("Você fugiu para outra parte da caverna.");
                return true;
                break;
            case '3':
                console.log("Você saiu do jogo.");
                return false;
            default:
                console.log("Digita um número válido animal.");
        }
    }
}

function lutaBruxa(personagem: Personagem): void {
    console.log("Você segue pela passagem secreta e encontra uma velha desgraçada.");
    const bruxa = new Bruxa("Bruxa", 1, 30, 20, 20, -20);
    const escolha = readlineSync.question(
        `O que tu quer fazer? \n1. Atacar a Bruxa.\n2. Aceitar um feitiço.\nEscolha: `
    );

    switch (escolha) {
        case '1':
            bruxa.receberDano(20);
            console.log("Você atacou a bruxa velha");
            break;
        case '2':
            console.log("A bruxa lançou um feitiço em você (é uma benção)");
            break;
        default:
            console.log("Opção inválida");
    }
}

iniciar();
