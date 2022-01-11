//OBJECT DATE
/*
É uma função contrutora, ou seja, temos que utilizar o new
Precisa iniciar com a letra maiúscula

Extiste 3 modos de alterar a data
*/

//MODO 1
const tresHoras = 60 * 60 * 3 * 1000; 
const umDia = 60 * 60 * 24 * 1000; 
const data = new Date(0 + tresHoras + umDia ); // 01/01/1970 Timestamp unix ou época unix
console.log(data.toString());

//MODO 2
//Ano/mes, dia,horas, minutos, segundos, milésimos
//Mes 3 é abril pq o mes começa do 0  
const data2 = new Date(2019, 3, 20, 15, 14, 27, 500); 
console.log(data2.toString());

//MODO 3

const data3 = new Date('2019-05-20T20:20:59.100');
console.log(data3.toString());