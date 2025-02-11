
//Código mais compacto, mais limpo.
const dividir = (a, b) => a / b;
console.log(dividir(8, 2)); 

//

function subtracao (numero){
    return numero - 10;
}

let resultado = subtracao(8);
console.log(resultado);

//

function dobro (numero) {
    return numero * 2;
}

console.log(dobro(10));
console.log(dobro(7));

//

function saudacao (nome) {
    console.log("Olá, " + nome + "!");
}

saudacao("Angelica");

//

function responder (nome) {
    console.log("Meu nome é " + nome + ".");
}

responder("Anderson");

//

function operacao (numero) {
    if (numero % 2 == 0) {
        console.log(`O número ${numero} é par.`);
    } else{
        console.log(`O número ${numero} é ímpar.`);
    }
}

operacao(4);

//

function soma ( a, b ) {
    return a + b; 
}
let resposta = soma( 5, 6);
console.log(resposta);

function multiplicar (a, b) {
    return a * b;
}

let responde = multiplicar(5, 6);
console.log(responde);


    