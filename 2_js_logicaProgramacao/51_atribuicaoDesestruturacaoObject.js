//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (OBJECTS)

const pessoa = {
    nome: ' Lucas',
    sobrenome: 'Nogueira',
    idade: 18,
    endereço: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//Atribuição normal
const nome2 = pessoa.nome;
console.log(nome2);

//Atribuição via desestruturação

const {nome: n, sobrenome:s} = pessoa;
console.log(n, s);
