/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retorna "o valor verdadeiro"


FALSY 
//Retorna falso

false
0
'' "" ``
null / undefined
NaN

*/
//EXEMPLO &&
console.log('Luiz' && NaN && 'Maria')


//EXEMPLO OR
const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);