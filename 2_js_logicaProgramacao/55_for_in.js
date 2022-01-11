// FOR IN
 

//Com o for in retornamos o indice
const frutas = ['Pera','Maçã', 'Uva'];

//For normal
for (let i = 0; i< frutas.length; i++){
    console.log(frutas[i]);
}


// Exemplo de for in
//puxando o nome pelo indice
for (let i in frutas){
    console.log(frutas[i]); 
    //console.log(i); 
}