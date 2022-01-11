//TRY CATCH e THROW


//try catch simples
//Vai tentar executar o try caso não consiga cai no catch

try{
    console.log(variavel);
}catch(error){
    console.log('variavel não existe');
}

////////////////////////////////

function soma (x,y){
    if( typeof x !== 'number' || typeof y !== 'number'){
        //Com o throw e o new ReferenceError
        throw new ReferenceError('X e Y precisam ser números');
    }
    return x + y;
}

try{
    console.log(soma(2, 5));
    console.log(soma('2', 5));
    
}catch(error){
    
    //console.log(error);
    console.log('Algumaa coisa mais amigavel para o usuário');
}
