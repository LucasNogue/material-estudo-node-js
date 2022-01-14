/***********************************REVISÃO DE ARRAYS**********************************/

//Declarando um array
//               0        1         2         3         4
const nomes = ['Lucas', 'Luan', 'Adriana', 'Denis', 'Denise'];
//Declarando um array com construtor
const nomes2 = new Array('Jorge', 'Eduarda', 'João');

//Trocando o indice 0
nomes[0]='Carlos';
//Excluindo o indice 0 (fica vazio)
delete nomes[0];
console.log(nomes);
console.log(nomes2);

/*
Como os arrays utilizam cópias por referencia se vc alterar um altera o outro tbm mas se 
copiarmos utilizando o spread operator como no exemplo abaixo não iremos afetar os dois 
arrays com a mundaça
*/
//Exemplol:
const copia = [...nomes];

console.log(copia);
console.log(nomes);

//Verificar o tamanho
//Ops: como length não é um método e sim um atributo não utilizamos ();
console.log(nomes.length);


//pop()
//Com o método pop() o último indice é retirado
const carros = ['carro0','carro1','carro2'];
const removido = carros.pop();
console.log(carros,removido);

//shift()
//Com o método shift() o primeiro indice é retirado
const motos = ['moto0','moto1','moto2'];
const removido2 = motos.shift();
console.log(motos,removido2);

//push()
//Adiciona um indice no final
motos.push('moto3');
console.log(motos);

//unshift()
//Adiciona um indice no começo do array
carros.unshift('carro0.1');
console.log(carros);

//slice()
//Divide o array
const dividir = ['pedaço0','pedaço1','pedaço2','pedaço3','pedaço4']
const porcãoArray = dividir.slice(0,2);
console.log(porcãoArray);

//split()
//Separar uma string em partes em um array
const pessoa = 'Lucas da Silva Nogueira';
const nomeSeparado = pessoa.split(' ');
console.log(nomeSeparado);

//join()
//Junta os valores de um array
const nomeJunto = nomeSeparado.join(' ');
console.log(nomeJunto);