//IIFE -> Immediately invoked function expression

//Exemplo de uma função invocada automaticamente
(function(){
    console.log('fon');
})();

//Exemplo mais complexo
(function(idade, peso, altura){

    const sobrenome = 'Nogueira';
    function criaNome(nome){
        return nome + '' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }
    
    falaNome();
    console.log(idade, peso, altura);

})(30, 80, 1.80);