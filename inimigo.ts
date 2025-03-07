import { Item } from "./Item";

interface inimigo{
    nome: string;
    nivel: number;
    vida: number;
    forca: number;
    agilidade: number;
    inteligencia: number;
    

    droparItem(item:string): void {
    }
}