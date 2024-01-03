// Definindo variáveis com valores numéricos
let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

// Definindo uma função chamada imprimirNumeros que aceita um número variável de argumentos (usando o operador de propagação ...)
function imprimirNumeros(...args) {
  // Iterando sobre os argumentos e imprimindo cada um
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

// Chamando a função imprimirNumeros com os argumentos num, num1 e num2
imprimirNumeros(num, num1, num2);
console.log('pausa');

// Chamando a função imprimirNumeros com os argumentos num1 e num2

