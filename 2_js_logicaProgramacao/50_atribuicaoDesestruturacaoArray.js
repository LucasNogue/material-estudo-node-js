//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (ARRAYS)

let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

//Nesse tipo de atribuição para cada indice do array temos uma variavel
const letras = [1,2,3]; 
[a, b, c] = letras;

console.log(a, b, c);   


////OUTRO EXEMPLO///////

const numeros = [ 1, 2, 3, 4, 5];
const [primeiroNumero, segundoNumero] = numeros;
console.log(primeiroNumero, segundoNumero);