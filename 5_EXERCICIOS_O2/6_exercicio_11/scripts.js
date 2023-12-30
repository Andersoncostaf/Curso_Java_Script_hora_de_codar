

//let velocidadeCarro = 50;
let idade = 82;
let cnh = false;

if(idade >= 18 && cnh == true ){
    console.log(`Usuário pode dirigir, pois tem ${idade} anos e cnh ativa`);
} else if(idade >= 18 && cnh == false){
    console.log(`A idade é maior que 18, ${idade} anos, mas não possui cnh ativa`)
} else {
    console.log("Não pode dirigir !!!! ");
}