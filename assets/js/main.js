function relogio(){

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'

    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let timer;
let segundos = 0;

function iniciaRelogio(){
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)}

    document.addEventListener('click', function(e) {
        const elemento = e.target;

        if(elemento.classList.contains('iniciar')) {
            relogio.classList.remove('timer-vermelho');
            clearInterval(timer);
            iniciaRelogio();
        }

        if(elemento.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('timer-vermelho');
        }

        if(elemento.classList.contains('zerar')) {
            relogio.classList.remove('timer-vermelho')
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    })
}

relogio();