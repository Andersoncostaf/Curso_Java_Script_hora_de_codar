// Criando um objeto representando um carro
let obj = {
  rodas: 4,
  portas: 4,
  tetosolar: true,
  motor: '2.0'
}

// Destructuring (Desestruturação) do objeto, renomeando as propriedades
const {rodas: vRodas, portas: vPortas, tetosolar: vTetoSolar, motor: vMotor} = obj;

// Imprimindo as propriedades desestruturadas
console.log(vRodas); // Saída: 4
console.log(vPortas); // Saída: 4
