// Factory function (funções de Fábrica)

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome: nome,
        sobrenome: sobrenome,
        altura: altura,
        peso: peso,
        //Qunado temos uma função dentro de um objeto a função tem o nome de método
        fala: function(assunto){
        //this se refere a quem chamar o objeto
            return `${this.nome} está ${assunto}`
        },

        //Outra forma de criar um método
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
        //podemos fazer com que o método se comporte como um atributo
        //para isso usamos a palavra get no inicio da declaração
        //o nome disso é Getter
        get nomeCompleto(){
           return `Esse é o nome completo: ${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
    };
}

//Atibuindo em uma variavél o retorno da função
const p1 = criaPessoa('Lucas', 'Nogueira',1.80,80);
//Acessando o método imc por denotação
console.log(p1.imc());

//Acessando o método fala e passando argumentos para a função
console.log(p1.fala('falando sobre JS'));

//Aqui temos um método que está sendo chamado como um atributo
//Como atributo
console.log(p1.nomeCompleto);
//Como método
//console.log(p1.nomeCompeto());
p1.nomeCompleto = 'Maria Adriana Silva';
console.log(p1.nomeCompleto);

