import { Produto } from "../Model/Produto";


export interface ProdutoRepository {
    cadastrar(produto: Produto): void;
    listarTodos(): void;
    buscarPorId(id: number): Produto | undefined;
    atualizar(produto: Produto): void;
    deletar(id: number): void;
}
