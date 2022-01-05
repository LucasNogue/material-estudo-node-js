/***********************************EXERCICIO COM FUNÇAO, ARRAY E OBJETOS**********************************/

function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas= [];

    //Maneira antiga de parar um evernto
   /* form.onsubmit = function(evento){
        evento.preventDefault();
        alert(1);
        console.log("teste");
    }
    */
   
    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        console.log(nome.value, sobrenome.value, peso.value, altura.value);

        pessoas.push ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: altura.value,
            altura: altura.value
        });
        console.log(pessoas);


        resultado.innerHTML+= `<p> Nome: ${nome.value} ${sobrenome.value} Peso:${peso.value} Altura:${altura.value}</p> `
    }

    //Maneira atual
    form.addEventListener('submit', recebeEventoForm);

};

meuEscopo();