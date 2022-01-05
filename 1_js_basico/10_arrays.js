/***********************************ARRAYS**********************************/

//ARRAYS

//Declarando um array
const nomes = ['Lucas', 'Luan', 'Adriana', 'Denise', 'Denis', 'Marta','espaço vazio']; //Isso é um array

//Alterando o valor do indice 6
nomes[6] = 'Leo'; 
//Adiciona mais um valor no final do array
nomes.push('Carlos');
//Adiciona mais um valor no começo do array
nomes.unshift('Denilson'); 

//Remove um elemento no final do array
//nomes.pop() 
//Remove um elemento no final do array e salva em uma variavel 
//const nomeExcluido = nomes.pop()    
//Remove um elmento no começo do array
//nomes.shift()
//Remove o primeiro elemento do array e salva em uma variavel
//const aa =nomes.shift(); 

delete nomes[9];
console.log(nomes);
 //Retorna o tamanho do array
console.log(nomes.length);
//O array é considerado um objeto
console.log(typeof nomes); 
//Retorna true se for um array
console.log(nomes instanceof Array); 
console.log(nomes[1]);