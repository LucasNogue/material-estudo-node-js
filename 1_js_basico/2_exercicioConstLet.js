/***********************************EXERCICIO COM CONST E LET**********************************/

//Faça com que a mensagem abaixo apareça no terminal:
/* 
Lucas Nogueira tem 18 anos, pesa 80kg
tem 1.8 de altura e seu IMC é de 24.66
Lucas Nogueira nasceu em 2003
*/

const nome = 'Lucas';
const sobrenome = 'Nogueira';
const peso = 80;
const idade = 18;
const altura = 1.80;
let imc;
let nascimento = 2021 - idade;

imc = peso / (altura*altura);
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} tem ${altura} altura e seu IMC é ${imc} ${nome} nasceu em ${nascimento}`);