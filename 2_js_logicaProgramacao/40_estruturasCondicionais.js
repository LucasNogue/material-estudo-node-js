/*
ESTRUTURAS CONDICIONAIS
IF e ELSE

If pode ser usado sozinho
Sempre que utilizo a palavra else, preciso de um if
Eu posso ter várias else ifs na checagem
Só posso ter else na checagem 
Podemos usar condições sem else if, utilizando apenas if e else

Exemplo abaixo:

Entre 0 - 11 = Bom dia
Entre 12 - 17 = Bom dia
Entre 18 - 23 = Bom dia
*/

const hora = 22;

if (hora >= 0 && hora <= 11  ){
    console.log("Bom dia");
}else if (hora >= 12 && hora <= 17){
    console.log("Boa tarde");
}else if (hora >= 18 && hora <= 23){
    console.log("Boa noite");
}else {
    console.log("Olá");
}



