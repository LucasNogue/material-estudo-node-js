//SWITCH CASE

const data = new Date('1987-04-26 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break; 
    default:
        diaSemanaTexto = '';
        break; 
}
console.log(diaSemanaTexto);