let consoleTeste = () => {
  console.log("Olá mundo ");

};

consoleTeste();

let soma = (a,b) => {
  return a + b;
};

console.log(soma(10,20));

// veha esse outro exemplo 


function funcaocomArrowFunction() {
  this.valor = 1;

  setTimeout(() =>{
    this.valor++;
    console.log(this.valor);// isso resultará em 2
  }, 1000);
}

new funcaocomArrowFunction();

