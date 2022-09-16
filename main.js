
function exibir(x) { console.log(x) }

function tocar(id_Som) {
    const audio=document.querySelector(id_Som);
    
    if(audio && audio.localName==='audio')
    { audio.play(); }
    else { exibir('Audio ou seletor inválido') }
}

const vTecla=document.querySelectorAll('.tecla'); // vetor Tecla

for(var i=0; i<vTecla.length; i++) {
    let tecla=vTecla[i];
    let botao=tecla.classList[1];
    let idSom=`#som_${botao}`;
    //exibir(botao);

    tecla.onclick = function() { tocar(idSom) };

    tecla.onkeydowm = function(evento) {
                        if(evento.code==='Space'||evento.code==='Enter')
                        {
                            tecla.classList.add('ativa');
                        }
                        
                    }
    tecla.onkeyup = function(evento) {
                        if(evento.code==='Space'||evento.code==='Enter') {
                            tecla.classList.remove('ativa');
                        }
                    }
}
