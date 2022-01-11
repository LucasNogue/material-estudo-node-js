//TRY CATCH FINALLY
//Finally é um bloco do Try Catch que sempre será executado
/*
try{
//erro
console.log(a);
console.log('Abri um arquivo');
console.log('Manipulei um arquivo');
console.log('Fechei o arquivo');
}catch{
console.log('Tratando o erro');
} finally {
    console.log('finally:Como o programa deu erro vou fechar o arquivo');
}
*/
//exemplo mais complicado

function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Espera instância de date.');
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
}catch(e) {
   console.log(e); 
}finally{
    console.log('Tenha um bom dia.');
}