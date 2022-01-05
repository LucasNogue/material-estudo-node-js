/***********************************EXERCICIO COM MATH**********************************/

//Utilize math para manipular o número que foi enviado da página html

const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>Seu número +2 é: ${numero + 2}.<br>
Raiz quadrada: ${numero ** 0.5} <br>
${numero} é inteiro? ${Number.isInteger(numero)} <br>
Arredondado para cima ${Math.ceil(numero)} <br>
Arredondado para baixo ${Math.round(numero)} <br>
Com duas casas decimais ${numero.toFixed(2)}
</p>`;