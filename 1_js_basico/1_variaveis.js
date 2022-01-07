/***********************************VARIÁVEIS**********************************/

//Podemos criar variáveis utilizando: let, var e const.
//Sempre usar let ou const (prioridade para const).

//--------------------let------------------------------
//Declarando e Iniciando a variável
let nome = 'Lucas'; 

//Declarando a variável
let nome2;

//iniciando a variável
nome2 = 'Carlos'; 

//O código abaixo gera um erro pq nao podemos redeclarar a variável
//let nome = 'joao'; 

//Exibindo as variáveis com uma string
console.log(nome,'está feliz hoje');
console.log(nome2,'está feliz hoje');

//------------------- const----------------------------

//Declarando e iniciando uma variável com const
const sobrenome = 'Nogueira'; 

//Esse código gera um erro pq não podemos alterar o valor do const
//const sobrenome = 'Junior'; 

console.log(sobrenome);

const n1 = 10;
const n2 = 20;

const total = n1 + n2;

//O typeof descobre o tipo da variável
console.log(typeof total);
console.log(total);