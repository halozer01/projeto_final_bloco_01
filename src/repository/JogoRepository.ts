import { Jogo } from "../Model/Jogo";
import { ProdutoRepository } from "./ProdutoRepository";

export class JogoRepository implements ProdutoRepository {  
    private listaJogos: Jogo[] = [];

    listarTodos(): void {
        if (this.listaJogos.length === 0) {
            console.log("\nNenhum jogo cadastrado.\n");
            return;
        }
        console.log("\n===== Lista de Jogos =====");
        this.listaJogos.forEach(jogo => jogo.visualizar());
    }

    buscarPorId(id: number): Jogo | undefined {
        return this.listaJogos.find(jogo => jogo.id === id);
    }

    cadastrar(jogo: Jogo): void {
        this.listaJogos.push(jogo);
        console.log(`\nO jogo "${jogo.nome}" foi cadastrado com sucesso!\n`);
    }

    atualizar(jogoAtualizado: Jogo): void {
        const index = this.listaJogos.findIndex(j => j.id === jogoAtualizado.id);
        if (index !== -1) {
            this.listaJogos[index] = jogoAtualizado;
            console.log(`\nO jogo "${jogoAtualizado.nome}" foi atualizado com sucesso!\n`);
        } else {
            console.log("\nJogo não encontrado.\n");
        }
    }

   
public deletar(id: number): void {
    const index = this.listaJogos.findIndex(jogo => jogo.id === id);

    if (index !== -1) {
        const jogoRemovido: Jogo = this.listaJogos[index]!;
        console.log(`\nJogo '${jogoRemovido.nome}' excluído.`);
        this.listaJogos.splice(index, 1);
    } else {
        console.log("\nJogo não encontrado!");
    }
}

    }

