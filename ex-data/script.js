const data = new Date();

let dia = zeroEsquerda(data.getDate());
let mes = data.getMonth();
let ano = zeroEsquerda(data.getFullYear());
let hora = zeroEsquerda(data.getHours());
let min = zeroEsquerda(data.getMinutes());
let seg = zeroEsquerda(data.getSeconds());
let diaSemana = data.getDay();

function getWeekText(diaSemana) {
    
    let diaSemanaTexto;

switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo'
    break;
    case 1:
        diaSemanaTexto = 'Segunda-feira'
    break;
    case 2:
        diaSemanaTexto = 'Terça-feira'
    break;
    case 3:
        diaSemanaTexto = 'Quarta-feira'
    break;
    case 4:
        diaSemanaTexto = 'Quinta-feira'
    break;
    case 5:
        diaSemanaTexto = 'Sexta-feira'
    break;
    case 6:
        diaSemanaTexto = 'Sábado'
    break;
    default:
        diaSemanaTexto = ''
    }
    return diaSemanaTexto;
}
function getMestexto(mes) {
    let mesTexto;
switch(mes){
    case 1:
        mesTexto = 'Janeiro'
    break;
    case 2:
        mesTexto = 'Fevereiro'
    break;
    case 3:
        mesTexto = 'Março'
    break;
    case 4:
        mesTexto = 'Abril'
    break;
    case 5:
        mesTexto = 'Maio'
    break;
    case 6:
        mesTexto = 'Junho'
    break;
    case 7:
        mesTexto = 'Julho'
    break;
    case 8:
        mesTexto = 'Agosto'
    break;
    case 9:
        mesTexto = 'Setembro'
    break;
    case 10:
        mesTexto = 'Outubro'
    break;
    case 11:
        mesTexto = 'Novembro'
    break;
    case 12:
        mesTexto = 'Dezembro'
    break;
    default:
        mesTexto = '';
    }
    return mesTexto;
}
function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

const diaSemanaTexto = getWeekText(diaSemana)

const textoh1 = document.querySelector('.data');
textoh1.innerHTML = `${getWeekText(diaSemana)}, ${dia} de ${getMestexto(mes)} de ${ano} ${hora}:${min}:${seg}`;
console.log(getMestexto(mes));
    