const numeros = [1, 2, 3, 4, 5, 6,7,8 ,9, 10 ];

for (let numero of numeros){

    if (numero === 2){
        console.log('Pulei o número 2');
        //Quanto chegar no continue ele volta para o for sem executar o console.log
        continue;
    }

    if (numero === 7){
        console.log('Parei no 7');
        //Quanto chegar no break ele sai do laço for
        break;
    }
    console.log(numero);
}