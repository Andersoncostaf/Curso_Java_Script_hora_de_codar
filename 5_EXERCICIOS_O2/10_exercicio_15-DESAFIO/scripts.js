/*
Verifique se o número é primo

Um número prinmo, é um número natural, maior que 1 e apenas divisível por si próprio e por 1;

*/
let num = 17;
let divisoes = 0;

for(let i = 1; i <= num; i++) {

  if(num % i == 0) {
    divisoes++;
  }

}

if(divisoes == 2) {
  console.log(`O número ${num} é primo`);
} else {
  console.log(`O número ${num} não é primo`);
}



/*
let num = 17;
let divisoes = 0;

for(let i = 1; i <= num; i++) {

  if(num % i == 0) {
    divisoes++;
  }

}

if(divisoes == 2) {
  console.log(`O número ${num} é primo`);
} else {
  console.log(`O número ${num} não é primo`);
}

//chatgpt a baixo 

function isPrimeNumber(num) {
  // Verifica se o número é menor ou igual a 1, que não é primo
  if (num <= 1) {
    return false;
  }

  // Verifica se o número é divisível por qualquer número de 2 até a raiz quadrada do número
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      // Se for divisível, não é primo
      return false;
    }
  }

  // Se não foi divisível por nenhum número, é primo
  return true;
}

// Exemplos de uso
console.log(isPrimeNumber(7));   // Saída: true (7 é primo)
console.log(isPrimeNumber(12));  // Saída: false (12 não é primo)
console.log(isPrimeNumber(2));   // Saída: true (2 é primo)
console.log(isPrimeNumber(1));   // Saída: false (1 não é primo)
*/