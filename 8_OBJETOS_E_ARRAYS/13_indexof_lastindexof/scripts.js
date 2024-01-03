let nums = [5,10,6,14,3,10,2,2];

// Procura a primeira ocorrência do número 2 no array e imprime o índice
console.log(nums.indexOf(2));
// Procura a última ocorrência do número 2 no array e imprime o índice
console.log(nums.lastIndexOf(2));

// ------ Codigo REAL


let numss = [5, 10, 2, 32, 3, 4, 5, 6];

// Exibindo todas as pontuações dos jogadores
console.log("Pontuações dos Jogadores:", numss);

// Encontrando a pontuação máxima
let pontuacaoMaxima = Math.max(...numss);
console.log("Pontuação Máxima:", pontuacaoMaxima);

// Encontrando a pontuação mínima
let pontuacaoMinima = Math.min(...numss);
console.log("Pontuação Mínima:", pontuacaoMinima);

// Calculando a média das pontuações
let mediaPontuacoes = numss.reduce((total, pontuacao) => total + pontuacao, 0) / numss.length;
console.log("Média das Pontuações:", mediaPontuacoes);

// Encontrando a primeira ocorrência de uma pontuação específica (por exemplo, 3)
let pontuacaoEspecifica = 3;
let indicePontuacaoEspecifica = numss.indexOf(pontuacaoEspecifica);

if (indicePontuacaoEspecifica !== -1) {
  console.log(`A pontuação ${pontuacaoEspecifica} foi encontrada no índice ${indicePontuacaoEspecifica}.`);
} else {
  console.log(`A pontuação ${pontuacaoEspecifica} não foi encontrada.`);
}

// Removendo a última pontuação do array
let pontuacaoRemovida = numss.pop();
console.log(`Pontuação removida: ${pontuacaoRemovida}`);
console.log("Pontuações Atualizadas:", numss);

