/***********************************WINDOW**********************************/

//Window é um objeto, podemos trabalhar acessando as funções desse objeto (métodos);

/*
window.alert("Salve");
window.confirm("Confirma ae");
window.prompt("Digite o número");
*/
//Exemplo abaixo:
let n1 = window.prompt("Digite o número 1");
let n2 = window.prompt("Digite o número 2");

//Convertendo os valores
n1 = Number(n1); 
//Convertendo os valores
n2 = Number(n2);

const total = n1 + n2;

window.alert(`O total é: ${total}`)

