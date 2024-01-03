// Criando um objeto chamado pessoa com várias propriedades, incluindo um array
let pessoa = {
  "nome": "Anderson",
  "idade": 35,
  "profissao": "Programador",
  "hobbies": ["Video game", "Leitura", "Correr"]
}

// Convertendo o objeto pessoa para uma string JSON
let pessoaTexto = JSON.stringify(pessoa);

// Imprimindo a string JSON no console
console.log(pessoaTexto);

// Convertendo a string JSON de volta para um objeto JavaScript
let pessoaJSON = JSON.parse(pessoaTexto);

// Imprimindo o objeto JavaScript resultante da conversão
console.log(pessoaJSON);

// Acessando e imprimindo um elemento específico do array hobbies do objeto pessoaJSON
console.log(pessoaJSON.hobbies[0]);
