/***********************************FUNÇOES**********************************/

//Declarando uma função
//nome é um parametro
function saudacao(nome){

    //Retornando um valor
    return `Bom dia ${nome}`;
}
//Atribuindo o retorno em uma variavel, "Lucas" é um argumento enviado para o parametro
const variavel = saudacao("Lucas"); 
//Exibindo o valor da variavel
console.log(variavel); 

//Parametro e argumento NÃO são a mesma coisa
function soma (x, y){
    const resultado = x + y;
    return resultado;
}
console.log(soma(2,1));

//Função anonima
const raiz = function(a){
    const resultado = a ** 0.5;
    return resultado;
};
console.log(raiz(9));

//El function
const raiz2 = n  => n ** 0.5;
console.log(raiz2(16));