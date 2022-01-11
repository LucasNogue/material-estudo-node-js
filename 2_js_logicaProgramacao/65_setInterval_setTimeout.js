//SetInterval
//Executa um bloco específico repetidamente com um intervalo fixo entre cada chamada

function mostraHora(){
    //Pegando a data e hora atual
    let data = new Date(); 
    //formatando a data
    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

//Executa o código em um intervalo de tempo e atribuindo o resultado em uma variavél
const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

//setTimeout
//Executa um bloco específico uma vez depois de um determinado tempo.
setTimeout(function(){
    clearInterval(timer);
}, 4000);

//Executando um 'Olá mundo' depos de 5s
setTimeout(function(){
    console.log('Olá mundo')
},5000); 
