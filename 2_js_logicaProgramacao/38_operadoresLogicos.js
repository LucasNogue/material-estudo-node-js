/*
Operadores lógicos

&& -> AND -> E
|| -> OR -> OU
! - NOT -> NÃO
*/

//EXEMPLO AND
//Todas as condições devem ser atendidas
const expressaoAnd = true && true && false && true;
console.log(expressaoAnd);

//EXEMPLO OR
//Uma das condições deve retorna true
const expressaoOr = false || true;
console.log(expressaoOr);

//EXEMPLO NOT
//Estou negando o false, ou seja, retorna true
console.log(!false);