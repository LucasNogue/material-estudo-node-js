//Parâmetros
//* A função definida com function possui uma váriavel (arguments) que sustenta todos os argumentos passados

//Não foi passado parametros
function funcao1(){
//Utilizando a variavel arguments para acessar os valores
    console.log(arguments[0]);
}
//Inserindo argumentos na função mesmo ela n possuindo parametros 
funcao1(0,1,2,3,4,5,6,7,8,9,10);

//*Se nem todos os valores pedidos dentro da função forem passados nos argumentos a variavel ficará como undefined
function funcao2(a, b, c){
//C é undefined
console.log(a, b, c);
};
funcao2(1,2);

//*Inserindo valor aos parametros para caso eles não sejam enviados nos argumentos
//Nesse exemplo abaixo se o valor de b não for enviado ele será = 0
function funcao3(a, b = 0){
    console.log(a + b); 
};
funcao3(5);

//*Podemos utilizar desestruturacão com objetos e arrays em funções
//Exemplo com objetos
function funcao4({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

const obj ={
    nome: 'Lucas',
    sobrenome:'Nogueira',
    idade:18
};
funcao4(obj)

//Exemplo com arrays
function funcao5([nome, sobrenome, idade]){
    console.log(nome, sobrenome, idade);
}

const array = ['Luan','Nogueira',17]
funcao5(array)


const conta =(...args) =>{
    console.log(args);  
}

conta('+',1,20,30,40);