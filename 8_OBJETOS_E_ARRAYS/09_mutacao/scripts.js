let pessoa = {
  nome: "Anderson"
}

let pessoa2 = pessoa;

let pessoa3 = {
  nome: "Danilo"
}

console.log(pessoa == pessoa2);
console.log(pessoa == pessoa);
console.log(pessoa3 = pessoa2);

pessoa2.nome = "Pedro";
console.log(pessoa.nome);

pessoa.nome = "Beatriz";
console.log(pessoa2.nome); // "beatriz"

/*
Em resumo, quando você atribui um objeto a outra variável em JavaScript, 
você está criando uma referência a esse objeto, não uma cópia independente. Alterações feitas através de uma referência afetam o objeto subjacente e são refletidas através de outras referências a esse objeto.
*/
