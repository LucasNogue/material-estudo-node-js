//Declaração de funções
/*
Quando a função é declarada o motor do js eleva essas declarações para o topo do arquivo
,ou seja, não terá problema chamar a função antes de sua declaração.

exemplo:
*/

//chamando função
falaOi();

//função declarada em baixo
function falaOi(){
    console.log('oi')
};

/*  First-Class objects (objetos de primeira classe), ou seja, podemos tratar ela como um dado
passando o valor para uma função, retorna de outra função
*/

// Function expression

//Atribuindo uma função em uma variável 
//A variável se torna uma função
const souUmDado = function (){
    console.log('Sou um dado');
};
//podemos executar ela como uma função normal
souUmDado();


//Criando umma função que recebe uma outra função como parametro 
function executaFuncao(funcao){
    funcao();
}
//executando funcao
executaFuncao(souUmDado);


//Arrow Function
// É outra maneira de function expression só que mais curta
const funcaoArrow = () => {
    console.log('Sou uma arrow Function')
};
funcaoArrow();


//Função dentro de um objeto
const obj ={
    falar: function() {
        console.log('Estou falando...');
    }
};

obj.falar();