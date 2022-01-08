/***********************************OPERADORES ARITMETICOS**********************************/

/*
adição = +
subtração = -
divisap = /
multiplicação = *
potencia = **
resto = %

incremento = ++
decremento = --

NaN = Not a Number
*/

let number = 3;
let multiplicador = 2;

number *= multiplicador;
//console.log(number); 

//Nessa situação por conta da string o js concatena os números, apenas com soma
let n1 = 5;
let n2 = '2';
total = n1 + n2;
console.log(total);

//Já nesse caso o js tenta resolver o problema de tipo e converte o n3 de string para number e realiza a multiplicação
let n3 = 5;
let n4 = '2';
total2 = n3 * n4;
console.log(total2);