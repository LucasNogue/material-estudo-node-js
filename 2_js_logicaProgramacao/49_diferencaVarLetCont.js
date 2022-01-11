const verdadeira = true;

// let tem escopo de bloco { ...bloco}
//A engine do js procura a variavel primeiro dentro do seu bloco dps ela sai para procurar em outro escopo
// var só tem escopo de função

let nome = 'Luiz'; // criando
var nome2 = 'Luiz';

if (verdadeira){
    let nome = 'Otavio'; //criando dentro deste bloco
    console.log(nome, nome2);

    if (verdadeira){
        console.log('Ok');
        let nome = 'Outra coisa'; //criando dentro deste bloco
        console.log(nome, nome2);
    }
}

