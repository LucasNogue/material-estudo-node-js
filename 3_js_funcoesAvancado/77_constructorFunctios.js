//Função construtora retorna -> objetos
//Função construtora -> objetos
//Construtora inicia com letra maíuscula = Pessoa (new)

function Pessoa(nome, sobrenome){

    //Atributos ou métodos privados (não podem ser acessadas fora da função)
    const ID = 123456;
    const metodoInterno = function(){

    };

    //Atributos ou métodos públicos (não podem ser acessadas fora da função)
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function (){
        console.log(this.nome +' '+ this.sobrenome +' : Sou um método');
    };
}

const p1 = new Pessoa('Lucas', 'Nogueira');
const p2 = new Pessoa('Luan', 'Nogueira');

p2.metodo();