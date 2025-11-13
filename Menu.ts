import readlineSync from "readline-sync";
import { Jogo } from "./src/Model/Jogo";
import { JogoRepository } from "./src/repository/JogoRepository";


function main() {
    const repo = new JogoRepository();
    let opcao: number;

    while (true) {
        console.log("*****************************************************");
        console.log("                BYTE CLOUD GAMES                    ");
        console.log("*****************************************************");
        console.log("1 - Cadastrar Jogo");
        console.log("2 - Listar todos os Jogos");
        console.log("3 - Buscar Jogo por ID");
        console.log("4 - Atualizar informações do Jogo");
        console.log("5 - Excluir Jogo");
        console.log("0 - Sair");
        console.log("*****************************************************");

        opcao = readlineSync.questionInt("\nEscolha uma opção: ");

        switch (opcao) {
            case 1:
                console.log("\nCadastrar Jogo");
                const id = readlineSync.questionInt("ID: ");
                const nome = readlineSync.question("Nome: ");
                const preco = readlineSync.questionFloat("Preço: ");
                const genero = readlineSync.question("Gênero: ");
                const plataforma = readlineSync.question("Plataforma: ");
                const jogo = new Jogo(id, nome, preco, genero, plataforma);
                repo.cadastrar(jogo);
                break;

            case 2:
                console.log("\nListar todos os Jogos");
                repo.listarTodos();
                break;

            case 3:
                console.log("\nBuscar Jogo por ID");
                const idBusca = readlineSync.questionInt("Informe o ID: ");
                const encontrado = repo.buscarPorId(idBusca);
                if (encontrado) {
                    encontrado.visualizar();
                } else {
                    console.log("\nJogo não encontrado.\n");
                }
                break;

            case 4:
                console.log("\nAtualizar informações do Jogo");
                const idAtualizar = readlineSync.questionInt("ID do jogo para atualizar: ");
                const nomeNovo = readlineSync.question("Novo nome: ");
                const precoNovo = readlineSync.questionFloat("Novo preço: ");
                const generoNovo = readlineSync.question("Novo gênero: ");
                const plataformaNova = readlineSync.question("Nova plataforma: ");
                const jogoAtualizado = new Jogo(idAtualizar, nomeNovo, precoNovo, generoNovo, plataformaNova);
                repo.atualizar(jogoAtualizado);
                break;

            case 5:
                console.log("\nExcluir Jogo");
                const idDeletar = readlineSync.questionInt("ID do jogo para excluir: ");
                repo.deletar(idDeletar);
                break;

            case 0:
                console.log("\nObrigado por visitar a Byte Cloud Games!");
                process.exit(0);

            default:
                console.log("\nOpção inválida!\n");
        }
    }
}

main();