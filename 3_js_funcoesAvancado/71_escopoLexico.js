//Escopo léxico

let nome = 'Lucas';

function mostraNome(){
    //É possível acessar qualquer tipo de variável que não esteja no escopo da função
    console.log(nome);
}

//Uma função que utiliza outra função
function usaMostraNome(){
    let nome ='Carlos';
    mostraNome();
}

//O resultado continua sendo Lucas, pois ele encontrou esse valor primeiro
usaMostraNome();