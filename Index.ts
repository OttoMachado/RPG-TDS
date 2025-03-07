import * as readlineSync from 'readline-sync';
import { Arqueiro, Guerreiro, Mago, Personagem, Samurai, Vampiro } from './Personagem';
import { Bruxa, Goblin } from './inimigo';

function escolherClasse(): Personagem {
    const escolha = readlineSync.question(
        `Escolha a Classe: \n1. Guerreiro\n2. Mago\n3. Arqueiro\n4. Samurai\n5. Vampiro\nEscolha (1-5): `
    );
    const nome = readlineSync.question('Qual seu nome, Jovem Viajante? ');

    switch (escolha) {
        case '1': return new Guerreiro(nome);
        case '2': return new Mago(nome);
        case '3': return new Arqueiro(nome);
        case '4': return new Samurai(nome);
        case '5': return new Vampiro(nome);
        default:
            console.log('Fez merda na digitação e pegou um Aleatório ai.');
            return new Guerreiro(nome);
    }
}

function continua1(VitoriaG: boolean, personagem: Personagem): void {
    if (VitoriaG) {
        console.log(`Parabéns, ${personagem.nome}! Você derrotou o Goblin!`);
        console.log("Após a batalha, você percebe uma passagem secreta dentro da caverna...");

        const escolha = readlineSync.question(
            `O que deseja fazer agora?\n1. Explorar a passagem secreta.\n2. Procurar por itens.\nEscolha: `
        );

        if (escolha === '1') {
            console.log("Você entra na passagem e descobre uma nova área misteriosa...");
            continua2(personagem);
        } else if (escolha === '2') {
            console.log("Não achou nenhum item KKKKKKKKKKKKKKK.");
        } else {
            console.log("Escolhe o número certo, praga ruim.");
        }
    }
}

function continua2(personagem: Personagem): void {
    console.log("Você segue pela passagem secreta e encontra uma velha bruxa, com um sorriso enigmático em seu rosto.");

    const bruxa = new Bruxa("Bruxa", 1, 30, 20, 20, -20);
    const escolha = readlineSync.question(
        `O que você fará?\n1. Atacar a Bruxa.\n2. Aceitar um feitiço que ela oferece.\nEscolha: `
    );

    switch (escolha) {
        case '1':
            bruxa.receberDano(20);
            console.log("Você atacou a bruxa!");
            break;
        case '2':
            console.log("A bruxa lança um feitiço em você, melhorando suas habilidades por um tempo.");
            break;
        default:
            console.log("Opção inválida! A bruxa apenas observa sua indecisão...");
    }
}

export function iniciar(): void {
    const personagemEscolhido = escolherClasse();

    console.log(`Entendi seu nome, viajante! ${personagemEscolhido.nome} é o nome de quem irá salvar a nossa vila desses monstros horríveis.`);
    console.log(`Ah... é mesmo... parece que você não sabe nada do que está acontecendo aqui, jovem viajante.
Vou me esforçar para lembrar de tudo o que posso, embora o esquecimento tenha tomado conta do meu cérebro e meus olhos não consigam mais enxergar nada. Porém,
lembro que esta era uma vila bem tranquila até aquele maldito Urso aparecer e abrir um portal para a entrada de várias criaturas horrendas.
Hoje, precisamos nos esconder e tentar lutar contra esses monstros. Muitos dizem que, na verdade,
esse urso fez um pacto satânico para conseguir abrir um portal direto das profundezas do inferno. Nosso conhecimento sobre essa história é muito raso e ofuscado.`);

    console.log(`${personagemEscolhido.nome}, eu sempre sonhei com o dia em que um jovem viajante viria de longe e salvaria a alma dessas pobres pessoas que andam tão devastadas.`);
    console.log("Eu estou velho demais pra isso, por favor, salve a todos que residem nesse lugar.");
    console.log("Siga em direção norte até chegar em uma caverna, tome muito cuidado e boa sorte.");

    readlineSync.question("Pressione Enter para continuar a jornada e entrar na caverna...");

    const goblin = new Goblin("Goblin feio da p#rra", 1, 30, 20, 20, -20);

    let continuarJogo = true;
    let vitoriaSobreGoblin = false;

    while (continuarJogo) {
        const acao = readlineSync.question(
            `Você entrou na caverna e encontrou um Goblin feio da p#rra! O que fazer?\n1. Atacar\n2. Fugir\n3. Sair do jogo\nEscolha: `
        );

        switch (acao) {
            case '1':
                goblin.receberDano(10);
                if (goblin.vida <= 0) {
                    vitoriaSobreGoblin = true;
                    continuarJogo = false;
                }
                break;
            case '2':
                console.log("Você fugiu para outra parte da caverna.");
                break;
            case '3':
                console.log("Você saiu do jogo.");
                continuarJogo = false;
                break;
            default:
                console.log("Tá na Disney? Digita certo os números, seu Animal.");
        }
    }

    if (vitoriaSobreGoblin) {
        continua1(true, personagemEscolhido);
    }
}

iniciar();
