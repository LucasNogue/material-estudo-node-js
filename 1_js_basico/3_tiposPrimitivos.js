/***********************************TIPOS PRIMITIVOS**********************************/

/*Dados primitivos em JS (STRING, NUMBER, UNDEFINED, NULL, BOOLEAN, SYMBOL)*/ 
//EXEMPLOS
//String
const nome = 'Lucas'; 
//String
const nome1 = "Lucas"; 
//String
const nome2 = `Lucas`; 
//Number
const num1 = 10; 
//Number
const num2 = 10.5; 
//Undefined -> não aponta para local nenhum na memória (normalmente o js define como undefined por falta de informações)
let nomeAluno; 
//Null -> não aponta para local nenhum na memória (normalmente o próprio programador define como null)
const sobrenomeAluno = null; 
//Boolean = true, false (lógico)
const aprovado = false; 

//Verificando o tipo de arquivo
console.log(typeof nome, nome);