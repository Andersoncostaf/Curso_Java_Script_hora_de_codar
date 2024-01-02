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
console.log(pessoa2.nome);
