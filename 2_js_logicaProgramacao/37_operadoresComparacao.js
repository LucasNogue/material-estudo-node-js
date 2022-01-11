/*
Operadores de comparação
> maior que 
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) - não utilizar
===igualdade estrita (valor e tipo)
!== diferente estrito (valor e tipo)
!= igualdade (valor) - não utilizar

*/ 
//Exemplo para mostrar o pq não usar "==" ou "!="
const n1 = 20;
const n2 = '20';

const resultado = n1 == n2;
//O resultado é true mesmo n1 sendo number e n2 string
console.log(resultado);
const aaaa = "aaaaa";