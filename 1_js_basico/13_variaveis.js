/***********************************VARIAVEIS**********************************/

//Podemos criar variaveis utilizando: let, var e const.
//Sempre usar let ou const (prioridade para const).

//--------------------let------------------------------
//Declarando e Iniciando a variavel
let nome = 'Lucas'; 

//Declarando a variavel
let nome2;

//iniciando a variavel
nome2 = 'Carlos'; 

//O código abaixo gera um erro pq nao podemos redeclarar a variavél
//let nome = 'joao'; 

//Exibindo as variaveis com uma string
console.log(nome,'está feliz hoje');
console.log(nome2,'está feliz hoje');

//------------------- const----------------------------

//Declarando e iniciando uma variavel com const
const sobrenome = 'Nogueira'; 

//Esse código gera um erro pq nao podemos alterar o valor do const
//const sobrenome = 'Junior'; 

console.log(sobrenome);

const n1 = 10;
const n2 = 20;

const total = n1 + n2;

//O typeof descobre o tipo da variavel
console.log(typeof total);
console.log(total);