/*
Return
- retorna um valor
- termina uma função

*/

//Exxemplo 1: Retorna a soma de a + b
function soma(a, b){
    return a + b;
}

//Exemplo 2: não retorna nada apenas EXIBE a soma de a + b
function soma2(a, b){
    console.log(a + b);
}

console.log(soma(2, 5));
soma2(5, 2);


//*Usar outras funções dentro de função
function criaMultiplicador(multiplicador){
    // Multiplicador
    return function(n){
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(3));
console.log(quadriplica(3));

