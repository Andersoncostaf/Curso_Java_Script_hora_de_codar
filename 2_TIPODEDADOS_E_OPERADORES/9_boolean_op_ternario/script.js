console.log(5>2 ? 'É sim' : 'É não');
console.log(3001282 < 2018281929 ? 'É maior sim' : 'NÃO É');
console.log(false ? 5 : 4);
console.log("Anderson" == "Anderson" ? "Olá, Anderson" : "Não é o Anderson");


//OUTRO EXEMPLO MAIS COMPLEXO
let temperatura = 25;

let resultado =
  temperatura > 30
    ? "Muito quente"
    : temperatura > 20
    ? "Agradável"
    : "Frio";

console.log(resultado); // Saída: "Agradável"