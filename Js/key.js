//função escuta teclado
function tecla (event) {
    var regex = /[a-z]/;
    var digitado = regex.test(event.key);

    if (digitado) {
        var letradigitada = regex.exec(event.key);
        if (letradigitada.index === 0){
            var letra = event.key.toLocaleUpperCase();
            console.log(letra)
        }   
    }
    
    validarLetra(letra);
    
};
// função de conecção do jogo...
function validarLetra(digito) {
    letrasSeparada.includes(digito);
    if (letrasSeparada.includes(digito)) {
        letrasCorretas.push(digito);
        indicePosicao.splice(0,14,);
        validaPosicao(digito);
        //console.log(indicePosicao)
        desenhaLetraCorreta(digito);
        console.log(letraAcertada);//
        
        vitoria(digito);
        
        
    } else if (digito !== undefined && !letrasIncorretas.includes(digito)){
        letrasIncorretas.push(digito);
        console.log(letrasIncorretas);//
        desenhaLetraIncorreta(digito);
        derrota();
    }
};