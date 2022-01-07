/***********************************OBJETOS **********************************/

//Criando um objeto
const pessoa = { 
    nome:'Lucas',
    sobrenome:'Nogueira',
    idade: 18
};

//Exibindo o objeto completo
console.log(pessoa);
//Exibindo o atributo nome do objeto pessoa
console.log(pessoa.nome);
//Exibindo o atributo sobrenome do objeto pessoa
console.log(pessoa.sobrenome);
//Exibindo o atributo idade do objeto pessoa
console.log(pessoa.idade);

//CRIANDO UMA FUNÇÃO QUE CRIA UM OBJETO
function criarPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

//Atribuindo o valor da função com o objeto em uma variável
const pessoa1 = criarPessoa("Carlos", "Santos", 26);
//Exibindo a variável
console.log(pessoa1);


//CRIANDO UMA VARIÁVEL E ATRIBUILDO UM OBJETO QUE TERÁ UM MÉTODO
const pessoa5 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,

//Funções dentro de objetos se são denominadas como métodos
//Criando um método
    fala(){
        console.log(`A minha idade atual é: ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

//Executando o método
pessoa5.fala();
pessoa5.incrementaIdade();
pessoa5.fala();

