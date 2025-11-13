import readlinesync = require("readline-sync");

function main(){

     let opcao: number;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                BYTE CLOUD GAMES                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Jogo                       ");
        console.log("            2 - Listar todas os Jogos                ");
        console.log("            3 - Atualizar informações do jogo        ");
        console.log("            4 - Excluir jogo                         ");
        console.log("            5 - sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 5) {
            console.log("\nObrigado por visitar a Byte Cloud Games!");
            process.exit(0);
        }
         switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Jogo\n\n");

                break;
            case 2:
                console.log("\n\nListar todas os Jogos\n\n");

                break;
            case 3:
                console.log("\n\nAtualizar informações do jogo\n\n");

                break;
            case 4:
                console.log("\n\nExcluir jogo\n\n");

                break;
            case 5:
                console.log("\n\nsair\n\n");

                break;
        }
    }
}

main();