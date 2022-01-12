//FUNCTION GERADORA
//Vai executar uma parte do código (yield) toda vez que for chamado
//Return não é utilizado porque termina a execução da função

function* geradora1(){
    
    yield 'Valor1';
    //
    yield 'Valor2';
    //
    yield 'Valor3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());



//Gerador infinito
function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


//Delegar parte  da função de um gerador em outro

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* gerador4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = gerador4();
for(let valor of g4){
    console.log(valor);
}

//usando outra coisa além de número

function* geradora5() {
    yield function() {
        console.log('vim do y1');
    };

    //Se tivesse um return a função terminaria aqui

    yield function(){
        console.log('Vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();