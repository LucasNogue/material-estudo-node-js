/***********************************VALORES PRIMITIVOS**********************************/

//Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valor

let a = 'A';
//o b copia o valor de a
let b = a; 
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

//Tipo de dado passado por referência (Mutável) - array, object, function
//Neste caso diferente dos tipos primitivos tanto c quanto d ocupam o mesmo espaço na memória
let c = [1, 2, 3]; 
let d = c;

//possuem o mesmovalor
console.log(c, d);

//adicionamos mais um valor no array de c onde o d tem referência
c.push(4);

//ambos os valores mudaram
console.log(c,d);

//Podemos deixar de apontar para o mesmo espaço na memória com os tipos de dados mutáveis, exemplo abaixo:

const e = {
    nome:'Luiz',
    sobrenome: 'Santos'
};

//Nessa atribuição ele não aponta para o mesmo espaço na memória e só copia
const f = {...e}; 
console.log(f);