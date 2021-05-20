
const form = document.querySelector('#form');

// Prevenir que ao acionar o Submit, atualize a página.
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //Se Algum dado no input for diferente de Number o setResultado recebe uma mensagem de erro
    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }
    if (!altura){
        setResultado('Altura Inválida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    setResultado(msg, true);
});

//Array com os tipos níveis de imc
function getNivelImc(imc){
    const nivel = ['Abaixo peso', 'Peso normal', 'Acima do peso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III']

if(imc >= 39.9){
    return nivel[5];
}
if (imc >= 34.9){
    return nivel[4];
}
if (imc >= 29.9){
    return nivel[3];
}
if (imc >= 24.9){
    return nivel[2];
}
if (imc >= 18.5){
    return nivel[1];
}
if (imc < 18.5){
    return[0];
}
}

//Função para calcular o  IMC
function getImc(peso, altura){
    const imc = peso / (altura**2);
    return imc.toFixed(2);
}

//Função para criar parágrafo
function criaP(){
    const p = document.createElement('p');
    return p;
}

//Função  para mostrar resultado. (mensagem e se é válido ou não)
function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = '';

    const p = criaP();
    
    if (isValid){
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}
