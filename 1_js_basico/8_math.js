/***********************************MATH**********************************/

//Math é um objeto em js em que podemos utilizar alguns métodos dele para executar operações matemáticas
let n0 = 9.54641;

//Arredonda o número para baixo
let n1 = Math.floor(n0); 
console.log(n1);

//Arredonda o número para cima
let n2 = Math.ceil(n0); 
console.log(n2);

//Arredonda o valor para a casa mais próxima
let n3 = Math.round(n0); 
console.log(n3);

//Retorna o menor número de uma lista
console.log(Math.min(10,485,5,654,56,5,46,0.5)); 
//Retorna o menor número de uma lista
console.log(Math.max(10,485,5,654,56,5,46,0.5,1000)); 

// Retorna um número aleatório abaixo de 1
console.log(Math.random());