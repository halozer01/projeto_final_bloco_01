import { Produto } from "./Produto";

export class Jogo extends Produto {
    private _genero: string;
    private _plataforma: string;

    constructor(id: number, nome: string, preco: number, genero: string, plataforma: string) {
        super(id, nome, preco);
        this._genero = genero;
        this._plataforma = plataforma;
    }

    public get genero(): string {
        return this._genero;
    }

    public set genero(genero: string) {
        this._genero = genero;
    }

    public get plataforma(): string {
        return this._plataforma;
    }

    public set plataforma(plataforma: string) {
        this._plataforma = plataforma;
    }

    // Sobrescrita (polimorfismo)
    public visualizar(): void {
        console.log("\n===== Detalhes do Jogo =====");
        console.log(`Gênero: ${this._genero}`);
        console.log(`Plataforma: ${this._plataforma}`);
        console.log("==============================\n");
    }
}

   