// Função para calcular o saldo e determinar o nível
function calcularRankeadas(vitorias, derrotas) {
    // Calculando o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Determinando o nível com base na quantidade de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Exibindo a mensagem final
    console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`);
}

// Exemplo de uso da função
calcularRankeadas(75, 30); // Altere os valores para testar diferentes cenários