//SPLICE1//
/*mudar isso -> faz varias funcoes de varios métodos

1° argumento = qual indice vai ser o primeiro a ser alterado 
2° argumento = quantos elementos quero remover do array
3° em diante elementos para adicionar
array.splice(1,2,3)
*/

//                -5        -4       -3        -2       -1                   
const arraySplice = ['elemento1','elemento2','elemento3','elemento4'];
const removidos = arraySplice.splice(4,1);
console.log(arraySplice, removidos);

//Trabalhando com índices negativos
//O índice negativo começa a ser contado do último elemtento para o primeiro
const removidos2 = arraySplice.splice(-1,1);
console.log(arraySplice,removidos2);

//Exemplo2
//Deletando todos os arrays
//                       4-          3-         2-           1-
const arrayDelete = ['elemento1','elemento2','elemento3','elemento4'];
const deletado = arrayDelete.splice(-4,Number.MAX_VALUE);
console.log(deletado);

//Exemplo3
//Adicionando elementos
const arrayAdicionado = ['elemento1','elemento2','elemento3','elemento4'];
const adicionado = arrayAdicionado.splice(-1,0,'motoNova');
console.log(arrayAdicionado, adicionado);

//Simulandos outros métodos
//pop()
const arrayPop = ['elemento1','elemento2','elemento3','elemento4'];
//Deletando o último elemento
const ultimoDeletado = arrayPop.splice(-1,1);
console.log(arrayPop, ultimoDeletado); 

//shift()
const arrayShift = ['elemento1','elemento2','elemento3','elemento4'];
//Deletando primeiro elemento
const primeiroDeletado = arrayShift.splice(0,1);
console.log(arrayShift, primeiroDeletado);

//push()
//Nesse caso a melhor opção é usar o push mesmo
const arrayPush = ['elemento1','elemento2','elemento3','elemento4'];
//Adiciona um ou mais elementos ao final do array
arrayPush.splice(arrayPush.length,0,'elemento5');
console.log(arrayPush);

//unsifth()
const arrayUnshift = ['elemento1','elemento2','elemento3','elemento4'];
//Adiciona um ou mais elementos no final do array
arrayUnshift.splice(0,0,'elemento 0');
console.log(arrayUnshift);

///////////////////////////////////////////LEMBRETE///////////////////////////////////////////
 
//VERIFICAR A EXPLICACAO DE TODOS OS ARQUIVOS, SE USA A PALAVRA ELEMENTO PARA SE REFERIR AO VALOR DO INDICE DE UM ARRAY  