import { Item } from "./Item";
import { Personagem } from "./Personagem";




export interface inimigo{
    nome: string;
    nivel: number;
    vida: number;
    forca: number;
    agilidade: number;
    inteligencia: number;
    
}

export class Goblin implements inimigo{
    receberDano(dano: number): void {
        if (dano <= 0) {
            console.log(`${this.nome} não sofreu dano.`);
        } else {
            this.vida -= dano;
            console.log(`${this.nome} recebeu ${dano} de dano! Vida restante: ${this.vida}`);
            
            if (this.vida <= 0) {
                console.log(`${this.nome} foi derrotado!`);
                this.vida = 0;
                
                this.droparItem();
                
            }
        }
    }
    causarDano(alvo: Personagem ): void {
        console.log(`${this.nome} ataca ${alvo.nome} causando ${this.forca} de dano!`);
        alvo.vida -= this.forca;
        console.log(`${alvo.nome} agora tem ${alvo.vida} de vida.`);
        if (alvo.vida <= 0) {
            console.log(`${alvo.nome} foi derrotado!`);
        }
    }
    
    droparItem(): Item {
        console.log(`${this.nome} dropou um item`);
        return new Item("Espada enferrujada","");
    }
    nome: string;
    nivel: number;
    vida: number;
    forca: number;
    agilidade: number;
    inteligencia: number;
    
    constructor(nome: string, nivel: number, vida: number, forca: number, agilidade: number, inteligencia: number){
        this.nome = nome;
        this.nivel = nivel;
        this.vida = vida;
        this.forca = forca;
        this.agilidade = agilidade;
        this.inteligencia = inteligencia;
    }
}
    export class Orc implements inimigo{

        receberDano(dano: number): void {
            if (dano <= 0) {
                console.log(`${this.nome} não sofreu dano.`);
            } else {
                this.vida -= dano;
                console.log(`${this.nome} recebeu ${dano} de dano! Vida restante: ${this.vida}`);
                
                if (this.vida <= 0) {
                    console.log(`${this.nome} foi derrotado!`);
                    this.vida = 0;
                    
                    this.droparItem();
                    
                }
            }
        }
        causarDano(alvo: Personagem ): void {
            console.log(`${this.nome} ataca ${alvo.nome} causando ${this.forca} de dano.`);
            alvo.vida -= this.forca;
            console.log(`${alvo.nome} agora tem ${alvo.vida} de vida.`);
            if (alvo.vida <= 0) {
                console.log(`${alvo.nome} foi derrotado!`);
            }
        }
        
        droparItem(): Item {
            console.log(`${this.nome} dropou um item`);
            return new Item("Espada enferrujada","");
        }

        nome: string;
        nivel: number;
        vida: number;
        forca: number;
        agilidade: number;
        inteligencia: number;
        
        constructor(nome: string, nivel: number, vida: number, forca: number, agilidade: number, inteligencia: number){
            this.nome = nome;
            this.nivel = nivel;
            this.vida = vida;
            this.forca = forca;
            this.agilidade = agilidade;
            this.inteligencia = inteligencia;
        }
    }
    
    export class Bruxa implements inimigo{
        receberDano(dano: number): void {
            if (dano <= 0) {
                console.log(`${this.nome} não sofreu dano.`);
            } else {
                this.vida -= dano;
                console.log(`${this.nome} recebeu ${dano} de dano! Vida restante: ${this.vida}`);
                
                if (this.vida <= 0) {
                    console.log(`${this.nome} foi derrotado!`);
                    this.vida = 0;
                    
                    this.droparItem();
                    
                }
            }
        }
        causarDano(alvo: Personagem ): void {
            console.log(`${this.nome} ataca ${alvo.nome} causando ${this.forca} de dano!`);
            alvo.vida -= this.forca;
            console.log(`${alvo.nome} agora tem ${alvo.vida} de vida.`);
            if (alvo.vida <= 0) {
                console.log(`${alvo.nome} foi derrotado!`);
            }
        }
        
        droparItem(): Item {
            console.log(`${this.nome} dropou um item`);
            return new Item("Espada enferrujada","");
        }

        nome: string;
        nivel: number;
        vida: number;
        forca: number;
        agilidade: number;
        inteligencia: number;
        
        constructor(nome: string, nivel: number, vida: number, forca: number, agilidade: number, inteligencia: number){
            this.nome = nome;
            this.nivel = nivel;
            this.vida = vida;
            this.forca = forca;
            this.agilidade = agilidade;
            this.inteligencia = inteligencia;
    
    }
        }
    
        export class Urso implements inimigo{

            receberDano(dano: number): void {
                if (dano <= 0) {
                    console.log(`${this.nome} não sofreu dano.`);
                } else {
                    this.vida -= dano;
                    console.log(`${this.nome} recebeu ${dano} de dano! Vida restante: ${this.vida}`);
                    
                    if (this.vida <= 0) {
                        console.log(`${this.nome} foi derrotado!`);
                        this.vida = 0;
                        
                        this.droparItem();
                        
                    }
                }
            }
            causarDano(alvo: Personagem ): void {
                console.log(`${this.nome} ataca ${alvo.nome} causando ${this.forca} de dano!`);
                alvo.vida -= this.forca;
                console.log(`${alvo.nome} agora tem ${alvo.vida} de vida.`);
                if (alvo.vida <= 0) {
                    console.log(`${alvo.nome} foi derrotado!`);
                }
            }
            
            droparItem(): Item {
                console.log(`${this.nome} dropou um item`);
                return new Item("Espada enferrujada","");
            }

            nome: string;
            nivel: number;
            vida: number;
            forca: number;
            agilidade: number;
            inteligencia: number;
            
            constructor(nome: string, nivel: number, vida: number, forca: number, agilidade: number, inteligencia: number){
                this.nome = nome;
                this.nivel = nivel;
                this.vida = vida;
                this.forca = forca;
                this.agilidade = agilidade;
                this.inteligencia = inteligencia;
            }
    
    }
    







    
