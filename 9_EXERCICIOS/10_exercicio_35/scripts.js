const calc = {
  soma: function(a,b) {
    return a + b;
  },
  subtrair: function(a,b) {
    return a - b;
  },
  multiplicar: function(a,b) {
    return a * b;
  },
  dividir: function(a,b) {
    return a / b ; 
  }
}
//3232323
console.log(calc.soma(5,5));
console.log(calc.subtrair(5,2));
console.log(calc.multiplicar(10,2));
console.log(calc.dividir(8,2));

//outro
const calculadora = {
  soma: function(a, b) {
    return a + b;
  },
  subtrair: function(a, b) {
    return a - b;
  },
  multiplicar: function(a, b) {
    return a * b;
  },
  dividir: function(a, b) {
    return a / b;
  }
}

console.log(calculadora.soma(3,4));
console.log(calculadora.subtrair(5,5));
console.log(calculadora.multiplicar(8,2));
console.log(calculadora.dividir(5,2));