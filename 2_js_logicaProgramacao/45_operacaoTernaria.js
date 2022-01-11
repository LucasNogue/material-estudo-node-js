//OPERADOR TERNARIO

const pontuacaoUsuario = 99;


//If normal
if  (pontuacaoUsuario >= 1000){
    console.log('Usuário VIP');
}else {
    console.log('Usuário normal');
}

//Operador ternario 
/* 
(condicao) pode ou n estar em parenteses
? 'Valor verdadeiro'
: 'Valor falso' 
*/

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUsuario);