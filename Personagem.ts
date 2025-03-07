import { inimigo } from "./inimigo";
import { Item } from "./Item";

export class Personagem {
    nome: string;
    nivel: number;
    vida: number;
    forca: number;
    agilidade: number;
    inteligencia: number;
    inventario: string[];

    constructor(
        nome: string,
        nivel: number,
        vida: number,
        forca: number,
        agilidade: number,
        inteligencia: number,
        inventario = []
        
    ){
        this.nome = nome;
        this.nivel = nivel;
        this.vida = vida;
        this.forca = forca;
        this.agilidade = agilidade;
        this.inteligencia = inteligencia;
        this.inventario = [];
    }

    atacar(): string{
        return  `${this.nome} Atacou causando ${this.forca * 2} de dano`
    }
    
    defesa(): string{
        return `${this.nome} Defendeu o Ataque Recebido` 
    }

    receberDano(dano: number): void {
        if (dano <= 0) {
            console.log(`${this.nome} não sofreu dano.`);
        } else {
            this.vida -= dano;
            console.log(`${this.nome} recebeu ${dano} de dano! Vida restante: ${this.vida}`);
    
            if (this.vida <= 0) {
                console.log(`${this.nome} foi derrotado!`);
                this.vida = 0;
        
                }
            }
        }

        causarDano(alvo: inimigo): void {
            console.log(`${this.nome} ataca ${alvo.nome} causando ${this.forca} de dano!`);
            alvo.vida -= this.forca;
            console.log(`${alvo.nome} agora tem ${alvo.vida} de vida.`);
            if (alvo.vida <= 0) {
                console.log(`${alvo.nome} foi derrotado!`);
            }
        }
        adicionaItem(item: string): void {
          this.inventario.push(item);
           console.log(`${this.nome} Adicionou ${item} ao seu Próprio inventario.`)
        }
    }



    export class Guerreiro extends Personagem{
    constructor(nome: string){
        super(nome, 1, 150, 40, 50, 50 ['Espada e escudo'])
    }
}

   export class Mago extends Personagem{
    constructor(nome: string){
        super(nome, 1, 85, 25, 100, 200 ['Luvas Magicas'])
    } 
}

    export class Arqueiro extends Personagem{
    constructor(nome: string){
        super(nome, 1, 80, 25, 200, 100 ['Arco'])
    } 
}

    export class Samurai extends Personagem{
    constructor(nome: string){
        super(nome, 1, 120, 40, 150, 100 ['Katana'])
    } 
}

    export class Vampiro extends Personagem{
    constructor(nome: string){
        super(nome, 1, 120, 45, 150, 100 ['Rapieira'])
    } 
}
