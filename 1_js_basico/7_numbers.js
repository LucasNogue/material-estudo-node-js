/***********************************NUMBERS**********************************/

//Manipulando Numbers

let n1 = 1; //number depois string
let n2 = 5; //number
let n3 = 10.5541531; //number
let n4 = 8; //number
let n5 = 20.5541531;

//Só altera o tipo no momento da exibição n1 continuar sendo number
console.log(n1.toString()+n2); 
console.log(typeof n1);

//Altera o tipo da variável permanentemente
n1 = n1.toString();
console.log(typeof n1);

//Representação binária
//console.log(n1.toString(2));

//Arredonda um número (só exibe com duas casas o número continua o mesmo)
console.log(n3.toFixed(2));

//Exibindo o verdadeiro valor
console.log(n3)

//Arredondar um número (realmente altera o valor)
n5 = Number(n5.toFixed(2));
//Mostrando que o valor foi alterado
console.log(n5)

//Verificar se o valor é um inteiro
//Retorna um boolean, true: é inteiro false: não é um inteiro
console.log(Number.isInteger(n5)); 

//Verificar se é um número
let temp = n2 * "8";
console.log(Number.isNaN(temp)); 